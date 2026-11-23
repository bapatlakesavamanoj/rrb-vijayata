/**
 * RRB VIJETHA — COMPREHENSIVE TEXTBOOK SUB-TOPICS DATASET
 * Contains structured, realistic textbook sub-topics for:
 * 1. General Intelligence & Reasoning (11 Lessons)
 * 2. General Awareness & Indian Railways GK (8 Lessons)
 * 3. General Science & Computer Basics (4 Lessons)
 * 
 * Each sub-topic includes:
 * - Code & Bilingual Titles (English + Telugu)
 * - In-depth Theory Concepts (Bilingual)
 * - Key Rules & Formulae
 * - 5-Second Railway Exam Shortcut Tricks
 * - Examiner's Common Traps
 * - Step-by-Step Solved Previous-Year Questions
 * - Interactive Self-Assessment Drill Questions
 */

(function () {
  'use strict';

  const SUBTOPICS = {
    // =========================================================================
    // REASONING (11 LESSONS)
    // =========================================================================
    'reas-series': [
      {
        code: '1.1',
        titleEn: 'Number Series: Difference & Double-Difference Models',
        titleTe: 'సంఖ్యా శ్రేణులు: బేధాలు మరియు డబుల్-డిఫరెన్స్ మోడల్స్',
        importance: 'High Yield (2 Questions Guaranteed)',
        readTime: '8 mins',
        conceptEn: 'In RRB exams, 80% of Number Series problems are solved by checking the difference between consecutive terms. If the first difference does not show a pattern, calculate the second difference (Double-Difference). Common patterns include arithmetic steps (+3, +5, +7...), square steps (+1², +2², +3²...), and cube steps (+1³, +2³, +3³...).',
        conceptTe: 'ఆర్‌ఆర్‌బి పరీక్షలలో 80% సంఖ్యా శ్రేణుల ప్రశ్నలు వరుస పదాల మధ్య బేధాన్ని (Difference) కనుగొనడం ద్వారా పరిష్కరించవచ్చు. మొదటి వరుస బేధంలో నియమం కనిపించకపోతే, రెండవ వరుస బేధాన్ని (Double-Difference) లెక్కించాలి. ఇందులో అంకశ్రేణి పెరుగుదల, వర్గాల పెరుగుదల (+1², +2²...) లేదా ఘనాల పెరుగుదల సాధారణంగా ఉంటాయి.',
        ruleEn: 'Step 1: Check difference d1 = T(n) - T(n-1). If d1 is constant or increasing linearly, it is an AP step. Step 2: If differences grow quadratically, d2 = d1(n) - d1(n-1) will be constant.',
        ruleTe: 'నియమం: వరుస పదాల బేధం తీయండి. బేధం క్రమంగా పెరుగుతుంటే లేదా స్థిరంగా ఉంటే అది అంకశ్రేణి. బేధాల మధ్య బేధం స్థిరంగా ఉంటే అది వర్గ లేదా డబుల్ డిఫరెన్స్ శ్రేణి.',
        formula: 'T(n) = T(n-1) + [a + (n-1)d]  |  Double Difference d2 = constant',
        shortcutEn: '⚡ Instant Trick: If numbers grow slowly (< 3× per step), look strictly for ADDITION/DIFFERENCE. If numbers jump drastically (> 3× per step), check for MULTIPLICATION (×2+1, ×3-2) or CUBES!',
        shortcutTe: '⚡ 5 సెకన్ల షార్ట్‌కట్: సంఖ్యలు నెమ్మదిగా పెరుగుతుంటే కేవలం సంకలనం (Addition) లేదా బేధాన్ని చూడండి. సంఖ్యలు వేగంగా పెరిగితే గుణకారం (Multiplication) లేదా ఘనాలను (Cubes) తనిఖీ చేయండి!',
        trapEn: 'Do not rush into complex algebraic formulas; always write down the term differences first!',
        trapTe: 'నేరుగా సంక్లిష్ట సూత్రాలను ప్రయత్నించకండి; ముందుగా వరుస సంఖ్యల బేధాన్ని రఫ్ షీట్‌పై రాయండి.',
        exampleQEn: 'Find the next term in the series: 4, 9, 20, 43, 90, ?',
        exampleQTe: 'శ్రేణిలో తరువాతి పదాన్ని కనుగొనండి: 4, 9, 20, 43, 90, ?',
        exampleSolEn: 'Step 1: Analyze transition pattern: 4 × 2 + 1 = 9; 9 × 2 + 2 = 20; 20 × 2 + 3 = 43; 43 × 2 + 4 = 90. Step 2: Following the pattern (×2 + n), the next term is 90 × 2 + 5 = 180 + 5 = 185.',
        exampleSolTe: 'సోపానం 1: క్రమాన్ని పరిశీలించండి: 4 × 2 + 1 = 9; 9 × 2 + 2 = 20; 20 × 2 + 3 = 43; 43 × 2 + 4 = 90. సోపానం 2: తరువాతి పదం = 90 × 2 + 5 = 185.',
        drill: {
          questionEn: 'What replaces the question mark in: 2, 6, 12, 20, 30, ?',
          questionTe: 'క్రింది శ్రేణిలో ప్రశ్నార్థకం స్థానంలో వచ్చే సంఖ్య ఏది: 2, 6, 12, 20, 30, ?',
          optionsEn: ['A) 40', 'B) 42', 'C) 44', 'D) 46'],
          optionsTe: ['A) 40', 'B) 42', 'C) 44', 'D) 46'],
          correctIdx: 1,
          explanationEn: 'Differences are: 6-2 = +4; 12-6 = +6; 20-12 = +8; 30-20 = +10. Next difference must be +12. So 30 + 12 = 42 (Also n² + n: 1²+1, 2²+2, 3²+3, 4²+4, 5²+5, 6²+6 = 42).',
          explanationTe: 'బేధాలు: +4, +6, +8, +10. తరువాత వచ్చే బేధం +12. కావున 30 + 12 = 42 (లేదా n² + n నియమం: 6² + 6 = 42).'
        }
      },
      {
        code: '1.2',
        titleEn: 'Alphabetical & Continuous Pattern Letter Series',
        titleTe: 'అక్షర శ్రేణులు & కంటిన్యుయస్ లెటర్ ప్యాటర్న్స్',
        importance: 'High Yield (1–2 Questions)',
        readTime: '7 mins',
        conceptEn: 'Alphabetical series rely on the forward positions (A=1 to Z=26) and reverse positions (A=26 to Z=1) of English letters. In continuous repeating letter patterns (e.g., ab_ba_b_), count the total characters (including blanks) and divide into equal groups of 3, 4, or 5 to spot the repeating motif.',
        conceptTe: 'ఆంగ్ల అక్షర శ్రేణులు అక్షరాల స్థాన విలువలపై (A=1 నుండి Z=26) ఆధారపడతాయి. కంటిన్యుయస్ ప్యాటర్న్ ప్రశ్నలలో ఖాళీలతో కలిపి మొత్తం అక్షరాల సంఖ్యను లెక్కించి, వాటిని 3, 4 లేదా 5 సమాన భాగాలుగా విభజించడం ద్వారా సమాధానం లభిస్తుంది.',
        ruleEn: 'EJOTY Rule: E=5, J=10, O=15, T=20, Y=25. Reverse Sum Rule: Position from Left + Position from Right = 27 (e.g., A(1)+Z(26)=27, B(2)+Y(25)=27).',
        ruleTe: 'EJOTY సూత్రం: E=5, J=10, O=15, T=20, Y=25. వ్యతిరేక అక్షరాల స్థానాల మొత్తం ఎల్లప్పుడూ 27 (A+Z=27, B+Y=27).',
        formula: 'Left Position + Right Position = 27  |  Total Characters / Period = Group Size',
        shortcutEn: '⚡ Opposite Letter Pair Memory Trick: AZ (Amazon), BY (Boy), CX (Crux), DW (Dew), EV (Evening), FU (Full), GT (GT Road), HS (High School), IR (Indian Railway), JQ (Jungle Queen), KP (Kurukshetra/PK), LO (Love), MN (Moon/Man).',
        shortcutTe: '⚡ వ్యతిరేక అక్షరాల జతల ట్రిక్: AZ (ఆజాద్), BY (బాయ్), CX (సిక్స్), DW (డ్యూ), EV (ఈవెనింగ్), GT (జిటి రోడ్), HS (హైస్కూల్), IR (ఇండియన్ రైల్వేస్), KP (పవన్ కళ్యాణ్), LO (లవ్), MN (మ్యాన్).',
        trapEn: 'Do not count blanks and letters separately; count the total length first before grouping!',
        trapTe: 'ఖాళీలను విడిగా చూడకండి; మొత్తం పొడవును లెక్కించి భాగాలుగా విభజించండి.',
        exampleQEn: 'Complete the pattern: _ a b _ b _ a b a _ b a b',
        exampleQTe: 'ప్యాటర్న్‌ను పూర్తి చేయండి: _ a b _ b _ a b a _ b a b',
        exampleSolEn: 'Total characters = 14 or 12. Let us count: 12 elements divided into 4 groups of 3: "b a b / b a b / b a b / b a b". The blanks are filled by: b, a, b, b.',
        exampleSolTe: 'మొత్తం అక్షరాలు 12 ను 3 అక్షరాల చొప్పున విభజించగా: bab / bab / bab / bab. ఖాళీలలో వచ్చే అక్షరాలు b, a, b, b.',
        drill: {
          questionEn: 'Find the next term in the letter series: B, E, I, N, T, ?',
          questionTe: 'అక్షర శ్రేణిలో తర్వాతి అక్షరం ఏది: B, E, I, N, T, ?',
          optionsEn: ['A) Y', 'B) Z', 'C) A', 'D) B'],
          optionsTe: ['A) Y', 'B) Z', 'C) A', 'D) B'],
          correctIdx: 2,
          explanationEn: 'Letter positions: B(2) + 3 = E(5); E(5) + 4 = I(9); I(9) + 5 = N(14); N(14) + 6 = T(20); T(20) + 7 = 27 → 27 - 26 = 1 = A. Correct answer is Option C.',
          explanationTe: 'స్థాన విలువలు: +3, +4, +5, +6, +7. T(20) + 7 = 27 అంటే ఆల్ఫాబెట్ పూర్తయి మళ్ళీ మొదటి అక్షరం A(1) వస్తుంది.'
        }
      }
    ],

    'reas-coding-decoding': [
      {
        code: '2.1',
        titleEn: 'Letter-to-Letter & Direct Number Coding',
        titleTe: 'అక్షరాల కోడింగ్ మరియు ప్రత్యక్ష సంఖ్యల కోడింగ్',
        importance: 'High Yield (2 Questions in CBT-1)',
        readTime: '8 mins',
        conceptEn: 'In letter coding, each letter of a given word is shifted forwards or backwards by a fixed number of positions (+1, -2, +3...) or mapped to its opposite letter. In direct number coding, letters are assigned the sum of their positional values or direct arbitrary numbers.',
        conceptTe: 'కోడింగ్ ప్రశ్నలలో అక్షరాల స్థానాలు నిర్దిష్ట సంఖ్యలో ముందుకు లేదా వెనక్కు (+1, -2...) మారుతాయి లేదా వ్యతిరేక అక్షరాలుగా మార్చబడతాయి. నంబర్ కోడింగ్‌లో అక్షరాల స్థాన విలువల మొత్తం లేదా అంకెల సంకలనం ఇవ్వబడుతుంది.',
        ruleEn: 'Check: 1) Positional shift (+k or -k); 2) Reverse pairs (A↔Z, B↔Y); 3) Diagonal / Cross-swapping inside the word; 4) Sum of alphabet positions.',
        ruleTe: 'తనిఖీ చేయాల్సిన అంశాలు: 1) స్థానాల మార్పు (+/- k); 2) వ్యతిరేక అక్షరాలు; 3) క్రాస్-స్వాపింగ్; 4) స్థాన విలువల మొత్తం.',
        formula: 'Coded Letter = (Original Position ± Shift) mod 26',
        shortcutEn: '⚡ 3-Second Check: Look at the first and last letters of the coded word first! Often, evaluating just the first letter eliminates 2 to 3 wrong options instantly.',
        shortcutTe: '⚡ 3 సెకన్ల ట్రిక్: ముందుగా మొదటి మరియు చివరి అక్షరాల కోడ్‌ను మాత్రమే సరిచూడండి. దీని ద్వారా 2 నుండి 3 తప్పు ఆప్షన్లు వెంటనే తొలగిపోతాయి.',
        trapEn: 'Watch out for vowel-only shifts or reverse letter orders that do not follow simple addition.',
        trapTe: 'అచ్చులు (Vowels) మరియు హల్లులకు (Consonants) వేర్వేరు నియమాలు ఉండే అవకాశం ఉంది, గమనించండి.',
        exampleQEn: 'If RAILWAY is coded as SBJMXBZ, how is EXAM coded in that language?',
        exampleQTe: 'RAILWAY ను SBJMXBZ గా కోడ్ చేస్తే, అదే భాషలో EXAM ను ఎలా కోడ్ చేస్తారు?',
        exampleSolEn: 'Pattern is +1 for every letter: R(+1)=S, A(+1)=B, I(+1)=J, L(+1)=M, W(+1)=X, A(+1)=B, Y(+1)=Z. For EXAM: E(+1)=F, X(+1)=Y, A(+1)=B, M(+1)=N → FYBN.',
        exampleSolTe: 'ప్రతి అక్షరానికి +1 కలపబడింది. కావున EXAM కు: E+1=F, X+1=Y, A+1=B, M+1=N → FYBN.',
        drill: {
          questionEn: 'If DELHI is coded as 73541 and CALCUTTA as 82589662, how is CALICUT coded?',
          questionTe: 'DELHI = 73541 మరియు CALCUTTA = 82589662 అయితే CALICUT కోడ్ ఎంత?',
          optionsEn: ['A) 8251896', 'B) 8251596', 'C) 8254396', 'D) 8254186'],
          optionsTe: ['A) 8251896', 'B) 8251596', 'C) 8254396', 'D) 8254186'],
          correctIdx: 0,
          explanationEn: 'Direct substitution from the given words: C=8, A=2, L=5, I=1, C=8, U=9, T=6 → 8251896. (Option A).',
          explanationTe: 'ఇచ్చిన అక్షరాల ప్రత్యక్ష విలువల ప్రతిక్షేపణ: C=8, A=2, L=5, I=1, C=8, U=9, T=6 → 8251896.'
        }
      }
    ],

    'reas-blood-relations': [
      {
        code: '4.1',
        titleEn: 'Family Tree Diagramming & Coded Relations',
        titleTe: 'ఫ్యామిలీ ట్రీ డ్రాయింగ్ మరియు కోడెడ్ రక్త సంబంధాలు',
        importance: 'High Yield (1–2 Questions Guaranteed)',
        readTime: '9 mins',
        conceptEn: 'Blood relations questions require constructing a structured Family Tree using 3 standardized notations: 1) Square [ ] for Male, Circle ( ) for Female; 2) Double line (=) for Married Couple, Single line (-) for Siblings; 3) Vertical line (|) for Parent-Child generations.',
        conceptTe: 'రక్త సంబంధాల ప్రశ్నలను ఫ్యామిలీ ట్రీ (Family Tree) రూపంలో గీసి సులభంగా పరిష్కరించవచ్చు: 1) పురుషుడికి చతురస్రం [ ], స్త్రీకి వృత్తం ( ); 2) దంపతులకు డబుల్ లైన్ (=), సోదరులు/సోదరీమణులకు సింగిల్ లైన్ (-); 3) తరం మార్పుకు నిలువు గీత (|).',
        ruleEn: 'Never assume the gender of a person from their name (e.g., Kiran, Sonu) unless explicitly stated or inferred from a relation (brother, mother).',
        ruleTe: 'పేరును బట్టి ఎట్టి పరిస్థితుల్లోనూ లింగాన్ని (Gender) ఊహించకూడదు; ప్రశ్నలో స్పష్టంగా తెలిపితేనే నిర్ణయించాలి.',
        formula: 'Generations: Grandparents (+2) → Parents/Uncles (+1) → Self/Siblings/Spouse (0) → Children (-1)',
        shortcutEn: '⚡ "Pointing to a Person" Shortcut: Start reading the statement BACKWARDS from "my" or "mine"! Example: "He is the only son of my mother\'s husband" → my mother\'s husband = father → only son of father = myself/brother!',
        shortcutTe: '⚡ "ఒక వ్యక్తిని చూపిస్తూ..." షార్ట్‌కట్: వాక్యాన్ని చివర నుండి వెనక్కి చదవండి! "నా తల్లి యొక్క భర్త యొక్క ఏకైక కుమారుడు" → నా తల్లి భర్త = తండ్రి → తండ్రి ఏకైక కుమారుడు = నేనే లేదా నా సోదరుడు!',
        trapEn: 'Confusing Maternal Uncle (తల్లి సోదరుడు - మేనమామ) with Paternal Uncle (తండ్రి సోదరుడు - బాబాయ్/పెద్దనాన్న). Read the Telugu/English distinction carefully!',
        trapTe: 'మేనమామ (Maternal) మరియు బాబాయ్/పెద్దనాన్న (Paternal) ల మధ్య తేడాను గమనించండి.',
        exampleQEn: 'Pointing to a photograph, a woman says: "His father is the only son of my grandfather." How is the man in the photograph related to the woman?',
        exampleQTe: 'ఒక ఫోటోను చూపిస్తూ ఒక స్త్రీ: "ఇతని తండ్రి నా తాతగారి ఏకైక కుమారుడు" అని చెప్పింది. ఆ ఫోటోలోని వ్యక్తి ఆ స్త్రీకి ఏమవుతాడు?',
        exampleSolEn: 'Step 1: Woman\'s grandfather\'s only son = Woman\'s father. Step 2: "His father is woman\'s father" → The man in the photograph has the same father as the woman. Therefore, the man is her Brother.',
        exampleSolTe: 'స్త్రీ తాతగారి ఏకైక కుమారుడు = ఆమె తండ్రి. ఫోటోలోని వ్యక్తి తండ్రి = ఆ స్త్రీ తండ్రి. కావున ఫోటోలోని వ్యక్తి ఆ స్త్రీకి సోదరుడు (Brother) అవుతాడు.',
        drill: {
          questionEn: 'A is the mother of B. C is the son of A. D is the brother of E. E is the daughter of B. Who is the grandmother of E?',
          questionTe: 'B యొక్క తల్లి A. A యొక్క కుమారుడు C. E యొక్క సోదరుడు D. B యొక్క కుమార్తె E. అయిన E యొక్క అమ్మమ్మ/నానమ్మ ఎవరు?',
          optionsEn: ['A) A', 'B) B', 'C) C', 'D) D'],
          optionsTe: ['A) A', 'B) B', 'C) C', 'D) D'],
          correctIdx: 0,
          explanationEn: 'E is the daughter of B, and B is the child of A. Hence A is the mother of E\'s parent, making A the Grandmother of E (Option A).',
          explanationTe: 'E తల్లి/తండ్రి B, మరియు B తల్లి A. కావున E కి A అమ్మమ్మ/నానమ్మ (Grandmother) అవుతుంది.'
        }
      }
    ],

    'reas-directions': [
      {
        code: '5.1',
        titleEn: 'Direction Sense, Angles & Pythagoras Distance',
        titleTe: 'దిశలు, కోణాలు మరియు పైథాగరస్ సిద్ధాంత దూరాలు',
        importance: 'High Yield (1–2 Questions)',
        readTime: '7 mins',
        conceptEn: 'There are 4 cardinal directions (North, South, East, West) and 4 intermediate directions (NE, NW, SE, SW). Turning Right means a 90° Clockwise turn; turning Left means a 90° Anti-Clockwise turn. Shortest straight-line distance is computed using Pythagoras Theorem: Hypotenuse = √(Base² + Perpendicular²).',
        conceptTe: '4 ప్రధాన దిశలు (ఉత్తరం, దక్షిణం, తూర్పు, పడమర) మరియు 4 మూలలు (ఈశాన్యం, వాయువ్యం, ఆగ్నేయం, నైరుతి) కలవు. కుడివైపు తిరగడం అంటే 90° సవ్యదిశ (Clockwise), ఎడమవైపు అంటే 90° అపసవ్యదిశ (Anti-clockwise). కనిష్ట దూరాన్ని పైథాగరస్ సిద్ధాంతం కర్ణం² = భుజం² + భుజం² ద్వారా లెక్కిస్తారు.',
        ruleEn: 'Sun Shadow Rule: At Sunrise, the Sun is in the East, so all shadows fall strictly to the WEST. At Sunset, the Sun is in the West, so shadows fall strictly to the EAST. At 12:00 Noon, there is no shadow.',
        ruleTe: 'నీడ సూత్రం: సూర్యోదయ సమయంలో సూర్యుడు తూర్పున ఉంటాడు కాబట్టి నీడలు ఎల్లప్పుడూ పడమర వైపు పడతాయి. సూర్యాస్తమయ సమయంలో నీడలు తూర్పు వైపు పడతాయి. మధ్యాహ్నం 12 గంటలకు నీడ ఏర్పడదు.',
        formula: 'Shortest Distance d = √(Δx² + Δy²)  |  Right Turn = +90° CW, Left Turn = -90° ACW',
        shortcutEn: '⚡ Direction Cancellation Trick: Write directions in sequence. Equal opposite moves cancel out! 10m North cancels 10m South; 15m East cancels 15m West. Remaining values immediately give final displacement!',
        shortcutTe: '⚡ రద్దు నియమం: సమాన వ్యతిరేక దూరాలు రద్దవుతాయి: 10 మీ ఉత్తరం మరియు 10 మీ దక్షిణం పరస్పరం రద్దవుతాయి. మిగిలిన నికర దూరమే సమాధానం!',
        trapEn: 'Do not confuse "facing direction" with "direction from starting point"! Read the question prompt carefully.',
        trapTe: '"ప్రస్తుతం ఏ దిశను చూస్తున్నాడు" మరియు "ప్రారంభ స్థానం నుండి ఏ దిశలో ఉన్నాడు" అనే ప్రశ్నల మధ్య తేడాను గమనించండి.',
        exampleQEn: 'A man walks 8 km South, turns Right and walks 6 km. How far and in which direction is he from the starting point?',
        exampleQTe: 'ఒక వ్యక్తి దక్షిణ దిశగా 8 కి.మీ నడిచి, కుడివైపు తిరిగి 6 కి.మీ నడిచాడు. అతను ప్రారంభ స్థానం నుండి ఎంత దూరంలో మరియు ఏ దిశలో ఉన్నాడు?',
        exampleSolEn: 'Displacement along South = 8 km, along West = 6 km. Shortest distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km. Direction from start is South-West (SW).',
        exampleSolTe: 'దక్షిణం = 8 కి.మీ, పడమర = 6 కి.మీ. కనిష్ట దూరం = √(8² + 6²) = √100 = 10 కి.మీ. ప్రారంభ స్థానం నుండి దిశ: నైరుతి (South-West).',
        drill: {
          questionEn: 'Ramesh walks 12 km North, then 5 km East. What is his straight-line distance from the starting point?',
          questionTe: 'రమేష్ ఉత్తరం వైపు 12 కి.మీ నడిచి, తరువాత తూర్పు వైపు 5 కి.మీ నడిచాడు. ప్రారంభ స్థానం నుండి సరళరేఖా దూరం ఎంత?',
          optionsEn: ['A) 13 km', 'B) 15 km', 'C) 17 km', 'D) 10 km'],
          optionsTe: ['A) 13 కి.మీ', 'B) 15 కి.మీ', 'C) 17 కి.మీ', 'D) 10 కి.మీ'],
          correctIdx: 0,
          explanationEn: 'Using Pythagorean triplet (5, 12, 13): Distance = √(12² + 5²) = √(144 + 25) = √169 = 13 km.',
          explanationTe: 'పైథాగోరియన్ త్రికం (5, 12, 13) ప్రకారం: దూరం = √(144 + 25) = √169 = 13 కి.మీ.'
        }
      }
    ],

    'reas-syllogism-venn': [
      {
        code: '6.1',
        titleEn: 'Syllogism: Standard Rules & Venn Diagram Verification',
        titleTe: 'సిల్లోజిజం: ప్రామాణిక నియమాలు మరియు వెన్ చిత్రాల విశ్లేషణ',
        importance: 'Highest Weightage (2–3 Questions)',
        readTime: '9 mins',
        conceptEn: 'Syllogism tests deductive logic based on given statements (which must be assumed 100% true, even if they contradict known facts). The four basic statement types are: 1) Universal Positive (A): "All X are Y"; 2) Universal Negative (E): "No X is Y"; 3) Particular Positive (I): "Some X are Y"; 4) Particular Negative (O): "Some X are not Y".',
        conceptTe: 'సిల్లోజిజంలో ఇచ్చిన ప్రకటనలను వాస్తవాలతో సంబంధం లేకుండా 100% నిజమని భావించాలి. ప్రాథమిక రూపాలు: 1) అన్నీ X లు Y లు (All); 2) ఏ X కూడా Y కాదు (No); 3) కొన్ని X లు Y లు (Some); 4) కొన్ని X లు Y లు కావు (Some not). వెన్ చిత్రాల ద్వారా దీనిని ఖచ్చితంగా సాధించవచ్చు.',
        ruleEn: 'Golden Rule: A conclusion is valid ONLY if it holds true in ALL possible Venn diagrams. If it fails in even one possible diagram, it is NOT a definite conclusion.',
        ruleTe: 'బంగారు నియమం: సాధ్యమయ్యే అన్ని వెన్ చిత్రాలలో నిజమైనప్పుడే ఒక తీర్మానం సరైనది అవుతుంది. ఒక్క చిత్రంలో తప్పు అయినా అది ఖచ్చితమైన తీర్మానం కాదు.',
        formula: 'All A are B + All B are C ⇒ All A are C  |  Some A are B ⇒ Some B are A',
        shortcutEn: '⚡ 2-Second Negative Statement Rule: If ALL statements are positive ("All" / "Some"), NO definite negative conclusion ("No" / "Some not") can ever follow!',
        shortcutTe: '⚡ 2 సెకన్ల రూల్: ఇచ్చిన అన్ని ప్రకటనలు పాజిటివ్ (All / Some) అయితే, ఏ ఒక్క నెగటివ్ తీర్మానం (No / Some not) కూడా సరైనది కాదు!',
        trapEn: '"Some A are B" does NOT mean "Some A are not B". In logic, "Some" includes the possibility of "All"!',
        trapTe: '"కొన్ని A లు B లు" అంటే మిగిలినవి కావు అని అర్థం కాదు; తర్కంలో "Some" లో "All" కూడా దాగి ఉండే అవకాశం ఉంది.',
        exampleQEn: 'Statements: All Mangoes are Fruits. All Fruits are Sweet. Conclusions: I. All Mangoes are Sweet. II. Some Sweet things are Mangoes.',
        exampleQTe: 'ప్రకటనలు: మామిడి పండ్లన్నీ పండ్లు. పండ్లన్నీ తీపి. తీర్మానాలు: I. మామిడి పండ్లన్నీ తీపి. II. కొన్ని తీపి పదార్థాలు మామిడి పండ్లు.',
        exampleSolEn: 'Venn Diagram: Mango circle is completely inside Fruit circle, which is completely inside Sweet circle. Both Conclusion I (All Mangoes are Sweet) and Conclusion II (Some Sweet are Mangoes) definitely follow.',
        exampleSolTe: 'మామిడి వృత్తం పండ్ల లోపల, పండ్ల వృత్తం తీపి లోపల ఉన్నాయి. కావున తీర్మానం I మరియు II రెండూ సరైనవే.',
        drill: {
          questionEn: 'Statements: Some Pens are Books. All Books are Papers. Conclusion: Some Pens are Papers.',
          questionTe: 'ప్రకటనలు: కొన్ని పెన్నులు పుస్తకాలు. పుస్తకాలన్నీ పేపర్లు. తీర్మానం: కొన్ని పెన్నులు పేపర్లు.',
          optionsEn: ['A) Only Conclusion Follows', 'B) Does Not Follow', 'C) Either Follows', 'D) None Follows'],
          optionsTe: ['A) తీర్మానం ఖచ్చితంగా సరైనది', 'B) సరైనది కాదు', 'C) ఏదో ఒకటి సరైనది', 'D) ఏదీ సరైనది కాదు'],
          correctIdx: 0,
          explanationEn: 'The overlapping region between Pens and Books is entirely inside Papers. Therefore, Some Pens are definitely Papers. Conclusion follows.',
          explanationTe: 'పెన్నులు మరియు పుస్తకాల ఉమ్మడి భాగం మొత్తం పేపర్ల పరిధిలో ఉంది. కాబట్టి తీర్మానం ఖచ్చితంగా సరైనది.'
        }
      }
    ],

    // =========================================================================
    // GENERAL AWARENESS (8 LESSONS)
    // =========================================================================
    'ga-indian-railways': [
      {
        code: '1.1',
        titleEn: 'History of Indian Railways: First Train 1853 to Modern Eras',
        titleTe: 'భారతీయ రైల్వే చరిత్ర: 1853 మొదటి రైలు నుండి ఆధునిక యుగం వరకు',
        importance: 'Highest Weightage (2–3 Questions Guaranteed)',
        readTime: '8 mins',
        conceptEn: 'The first passenger train in India ran on 16th April 1853 between Bori Bunder (Bombay) and Thane, covering a distance of 34 km with 14 carriages and 400 guests, hauled by three steam locomotives named Sahib, Sindh, and Sultan. Lord Dalhousie is recognized as the Father of Indian Railways.',
        conceptTe: 'భారతదేశంలో మొట్టమొదటి ప్యాసింజర్ రైలు 1853 ఏప్రిల్ 16న బోరిబందర్ (ముంబై) నుండి థానే మధ్య 34 కి.మీ దూరం నడిచింది. దీనికి సాహిబ్, సింధ్, సుల్తాన్ అనే మూడు ఆవిరి ఇంజన్లు అమర్చారు. లార్డ్ డల్హౌసీని భారతీయ రైల్వే పితామహుడిగా పిలుస్తారు.',
        ruleEn: 'First Electric Train: Ran on 3rd February 1925 between Bombay VT and Kurla Harbour, on 1500V DC. First Vande Bharat Express: Flagged off on 15 February 2019 (New Delhi to Varanasi).',
        ruleTe: 'మొదటి విద్యుత్ రైలు: 1925 ఫిబ్రవరి 3న బాంబే విటి - కుర్లా మధ్య నడిచింది. మొదటి వందే భారత్ ఎక్స్‌ప్రెస్: 2019 ఫిబ్రవరి 15న న్యూఢిల్లీ - వారణాసి మధ్య ప్రారంభమైంది.',
        formula: 'Broad Gauge = 1.676 m (5 ft 6 in)  |  Standard Gauge = 1.435 m  |  Metre Gauge = 1.000 m  |  Narrow = 0.762 m',
        shortcutEn: '⚡ 1853 Magic Numbers: Date = 16 April 1853 | Distance = 34 km | Engines = 3 (Sahib, Sindh, Sultan) | Governor General = Lord Dalhousie.',
        shortcutTe: '⚡ కీలక సంఖ్యలు: తేదీ = 16 ఏప్రిల్ 1853 | దూరం = 34 కి.మీ | ఇంజన్లు = 3 (సాహిబ్, సింధ్, సుల్తాన్) | గవర్నర్ జనరల్ = లార్డ్ డల్హౌసీ.',
        trapEn: 'Do not confuse Indian Railway Nationalization year (1951) with the first train year (1853).',
        trapTe: 'రైల్వే జాతీయకరణ జరిగిన సంవత్సరం 1951, మొదటి రైలు నడిచిన సంవత్సరం 1853.',
        exampleQEn: 'Between which two stations did the first train in India run in 1853?',
        exampleQTe: '1853లో భారతదేశంలో మొదటి రైలు ఏ రెండు స్టేషన్ల మధ్య నడిచింది?',
        exampleSolEn: 'Between Bori Bunder (now Chhatrapati Shivaji Maharaj Terminus, Mumbai) and Thane on 16 April 1853.',
        exampleSolTe: 'బోరిబందర్ (ప్రస్తుత CSMT ముంబై) మరియు థానే మధ్య 1853 ఏప్రిల్ 16న నడిచింది.',
        drill: {
          questionEn: 'Where is the National Rail Museum located in India?',
          questionTe: 'భారతదేశంలో నేషనల్ రైల్ మ్యూజియం ఎక్కడ ఉంది?',
          optionsEn: ['A) Chanakyapuri, New Delhi', 'B) Mumbai', 'C) Kolkata', 'D) Varanasi'],
          optionsTe: ['A) చాణక్యపురి, న్యూఢిల్లీ', 'B) ముంబై', 'C) కోల్‌కతా', 'D) వారణాసి'],
          correctIdx: 0,
          explanationEn: 'The National Rail Museum is located in Chanakyapuri, New Delhi, established in 1977.',
          explanationTe: 'నేషనల్ రైల్ మ్యూజియం న్యూఢిల్లీలోని చాణక్యపురిలో 1977లో ఏర్పాటు చేయబడింది.'
        }
      },
      {
        code: '1.2',
        titleEn: '19 Railway Zones, Headquarters & South Coast Railway (SCoR)',
        titleTe: '19 రైల్వే జోన్లు, ప్రధాన కార్యాలయాలు & విశాఖపట్నం SCoR',
        importance: 'Highest Weightage (2 Questions Guaranteed)',
        readTime: '8 mins',
        conceptEn: 'Indian Railways is divided into 19 zones (including Kolkata Metro and the newest South Coast Railway headquartered at Visakhapatnam, Andhra Pradesh). Northern Railway is the largest zone by route kilometer. Secunderabad is the headquarters of South Central Railway (SCR).',
        conceptTe: 'భారతీయ రైల్వే 19 జోన్లుగా విభజించబడింది (కోల్‌కతా మెట్రో మరియు ఆంధ్రప్రదేశ్‌లోని విశాఖపట్నం కేంద్రంగా ఏర్పడిన సౌత్ కోస్ట్ రైల్వేతో కలిపి). ఉత్తర రైల్వే అతిపెద్ద జోన్. సికింద్రాబాద్ దక్షిణ మధ్య రైల్వే (SCR) ప్రధాన కేంద్రం.',
        ruleEn: 'South Coast Railway (SCoR) includes Guntakal, Guntur, and Vijayawada divisions plus parts of Waltair division.',
        ruleTe: 'సౌత్ కోస్ట్ రైల్వే (SCoR) లో గుంతకల్లు, గుంటూరు, విజయవాడ మరియు వాల్తేరు డివిజన్ల భాగాలు ఉంటాయి.',
        formula: 'Zones = 19 (17 Operational Geographic + Kolkata Metro + SCoR)  |  Divisions = 70+',
        shortcutEn: '⚡ Directional HQs Memory Trick: North = New Delhi | South = Chennai | East = Kolkata | West = Mumbai (Churchgate) | Central = Mumbai (CSMT) | South Central = Secunderabad | South Coast = Visakhapatnam.',
        shortcutTe: '⚡ జోన్ల హెడ్‌క్వార్టర్స్ కోడ్: ఉత్తర = న్యూఢిల్లీ | దక్షిణ = చెన్నై | తూర్పు = కోల్‌కతా | పశ్చిమ = ముంబై చర్చిగేట్ | సెంట్రల్ = ముంబై CSMT | దక్షిణ మధ్య = సికింద్రాబాద్ | దక్షిణ కోస్తా = విశాఖపట్నం.',
        trapEn: 'Kolkata hosts the headquarters of THREE railway entities: Eastern Railway, South Eastern Railway, and Metro Railway!',
        trapTe: 'కోల్‌కతా నగరం 3 రైల్వే ప్రధాన కార్యాలయాలను కలిగి ఉంది: తూర్పు రైల్వే, ఆగ్నేయ రైల్వే మరియు మెట్రో రైల్వే!',
        exampleQEn: 'Which is the headquarters of South Coast Railway (SCoR)?',
        exampleQTe: 'సౌత్ కోస్ట్ రైల్వే (SCoR) యొక్క ప్రధాన కార్యాలయం ఏది?',
        exampleSolEn: 'Visakhapatnam, Andhra Pradesh.',
        exampleSolTe: 'విశాఖపట్నం (ఆంధ్రప్రదేశ్).',
        drill: {
          questionEn: 'Which railway zone has its headquarters at Secunderabad?',
          questionTe: 'సికింద్రాబాద్ ప్రధాన కార్యాలయంగా గల రైల్వే జోన్ ఏది?',
          optionsEn: ['A) South Central Railway', 'B) Southern Railway', 'C) South Coast Railway', 'D) Central Railway'],
          optionsTe: ['A) దక్షిణ మధ్య రైల్వే (SCR)', 'B) దక్షిణ రైల్వే (SR)', 'C) సౌత్ కోస్ట్ రైల్వే (SCoR)', 'D) సెంట్రల్ రైల్వే (CR)'],
          correctIdx: 0,
          explanationEn: 'Secunderabad is the headquarters of South Central Railway (SCR), established on 2 October 1966.',
          explanationTe: 'దక్షిణ మధ్య రైల్వే (SCR) ప్రధాన కార్యాలయం సికింద్రాబాద్ (1966 అక్టోబర్ 2న ఏర్పడింది).'
        }
      }
    ],

    'ga-polity': [
      {
        code: '2.1',
        titleEn: 'Constitution of India: Preamble, Fundamental Rights & Articles',
        titleTe: 'భారత రాజ్యాంగం: పీఠిక, ప్రాథమిక హక్కులు మరియు ముఖ్య నిబంధనలు',
        importance: 'High Yield (2–3 Questions)',
        readTime: '9 mins',
        conceptEn: 'The Constitution of India was drafted by the Constituent Assembly headed by Dr. B.R. Ambedkar (Chairman of the Drafting Committee). It was adopted on 26th November 1949 (Constitution Day) and came into full effect on 26th January 1950 (Republic Day). It originally contained 395 Articles, 8 Schedules, and 22 Parts.',
        conceptTe: 'భారత రాజ్యాంగాన్ని డాక్టర్ బి.ఆర్. అంబేడ్కర్ నేతృత్వంలోని డ్రాఫ్టింగ్ కమిటీ రూపొందించింది. ఇది 1949 నవంబర్ 26న ఆమోదించబడింది (సంవిధాన్ దివస్) మరియు 1950 జనవరి 26 నుండి అమల్లోకి వచ్చింది. ప్రారంభంలో 395 ఆర్టికల్స్, 8 షెడ్యూల్స్ మరియు 22 భాగాలు ఉండేవి.',
        ruleEn: 'Part III (Articles 12–35) covers Fundamental Rights. Article 32 (Right to Constitutional Remedies) was termed "Heart and Soul of the Constitution" by Dr. Ambedkar. Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.',
        ruleTe: 'భాగం III (ఆర్టికల్స్ 12–35) ప్రాథమిక హక్కులను తెలుపుతుంది. ఆర్టికల్ 32 ను అంబేడ్కర్ "రాజ్యాంగానికి ఆత్మ మరియు హృదయం" అని అభివర్ణించారు.',
        formula: 'Article 14: Equality before Law | Article 17: Abolition of Untouchability | Article 21: Right to Life & Personal Liberty | Article 32: Constitutional Remedies',
        shortcutEn: '⚡ Right to Freedom Articles Trick (19 to 22): 19 = 6 Freedoms (Speech, Assembly, Association, Movement, Residence, Profession) | 20 = Protection in Conviction | 21 = Right to Life | 21A = Right to Education (6–14 yrs, 86th Amendment).',
        shortcutTe: '⚡ ఆర్టికల్ 19 స్వేచ్ఛల కోడ్: ప్రసంగం (Speech), సమావేశం (Assembly), సంఘం (Association), సంచారం (Movement), నివాసం (Residence), వృత్తి (Profession). ఆర్టికల్ 21A = 6-14 సం. ఉచిత నిర్బంధ విద్య.',
        trapEn: 'Right to Property was removed from Fundamental Rights by the 44th Constitutional Amendment (1978) and made a Legal Right under Article 300A.',
        trapTe: 'ఆస్తి హక్కును 44వ సవరణ (1978) ద్వారా ప్రాథమిక హక్కుల నుండి తొలగించి ఆర్టికల్ 300A క్రింద సాధారణ చట్టపరమైన హక్కుగా మార్చారు.',
        exampleQEn: 'Which Article of the Indian Constitution abolishes Untouchability?',
        exampleQTe: 'భారత రాజ్యాంగంలోని ఏ ఆర్టికల్ అంటరానితనాన్ని నిషేధిస్తుంది?',
        exampleSolEn: 'Article 17 of the Indian Constitution.',
        exampleSolTe: 'ఆర్టికల్ 17 (అంటరానితన నిషేధం).',
        drill: {
          questionEn: 'Who is regarded as the Father / Chief Architect of the Indian Constitution?',
          questionTe: 'భారత రాజ్యాంగ పితామహుడిగా ఎవరిని పేర్కొంటారు?',
          optionsEn: ['A) Dr. B.R. Ambedkar', 'B) Jawaharlal Nehru', 'C) Mahatma Gandhi', 'D) Dr. Rajendra Prasad'],
          optionsTe: ['A) డా. బి.ఆర్. అంబేడ్కర్', 'B) జవహర్‌లాల్ నెహ్రూ', 'C) మహాత్మా గాంధీ', 'D) డా. రాజేంద్ర ప్రసాద్'],
          correctIdx: 0,
          explanationEn: 'Dr. Bhimrao Ramji Ambedkar served as the Chairman of the Drafting Committee.',
          explanationTe: 'డా. బి.ఆర్. అంబేడ్కర్ డ్రాఫ్టింగ్ కమిటీ చైర్మన్‌గా వ్యవహరించారు.'
        }
      }
    ],

    // =========================================================================
    // GENERAL SCIENCE (4 LESSONS)
    // =========================================================================
    'sci-physics': [
      {
        code: '1.1',
        titleEn: 'SI Units, Newton’s Laws of Motion & Momentum',
        titleTe: 'SI ప్రమాణాలు, న్యూటన్ గమన నియమాలు మరియు ద్రవ్యవేగం',
        importance: 'Highest Weightage (2–3 Questions)',
        readTime: '8 mins',
        conceptEn: 'Mechanics forms the backbone of RRB General Science. Newton’s 1st Law defines Inertia and Force qualitatively. Newton’s 2nd Law provides the quantitative formula for Force: F = m × a = dp/dt. Newton’s 3rd Law states that every action has an equal and opposite reaction (Rocket propulsion, firing a bullet).',
        conceptTe: 'భౌతిక శాస్త్రంలో న్యూటన్ నియమాలు అత్యంత కీలకమైనవి: 1వ నియమం జడత్వం (Inertia) ను వివరిస్తుంది; 2వ నియమం బలానికి కొలమానాన్ని ఇస్తుంది: F = m × a; 3వ నియమం ప్రతి చర్యకు సమానమైన వ్యతిరేక ప్రతిచర్య ఉంటుంది (రాకెట్ ప్రయోగం, తుపాకీ కాల్చడం).',
        ruleEn: 'Law of Conservation of Linear Momentum: In the absence of an external force, the total momentum of a system remains conserved: m1 u1 + m2 u2 = m1 v1 + m2 v2.',
        ruleTe: 'ద్రవ్యవేగ పరిరక్షణ నియమం: బాహ్య బలం శూన్యమైనప్పుడు మొత్తం ద్రవ్యవేగం స్థిరంగా ఉంటుంది: m1 u1 + m2 u2 = m1 v1 + m2 v2.',
        formula: 'F = m · a  |  Momentum p = m · v  |  Impulse J = F · Δt = Δp  |  1 Newton = 10⁵ Dyne',
        shortcutEn: '⚡ Everyday Examples Trick: 1st Law = Seatbelt in car, dust falling from carpet when beaten; 2nd Law = Cricketer pulling hands back while catching ball (increases Δt, reduces Force F!); 3rd Law = Walking on ground, recoil of gun, swimming.',
        shortcutTe: '⚡ నిత్యజీవిత ఉదాహరణల ట్రిక్: 1వ నియమం = కారులో సీట్ బెల్ట్, తివాచీ దుమ్ము దులపడం; 2వ నియమం = క్రికెటర్ క్యాచ్ పట్టేటప్పుడు చేతులను వెనక్కి లాగడం; 3వ నియమం = తుపాకీ రీకాయిల్, రాకెట్ గమనం, ఈత కొట్టడం.',
        trapEn: 'Mass is constant everywhere in the universe (scalar), whereas Weight (W = mg) varies with gravitational acceleration g!',
        trapTe: 'ద్రవ్యరాశి (Mass) విశ్వమంతటా స్థిరంగా ఉంటుంది; భారం (Weight = m×g) గురుత్వాకర్షణ త్వరణం g పై ఆధారపడి మారుతుంది.',
        exampleQEn: 'Why does a cricketer draw his hands backwards while taking a catch?',
        exampleQTe: 'క్రికెట్ ఆటగాడు క్యాచ్ పట్టేటప్పుడు తన చేతులను వెనక్కి ఎందుకు లాగుతాడు?',
        exampleSolEn: 'By pulling hands backwards, the time of impact (Δt) increases. Since Force F = Δp / Δt, increasing time decreases the impact force on the hands (Newton\'s 2nd Law).',
        exampleSolTe: 'చేతులను వెనక్కి లాగడం వల్ల క్యాచ్ సమయం (Δt) పెరుగుతుంది. F = Δp/Δt ప్రకారం సమయం పెరిగితే చేతులపై పడే బలం తగ్గుతుంది (న్యూటన్ 2వ నియమం).',
        drill: {
          questionEn: 'What is the SI unit of Force?',
          questionTe: 'బలానికి SI ప్రమాణం ఏది?',
          optionsEn: ['A) Newton', 'B) Joule', 'C) Watt', 'D) Pascal'],
          optionsTe: ['A) న్యూటన్ (Newton)', 'B) జౌల్ (Joule)', 'C) వాట్ (Watt)', 'D) పాస్కల్ (Pascal)'],
          correctIdx: 0,
          explanationEn: 'The SI unit of force is the Newton (N = kg·m/s²). Joule is for Energy, Watt is for Power, Pascal is for Pressure.',
          explanationTe: 'బలానికి SI ప్రమాణం న్యూటన్ (N). జౌల్ శక్తికి, వాట్ సామర్థ్యానికి, పాస్కల్ పీడనానికి ప్రమాణాలు.'
        }
      },
      {
        code: '1.2',
        titleEn: 'Work, Energy, Power & Commercial Electricity (kWh)',
        titleTe: 'పని, శక్తి, సామర్థ్యం మరియు విద్యుత్ వినియోగ యూనిట్లు (kWh)',
        importance: 'High Yield (2 Questions)',
        readTime: '8 mins',
        conceptEn: 'Work is done when a force produces displacement in its direction: W = F × d × cos(θ). If θ = 90° (e.g. a porter carrying luggage on his head walking horizontally), work done by gravity is ZERO. Kinetic Energy = ½ mv². Potential Energy = mgh. Power = Work / Time (measured in Watts).',
        conceptTe: 'బలం ప్రయోగించినప్పుడు స్థానభ్రంశం జరిగితేనే పని జరిగినట్లు: W = F × d × cos(θ). కులీ సామాను తలపై పెట్టుకుని క్షితిజ సమాంతరంగా నడిచినప్పుడు గురుత్వాకర్షణ పరంగా జరిగిన పని సున్నా (θ=90°). గతిజ శక్తి = ½ mv², స్థితిజ శక్తి = mgh. సామర్థ్యం = పని / కాలం (వాట్లలో కొలుస్తారు).',
        ruleEn: '1 Commercial Unit of Electricity = 1 Kilowatt-hour (kWh) = 3.6 × 10⁶ Joules (3.6 MegaJoules). 1 Horsepower (HP) = 746 Watts.',
        ruleTe: '1 కమర్షియల్ విద్యుత్ యూనిట్ = 1 కిలోవాట్-అవర్ (kWh) = 3.6 × 10⁶ జౌల్స్. 1 హార్స్ పవర్ (HP) = 746 వాట్స్.',
        formula: 'W = F · d · cos θ  |  KE = ½ m v²  |  PE = m g h  |  P = W / t = V · I  |  1 kWh = 3.6 × 10⁶ J',
        shortcutEn: '⚡ Velocity Doubling Shortcut: If velocity v becomes 2v, Kinetic Energy becomes (2)² = 4 TIMES! If velocity triples, KE becomes 9 times!',
        shortcutTe: '⚡ వేగం రెట్టింపు షార్ట్‌కట్: వేగం 2 రెట్లు అయితే గతిజ శక్తి (2)² = 4 రెట్లు అవుతుంది! వేగం 3 రెట్లు అయితే 9 రెట్లు అవుతుంది!',
        trapEn: 'Carrying a load without horizontal acceleration means zero work done AGAINST gravity!',
        trapTe: 'సామాను ఎత్తుకుని సమాంతరంగా నడిచేటప్పుడు గురుత్వాకర్షణకు వ్యతిరేకంగా జరిగిన పని సున్నా.',
        exampleQEn: 'How many Joules are there in 1 kilowatt-hour (1 kWh)?',
        exampleQTe: '1 కిలోవాట్-అవర్ (1 kWh) లో ఎన్ని జౌల్స్ ఉంటాయి?',
        exampleSolEn: '1 kWh = 1000 W × 3600 seconds = 3,600,000 J = 3.6 × 10⁶ Joules.',
        exampleSolTe: '1 kWh = 1000 వాట్స్ × 3600 సెకన్లు = 3.6 × 10⁶ జౌల్స్.',
        drill: {
          questionEn: 'If the velocity of an object is doubled, what happens to its Kinetic Energy?',
          questionTe: 'ఒక వస్తువు వేగాన్ని రెట్టింపు చేస్తే దాని గతిజ శక్తి ఎంతవుతుంది?',
          optionsEn: ['A) Becomes 2 times', 'B) Becomes 4 times', 'C) Remains same', 'D) Becomes half'],
          optionsTe: ['A) 2 రెట్లు అవుతుంది', 'B) 4 రెట్లు అవుతుంది', 'C) మారదు', 'D) సగం అవుతుంది'],
          correctIdx: 1,
          explanationEn: 'KE = ½ mv². Since KE is directly proportional to v², doubling v makes KE (2)² = 4 times.',
          explanationTe: 'గతిజ శక్తి KE = ½ mv². వేగం వర్గానికి అనులోమానుపాతంలో ఉంటుంది కాబట్టి 2² = 4 రెట్లు అవుతుంది.'
        }
      }
    ],

    'sci-chemistry': [
      {
        code: '2.1',
        titleEn: 'Acids, Bases, Salts, pH Scale & Everyday Indicators',
        titleTe: 'ఆమ్లాలు, క్షారాలు, లవణాలు, pH స్కేల్ మరియు సూచికలు',
        importance: 'High Yield (2 Questions)',
        readTime: '8 mins',
        conceptEn: 'Acids release H⁺ ions in water, taste sour, and turn Blue Litmus to RED. Bases release OH⁻ ions, taste bitter, feel soapy, and turn Red Litmus to BLUE. The pH scale measures hydrogen ion concentration from 0 to 14 (pH < 7 is Acidic, pH = 7 is Neutral, pH > 7 is Basic). Danish chemist Sorenson invented the pH scale in 1909.',
        conceptTe: 'ఆమ్లాలు నీటిలో H⁺ అయాన్లను విడుదల చేస్తాయి, పుల్లని రుచి కలిగి ఉంటాయి, నీలి లిట్మస్‌ను ఎరుపుగా మారుస్తాయి. క్షారాలు OH⁻ అయాన్లను ఇస్తాయి, చేదు రుచి, జారే స్వభావం కలిగి ఉంటాయి, ఎరుపు లిట్మస్‌ను నీలిరంగుగా మారుస్తాయి. pH విలువ 7 కంటే తక్కువ ఉంటే ఆమ్లం, 7 ఉంటే తటస్థం, 7 కంటే ఎక్కువ ఉంటే క్షారం.',
        ruleEn: 'Natural Acids in Foods: Citrus fruits (Lemon/Orange) = Citric Acid; Vinegar = Acetic Acid; Curd/Milk = Lactic Acid; Tamarind = Tartaric Acid; Tomato = Oxalic Acid; Ant sting = Formic (Methanoic) Acid; Apple = Malic Acid.',
        ruleTe: 'ఆహార పదార్థాల్లోని సహజ ఆమ్లాలు: నిమ్మ/నారింజ = సిట్రిక్ ఆమ్లం; వెనిగర్ = ఎసిటిక్ ఆమ్లం; పెరుగు = లాక్టిక్ ఆమ్లం; చింతపండు = టార్టారిక్ ఆమ్లం; టమాటా = ఆక్సాలిక్ ఆమ్లం; చీమ కుట్టు = ఫార్మిక్ ఆమ్లం.',
        formula: 'pH = -log₁₀[H⁺]  |  pH + pOH = 14  |  Acid + Base → Salt + Water (Neutralization)',
        shortcutEn: '⚡ Blood pH Value: Human blood pH is strictly 7.35 to 7.45 (slightly alkaline). Gastric juice pH in stomach = 1.5 to 2.0 (Hydrochloric Acid HCl). Pure Water = 7.0.',
        shortcutTe: '⚡ శరీర ద్రవాల pH: మానవ రక్తం pH = 7.4 (స్వల్ప క్షార గుణం). జీర్ణరసం/కడుపులోని HCl = 1.5 - 2.0. స్వచ్ఛమైన నీరు = 7.0.',
        trapEn: 'Tooth decay begins when mouth pH falls below 5.5!',
        trapTe: 'నోటిలోని pH విలువ 5.5 కంటే తగ్గితే దంత క్షయం ప్రారంభమవుతుంది.',
        exampleQEn: 'Which acid is present in an Ant\'s sting that causes burning sensation?',
        exampleQTe: 'చీమ కుట్టినప్పుడు మంట కలగడానికి కారణమైన ఆమ్లం ఏది?',
        exampleSolEn: 'Formic Acid (also known as Methanoic Acid, HCOOH). Baking soda (mild base) is applied to neutralize it.',
        exampleSolTe: 'ఫార్మిక్ ఆమ్లం (మిథనోయిక్ ఆమ్లం). దీని ఉపశమనానికి బేకింగ్ సోడా (క్షారం) పూస్తారు.',
        drill: {
          questionEn: 'What is the pH value of pure distilled water at 25°C?',
          questionTe: '25°C వద్ద స్వచ్ఛమైన నీటి pH విలువ ఎంత?',
          optionsEn: ['A) 0', 'B) 7', 'C) 14', 'D) 1'],
          optionsTe: ['A) 0', 'B) 7 (తటస్థం)', 'C) 14', 'D) 1'],
          correctIdx: 1,
          explanationEn: 'Pure distilled water is neutral with a pH of exactly 7.',
          explanationTe: 'స్వచ్ఛమైన నీరు తటస్థ ద్రవం కావున దాని pH విలువ ఖచ్చితంగా 7.'
        }
      }
    ],

    'sci-biology': [
      {
        code: '3.1',
        titleEn: 'Vitamins, Chemical Names & Deficiency Diseases',
        titleTe: 'విటమిన్లు, రసాయన నామాలు మరియు లోప వ్యాధులు',
        importance: 'Highest Weightage (2 Questions Guaranteed in RRB)',
        readTime: '8 mins',
        conceptEn: 'Vitamins are organic compounds required in small quantities for metabolic functions. They are categorized into: 1) Fat-Soluble Vitamins: A, D, E, K (stored in the liver and adipose tissue); 2) Water-Soluble Vitamins: Vitamin B-Complex and Vitamin C (excreted in urine, must be replenished daily).',
        conceptTe: 'విటమిన్లు జీవక్రియలకు అవసరమైన సేంద్రీయ పదార్థాలు: 1) కొవ్వులో కరిగే విటమిన్లు: A, D, E, K (కాలేయంలో నిల్వ ఉంటాయి); 2) నీటిలో కరిగే విటమిన్లు: B-కాంప్లెక్స్ మరియు C (మూత్రం ద్వారా విసర్జించబడతాయి, రోజూ తీసుకోవాలి).',
        ruleEn: 'Fat-Soluble: K, E, D, A (Mnemonic: KEDA). Chemical Names: Vit A = Retinol; Vit B1 = Thiamine; Vit C = Ascorbic Acid; Vit D = Calciferol; Vit E = Tocopherol; Vit K = Phylloquinone.',
        ruleTe: 'విటమిన్ రసాయన నామాలు: A = రెటినాల్ (రేచీకటి నివారణ); B1 = థయామిన్ (బెరిబెరి); C = ఆస్కార్బిక్ ఆమ్లం (స్కర్వీ); D = కాల్సిఫెరాల్ (రికెట్స్); E = టోకోఫెరాల్ (వంధ్యత్వ నివారణ); K = ఫిల్లోఖ్వినోన్ (రక్తం గడ్డకట్టడం).',
        formula: 'Fat Soluble = A, D, E, K  |  Water Soluble = B-Complex, C',
        shortcutEn: '⚡ Deficiency Disease Quick Match: A → Night Blindness (Nyctalopia) | B1 → Beri-Beri | C → Scurvy (bleeding gums) | D → Rickets (soft bones) | K → Failure of Blood Clotting.',
        shortcutTe: '⚡ లోప వ్యాధుల జతలు: A → రేచీకటి | B1 → బెరి-బెరి | C → స్కర్వీ (చిగుళ్ల రక్తం) | D → రికెట్స్ (ఎముకల బలహీనత) | K → రక్తం గడ్డకట్టకపోవడం.',
        trapEn: 'Vitamin D is synthesized by human skin when exposed to sunlight, functioning as a hormone!',
        trapTe: 'విటమిన్ D సూర్యకాంతి సమక్షంలో చర్మంలో సంశ్లేషణ చెందుతుంది, దీనిని హార్మోన్ లాంటి విటమిన్ అంటారు.',
        exampleQEn: 'Which vitamin is essential for normal blood clotting?',
        exampleQTe: 'రక్తం గడ్డకట్టడానికి అత్యంత ఆవశ్యకమైన విటమిన్ ఏది?',
        exampleSolEn: 'Vitamin K (Phylloquinone). Deficiency leads to excessive bleeding.',
        exampleSolTe: 'విటమిన్ K. దీని లోపం వల్ల గాయాలైనప్పుడు రక్తం గడ్డకట్టదు.',
        drill: {
          questionEn: 'Scurvy (bleeding gums) is caused by the deficiency of which vitamin?',
          questionTe: 'స్కర్వీ (చిగుళ్ల నుండి రక్తం కారడం) ఏ విటమిన్ లోపం వల్ల వస్తుంది?',
          optionsEn: ['A) Vitamin A', 'B) Vitamin B', 'C) Vitamin C', 'D) Vitamin D'],
          optionsTe: ['A) విటమిన్ A', 'B) విటమిన్ B', 'C) విటమిన్ C', 'D) విటమిన్ D'],
          correctIdx: 2,
          explanationEn: 'Deficiency of Vitamin C (Ascorbic Acid) causes Scurvy.',
          explanationTe: 'విటమిన్ C (ఆస్కార్బిక్ ఆమ్లం) లోపం వల్ల స్కర్వీ వ్యాధి వస్తుంది.'
        }
      }
    ],

    'sci-computer': [
      {
        code: '4.1',
        titleEn: 'Computer Fundamentals: Hardware, OS, Memory & Shortcuts',
        titleTe: 'కంప్యూటర్ ప్రాథమిక అంశాలు: హార్డ్‌వేర్, మెమరీ మరియు షార్ట్‌కట్ కీలు',
        importance: 'High Yield (2 Questions in CBT-1 & CBT-2)',
        readTime: '7 mins',
        conceptEn: 'A computer system comprises Input Devices (Keyboard, Mouse, Scanner, OMR), CPU (ALU + Control Unit), and Output Devices (Monitor, Printer, Plotter). Memory is divided into Primary Memory (RAM - Volatile, ROM - Non-volatile) and Secondary Storage (SSD, HDD). Charles Babbage is known as the Father of Computers.',
        conceptTe: 'కంప్యూటర్‌లో ఇన్‌పుట్ డివైజ్‌లు (కీబోర్డ్, మౌస్, స్కానర్), CPU (ALU + కంట్రోల్ యూనిట్) మరియు అవుట్‌పుట్ డివైజ్‌లు ఉంటాయి. మెమరీ: ప్రాథమిక మెమరీ (RAM - అస్థిరమైనది, ROM - స్థిరమైనది) మరియు ద్వితీయ నిల్వ (SSD, HDD). చార్లెస్ బాబేజ్ కంప్యూటర్ పితామహుడు.',
        ruleEn: 'Memory Units Hierarchy: 1 Byte = 8 Bits | 1 Kilobyte (KB) = 1024 Bytes | 1 Megabyte (MB) = 1024 KB | 1 Gigabyte (GB) = 1024 MB | 1 Terabyte (TB) = 1024 GB. 1 Nibble = 4 Bits.',
        ruleTe: 'మెమరీ కొలతలు: 1 బైట్ = 8 బిట్స్ | 1 నిబుల్ = 4 బిట్స్ | 1 KB = 1024 బైట్లు | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB.',
        formula: '1 Nibble = 4 Bits  |  1 Byte = 8 Bits  |  1 KB = 2¹⁰ Bytes = 1024 Bytes',
        shortcutEn: '⚡ Essential Windows Shortcut Keys: Ctrl+C = Copy | Ctrl+V = Paste | Ctrl+X = Cut | Ctrl+Z = Undo | Ctrl+Y = Redo | Alt+F4 = Close Window | F5 = Refresh | Ctrl+A = Select All.',
        shortcutTe: '⚡ ముఖ్య షార్ట్‌కట్‌లు: Ctrl+C = కాపీ | Ctrl+V = పేస్ట్ | Ctrl+Z = అన్‌డూ | Alt+F4 = విండో క్లోజ్ | F5 = రీఫ్రెష్ | Ctrl+A = సెలెక్ట్ ఆల్.',
        trapEn: 'RAM is Volatile (loses data when power is turned off), whereas ROM is Non-Volatile!',
        trapTe: 'RAM అస్థిరమైనది (కరెంట్ పోతే డేటా పోతుంది), ROM స్థిరమైనది (డేటా శాశ్వతంగా ఉంటుంది).',
        exampleQEn: 'How many bits make up one Nibble?',
        exampleQTe: 'ఒక నిబుల్ (Nibble) లో ఎన్ని బిట్లు ఉంటాయి?',
        exampleSolEn: '4 Bits make 1 Nibble. (8 bits make 1 Byte).',
        exampleSolTe: '1 నిబుల్ = 4 బిట్స్ (1 బైట్ = 8 బిట్స్).',
        drill: {
          questionEn: 'Which of the following is considered the "Brain of the Computer"?',
          questionTe: 'క్రింది వాటిలో కంప్యూటర్ యొక్క "మెదడు" గా దేనిని పిలుస్తారు?',
          optionsEn: ['A) CPU', 'B) RAM', 'C) Hard Disk', 'D) Monitor'],
          optionsTe: ['A) CPU (సెంట్రల్ ప్రాసెసింగ్ యూనిట్)', 'B) RAM', 'C) హార్డ్ డిస్క్', 'D) మానిటర్'],
          correctIdx: 0,
          explanationEn: 'The Central Processing Unit (CPU) is called the brain of the computer.',
          explanationTe: 'CPU ను కంప్యూటర్ మెదడు అని పిలుస్తారు.'
        }
      }
    ]
  };

  // Expose globally
  if (typeof window !== 'undefined') {
    window.RRB_ALL_TEXTBOOK_SUBTOPICS = SUBTOPICS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUBTOPICS;
  }
})();
