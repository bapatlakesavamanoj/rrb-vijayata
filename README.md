# RRB Vijayata (ఆర్ఆర్బీ విజేత) - Complete Railway Exam Preparation Platform

An all-in-one, bilingual (English & Telugu) web platform and Progressive Web App (PWA) tailored for all Indian Railway Recruitment Board (RRB) competitive examinations, featuring live 2026–2027 recruitment notifications, comprehensive topic-by-topic syllabus, interactive mock tests, chapter-wise textbooks with KaTeX formulas, year-wise official previous question papers (with CEN codes), and 1-click printable PDF booklet export.

---

## 🌟 Key Features

### 1. 2026–2027 Live Job Updates & Official Annual Calendar
- **Live Notifications Hub**: Covers CEN 01/2026 (ALP), CEN 02/2026 (Technicians Gr I & III), CEN 03/2026 (Junior Engineer / Depot Material Superintendent), CEN 04/2026 (NTPC Graduate & Undergraduate), CEN 05/2026 (Level-1 / Group D), and CEN 06/2026 (Paramedical Categories).
- **Application Deadline & CBT Countdown**: Dynamic real-time countdown timer for upcoming application closures and CBT-1 exam schedules.
- **Chrome Live Notifications & Email Alerts**: Built-in support for Web Push Notifications, browser desktop alerts, and local mock SMTP email dispatcher.

### 2. Point-to-Point Updated 2026–2027 Syllabus
- Detailed breakdowns covering all major railway cadres:
  - **RRB NTPC (CBT-1 & CBT-2)**
  - **RRB ALP (Assistant Loco Pilot)**
  - **RRB Group D (Level-1)**
  - **RRB JE (Junior Engineer - Stage 1 & Stage 2)**
  - **RRB Technician (Grade I Signal & Grade III)**
- Granular topic listings with marks distribution, sectional time limits, negative marking rules (-1/3rd), and preparation strategy.

### 3. Year-Wise Official Previous Question Papers (PYQ) with CEN Codes
- **12 Shift-Wise Authentic Papers** spanning 2016 through 2024:
  - *RRB ALP & Technicians 2024 (CEN 01/2024)* - Shift 1 & Shift 2
  - *RRB Group D 2022 (CEN RRC 01/2019)* - Phase 1 Shift 1 & Shift 2
  - *RRB NTPC CBT-2 2022 (CEN 01/2019)* - Level 6 Shift 1 & Level 5 Shift 2
  - *RRB NTPC CBT-1 2020-21 (CEN 01/2019)* - Phase 1 Shift 1 & Shift 2
  - *RRB JE 2019 (CEN 03/2018)* - CBT-1 Shift 1 & Shift 2
  - *RRB ALP 2018 (CEN 01/2018)* - CBT-1 Shift 1
  - *RRB NTPC 2016 (CEN 03/2015)* - Stage 1 Shift 1
- **1-Click PDF Export**: Clean, high-resolution printable PDF output (`@media print` styled) with official watermarking, question keys, and detailed bilingual solutions.
- **Master PYQ Booklet**: Standalone HTML archive at `data/rrb-official-pyq-booklet-yearwise.html`.

### 4. Mathematics & General Science Interactive Textbook
- Chapter-by-chapter theory, shortcuts, formulas rendered with **KaTeX / LaTeX**.
- Interactive practice drills with step-by-step verified explanations.

### 5. Offline-First PWA (Progressive Web App)
- `sw.js` Service Worker for caching core assets.
- `manifest.json` for standalone desktop and mobile installation.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- Web browser (Google Chrome, Microsoft Edge, Mozilla Firefox)

### Running Locally
```powershell
# Clone the repository
git clone https://github.com/bapatlakesavamanoj/rrb-vijayata.git
cd rrb-vijayata

# Start the local server
node server.js
```
Or launch via the included PowerShell script:
```powershell
.\start-server.ps1
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📁 Repository Structure

```
RRB APP/
├── data/
│   ├── exams-and-subjects.js          # Exam configurations, subjects, and topics
│   ├── latest-jobs-data.js            # 2026-2027 Job postings and vacancy data
│   ├── math-textbook-chapters.js      # Interactive math textbook with KaTeX formulas
│   ├── notifications-data.js          # Live notifications, official CEN links & circulars
│   ├── questions-and-papers.js        # 12 Year-wise official question papers & questions
│   ├── rrb-official-pyq-booklet-yearwise.html # Master printable PYQ booklet
│   └── videos-and-ai.js               # Video lectures and AI tutor prompts
├── js/
│   ├── app.js                         # Core application controller and UI renderer
│   └── firebase-config.js             # Firebase auth/cloud storage configuration
├── index.html                         # Main responsive single-page application
├── styles.css                         # Clean UI theme, dark mode & print stylesheets
├── sw.js                              # Progressive Web App service worker
├── manifest.json                      # Web App manifest
├── server.js                          # Local Express / HTTP server
├── start-server.ps1                   # Automation server launcher script
└── README.md                          # Project documentation
```

---

## 📜 License
This project is licensed under the MIT License - feel free to use and adapt for educational purposes.
