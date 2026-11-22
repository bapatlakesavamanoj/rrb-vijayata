/* ============================================================================
   RRB EXAM CATALOG, NTPC UNDERGRADUATE DETAILS & BILINGUAL SUBJECT LESSONS
   (English + తెలుగు Beginner-Friendly Curriculum)
   ============================================================================ */

window.RRB_EXAMS = [
  {
    id: 'ntpc-ug',
    code: 'CEN 06/2024 & 2026',
    nameEn: 'RRB NTPC Undergraduate (10+2 / Inter Level)',
    nameTe: 'ఆర్‌ఆర్‌బి ఎన్‌టిపిసి అండర్ గ్రాడ్యుయేట్ (10+2 / ఇంటర్ స్థాయి)',
    badge: 'FEATURED • 12th Pass',
    qualificationEn: '12th Pass (10+2 / Intermediate) with minimum 50% marks (Pass marks for SC/ST/PwBD)',
    qualificationTe: 'ఇంటర్మీడియట్ (10+2) కనీసం 50% మార్కులతో ఉత్తీర్ణత (SC/ST/PwBD అభ్యర్థులకు పాస్ మార్కులు సరిపోతాయి)',
    ageLimit: '18 – 30 Years (Relaxation: OBC +3 yrs, SC/ST +5 yrs)',
    negativeMarking: '1/3rd mark deducted for every wrong answer (-0.33)',
    stages: [
      {
        stage: 'CBT-1 (Screening Stage)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        sections: [
          { subjectEn: 'Mathematics (గణితం)', questions: 30, marks: 30 },
          { subjectEn: 'General Intelligence & Reasoning (రీజనింగ్)', questions: 30, marks: 30 },
          { subjectEn: 'General Awareness & General Science (జనరల్ అవేర్‌నెస్ & సైన్స్)', questions: 40, marks: 40 }
        ]
      },
      {
        stage: 'CBT-2 (Merit Selection Stage)',
        duration: '90 Minutes',
        totalQuestions: 120,
        totalMarks: 120,
        sections: [
          { subjectEn: 'Mathematics (గణితం)', questions: 35, marks: 35 },
          { subjectEn: 'General Intelligence & Reasoning (రీజనింగ్)', questions: 35, marks: 35 },
          { subjectEn: 'General Awareness & General Science (జనరల్ అవేర్‌నెస్ & సైన్స్)', questions: 50, marks: 50 }
        ]
      },
      {
        stage: 'Skill Test (CBAT / Typing Skill Test)',
        duration: '10 Minutes',
        totalQuestions: '-',
        totalMarks: 'Qualifying',
        sections: [
          { subjectEn: 'Typing: 30 WPM in English OR 25 WPM in Hindi on Computer (for Clerk/Typist posts)', questions: '-', marks: 'Qualifying' }
        ]
      }
    ],
    posts: [
      {
        titleEn: 'Commercial Cum Ticket Clerk (CCTC)',
        titleTe: 'కమర్షియల్ కమ్ టికెట్ క్లర్క్ (CCTC)',
        level: 'Pay Level 3',
        basicPay: '₹21,700 (Gross ~₹35,000 - ₹40,000/month)',
        medical: 'B2 Medical Standard',
        skillTest: 'No Typing Test Required (Direct DV & Medical after CBT-2!)'
      },
      {
        titleEn: 'Accounts Clerk Cum Typist',
        titleTe: 'అకౌంట్స్ క్లర్క్ కమ్ టైపిస్ట్',
        level: 'Pay Level 2',
        basicPay: '₹19,900 (Gross ~₹31,000 - ₹35,000/month)',
        medical: 'C2 Medical Standard',
        skillTest: 'Typing Skill Test (Qualifying)'
      },
      {
        titleEn: 'Junior Clerk Cum Typist',
        titleTe: 'జూనియర్ క్లర్క్ కమ్ టైపిస్ట్',
        level: 'Pay Level 2',
        basicPay: '₹19,900 (Gross ~₹31,000 - ₹35,000/month)',
        medical: 'C2 Medical Standard',
        skillTest: 'Typing Skill Test (Qualifying)'
      },
      {
        titleEn: 'Trains Clerk',
        titleTe: 'ట్రైన్స్ క్లర్క్ (రైళ్ల విభాగం క్లర్క్)',
        level: 'Pay Level 2',
        basicPay: '₹19,900 (Gross ~₹32,000 - ₹36,000/month)',
        medical: 'A3 Medical Standard',
        skillTest: 'No Typing Test Required!'
      }
    ],
    safeCutoffs: {
      secunderabad: { UR: '76 - 81', OBC: '72 - 77', EWS: '69 - 74', SC: '64 - 69', ST: '60 - 65' },
      chennai: { UR: '73 - 78', OBC: '70 - 75', EWS: '66 - 71', SC: '61 - 66', ST: '58 - 63' },
      bengaluru: { UR: '74 - 79', OBC: '71 - 76', EWS: '68 - 73', SC: '62 - 67', ST: '59 - 64' }
    }
  },
  {
    id: 'ntpc-grad',
    code: 'CEN 05/2024 & 2026',
    nameEn: 'RRB NTPC Graduate Level (Degree Level)',
    nameTe: 'ఆర్‌ఆర్‌బి ఎన్‌టిపిసి గ్రాడ్యుయేట్ స్థాయి (డిగ్రీ స్థాయి)',
    badge: 'Degree Pass • Level 5 & 6',
    qualificationEn: 'University Degree (B.A / B.Sc / B.Com / B.Tech or equivalent)',
    qualificationTe: 'ఏదైనా గుర్తింపు పొందిన విశ్వవిద్యాలయం నుండి డిగ్రీ ఉత్తీర్ణత',
    ageLimit: '18 – 33 Years (Relaxation as per rules)',
    negativeMarking: '1/3rd mark deducted for every wrong answer (-0.33)',
    stages: [
      {
        stage: 'CBT-1 & CBT-2 + CBAT (for Station Master)',
        duration: '90 Minutes each',
        totalQuestions: 100,
        totalMarks: 100,
        sections: [
          { subjectEn: 'Mathematics (30 Q / 35 Q)', questions: 30, marks: 30 },
          { subjectEn: 'General Intelligence & Reasoning (30 Q / 35 Q)', questions: 30, marks: 30 },
          { subjectEn: 'General Awareness (40 Q / 50 Q)', questions: 40, marks: 40 }
        ]
      }
    ],
    posts: [
      {
        titleEn: 'Station Master (SM)',
        titleTe: 'స్టేషన్ మాస్టర్ (SM)',
        level: 'Pay Level 6',
        basicPay: '₹35,400 (Gross ~₹55,000+/month)',
        medical: 'A2 Medical Standard',
        skillTest: 'Computer Based Aptitude Test (CBAT / Psycho Test)'
      },
      {
        titleEn: 'Goods Train Manager (Goods Guard)',
        titleTe: 'గూడ్స్ ట్రైన్ మేనేజర్ (గూడ్స్ గార్డ్)',
        level: 'Pay Level 5',
        basicPay: '₹29,200 (Gross ~₹48,000+/month)',
        medical: 'A2 Medical Standard',
        skillTest: 'No Typing or Psycho Test Required'
      },
      {
        titleEn: 'Senior Commercial Cum Ticket Clerk',
        titleTe: 'సీనియర్ కమర్షియల్ కమ్ టికెట్ క్లర్క్',
        level: 'Pay Level 5',
        basicPay: '₹29,200 (Gross ~₹45,000+/month)',
        medical: 'B2 Medical Standard',
        skillTest: 'No Typing Test Required'
      }
    ],
    safeCutoffs: {
      secunderabad: { UR: '78 - 83', OBC: '74 - 79', EWS: '71 - 76', SC: '66 - 71', ST: '62 - 67' }
    }
  },
  {
    id: 'group-d',
    code: 'RRC CEN Level-1',
    nameEn: 'RRB Group D (Level-1 Posts)',
    nameTe: 'ఆర్‌ఆర్‌బి గ్రూప్-డి (లెవెల్-1 పోస్టులు)',
    badge: '10th / ITI Pass',
    qualificationEn: '10th Pass (SSC) or ITI from NCVT/SCVT',
    qualificationTe: '10వ తరగతి (SSC) లేదా ఐటిఐ (ITI) ఉత్తీర్ణత',
    ageLimit: '18 – 33 Years',
    negativeMarking: '1/3rd mark deducted for every wrong answer (-0.33)',
    stages: [
      {
        stage: 'Single Stage CBT + Physical Efficiency Test (PET)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        sections: [
          { subjectEn: 'Mathematics (గణితం)', questions: 25, marks: 25 },
          { subjectEn: 'General Intelligence & Reasoning (రీజనింగ్)', questions: 30, marks: 30 },
          { subjectEn: 'General Science (జనరల్ సైన్స్)', questions: 25, marks: 25 },
          { subjectEn: 'General Awareness & Current Affairs (జీకే & కరెంట్ అఫైర్స్)', questions: 20, marks: 20 }
        ]
      }
    ],
    posts: [
      {
        titleEn: 'Track Maintainer Grade-IV & Assistant Pointsman',
        titleTe: 'ట్రాక్ మెయింటైనర్ & అసిస్టెంట్ పాయింట్స్‌మన్',
        level: 'Pay Level 1',
        basicPay: '₹18,000 (Gross ~₹28,000 - ₹32,000/month)',
        medical: 'A2 / B1 Medical Standard',
        skillTest: 'Physical Efficiency Test (PET)'
      }
    ],
    safeCutoffs: {
      secunderabad: { UR: '68 - 73', OBC: '64 - 69', EWS: '60 - 65', SC: '56 - 61', ST: '53 - 58' }
    }
  },
  {
    id: 'alp',
    code: 'CEN 01/2024 & 2026',
    nameEn: 'RRB ALP & Technician (Assistant Loco Pilot)',
    nameTe: 'ఆర్‌ఆర్‌బి అసిస్టెంట్ లోకో పైలట్ (ALP) & టెక్నీషియన్',
    badge: 'ITI / Diploma / B.Tech',
    qualificationEn: 'Matriculation (10th) + ITI / Diploma / Degree in Engineering',
    qualificationTe: '10వ తరగతి + ఐటిఐ / డిప్లొమా / ఇంజనీరింగ్ డిగ్రీ',
    ageLimit: '18 – 30 Years',
    negativeMarking: '1/3rd mark deducted for every wrong answer (-0.33)',
    stages: [
      {
        stage: 'CBT-1 (75 Marks, 60 Mins) + CBT-2 + CBAT',
        duration: '60 Minutes (CBT-1)',
        totalQuestions: 75,
        totalMarks: 75,
        sections: [
          { subjectEn: 'Mathematics', questions: 20, marks: 20 },
          { subjectEn: 'General Intelligence & Reasoning', questions: 25, marks: 25 },
          { subjectEn: 'General Science', questions: 20, marks: 20 },
          { subjectEn: 'General Awareness', questions: 10, marks: 10 }
        ]
      }
    ],
    posts: [
      {
        titleEn: 'Assistant Loco Pilot (ALP)',
        titleTe: 'అసిస్టెంట్ లోకో పైలట్ (ALP)',
        level: 'Pay Level 2',
        basicPay: '₹19,900 + Running Allowance (Gross ~₹42,000+/month)',
        medical: 'A1 Medical Standard (6/6 Vision without glasses)',
        skillTest: 'CBAT (Psycho Test)'
      }
    ],
    safeCutoffs: {
      secunderabad: { UR: '62 - 68 (out of 75)', OBC: '58 - 64', EWS: '55 - 60', SC: '50 - 55', ST: '47 - 52' }
    }
  }
];

window.RRB_ZONES = [
  'RRB Secunderabad (South Central Railway - SCR)',
  'RRB Chennai (Southern Railway - SR)',
  'RRB Bengaluru (South Western Railway - SWR)',
  'RRB Bhubaneswar (East Coast Railway - ECoR)',
  'RRB Mumbai (Central & Western Railway)',
  'RRB Kolkata (Eastern & South Eastern Railway)',
  'RRB Bilaspur (SECR)',
  'RRB Prayagraj / Allahabad (NCR)'
];

/* ============================================================================
   COMPLETE SUBJECT & TOPIC-WISE LESSONS (ENGLISH + TELUGU)
   ============================================================================ */

window.RRB_SUBJECTS = [
  {
    id: 'math',
    nameEn: 'Mathematics (Quantitative Aptitude)',
    nameTe: 'గణితం (క్వాంటిటేటివ్ ఆప్టిట్యూడ్)',
    icon: '📐',
    weightageCbt1: '30 Questions • 30 Marks',
    weightageCbt2: '35 Questions • 35 Marks',
    color: '#1d4ed8',
    topics: [
      {
        id: 'math-number-system',
        titleEn: '1. Number System, BODMAS & Fractions',
        titleTe: '1. సంఖ్యా వ్యవస్థ, BODMAS మరియు భిన్నాలు',
        importance: 'High Yield (3–4 Qs)',
        readTime: '12 mins',
        conceptEn: `The Number System is the foundation of RRB NTPC Mathematics. Every shift has 3 to 4 direct questions on BODMAS simplification, Divisibility Rules, Unit Digit, and Recurring Decimals.
• Natural Numbers (N): 1, 2, 3, 4...
• Whole Numbers (W): 0, 1, 2, 3...
• Prime Numbers: Numbers greater than 1 divisible only by 1 and themselves (2, 3, 5, 7, 11, 13, 17, 19...). Note: 2 is the only even prime number, and 1 is neither prime nor composite.
• There are 25 Prime Numbers between 1 and 100 (1–50 has 15 primes; 51–100 has 10 primes).`,
        conceptTe: `ఆర్‌ఆర్‌బి ఎన్‌టిపిసి గణితంలో 'సంఖ్యా వ్యవస్థ (Number System)' అత్యంత కీలకమైనది. ప్రతి పరీక్షలో BODMAS సూక్ష్మీకరణ, భాజనీయత సూత్రాలు (Divisibility Rules), ఒకట్ల స్థానంలోని అంకె (Unit Digit) మరియు భిన్నాల నుండి 3 నుండి 4 ప్రశ్నలు తప్పనిసరిగా వస్తాయి.
• సహజ సంఖ్యలు (Natural Numbers): 1, 2, 3, 4...
• పూర్ణాంకాలు (Whole Numbers): 0, 1, 2, 3...
• ప్రధాన సంఖ్యలు (Prime Numbers): 1 మరియు తనచేత మాత్రమే భాగించబడే సంఖ్యలు (2, 3, 5, 7, 11, 13...). గమనిక: '2' మాత్రమే సరి ప్రధాన సంఖ్య. '1' ప్రధాన సంఖ్య కాదు, సంయుక్త సంఖ్య కాదు.
• 1 నుండి 100 వరకు మొత్తం 25 ప్రధాన సంఖ్యలు కలవు (1–50 మధ్య 15; 51–100 మధ్య 10).`,
        formulas: [
          'BODMAS Order: Vinculum (Bar) → Brackets (), {}, [] → Of → Division (÷) → Multiplication (×) → Addition (+) → Subtraction (-)',
          'Sum of first n Natural Numbers = n(n + 1) / 2',
          'Sum of squares of first n Natural Numbers = n(n + 1)(2n + 1) / 6',
          'Sum of cubes of first n Natural Numbers = [n(n + 1) / 2]²',
          'Divisibility by 3 & 9: Sum of digits must be divisible by 3 or 9 respectively.',
          'Divisibility by 11: |(Sum of odd place digits) - (Sum of even place digits)| = 0 or multiple of 11.'
        ],
        shortcutEn: `⚡ RRB Shortcut Trick (Recurring Decimals to Fractions):
To convert 0.777... (0.7̄) into a fraction, write the repeating digit divided by as many 9s as repeating digits: 0.7̄ = 7/9.
For 0.232323... (0.23̄) = 23/99.
For mixed recurring like 0.16̄ (where only 6 repeats): (16 - 1) / 90 = 15/90 = 1/6!`,
        shortcutTe: `⚡ రైల్వే షార్ట్‌కట్ ట్రిక్ (ఆవర్తత దశాంశాలను భిన్నాలుగా మార్చుట):
• 0.777... (0.7̄) ను భిన్నంగా మార్చడానికి: పునరావృతమయ్యే అంకె క్రింద అన్ని '9'లు రాయాలి → 7/9.
• 0.2323... (0.23̄) = 23/99.
• 0.16̄ (ఇక్కడ 6 మాత్రమే రిపీట్ అవుతోంది): (మొత్తం సంఖ్య 16 - రిపీట్ కాని సంఖ్య 1) / 90 = 15/90 = 1/6!`,
        examples: [
          {
            qEn: 'Simplify using BODMAS: 48 ÷ 12 × [ (9/8 of 4/3) ÷ (3/4 of 2/3) ]',
            qTe: 'BODMAS ఉపయోగించి సూక్ష్మీకరించండి: 48 ÷ 12 × [ (9/8 of 4/3) ÷ (3/4 of 2/3) ]',
            solEn: 'Step 1: Solve "of" inside brackets first:\n(9/8 × 4/3) = 3/2, and (3/4 × 2/3) = 1/2.\nStep 2: Bracket becomes [ (3/2) ÷ (1/2) ] = (3/2) × (2/1) = 3.\nStep 3: Expression is 48 ÷ 12 × 3 = 4 × 3 = 12.',
            solTe: 'సోపానం 1: బ్రాకెట్ లోపల "of" (గుణకారం) ముందుగా చేయాలి:\n(9/8 × 4/3) = 3/2 మరియు (3/4 × 2/3) = 1/2.\nసోపానం 2: బ్రాకెట్ విలువ = (3/2) ÷ (1/2) = 3.\nసోపానం 3: బయట భాగాహారం ముందు: (48 ÷ 12) × 3 = 4 × 3 = 12.'
          },
          {
            qEn: 'If the 7-digit number 54x29y6 is divisible by 72, find the value of (2x + 3y) for maximum y.',
            qTe: '54x29y6 అనే 7-అంకెల సంఖ్య 72 చే నిశ్శేషంగా భాగించబడితే, గరిష్ట y విలువకు (2x + 3y) విలువ ఎంత?',
            solEn: '72 = 8 × 9. For divisibility by 8, last 3 digits 9y6 must be divisible by 8. Possible y = 3 (936÷8=117) or y = 7 (976÷8=122). Maximum y = 7.\nFor divisibility by 9, sum of digits (5+4+x+2+9+7+6 = 33 + x) must be divisible by 9 → 33 + x = 36 → x = 3.\nTherefore, 2x + 3y = 2(3) + 3(7) = 6 + 21 = 27.',
            solTe: '72 = 8 × 9. కాబట్టి ఆ సంఖ్య 8 మరియు 9 రెండింటిచే భాగించబడాలి.\n8 చే భాజనీయతకు చివరి 3 అంకెలు (9y6) 8 చే భాగించబడాలి. గరిష్ట y = 7 (976 ÷ 8 = 122).\n9 చే భాజనీయతకు అంకెల మొత్తం (5+4+x+2+9+7+6 = 33+x) 9 చే భాగించబడాలి → x = 3.\nకావున 2x + 3y = 2(3) + 3(7) = 27.'
          }
        ]
      },
      {
        id: 'math-lcm-hcf',
        titleEn: '2. LCM and HCF (క.సా.గు మరియు గ.సా.భా)',
        titleTe: '2. క.సా.గు (LCM) మరియు గ.సా.భా (HCF)',
        importance: 'High Yield (2–3 Qs)',
        readTime: '10 mins',
        conceptEn: `LCM (Least Common Multiple) is the smallest number divisible by all given numbers (used in Traffic Lights, Bells ringing together, Circular Track problems).
HCF (Highest Common Factor) is the largest number that divides all given numbers without remainder (used in measuring tapes, maximum equal group size).`,
        conceptTe: `క.సా.గు (LCM - కనిష్ట సామాన్య గుణిజం): ఇచ్చిన సంఖ్యలన్నింటిచే నిశ్శేషంగా భాగించబడే అతి చిన్న సంఖ్య. (గంటలు ఒకేసారి మోగడం, ట్రాఫిక్ లైట్లు, వృత్తాకార ట్రాక్ లెక్కలలో క.సా.గు వాడాలి).
గ.సా.భా (HCF - గరిష్ట సామాన్య భాజకం): ఇచ్చిన సంఖ్యలన్నింటినీ నిశ్శేషంగా భాగించే అతి పెద్ద సంఖ్య.`,
        formulas: [
          'Product of Two Numbers (A × B) = LCM × HCF',
          'LCM of Fractions = (LCM of Numerators) / (HCF of Denominators)',
          'HCF of Fractions = (HCF of Numerators) / (LCM of Denominators)',
          'If two numbers are in ratio a : b (where a, b are co-prime) and their HCF is H, then the numbers are Ha and Hb, and LCM = H × a × b.'
        ],
        shortcutEn: `⚡ Co-Prime Ratio Trick:
If two numbers are in the ratio 4 : 5 and their HCF is 8, the numbers are immediately 4×8 = 32 and 5×8 = 40, and their LCM is 8 × 4 × 5 = 160! No long division needed.`,
        shortcutTe: `⚡ నిష్పత్తి షార్ట్‌కట్ ట్రిక్:
రెండు సంఖ్యల నిష్పత్తి 4 : 5 మరియు వాటి గ.సా.భా (HCF) = 8 అయితే, ఆ సంఖ్యలు నేరుగా 4×8 = 32 మరియు 5×8 = 40 అవుతాయి. వాటి క.సా.గు (LCM) = 8 × 4 × 5 = 160 అవుతుంది!`,
        examples: [
          {
            qEn: 'Four railway bells toll at intervals of 6, 8, 12, and 18 seconds. If they toll together at 10:00 AM, at what time will they next toll together?',
            qTe: 'నాలుగు రైల్వే గంటలు వరుసగా 6, 8, 12, 18 సెకన్ల వ్యవధిలో మోగుతాయి. అవి ఉదయం 10:00 గంటలకు ఒకేసారి మోగితే, మళ్ళీ ఎప్పుడు ఒకేసారి మోగుతాయి?',
            solEn: 'Find LCM of 6, 8, 12, 18:\n6 = 2×3, 8 = 2³, 12 = 2²×3, 18 = 2×3².\nLCM = 2³ × 3² = 8 × 9 = 72 seconds = 1 minute 12 seconds.\nNext toll time = 10:01:12 AM.',
            solTe: '6, 8, 12, 18 ల క.సా.గు (LCM) = 72 సెకన్లు = 1 నిమిషం 12 సెకన్లు.\nకాబట్టి అవి మళ్ళీ ఉదయం 10:01:12 కు ఒకేసారి మోగుతాయి.'
          }
        ]
      },
      {
        id: 'math-percentages',
        videoId: 'vid-math-percentages',
        titleEn: '3. Percentages — Lesson 1: Basics of Percentage (శాతాలు)',
        titleTe: '3. శాతాలు — పాఠం 1: ప్రాథమిక భావనలు నుండి పరీక్షా స్థాయి వరకు (Basics of Percentage)',
        importance: 'Core Pillar (3–4 Qs)',
        readTime: '18 mins',
        conceptEn: `LEVEL 1 — BASICS OF PERCENTAGE (What is a Percentage?):
• The word "Per-cent" comes from Latin "per centum", meaning "out of every 100". It is denoted by the symbol '%'.
• Any percentage x% simply means a fraction with denominator 100:  x% = x / 100.
• Rule 1 (Percentage → Fraction): Divide by 100 and simplify.
  Example: 20% = 20/100 = 1/5  |  25% = 25/100 = 1/4  |  75% = 75/100 = 3/4.
• Rule 2 (Fraction → Percentage): Multiply the fraction by 100%.
  Example: 3/5 = (3/5) × 100% = 60%  |  1/8 = (1/8) × 100% = 12.5%.

LEVEL 2 — CORE CONCEPT (Base Value & Percentage Change):
• In every percentage problem, the reference value (after the word "of" or "than") is the BASE (100%):
  Percentage = (Required Value / Base Value) × 100%.
• Commutative Law of Percentage:  x% of y = y% of x.
  (Example: 36% of 25 is the same as 25% of 36 = (1/4) × 36 = 9!).
• Multiplying Factor for Increase/Decrease:
  - If a number N is increased by 20% (+1/5), new value = 120% of N = N × (6/5).
  - If a number N is decreased by 20% (-1/5), new value = 80% of N = N × (4/5).

LEVEL 3 — ADVANCED RRB EXAM CONCEPTS:
• Price × Consumption = Expenditure: When expenditure is constant, Price and Consumption are inversely proportional (if Price becomes a/b, Consumption becomes b/a).
• Successive Percentage Changes: Used when a quantity changes twice in a row (or in Area = Length × Breadth).
• Passing Marks & Election Problems: Always equate the difference in percentage (%) to the actual difference in marks or votes to find 1% and then 100%.`,
        conceptTe: `స్థాయి 1 — శాతాలు ప్రాథమిక భావనలు (Basics of Percentage):
• "శాతం (Percent)" అనగా "ప్రతి వందకు (100 కు)" అని అర్థం. దీనిని '%' గుర్తుతో సూచిస్తారు. అనగా x% = x / 100.
• నియమం 1 (శాతాన్ని భిన్నంగా మార్చుట): ఇచ్చిన శాతాన్ని 100 చే భాగించాలి.
  ఉదా: 20% = 20/100 = 1/5  |  25% = 25/100 = 1/4  |  75% = 75/100 = 3/4.
• నియమం 2 (భిన్నాన్ని శాతంగా మార్చుట): ఇచ్చిన భిన్నాన్ని 100 తో గుణించాలి.
  ఉదా: 3/5 = (3/5) × 100% = 60%  |  1/8 = (1/8) × 100% = 12.5%.

స్థాయి 2 — మధ్యస్థ భావనలు (పోలిక మరియు పెరుగుదల/తగ్గుదల):
• ఏ సంఖ్యతో అయితే పోలుస్తున్నామో ('కంటే' లేదా 'లో' అని ఉన్న సంఖ్య) దానిని ఎల్లప్పుడూ హారంలో (Base = 100%) ఉంచాలి.
• తారుమారు నియమం (Commutative Property): x% of y = y% of x.
  (ఉదాహరణకు 25 లో 36% అన్నా, 36 లో 25% అన్నా ఒకటే = 36 × 1/4 = 9!).
• ఒక సంఖ్య 20% పెరిగితే కొత్త విలువ = ఆ సంఖ్యలో 120% (లేదా × 6/5). 20% తగ్గితే కొత్త విలువ = 80% (లేదా × 4/5).

స్థాయి 3 — ఆర్‌ఆర్‌బి పరీక్షా స్థాయి అంశాలు (Exam-Level):
• ధర × వినియోగం = ఖర్చు: ఖర్చు మారకుండా ఉన్నప్పుడు ధర a/b వంతు అయితే, వినియోగం b/a వంతు అవుతుంది.
• పరీక్షలో ఉత్తీర్ణత మార్కులు & ఎన్నికల లెక్కలు: శాతాల మధ్య భేదాన్ని, మార్కులు లేదా ఓట్ల భేదానికి సమానం చేస్తే 100% విలువ సెకన్లలో వస్తుంది.`,
        formulas: [
          '1. Basic Conversion: x% = x / 100  |  a / b as a percentage = (a / b) × 100%',
          '2. Master Fraction Table (Must Memorize): 1/2 = 50% | 1/3 = 33.33% | 1/4 = 25% | 1/5 = 20% | 1/6 = 16.66% | 1/7 = 14.28% | 1/8 = 12.5% | 1/9 = 11.11% | 1/10 = 10% | 1/11 = 9.09% | 1/12 = 8.33% | 1/15 = 6.66% | 1/16 = 6.25% | 1/20 = 5%',
          '3. Derived Fractions: 3/8 = 37.5% | 5/8 = 62.5% | 7/8 = 87.5% | 2/3 = 66.66% | 4/5 = 80%',
          '4. Percentage Increase / Decrease = [ (Change in Value) / (Original Value) ] × 100%',
          '5. If A is R% MORE than B, then B is LESS than A by: [ R / (100 + R) ] × 100%',
          '6. If A is R% LESS than B, then B is MORE than A by: [ R / (100 - R) ] × 100%',
          '7. Net % Change for two successive changes of x% and y% = (x + y + (x × y)/100)%',
          '8. Population / Value after n years at R% growth: P × [1 + (R/100)]ⁿ'
        ],
        shortcutEn: `⚡ 3 Golden RRB Exam Shortcut Tricks for Percentages:
1. Reverse Percentage Trick (x% of y = y% of x):
   Instead of finding 48% of 250, flip it to 250% of 48 = 2.5 × 48 = 120 in 2 seconds!
2. Constant Product Jump Rule (+1/n → -1/(n+1)):
   If diesel price rises by 25% (+1/4), to keep expenditure constant, reduce consumption by 1/(4+1) = 1/5 = 20%!
   If price drops by 20% (-1/5), consumption can increase by 1/(5-1) = 1/4 = 25%!
3. Split-and-Add Mental Calculation:
   To find 17.5% of 800 → Split as 10% (80) + 5% (40) + 2.5% (20) = 140 without touching pen & paper!`,
        shortcutTe: `⚡ శాతాలలో 3 గోల్డెన్ రైల్వే షార్ట్‌కట్ ట్రిక్స్:
1. తారుమారు ట్రిక్ (x% of y = y% of x):
   250 లో 48% కనుగొనే బదులు, 48 లో 250% (అనగా 48 కి 2.5 రెట్లు) = 120 అని 2 సెకన్లలో చెప్పవచ్చు!
2. స్థిర లబ్దం భిన్నం ట్రిక్ (+1/n పెరిగితే → -1/(n+1) తగ్గుతుంది):
   పెట్రోల్ ధర 25% (+1/4) పెరిగితే, ఖర్చు మారకుండా ఉండాలంటే వినియోగాన్ని 1/(4+1) = 1/5 = 20% తగ్గించాలి!
3. విభజన పద్ధతి (Split Method):
   800 లో 17.5% కావాలంటే → 10% (80) + 5% (40) + 2.5% (20) = 140 అని పెన్ను వాడకుండానే లెక్కించవచ్చు!`,
        examples: [
          {
            qEn: '[Basic Level] Find the value of: 37.5% of 640 + 12.5% of 320 - 20% of 150.',
            qTe: '[ప్రాథమిక స్థాయి] 640 లో 37.5% + 320 లో 12.5% - 150 లో 20% విలువ ఎంత?',
            solEn: 'Step 1: Convert percentages into standard fractions:\n• 37.5% = 3/8\n• 12.5% = 1/8\n• 20% = 1/5\nStep 2: Substitute and simplify:\n= (3/8 × 640) + (1/8 × 320) - (1/5 × 150)\n= (3 × 80) + 40 - 30 = 240 + 40 - 30 = 250.',
            solTe: 'సోపానం 1: శాతాలను భిన్నాలుగా మార్చండి:\n• 37.5% = 3/8  |  12.5% = 1/8  |  20% = 1/5\nసోపానం 2: విలువలను ప్రతిక్షేపించగా:\n= (3/8 × 640) + (1/8 × 320) - (1/5 × 150)\n= 240 + 40 - 30 = 250.'
          },
          {
            qEn: '[Foundation Level] If A\'s salary is 25% more than B\'s salary, then by what percentage is B\'s salary less than A\'s salary?',
            qTe: '[పునాది స్థాయి] A జీతం B జీతం కంటే 25% ఎక్కువ అయితే, B జీతం A జీతం కంటే ఎంత శాతం తక్కువ?',
            solEn: 'Method 1 (Ratio): 25% = +1/4. Let B = 4 units → A = 4 + 1 = 5 units.\nB is less than A by 1 unit on a base of A (5 units) = (1/5) × 100% = 20%.\nMethod 2 (Formula): [ R / (100 + R) ] × 100 = (25 / 125) × 100 = 20%.',
            solTe: 'పద్ధతి 1 (నిష్పత్తి): 25% = 1/4. B జీతం = 4 భాగాలు అనుకుంటే, A జీతం = 5 భాగాలు.\nA కంటే B తక్కువ = (1 / 5) × 100% = 20%.\nపద్ధతి 2 (సూత్రం): [ 25 / (100 + 25) ] × 100 = (25/125) × 100 = 20%.'
          },
          {
            qEn: '[Intermediate Exam Level] In an RRB exam, a student requires 40% marks to pass. Rahul gets 178 marks and fails by 22 marks. Find the maximum marks of the exam.',
            qTe: '[మధ్యస్థ పరీక్షా స్థాయి] ఒక ఆర్‌ఆర్‌బి పరీక్షలో ఉత్తీర్ణతకు 40% మార్కులు కావాలి. రాహుల్‌కు 178 మార్కులు వచ్చి 22 మార్కుల తేడాతో ఫెయిల్ అయ్యాడు. గరిష్ట మార్కులు ఎన్ని?',
            solEn: 'Step 1: Passing Marks = Marks Scored + Marks Failed By = 178 + 22 = 200 marks.\nStep 2: According to question, 40% of Maximum Marks = 200.\nStep 3: 1% = 200 / 40 = 5 marks.\nTherefore, Maximum Marks (100%) = 100 × 5 = 500 marks.',
            solTe: 'సోపానం 1: పాస్ మార్కులు = 178 + 22 = 200 మార్కులు.\nసోపానం 2: 40% మార్కులు = 200 అయినప్పుడు, 1% = 200 / 40 = 5 మార్కులు.\nకావున గరిష్ట మార్కులు (100%) = 100 × 5 = 500.'
          },
          {
            qEn: '[Advanced RRB CBT-2 Level] In an election between two candidates, 85% of the voters cast their votes, out of which 4% votes were declared invalid. The winning candidate got 6,936 votes which were 85% of the valid votes. Find the total number of enrolled voters.',
            qTe: '[అడ్వాన్స్‌డ్ పరీక్షా స్థాయి] ఇద్దరు అభ్యర్థుల మధ్య జరిగిన ఎన్నికలో 85% మంది ఓటు వేశారు. అందులో 4% ఓట్లు చెల్లలేదు (Invalid). గెలిచిన అభ్యర్థికి చెల్లిన ఓట్లలో 85% అనగా 6,936 ఓట్లు వచ్చాయి. మొత్తం ఓటర్ల సంఖ్య ఎంత?',
            solEn: 'Let Total Enrolled Voters = V.\n• Votes Polled = 85% of V = (17/20) × V.\n• Valid Votes (since 4% invalid, 96% are valid) = 96% ofPolled = (24/25) × (17/20) × V.\n• Winner got 85% (= 17/20) of Valid Votes = 6,936:\n  V × (17/20) × (24/25) × (17/20) = 6,936\n  Since 17 × 17 = 289, and 6,936 ÷ 289 = 24:\n  V × (24 / 10,000) = 24 → V = 10,000 voters!',
            solTe: 'మొత్తం ఓటర్లు = V అనుకుందాం.\n• పోలైన ఓట్లు = 85% (17/20).\n• చెల్లిన ఓట్లు (4% చెల్లలేదు కాబట్టి 96% చెల్లినవి) = 96/100 = 24/25.\n• విజేత ఓట్లు = V × (17/20) × (24/25) × (17/20) = 6,936.\n• 17 × 17 × 24 = 6,936 కావున లవం క్యాన్సిల్ అయి V = 20 × 25 × 20 = 10,000 ఓటర్లు!'
          }
        ]
      },
      {
        id: 'math-profit-loss',
        titleEn: '4. Profit, Loss & Discount (లాభం, నష్టం & రాయితీ)',
        titleTe: '4. లాభం, నష్టం మరియు రాయితీ (Profit, Loss & Discount)',
        importance: 'High Yield (3 Qs)',
        readTime: '14 mins',
        conceptEn: `Cost Price (CP) is always treated as 100%. Profit or Loss is always calculated on Cost Price (CP), while Discount is always calculated on Marked Price (MP).`,
        conceptTe: `కొన్న వెల (CP) ని ఎల్లప్పుడూ 100% గా తీసుకోవాలి. లాభం లేదా నష్టం ఎప్పుడూ కొన్న వెల (CP) మీద లెక్కిస్తారు. రాయితీ (Discount) ఎప్పుడూ ప్రకటన వెల (Marked Price - MP) మీద లెక్కిస్తారు.`,
        formulas: [
          'Profit % = [(SP - CP) / CP] × 100',
          'Selling Price (SP) = CP × (100 + Profit%) / 100',
          'Direct Ratio between CP and MP:  CP / MP = (100 - Discount%) / (100 + Profit%)',
          'Equivalent Single Discount for two discounts d1% and d2% = (d1 + d2 - (d1 × d2)/100)%'
        ],
        shortcutEn: `⚡ Golden CP : MP Ratio Formula:
Whenever a question gives Discount % and Profit %, never calculate SP in between! Directly use:
CP : MP = (100 - Discount%) : (100 + Profit%).`,
        shortcutTe: `⚡ గోల్డెన్ CP : MP నిష్పత్తి సూత్రం:
ప్రశ్నలో రాయితీ శాతం (Discount%) మరియు లాభ శాతం (Profit%) ఇచ్చినప్పుడు నేరుగా:
CP : MP = (100 - రాయితీ%) : (100 + లాభం%) సూత్రం వాడండి!`,
        examples: [
          {
            qEn: 'Even after allowing a 20% discount on Marked Price, a shopkeeper gains 12%. If the Cost Price is ₹400, find the Marked Price.',
            qTe: 'ప్రకటన వెలపై 20% రాయితీ ఇచ్చినప్పటికీ వ్యాపారికి 12% లాభం వస్తుంది. కొన్న వెల ₹400 అయితే ప్రకటన వెల ఎంత?',
            solEn: 'Using CP : MP = (100 - 20) : (100 + 12) = 80 : 112 = 5 : 7.\nSince 5 parts (CP) = ₹400 → 1 part = ₹80.\nMarked Price (7 parts) = 7 × 80 = ₹560.',
            solTe: 'CP : MP = (100 - 20) : (100 + 12) = 80 : 112 = 5 : 7.\nఇక్కడ 5 భాగాలు (CP) = ₹400 → 1 భాగం = ₹80.\nప్రకటన వెల (7 భాగాలు) = 7 × 80 = ₹560.'
          }
        ]
      },
      {
        id: 'math-si-ci',
        titleEn: '5. Simple & Compound Interest (బారువడ్డీ & చక్రవడ్డీ)',
        titleTe: '5. బారువడ్డీ మరియు చక్రవడ్డీ (SI & CI)',
        importance: 'High Yield (2–3 Qs)',
        readTime: '14 mins',
        conceptEn: `In Simple Interest (SI), interest remains the same every year. In Compound Interest (CI), interest is earned on previous years' interest as well.`,
        conceptTe: `బారువడ్డీ (SI) లో ప్రతి సంవత్సరం వడ్డీ సమానంగా ఉంటుంది. చక్రవడ్డీ (CI) లో వడ్డీపై కూడా వడ్డీ లెక్కించబడుతుంది.`,
        formulas: [
          'Simple Interest (SI) = (P × T × R) / 100',
          'Compound Amount A = P × [1 + (R/100)]ⁿ',
          'Difference between CI and SI for 2 Years = P × (R / 100)²',
          'Difference between CI and SI for 3 Years = P × (R / 100)² × [(300 + R) / 100]'
        ],
        shortcutEn: `⚡ 2-Year & 3-Year CI-SI Difference Trick:
For 2 years at R% rate, effective SI% = 2R% and effective CI% = (2R + R²/100)%.
Example: At 10% for 2 years, SI = 20%, CI = 21%, Difference = 1% of Principal!`,
        shortcutTe: `⚡ 2 సంవత్సరాల చక్రవడ్డీ - బారువడ్డీ భేదం ట్రిక్:
2 సంవత్సరాలకు CI మరియు SI మధ్య భేదం D = P × (R/100)².
ఉదాహరణకు R = 10% అయితే, 2 ఏళ్లకు SI = 20%, CI = 21%. రెండింటి మధ్య భేదం అసలులో కేవలం 1% మాత్రమే!`,
        examples: [
          {
            qEn: 'The difference between Compound Interest and Simple Interest on a certain sum at 8% per annum for 2 years is ₹128. Find the Principal.',
            qTe: 'కొంత అసలుపై సంవత్సరానికి 8% వడ్డీ రేటుతో 2 సంవత్సరాలకు చక్రవడ్డీ, బారువడ్డీల మధ్య భేదం ₹128. అయిన అసలు ఎంత?',
            solEn: 'Difference = P × (R/100)² → 128 = P × (8/100)² = P × (64 / 10000).\nP = (128 × 10000) / 64 = 2 × 10000 = ₹20,000.',
            solTe: 'సూత్రం: భేదం = P × (R/100)² → 128 = P × (8/100)².\n128 = P × (64/10000) → P = 2 × 10000 = ₹20,000.'
          }
        ]
      },
      {
        id: 'math-ratio-proportion',
        titleEn: '6. Ratio, Proportion & Ages (నిష్పత్తి, అనుపాతం & వయస్సులు)',
        titleTe: '6. నిష్పత్తి, అనుపాతం మరియు వయస్సులు',
        importance: 'Medium-High (2 Qs)',
        readTime: '10 mins',
        conceptEn: `Ratio compares two quantities of the same unit. If A:B and B:C are given, equalize the common term B or use the N-pattern to find A:B:C.`,
        conceptTe: `ఒకే ప్రమాణాలు గల రెండు రాశుల పోలికను నిష్పత్తి అంటారు. A:B మరియు B:C ఇచ్చినప్పుడు ఉమ్మడి పదం B ని సమానం చేయడం ద్వారా A:B:C ని కనుగొనవచ్చు.`,
        formulas: [
          'Fourth Proportional to a, b, c = (b × c) / a',
          'Mean Proportional between a and b = √(a × b)',
          'Third Proportional to a and b = b² / a'
        ],
        shortcutEn: `⚡ Age Difference Constant Rule:
The difference between the ages of two people NEVER changes over time. Equalize the ratio difference before and after to solve age problems in 10 seconds.`,
        shortcutTe: `⚡ వయస్సుల భేదం ట్రిక్:
ఇద్దరు వ్యక్తుల వయస్సుల మధ్య భేదం ఎప్పటికీ మారదు. నిష్పత్తుల మధ్య భేదాన్ని సమానం చేస్తే x లేకుండానే సమాధానం వస్తుంది!`,
        examples: [
          {
            qEn: 'Find the Mean Proportional between 16 and 36, and the Third Proportional to 12 and 18.',
            qTe: '16 మరియు 36 ల మధ్యమ అనుపాతం (Mean Proportional), మరియు 12, 18 ల తృతీయ అనుపాతం (Third Proportional) కనుగొనండి.',
            solEn: 'Mean Proportional = √(16 × 36) = 4 × 6 = 24.\nThird Proportional = 18² / 12 = 324 / 12 = 27.',
            solTe: 'మధ్యమ అనుపాతం = √(16 × 36) = 4 × 6 = 24.\nతృతీయ అనుపాతం = (18 × 18) / 12 = 324 / 12 = 27.'
          }
        ]
      },
      {
        id: 'math-time-work',
        titleEn: '7. Time & Work and Pipes & Cisterns (కాలం - పని)',
        titleTe: '7. కాలం - పని మరియు పైపులు - తొట్టెలు',
        importance: 'High Yield (2–3 Qs)',
        readTime: '12 mins',
        conceptEn: `Never use fractions (1/x + 1/y) for Time & Work! Always take the LCM of days as Total Work (in units), and divide Total Work by Days to get Daily Efficiency.`,
        conceptTe: `కాలం-పని లెక్కలలో భిన్నాలు (1/x + 1/y) అస్సలు వాడకండి! ఇచ్చిన రోజుల క.సా.గు (LCM) ని 'మొత్తం పని (Total Work)' గా తీసుకుని, రోజుకు చేసే పని సామర్థ్యం (Efficiency) ఆధారంగా లెక్కించండి.`,
        formulas: [
          'Total Work = Efficiency × Time',
          'If A does work in x days and B in y days, together they take = (x × y) / (x + y) days',
          'M₁ × D₁ × H₁ / W₁ = M₂ × D₂ × H₂ / W₂ (Chain Rule)'
        ],
        shortcutEn: `⚡ LCM Total Work Method:
If A takes 12 days and B takes 15 days:
Total Work = LCM(12, 15) = 60 units.
A's efficiency = 60/12 = 5 units/day; B's efficiency = 60/15 = 4 units/day.
Together = 60 / (5 + 4) = 60/9 = 6⅔ days!`,
        shortcutTe: `⚡ క.సా.గు (LCM) పద్ధతి:
A ఒక పనిని 12 రోజుల్లో, B 15 రోజుల్లో చేస్తే: మొత్తం పని = LCM(12, 15) = 60 యూనిట్లు.
A సామర్థ్యం = 5 యూనిట్లు/రోజు, B సామర్థ్యం = 4 యూనిట్లు/రోజు.
ఇద్దరూ కలిసి = 60 / (5+4) = 60/9 = 6⅔ రోజులు!`,
        examples: [
          {
            qEn: 'A and B can complete a railway track repair in 20 days and 30 days respectively. They start together, but A leaves 5 days before completion. Actually how many days did the work last?',
            qTe: 'A మరియు B ఒక రైల్వే ట్రాక్ పనిని వరుసగా 20, 30 రోజుల్లో చేయగలరు. ఇద్దరూ కలిసి పని ప్రారంభించారు కానీ పని పూర్తయ్యే 5 రోజుల ముందు A వెళ్ళిపోయాడు. మొత్తం పని ఎన్ని రోజుల్లో పూర్తయింది?',
            solEn: 'LCM(20, 30) = 60 units. Efficiency: A = 3 u/day, B = 2 u/day.\nShortcut: Since A left 5 days before completion, add A\'s 5 days work (5 × 3 = 15 units) to Total Work = 60 + 15 = 75 units.\nTotal days = 75 / (3 + 2) = 15 days!',
            solTe: 'LCM(20, 30) = 60 యూనిట్లు. సామర్థ్యం: A = 3, B = 2.\nషార్ట్‌కట్: పని ముగియడానికి 5 రోజుల ముందు A వెళ్ళిపోయాడు కాబట్టి, A యొక్క 5 రోజుల పనిని (5×3 = 15) మొత్తం పనికి కలపండి = 60 + 15 = 75.\nమొత్తం రోజులు = 75 / (3+2) = 15 రోజులు!'
          }
        ]
      },
      {
        id: 'math-trains-speed',
        titleEn: '8. Time, Speed, Distance & Trains (రైళ్లు - వేగం - దూరం)',
        titleTe: '8. కాలం, దూరం, వేగం మరియు రైళ్లు (Railway Exam Special!)',
        importance: 'Must-Master (3–4 Qs)',
        readTime: '15 mins',
        conceptEn: `Because this is a Railway Recruitment Exam, Problems on Trains, Platforms, Bridges, and Relative Speed are guaranteed in every single shift!`,
        conceptTe: `ఇది రైల్వే పరీక్ష కాబట్టి 'రైళ్లు - ప్లాట్‌ఫారమ్ - సాపేక్ష వేగం' నుండి ప్రతి షిఫ్ట్‌లో 2 నుండి 3 ప్రశ్నలు తప్పనిసరిగా అడుగుతారు!`,
        formulas: [
          'Distance = Speed × Time',
          'km/hr to m/s conversion: Multiply by 5/18  (e.g., 72 km/hr = 72 × 5/18 = 20 m/s)',
          'm/s to km/hr conversion: Multiply by 18/5  (e.g., 15 m/s = 15 × 18/5 = 54 km/hr)',
          'Train crossing a pole/man: Distance = Length of Train (Lₜ)',
          'Train crossing a bridge/platform: Distance = Length of Train + Length of Platform (Lₜ + Lₚ)',
          'Relative Speed: Opposite Direction = (S₁ + S₂); Same Direction = |S₁ - S₂|',
          'Average Speed for equal distances = (2 × S₁ × S₂) / (S₁ + S₂)'
        ],
        shortcutEn: `⚡ 18-Table vs 5-Table Instant Conversion:
Memorize this table to avoid multiplying by 5/18 in exam hall:
18 km/h = 5 m/s | 36 km/h = 10 m/s | 54 km/h = 15 m/s | 72 km/h = 20 m/s | 90 km/h = 25 m/s | 108 km/h = 30 m/s!`,
        shortcutTe: `⚡ 18 ఎక్కం - 5 ఎక్కం వేగం మార్పిడి ట్రిక్:
పరీక్షలో 5/18 తో గుణించే సమయం ఆదా చేయడానికి ఈ పట్టిక గుర్తుంచుకోండి:
18 km/h = 5 m/s | 36 km/h = 10 m/s | 54 km/h = 15 m/s | 72 km/h = 20 m/s | 90 km/h = 25 m/s | 108 km/h = 30 m/s!`,
        examples: [
          {
            qEn: 'Vande Bharat Express of length 240 m running at 72 km/hr crosses a bridge in 25 seconds. Find the length of the bridge.',
            qTe: '240 మీటర్ల పొడవు గల వందే భారత్ ఎక్స్‌ప్రెస్ గంటకు 72 కి.మీ వేగంతో ప్రయాణిస్తూ ఒక వంతెనను 25 సెకన్లలో దాటింది. ఆ వంతెన పొడవు ఎంత?',
            solEn: 'Speed = 72 km/hr = 72 × (5/18) = 20 m/s.\nTotal Distance covered in 25 s = Speed × Time = 20 × 25 = 500 m.\nSince Total Distance = Train Length + Bridge Length → 500 = 240 + Bridge → Bridge Length = 260 m.',
            solTe: 'వేగం = 72 km/hr = 20 m/s.\n25 సెకన్లలో ప్రయాణించిన మొత్తం దూరం = 20 × 25 = 500 మీటర్లు.\nవంతెన పొడవు = మొత్తం దూరం - రైలు పొడవు = 500 - 240 = 260 మీటర్లు.'
          }
        ]
      },
      {
        id: 'math-mensuration-algebra',
        titleEn: '9. Mensuration, Geometry, Algebra & Trigonometry',
        titleTe: '9. క్షేత్రమితి, బీజగణితం మరియు త్రికోణమితి',
        importance: 'High Yield (4–5 Qs)',
        readTime: '16 mins',
        conceptEn: `Mensuration & Elementary Algebra/Trigonometry questions in RRB NTPC Undergraduate are strictly formula-based. Knowing standard identities and 2D/3D formulas guarantees full marks.`,
        conceptTe: `ఆర్‌ఆర్‌బి ఎన్‌టిపిసి అండర్ గ్రాడ్యుయేట్ పరీక్షలో క్షేత్రమితి, బీజగణితం మరియు త్రికోణమితి ప్రశ్నలు నేరుగా సూత్రాల ఆధారంగా వస్తాయి.`,
        formulas: [
          'Circle: Area = πr², Circumference = 2πr (When r = 7, Area = 154, Circumference = 44)',
          'Equilateral Triangle: Area = (√3 / 4) a², Height = (√3 / 2) a',
          'Cylinder: Volume = πr²h, Curved Surface Area = 2πrh, Total Surface Area = 2πr(r + h)',
          'Cone: Volume = (1/3)πr²h, Slant height l = √(r² + h²), CSA = πrl',
          'Sphere: Volume = (4/3)πr³, Surface Area = 4πr²',
          'Algebra Trick: If x + 1/x = k, then x² + 1/x² = k² - 2, and x³ + 1/x³ = k³ - 3k',
          'Trigonometry: sin²θ + cos²θ = 1 | sec²θ - tan²θ = 1 | cosec²θ - cot²θ = 1'
        ],
        shortcutEn: `⚡ Golden Circle Standard Values (r = 7, 14, 21):
If radius r = 7 cm → Circumference = 44 cm, Area = 154 cm².
If radius becomes k times (r = 7k), Circumference becomes 44k and Area becomes 154k²!
Example: For r = 14 cm (k = 2), Area = 154 × 2² = 616 cm² instantly!`,
        shortcutTe: `⚡ వృత్తం గోల్డెన్ షార్ట్‌కట్ (r = 7):
వ్యాసార్థం r = 7 సెం.మీ అయితే → చుట్టుకొలత = 44 సెం.మీ, వైశాల్యం = 154 చ.సెం.మీ.
వ్యాసార్థం k రెట్లు పెరిగితే (r = 14 అనగా k = 2), వైశాల్యం = 154 × k² = 154 × 4 = 616 చ.సెం.మీ!`,
        examples: [
          {
            qEn: 'If x + 1/x = 5, find the value of x³ + 1/x³.',
            qTe: 'x + 1/x = 5 అయినచో, x³ + 1/x³ విలువ ఎంత?',
            solEn: 'Using shortcut formula: If x + 1/x = k, then x³ + 1/x³ = k³ - 3k.\nHere k = 5 → 5³ - 3(5) = 125 - 15 = 110.',
            solTe: 'షార్ట్‌కట్ సూత్రం: x + 1/x = k అయితే, x³ + 1/x³ = k³ - 3k.\nఇక్కడ k = 5 → 5³ - 3(5) = 125 - 15 = 110.'
          }
        ]
      },
      {
        id: 'math-decimals',
        titleEn: '10. Decimals (దశాంశ భిన్నాలు)',
        titleTe: '10. దశాంశ భిన్నాలు మరియు ఆవర్తత దశాంశాలు (Decimals)',
        importance: 'High Yield (2 Qs)',
        readTime: '11 mins',
        conceptEn: `Decimals (Decimal Fractions) represent fractions whose denominators are powers of 10 (10, 100, 1000, etc.). In RRB NTPC, Group-D, and ALP exams, questions regularly test Decimal Addition/Subtraction, Multiplication/Division shifts, Conversion of Recurring (Repeating) Decimals to Vulgar Fractions, and LCM/HCF of Decimals.
• Terminating Decimal: Ends after a finite number of digits (e.g., 0.25 = 1/4, 0.375 = 3/8). A fraction p/q (in lowest form) terminates if and only if the prime factorization of denominator q contains only 2s and/or 5s (q = 2ⁿ × 5ᵐ).
• Pure Recurring Decimal: All digits after the decimal point repeat endlessly (e.g., 0.333... = 0.3̄ = 1/3).
• Mixed Recurring Decimal: One or more digits after the decimal point do not repeat, followed by repeating digits (e.g., 0.1666... = 0.16̄).`,
        conceptTe: `హారంలో 10 లేదా 10 యొక్క ఘాతాలు (10, 100, 1000...) కలిగిన భిన్నాలను 'దశాంశ భిన్నాలు (Decimals)' అంటారు. ఆర్‌ఆర్‌బి ఎన్‌టిపిసి, గ్రూప్-డి మరియు ALP పరీక్షలలో దశాంశాల కూడిక/తీసివేత, గుణకారం/భాగాహారం, ఆవర్తత దశాంశాలను సాధారణ భిన్నాలుగా మార్చడం మరియు దశాంశాల క.సా.గు / గ.సా.భా నుండి 1–2 ప్రశ్నలు తప్పనిసరిగా వస్తాయి.
• అంతమయ్యే దశాంశం (Terminating Decimal): భాగించినప్పుడు శేషం సున్నా వచ్చేవి (ఉదా: 0.25 = 1/4). కనిష్ట రూపంలోని p/q భిన్నం యొక్క హారం q లో కేవలం 2 మరియు 5 ప్రధాన కారణాంకాలుగా (2ⁿ × 5ᵐ) ఉంటేనే అది అంతమయ్యే దశాంశం అవుతుంది.
• శుద్ధ ఆవర్తత దశాంశం (Pure Recurring Decimal): దశాంశ బిందువు తర్వాత ఉన్న అన్ని అంకెలు పునరావృతమవుతాయి (ఉదా: 0.7̄ = 7/9).
• మిశ్రమ ఆవర్తత దశాంశం (Mixed Recurring Decimal): దశాంశ బిందువు తర్వాత కొన్ని అంకెలు రిపీట్ కాకుండా, ఆ తర్వాతి అంకెలు రిపీట్ అవుతాయి (ఉదా: 0.16̄ = 15/90 = 1/6).`,
        formulas: [
          'Pure Recurring Rule: 0.ab̄ = ab / 99 | 0.abc̄ = abc / 999 (Put as many 9s in denominator as repeating digits)',
          'Mixed Recurring Rule: 0.a(bc)̄ = (abc - a) / 990 (Denominator has 9s for repeating digits followed by 0s for non-repeating decimal digits)',
          'Decimal Multiplication Rule: Multiply as whole numbers, then place the decimal point so that total decimal places = sum of decimal places in both numbers.',
          'Decimal Division Rule: Shift the decimal point right in both numerator and denominator until the divisor becomes a whole number.',
          'LCM & HCF of Decimals: First equalize the number of decimal places in all numbers by adding trailing zeros, find LCM/HCF as integers, and place the decimal back.'
        ],
        shortcutEn: `⚡ Instant 9s & 0s Denominator Trick for Recurring Decimals:
Count the digits under the bar → write that many 9s.
Count the digits between the decimal point and the bar → write that many 0s after the 9s!
Example: 0.235̄ (where 35 is under bar, 2 is not):
Numerator = 235 - 2 = 233. Denominator = two 9s (for 35) and one 0 (for 2) = 990 → Answer = 233/990 in 3 seconds!`,
        shortcutTe: `⚡ ఆవర్తత దశాంశాలకు 9లు మరియు 0ల షార్ట్‌కట్ ట్రిక్:
• బార్ (గీత) కింద ఎన్ని అంకెలు ఉంటే హారంలో అన్ని '9'లు రాయండి.
• దశాంశ బిందువుకు, బార్‌కు మధ్య ఎన్ని అంకెలు ఉంటే అన్ని '0'లు రాయండి!
ఉదాహరణ: 0.235̄ (ఇక్కడ 35 మీద బార్ ఉంది, 2 మీద లేదు):
లవం = 235 - 2 = 233. హారం = రెండు 9లు, ఒక 0 = 990 → సమాధానం = 233/990!`,
        examples: [
          {
            qEn: 'Express 0.4777... (0.47̄) as a vulgar fraction in its simplest form.',
            qTe: '0.4777... (0.47̄) ను కనిష్ట సాధారణ భిన్నం రూపంలో తెలపండి.',
            solEn: 'Here 7 repeats (one digit under bar) and 4 does not repeat (one digit before bar).\nNumerator = 47 - 4 = 43.\nDenominator = one 9 followed by one 0 = 90.\nRequired fraction = 43/90.',
            solTe: 'ఇక్కడ 7 మాత్రమే పునరావృతమవుతోంది (బార్ కింద 1 అంకె), 4 పునరావృతం కావడం లేదు (బార్ ముందు 1 అంకె).\nలవం = 47 - 4 = 43. హారం = 90.\nకావలసిన భిన్నం = 43/90.'
          },
          {
            qEn: 'Find the HCF and LCM of 0.6, 9.6, and 0.12.',
            qTe: '0.6, 9.6 మరియు 0.12 ల గ.సా.భా (HCF) మరియు క.సా.గు (LCM) కనుగొనండి.',
            solEn: 'Step 1: Equalize to 2 decimal places: 0.60, 9.60, 0.12.\nStep 2: Consider integers 60, 960, and 12.\nHCF(60, 960, 12) = 12 → Put 2 decimal places back → HCF = 0.12.\nLCM(60, 960, 12) = 960 → Put 2 decimal places back → LCM = 9.60 = 9.6.',
            solTe: 'సోపానం 1: దశాంశ స్థానాలను సమానం చేయగా: 0.60, 9.60, 0.12.\nసోపానం 2: పూర్ణ సంఖ్యలు 60, 960, 12 ల గ.సా.భా = 12 → రెండు దశాంశ స్థానాలు పెడితే HCF = 0.12.\n60, 960, 12 ల క.సా.గు = 960 → రెండు దశాంశ స్థానాలు పెడితే LCM = 9.6.'
          }
        ]
      },
      {
        id: 'math-square-roots',
        titleEn: '11. Square Roots (వర్గమూలాలు & ఘనమూలాలు)',
        titleTe: '11. వర్గాలు, వర్గమూలాలు మరియు ఘనమూలాలు (Square Roots)',
        importance: 'High Yield (2–3 Qs)',
        readTime: '12 mins',
        conceptEn: `Square Root (√x) of a number x is that value which, when multiplied by itself, gives x. Every RRB CBT paper includes questions on finding Square Roots of large perfect squares, Decimal Square Roots, Nested Square Roots (√(a + √(a + ...))), and Surds rationalization.
• A perfect square can NEVER end with unit digits 2, 3, 7, or 8, and can never have an odd number of trailing zeros.
• Perfect square unit digit mapping:
  - Ends in 1 → Square root ends in 1 or 9
  - Ends in 4 → Square root ends in 2 or 8
  - Ends in 5 → Square root ends in 5
  - Ends in 6 → Square root ends in 4 or 6
  - Ends in 9 → Square root ends in 3 or 7`,
        conceptTe: `ఒక సంఖ్యను అదే సంఖ్యతో గుణించగా వచ్చే లబ్దాన్ని 'వర్గం (Square)' అని, ఆ మూల సంఖ్యను 'వర్గమూలం (Square Root - √)' అని అంటారు. ఆర్‌ఆర్‌బి పరీక్షలలో పెద్ద సంఖ్యల వర్గమూలాలు, దశాంశ సంఖ్యల వర్గమూలాలు మరియు అనంత వర్గమూల శ్రేణుల నుండి 2–3 ప్రశ్నలు వస్తాయి.
• ఏ ఖచ్చితమైన వర్గ సంఖ్య (Perfect Square) చివరన (ఒకట్ల స్థానంలో) 2, 3, 7, 8 అంకెలు ఎప్పుడూ ఉండవు!
• వర్గ సంఖ్య చివరి అంకె → వర్గమూలం చివరి అంకె:
  - చివర 1 ఉంటే → 1 లేదా 9
  - చివర 4 ఉంటే → 2 లేదా 8
  - చివర 5 ఉంటే → 5
  - చివర 6 ఉంటే → 4 లేదా 6
  - చివర 9 ఉంటే → 3 లేదా 7`,
        formulas: [
          'Decimal Places in Square Root: If a decimal number has 2n decimal places, its square root has exactly n decimal places (e.g., √0.0009 = 0.03).',
          'Infinite Nested Addition: √(x + √(x + √(x + ...∞))) — Factorize x = n(n + 1); Answer is the larger factor (n + 1).',
          'Infinite Nested Subtraction: √(x - √(x - √(x - ...∞))) — Factorize x = n(n + 1); Answer is the smaller factor n.',
          'Infinite Nested Multiplication: √(x · √(x · √(x ...∞))) = x',
          'Surds Identity: (√a + √b)(√a - √b) = a - b  |  (√a ± √b)² = a + b ± 2√(ab)'
        ],
        shortcutEn: `⚡ 5-Second Last-2-Digits Strike-Out Trick for Square Roots:
To find √7921:
1. Look at unit digit 1 → Root ends in 1 or 9. Strike out last two digits (21).
2. Remaining number is 79. Find largest square ≤ 79: 8² = 64 (so tens digit is 8).
3. Compare 79 with 8 × 9 = 72. Since 79 > 72, pick the larger unit digit (9) → √7921 = 89!`,
        shortcutTe: `⚡ 5 సెకన్లలో వర్గమూలం కనుగొనే షార్ట్‌కట్ ట్రిక్ (√7921):
1. చివరి అంకె 1 కాబట్టి వర్గమూలం చివర 1 లేదా 9 వస్తుంది. చివరి 2 అంకెలు (21) కొట్టివేయండి.
2. మిగిలిన సంఖ్య 79. దీనికి దగ్గరగా ఉండే చిన్న వర్గం 8² = 64 (కాబట్టి పదుల స్థానం 8).
3. 8 ని తర్వాతి సంఖ్య 9 తో గుణించండి: 8 × 9 = 72. ఇక్కడ 79 అనేది 72 కంటే పెద్దది కాబట్టి పెద్ద అంకె (9) తీసుకోవాలి → √7921 = 89!`,
        examples: [
          {
            qEn: 'Given that √4096 = 64, find the value of: √40.96 + √0.4096 + √0.004096.',
            qTe: '√4096 = 64 అయినచో, √40.96 + √0.4096 + √0.004096 విలువ ఎంత?',
            solEn: 'Count pairs of decimal places:\n• √40.96 (2 decimal places → 1 place in root) = 6.4\n• √0.4096 (4 decimal places → 2 places in root) = 0.64\n• √0.004096 (6 decimal places → 3 places in root) = 0.064\nSum = 6.4 + 0.64 + 0.064 = 7.104.',
            solTe: 'దశాంశ స్థానాలలో సగం స్థానాలు వర్గమూలంలో ఉంటాయి:\n• √40.96 = 6.4\n• √0.4096 = 0.64\n• √0.004096 = 0.064\nమొత్తం = 6.4 + 0.64 + 0.064 = 7.104.'
          },
          {
            qEn: 'Find the value of: √(56 + √(56 + √(56 + ... up to ∞))) ÷ √(20 - √(20 - √(20 - ... up to ∞))).',
            qTe: '√(56 + √(56 + √(56 + ... ∞))) ÷ √(20 - √(20 - √(20 - ... ∞))) విలువను కనుగొనండి.',
            solEn: 'For 56 with (+) sign: 56 = 7 × 8 → pick larger factor = 8.\nFor 20 with (-) sign: 20 = 4 × 5 → pick smaller factor = 4.\nRequired value = 8 ÷ 4 = 2.',
            solTe: '56 ను వరుస సంఖ్యల లబ్దంగా రాస్తే 7 × 8. (+) గుర్తు ఉంది కాబట్టి పెద్ద సంఖ్య = 8.\n20 = 4 × 5. (-) గుర్తు ఉంది కాబట్టి చిన్న సంఖ్య = 4.\nకావలసిన విలువ = 8 ÷ 4 = 2.'
          }
        ]
      },
      {
        id: 'math-elementary-statistics',
        titleEn: '12. Elementary Statistics (ప్రాథమిక సాంఖ్యక శాస్త్రం)',
        titleTe: '12. ప్రాథమిక సాంఖ్యక శాస్త్రం — సగటు, మధ్యగతం, బాహుళకం (Statistics)',
        importance: 'Must-Master (2–3 Qs)',
        readTime: '13 mins',
        conceptEn: `Elementary Statistics is a high-scoring topic in RRB NTPC (CBT-1 & CBT-2) and Group-D. Every shift features 2 to 3 direct questions on Mean (Average), Median, Mode, Range, Variance, and Standard Deviation.
• Mean (x̄): Sum of all observations divided by total number of observations.
• Median (M): The middle-most value when data is arranged in ascending or descending order.
• Mode (Z): The observation that occurs most frequently (highest frequency) in the dataset.
• Range: Difference between Maximum value and Minimum value (Range = Max - Min).`,
        conceptTe: `ఆర్‌ఆర్‌బి ఎన్‌టిపిసి (CBT-1 & CBT-2) మరియు గ్రూప్-డి పరీక్షలలో 'ప్రాథమిక సాంఖ్యక శాస్త్రం (Elementary Statistics)' నుండి 2 నుండి 3 ప్రశ్నలు తప్పనిసరిగా అడుగుతారు.
• అంకగణిత సగటు (Mean): రాశుల మొత్తం ÷ రాశుల సంఖ్య.
• మధ్యగతం (Median): ఇచ్చిన రాశులను ఆరోహణ (చిన్న నుండి పెద్ద) లేదా అవరోహణ క్రమంలో అమర్చినప్పుడు సరిగ్గా మధ్యలో ఉండే విలువ.
• బాహుళకం (Mode): ఇచ్చిన దత్తాంశంలో అత్యధిక సార్లు పునరావృతమైన (ఎక్కువ పౌనఃపున్యం గల) విలువ.
• వ్యాప్తి (Range): గరిష్ట విలువ - కనిష్ట విలువ.`,
        formulas: [
          'Arithmetic Mean (x̄) = (Σxᵢ) / n  |  For grouped frequency data: x̄ = (Σfᵢxᵢ) / (Σfᵢ)',
          'Median (Arrange in Ascending Order first!): If n is Odd → [(n + 1)/2]-th term; If n is Even → Average of (n/2)-th and (n/2 + 1)-th terms',
          'Empirical Formula (Pearson\'s Relation): Mode = 3 × Median - 2 × Mean',
          'Range = Largest Value (L) - Smallest Value (S)',
          'Variance (σ²) = [ Σ(xᵢ - x̄)² ] / n  |  Standard Deviation (σ) = √(Variance) = √(σ²)',
          'Coefficient of Variation (CV) = (Standard Deviation / Mean) × 100 = (σ / x̄) × 100%'
        ],
        shortcutEn: `⚡ Golden Empirical Formula & Change of Origin/Scale Trick:
1. Remember "Mode = 3 Median - 2 Mean" (3 - 2 = 1). Also written as: Mode - Mean = 3(Median - Mean).
2. If every observation in a dataset is increased/decreased by k, the Mean, Median, and Mode all change by k, Deal-Breaker: Variance and Standard Deviation DO NOT CHANGE by adding/subtracting a constant! If every value is multiplied by k, Standard Deviation becomes k × σ and Variance becomes k² × σ².`,
        shortcutTe: `⚡ గోల్డెన్ ఎంపిరికల్ సూత్రం & ప్రామాణిక విచలనం షార్ట్‌కట్:
1. బాహుళకం (Mode) = 3 × మధ్యగతం (Median) - 2 × సగటు (Mean).
2. దత్తాంశంలోని ప్రతి రాశికి స్థిర సంఖ్య k ని కలిపినా లేదా తీసివేసినా — ప్రామాణిక విచలనం (Standard Deviation) మరియు విస్తృతి (Variance) అస్సలు మారవు! కానీ ప్రతి రాశిని k తో గుణిస్తే మాత్రం SD = k × σ మరియు Variance = k² × σ² అవుతుంది!`,
        examples: [
          {
            qEn: 'Find the Mean, Median, Mode, and Range of the dataset: 12, 8, 15, 12, 20, 10, 12, 18, 10.',
            qTe: '12, 8, 15, 12, 20, 10, 12, 18, 10 దత్తాంశం యొక్క సగటు (Mean), మధ్యగతం (Median), బాహుళకం (Mode) మరియు వ్యాప్తి (Range) కనుగొనండి.',
            solEn: 'Step 1: Arrange in ascending order (n = 9 observations):\n8, 10, 10, 12, 12, 12, 15, 18, 20.\n• Mean = (8+10+10+12+12+12+15+18+20) / 9 = 117 / 9 = 13.\n• Median = [(9 + 1)/2]-th = 5th term = 12.\n• Mode = Most frequent value (appears 3 times) = 12.\n• Range = Max - Min = 20 - 8 = 12.',
            solTe: 'సోపానం 1: ఆరోహణ క్రమంలో అమర్చగా (n = 9): 8, 10, 10, 12, 12, 12, 15, 18, 20.\n• సగటు (Mean) = 117 / 9 = 13.\n• మధ్యగతం (Median) = 5వ పదం = 12.\n• బాహుళకం (Mode) = అత్యధికంగా 3 సార్లు వచ్చిన సంఖ్య = 12.\n• వ్యాప్తి (Range) = 20 - 8 = 12.'
          },
          {
            qEn: 'If the Mean of a distribution is 24 and its Median is 26, find its Mode. Also, if its Variance is 36, find the Coefficient of Variation (CV).',
            qTe: 'ఒక దత్తాంశం యొక్క సగటు 24 మరియు మధ్యగతం 26 అయినచో బాహుళకం ఎంత? అలాగే విస్తృతి (Variance) 36 అయితే విచలన గుణకం (CV) ఎంత?',
            solEn: '1. Mode = 3 × Median - 2 × Mean = 3(26) - 2(24) = 78 - 48 = 30.\n2. Standard Deviation (σ) = √Variance = √36 = 6.\n3. Coefficient of Variation (CV) = (σ / Mean) × 100 = (6 / 24) × 100 = 25%.',
            solTe: '1. బాహుళకం (Mode) = 3(26) - 2(24) = 78 - 48 = 30.\n2. ప్రామాణిక విచలనం (σ) = √36 = 6.\n3. విచలన గుణకం (CV) = (σ / సగటు) × 100 = (6 / 24) × 100 = 25%.'
          }
        ]
      },
      {
        id: 'math-calendar-clock',
        titleEn: '13. Calendar and Clock (క్యాలెండర్ మరియు గడియారం)',
        titleTe: '13. క్యాలెండర్ మరియు గడియారం లెక్కలు (Calendar & Clock)',
        importance: 'High Yield (2 Qs)',
        readTime: '14 mins',
        conceptEn: `Calendar and Clock is explicitly listed in the official RRB Mathematics & General Intelligence syllabus.
• Calendar (Odd Days Concept): Remainder obtained when total number of days is divided by 7 is called "Odd Days".
  - Ordinary Year = 365 days = 52 weeks + 1 Odd Day (First and last day of an ordinary year are the SAME).
  - Leap Year = 366 days = 52 weeks + 2 Odd Days (Divisible by 4; for century years like 1600, 2000, must be divisible by 400).
• Clock (Angle & Hands Concept):
  - Hour hand covers 360° in 12 hours → 30° per hour → 0.5° per minute.
  - Minute hand covers 360° in 60 minutes → 6° per minute.
  - Relative speed of minute hand over hour hand = 6° - 0.5° = 5.5° (or 11/2°) per minute.`,
        conceptTe: `ఆర్‌ఆర్‌బి అధికారిక సిలబస్‌లో 'క్యాలెండర్ మరియు గడియారం (Calendar & Clock)' గణిత విభాగంలో ప్రత్యేకంగా ఇవ్వబడింది.
• క్యాలెండర్ (విషమ రోజులు / Odd Days): మొత్తం రోజులను 7 చే భాగించగా వచ్చే శేషాన్ని 'Odd Days' అంటారు.
  - సాధారణ సంవత్సరం = 365 రోజులు = 52 వారాలు + 1 విషమ రోజు (సాధారణ సంవత్సరంలో జనవరి 1 మరియు డిసెంబర్ 31 ఒకే వారం అవుతాయి!).
  - లీపు సంవత్సరం = 366 రోజులు = 52 వారాలు + 2 విషమ రోజులు (4 చే భాగించబడేవి; శతాబ్దపు సంవత్సరాలైతే 400 చే భాగించబడాలి).
• గడియారం (కోణాలు & ముల్లులు):
  - గంటల ముల్లు 1 గంటకు 30° (నిమిషానికి 0.5°) తిరుగుతుంది.
  - నిమిషాల ముల్లు 1 నిమిషానికి 6° తిరుగుతుంది.
  - సాపేక్ష వేగం = 6° - 0.5° = 5.5° (11/2°) ప్రతి నిమిషానికి.`,
        formulas: [
          'Odd Days in Centuries: 100 Years = 5 Odd Days | 200 Years = 3 Odd Days | 300 Years = 1 Odd Day | 400 Years = 0 Odd Days',
          'Angle (θ) between Hour (H) and Minute (M) hands = | 30H - (11/2)M | (If θ > 180°, Reflex Angle = 360° - θ)',
          'Hands Coincide (0° angle): Every 65(5/11) minutes → 11 times in 12 hours, 22 times in 24 hours',
          'Hands Opposite (180° straight line): 11 times in 12 hours, 22 times in 24 hours',
          'Hands at Right Angle (90°): 22 times in 12 hours, 44 times in 24 hours',
          'Mirror Image Time: Subtract given time from 11:60 (or 23:60 for 24-hr clock)',
          'Water Image Time: Subtract given time from 18:30 (or 17:90 if minutes > 30)'
        ],
        shortcutEn: `⚡ Calendar Repetition & Clock Angle Master Tricks:
1. Calendar Repetition Rule: Divide the last 2 digits of the year by 4:
   • If remainder = 1 → Add +6 years (e.g., 2021 repeats in 2027)
   • If remainder = 2 or 3 → Add +11 years (e.g., 2022 repeats in 2033)
   • If remainder = 0 (Leap Year) → Add +28 years (e.g., 2024 repeats in 2052)!
2. Clock Ratio Trick: Whenever time is in ratio 1 : 5 (like 2:10, 3:15, 4:20, 6:30), the angle is simply (Minutes ÷ 2)! At 4:20, angle = 20 ÷ 2 = 10°!`,
        shortcutTe: `⚡ క్యాలెండర్ పునరావృతం & గడియారం కోణం సూపర్ ట్రిక్స్:
1. ఏ సంవత్సర క్యాలెండర్ మళ్ళీ ఎప్పుడు రిపీట్ అవుతుంది? (సంవత్సరాన్ని 4 చే భాగించగా):
   • శేషం 1 వస్తే → +6 ఏళ్లు కలపండి (ఉదా: 2021 క్యాలెండర్ 2027 లో రిపీట్ అవుతుంది)
   • శేషం 2 లేదా 3 వస్తే → +11 ఏళ్లు కలపండి (ఉదా: 2023 → 2034)
   • శేషం 0 (లీపు సంవత్సరం) అయితే → +28 ఏళ్లు కలపండి (ఉదా: 2024 → 2052)!
2. గడియారం 1:5 నిష్పత్తి ట్రిక్: సమయం 1:5 నిష్పత్తిలో ఉంటే (ఉదా: 3:15, 4:20, 5:25, 6:30), కోణం = (నిమిషాలు ÷ 2) మాత్రమే! 4:20 వద్ద కోణం = 20 ÷ 2 = 10°!`,
        examples: [
          {
            qEn: 'Find the acute angle between the hour hand and the minute hand of a clock at 3:40 PM.',
            qTe: 'గడియారంలో సమయం 3:40 అయినప్పుడు గంటల ముల్లు, నిమిషాల ముల్లు మధ్య కోణం ఎంత?',
            solEn: 'Using formula θ = | 30H - (11/2)M | where H = 3 and M = 40:\nθ = | 30(3) - (11/2)(40) | = | 90 - 220 | = 130°.',
            solTe: 'సూత్రం: θ = | 30H - (11/2)M |, ఇక్కడ H = 3, M = 40:\nθ = | 30(3) - (11/2)(40) | = | 90 - 220 | = 130°.'
          },
          {
            qEn: 'If 15th August 2021 was a Sunday, what day of the week was 15th August 2025?',
            qTe: '15 ఆగస్టు 2021 ఆదివారం అయితే, 15 ఆగస్టు 2025 ఏ వారం అవుతుంది?',
            solEn: 'Count odd days from 15 Aug 2021 to 15 Aug 2025 (4 years):\n• 2021→2022: 1 odd day\n• 2022→2023: 1 odd day\n• 2023→2024 (includes Feb 29, 2024 leap year): 2 odd days\n• 2024→2025: 1 odd day\nTotal odd days = 1 + 1 + 2 + 1 = 5 odd days.\nSunday + 5 days = Friday.',
            solTe: '15 ఆగస్టు 2021 నుండి 15 ఆగస్టు 2025 వరకు (4 సంవత్సరాలు: ఇందులో 2024 లీపు సంవత్సరం):\nమొత్తం విషమ రోజులు (Odd days) = 1 + 1 + 2 (2024 లీపు) + 1 = 5 రోజులు.\nఆదివారం + 5 రోజులు = శుక్రవారం (Friday).'
          }
        ]
      }
    ]
  },
  {
    id: 'reasoning',
    nameEn: 'General Intelligence & Reasoning',
    nameTe: 'జనరల్ ఇంటెలిజెన్స్ & రీజనింగ్ (మేధాశక్తి)',
    icon: '🧠',
    weightageCbt1: '30 Questions • 30 Marks',
    weightageCbt2: '35 Questions • 35 Marks',
    color: '#7c3aed',
    topics: [
      {
        id: 'reas-series',
        titleEn: '1. Number & Alphabetical Series (శ్రేణులు)',
        titleTe: '1. సంఖ్య మరియు అక్షర శ్రేణులు (Number & Letter Series)',
        importance: 'Highest Weightage (4–5 Qs)',
        readTime: '10 mins',
        conceptEn: `Number Series tests pattern recognition: Difference series, Double difference, Squares/Cubes (±1), Prime numbers, or Alternating series. For Letter Series, use Alphabet Position Values (EJOTY = 5, 10, 15, 20, 25).`,
        conceptTe: `సంఖ్యా శ్రేణులలో భేదం (Difference), వర్గాలు/ఘనాలు (n²±1, n³±1), ప్రధాన సంఖ్యలు లేదా ప్రత్యామ్నాయ శ్రేణి (Alternate series) ఉంటాయి. అక్షర శ్రేణులకు EJOTY (5, 10, 15, 20, 25) కోడ్ వాడండి.`,
        formulas: [
          'EJOTY Positions: E = 5, J = 10, O = 15, T = 20, Y = 25',
          'Opposite Letter Pair Sum is ALWAYS 27 (e.g., A(1) + Z(26) = 27, B(2) + Y(25) = 27, M(13) + N(14) = 27)',
          'Common Cube Series: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000'
        ],
        shortcutEn: `⚡ Opposite Letters Mnemonic:
AZ (Azad), BY (Boy), CX (Crux), DW (Dew), EV (Evening), FU (Full), GT (GT Express), HS (High School), IR (Indian Railway!), JQ (Jungle Queen), KP (Kanpur), LO (Love), MN (Man).`,
        shortcutTe: `⚡ వ్యతిరేక అక్షరాల జతలు (మొత్తం = 27):
AZ, BY, CX, DW, EV, FU, GT (గ్రాండ్ ట్రంక్ ఎక్స్‌ప్రెస్), HS (హైస్కూల్), IR (ఇండియన్ రైల్వే!), JQ, KP, LO, MN.`,
        examples: [
          {
            qEn: 'Find the missing number in the series: 7, 15, 31, 63, 127, ?',
            qTe: 'ఈ క్రింది శ్రేణిలో తర్వాతి సంఖ్యను కనుగొనండి: 7, 15, 31, 63, 127, ?',
            solEn: 'Pattern is (×2 + 1): 7×2+1 = 15; 15×2+1 = 31; 31×2+1 = 63; 63×2+1 = 127.\nNext term = 127 × 2 + 1 = 255.',
            solTe: 'నియమం (×2 + 1): 7×2+1 = 15, 15×2+1 = 31, 63×2+1 = 127.\nకావున తర్వాతి సంఖ్య = 127 × 2 + 1 = 255.'
          }
        ]
      },
      {
        id: 'reas-coding-decoding',
        titleEn: '2. Coding & Decoding (కోడింగ్ & డీకోడింగ్)',
        titleTe: '2. కోడింగ్ మరియు డీకోడింగ్ (Coding & Decoding)',
        importance: 'High Yield (3–4 Qs)',
        readTime: '11 mins',
        conceptEn: `Questions involve Letter Shifting (+1, +2, -1), Opposite Letter Coding, Position Value Sum/Product, or Chinese Coding (Common Word Elimination).`,
        conceptTe: `ఇందులో అక్షరాల స్థాన మార్పిడి (+1, +2), వ్యతిరేక అక్షరాలు, అక్షర విలువల మొత్తం లేదా వాక్యాలలో ఉమ్మడి పదాల కోడింగ్ (Chinese Coding) అడుగుతారు.`,
        formulas: [
          'Always write numerical positions (1 to 26) above letters first.',
          'Check Forward pattern, Reverse pattern (last letter to first), and Pair Cross pattern.'
        ],
        shortcutEn: `⚡ First & Last Letter Check:
In exam options, check only the first and last letter of the decoded word first — in 80% of RRB questions, that eliminates 3 options immediately!`,
        shortcutTe: `⚡ మొదటి మరియు చివరి అక్షరం ట్రిక్:
మొత్తం పదాన్ని డీకోడ్ చేసే ముందు, కేవలం మొదటి మరియు చివరి అక్షరాన్ని మాత్రమే కనుగొని ఆప్షన్లలో చూడండి — 80% ప్రశ్నలలో వెంటనే సమాధానం దొరుకుతుంది!`,
        examples: [
          {
            qEn: 'In a certain code, TRAIN iswritten as WUDLQ. How is METRO written in that code?',
            qTe: 'ఒక కోడ్ భాషలో TRAIN ని WUDLQ గా రాస్తే, METRO ని ఎలా రాస్తారు?',
            solEn: 'T(20)+3=W(23), R(18)+3=U(21), A(1)+3=D(4), I(9)+3=L(12), N(14)+3=Q(17). Every letter is shifted by +3.\nFor METRO (+3): M(13)+3=P, E(5)+3=H, T(20)+3=W, R(18)+3=U, O(15)+3=R → PHWUR.',
            solTe: 'ప్రతి అక్షరానికి +3 కలిపారు: T+3=W, R+3=U, A+3=D, I+3=L, N+3=Q.\nఅదే విధంగా METRO కి +3 కలిపితే: M→P, E→H, T→W, R→U, O→R → PHWUR.'
          }
        ]
      },
      {
        id: 'reas-analogy-odd',
        titleEn: '3. Analogies & Classification (పోలికలు & భిన్నమైనవి)',
        titleTe: '3. పోలికలు (Analogy) & భిన్నమైన దానిని గుర్తించుట',
        importance: 'High Yield (3–4 Qs)',
        readTime: '9 mins',
        conceptEn: `Analogy tests relationships between pairs (Word Analogy: Country-Capital, Instrument-Measurement; Number Analogy: Squares, Cubes, Prime operations; Letter Analogy).`,
        conceptTe: `మొదటి రెండు పదాల మధ్య ఉన్న సంబంధాన్ని గుర్తించి, మూడవ పదానికి సరిపోయే నాల్గవ పదాన్ని కనుగొనాలి (రాష్ట్రం-రాజధాని, పరికరం-కొలత, వర్గాలు, ఘనాలు మొదలైనవి).`,
        formulas: [
          'Priority Order in Number Analogy: 1) Prime Numbers → 2) Cubes → 3) Squares → 4) Multiplication/Division → 5) Addition/Subtraction'
        ],
        shortcutEn: `⚡ Number Analogy Priority Rule:
If 4 : 9 is given, always check Squares/Primes before simple addition (+5).`,
        shortcutTe: `⚡ సంఖ్యా పోలికలలో ప్రాధాన్యతా క్రమం:
1) ప్రధాన సంఖ్యలు → 2) ఘనాలు → 3) వర్గాలు → 4) గుణకారం/భాగాహారం → 5) కూడిక/తీసివేత.`,
        examples: [
          {
            qEn: 'Select the related number: 6 : 222 :: 7 : ?',
            qTe: 'సంబంధం గల సంఖ్యను ఎంచుకోండి: 6 : 222 :: 7 : ?',
            solEn: 'Pattern is n³ + n: 6³ + 6 = 216 + 6 = 222.\nSimilarly for 7: 7³ + 7 = 343 + 7 = 350.',
            solTe: 'నియమం (n³ + n): 6³ + 6 = 216 + 6 = 222.\nఅదే విధంగా 7³ + 7 = 343 + 7 = 350.'
          }
        ]
      },
      {
        id: 'reas-blood-relations',
        titleEn: '4. Blood Relations (రక్త సంబంధాలు)',
        titleTe: '4. రక్త సంబంధాలు (Blood Relations)',
        importance: 'High Yield (2–3 Qs)',
        readTime: '11 mins',
        conceptEn: `Use a Family Tree diagram: Put '+' or Box for Male, '-' or Circle for Female, '=' for Married Couple, single horizontal line for Siblings, and vertical line for Generation gap.`,
        conceptTe: `రక్త సంబంధాల ప్రశ్నలకు ఫ్యామిలీ ట్రీ గీయండి: పురుషులకు (+), స్త్రీలకు (-), భార్యాభర్తలకు (=), తోబుట్టువులకు (-) మరియు తరాల భేదానికి నిలువు గీత (|) వాడండి.`,
        formulas: [
          'Mother\'s or Father\'s only son/daughter = Yourself (or sibling depending on gender)',
          'Father\'s brother = Paternal Uncle | Mother\'s brother = Maternal Uncle (మామయ్య)'
        ],
        shortcutEn: `⚡ Pointing to a Photograph Trick:
Always start solving from the word "MY" (నా యొక్క) and move step-by-step backwards!`,
        shortcutTe: `⚡ ఫోటో వైపు చూపిస్తూ చెప్పే ప్రశ్నల ట్రిక్:
వాక్యంలో "నా యొక్క (My)" అనే పదం నుండి ప్రారంభించి వెనుకకు ఒక్కొక్క సంబంధాన్ని కలుపుకుంటూ వెళ్తే 15 సెకన్లలో జవాబు వస్తుంది!`,
        examples: [
          {
            qEn: 'Pointing to a man, Anjali said, "He is the only son of my mother\'s father." How is the man related to Anjali?',
            qTe: 'ఒక వ్యక్తిని చూపిస్తూ అంజలి ఇలా అన్నది: "అతను నా తల్లి యొక్క తండ్రికి ఏకైక కుమారుడు." ఆ వ్యక్తి అంజలికి ఏమవుతాడు?',
            solEn: 'Start from "my": My mother\'s father = Maternal Grandfather. Only son of Maternal Grandfather = Mother\'s brother = Maternal Uncle (మామయ్య).',
            solTe: '"నా తల్లి యొక్క తండ్రి" = తాతయ్య. తాతయ్యకు ఏకైక కుమారుడు = తల్లి యొక్క సోదరుడు = మేనమామ (Maternal Uncle).'
          }
        ]
      },
      {
        id: 'reas-directions',
        titleEn: '5. Direction Sense & Distance (దిశలు - దూరాలు)',
        titleTe: '5. దిశలు మరియు దూరాలు (Direction Sense)',
        importance: 'High Yield (2–3 Qs)',
        readTime: '10 mins',
        conceptEn: `Standard Map Directions: Top = North (ఉత్తరం), Bottom = South (దక్షిణం), Right = East (తూర్పు), Left = West (పడమర). Right turn = 90° Clockwise; Left turn = 90° Anti-clockwise.`,
        conceptTe: `పటం ప్రకారం: పైకి = ఉత్తరం (North), క్రిందకు = దక్షిణం (South), కుడివైపు = తూర్పు (East), ఎడమవైపు = పడమర (West). కనిష్ట దూరం కనుగొనడానికి పైథాగరస్ సిద్ధాంతం వాడాలి.`,
        formulas: [
          'Shortest Distance (Hypotenuse) = √(Base² + Perpendicular²)',
          'Pythagorean Triplets to Memorize: (3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 15, 17), (7, 24, 25)'
        ],
        shortcutEn: `⚡ Left-Right Cancellation Trick:
If a person only asks for the FINAL DIRECTION (not distance), cancel every 1 Right turn with 1 Left turn! Four Right turns (4R) or Four Left turns (4L) = Same Direction!`,
        shortcutTe: `⚡ కుడి-ఎడమ రద్దు (Cancellation) ట్రిక్:
చివరగా ఏ దిశలో ఉన్నారో మాత్రమే అడిగితే, పటం గీయనవసరం లేదు! ఒక కుడి మలుపు (R) ని ఒక ఎడమ మలుపు (L) తో కొట్టివేయండి!`,
        examples: [
          {
            qEn: 'Kiran walks 8 km North, turns right and walks 6 km. How far and in which direction is he from the starting point?',
            qTe: 'కిరణ్ ఉత్తరం వైపు 8 కి.మీ నడిచి, కుడివైపు తిరిగి 6 కి.మీ నడిచాడు. బయలుదేరిన స్థానం నుండి అతను ఎంత దూరంలో, ఏ దిశలో ఉన్నాడు?',
            solEn: '8 km North and 6 km East form a right triangle. Shortest distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km, Direction = North-East (ఈశాన్యం).',
            solTe: 'కనిష్ట దూరం = √(8² + 6²) = √100 = 10 కి.మీ. దిశ = ఉత్తర-తూర్పు (ఈశాన్యం / North-East).'
          }
        ]
      },
      {
        id: 'reas-syllogism-venn',
        titleEn: '6. Syllogism & Venn Diagrams (సిల్లోజిజం & వెన్ చిత్రాలు)',
        titleTe: '6. సిల్లోజిజం మరియు వెన్ చిత్రాలు',
        importance: 'Must-Master (3–4 Qs)',
        readTime: '13 mins',
        conceptEn: `Draw the minimum overlapping Venn Diagram for the given statements. A definite conclusion is true ONLY if it holds in every possible diagram.`,
        conceptTe: `ఇచ్చిన ప్రకటనలకు (Statements) వెన్ చిత్రం గీసి, తీర్మానాలు (Conclusions) కచ్చితంగా నిజమవుతాయో లేదో పరీక్షించాలి.`,
        formulas: [
          'All A are B → Circle A inside Circle B',
          'Some A are B → Circles A and B intersect',
          'No A is B → Circles A and B have a cross-line barrier between them',
          'Either-Or Rule: Complementary pair ("Some A are B" + "No A is B") where both are individually doubtful.'
        ],
        shortcutEn: `⚡ Positive-Negative Golden Rule:
If all statements are POSITIVE, any negative conclusion ("No..." or "Some... not") is immediately FALSE!`,
        shortcutTe: `⚡ అనుకూల ప్రకటనల గోల్డెన్ రూల్:
ఇచ్చిన ప్రకటనలన్నీ అనుకూలంగా (Positive) ఉంటే, వ్యతిరేక తీర్మానాలు (Negative Conclusions) ఎల్లప్పుడూ తప్పు అవుతాయి!`,
        examples: [
          {
            qEn: 'Statements: All Trains are Engines. Some Engines are Coaches.\nConclusions: I. Some Trains are Coaches. II. Some Coaches are Engines.',
            qTe: 'ప్రకటనలు: అన్ని రైళ్లు ఇంజన్లు. కొన్ని ఇంజన్లు బోగీలు.\nతీర్మానాలు: I. కొన్ని రైళ్లు బోగీలు. II. కొన్ని బోగీలు ఇంజన్లు.',
            solEn: 'Trains circle is inside Engines, and Coaches intersects Engines (not necessarily touching Trains). So I is doubtful (False), while II is definitely True. Answer: Only Conclusion II follows.',
            solTe: 'రైళ్లు మరియు బోగీల మధ్య ప్రత్యక్ష సంబంధం చెప్పలేదు కాబట్టి తీర్మానం I తప్పు. కొన్ని ఇంజన్లు బోగీలు కావున తీర్మానం II మాత్రమే సరైనది.'
          }
        ]
      },
      {
        id: 'reas-seating-puzzles',
        titleEn: '7. Seating Arrangement & Linear/Circular Puzzles',
        titleTe: '7. సీటింగ్ అరేంజ్‌మెంట్ & పజిల్స్',
        importance: 'CBT-1 & CBT-2 (3–4 Qs)',
        readTime: '14 mins',
        conceptEn: `In Circular Arrangement facing Center: Right is Anti-clockwise, Left is Clockwise. In Linear Row facing North: Your Right is their Right, Your Left is their Left.`,
        conceptTe: `వృత్తాకారంలో కేంద్రం వైపు కూర్చున్నప్పుడు: కుడివైపు అనగా అపసవ్య దిశ (Anti-clockwise), ఎడమవైపు అనగా సవ్య దిశ (Clockwise).`,
        formulas: [
          '"Who / Which" always refers to the SECOND person (nearest antecedent).',
          '"And / But / While" always refers to the FIRST person of the sentence.'
        ],
        shortcutEn: `⚡ "WHO" vs "AND" Rule:
"A sits 2nd to the left of B, WHO is 3rd to the right of C" → "WHO" means B!
"A sits 2nd to the left of B, AND is 3rd to the right of C" → "AND" means A!`,
        shortcutTe: `⚡ "ఆమె/అతను (And)" vs "ఎవరైతే (Who)" నియమం:
వాక్యంలో "Who" వస్తే దాని ముందున్న రెండవ వ్యక్తికి వర్తిస్తుంది. "And / But" వస్తే వాక్యం మొదటి వ్యక్తికి వర్తిస్తుంది!`,
        examples: [
          {
            qEn: 'In a row of 40 students, Ravi is 13th from the left end. What is his position from the right end?',
            qTe: '40 మంది విద్యార్థులు గల వరుసలో రవి ఎడమవైపు నుండి 13వ వాడు. అయిన కుడివైపు నుండి అతని స్థానం ఎంత?',
            solEn: 'Formula: Total = (Left + Right) - 1 → 40 = 13 + Right - 1 → Right = 40 - 12 = 28th.',
            solTe: 'సూత్రం: మొత్తం = (ఎడమ + కుడి) - 1 → కుడివైపు స్థానం = (40 - 13) + 1 = 28వ స్థానం.'
          }
        ]
      },
      {
        id: 'reas-math-operations',
        titleEn: '8. Mathematical Operations & Symbol Substitution',
        titleTe: '8. గణిత గుర్తుల మార్పిడి మరియు సమీకరణాల సాధన',
        importance: 'Guaranteed (2–3 Qs)',
        readTime: '10 mins',
        conceptEn: 'Involves replacing mathematical operators (+ for -, × for ÷, etc.) and applying BODMAS rule strictly. Never perform calculations from left to right without BODMAS precedence.',
        conceptTe: 'గణిత గుర్తులను (+ స్థానంలో -, × స్థానంలో ÷ మొదలైనవి) మార్చి BODMAS నియమం ప్రకారం క్రమ పద్ధతిలో సాధించాలి. బ్రాకెట్ → భాగాహారం → గుణకారం → కూడిక → తీసివేత క్రమాన్ని తప్పనిసరిగా పాటించాలి.',
        formulas: [
          'Precedence Order: B (Brackets) → O (Of) → D (Division ÷) → M (Multiplication ×) → A (Addition +) → S (Subtraction -)',
          'Balancing Equations: Testing which pair of signs must be interchanged to satisfy the RHS.'
        ],
        shortcutEn: '⚡ Look at Division First: Check if the swapped division operator yields a whole integer. If it produces a fraction where RHS is an integer, eliminate that option immediately!',
        shortcutTe: '⚡ భాగాహారం ట్రిక్: మార్చబడిన భాగాహార గుర్తు నిశ్శేషంగా భాగిస్తుందా లేదా చూడండి. భిన్నం వస్తూ RHS పూర్ణాంకం అయితే ఆ ఆప్షన్ నేరుగా తొలగించవచ్చు!',
        examples: [
          {
            qEn: 'If "+" means "÷", "-" means "×", "×" means "+", and "÷" means "-", find: 36 + 6 - 3 × 5 ÷ 3 = ?',
            qTe: '"+" అనగా "÷", "-" అనగా "×", "×" అనగా "+", "÷" అనగా "-" అయితే: 36 + 6 - 3 × 5 ÷ 3 విలువ ఎంత?',
            solEn: 'Substitute symbols: (36 ÷ 6) × 3 + 5 - 3 = 6 × 3 + 5 - 3 = 18 + 5 - 3 = 20.',
            solTe: 'గుర్తులను మార్చగా: (36 ÷ 6) × 3 + 5 - 3 = 6 × 3 + 5 - 3 = 18 + 5 - 3 = 20.'
          }
        ]
      },
      {
        id: 'reas-jumbling-dictionary',
        titleEn: '9. Jumbling & Meaningful Word Arrangement',
        titleTe: '9. పదాల క్రమ అమరిక & డిక్షనరీ ఆర్డర్ (Jumbling)',
        importance: 'High Yield (2 Qs)',
        readTime: '9 mins',
        conceptEn: 'Two common types: (1) Arranging words in logical chronological sequence (e.g., Infant → Child → Adolescent → Adult → Old), (2) Arranging words in alphabetical dictionary order letter-by-letter.',
        conceptTe: 'రెండు రకాల ప్రశ్నలు: (1) సహజ తార్కిక క్రమం (ఉదా: విత్తనం → మొలక → మొక్క → చెట్టు → పండు), (2) ఆంగ్ల నిఘంటువు (Dictionary) అక్షర క్రమంలో అమర్చడం.',
        formulas: [
          'For Dictionary Order: Compare letter by letter from left to right.',
          'For Logical Sequence: Identify the starting initiation stage and final output stage.'
        ],
        shortcutEn: '⚡ Find Extreme Ends: Identify which item MUST come first and which MUST come last. Usually only one option has that combination!',
        shortcutTe: '⚡ మొదటి మరియు చివరి అంశాన్ని గుర్తించుట: అన్నింటికంటే మొదట ఏది వస్తుంది, చివర ఏది వస్తుందో చూడండి. 90% ప్రశ్నలలో ఆప్షన్ల ద్వారా నేరుగా సమాధానం దొరుకుతుంది!',
        examples: [
          {
            qEn: 'Arrange in logical order: 1. Application, 2. Notification, 3. Appointment, 4. Exam, 5. Result',
            qTe: 'తార్కిక క్రమంలో అమర్చండి: 1. దరఖాస్తు, 2. నోటిఫికేషన్, 3. నియామక పత్రం, 4. పరీక్ష, 5. ఫలితాలు',
            solEn: 'Order: Notification (2) → Application (1) → Exam (4) → Result (5) → Appointment (3). Sequence: 2, 1, 4, 5, 3.',
            solTe: 'సరియైన క్రమం: నోటిఫికేషన్ (2) → దరఖాస్తు (1) → పరీక్ష (4) → ఫలితాలు (5) → నియామకం (3). వరుస: 2, 1, 4, 5, 3.'
          }
        ]
      },
      {
        id: 'reas-statement-conclusions',
        titleEn: '10. Statements, Assumptions & Conclusions (Critical Reasoning)',
        titleTe: '10. ప్రకటనలు - తీర్మానాలు & అంతర్లీన ఊహలు (విమర్శనాత్మక రీజనింగ్)',
        importance: 'High Yield in CBT-2 (3–4 Qs)',
        readTime: '12 mins',
        conceptEn: 'Tests analytical ability: You must accept the statement as 100% TRUE even if it contradicts known facts. A conclusion is valid ONLY if it directly and logically follows without assuming outside facts.',
        conceptTe: 'ప్రకటనను 100% సత్యమని భావించాలి. ప్రకటనలో ఇచ్చిన సమాచారం నుండి మాత్రమే నేరుగా నిరూపితమయ్యే తీర్మానం సరైనది. సొంతంగా బయటి విషయాలను ఊహించకూడదు.',
        formulas: [
          'Words like "Only", "All", "Never", "Definitely" usually make a conclusion too rigid and invalid unless stated in premise.',
          'Words like "Some", "Many", "Can be", "May" have higher probability of validity.'
        ],
        shortcutEn: '⚡ The Restatement Trap: A conclusion that merely repeats the premise in different words is generally not a valid logical inference.',
        shortcutTe: '⚡ అతివాద పదాల నివారణ: "ఖచ్చితంగా మాత్రమే", "ఎప్పుడూ కాదు" వంటి అతివాద పదాలు ఉన్న తీర్మానాలు సాధారణంగా సరైనవి కావు.',
        examples: [
          {
            qEn: 'Statement: "All students who practice mock tests regularly clear RRB exam." Conclusion I: Manoj practices mocks, so he will clear. Conclusion II: Suresh did not clear, so he did not practice.',
            qTe: 'ప్రకటన: "క్రమం తప్పకుండా మాక్ టెస్టులు రాసే విద్యార్థులందరూ రైల్వే పరీక్ష పాసవుతారు." తీర్మానం I: మనోజ్ మాక్ టెస్టులు రాస్తున్నాడు కాబట్టి పాసవుతాడు. తీర్మానం II: సురేష్ పాస్ కాలేదు, కాబట్టి అతను మాక్స్ రాయలేదు.',
            solEn: 'Both I and II follow logically from the absolute condition stated in the statement.',
            solTe: 'ప్రకటనలోని స్పష్టమైన నిబంధన ప్రకారం తీర్మానం I మరియు II రెండూ సరైనవే.'
          }
        ]
      },
      {
        id: 'reas-nonverbal',
        titleEn: '11. Non-Verbal: Dice, Mirror Images & Paper Folding',
        titleTe: '11. అశాబ్దిక రీజనింగ్: పాచికలు, అద్దంలో ప్రతిబింబాలు & పేపర్ ఫోల్డింగ్',
        importance: 'High Yield (3 Qs)',
        readTime: '11 mins',
        conceptEn: 'Tests visual spatial orientation. Standard Dice: Opposite faces sum to 7 (1 opposite 6, 2 opposite 5, 3 opposite 4). Ordinary Dice: Find common face between two positions and rotate clockwise to find opposites.',
        conceptTe: 'ప్రామాణిక పాచికలో ఎదురెదురు ముఖాల మొత్తం ఎల్లప్పుడూ 7 (1కి 6, 2కి 5, 3కి 4). సాధారణ పాచికలో రెండు స్థానాల్లో ఉమ్మడిగా ఉన్న సంఖ్య నుండి సవ్య దిశలో (Clockwise) తిప్పి ఎదురెదురు ముఖాలు తెలుసుకోవచ్చు.',
        formulas: [
          'Mirror Image: Left becomes Right, Right becomes Left. Top and Bottom REMAIN UNCHANGED.',
          'Water Image: Top becomes Bottom, Bottom becomes Top. Left and Right REMAIN UNCHANGED.'
        ],
        shortcutEn: '⚡ The Common Face Rule for Dice: If two positions of a dice share two numbers, the remaining third numbers on both dice are OPPOSITE to each other!',
        shortcutTe: '⚡ పాచికల షార్ట్‌కట్ ట్రిక్: రెండు పాచికల్లో రెండు సంఖ్యలు సమానంగా ఉంటే, మిగిలిన మూడవ సంఖ్యలు పరస్పరం ఎదురెదురుగా ఉంటాయి!',
        examples: [
          {
            qEn: 'Two positions of a dice show (1, 2, 3) and (1, 4, 5). Which number is opposite to 2?',
            qTe: 'ఒక పాచిక రెండు స్థానాలలో (1, 2, 3) మరియు (1, 4, 5) చూపిస్తున్నాయి. 2కి ఎదురుగా ఉండే సంఖ్య ఏది?',
            solEn: 'Common number is 1. Rotating clockwise: 1 → 2 → 3, and 1 → 4 → 5. Therefore, 2 is opposite to 4, and 3 is opposite to 5.',
            solTe: 'ఉమ్మడి సంఖ్య 1. సవ్య దిశలో తిప్పగా: 1 → 2 → 3, మరియు 1 → 4 → 5. కావున 2కి ఎదురుగా 4 ఉంటుంది!'
          }
        ]
      }
    ]
  },
  {
    id: 'ga',
    nameEn: 'General Awareness & Indian Railways GK',
    nameTe: 'జనరల్ అవేర్‌నెస్ & భారతీయ రైల్వే జీకే',
    icon: '🌏',
    weightageCbt1: '40 Questions • 40 Marks (with Science)',
    weightageCbt2: '50 Questions • 50 Marks (with Science)',
    color: '#ea580c',
    topics: [
      {
        id: 'ga-indian-railways',
        titleEn: '1. Indian Railways History, Zones & Headquarters',
        titleTe: '1. భారతీయ రైల్వే చరిత్ర, జోన్లు & ప్రధాన కార్యాలయాలు',
        importance: 'Guaranteed in RRB (3–4 Qs)',
        readTime: '14 mins',
        conceptEn: `• First Train in India: 16 April 1853 between Bori Bunder (Mumbai) and Thane (34 km) during Lord Dalhousie's tenure, pulled by 3 locomotives: Sahib, Sindh, and Sultan.
• First Electric Train: 3 Feb 1925 between Bombay VT and Kurla.
• Nationalization of Indian Railways: 1951.
• Railway Budget was merged with Union Budget in 2017 (on recommendation of Bibek Debroy Committee; separated earlier in 1924 via Acworth Committee).
• Longest Railway Platform in the World: SSS Hubballi Junction (Karnataka) — 1,507 meters.
• Longest Train Route in India: Vivek Express (Dibrugarh to Kanyakumari — 4,189 km).
• Highest Railway Bridge in the World: Chenab Rail Bridge (Jammu & Kashmir — 359 m above riverbed).`,
        conceptTe: `• భారతదేశంలో మొదటి రైలు: 1853 ఏప్రిల్ 16న ముంబై (బోరిబందర్) నుండి థానే వరకు (34 కి.మీ) లార్డ్ డల్హౌసీ కాలంలో నడిచింది (ఇంజన్లు: సాహిబ్, సింధ్, సుల్తాన్).
• మొదటి విద్యుత్ రైలు: 1925 ఫిబ్రవరి 3 (బాంబే VT నుండి కుర్లా).
• భారతీయ రైల్వే జాతీయీకరణ: 1951.
• రైల్వే బడ్జెట్‌ను 1924లో ఆక్వర్త్ కమిటీ సిఫార్సుతో వేరు చేశారు; మళ్ళీ 2017లో బిబేక్ దేబ్రాయ్ కమిటీ సిఫార్సుతో సాధారణ బడ్జెట్‌లో విలీనం చేశారు.
• ప్రపంచంలోనే అత్యంత పొడవైన రైల్వే ప్లాట్‌ఫారమ్: శ్రీ సిద్ధారూఢ స్వామీజీ హుబ్బಳ್ಳಿ జంక్షన్ (కర్ణాటక - 1,507 మీటర్లు).
• భారతదేశంలో అత్యంత పొడవైన రైలు మార్గం: వివేక్ ఎక్స్‌ప్రెస్ (దిబ్రూగఢ్ నుండి కన్యాకుమారి).
• ప్రపంచంలో అత్యంత ఎత్తైన రైల్వే వంతెన: చీనాబ్ రైల్వే వంతెన (జమ్మూ & కాశ్మీర్ - 359 మీటర్లు).`,
        formulas: [
          'South Central Railway (SCR) HQ: Secunderabad (Est. 1966)',
          'South Coast Railway (SCoR - 18th Zone) HQ: Visakhapatnam',
          'Southern Railway (SR) HQ: Chennai | South Western Railway (SWR) HQ: Hubballi',
          'Central Railway & Western Railway HQ: Mumbai (CSMT & Churchgate)',
          'Eastern Railway, South Eastern Railway & Metro Railway HQ: Kolkata',
          'Northern Railway HQ: New Delhi | North Central Railway HQ: Prayagraj',
          'Broad Gauge Width = 1.676 meters (5 ft 6 in) | Metre Gauge = 1.000 m | Narrow Gauge = 0.762 m'
        ],
        shortcutEn: `⚡ Direction-to-City HQ Memory Trick:
North = New Delhi | South = Chennai | East = Kolkata | West = Mumbai | Central = Mumbai CSMT | South Central = Secunderabad!`,
        shortcutTe: `⚡ రైల్వే జోన్ల ప్రధాన కార్యాలయాల కోడ్:
ఉత్తర (North) = న్యూఢిల్లీ | దక్షిణ (South) = చెన్నై | తూర్పు (East) = కోల్‌కతా | పశ్చిమ (West) = ముంబై | దక్షిణ మధ్య (SCR) = సికింద్రాబాద్ | దక్షిణ కోస్తా (SCoR) = విశాఖపట్నం!`,
        examples: [
          {
            qEn: 'Where is the Integral Coach Factory (ICF) located, where Vande Bharat Express rakes were first manufactured?',
            qTe: 'వందే భారత్ ఎక్స్‌ప్రెస్ కోచ్‌లను మొట్టమొదట తయారు చేసిన ఇంటిగ్రల్ కోచ్ ఫ్యాక్టరీ (ICF) ఎక్కడ ఉంది?',
            solEn: 'Perambur, Chennai (Tamil Nadu), established in 1955.',
            solTe: 'పెరంబూర్, చెన్నై (తమిళనాడు) - ఇది 1955లో స్థాపించబడింది.'
          }
        ]
      },
      {
        id: 'ga-polity',
        titleEn: '2. Indian Polity & Constitution (భారత రాజ్యాంగం)',
        titleTe: '2. భారత రాజ్యాంగం మరియు రాజకీయ వ్యవస్థ',
        importance: 'High Yield (4–5 Qs)',
        readTime: '15 mins',
        conceptEn: `• Constituent Assembly adopted the Constitution on 26 November 1949 (Constitution Day) and it came into force on 26 January 1950.
• Chairman of Drafting Committee: Dr. B.R. Ambedkar; Permanent President of Constituent Assembly: Dr. Rajendra Prasad.
• Fundamental Rights (Part III, Articles 12–35, borrowed from USA).
• Directive Principles of State Policy - DPSP (Part IV, Articles 36–51, borrowed from Ireland).
• Fundamental Duties (Part IVA, Article 51A, added by 42nd Amendment 1976 on Swaran Singh Committee recommendation — 11 Duties today).`,
        conceptTe: `• భారత రాజ్యాంగాన్ని 1949 నవంబర్ 26న ఆమోదించారు, 1950 జనవరి 26న అమలులోకి వచ్చింది.
• ముసాయిదా కమిటీ (Drafting Committee) చైర్మన్: డా. బి.ఆర్. అంబేద్కర్. రాజ్యాంగ పరిషత్ శాశ్వత అధ్యక్షుడు: డా. రాజేంద్ర ప్రసాద్.
• ప్రాథమిక హక్కులు: 3వ భాగం, ఆర్టికల్స్ 12–35 (అమెరికా నుండి గ్రహించారు).
• ఆదేశిక సూత్రాలు (DPSP): 4వ భాగం, ఆర్టికల్స్ 36–51 (ఐర్లాండ్ నుండి గ్రహించారు).
• ప్రాథమిక విధులు: 4A భాగం, ఆర్టికల్ 51A (స్వరణ్ సింగ్ కమిటీ సిఫార్సుతో 1976లో 42వ సవరణ ద్వారా చేర్చారు — ప్రస్తుతం 11 విధులు కలవు).`,
        formulas: [
          'Art 14: Equality before Law | Art 17: Abolition of Untouchability | Art 19: Freedom of Speech',
          'Art 21: Right to Life & Personal Liberty | Art 21A: Right to Education (6–14 yrs, 86th Amendment)',
          'Art 32: Right to Constitutional Remedies (Heart & Soul of Constitution - 5 Writs)',
          'Art 40: Organization of Village Panchayats | Art 44: Uniform Civil Code (UCC)',
          'Art 52: President of India | Art 61: Impeachment | Art 72: Pardoning Power | Art 123: Ordinance',
          'Art 352: National Emergency | Art 356: President\'s Rule | Art 360: Financial Emergency | Art 368: Constitutional Amendment'
        ],
        shortcutEn: `⚡ Important Amendments Must-Know:
42nd (1976) = Mini Constitution (Added Socialist, Secular, Integrity & Fundamental Duties)
44th (1978) = Right to Property removed from Fundamental Rights to Art 300A
61st (1989) = Voting age reduced from 21 to 18 years
73rd & 74th (1992) = Panchayati Raj & Municipalities
101st = GST | 106th = Nari Shakti Vandan Adhiniyam (Women's Reservation).`,
        shortcutTe: `⚡ ముఖ్యమైన రాజ్యాంగ సవరణలు:
42వ సవరణ (1976): మినీ రాజ్యాంగం (సామ్యవాద, లౌకిక, సమగ్రత పదాలు & ప్రాథమిక విధులు చేరిక)
44వ సవరణ (1978): ఆస్తి హక్కును ప్రాథమిక హక్కుల నుండి తొలగించి ఆర్టికల్ 300A లో చేర్చారు
61వ సవరణ (1989): ఓటు హక్కు వయస్సు 21 నుండి 18 ఏళ్లకు తగ్గింపు
73, 74 సవరణలు (1992): పంచాయతీ రాజ్ మరియు మున్సిపాలిటీలు
101వ సవరణ: GST (వస్తు సేవల పన్ను).`,
        examples: [
          {
            qEn: 'Which Article did Dr. B.R. Ambedkar call the "Heart and Soul of the Indian Constitution"?',
            qTe: 'డాక్టర్ బి.ఆర్. అంబేద్కర్ ఏ ఆర్టికల్‌ను "భారత రాజ్యాంగ హృదయం మరియు ఆత్మ" అని వర్ణించారు?',
            solEn: 'Article 32 (Right to Constitutional Remedies), under which Supreme Court issues 5 writs.',
            solTe: 'ఆర్టికల్ 32 (రాజ్యాంగ పరిహారపు హక్కు).'
          }
        ]
      },
      {
        id: 'ga-history',
        titleEn: '3. Indian History & Freedom Struggle (భారతదేశ చరిత్ర)',
        titleTe: '3. భారతదేశ చరిత్ర మరియు స్వాతంత్ర్య ఉద్యమం',
        importance: 'High Yield (4–5 Qs)',
        readTime: '15 mins',
        conceptEn: `Covers Indus Valley Civilization (Harappa, Mohenjo-daro, Lothal dockyard), Buddhism & Jainism, Mauryan Empire (Ashoka's Rock Edicts), Gupta Golden Age, Delhi Sultanate & Mughals, and Modern Indian National Movement (1857 Revolt to 1947 Independence).`,
        conceptTe: `సింధూ నాగరికత (హరప్పా, మొహెంజోదారో, లోథాల్ నౌకాశ్రయం), బౌద్ధ మరియు జైన మతాలు, మౌర్య సామ్రాజ్యం (అశోకుని శిలాశాసనాలు), గుప్తుల స్వర్ణయుగం, ఢిల్లీ సుల్తానులు, మొఘలులు మరియు భారత స్వాతంత్ర్య ఉద్యమం (1857 తిరుగుబాటు నుండి 1947 వరకు) నుండి ఎక్కువగా ప్రశ్నలు వస్తాయి.`,
        formulas: [
          '1885: Formation of Indian National Congress (A.O. Hume; 1st President: W.C. Bonnerjee at Bombay)',
          '1905: Partition of Bengal (Lord Curzon) & Swadeshi Movement',
          '1915: Mahatma Gandhi returns from South Africa (9 Jan - Pravasi Bharatiya Divas)',
          '1917: Champaran Satyagraha | 1919: Rowlatt Act & Jallianwala Bagh Massacre',
          '1920: Non-Cooperation Movement | 1930: Dandi March & Civil Disobedience Movement',
          '1942: Quit India Movement ("Do or Die" slogan by Mahatma Gandhi)'
        ],
        shortcutEn: `⚡ INC Key Sessions Trick:
1907 Surat Split (Rash Behari Ghosh) | 1916 Lucknow Pact (Ambica Charan Mazumdar) | 1924 Belgaum (Only session presided by Mahatma Gandhi) | 1925 Kanpur (Sarojini Naidu - 1st Indian Woman) | 1929 Lahore (Jawaharlal Nehru - Purna Swaraj).`,
        shortcutTe: `⚡ జాతీయ కాంగ్రెస్ ముఖ్య సమావేశాలు:
1907 సూరత్ చీలిక | 1916 లక్నో ఒప్పందం | 1924 బెల్గాం (మహాత్మా గాంధీ అధ్యక్షత వహించిన ఏకైక సమావేశం) | 1925 కాన్పూర్ (సరోజినీ నాయుడు - తొలి భారతీయ మహిళ) | 1929 లాహోర్ (జవహర్‌లాల్ నెహ్రూ - పూర్ణ స్వరాజ్ తీర్మానం).`,
        examples: [
          {
            qEn: 'Who founded the Brahmo Samaj in 1828 and Arya Samaj in 1875?',
            qTe: '1828లో బ్రహ్మ సమాజాన్ని మరియు 1875లో ఆర్య సమాజాన్ని ఎవరు స్థాపించారు?',
            solEn: 'Brahmo Samaj (1828): Raja Ram Mohan Roy. Arya Samaj (1875): Swami Dayananda Saraswati ("Go back to the Vedas").',
            solTe: 'బ్రహ్మ సమాజం (1828): రాజా రామ్మోహన్ రాయ్. ఆర్య సమాజం (1875): స్వామి దయానంద సరస్వతి ("వేదాలకు మరలండి").'
          }
        ]
      },
      {
        id: 'ga-geography-economy',
        titleEn: '4. Indian Geography, Rivers, Dams & Economy',
        titleTe: '4. భారత భూగోళశాస్త్రం, నదులు, ప్రాజెక్టులు & ఆర్థిక వ్యవస్థ',
        importance: 'High Yield (4–5 Qs)',
        readTime: '14 mins',
        conceptEn: `Covers Himalayan & Peninsular Rivers, Major Dams, National Parks, Soil Types, Census 2011, Reserve Bank of India (RBI), GDP, Five-Year Plans, and NITI Aayog.`,
        conceptTe: `భారతదేశ నదీ వ్యవస్థ, ఆనకట్టలు, జాతీయ పార్కులు, జనాభా లెక్కలు (2011), రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా (RBI), పంచవర్ష ప్రణాళికలు మరియు నీతి ఆయోగ్ ముఖ్యమైన అంశాలు.`,
        formulas: [
          'West-Flowing Rivers (form Estuaries): Narmada, Tapti, Mahi, Sabarmati, Luni',
          'East-Flowing Rivers (form Deltas): Ganga, Brahmaputra, Mahanadi, Godavari (Dakshin Ganga), Krishna, Kaveri',
          'Major Dams: Tehri Dam (Bhagirathi, Uttarakhand - Highest), Hirakud Dam (Mahanadi, Odisha - Longest), Nagarjuna Sagar & Srisailam (Krishna)',
          'RBI Established: 1 April 1935 (Hilton Young Commission), Nationalized: 1 Jan 1949; HQ: Mumbai',
          'NITI Aayog Formed: 1 January 2015 (Chairman: Prime Minister of India)'
        ],
        shortcutEn: `⚡ West Flowing Rivers Code — "SAMANTA":
Sa = Sabarmati, Ma = Mahi, N = Narmada, Ta = Tapti! All four flow West into the Arabian Sea.`,
        shortcutTe: `⚡ పశ్చిమానికి ప్రవహించే నదుల కోడ్ — "సమానత (Sa-Ma-N-Ta)":
Sa = సబర్మతి, Ma = మహి, N = నర్మద, Ta = తపతి! ఇవన్నీ పశ్చిమానికి ప్రవహించి అరేబియా సముద్రంలో కలుస్తాయి.`,
        examples: [
          {
            qEn: 'Which river is known as "Dakshin Ganga" (Vriddha Ganga), and where does it originate?',
            qTe: 'ఏ నదిని "దక్షిణ గంగ (వృద్ధ గంగ)" అని పిలుస్తారు మరియు అది ఎక్కడ జన్మిస్తుంది?',
            solEn: 'Godavari River (longest peninsular river, 1,465 km). It originates at Trimbakeshwar in Nashik district, Maharashtra.',
            solTe: 'గోదావరి నది (ద్వీపకల్ప భారతదేశంలో అత్యంత పొడవైన నది - 1,465 కి.మీ). ఇది మహారాష్ట్రలోని నాసిక్ జిల్లా త్రయంబకేశ్వర్ వద్ద జన్మిస్తుంది.'
          }
        ]
      },
      {
        id: 'ga-current-affairs-2026',
        titleEn: '5. Current Affairs 2025–2026: National & Global Events',
        titleTe: '5. తాజా వర్తమాన అంశాలు 2025–2026: జాతీయ & అంతర్జాతీయ పరిణామాలు',
        importance: 'Merit Decider (7–9 Qs)',
        readTime: '16 mins',
        conceptEn: 'Focus on 2025-2026 Global Summits (G20, BRICS, SCO, COP-29/30), Major Appointments (Chief Justice of India, Railway Board Chairperson), Nobel Prizes 2025, Bharat Ratna, and Major Global Indices (India rank).',
        conceptTe: '2025-2026 అంతర్జాతీయ సదస్సులు (G20, బ్రిక్స్, ఎస్‌సిఓ), ప్రధాన నియామకాలు (రైల్వే బోర్డ్ చైర్మన్, సుప్రీంకోర్టు ప్రధాన న్యాయమూర్తి), నోబెల్ బహుమతులు 2025, భారత రత్న మరియు వివిధ అంతర్జాతీయ సూచీలలో భారత ర్యాంకులు.',
        formulas: [
          'Railway Board Chairperson & CEO: First woman chairperson was Jaya Varma Sinha.',
          'Chief Justice of India (CJI): Appointed by the President under Article 124(2).',
          'Nobel Prize Categories: Physics, Chemistry, Physiology/Medicine, Literature, Peace, and Economic Sciences.'
        ],
        shortcutEn: '⚡ Focus 6-9 Months Before Exam: RRB consistently asks questions from the 6 to 9 months preceding the CBT examination date.',
        shortcutTe: '⚡ పరీక్షకు ముందు 6-9 నెలల కరెంట్ అఫైర్స్ పై ప్రత్యేక దృష్టి సారించండి — 85% ప్రశ్నలు ఈ కాలం నుండే వస్తాయి.',
        examples: [
          {
            qEn: 'Who is the executive head of the Railway Board under the Ministry of Railways?',
            qTe: 'రైల్వే మంత్రిత్వ శాఖ క్రింద రైల్వే బోర్డు యొక్క పరిపాలనా అధిపతి ఎవరు?',
            solEn: 'Chairman and Chief Executive Officer (CEO) of Railway Board.',
            solTe: 'రైల్వే బోర్డు చైర్మన్ & చీఫ్ ఎగ్జిక్యూటివ్ ఆఫీసర్ (CEO).'
          }
        ]
      },
      {
        id: 'ga-sports',
        titleEn: '6. Games, Sports, Olympics & Tournaments',
        titleTe: '6. క్రీడారంగం: ఒలింపిక్స్, ప్రపంచ కప్‌లు & జాతీయ క్రీడలు',
        importance: 'High Yield (3–4 Qs)',
        readTime: '12 mins',
        conceptEn: 'Covers Paris 2024 Olympic & Paralympic Games (India medal tally & champions), ICC Cricket World Cups & Champions Trophy, National Games, Major Trophies (Ranji, Santosh, Thomas, Uber), and Sports Honors (Khel Ratna, Arjuna Awards).',
        conceptTe: 'పారిస్ ఒలింపిక్స్ & పారాలింపిక్స్ (భారత పతకాలు, విజేతలు), ఐసిసి క్రికెట్ టోర్నమెంట్లు, గ్రాండ్‌స్లామ్ టెన్నిస్, జాతీయ క్రీడలు మరియు మేజర్ ధ్యాన్‌చంద్ ఖేల్ రత్న, అర్జున అవార్డు గ్రహీతలు.',
        formulas: [
          'Major Dhyan Chand Khel Ratna: India\'s highest sporting honour (Cash prize ₹25 Lakhs).',
          'Olympic Rings: 5 rings representing 5 inhabited continents (Blue = Europe, Yellow = Asia, Black = Africa, Green = Oceania, Red = Americas).',
          'Grand Slam Order: Australian Open (Hard) → French Open (Clay) → Wimbledon (Grass) → US Open (Hard).'
        ],
        shortcutEn: '⚡ Grand Slam Surfaces Mnemonic — "HCGH": Hard court (Aus), Clay court (French), Grass court (Wimbledon), Hard court (US)!',
        shortcutTe: '⚡ గ్రాండ్‌స్లామ్ కోర్టుల ట్రిక్: ఆస్ట్రేలియన్ (హార్డ్ కోర్ట్), ఫ్రెంచ్ (క్లే/మట్టి కోర్ట్), వింబుల్డన్ (గడ్డి/గ్రాస్ కోర్ట్), యుఎస్ (హార్డ్ కోర్ట్)!',
        examples: [
          {
            qEn: 'Which is the oldest Grand Slam tennis tournament in the world?',
            qTe: 'ప్రపంచంలోనే అత్యంత పురాతనమైన గ్రాండ్‌స్లామ్ టెన్నిస్ టోర్నమెంట్ ఏది?',
            solEn: 'Wimbledon (established 1877, played on grass courts).',
            solTe: 'వింబుల్డన్ (1877లో ప్రారంభమైంది, గడ్డి కోర్టులలో ఆడతారు).'
          }
        ]
      },
      {
        id: 'ga-culture-monuments',
        titleEn: '7. Art, Culture, Classical Dances & UNESCO Sites',
        titleTe: '7. భారతీయ కళలు, సాంస్కృతిక వారసత్వం & యునెస్కో గుర్తింపు ప్రదేశాలు',
        importance: 'High Yield (3–4 Qs)',
        readTime: '13 mins',
        conceptEn: 'Covers 8 Official Classical Dances recognized by Sangeet Natak Akademi, Major Folk Dances, Harvest Festivals (Makar Sankranti, Pongal, Bihu, Onam), and India\'s 42+ UNESCO World Heritage Sites.',
        conceptTe: 'సంగీత నాటక అకాడమీ గుర్తించిన 8 శాస్త్రీయ నృత్యాలు, జానపద నృత్యాలు, రాష్ట్రాల వారీగా పండుగలు మరియు భారతదేశంలోని యునెస్కో (UNESCO) ప్రపంచ వారసత్వ ప్రదేశాలు.',
        formulas: [
          '8 Classical Dances: Kuchipudi (Andhra Pradesh), Bharatanatyam (Tamil Nadu), Kathakali & Mohiniyattam (Kerala), Kathak (Uttar Pradesh/North India), Odissi (Odisha), Manipuri (Manipur), Sattriya (Assam).',
          'Latest UNESCO Sites: Santiniketan (West Bengal), Sacred Ensembles of the Hoysalas (Karnataka), Ramappa Temple (Telangana).'
        ],
        shortcutEn: '⚡ Two Classical Dances from One State: Kerala is the ONLY state with TWO official classical dances (Kathakali and Mohiniyattam)!',
        shortcutTe: '⚡ కేరళ ప్రత్యేకత: భారతదేశంలో రెండు శాస్త్రీయ నృత్యాలు గల ఏకైక రాష్ట్రం కేరళ (కథాకళి & మోహినియాట్టం)!',
        examples: [
          {
            qEn: 'Which temple in Telangana was inscribed as a UNESCO World Heritage Site?',
            qTe: 'తెలంగాణలోని ఏ చారిత్రాత్మక ఆలయాన్ని యునెస్కో ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తించింది?',
            solEn: 'Ramappa (Kakatiya Rudreshwara) Temple at Palampet, Mulugu district.',
            solTe: 'రామప్ప (కాకతీయ రుద్రేశ్వర) దేవాలయం (పాలంపేట, ములుగు జిల్లా).'
          }
        ]
      },
      {
        id: 'ga-science-tech',
        titleEn: '8. Space, Defense & Modern Science: ISRO & DRDO',
        titleTe: '8. అంతరిక్షం & రక్షణ రంగం: ఇస్రో, డీఆర్డీవో మరియు ఆధునిక సాంకేతికత',
        importance: 'High Yield (3–4 Qs)',
        readTime: '14 mins',
        conceptEn: 'Covers ISRO major missions (Chandrayaan-3 Moon South Pole landing, Aditya-L1 Solar Mission, Gaganyaan Human Spaceflight, XPoSat, SSLV), DRDO Missiles (BrahMos, Agni-V, Akash, Astra), and Kavach ATP railway safety technology.',
        conceptTe: 'ఇస్రో చారిత్రాత్మక ప్రయోగాలు (చంద్రయాన్-3 దక్షిణ ధ్రువ ల్యాండింగ్, ఆదిత్య-L1 సూర్యుడి పరిశోధన, గగన్‌యాన్ మానవ సహిత యాత్ర), డీఆర్డీవో క్షిపణులు (బ్రహ్మోస్, అగ్ని-5, ఆకాశ్) మరియు రైల్వే కవచ్ (Kavach) స్వదేశీ భద్రతా వ్యవస్థ.',
        formulas: [
          'National Space Day of India: August 23 (commemorating Chandrayaan-3 landing at Shiv Shakti Point).',
          'ISRO HQ: Bengaluru (Established 15 August 1969; founder Dr. Vikram Sarabhai).',
          'Satish Dhawan Space Centre (SDSC SHAR): Sriharikota, Tirupati district, Andhra Pradesh.',
          'Kavach: Indigenous Automatic Train Protection (ATP) system developed by RDSO to prevent train collisions.'
        ],
        shortcutEn: '⚡ DRDO Integrated Missile Acronym — "PATNA": P = Prithvi, A = Agni, T = Trishul, N = Nag (anti-tank), A = Akash!',
        shortcutTe: '⚡ డీఆర్డీవో క్షిపణుల కోడ్ — "పాట్నా (PATNA)": పృథ్వి, అగ్ని, త్రిశూల్, నాగ్ (యాంటీ ట్యాంక్), ఆకాశ్!',
        examples: [
          {
            qEn: 'On which date is National Space Day celebrated in India, and why?',
            qTe: 'భారతదేశంలో జాతీయ అంతరిక్ష దినోత్సవాన్ని ఏ తేదీన జరుపుకుంటారు మరియు ఎందుకు?',
            solEn: 'August 23, to mark the historic soft landing of Chandrayaan-3 on the Moon in 2023.',
            solTe: 'ఆగస్టు 23, చంద్రయాన్-3 చంద్రుడిపై విజయవంతంగా ల్యాండ్ అయిన రోజును పురస్కరించుకుని.'
          }
        ]
      }
    ]
  },
  {
    id: 'science',
    nameEn: 'General Science & Computer Basics',
    nameTe: 'జనరల్ సైన్స్ & కంప్యూటర్ బేసిక్స్',
    icon: '🔬',
    weightageCbt1: '12–15 Questions inside GA',
    weightageCbt2: '15–18 Questions inside GA',
    color: '#059669',
    topics: [
      {
        id: 'sci-physics',
        titleEn: '1. Physics: Units, Motion, Light & Electricity',
        titleTe: '1. భౌతిక శాస్త్రం: ప్రమాణాలు, గమనం, కాంతి & విద్యుత్',
        importance: 'High Yield (4–5 Qs)',
        readTime: '14 mins',
        conceptEn: `Physics questions in RRB NTPC and Group D focus on SI Units, Newton's Laws of Motion, Work/Power/Energy, Mirrors & Lenses, and Ohm's Law / Electric Power.`,
        conceptTe: `ఆర్‌ఆర్‌బి పరీక్షలలో భౌతిక శాస్త్రం నుండి SI ప్రమాణాలు, న్యూటన్ గమన నియమాలు, పని-శక్తి-సామర్థ్యం, దర్పణాలు-కటకాలు మరియు ఓం నియమం నుండి ప్రశ్నలు వస్తాయి.`,
        formulas: [
          'SI Units: Force = Newton (N) | Work/Energy = Joule (J) | Power = Watt (W) | Electric Current = Ampere (A) | Resistance = Ohm (Ω) | Frequency = Hertz (Hz) | Lens Power = Dioptre (D = 1/f in meters)',
          'Kinetic Energy (KE) = ½ mv² | Potential Energy (PE) = mgh',
          'Ohm\'s Law: V = I × R | Electric Power P = V × I = I²R = V²/R',
          '1 commercial unit of electricity (1 kWh) = 3.6 × 10⁶ Joules',
          'Mirror Formula: 1/f = 1/v + 1/u | Lens Formula: 1/f = 1/v - 1/u'
        ],
        shortcutEn: `⚡ Concave vs Convex Mirror Uses (Asked in every RRB Exam!):
• Concave Mirror (పుటాకార దర్పణం - magnifies): Dentist's mirror, Shaving mirror, Vehicle Headlights, Solar Furnace.
• Convex Mirror (కుంభాకార దర్పణం - wide field of view, always virtual & diminished): Vehicle Rear-View (Side) Mirror!`,
        shortcutTe: `⚡ పుటాకార vs కుంభాకార దర్పణాల ఉపయోగాలు:
• పుటాకార దర్పణం (Concave Mirror): దంత వైద్యులు (ENT/Dentist), షేవింగ్ మిర్రర్, వాహనాల హెడ్‌లైట్లు, సోలార్ కుక్కర్.
• కుంభాకార దర్పణం (Convex Mirror): వాహనాలలో డ్రైవర్ పక్కన ఉండే రియర్-వ్యూ (Side) మిర్రర్!
• హ్రస్వదృష్టి (Myopia) నివారణకు: పుటాకార కటకం (Concave Lens); దీర్ఘదృష్టి (Hypermetropia) నివారణకు: కుంభాకార కటకం (Convex Lens).`,
        examples: [
          {
            qEn: 'If the velocity of a moving body is doubled, its Kinetic Energy becomes how many times?',
            qTe: 'ఒక వస్తువు యొక్క వేగాన్ని రెట్టింపు చేస్తే, దాని గతిజ శక్తి (Kinetic Energy) ఎన్ని రెట్లు అవుతుంది?',
            solEn: 'KE = ½ mv². Since KE is proportional to v², if v becomes 2v, KE becomes (2)² = 4 times!',
            solTe: 'KE = ½ mv². గతిజ శక్తి వేగం వర్గానికి (v²) అనులోమానుపాతంలో ఉంటుంది కాబట్టి, వేగం 2 రెట్లు అయితే గతిజ శక్తి 2² = 4 రెట్లు అవుతుంది!'
          }
        ]
      },
      {
        id: 'sci-chemistry',
        titleEn: '2. Chemistry: Acids, Bases, Metals & Everyday Chemistry',
        titleTe: '2. రసాయన శాస్త్రం: ఆమ్లాలు, క్షారాలు, లోహాలు & నిత్యజీవిత రసాయనాలు',
        importance: 'High Yield (4 Qs)',
        readTime: '12 mins',
        conceptEn: `Focus on Chemical Names & Formulas of common compounds, pH Scale (0 to 14), Natural Acids, Alloys, and Periodic Table basics (Modern Periodic Law by Henry Moseley based on Atomic Number).`,
        conceptTe: `నిత్యజీవితంలో వాడే రసాయనాల సాధారణ మరియు రసాయన నామాలు, pH స్కేలు, సహజ ఆమ్లాలు, మిశ్రమ లోహాలు మరియు ఆవర్తన పట్టిక (మోస్లీ పరమాణు సంఖ్య ఆధారంగా) చాలా ముఖ్యమైనవి.`,
        formulas: [
          'Baking Soda = Sodium Bicarbonate (NaHCO₃) | Washing Soda = Sodium Carbonate (Na₂CO₃·10H₂O)',
          'Bleaching Powder = Calcium Oxychloride (CaOCl₂)',
          'Plaster of Paris (PoP) = Calcium Sulphate Hemihydrate (CaSO₄ · ½H₂O)',
          'pH Scale: < 7 is Acidic, 7 is Neutral (Pure Water), > 7 is Basic (Human Blood pH ≈ 7.4)',
          'Alloys: Brass (ఇత్తడి) = Copper + Zinc | Bronze (కంచు) = Copper + Tin (Sn) | Solder = Lead + Tin'
        ],
        shortcutEn: `⚡ Natural Acids Quick Table:
Vinegar = Acetic Acid | Lemon/Orange = Citric Acid | Tamarind (చింతపండు) = Tartaric Acid | Tomato/Spinach = Oxalic Acid | Curd (పెరుగు) = Lactic Acid | Ant Sting = Formic (Methanoic) Acid!`,
        shortcutTe: `⚡ సహజ ఆమ్లాల పట్టిక:
వెనిగర్ = ఎసిటిక్ ఆమ్లం | నిమ్మ/నారింజ = సిట్రిక్ ఆమ్లం | చింతపండు = టార్టారిక్ ఆమ్లం | టమాటా = ఆక్జాలిక్ ఆమ్లం | పెరుగు/పాలు = లాక్టిక్ ఆమ్లం | చీమ కుట్టినప్పుడు = ఫార్మిక్ (మెథనోయిక్) ఆమ్లం!`,
        examples: [
          {
            qEn: 'Which metal is liquid at room temperature, and which non-metal is liquid at room temperature?',
            qTe: 'గది ఉష్ణోగ్రత వద్ద ద్రవ స్థితిలో ఉండే లోహం ఏది? మరియు ద్రవ స్థితిలో ఉండే అలోహం ఏది?',
            solEn: 'Liquid Metal: Mercury (Hg - పాదరసం). Liquid Non-Metal: Bromine (Br - బ్రోమిన్).',
            solTe: 'ద్రవ లోహం: పాదరసం (Mercury - Hg). ద్రవ అలోహం: బ్రోమిన్ (Bromine - Br).'
          }
        ]
      },
      {
        id: 'sci-biology',
        titleEn: '3. Biology: Vitamins, Human Body & Diseases',
        titleTe: '3. జీవశాస్త్రం: విటమిన్లు, మానవ శరీరం & వ్యాధులు',
        importance: 'High Yield (4–5 Qs)',
        readTime: '13 mins',
        conceptEn: `Covers Cell Organelles (Mitochondria = Powerhouse, Ribosome = Protein factory, Lysosome = Suicidal bag), Vitamins & Deficiency Diseases, Blood Groups (Karl Landsteiner; O- Universal Donor, AB+ Universal Recipient), and Viral/Bacterial/Protozoan diseases.`,
        conceptTe: `కణ నిర్మాణం (మైటోకాండ్రియా = కణ శక్త్యాగారం, లైసోజోమ్ = ఆత్మహత్యా సంచులు), విటమిన్లు - లోపం వల్ల వచ్చే వ్యాధులు, రక్త వర్గాలు (O- విశ్వదాత, AB+ విశ్వగ్రహీత) మరియు వ్యాధుల నుండి తప్పనిసరిగా ప్రశ్నలు వస్తాయి.`,
        formulas: [
          'Fat-Soluble Vitamins: A, D, E, K | Water-Soluble Vitamins: B-Complex and C',
          'Vitamin A (Retinol) → Night Blindness | Vitamin B1 (Thiamine) → Beriberi',
          'Vitamin C (Ascorbic Acid) → Scurvy | Vitamin D (Calciferol) → Rickets',
          'Vitamin K (Phylloquinone) → Failure of Blood Clotting',
          'Universal Blood Donor = O Negative (O-) | Universal Recipient = AB Positive (AB+)'
        ],
        shortcutEn: `⚡ Water vs Fat Soluble Vitamins Trick — "WBC":
W = Water Soluble → B and C!
All remaining (K, E, D, A → "KEDA") are Fat Soluble!`,
        shortcutTe: `⚡ విటమిన్ల షార్ట్‌కట్ కోడ్ — "WBC" & "KEDA":
W (Water - నీటిలో కరిగేవి) = B మరియు C విటమిన్లు!
"KEDA" (K, E, D, A విటమిన్లు) = కొవ్వులో కరిగేవి (Fat Soluble)!`,
        examples: [
          {
            qEn: 'Which part of the human brain controls posture, balance, and equilibrium of the body?',
            qTe: 'మానవ శరీర సమతాస్థితిని (Balance) నియంత్రించే మెదడు భాగం ఏది?',
            solEn: 'Cerebellum (అనుమస్తిష్కం / చిన్న మెదడు).',
            solTe: 'అనుమస్తిష్కం (Cerebellum / చిన్న మెదడు).'
          }
        ]
      },
      {
        id: 'sci-computer',
        titleEn: '4. Computer Basics, Networking & Shortcut Keys',
        titleTe: '4. కంప్యూటర్ బేసిక్స్, నెట్‌వర్కింగ్ & షార్ట్‌కట్ కీలు',
        importance: 'NTPC Special (3–4 Qs)',
        readTime: '10 mins',
        conceptEn: `RRB NTPC (Computer Based Test for Clerk/Typist/Station Master) always asks 3 to 4 questions on CPU, Memory Hierarchy (Register > Cache > RAM > SSD/HDD), Full Forms, and MS Office Shortcut Keys.`,
        conceptTe: `ఆర్‌ఆర్‌బి ఎన్‌టిపిసి పరీక్షలో కంప్యూటర్ మెమరీ (RAM, ROM, Cache), పూర్తి రూపాలు (Full Forms) మరియు కీబోర్డ్ షార్ట్‌కట్ కీల నుండి 3 నుండి 4 ప్రశ్నలు అడుగుతారు.`,
        formulas: [
          '1 Byte = 8 Bits | 1 Nibble = 4 Bits | 1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB',
          'RAM (Random Access Memory) = Volatile (Temporary) | ROM (Read Only Memory) = Non-Volatile (Permanent, stores BIOS)',
          'Full Forms: HTTP (HyperText Transfer Protocol), URL (Uniform Resource Locator), ALU (Arithmetic Logic Unit), DBMS (Database Management System)'
        ],
        shortcutEn: `⚡ Top RRB Exam Keyboard Shortcuts:
Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+X (Cut), Ctrl+Z (Undo), Ctrl+Y (Redo), Ctrl+K (Insert Hyperlink), F5 (Refresh / Slide Show in PPT), F7 (Spell Check), Alt+F4 (Close Window).`,
        shortcutTe: `⚡ ముఖ్యమైన కంప్యూటర్ షార్ట్‌కట్ కీలు:
Ctrl+Z = Undo | Ctrl+Y = Redo | Ctrl+K = హైపర్‌లింక్ (Hyperlink) | F7 = స్పెల్లింగ్ చెక్ (Spell Check) | F5 = రీఫ్రెష్ / పవర్‌పాయింట్ స్లైడ్ షో | F2 = ఫైల్ రీనేమ్ (Rename).`,
        examples: [
          {
            qEn: 'Which memory acts as an ultra-fast buffer between the CPU and Main Memory (RAM)?',
            qTe: 'CPU మరియు ప్రధాన మెమరీ (RAM) మధ్య అత్యంత వేగవంతమైన బఫర్‌గా పనిచేసే మెమరీ ఏది?',
            solEn: 'Cache Memory (క్యాష్ మెమరీ).',
            solTe: 'క్యాష్ మెమరీ (Cache Memory).'
          }
        ]
      }
    ]
  }
];
