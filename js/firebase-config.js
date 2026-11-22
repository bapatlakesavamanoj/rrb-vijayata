/* ============================================================================
   RRB VIJETHA — FIREBASE INITIALIZATION & CLOUD SYNC SERVICE
   Features:
   - Firebase Authentication (Email/Password & Google Sign-In)
   - Cloud Firestore Sync (Student Profiles, Progress, CBT Mock Scores)
   - Graceful Offline / Local Mode Fallback (Works with or without cloud credentials)
   - Browser Runtime Compatible (Zero-build CDN SDK support)
   ============================================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'rrb_vijetha_firebase_config';

  // Default / Template Firebase Project Configuration
  // Students and admins can paste their Firebase project keys in the app settings modal
  const defaultFirebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  };

  let firebaseApp = null;
  let authInstance = null;
  let firestoreInstance = null;
  let isInitialized = false;
  let currentFirebaseUser = null;
  let authListeners = [];

  function loadSavedConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return Object.assign({}, defaultFirebaseConfig, parsed);
        }
      }
    } catch (e) {
      console.warn('[Firebase] Could not load saved config from localStorage', e);
    }
    return Object.assign({}, defaultFirebaseConfig);
  }

  function saveConfig(cfg) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
      return true;
    } catch (e) {
      console.warn('[Firebase] Could not save config to localStorage', e);
      return false;
    }
  }

  function isConfigValid(cfg) {
    return Boolean(
      cfg &&
      typeof cfg.apiKey === 'string' &&
      cfg.apiKey.trim().length > 10 &&
      !cfg.apiKey.includes('Placeholder') &&
      typeof cfg.projectId === 'string' &&
      cfg.projectId.trim().length > 2
    );
  }

  function initFirebase() {
    if (typeof window.firebase === 'undefined') {
      console.info('[Firebase] Firebase SDK not loaded in browser. Running in Offline / Local Mode.');
      return false;
    }

    const cfg = loadSavedConfig();
    if (!isConfigValid(cfg)) {
      console.info('[Firebase] No valid Firebase credentials detected. Ready for setup via Firebase Settings modal.');
      return false;
    }

    try {
      if (window.firebase.apps && window.firebase.apps.length > 0) {
        firebaseApp = window.firebase.apps[0];
      } else {
        firebaseApp = window.firebase.initializeApp(cfg);
      }

      authInstance = window.firebase.auth ? window.firebase.auth() : null;
      firestoreInstance = window.firebase.firestore ? window.firebase.firestore() : null;
      isInitialized = true;

      if (authInstance) {
        authInstance.onAuthStateChanged(user => {
          currentFirebaseUser = user;
          authListeners.forEach(cb => {
            try { cb(user); } catch (err) { console.error(err); }
          });
        });
      }

      console.log('🔥 [Firebase] Successfully connected to Firebase Project:', cfg.projectId);
      return true;
    } catch (err) {
      console.warn('[Firebase] Initialization notice:', err.message);
      isInitialized = false;
      return false;
    }
  }

  // Public API exposed on window.RRBFirebase
  window.RRBFirebase = {
    init: initFirebase,

    isReady: function () {
      return Boolean(isInitialized && authInstance);
    },

    isConfigured: function () {
      return isConfigValid(loadSavedConfig());
    },

    getConfig: function () {
      return loadSavedConfig();
    },

    saveConfig: function (newConfig) {
      const ok = saveConfig(newConfig);
      if (ok) {
        initFirebase();
      }
      return ok;
    },

    getCurrentUser: function () {
      return currentFirebaseUser || (authInstance ? authInstance.currentUser : null);
    },

    onAuthStateChanged: function (callback) {
      if (typeof callback === 'function') {
        authListeners.push(callback);
        if (isInitialized && authInstance) {
          callback(this.getCurrentUser());
        }
      }
    },

    // 1. Sign In with Email & Password
    signInWithEmail: async function (email, password) {
      if (!this.isReady()) {
        throw new Error('Firebase is not yet configured with your project credentials. Please connect your Firebase project in Settings.');
      }
      return await authInstance.signInWithEmailAndPassword(email, password);
    },

    // 2. Sign Up with Email & Password
    signUpWithEmail: async function (email, password, displayName) {
      if (!this.isReady()) {
        throw new Error('Firebase is not yet configured. Please connect your Firebase project in Settings.');
      }
      const userCredential = await authInstance.createUserWithEmailAndPassword(email, password);
      if (displayName && userCredential.user && userCredential.user.updateProfile) {
        await userCredential.user.updateProfile({ displayName });
      }
      return userCredential;
    },

    // 3. Sign In with Google
    signInWithGoogle: async function () {
      if (!this.isReady()) {
        throw new Error('Firebase is not yet configured with your project credentials. Please connect your Firebase project in Settings.');
      }
      const provider = new window.firebase.auth.GoogleAuthProvider();
      return await authInstance.signInWithPopup(provider);
    },

    // 4. Sign Out
    signOut: async function () {
      if (authInstance) {
        await authInstance.signOut();
      }
      currentFirebaseUser = null;
    },

    // 5. Sync Student Profile & Progress to Firestore
    syncUserData: async function (userData) {
      if (!firestoreInstance) return null;
      const user = this.getCurrentUser();
      if (!user) return null;

      try {
        const docRef = firestoreInstance.collection('rrb_students').doc(user.uid);
        await docRef.set(Object.assign({}, userData, {
          uid: user.uid,
          email: user.email || userData.email,
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        }), { merge: true });
        return true;
      } catch (err) {
        console.warn('[Firebase] Firestore sync notice:', err.message);
        return false;
      }
    },

    // 6. Save CBT Mock Test Result to Firestore
    saveMockResult: async function (mockData) {
      if (!firestoreInstance) return null;
      const user = this.getCurrentUser();
      if (!user) return null;

      try {
        const colRef = firestoreInstance.collection('rrb_students').doc(user.uid).collection('mock_history');
        await colRef.add(Object.assign({}, mockData, {
          timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
          dateString: new Date().toLocaleString('en-IN')
        }));
        return true;
      } catch (err) {
        console.warn('[Firebase] Firestore mock result save notice:', err.message);
        return false;
      }
    },

    // 7. Fetch Student Cloud Data from Firestore
    fetchUserData: async function () {
      if (!firestoreInstance) return null;
      const user = this.getCurrentUser();
      if (!user) return null;

      try {
        const doc = await firestoreInstance.collection('rrb_students').doc(user.uid).get();
        if (doc.exists) {
          return doc.data();
        }
        return null;
      } catch (err) {
        console.warn('[Firebase] Could not fetch user data:', err.message);
        return null;
      }
    },

    // ========================================================================
    // 8. LIVE RAILWAY NOTIFICATIONS FIRESTORE REPOSITORY
    // ========================================================================

    getLiveNotifications: async function () {
      if (!firestoreInstance) return null;
      try {
        const snapshot = await firestoreInstance.collection('railway_notifications').get();
        if (snapshot.empty) return null;
        const list = [];
        snapshot.forEach(doc => {
          list.push(Object.assign({ id: doc.id }, doc.data()));
        });
        return list;
      } catch (err) {
        console.warn('[Firebase] Could not load live notifications from Firestore:', err.message);
        return null;
      }
    },

    saveLiveNotification: async function (notifData) {
      if (!firestoreInstance) return false;
      const docId = notifData.id || (notifData.cenCode ? notifData.cenCode.toLowerCase().replace(/[^a-z0-9]/g, '-') : ('notif-' + Date.now()));
      try {
        await firestoreInstance.collection('railway_notifications').doc(docId).set(Object.assign({}, notifData, {
          id: docId,
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        }), { merge: true });
        return true;
      } catch (err) {
        console.warn('[Firebase] Could not save notification to Firestore:', err.message);
        return false;
      }
    },

    deleteLiveNotification: async function (notifId) {
      if (!firestoreInstance || !notifId) return false;
      try {
        await firestoreInstance.collection('railway_notifications').doc(notifId).delete();
        return true;
      } catch (err) {
        console.warn('[Firebase] Could not delete notification from Firestore:', err.message);
        return false;
      }
    },

    batchSyncLiveNotifications: async function (notificationsList) {
      if (!firestoreInstance || !Array.isArray(notificationsList)) return false;
      try {
        const batch = firestoreInstance.batch();
        notificationsList.forEach(notif => {
          const docId = notif.id || (notif.cenCode ? notif.cenCode.toLowerCase().replace(/[^a-z0-9]/g, '-') : ('notif-' + Date.now()));
          const docRef = firestoreInstance.collection('railway_notifications').doc(docId);
          batch.set(docRef, Object.assign({}, notif, { id: docId }), { merge: true });
        });
        await batch.commit();
        console.log(`🔥 [Firebase] Batch synced ${notificationsList.length} railway notifications to Firestore.`);
        return true;
      } catch (err) {
        console.warn('[Firebase] Batch sync notice:', err.message);
        return false;
      }
    },

    listenToLiveNotifications: function (callback) {
      if (!firestoreInstance || typeof callback !== 'function') return null;
      try {
        return firestoreInstance.collection('railway_notifications').onSnapshot(snapshot => {
          const list = [];
          snapshot.forEach(doc => {
            list.push(Object.assign({ id: doc.id }, doc.data()));
          });
          callback(list);
        }, err => {
          console.warn('[Firebase] Notifications snapshot listener error:', err.message);
        });
      } catch (e) {
        console.warn('[Firebase] Could not attach snapshot listener:', e.message);
        return null;
      }
    }
  };

  // Attempt auto-initialization on load
  document.addEventListener('DOMContentLoaded', () => {
    initFirebase();
  });
})();
