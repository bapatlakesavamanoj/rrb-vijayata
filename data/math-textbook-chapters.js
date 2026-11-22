/* ============================================================================
   RRB VIJETHA — COMPLETE TEXTBOOK-STYLE MATHEMATICS CHAPTERS &
   SYNCHRONIZED TELUGU TEACHER VIDEO CLASS ENGINE
   Covers Official RRB NTPC (CBT-1 & CBT-2) and RRB Group-D Syllabus
   Every Chapter Includes All 13 Textbook Sections + 100% Synchronized Telugu Video
   ============================================================================ */

window.RRB_MATH_TEXTBOOK_CHAPTERS = window.RRB_MATH_TEXTBOOK_CHAPTERS || {};

/* ============================================================================
   CHAPTER 1: NUMBER SYSTEM — COMPLETE CHAPTER (సంఖ్యా వ్యవస్థ — పూర్తి పాఠ్యపుస్తక అధ్యాయం)
   10 Complete Syllabus Sub-Topics + All 13 Textbook Sections + 14-Slide Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-number-system'] = {
  id: 'math-number-system',
  chapterNo: 1,
  titleEn: 'Chapter 1: Number System — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 1: సంఖ్యా వ్యవస్థ (Number System) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'Highest Weightage (4–5 Questions in CBT-1 & CBT-2)',
  readTime: '45 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-number-system',

  /* --------------------------------------------------------------------------
     1. CHAPTER INTRODUCTION (అధ్యాయ పరిచయం)
     -------------------------------------------------------------------------- */
  introEn: `Welcome to Chapter 1 of the RRB Mathematics Complete Textbook: **Number System (సంఖ్యా వ్యవస్థ)**. In every RRB NTPC (Undergraduate & Graduate CBT-1/CBT-2), RRB Group-D, and RRB ALP/Technician examination, Number System is the single most important foundation chapter, contributing **4 to 5 direct questions (4–5 Marks)** in every shift.

Unlike short summary notes that skip important models, this complete textbook chapter takes you step-by-step from the most basic classification of numbers all the way to advanced RRB exam questions on **Divisibility of 7-digit numbers (like 72 and 88), Unit Digits of large powers, Remainder Theorem, Counting Factors, Trailing Zeros in Factorials, VBODMAS Simplifications, and Series Summations**. Read each sub-topic carefully in Simple English and Easy Telugu, study the step-by-step examples, watch the synchronized Telugu Teacher Video Class right below this chapter, and solve the RRB practice questions at the end.`,

  introTe: `ఆర్‌ఆర్‌బి గణిత పూర్తి పాఠ్యపుస్తకంలోని **అధ్యాయం 1: సంఖ్యా వ్యవస్థ (Number System)** కు స్వాగతం! ఆర్‌ఆర్‌బి ఎన్‌టిపిసి (CBT-1 & CBT-2), గ్రూప్-డి (Group-D), మరియు ALP పరీక్షలలో అత్యధిక మార్కులు తెచ్చిపెట్టే పునాది అధ్యాయం ఇదే. ప్రతి షిఫ్ట్‌లో ఈ ఒక్క అధ్యాయం నుండే **4 నుండి 5 ప్రశ్నలు (4–5 మార్కులు)** తప్పనిసరిగా వస్తాయి.

కేవలం 3–4 పాయింట్ల సంక్షిప్త నోట్స్ లా కాకుండా, ఒక నిజమైన తరగతి గది పాఠ్యపుస్తకం (Textbook) చదువుతున్నట్లుగా గణితంలో బేసిక్స్ రాని విద్యార్థికి కూడా సులభంగా అర్థమయ్యేలా ఈ అధ్యాయాన్ని రూపొందించాము. ఇందులో **సంఖ్యల వర్గీకరణ, ప్రధాన సంఖ్యలు, స్థాన విలువ - ముఖ విలువ, 2 నుండి 13 వరకు భాజనీయత సూత్రాలు, ఒకట్ల స్థానంలోని అంకె (Unit Digit), శేష సిద్ధాంతం (Remainder Theorem), కారణాంకాల సంఖ్య, ఫ్యాక్టోరియల్ చివర సున్నాలు, VBODMAS సూక్ష్మీకరణ మరియు సంఖ్యా శ్రేణులు** అనే 10 ఉప-అంశాలను పూర్తి వివరాలతో నేర్చుకుంటారు. పాఠం చదివిన వెంటనే కింద ఉన్న **"Watch Video"** బటన్ నొక్కి తెలుగు ఉపాధ్యాయుని వాయిస్‌తో ఇదే అధ్యాయాన్ని క్రమపద్ధతిలో వినండి!`,

  /* --------------------------------------------------------------------------
     2. ALL RELEVANT SUB-TOPICS & 4. DETAILED CONCEPT EXPLANATION
     (10 Complete RRB Syllabus Sub-Topics — Synchronized with Video Slides)
     -------------------------------------------------------------------------- */
  subTopics: [
    {
      code: '1.1',
      titleEn: 'Classification of Numbers (Natural, Whole, Integers, Rational & Irrational)',
      titleTe: 'సంఖ్యల వర్గీకరణ (సహజ, పూర్ణాంకాలు, పూర్ణ సంఖ్యలు, అకరణీయ & కరణీయ సంఖ్యలు)',
      conceptEn: `Numbers in mathematics are systematically grouped into sets based on their properties:
1. **Digits (అంకెలు)**: The 10 basic symbols used to write any number in the decimal system are **0, 1, 2, 3, 4, 5, 6, 7, 8, 9**.
2. **Natural Numbers (N — సహజ సంఖ్యలు)**: Counting numbers starting from 1: **N = {1, 2, 3, 4, 5, ...}**. The smallest natural number is **1**. Zero (0) is NOT a natural number.
3. **Whole Numbers (W — పూర్ణాంకాలు)**: All natural numbers together with Zero (0): **W = {0, 1, 2, 3, 4, ...}**. The smallest whole number is **0**. Every natural number is a whole number, but 0 is a whole number that is not natural.
4. **Integers (Z or I — పూర్ణ సంఖ్యలు)**: All negative numbers, zero, and positive numbers: **Z = {..., -3, -2, -1, 0, +1, +2, +3, ...}**. Note that **0 is neither positive nor negative**, and **-1 is the largest negative integer**.
5. **Even & Odd Numbers (సరి మరియు బేసి సంఖ్యలు)**:
   • **Even Numbers**: Integers divisible by 2 (ending in 0, 2, 4, 6, 8). General form = **2n**. Note: 0 is an even integer.
   • **Odd Numbers**: Integers not divisible by 2 (ending in 1, 3, 5, 7, 9). General form = **2n ± 1**.
6. **Rational Numbers (Q — అకరణీయ సంఖ్యలు)**: Any number that can be written in the form **p/q** where p and q are integers and **q ≠ 0**. In decimal form, rational numbers are either **terminating** (e.g., 1/4 = 0.25) or **non-terminating recurring** (e.g., 1/3 = 0.333...). Examples: 5, 0, -3/7, 22/7, 0.45̄.
7. **Irrational Numbers (Q' — కరణీయ సంఖ్యలు)**: Numbers that CANNOT be written as p/q. Their decimal expansion is **non-terminating and non-repeating**. Examples: **√2, √3, √5, π (Pi = 3.14159...)**, e. *(Exam Trap: π is Irrational, whereas its approximation 22/7 is Rational!)*
8. **Real Numbers (R — వాస్తవ సంఖ్యలు)**: All Rational and Irrational numbers combined form the set of Real Numbers.`,
      conceptTe: `గణితంలో సంఖ్యలను వాటి ధర్మాల ఆధారంగా క్రింది సమితులుగా వర్గీకరిస్తారు:
1. **అంకెలు (Digits)**: సంఖ్యలను రాయడానికి వాడే 10 ప్రాథమిక గుర్తులు: **0, 1, 2, 3, 4, 5, 6, 7, 8, 9**.
2. **సహజ సంఖ్యలు (Natural Numbers - N)**: లెక్కించడానికి వాడే సంఖ్యలు: **N = {1, 2, 3, 4, ...}**. అతి చిన్న సహజ సంఖ్య **1**. సున్నా (0) సహజ సంఖ్య కాదు.
3. **పూర్ణాంకాలు (Whole Numbers - W)**: సహజ సంఖ్యలకు సున్నా (0) ను చేర్చగా వచ్చేవి: **W = {0, 1, 2, 3, ...}**. అతి చిన్న పూర్ణాంకం **0**.
4. **పూర్ణ సంఖ్యలు (Integers - Z)**: రుణ సంఖ్యలు, సున్నా మరియు ధన సంఖ్యల సమితి: **Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}**. ముఖ్య గమనిక: **-1 అనేది రుణ పూర్ణ సంఖ్యలన్నింటిలోకెల్లా అతి పెద్దది!** సున్నా (0) ధన సంఖ్య కాదు, రుణ సంఖ్య కాదు.
5. **సరి సంఖ్యలు (Even) & బేసి సంఖ్యలు (Odd)**: 2 చే నిశ్శేషంగా భాగించబడేవి సరి సంఖ్యలు (0, 2, 4, 6, 8 తో ముగిసేవి). 2 చే భాగించబడనివి బేసి సంఖ్యలు (1, 3, 5, 7, 9 తో ముగిసేవి).
6. **అకరణీయ సంఖ్యలు (Rational Numbers - Q)**: **p/q** రూపంలో రాయగలిగే సంఖ్యలు (ఇక్కడ p, q పూర్ణ సంఖ్యలు మరియు **q ≠ 0**). దశాంశ రూపంలో ఇవి అంతమయ్యే దశాంశాలు (0.25) లేదా ఆవర్తత దశాంశాలు (0.333...) అయి ఉంటాయి. ఉదా: 4, 0, -5/8, **22/7**.
7. **కరణీయ సంఖ్యలు (Irrational Numbers - Q')**: p/q రూపంలో రాయలేని సంఖ్యలు. ఇవి అంతం కాని, అనావర్తత దశాంశాలు. ఉదా: **√2, √3, √7 మరియు π (పై)**. *(పరీక్షా పాయింట్: **π** అనేది కరణీయ సంఖ్య, కానీ దాని ఉజ్జాయింపు విలువ **22/7** మాత్రం అకరణీయ సంఖ్య!)*`,
      ruleEn: 'Every Natural number is a Whole number, every Whole number is an Integer, and every Integer is a Rational number (N ⊂ W ⊂ Z ⊂ Q ⊂ R). Between any two rational numbers, there are infinitely many rational and irrational numbers.',
      ruleTe: 'ప్రతి సహజ సంఖ్య ఒక పూర్ణాంకం అవుతుంది, ప్రతి పూర్ణాంకం ఒక పూర్ణ సంఖ్య అవుతుంది, మరియు ప్రతి పూర్ణ సంఖ్య ఒక అకరణీయ సంఖ్య అవుతుంది (N ⊂ W ⊂ Z ⊂ Q ⊂ R).',
      formula: 'Even ± Even = Even | Odd ± Odd = Even | Even ± Odd = Odd | Odd × Odd = Odd | Even × Any Integer = Even',
      exampleQEn: 'Which of the following numbers is an Irrational Number? (A) 22/7  (B) 0.373737...  (C) √196  (D) π',
      exampleQTe: 'క్రింది వాటిలో కరణీయ సంఖ్య (Irrational Number) ఏది? (A) 22/7  (B) 0.373737...  (C) √196  (D) π',
      exampleSolEn: 'Step 1: 22/7 is in p/q form → Rational.\nStep 2: 0.373737... = 37/99 → Rational.\nStep 3: √196 = 14 = 14/1 → Rational.\nStep 4: π = 3.14159265... is non-terminating and non-repeating → Irrational Number (Option D).',
      exampleSolTe: 'సోపానం 1: 22/7 అనేది p/q రూపంలో ఉంది కాబట్టి అకరణీయ సంఖ్య.\nసోపానం 2: 0.3737... = 37/99 కాబట్టి అకరణీయ సంఖ్య.\nసోపానం 3: √196 = 14 కాబట్టి అకరణీయ సంఖ్య.\nసోపానం 4: π (పై) అంతం కాని అనావర్తత దశాంశం కాబట్టి కరణీయ సంఖ్య (ఆప్షన్ D).'
    },
    {
      code: '1.2',
      titleEn: 'Prime Numbers, Composite Numbers, Co-Primes & Twin Primes',
      titleTe: 'ప్రధాన సంఖ్యలు, సంయుక్త సంఖ్యలు, పరస్పర ప్రధాన మరియు కవల ప్రధాన సంఖ్యలు',
      conceptEn: `Understanding Prime Numbers is mandatory because RRB asks direct questions on prime counts, sum/average of primes, and primality checks:
1. **Prime Numbers (ప్రధాన సంఖ్యలు)**: Natural numbers greater than 1 that have **exactly two distinct factors: 1 and the number itself**.
   • First 10 Prime Numbers: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**.
   • **2 is the smallest prime number and the ONLY even prime number.**
   • **3 is the smallest odd prime number.**
   • **1 is NEITHER prime NOR composite** (because it has only one factor).
2. **Count of Prime Numbers (Must Memorize for RRB)**:
   • From **1 to 50**: **15 Prime Numbers** (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47).
   • From **51 to 100**: **10 Prime Numbers** (53, 59, 61, 67, 71, 73, 79, 83, 89, 97).
   • From **1 to 100**: **25 Prime Numbers**.
   • From **1 to 200**: **46 Prime Numbers** | From **1 to 1000**: **168 Prime Numbers**.
   • Smallest 3-digit prime = **101** | Largest 2-digit prime = **97** | Largest 3-digit prime = **997**.
3. **Composite Numbers (సంయుక్త సంఖ్యలు)**: Natural numbers greater than 1 that have **at least 3 factors** (i.e., divisible by numbers other than 1 and itself).
   • Smallest composite number = **4**.
   • Smallest odd composite number = **9**.
4. **Co-Prime / Relatively Prime Numbers (పరస్పర ప్రధాన సంఖ్యలు)**: A pair of numbers whose **HCF (Greatest Common Divisor) is 1**. They do not need to be prime individually! Example: **(8, 15)**, **(16, 25)**, **(14, 27)** are co-prime pairs because they share no common factor except 1. Any two consecutive natural numbers (n, n+1) are ALWAYS co-prime.
5. **Twin Primes (కవల ప్రధాన సంఖ్యలు)**: Pairs of **prime numbers** whose difference is **2**. Examples: **(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)**. There are **8 twin prime pairs** between 1 and 100.`,
      conceptTe: `ఆర్‌ఆర్‌బి పరీక్షలలో ప్రధాన సంఖ్యల (Prime Numbers) నుండి నేరుగా ప్రశ్నలు అడుగుతారు:
1. **ప్రధాన సంఖ్యలు (Prime Numbers)**: 1 కంటే పెద్దదై ఉండి, **కేవలం 1 మరియు తనచేత మాత్రమే భాగించబడే (సరిగ్గా 2 కారణాంకాలు మాత్రమే గల)** సంఖ్యలను ప్రధాన సంఖ్యలు అంటారు.
   • **'2' అతి చిన్న ప్రధాన సంఖ్య మరియు ఏకైక సరి ప్రధాన సంఖ్య (Only Even Prime).**
   • **'3' అతి చిన్న బేసి ప్రధాన సంఖ్య.**
   • **'1' ప్రధాన సంఖ్య కాదు మరియు సంయుక్త సంఖ్య కూడా కాదు!**
2. **ప్రధాన సంఖ్యల సంఖ్య (పరీక్షకు తప్పక గుర్తుంచుకోండి)**:
   • **1 నుండి 50 వరకు**: **15 ప్రధాన సంఖ్యలు** కలవు.
   • **51 నుండి 100 వరకు**: **10 ప్రధాన సంఖ్యలు** కలవు.
   • **1 నుండి 100 వరకు**: మొత్తం **25 ప్రధాన సంఖ్యలు** కలవు.
   • రెండంకెల గరిష్ట ప్రధాన సంఖ్య = **97** | మూడంకెల కనిష్ట ప్రధాన సంఖ్య = **101** | మూడంకెల గరిష్ట ప్రధాన సంఖ్య = **997**.
3. **సంయుక్త సంఖ్యలు (Composite Numbers)**: 2 కంటే ఎక్కువ కారణాంకాలు గల సంఖ్యలు. అతి చిన్న సంయుక్త సంఖ్య = **4**. అతి చిన్న బేసి సంయుక్త సంఖ్య = **9**.
4. **పరస్పర ప్రధాన సంఖ్యలు (Co-Prime Numbers)**: ఏ రెండు సంఖ్యల గ.సా.భా (HCF) **1** అవుతుందో వాటిని పరస్పర ప్రధాన సంఖ్యలు అంటారు. ఉదా: **(8, 15)**, **(9, 16)**. ఇవి విడివిడిగా ప్రధాన సంఖ్యలు కానవసరం లేదు!
5. **కవల ప్రధాన సంఖ్యలు (Twin Primes)**: రెండు ప్రధాన సంఖ్యల మధ్య భేదం **2** అయితే వాటిని కవల ప్రధాన సంఖ్యలు అంటారు. ఉదా: **(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)**. 1 నుండి 100 లోపు **8 జతల** కవల ప్రధాన సంఖ్యలు కలవు.`,
      ruleEn: 'How to test if a number N is Prime: Find the nearest integer k ≥ √N. Test divisibility of N by all prime numbers ≤ k. If none of them divide N, then N is a Prime Number! Also, every prime number > 3 is of the form (6k ± 1).',
      ruleTe: 'ఒక సంఖ్య N ప్రధాన సంఖ్య అవునో కాదో పరీక్షించే నియమం: √N కంటే చిన్నవైన అన్ని ప్రధాన సంఖ్యలతో N ను భాగించి చూడండి. ఏ ప్రధాన సంఖ్య చేతనూ భాగించబడకపోతే N ఖచ్చితంగా ప్రధాన సంఖ్య అవుతుంది!',
      formula: 'Primes (1–50) = 15 | Primes (51–100) = 10 | Total Primes (1–100) = 25 | Twin Prime Pairs (1–100) = 8',
      exampleQEn: 'Find the sum and average of the first 9 prime numbers.',
      exampleQTe: 'మొదటి 9 ప్రధాన సంఖ్యల మొత్తం మరియు సగటు (Average) ఎంత?',
      exampleSolEn: 'Step 1: List the first 9 prime numbers carefully (start from 2, do NOT include 1 or 9 or 15!):\n2, 3, 5, 7, 11, 13, 17, 19, 23.\nStep 2: Sum = 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100.\nStep 3: Average = Sum / 9 = 100 / 9 = 11(1/9) or 11.11.',
      exampleSolTe: 'సోపానం 1: మొదటి 9 ప్రధాన సంఖ్యలు: 2, 3, 5, 7, 11, 13, 17, 19, 23 (1 మరియు 9 ప్రధాన సంఖ్యలు కావు!).\nసోపానం 2: వీటి మొత్తం = 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100 (ఈ విలువ 100 అని నేరుగా గుర్తుంచుకోండి!).\nసోపానం 3: సగటు = 100 / 9 = 11(1/9) లేదా 11.11.'
    },
    {
      code: '1.3',
      titleEn: 'Place Value (స్థాన విలువ) and Face Value (ముఖ విలువ)',
      titleTe: 'స్థాన విలువ (Place Value) మరియు ముఖ విలువ / సహజ విలువ (Face Value)',
      conceptEn: `Every digit in a number has two values:
1. **Face Value (ముఖ విలువ / సహజ విలువ)**: The intrinsic value of the digit itself, regardless of where it stands in the number.
   • In the number **5,84,392**, the Face Value of **8** is simply **8**, and the Face Value of **4** is **4**.
2. **Place Value / Local Value (స్థాన విలువ)**: The value of the digit multiplied by the weight of its position (Ones = 1, Tens = 10, Hundreds = 100, Thousands = 1,000, Ten Thousands = 10,000, etc.).
   • In **5,84,392**, the digit **8** is in the Ten-Thousands place ($10^4$), so its Place Value = **$8 \times 10,000 = 80,000$**.
   • **Important Rule for Zero (0)**: The Place Value and Face Value of **0** is ALWAYS **0**, no matter which position it occupies!
3. **Place Value in Decimal Numbers**:
   • Digits to the right of the decimal point occupy **Tenths ($1/10 = 0.1$)**, **Hundredths ($1/100 = 0.01$)**, **Thousandths ($1/1000 = 0.001$)** places.
   • In **47.386**, the Place Value of **3** is **$3/10 = 0.3$**, the Place Value of **8** is **$8/100 = 0.08$**, and the Place Value of **6** is **$6/1000 = 0.006$**.`,
      conceptTe: `ఒక సంఖ్యలోని ప్రతి అంకెకు రెండు రకాల విలువలు ఉంటాయి:
1. **ముఖ విలువ / సహజ విలువ (Face Value)**: సంఖ్యలో ఆ అంకె ఏ స్థానంలో ఉన్నప్పటికీ, ఆ అంకె యొక్క సొంత విలువనే ముఖ విలువ అంటారు. ఇది ఎప్పుడూ మారదు.
   • ఉదాహరణకు **5,84,392** లో **8** యొక్క ముఖ విలువ = **8** మాత్రమే.
2. **స్థాన విలువ (Place Value)**: సంఖ్యలో ఆ అంకె ఉన్న స్థానాన్ని బట్టి వచ్చే విలువ (ఒకట్లు ×1, పదులు ×10, వందలు ×100, వేలు ×1000, పదివేలు ×10,000).
   • **5,84,392** లో **8** పదివేల స్థానంలో ఉంది కాబట్టి దాని స్థాన విలువ = **8 × 10,000 = 80,000**.
   • **సున్నా (0) ప్రత్యేక నియమం**: సున్నా (0) ఏ స్థానంలో ఉన్నా దాని స్థాన విలువ మరియు ముఖ విలువ ఎల్లప్పుడూ **0** మాత్రమే!
3. **దశాంశ సంఖ్యలలో స్థాన విలువ**:
   • దశాంశ బిందువు తర్వాత కుడివైపు ఉండే అంకెల స్థాన విలువలు వరుసగా **1/10 (0.1), 1/100 (0.01), 1/1000 (0.001)** అవుతాయి.
   • ఉదాహరణకు **47.386** లో **8** యొక్క స్థాన విలువ = **8/100 = 0.08**.`,
      ruleEn: 'For the units digit (ones place) of a whole number, Place Value and Face Value are always equal.',
      ruleTe: 'ఒక పూర్ణ సంఖ్యలో ఒకట్ల స్థానంలో (Units Place) ఉండే అంకెకు స్థాన విలువ మరియు ముఖ విలువ ఎల్లప్పుడూ సమానంగా ఉంటాయి.',
      formula: 'Place Value = (Face Value of Digit) × (10 ^ Position Power)',
      exampleQEn: 'Find the difference between the Place Value and Face Value of the digit 7 in the number 6,74,529.',
      exampleQTe: '6,74,529 అనే సంఖ్యలో 7 యొక్క స్థాన విలువ (Place Value) మరియు ముఖ విలువ (Face Value) ల మధ్య భేదం ఎంత?',
      exampleSolEn: 'Step 1: In 6,74,529, the digit 7 is followed by 4 digits, so Place Value of 7 = 70,000.\nStep 2: Face Value of 7 = 7.\nStep 3: Difference = 70,000 - 7 = 69,993.',
      exampleSolTe: 'సోపానం 1: 6,74,529 లో 7 తర్వాత 4 అంకెలు ఉన్నాయి కాబట్టి 7 యొక్క స్థాన విలువ = 70,000.\nసోపానం 2: 7 యొక్క ముఖ విలువ = 7.\nసోపానం 3: భేదం = 70,000 - 7 = 69,993.'
    },
    {
      code: '1.4',
      titleEn: 'Complete Divisibility Rules (2 to 13) & Combined Divisibility (72, 88, 99)',
      titleTe: 'భాజనీయత సూత్రాలు (2 నుండి 13 వరకు) మరియు సంయుక్త భాజనీయత (72, 88, 99)',
      conceptEn: `Divisibility rules allow you to find missing digits (like x and y) in large numbers without actual division:
• **Rule of 2**: Last digit must be even (**0, 2, 4, 6, 8**).
• **Rule of 4**: Last **2 digits** must be divisible by 4 (or end in 00).
• **Rule of 8**: Last **3 digits** must be divisible by 8 (or end in 000). *(Tip: If the 3rd digit from right is EVEN, just check if the last 2 digits are divisible by 8; if ODD, add 4 to the last 2 digits and check divisibility by 8!)*
• **Rule of 3**: **Sum of all digits** must be divisible by 3.
• **Rule of 9**: **Sum of all digits** must be divisible by 9. *(Shortcut: Cancel out digit pairs that add up to 9!)*
• **Rule of 5**: Last digit must be **0 or 5**.
• **Rule of 6**: Number must be divisible by **both 2 and 3** (since 6 = 2 × 3, co-primes).
• **Rule of 11**: Find **(Sum of digits at Odd places) - (Sum of digits at Even places)**. The difference must be **0 or a multiple of 11 (11, 22, 33...)**.
• **Rule of 7**: Double the last digit and subtract it from the remaining truncated number; if the result is divisible by 7, the number is divisible by 7.
• **Rule of 13**: Multiply the last digit by 4 and add it to the remaining number; if divisible by 13, the number is divisible by 13.
• **Rule of 7, 11, 13 Together (3-Digit Pair Rule)**: Since **7 × 11 × 13 = 1001**, any 6-digit number formed by repeating a 3-digit number (like **abcabc**, e.g., 479479) is ALWAYS divisible by **7, 11, 13, and 1001**!
• **Combined Divisibility Rules (High Frequency in RRB NTPC)**:
  - **Divisible by 72**: Split into co-primes **8 × 9** (Check Rule of 8 for last 3 digits first, then Rule of 9 for sum of digits).
  - **Divisible by 88**: Split into co-primes **8 × 11**.
  - **Divisible by 99**: Split into co-primes **9 × 11**.`,
      conceptTe: `పెద్ద సంఖ్యలను భాగించకుండానే ఏ సంఖ్యచే భాగించబడతాయో కనుగొనడానికి భాజనీయత సూత్రాలు (Divisibility Rules) ఉపయోగపడతాయి:
• **2 చే భాజనీయత**: చివరి అంకె సరి సంఖ్య (**0, 2, 4, 6, 8**) అయి ఉండాలి.
• **4 చే భాజనీయత**: చివరి **2 అంకెలు** 4 చే భాగించబడాలి.
• **8 చే భాజనీయత**: చివరి **3 అంకెలు** 8 చే భాగించబడాలి.
• **3 మరియు 9 చే భాజనీయత**: సంఖ్యలోని **అంకెల మొత్తం (Sum of digits)** వరుసగా 3 లేదా 9 చే భాగించబడాలి. *(9 చే పరీక్షించేటప్పుడు అంకెల మొత్తం 9 అయ్యే జతలను కొట్టివేయవచ్చు!)*
• **5 చే భాజనీయత**: చివరి అంకె **0 లేదా 5** ఉండాలి.
• **6 చే భాజనీయత**: ఆ సంఖ్య **2 మరియు 3** రెండింటిచే భాగించబడాలి.
• **11 చే భాజనీయత**: **(బేసి స్థానాలలోని అంకెల మొత్తం) - (సరి స్థానాలలోని అంకెల మొత్తం) = 0 లేదా 11 యొక్క గుణిజం (11, 22...)** కావాలి.
• **7 × 11 × 13 = 1001 ప్రత్యేక నియమం**: ఏదైనా మూడంకెల సంఖ్య రెండుసార్లు రాస్తే ఏర్పడే 6-అంకెల సంఖ్య (**abcabc**, ఉదా: 528528) ఎల్లప్పుడూ **7, 11, 13 మరియు 1001** చే నిశ్శేషంగా భాగించబడుతుంది!
• **సంయుక్త భాజనీయత (72, 88, 99)**:
  - **72 చే భాజనీయత** = **8 మరియు 9** చే భాగించబడాలి.
  - **88 చే భాజనీయత** = **8 మరియు 11** చే భాగించబడాలి.
  - **99 చే భాజనీయత** = **9 మరియు 11** చే భాగించబడాలి.`,
      ruleEn: 'When testing divisibility by a composite number M, always split M into two CO-PRIME factors (a × b where HCF(a,b) = 1). Example: For 24, use 3 × 8 (never 4 × 6!).',
      ruleTe: 'సంయుక్త సంఖ్యతో భాజనీయతను పరీక్షించేటప్పుడు ఆ సంఖ్యను ఎల్లప్పుడూ పరస్పర ప్రధాన కారణాంకాలుగా (Co-prime factors) విడగొట్టాలి. ఉదాహరణకు 24 కోసం 3 × 8 తీసుకోవాలి (4 × 6 తీసుకోకూడదు!).',
      formula: '72 = 8 × 9 | 88 = 8 × 11 | 99 = 9 × 11 | abcabc = abc × 1001 (Divisible by 7, 11, 13) | ababab = ab × 10101 (Divisible by 3, 7, 13, 37)',
      exampleQEn: 'If the 8-digit number 43x259y2 is divisible by 88, find the value of (5x + 2y).',
      exampleQTe: '43x259y2 అనే 8-అంకెల సంఖ్య 88 చే నిశ్శేషంగా భాగించబడితే, (5x + 2y) విలువ ఎంత?',
      exampleSolEn: 'Step 1: 88 = 8 × 11. First check divisibility by 8 on the last 3 digits (9y2):\nSince 912 ÷ 8 = 114,952 ÷ 8 = 119, possible values of y are 1 or 5. Let us check with Rule of 11:\nStep 2: Odd place digits sum = 4 + x + 5 + y = 9 + x + y.\nEven place digits sum = 3 + 2 + 9 + 2 = 16.\nDifference = (9 + x + y) - 16 = x + y - 7 = 0 → x + y = 7.\nIf y = 5 (for 952) and x = 2 → 5x + 2y = 5(2) + 2(5) = 20.',
      exampleSolTe: 'సోపానం 1: 88 = 8 × 11. చివరి 3 అంకెలు (9y2) 8 చే భాగించబడాలంటే y = 5 (952 ÷ 8 = 119) లేదా y = 1 (912 ÷ 8 = 114).\nసోపానం 2: 11 చే భాజనీయత ప్రకారం: (4 + x + 5 + y) - (3 + 2 + 9 + 2) = 0 → x + y = 7.\ny = 5 అయితే x = 2 అవుతుంది. అప్పుడు 5x + 2y = 5(2) + 2(5) = 20.'
    },
    {
      code: '1.5',
      titleEn: 'Unit Digit (ఒకట్ల స్థానంలోని అంకె) & Cyclicity of Powers',
      titleTe: 'ఒకట్ల స్థానంలోని అంకె (Unit Digit) మరియు ఘాతాల చక్రీయత (Cyclicity)',
      conceptEn: `To find the Unit Digit (last digit) of a large product or power expression $a^n$, we only look at the unit digit of the base $a$ and use **Cyclicity Rules**:
1. **Group 1 — Cyclicity 1 (Digits 0, 1, 5, 6)**:
   • If a number ends in **0, 1, 5, or 6**, its unit digit raised to ANY positive integer power $n$ remains the **SAME digit (0, 1, 5, or 6)**!
   • Example: $125^{999}$ ends in **5**; $376^{482}$ ends in **6**.
2. **Group 2 — Cyclicity 2 (Digits 4 and 9 — Odd/Even Power Rule)**:
   • **For 4**: $4^{\text{Odd}} \rightarrow \mathbf{4}$  |  $4^{\text{Even}} \rightarrow \mathbf{6}$.
   • **For 9**: $9^{\text{Odd}} \rightarrow \mathbf{9}$  |  $9^{\text{Even}} \rightarrow \mathbf{1}$.
3. **Group 3 — Cyclicity 4 (Digits 2, 3, 7, 8 — Divide Power by 4 Rule)**:
   • The unit digits of powers of **2, 3, 7, and 8** repeat after every **4 powers**.
   • **Method**: Divide the power $n$ (or just the last 2 digits of power $n$) by **4** and find the remainder $r$:
     - If remainder $r = 1 \rightarrow$ take $\text{Unit Digit}^1$
     - If remainder $r = 2 \rightarrow$ take $\text{Unit Digit}^2$
     - If remainder $r = 3 \rightarrow$ take $\text{Unit Digit}^3$
     - **If remainder $r = 0$ (exact multiple of 4) $\rightarrow$ take $\text{Unit Digit}^4$ (NEVER take power 0!)**.`,
      conceptTe: `పెద్ద గుణకారాలు లేదా ఘాతాల ($a^n$) యొక్క **ఒకట్ల స్థానంలోని అంకె (Unit Digit)** ను కనుగొనడానికి క్రింది 3 చక్రీయత నియమాలు (Cyclicity Rules) వాడాలి:
1. **గ్రూప్ 1 — మార్పు లేని అంకెలు (0, 1, 5, 6)**:
   • భూమి (Base) చివర **0, 1, 5 లేదా 6** ఉంటే, ఘాతం (Power) ఎంత పెద్ద సంఖ్య అయినా ఒకట్ల స్థానంలో **అదే అంకె (0, 1, 5, 6)** వస్తుంది!
2. **గ్రూప్ 2 — సరి/బేసి ఘాత నియమం (4 మరియు 9)**:
   • **4 కు**: బేసి ఘాతం ($4^{\text{Odd}}$) ఉంటే $\rightarrow \mathbf{4}$ | సరి ఘాతం ($4^{\text{Even}}$) ఉంటే $\rightarrow \mathbf{6}$.
   • **9 కు**: బేసి ఘాతం ($9^{\text{Odd}}$) ఉంటే $\rightarrow \mathbf{9}$ | సరి ఘాతం ($9^{\text{Even}}$) ఉంటే $\rightarrow \mathbf{1}$.
3. **గ్రూప్ 3 — ఘాతాన్ని 4 చే భాగించే నియమం (2, 3, 7, 8)**:
   • భూమి చివర **2, 3, 7 లేదా 8** ఉన్నప్పుడు, ఘాతాన్ని (లేదా ఘాతంలోని చివరి 2 అంకెలను) **4 చే భాగించి శేషం (Remainder $r$)** కనుగొనాలి:
     - శేషం 1 వస్తే $\rightarrow$ ఘాతం 1 తీసుకోండి.
     - శేషం 2 వస్తే $\rightarrow$ ఘాతం 2 తీసుకోండి.
     - శేషం 3 వస్తే $\rightarrow$ ఘాతం 3 తీసుకోండి.
     - **శేషం 0 వస్తే (4 చే నిశ్శేషంగా భాగించబడితే) $\rightarrow$ ఘాతంగా 4 తీసుకోవాలి!** ($2^4=16 \rightarrow 6, 3^4=81 \rightarrow 1, 7^4 \rightarrow 1, 8^4 \rightarrow 6$).`,
      ruleEn: 'In any product, if a digit 5 is multiplied by ANY even digit (2, 4, 6, 8), the unit digit of the entire product immediately becomes 0!',
      ruleTe: 'ఏదైనా గుణకారంలో ఒకట్ల స్థానంలో 5 ఉండి, దానితో ఏ ఒక్క సరి అంకె (2, 4, 6, 8) గుణించబడినా, మొత్తం లబ్దం యొక్క ఒకట్ల స్థానం వెంటనే సున్నా (0) అవుతుంది!',
      formula: '(0,1,5,6)ⁿ → Same | 4^Odd=4, 4^Even=6 | 9^Odd=9, 9^Even=1 | For (2,3,7,8)ⁿ → Replace n by (n mod 4; if 0 use 4)',
      exampleQEn: 'Find the unit digit in the expression: (217)⁴¹³ × (819)⁵⁴⁷ × (414)⁶²⁴ × (342)⁸¹².',
      exampleQTe: '(217)⁴¹³ × (819)⁵⁴⁷ × (414)⁶²⁴ × (342)⁸¹² సమాసంలో ఒకట్ల స్థానంలోని అంకె (Unit Digit) ఎంత?',
      exampleSolEn: 'Step 1: Find unit digit of each term:\n• 7⁴¹³: 413 ÷ 4 gives remainder 1 → 7¹ = 7.\n• 9⁵⁴⁷: Power 547 is Odd → 9^Odd = 9.\n• 4⁶²⁴: Power 624 is Even → 4^Even = 6.\n• 2⁸¹²: 812 ÷ 4 gives remainder 0 → take 2⁴ = 16 → 6.\nStep 2: Multiply unit digits: 7 × 9 × 6 × 6 = 63 (ends in 3) × 36 (ends in 6) → 3 × 6 = 18 → Unit Digit = 8.',
      exampleSolTe: 'సోపానం 1: ప్రతి పదం యొక్క చివరి అంకెను కనుగొనండి:\n• 7⁴¹³: 13 ÷ 4 శేషం 1 → 7¹ = 7.\n• 9⁵⁴⁷: బేసి ఘాతం కాబట్టి → 9.\n• 4⁶²⁴: సరి ఘాతం కాబట్టి → 6.\n• 2⁸¹²: 12 ÷ 4 శేషం 0 కాబట్టి ఘాతం 4 → 2⁴ = 16 → 6.\nసోపానం 2: ఒకట్ల స్థానాల లబ్దం = 7 × 9 × 6 × 6 → (7×9=63 → 3) × (6×6=36 → 6) → 3 × 6 = 18 → ఒకట్ల స్థానం = 8.'
    },
    {
      code: '1.6',
      titleEn: 'Division Algorithm & Remainder Theorem (Negative Remainder Concept)',
      titleTe: 'భాగహార నియమం (Division Algorithm) మరియు శేష సిద్ధాంతం (Remainder Theorem)',
      conceptEn: `1. **Euclid's Division Algorithm (భాగహార సూత్రం)**:
   $$\text{Dividend (విభాజ్యం)} = \text{Divisor (భాజకం)} \times \text{Quotient (భాగఫలం)} + \text{Remainder (శేషం)}$$
   Where $0 \le \text{Remainder} < \text{Divisor}$.
2. **Successive / Double Division Model (రెండు భాజకాల లెక్క)**:
   • If a number $N$ when divided by $D_1$ leaves remainder $R_1$, and when the SAME number is divided by $D_2$ (where $D_1$ is a multiple of $D_2$), the new remainder is simply found by **dividing $R_1$ by $D_2$**!
3. **Remainder Theorem & Negative Remainder Trick**:
   • Remainders can be added and multiplied! The remainder of $(A \times B + C)$ divided by $D$ is the same as the remainder of $(R_A \times R_B + R_C)$ divided by $D$.
   • **Power Remainder Rule**:
     - $(x + 1)^n \div x \rightarrow$ Remainder is ALWAYS **$1^n = 1$**.
     - $(x - 1)^n \div x \rightarrow$ Remainder is **$(-1)^n$**:
       • If $n$ is **Even**, Remainder = **$+1$**.
       • If $n$ is **Odd**, Remainder = **$-1 \equiv (x - 1)$** (since final remainder must be positive, add divisor $x$ to $-1$).`,
      conceptTe: `1. **భాగహార నియమం (Division Algorithm)**:
   $$\text{విభాజ్యం (Dividend)} = \text{భాజకం (Divisor)} \times \text{భాగఫలం (Quotient)} + \text{శేషం (Remainder)}$$
   ఇక్కడ శేషం ఎల్లప్పుడూ భాజకం కంటే చిన్నదిగా ఉంటుంది ($0 \le R < D$).
2. **మొదటి శేషాన్ని రెండవ భాజకంతో భాగించే మోడల్**:
   • ఒక సంఖ్యను $D_1$ చే భాగించినప్పుడు శేషం $R_1$ వచ్చి, అదే సంఖ్యను $D_2$ చే ($D_1$ అనేది $D_2$ యొక్క గుణిజం అయినప్పుడు) భాగిస్తే వచ్చే కొత్త శేషం = **$R_1$ ను నేరుగా $D_2$ చే భాగించగా వచ్చే శేషం**!
3. **రుణ శేష సిద్ధాంతం (Negative Remainder Trick)**:
   • $(x + 1)^n$ ను $x$ చే భాగిస్తే శేషం ఎల్లప్పుడూ **$1^n = 1$** వస్తుంది.
   • $(x - 1)^n$ ను $x$ చే భాగిస్తే శేషం **$(-1)^n$** వస్తుంది:
     - ఘాతం $n$ **సరి సంఖ్య (Even)** అయితే శేషం = **$+1$**.
     - ఘాతం $n$ **బేసి సంఖ్య (Odd)** అయితే శేషం = **$-1$**, కానీ శేషం ధనాత్మకంగా ఉండాలి కాబట్టి భాజకం నుండి 1 తీసివేయాలి = **$(x - 1)$**!`,
      ruleEn: 'Final remainder reported in any exam is ALWAYS non-negative (0 ≤ R < Divisor). If you get a negative remainder -k when dividing by D, the actual positive remainder is (D - k).',
      ruleTe: 'గణన కోసం రుణ శేషం (-k) వాడినప్పటికీ, తుది సమాధానంలో శేషం ఎల్లప్పుడూ ధన సంఖ్యగానే ఉండాలి. రుణ శేషం -k వస్తే, దానికి భాజకం D ని కలిపి (D - k) ని సమాధానంగా రాయాలి.',
      formula: 'Dividend = Divisor × Quotient + Remainder | (aⁿ + bⁿ) is divisible by (a + b) when n is ODD | (aⁿ - bⁿ) is divisible by BOTH (a - b) and (a + b) when n is EVEN',
      exampleQEn: 'Find the remainder when (67⁶⁷ + 67) is divided by 68.',
      exampleQTe: '(67⁶⁷ + 67) ను 68 చే భాగించినప్పుడు వచ్చే శేషం (Remainder) ఎంత?',
      exampleSolEn: 'Step 1: When 67 is divided by 68, the negative remainder is (67 - 68) = -1.\nStep 2: Substitute 67 ≡ -1 (mod 68):\nRemainder = (-1)⁶⁷ + (-1) = -1 - 1 = -2.\nStep 3: Convert negative remainder to positive by adding divisor 68:\nActual Remainder = 68 - 2 = 66.',
      exampleSolTe: 'సోపానం 1: 67 ను 68 చే భాగిస్తే రుణ శేషం = (67 - 68) = -1.\nసోపానం 2: సమాసంలో 67 బదులు -1 రాయగా: (-1)⁶⁷ + (-1) = -1 - 1 = -2.\nసోపానం 3: రుణ శేషం -2 వచ్చింది కాబట్టి భాజకం 68 ని కలపగా: అసలు శేషం = 68 - 2 = 66.'
    },
    {
      code: '1.7',
      titleEn: 'Factors / Divisors — Total, Even, Odd, Prime Factors & Sum of Factors',
      titleTe: 'కారణాంకాలు (Factors) — మొత్తం కారణాంకాలు, సరి/బేసి కారణాంకాలు & కారణాంకాల మొత్తం',
      conceptEn: `To find all factor properties of any composite number $N$, first write its **Prime Factorization**:
$$N = 2^p \times a^q \times b^r \dots$$
(where $2, a, b$ are distinct prime numbers, and $p, q, r$ are their powers).

1. **Total Number of Factors (మొత్తం కారణాంకాల సంఖ్య)**:
   Add 1 to each power and multiply:
   $$\text{Total Factors} = (p + 1)(q + 1)(r + 1)$$
2. **Number of Odd Factors (బేసి కారణాంకాల సంఖ్య)**:
   Ignore the power of 2 completely, and multiply $(power + 1)$ of all odd primes:
   $$\text{Odd Factors} = (q + 1)(r + 1)$$
3. **Number of Even Factors (సరి కారణాంకాల సంఖ్య)**:
   Do NOT add 1 to the power of 2 ($p$), keep $p$ as it is, and multiply by $(q + 1)(r + 1)$:
   $$\text{Even Factors} = p \times (q + 1)(r + 1) = \text{Total Factors} - \text{Odd Factors}$$
4. **Total Number of Prime Factors (ప్రధాన కారణాంకాల సంఖ్య)**:
   Simply add the exponents of prime factors: **$p + q + r$**.
5. **Sum of All Factors (కారణాంకాలన్నింటి మొత్తం)**:
   $$\text{Sum} = (2^0 + 2^1 + \dots + 2^p) \times (a^0 + a^1 + \dots + a^q) \times (b^0 + b^1 + \dots + b^r)$$`,
      conceptTe: `ఏదైనా సంఖ్య $N$ యొక్క కారణాంకాల (Factors / Divisors) సంఖ్యను కనుగొనడానికి ముందుగా దానిని **ప్రధాన కారణాంకాల లబ్దంగా (Prime Factorization)** రాయాలి:
$$N = 2^p \times a^q \times b^r$$
(ఇక్కడ $2, a, b$ ప్రధాన సంఖ్యలు మరియు $p, q, r$ వాటి ఘాతాలు).

1. **మొత్తం కారణాంకాల సంఖ్య (Total Factors)**: ప్రతి ఘాతానికి 1 కలిపి గుణించాలి:
   $$\text{Total Factors} = (p + 1)(q + 1)(r + 1)$$
2. **బేసి కారణాంకాల సంఖ్య (Odd Factors)**: 2 యొక్క ఘాతాన్ని వదిలివేసి, మిగిలిన బేసి ప్రధాన సంఖ్యల ఘాతాలకు 1 కలిపి గుణించాలి:
   $$\text{Odd Factors} = (q + 1)(r + 1)$$
3. **సరి కారణాంకాల సంఖ్య (Even Factors)**: 2 యొక్క ఘాతం ($p$) ను అలాగే ఉంచి, మిగిలిన ఘాతాలకు 1 కలిపి గుణించాలి:
   $$\text{Even Factors} = p \times (q + 1)(r + 1)$$
4. **ప్రధాన కారణాంకాల సంఖ్య (Number of Prime Factors)**: ఘాతాలన్నింటినీ నేరుగా కూడాలి = **$p + q + r$**.
5. **కారణాంకాల మొత్తం (Sum of Factors)**:
   $$(2^0 + 2^1 + \dots + 2^p)(a^0 + \dots + a^q)(b^0 + \dots + b^r)$$`,
      ruleEn: 'Only Perfect Square numbers (like 4, 9, 16, 25, 36...) have an ODD number of total factors! All non-square numbers have an EVEN number of total factors.',
      ruleTe: 'కేవలం ఖచ్చితమైన వర్గ సంఖ్యలకు (Perfect Squares: 4, 9, 16, 25, 36...) మాత్రమే మొత్తం కారణాంకాల సంఖ్య బేసి సంఖ్యగా (Odd number) ఉంటుంది!',
      formula: 'For N = 2ᵖ · aᵍ · bʳ: Total Factors = (p+1)(q+1)(r+1) | Odd Factors = (q+1)(r+1) | Even Factors = p(q+1)(r+1)',
      exampleQEn: 'For the number 360, find: (i) Total number of factors, (ii) Number of Odd factors, (iii) Number of Even factors, and (iv) Sum of all factors.',
      exampleQTe: '360 అనే సంఖ్యకు (i) మొత్తం కారణాంకాలు, (ii) బేసి కారణాంకాలు, (iii) సరి కారణాంకాలు మరియు (iv) కారణాంకాల మొత్తం కనుగొనండి.',
      exampleSolEn: 'Step 1: Prime factorization of 360 = 36 × 10 = (2² × 3²) × (2 × 5) = 2³ × 3² × 5¹.\nStep 2:\n(i) Total Factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24.\n(ii) Odd Factors (ignore 2³) = (2 + 1)(1 + 1) = 3 × 2 = 6.\n(iii) Even Factors = 3 × (2 + 1)(1 + 1) = 3 × 3 × 2 = 18 (or 24 - 6 = 18).\n(iv) Sum of Factors = (1 + 2 + 4 + 8) × (1 + 3 + 9) × (1 + 5) = 15 × 13 × 6 = 1,170.',
      exampleSolTe: 'సోపానం 1: 360 యొక్క ప్రధాన కారణాంకాల లబ్దం = 2³ × 3² × 5¹.\nసోపానం 2:\n(i) మొత్తం కారణాంకాలు = (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24.\n(ii) బేసి కారణాంకాలు (2³ వదిలేస్తే) = (2+1)(1+1) = 3 × 2 = 6.\n(iii) సరి కారణాంకాలు = 24 - 6 = 18.\n(iv) కారణాంకాల మొత్తం = (1+2+4+8) × (1+3+9) × (1+5) = 15 × 13 × 6 = 1,170.'
    },
    {
      code: '1.8',
      titleEn: 'Number of Trailing Zeros at the End of a Product or Factorial (n!)',
      titleTe: 'లబ్దం లేదా ఫ్యాక్టోరియల్ (n!) చివరలో వచ్చే సున్నాల సంఖ్య (Trailing Zeros)',
      conceptEn: `A zero (0) at the end of a product is formed only when a **2** and a **5** multiply together ($2 \times 5 = 10$).
• Therefore, **Number of Trailing Zeros = Number of pairs of $(2 \times 5)$ = Minimum of (power of 2, power of 5)**.
• In any continuous product or factorial $n! = 1 \times 2 \times 3 \times \dots \times n$, multiples of 2 occur much more frequently than multiples of 5. So we only need to count the **power of 5** in $n!$ using **Legendre's Formula**:
  $$\text{Number of Zeros in } n! = \left\lfloor \frac{n}{5} \right\rfloor + \left\lfloor \frac{n}{25} \right\rfloor + \left\lfloor \frac{n}{125} \right\rfloor + \left\lfloor \frac{n}{625} \right\rfloor + \dots$$
  (Keep dividing $n$ successively by 5 and add all the integer quotients, ignoring remainders!).
• **Standard Values to Memorize for Exam Hall**:
  - $50!$ has $10 + 2 = \mathbf{12}$ zeros.
  - $100!$ has $20 + 4 = \mathbf{24}$ zeros.
  - $200!$ has $40 + 8 + 1 = \mathbf{49}$ zeros.
  - $500!$ has $100 + 20 + 4 = \mathbf{124}$ zeros.
  - $1000!$ has $200 + 40 + 8 + 1 = \mathbf{249}$ zeros.`,
      conceptTe: `ఏదైనా గుణకారం చివరలో సున్నా (0) రావాలంటే అందులో ఒక **2** మరియు ఒక **5** జతగా ఉండాలి ($2 \times 5 = 10$).
• కాబట్టి చివరలో వచ్చే సున్నాల సంఖ్య = **$(2 \times 5)$ జతల సంఖ్య**.
• ఫ్యాక్టోరియల్ $n! = 1 \times 2 \times 3 \times \dots \times n$ లో 2 ల కంటే 5 ల సంఖ్య తక్కువగా ఉంటుంది కాబట్టి, $n$ ను వరుసగా **5 చే भाగిస్తూ భాగఫలాలను (Quotients) మాత్రమే కూడితే** సున్నాల సంఖ్య వస్తుంది:
  $$\text{Zeros in } n! = \left\lfloor \frac{n}{5} \right\rfloor + \left\lfloor \frac{n}{25} \right\rfloor + \left\lfloor \frac{n}{125} \right\rfloor + \dots$$
• **పరీక్ష కోసం నేరుగా గుర్తుంచుకోవాల్సిన విలువలు**:
  - $50!$ చివర సున్నాలు = $10 + 2 = \mathbf{12}$
  - $100!$ చివర సున్నాలు = $20 + 4 = \mathbf{24}$
  - $200!$ చివర సున్నాలు = $40 + 8 + 1 = \mathbf{49}$
  - $1000!$ చివర సున్నాలు = $200 + 40 + 8 + 1 = \mathbf{249}$`,
      ruleEn: 'In a product of ONLY ODD numbers (like 1 × 3 × 5 × 7 × ... × 99), there is NO factor of 2, so the number of trailing zeros is ZERO (0)!',
      ruleTe: 'కేవలం బేసి సంఖ్యల లబ్దంలో (1 × 3 × 5 × 7 × ... × 99) 5 ఉన్నప్పటికీ ఒక్క \'2\' కూడా ఉండదు కాబట్టి చివరలో వచ్చే సున్నాల సంఖ్య సున్నా (0) అవుతుంది!',
      formula: 'Zeros in n! = [n/5] + [n/25] + [n/125] + ... | 100! = 24 Zeros | 1000! = 249 Zeros',
      exampleQEn: 'Find the number of trailing zeros at the end of 375! (1 × 2 × 3 × ... × 375).',
      exampleQTe: '375! (1 × 2 × 3 × ... × 375) లబ్దం చివరలో వచ్చే సున్నాల సంఖ్య ఎంత?',
      exampleSolEn: 'Step 1: Divide 375 successively by 5 and take integer quotients:\n• 375 ÷ 5 = 75\n• 75 ÷ 5 = 15\n• 15 ÷ 5 = 3 (Since 3 < 5, stop here).\nStep 2: Add all quotients = 75 + 15 + 3 = 93 trailing zeros.',
      exampleSolTe: 'సోపానం 1: 375 ను వరుసగా 5 చే భాగిస్తూ భాగఫలాలను రాయండి:\n• 375 ÷ 5 = 75\n• 75 ÷ 5 = 15\n• 15 ÷ 5 = 3.\nసోపానం 2: భాగఫలాల మొత్తం = 75 + 15 + 3 = 93 సున్నాలు.'
    },
    {
      code: '1.9',
      titleEn: 'VBODMAS Rule & Algebraic Identities in Number System Simplification',
      titleTe: 'VBODMAS సూక్ష్మీకరణ నియమం మరియు బీజగణిత సూత్రాల అనువర్తనాలు',
      conceptEn: `Every RRB CBT paper has 2 questions on VBODMAS and algebraic pattern simplification:
1. **Strict VBODMAS Priority Order**:
   • **V — Vinculum (Bar / గీత బ్రాకెట్)**: Solve the expression directly under the top bar first! *(Caution: $-5 - 3$ with a bar over $5 - 3$ means $-(5 - 3) = -2$, NOT $(-5 - 3) = -8$!)*
   • **B — Brackets**: Innermost to outermost: **Small \`()\` $\rightarrow$ Curly \`{}\` $\rightarrow$ Square \`[]\`**.
   • **O — Of / Order (యొక్క)**: Multiply BEFORE division! ($a \div b \text{ of } c = a \div (b \times c)$).
   • **D — Division ($\div$)** $\rightarrow$ **M — Multiplication ($\times$)** $\rightarrow$ **A — Addition ($+$)** $\rightarrow$ **S — Subtraction ($-$)**.
2. **Golden Algebraic Simplification Patterns (Do NOT multiply large decimals!)**:
   • **Pattern 1**: $\frac{a^2 - b^2}{a - b} = a + b$  and  $\frac{a^2 - b^2}{a + b} = a - b$
   • **Pattern 2 (Sum of Cubes)**: $\frac{a^3 + b^3}{a^2 - ab + b^2} = \mathbf{a + b}$
   • **Pattern 3 (Difference of Cubes)**: $\frac{a^3 - b^3}{a^2 + ab + b^2} = \mathbf{a - b}$
   • **Pattern 4**: $\frac{(a + b)^2 + (a - b)^2}{a^2 + b^2} = \mathbf{2}$ (Always equals 2, independent of $a$ and $b$!)
   • **Pattern 5**: $\frac{(a + b)^2 - (a - b)^2}{a \times b} = \mathbf{4}$ (Always equals 4, independent of $a$ and $b$!)`,
      conceptTe: `ఆర్‌ఆర్‌బి పరీక్షలో సూక్ష్మీకరణ (Simplification) లెక్కలను తప్పు లేకుండా చేయడానికి **VBODMAS** మరియు **బీజగణిత నమూనాలు** ఉపయోగించాలి:
1. **VBODMAS క్రమం**:
   • **V — Vinculum (గీత బ్రాకెట్)**: అంకెల పైన ఉన్న గీత కింది భాగాన్ని সবার ముందుగా సూక్ష్మీకరించాలి.
   • **B — బ్రాకెట్లు**: చిన్న బ్రాకెట్ \`()\` $\rightarrow$ మీసాల బ్రాకెట్ \`{}\` $\rightarrow$ పెద్ద బ్రాకెట్ \`[]\`.
   • **O — Of (యొక్క)**: భాగాహారం కంటే ముందే "of" గుణకారం చేయాలి!
   • **D — భాగాహారం ($\div$)** $\rightarrow$ **M — గుణకారం ($\times$)** $\rightarrow$ **A — కూడిక ($+$)** $\rightarrow$ **S — తీసివేత ($-$)**.
2. **2 సెకన్లలో జవాబు ఇచ్చే బీజగణిత సూత్రాలు**:
   • $\frac{a^3 + b^3}{a^2 - ab + b^2} = \mathbf{a + b}$
   • $\frac{a^3 - b^3}{a^2 + ab + b^2} = \mathbf{a - b}$
   • $\frac{(a + b)^2 + (a - b)^2}{a^2 + b^2} = \mathbf{2}$ (అంకెలు ఏవైనా జవాబు ఎల్లప్పుడూ **2**!)
   • $\frac{(a + b)^2 - (a - b)^2}{ab} = \mathbf{4}$ (అంకెలు ఏవైనా జవాబు ఎల్లప్పుడూ **4**!)`,
      ruleEn: 'In a ÷ b of c, ALWAYS multiply (b × c) first before dividing a! Never divide a by b first.',
      ruleTe: 'a ÷ b of c అని ఉన్నప్పుడు ముందుగా (b × c) గుణించి, ఆ తర్వాతే a ను భాగించాలి!',
      formula: '(a³ + b³)/(a² - ab + b²) = a + b | (a³ - b³)/(a² + ab + b²) = a - b | [(a+b)² - (a-b)²]/(ab) = 4',
      exampleQEn: 'Evaluate without long multiplication: (0.73 × 0.73 × 0.73 + 0.27 × 0.27 × 0.27) ÷ (0.73 × 0.73 - 0.73 × 0.27 + 0.27 × 0.27).',
      exampleQTe: '(0.73³ + 0.27³) ÷ (0.73² - 0.73 × 0.27 + 0.27²) విలువను గుణకారం చేయకుండా కనుగొనండి.',
      exampleSolEn: 'Step 1: This is in the exact algebraic form (a³ + b³) / (a² - ab + b²) where a = 0.73 and b = 0.27.\nStep 2: Using identity, result = a + b = 0.73 + 0.27 = 1.00 = 1!',
      exampleSolTe: 'సోపానం 1: ఇది (a³ + b³) / (a² - ab + b²) రూపంలో ఉంది. ఇక్కడ a = 0.73 మరియు b = 0.27.\nసోపానం 2: సూత్రం ప్రకారం జవాబు = a + b = 0.73 + 0.27 = 1!'
    },
    {
      code: '1.10',
      titleEn: 'Number Series Summations (Natural, Even, Odd, Squares, Cubes & Telescoping Fractions)',
      titleTe: 'సంఖ్యా శ్రేణుల మొత్తాలు (సహజ, సరి, బేసి, వర్గాలు, ఘనాలు & భిన్నాల శ్రేణులు)',
      conceptEn: `Summation formulas for consecutive numbers and telescoping fraction series are tested directly in RRB NTPC & Group D:
1. **Sum of first $n$ Natural Numbers ($1 + 2 + 3 + \dots + n$)**:
   $$S_n = \frac{n(n + 1)}{2} \quad \text{and Average} = \frac{n + 1}{2}$$
2. **Sum of first $n$ Even Natural Numbers ($2 + 4 + 6 + \dots + 2n$)**:
   $$S_{\text{even}} = n(n + 1) \quad \text{and Average} = n + 1$$
3. **Sum of first $n$ Odd Natural Numbers ($1 + 3 + 5 + \dots + (2n-1)$)**:
   $$S_{\text{odd}} = n^2 \quad \text{and Average} = n$$
4. **Sum of Squares of first $n$ Natural Numbers ($1^2 + 2^2 + 3^2 + \dots + n^2$)**:
   $$S_{n^2} = \frac{n(n + 1)(2n + 1)}{6}$$
5. **Sum of Cubes of first $n$ Natural Numbers ($1^3 + 2^3 + 3^3 + \dots + n^3$)**:
   $$S_{n^3} = \left[ \frac{n(n + 1)}{2} \right]^2$$
6. **Telescoping Fraction Series Shortcut**:
   $$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \dots + \frac{1}{n(n + 1)} = 1 - \frac{1}{n + 1} = \frac{n}{n + 1}$$
   General formula when difference between denominator factors is $d$:
   $$\text{Sum} = \frac{1}{\text{Difference } d} \times \left( \frac{1}{\text{First Factor}} - \frac{1}{\text{Last Factor}} \right)$$`,
      conceptTe: `సహజ సంఖ్యల శ్రేణులు మరియు భిన్నాల శ్రేణుల మొత్తాలకు సంబంధించిన సూత్రాలు:
1. **మొదటి $n$ సహజ సంఖ్యల మొత్తం ($1 + 2 + \dots + n$)** = $\frac{n(n + 1)}{2}$
2. **మొదటి $n$ సరి సహజ సంఖ్యల మొత్తం ($2 + 4 + \dots + 2n$)** = $n(n + 1)$
3. **మొదటి $n$ బేసి సహజ సంఖ్యల మొత్తం ($1 + 3 + 5 + \dots$)** = $n^2$
4. **మొదటి $n$ సహజ సంఖ్యల వర్గాల మొత్తం ($1^2 + 2^2 + \dots + n^2$)** = $\frac{n(n + 1)(2n + 1)}{6}$
5. **మొదటి $n$ సహజ సంఖ్యల ఘనాల మొత్తం ($1^3 + 2^3 + \dots + n^3$)** = $\left[ \frac{n(n + 1)}{2} \right]^2$
6. **భిన్నాల శ్రేణి (Telescoping Fraction Series) షార్ట్‌కట్**:
   $$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots + \frac{1}{n(n+1)} = \frac{1}{\text{భేదం } d} \left( \frac{1}{\text{మొదటి పదం}} - \frac{1}{\text{చివరి పదం}} \right)$$`,
      ruleEn: 'To find the sum of numbers from a to b (not starting from 1), calculate (Sum from 1 to b) - (Sum from 1 to a-1), OR use Arithmetic Progression formula: Sum = (Number of terms / 2) × (First term + Last term).',
      ruleTe: '1 నుండి కాకుండా మధ్యలో ఉన్న సంఖ్యల మొత్తం అడిగినప్పుడు, సమాంతర శ్రేణి సూత్రం: మొత్తం = (పదాల సంఖ్య / 2) × (మొదటి పదం + చివరి పదం) వాడండి.',
      formula: 'Σn = n(n+1)/2 | Σn² = n(n+1)(2n+1)/6 | Σn³ = [n(n+1)/2]² | Sum of n Odd = n² | Sum of n Even = n(n+1)',
      exampleQEn: 'Find the value of: 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100).',
      exampleQTe: '1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100) విలువ ఎంత?',
      exampleSolEn: 'Step 1: Each term 1/[k(k+1)] splits as 1/k - 1/(k+1).\nStep 2: All middle terms cancel out:\n= (1/1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + ... + (1/99 - 1/100)\n= 1 - 1/100 = 99/100 = 0.99.',
      exampleSolTe: 'సోపానం 1: సూత్రం ప్రకారం = (1 / భేదం 1) × (1/మొదటి సంఖ్య - 1/చివరి సంఖ్య).\nసోపానం 2: = 1/1 - 1/100 = 99/100 = 0.99.'
    }
  ],

  /* --------------------------------------------------------------------------
     3. BASIC CONCEPTS (ప్రాథమిక భావనలు — Beginner Foundation)
     -------------------------------------------------------------------------- */
  basicConcepts: [
    {
      titleEn: '1. Base-10 Place Value System & Digits',
      titleTe: '1. దశాంశ సంఖ్యా విధానం & అంకెలు',
      en: 'Every number is built from the 10 digits (0 to 9). Moving one position to the left multiplies the place value by 10 (Ones → Tens → Hundreds → Thousands). Moving one position right after the decimal point divides by 10.',
      te: 'ఏ సంఖ్య అయినా 0 నుండి 9 వరకు గల 10 అంకెలతో ఏర్పడుతుంది. కుడి నుండి ఎడమకు వెళ్లే కొద్దీ స్థాన విలువ 10 రెట్లు పెరుగుతుంది (ఒకట్లు, పదులు, వందలు, వేలు).'
    },
    {
      titleEn: '2. Number Tree Hierarchy (N ⊂ W ⊂ Z ⊂ Q ⊂ R)',
      titleTe: '2. సంఖ్యా సమితుల క్రమం (N ⊂ W ⊂ Z ⊂ Q ⊂ R)',
      en: 'Counting starts with Natural Numbers (1, 2, 3...). Adding 0 gives Whole Numbers. Adding negative numbers gives Integers. Including fractions p/q gives Rational Numbers. Combining Rational and Irrational (√2, π) gives Real Numbers.',
      te: 'లెక్కించే సంఖ్యలు సహజ సంఖ్యలు (1, 2, 3...). సున్నా కలిపితే పూర్ణాంకాలు (0, 1, 2...). రుణ సంఖ్యలు కలిపితే పూర్ణ సంఖ్యలు. భిన్నాలు (p/q) చేరితే అకరణీయ సంఖ్యలు అవుతాయి.'
    },
    {
      titleEn: '3. Prime Building Blocks of Numbers',
      titleTe: '3. సంఖ్యల నిర్మాణంలో ప్రధాన సంఖ్యల పాత్ర',
      en: 'By the Fundamental Theorem of Arithmetic, every composite number greater than 1 can be uniquely factored into Prime Numbers (e.g., 60 = 2² × 3¹ × 5¹). This prime factorization unlocks Factors, LCM, HCF, and Trailing Zeros.',
      te: 'ప్రతి సంయుక్త సంఖ్యను ప్రధాన సంఖ్యల లబ్దంగా (Prime Factorization) విడగొట్టవచ్చు (ఉదా: 60 = 2² × 3¹ × 5¹). దీని ద్వారా కారణాంకాల సంఖ్య, క.సా.గు, గ.సా.భా సులభంగా కనుగొనవచ్చు.'
    },
    {
      titleEn: '4. Parity (Even & Odd Arithmetic Laws)',
      titleTe: '4. సరి మరియు బేసి సంఖ్యల గణన ధర్మాలు',
      en: 'Adding or subtracting two numbers of the SAME parity (Even ± Even or Odd ± Odd) always gives an EVEN number. Adding or subtracting different parities (Even ± Odd) gives an ODD number.',
      te: 'రెండు సరి సంఖ్యలను లేదా రెండు బేసి సంఖ్యలను కూడినా/తీసివేసినా సరి సంఖ్యే (Even) వస్తుంది. ఒక సరి, ఒక బేసి సంఖ్యను కూడితే బేసి సంఖ్య (Odd) వస్తుంది.'
    }
  ],

  /* --------------------------------------------------------------------------
     5. DEFINITIONS AND IMPORTANT RULES (నిర్వచనాలు మరియు ముఖ్యమైన నియమాలు)
     -------------------------------------------------------------------------- */
  definitionsAndRules: [
    {
      termEn: 'Prime Number & Composite Number Rule',
      termTe: 'ప్రధాన సంఖ్య & సంయుక్త సంఖ్య నియమం',
      defEn: '1 is neither prime nor composite. 2 is the only even prime number. 4 is the smallest composite number, and 9 is the smallest odd composite number.',
      defTe: '1 ప్రధాన సంఖ్య కాదు, సంయుక్త సంఖ్య కాదు. 2 ఏకైక సరి ప్రధాన సంఖ్య. 4 అతి చిన్న సంయుక్త సంఖ్య, 9 అతి చిన్న బేసి సంయుక్త సంఖ్య.'
    },
    {
      termEn: 'Perfect Number (పరిపూర్ణ సంఖ్య)',
      termTe: 'పరిపూర్ణ సంఖ్య (Perfect Number)',
      defEn: 'A positive integer equal to the sum of its proper positive divisors (excluding the number itself). The first four Perfect Numbers are 6 (1+2+3=6), 28 (1+2+4+7+14=28), 496, and 8128.',
      defTe: 'ఒక సంఖ్య యొక్క కారణాంకాల మొత్తం (ఆ సంఖ్యను మినహాయించి) ఆ సంఖ్యకే సమానమైతే దానిని పరిపూర్ణ సంఖ్య అంటారు. ఉదా: 6 (1+2+3=6), 28 (1+2+4+7+14=28), 496, 8128.'
    },
    {
      termEn: 'Additive & Multiplicative Identity / Inverse',
      termTe: 'సంకలన & గుణకార తత్సమాంశం మరియు విలోమం',
      defEn: '• Additive Identity = 0 (since a + 0 = a) | Additive Inverse of a = -a.\n• Multiplicative Identity = 1 (since a × 1 = a) | Multiplicative Inverse (Reciprocal) of a = 1/a (0 has no reciprocal!).',
      defTe: '• సంకలన తత్సమాంశం = 0, a యొక్క సంకలన విలోమం = -a.\n• గుణకార తత్సమాంశం = 1, a యొక్క గుణకార విలోమం (व्युत्क्रमం) = 1/a (సున్నాకు గుణకార విలోమం ఉండదు!).'
    },
    {
      termEn: 'Algebraic Divisibility Rule of (aⁿ ± bⁿ)',
      termTe: '(aⁿ ± bⁿ) భాజనీయత సూత్రం',
      defEn: '• (aⁿ - bⁿ) is ALWAYS divisible by (a - b) for all natural numbers n.\n• (aⁿ - bⁿ) is divisible by BOTH (a - b) and (a + b) when n is EVEN.\n• (aⁿ + bⁿ) is divisible by (a + b) ONLY when n is ODD.',
      defTe: '• (aⁿ - bⁿ) అనేది అన్ని సహజ ఘాతాలకు (a - b) చే భాగించబడుతుంది.\n• n సరి సంఖ్య అయితే (aⁿ - bⁿ) అనేది (a - b) మరియు (a + b) రెండింటిచే భాగించబడుతుంది.\n• n బేసి సంఖ్య అయితే (aⁿ + bⁿ) అనేది (a + b) చే నిశ్శేషంగా భాగించబడుతుంది.'
    },
    {
      termEn: 'Fermat\'s & Wilson\'s Remainder Rules',
      termTe: 'ఫెర్మాట్ మరియు విల్సన్ శేష నియమాలు',
      defEn: 'For any prime number p: (1) If a is not divisible by p, then a^(p-1) divided by p always leaves remainder 1. (2) (p - 1)! + 1 is always divisible by p (so (p-1)! divided by p leaves remainder p - 1).',
      defTe: 'p ఒక ప్రధాన సంఖ్య అయినప్పుడు: (1) a^(p-1) ను p చే భాగిస్తే శేషం ఎల్లప్పుడూ 1 వస్తుంది. (2) (p - 1)! ను p చే భాగిస్తే శేషం (p - 1) వస్తుంది.'
    }
  ],

  /* --------------------------------------------------------------------------
     6. FORMULAS (సూత్రాల పట్టిక — Complete Chapter Formula Reference)
     -------------------------------------------------------------------------- */
  formulas: [
    '1. Division Algorithm: Dividend = (Divisor × Quotient) + Remainder  [0 ≤ Remainder < Divisor]',
    '2. Sum of first n Natural Numbers (1 + 2 + ... + n) = n(n + 1) / 2',
    '3. Sum of first n Even Natural Numbers (2 + 4 + ... + 2n) = n(n + 1)',
    '4. Sum of first n Odd Natural Numbers (1 + 3 + ... + (2n-1)) = n²',
    '5. Sum of Squares of first n Natural Numbers (1² + 2² + ... + n²) = n(n + 1)(2n + 1) / 6',
    '6. Sum of Cubes of first n Natural Numbers (1³ + 2³ + ... + n³) = [ n(n + 1) / 2 ]²',
    '7. Arithmetic Progression (AP): n-th term Tₙ = a + (n - 1)d  |  Number of terms n = [(Last - First) / d] + 1  |  Sum Sₙ = (n/2) × (First + Last)',
    '8. Factors of N = 2ᵖ · aᵍ · bʳ: Total Factors = (p + 1)(q + 1)(r + 1)  |  Odd Factors = (q + 1)(r + 1)  |  Even Factors = p(q + 1)(r + 1)',
    '9. Sum of Factors of N = (2⁰ + 2¹ + ... + 2ᵖ)(a⁰ + ... + aᵍ)(b⁰ + ... + bʳ)  |  Product of Factors = N^(Total Factors / 2)',
    '10. Trailing Zeros in n! = [n/5] + [n/25] + [n/125] + [n/625] + ...',
    '11. Recurring Decimals: 0.ā = a/9  |  0.ab̄ = ab/99  |  0.ab̄ (only b repeats) = (ab - a)/90',
    '12. Algebraic Simplifications: (a³ + b³)/(a² - ab + b²) = a + b  |  (a³ - b³)/(a² + ab + b²) = a - b'
  ],

  /* --------------------------------------------------------------------------
     7. STEP-BY-STEP SOLVED EXAMPLES (దశలవారీగా సాధించిన ఉదాహరణలు)
     -------------------------------------------------------------------------- */
  examples: [
    {
      qEn: '[Sub-Topic 1.1 & 1.2 — Primes & Classification] Find the sum of the smallest 2-digit prime number, the largest 2-digit prime number, and the smallest odd composite number.',
      qTe: '[ఉప-అంశం 1.1 & 1.2 — ప్రధాన & సంయుక్త సంఖ్యలు] రెండంకెల కనిష్ట ప్రధాన సంఖ్య, రెండంకెల గరిష్ట ప్రధాన సంఖ్య మరియు అతి చిన్న బేసి సంయుక్త సంఖ్యల మొత్తం ఎంత?',
      solEn: 'Step 1: Identify each number from definitions:\n• Smallest 2-digit prime number = 11\n• Largest 2-digit prime number = 97\n• Smallest odd composite number = 9\nStep 2: Add them together = 11 + 97 + 9 = 117.',
      solTe: 'సోపానం 1: నిర్వచనాల ప్రకారం ఆ మూడు సంఖ్యలను గుర్తించండి:\n• రెండంకెల కనిష్ట ప్రధాన సంఖ్య = 11\n• రెండంకెల గరిష్ట ప్రధాన సంఖ్య = 97\n• అతి చిన్న బేసి సంయుక్త సంఖ్య = 9\nసోపానం 2: మొత్తం = 11 + 97 + 9 = 117.'
    },
    {
      qEn: '[Sub-Topic 1.4 — Divisibility by 72] If the 7-digit number 54x29y6 is completely divisible by 72, find the value of (2x + 3y) for the maximum possible value of y.',
      qTe: '[ఉప-అంశం 1.4 — 72 చే భాజనీయత] 54x29y6 అనే 7-అంకెల సంఖ్య 72 చే నిశ్శేషంగా భాగించబడితే, గరిష్ట y విలువకు (2x + 3y) విలువ ఎంత?',
      solEn: 'Step 1: Split 72 into co-prime factors: 72 = 8 × 9.\nStep 2: Apply Rule of 8 to the last 3 digits (9y6): 936 ÷ 8 = 117 and 976 ÷ 8 = 122. So y can be 3 or 7. For maximum y, take y = 7.\nStep 3: Apply Rule of 9 (sum of digits divisible by 9):\n5 + 4 + x + 2 + 9 + 7 + 6 = 33 + x.\nNearest multiple of 9 is 36 → 33 + x = 36 → x = 3.\nStep 4: Required value (2x + 3y) = 2(3) + 3(7) = 6 + 21 = 27.',
      solTe: 'సోపానం 1: 72 = 8 × 9 కాబట్టి ఆ సంఖ్య 8 మరియు 9 రెండింటిచే భాగించబడాలి.\nసోపానం 2: చివరి 3 అంకెలు (9y6) 8 చే భాగించబడటానికి y = 3 (936) లేదా y = 7 (976) కావచ్చు. గరిష్ట y కాబట్టి y = 7 తీసుకోవాలి.\nసోపానం 3: 9 చే భాజనీయతకు అంకెల మొత్తం = 5+4+x+2+9+7+6 = 33 + x. ఇది 9 చే భాగించబడాలంటే 33 + x = 36 → x = 3.\nసోపానం 4: (2x + 3y) = 2(3) + 3(7) = 6 + 21 = 27.'
    },
    {
      qEn: '[Sub-Topic 1.5 — Unit Digit of Powers] Find the unit digit of: (173)⁴⁵ + (248)⁷² - (315)⁹⁹.',
      qTe: '[ఉప-అంశం 1.5 — ఒకట్ల స్థానంలోని అంకె] (173)⁴⁵ + (248)⁷² - (315)⁹⁹ యొక్క ఒకట్ల స్థానంలోని అంకెను కనుగొనండి.',
      solEn: 'Step 1: Find the unit digit of each power:\n• (173)⁴⁵ → 45 ÷ 4 leaves remainder 1 → 3¹ = 3.\n• (248)⁷² → 72 ÷ 4 leaves remainder 0 → take power 4: 8⁴ = (64)² → 4² = 16 → unit digit = 6.\n• (315)⁹⁹ → 5 raised to any power ends in 5.\nStep 2: Combine: 3 + 6 - 5 = 9 - 5 = 4.',
      solTe: 'సోపానం 1: ప్రతి పదం యొక్క ఒకట్ల స్థానం కనుగొనండి:\n• (173)⁴⁵ → 45 ÷ 4 శేషం 1 → 3¹ = 3.\n• (248)⁷² → 72 ÷ 4 శేషం 0 కాబట్టి ఘాతం 4 తీసుకోవాలి → 8⁴ చివరి అంకె = 6.\n• (315)⁹⁹ → 5 కు ఏ ఘాతం ఉన్నా చివరి అంకె = 5.\nసోపానం 2: 3 + 6 - 5 = 4.'
    },
    {
      qEn: '[Sub-Topic 1.6 — Division Algorithm] When a number N is divided by 84, it leaves a remainder of 57. What will be the remainder when the same number N is divided by 12?',
      qTe: '[ఉప-అంశం 1.6 — శేష సిద్ధాంతం] ఒక సంఖ్యను 84 చే భాగించినప్పుడు 57 శేషం వస్తుంది. అదే సంఖ్యను 12 చే భాగించినప్పుడు శేషం ఎంత వస్తుంది?',
      solEn: 'Step 1: Check if the first divisor (84) is divisible by the second divisor (12): Yes, 84 = 12 × 7.\nStep 2: Directly divide the first remainder (57) by the second divisor (12):\n57 = (12 × 4) + 9 → Remainder = 9!',
      solTe: 'సోపానం 1: మొదటి భాజకం 84 అనేది రెండవ భాజకం 12 చే నిశ్శేషంగా భాగించబడుతుంది (12 × 7 = 84).\nసోపానం 2: కాబట్టి మొదటి శేషం 57 ను నేరుగా 12 చే భాగించండి: 57 ÷ 12 → 12 × 4 = 48, శేషం = 9!'
    },
    {
      qEn: '[Sub-Topic 1.7 & 1.8 — Factors & Zeros] Find the total number of factors of 420, and the number of trailing zeros in 150!.',
      qTe: '[ఉప-అంశం 1.7 & 1.8 — కారణాంకాలు & సున్నాలు] 420 యొక్క మొత్తం కారణాంకాల సంఖ్యను, మరియు 150! చివరలో వచ్చే సున్నాల సంఖ్యను కనుగొనండి.',
      solEn: 'Part 1 (Factors of 420):\n420 = 42 × 10 = (2 × 3 × 7) × (2 × 5) = 2² × 3¹ × 5¹ × 7¹.\nTotal Factors = (2 + 1)(1 + 1)(1 + 1)(1 + 1) = 3 × 2 × 2 × 2 = 24 factors.\nPart 2 (Zeros in 150!):\n[150/5] + [150/25] + [150/125] = 30 + 6 + 1 = 37 trailing zeros.',
      solTe: 'భాగం 1 (420 కారణాంకాలు):\n420 = 2² × 3¹ × 5¹ × 7¹.\nమొత్తం కారణాంకాలు = (2+1)(1+1)(1+1)(1+1) = 3 × 2 × 2 × 2 = 24.\nభాగం 2 (150! లో సున్నాలు):\n[150/5] + [30/5] + [6/5] = 30 + 6 + 1 = 37 సున్నాలు.'
    },
    {
      qEn: '[Sub-Topic 1.9 & 1.10 — VBODMAS & Series] Simplify: 48 ÷ 12 × [ (9/8 of 4/3) ÷ (3/4 of 2/3) ], and find the sum of squares: 1² + 2² + 3² + ... + 10².',
      qTe: '[ఉప-అంశం 1.9 & 1.10 — VBODMAS & వర్గాల మొత్తం] 48 ÷ 12 × [ (9/8 of 4/3) ÷ (3/4 of 2/3) ] ను సూక్ష్మీకరించండి, మరియు 1² + 2² + ... + 10² విలువ కనుగొనండి.',
      solEn: 'Part 1 (VBODMAS):\nInside bracket, solve "of" first: (9/8 × 4/3) = 3/2 and (3/4 × 2/3) = 1/2.\nBracket = (3/2) ÷ (1/2) = 3.\nExpression = 48 ÷ 12 × 3 = 4 × 3 = 12.\nPart 2 (Sum of Squares up to 10²):\nUsing n(n+1)(2n+1)/6 for n = 10: (10 × 11 × 21) / 6 = 385.',
      solTe: 'భాగం 1 (VBODMAS):\nబ్రాకెట్ లోపల "of" ముందుగా చేయగా: (3/2) ÷ (1/2) = 3.\nబయట భాగాహారం ముందు: (48 ÷ 12) × 3 = 4 × 3 = 12.\nభాగం 2 (1² నుండి 10² వరకు మొత్తం):\nn(n+1)(2n+1)/6 లో n = 10 రాయగా = (10 × 11 × 21) / 6 = 385.'
    }
  ],

  /* --------------------------------------------------------------------------
     8. DIFFERENT TYPES OF PROBLEMS (వివిధ రకాల ప్రశ్నల మోడల్స్ — 10 Exam Models)
     -------------------------------------------------------------------------- */
  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Missing Digits in Divisibility by 72, 88, or 99',
      nameTe: '72, 88 లేదా 99 చే భాజనీయత ఆధారంగా లోపించిన అంకెలను (x, y) కనుగొనుట',
      patternEn: 'A 7-to-9 digit number like 78x3945y2 is divisible by 72 or 88; find (3x + 2y).',
      patternTe: '78x3945y2 అనే సంఖ్య 72 లేదా 88 చే భాగించబడితే (3x + 2y) విలువ ఎంత?',
      approachEn: 'Split 72 = 8 × 9 or 88 = 8 × 11. Find y from the last 3 digits using Rule of 8, then find x using Rule of 9 or 11.',
      approachTe: 'చివరి 3 అంకెలపై 8 చే భాజనీయత సూత్రం వాడి y విలువను, ఆపై 9 లేదా 11 సూత్రం వాడి x విలువను కనుగొనాలి.'
    },
    {
      typeNo: 'Type 2',
      nameEn: 'Unit Digit of Products & High Powers',
      nameTe: 'పెద్ద ఘాతాల లబ్దంలో ఒకట్ల స్థానంలోని అంకెను కనుగొనుట',
      patternEn: 'Find the unit digit of (243)⁹⁸ × (517)⁶³ + (624)⁵¹.',
      patternTe: '(243)⁹⁸ × (517)⁶³ + (624)⁵¹ లో ఒకట్ల స్థానంలోని అంకె ఎంత?',
      approachEn: 'Keep only the last digit of each base, divide powers of (2,3,7,8) by 4, and use Odd/Even rule for 4 and 9.',
      approachTe: 'భూమిలో చివరి అంకెను మాత్రమే తీసుకుని, ఘాతాన్ని 4 చే భాగించి శేషం ఆధారంగా ఒకట్ల స్థానం కనుగొనాలి.'
    },
    {
      typeNo: 'Type 3',
      nameEn: 'Double / Second Divisor Remainder Problems',
      nameTe: 'మొదటి శేషం ఆధారంగా రెండవ భాజకంతో శేషం కనుగొనుట',
      patternEn: 'When N is divided by 56, remainder is 29. What is the remainder when 2N or N² is divided by 8?',
      patternTe: 'ఒక సంఖ్య N ను 56 చే భాగిస్తే శేషం 29. అయిన 2N లేదా N² ను 8 చే భాగిస్తే శేషం ఎంత?',
      approachEn: 'Treat the first remainder R₁ = 29 as the number N itself! Calculate 2(29) = 58 or 29², and divide by 8.',
      approachTe: 'మొదటి శేషం (29) నే అసలు సంఖ్య N గా తీసుకుని, ప్రశ్నలో అడిగిన 2N లేదా N² చేసి 8 చే భాగించండి!'
    },
    {
      typeNo: 'Type 4',
      nameEn: 'Power Remainder Theorem ((x ± 1)ⁿ ÷ x)',
      nameTe: 'ఘాత శేష సిద్ధాంతం ((x ± 1)ⁿ ÷ x)',
      patternEn: 'Find the remainder when (19³⁵ + 5) is divided by 20.',
      patternTe: '(19³⁵ + 5) ను 20 చే భాగిస్తే వచ్చే శేషం ఎంత?',
      approachEn: 'Replace 19 with -1 (since 19 = 20 - 1): (-1)³⁵ + 5 = -1 + 5 = 4.',
      approachTe: '19 ని 20 చే భాగిస్తే రుణ శేషం -1 వస్తుంది. కాబట్టి (-1)³⁵ + 5 = -1 + 5 = 4.'
    },
    {
      typeNo: 'Type 5',
      nameEn: 'Counting Total, Even, Odd & Prime Factors',
      nameTe: 'మొత్తం కారణాంకాలు, సరి/బేసి కారణాంకాల సంఖ్య కనుగొనుట',
      patternEn: 'Find the number of even factors and sum of all factors of 720.',
      patternTe: '720 యొక్క సరి కారణాంకాల సంఖ్య మరియు కారణాంకాల మొత్తం ఎంత?',
      approachEn: 'Write prime factorization N = 2ᵖ·3ᵍ·5ʳ and apply (p+1)(q+1)(r+1) for total, p(q+1)(r+1) for even.',
      approachTe: 'సంఖ్యను ప్రధాన కారణాంకాల లబ్దంగా రాసి (p+1)(q+1)(r+1) సూత్రం వాడండి.'
    },
    {
      typeNo: 'Type 6',
      nameEn: 'Trailing Zeros in Factorials & Products',
      nameTe: 'ఫ్యాక్టోరియల్ (n!) చివరలో వచ్చే సున్నాల సంఖ్య',
      patternEn: 'Find the number of zeros at the end of 250!.',
      patternTe: '250! లబ్దం చివరలో ఎన్ని సున్నాలు వస్తాయి?',
      approachEn: 'Successively divide 250 by 5: 50 + 10 + 2 = 62 zeros.',
      approachTe: '250 ని వరుసగా 5 చే భాగిస్తూ భాగఫలాలను కూడండి: 50 + 10 + 2 = 62 సున్నాలు.'
    },
    {
      typeNo: 'Type 7',
      nameEn: 'Recurring Decimals (Bar Numbers) to Fractions & Addition',
      nameTe: 'ఆవర్తత దశాంశాలను (Bar ఉన్న సంఖ్యలు) భిన్నాలుగా మార్చుట',
      patternEn: 'Convert 0.347̄ (bar on 47) to a fraction, or add 0.63̄ + 0.37̄.',
      patternTe: '0.347̄ ను భిన్నంగా మార్చండి, లేదా 0.63̄ + 0.37̄ విలువ కనుగొనండి.',
      approachEn: 'Use 9s for repeating digits and 0s for non-repeating decimal digits: (347 - 3)/990 = 344/990.',
      approachTe: 'బార్ కింద ఉన్న అంకెలకు 9లు, బార్ ముందు ఉన్న అంకెలకు 0లు హారంలో రాయండి.'
    },
    {
      typeNo: 'Type 8',
      nameEn: 'VBODMAS & Algebraic Cube/Square Simplification',
      nameTe: 'VBODMAS మరియు బీజగణిత సూక్ష్మీకరణలు',
      patternEn: 'Evaluate (8.7³ - 5.7³) / (8.7² + 8.7×5.7 + 5.7²).',
      patternTe: '(8.7³ - 5.7³) / (8.7² + 8.7×5.7 + 5.7²) విలువ ఎంత?',
      approachEn: 'Recognize (a³ - b³)/(a² + ab + b²) = a - b = 8.7 - 5.7 = 3 in 2 seconds.',
      approachTe: '(a³ - b³)/(a² + ab + b²) = a - b సూత్రం ద్వారా నేరుగా 8.7 - 5.7 = 3 అని రాయండి.'
    },
    {
      typeNo: 'Type 9',
      nameEn: 'Telescoping Fraction Series & Sum of Series',
      nameTe: 'భిన్నాల శ్రేణులు మరియు సహజ సంఖ్యల వర్గాల/ఘనాల మొత్తం',
      patternEn: 'Find 1/(3×5) + 1/(5×7) + 1/(7×9) + ... + 1/(23×25).',
      patternTe: '1/(3×5) + 1/(5×7) + ... + 1/(23×25) విలువ ఎంత?',
      approachEn: 'Use (1/Diff) × (1/First - 1/Last) = (1/2) × (1/3 - 1/25) = (1/2) × (22/75) = 11/75.',
      approachTe: '(1/భేదం) × (1/మొదటి - 1/చివరి) = (1/2) × (1/3 - 1/25) = 11/75.'
    },
    {
      typeNo: 'Type 10',
      nameEn: 'Least Number Added or Subtracted to Make Divisible',
      nameTe: 'నిశ్శేషంగా భాగించబడటానికి కలపాల్సిన లేదా తీసివేయాల్సిన కనిష్ట సంఖ్య',
      patternEn: 'What least number must be added to 1056 so that the sum is completely divisible by 23?',
      patternTe: '1056 కు ఏ కనిష్ట సంఖ్యను కలిపితే వచ్చే మొత్తం 23 చే నిశ్శేషంగా భాగించబడుతుంది?',
      approachEn: 'Divide 1056 by 23 → Remainder R = 21. Number to subtract = R (21); Number to ADD = (Divisor - R) = 23 - 21 = 2!',
      approachTe: '1056 ను 23 చే భాగించగా శేషం R = 21. తీసివేయాల్సిన సంఖ్య = R (21); కలపాల్సిన సంఖ్య = (భాజకం - శేషం) = 23 - 21 = 2!'
    }
  ],

  /* --------------------------------------------------------------------------
     9. SHORTCUTS AND TRICKS (షార్ట్‌కట్స్ మరియు సులభమైన ట్రిక్స్)
     -------------------------------------------------------------------------- */
  shortcutEn: `⚡ 6 Golden 5-Second Shortcuts for Number System:
1. **Treat First Remainder as the Number (N = R₁)**: When a question says "A number N divided by 72 gives remainder 31; what is the remainder when N² + 3N is divided by 9?", simply put N = 31! Even better, 31 ÷ 9 gives remainder 4, so put N = 4 → (4² + 3×4) = 28 ÷ 9 → Remainder = 1!
2. **Digital Sum / Casting Out 9s**: To check divisibility by 9, strike out any digit 9 or pairs of digits adding to 9 (like 5+4, 7+2, 6+3). Only add the remaining digits!
3. **Repeating Digit Divisibility**:
   • Any 6-digit number of the form **abcabc** (e.g., 374374) is ALWAYS divisible by **7, 11, 13, and 1001**.
   • Any 6-digit number of the form **ababab** (e.g., 484848) is ALWAYS divisible by **3, 7, 13, 37, and 10101**.
   • Any 4-digit number of the form **abab** (e.g., 7373) is ALWAYS divisible by **101**.
4. **Difference of a 2-Digit Number and its Reversed Digits**:
   • **(ab - ba) = 9 × |a - b|** (Always divisible by **9**, and quotient is difference of digits!).
   • **(ab + ba) = 11 × (a + b)** (Always divisible by **11**, and quotient is sum of digits!).
5. **Unit Digit Zero Killer**: In any long multiplication of powers, if you spot a base ending in **5** AND any base ending in an **even digit (2, 4, 6, 8)**, stop calculating immediately — the unit digit is **0**!
6. **Recurring Decimal Instant 9s & 0s**: Count digits under bar → write that many 9s. Count digits between decimal point and bar → write that many 0s. Example: $0.16\bar{6} = (16 - 1)/90 = 15/90 = 1/6$.`,

  shortcutTe: `⚡ సంఖ్యా వ్యవస్థలో 5 సెకన్లలో జవాబు ఇచ్చే 6 గోల్డెన్ షార్ట్‌కట్ ట్రిక్స్:
1. **మొదటి శేషాన్నే సంఖ్యగా తీసుకోండి (N = R₁)**: "ఒక సంఖ్య N ను 72 చే భాగిస్తే శేషం 31; అయిన N² + 3N ను 9 చే భాగిస్తే శేషం ఎంత?" అని అడిగితే N = 31 అనుకోండి. ఇంకా సులభంగా 31 ÷ 9 శేషం 4 కాబట్టి N = 4 రాయండి → (4² + 3×4) = 28 ÷ 9 → శేషం = 1!
2. **9 లను కొట్టివేసే పద్ధతి (Casting out 9s)**: 9 చే భాజనీయత చూసేటప్పుడు అన్ని అంకెలను కూడకుండా, మొత్తం 9 అయ్యే జతలను (5+4, 7+2, 6+3) కొట్టివేసి మిగిలిన వాటిని మాత్రమే కూడండి!
3. **పునరావృత అంకెల భాజనీయత**:
   • **abcabc** రూపంలో ఉండే 6-అంకెల సంఖ్య (ఉదా: 374374) ఎల్లప్పుడూ **7, 11, 13 మరియు 1001** చే భాగించబడుతుంది.
   • **ababab** రూపంలో ఉండే సంఖ్య (ఉదా: 484848) ఎల్లప్పుడూ **3, 7, 13, 37 మరియు 10101** చే భాగించబడుతుంది.
   • **abab** రూపంలో ఉండే 4-అంకెల సంఖ్య (ఉదా: 7373) ఎల్లప్పుడూ **101** చే భాగించబడుతుంది.
4. **రెండంకెల సంఖ్య మరియు తారుమారు చేసిన సంఖ్య నియమం**:
   • రెండంకెల సంఖ్యకు, దాని అంకెలను తారుమారు చేయగా వచ్చే సంఖ్యకు మధ్య **భేదం = 9 × (అంకెల భేదం)** — ఎల్లప్పుడూ **9** చే భాగించబడుతుంది!
   • ఆ రెండు సంఖ్యల **మొత్తం = 11 × (అంకెల మొత్తం)** — ఎల్లప్పుడూ **11** చే భాగించబడుతుంది!
5. **ఒకట్ల స్థానం సున్నా (0) ట్రిక్**: గుణకారంలో ఒకట్ల స్థానంలో **5** ఉండి, మరొక సంఖ్య చివర **సరి అంకె (2, 4, 6, 8)** కనిపిస్తే లెక్క చేయాల్సిన పనిలేదు — ఒకట్ల స్థానం నేరుగా **0**!
6. **ఆవర్తత దశాంశాల 9లు - 0ల ట్రిక్**: బార్ కింద ఎన్ని అంకెలు ఉంటే అన్ని 9లు, దశాంశ బిందువుకు బార్‌కు మధ్య ఎన్ని అంకెలు ఉంటే అన్ని 0లు హారంలో రాయాలి ($0.1\bar{6} = (16-1)/90 = 15/90 = 1/6$).`,

  /* --------------------------------------------------------------------------
     10. RRB EXAM-LEVEL EXAMPLES (ఆర్‌ఆర్‌బి పరీక్ష స్థాయి సాధించిన ఉదాహరణలు)
     -------------------------------------------------------------------------- */
  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Official Shift Model',
      qEn: 'When a positive integer N is divided by 45, the remainder is 32. What will be the remainder when (3N² + 2N + 5) is divided by 9?',
      qTe: 'ఒక ధన పూర్ణ సంఖ్య N ను 45 చే భాగించినప్పుడు శేషం 32 వస్తుంది. అయిన (3N² + 2N + 5) ను 9 చే భాగించినప్పుడు వచ్చే శేషం ఎంత?',
      solEn: 'Step 1: Since first divisor 45 is a multiple of second divisor 9 (45 = 9 × 5), we can replace N with its remainder mod 9.\nStep 2: Divide 32 by 9 → 32 = 9 × 3 + 5, so N ≡ 5 (mod 9).\nStep 3: Substitute N = 5 into (3N² + 2N + 5):\n= 3(5)² + 2(5) + 5 = 3(25) + 10 + 5 = 75 + 15 = 90.\nStep 4: Divide 90 by 9 → 90 ÷ 9 = 10 with Remainder = 0!',
      solTe: 'సోపానం 1: మొదటి భాజకం 45 అనేది 9 యొక్క గుణిజం కాబట్టి, మొదటి శేషం 32 ను 9 చే భాగించగా వచ్చే శేషాన్ని N గా తీసుకోవచ్చు.\nసోపానం 2: 32 ÷ 9 → శేషం = 5. కాబట్టి N = 5 అని ప్రతిక్షేపించండి.\nసోపానం 3: 3(5)² + 2(5) + 5 = 75 + 10 + 5 = 90.\nసోపానం 4: 90 ని 9 చే భాగిస్తే నిశ్శేషంగా భాగించబడుతుంది కాబట్టి శేషం (Remainder) = 0!',
      shortcutTip: 'Shortcut: Notice 3N² is 3 × (5)² = 75 ≡ 3 (mod 9), and 2N + 5 = 15 ≡ 6 (mod 9) → 3 + 6 = 9 ≡ 0!'
    },
    {
      examTag: 'RRB NTPC CBT-2 • High-Level Divisibility',
      qEn: 'If the 9-digit number 389x6378y is divisible by 72, then the value of √(6x + 7y) will be:',
      qTe: '389x6378y అనే 9-అంకెల సంఖ్య 72 చే నిశ్శేషంగా భాగించబడితే, √(6x + 7y) విలువ ఎంత?',
      solEn: 'Step 1: 72 = 8 × 9. By Rule of 8, the last 3 digits (78y) must be divisible by 8.\n784 ÷ 8 = 98 (exact!). So y = 4.\nStep 2: By Rule of 9, sum of digits must be divisible by 9:\n3 + 8 + 9 + x + 6 + 3 + 7 + 8 + 4 = 48 + x.\nNearest multiple of 9 after 48 is 54 → 48 + x = 54 → x = 6.\nStep 3: Substitute x = 6 and y = 4 into √(6x + 7y):\n= √(6×6 + 7×4) = √(36 + 28) = √64 = 8.',
      solTe: 'సోపానం 1: 72 = 8 × 9. చివరి 3 అంకెలు (78y) 8 చే భాగించబడాలంటే 784 ÷ 8 = 98 కావున y = 4.\nసోపానం 2: 9 చే భాజనీయతకు అంకెల మొత్తం = 3+8+9+x+6+3+7+8+4 = 48 + x = 54 → x = 6.\nసోపానం 3: √(6x + 7y) = √(6×6 + 7×4) = √(36 + 28) = √64 = 8.',
      shortcutTip: 'Cast out 9s in 3,8,9,x,6,3,7,8,4: cancel 9, cancel (6+3=9), remaining = 3+8+7+8+4 = 30 ≡ 3 → 3 + x = 9 → x = 6 in 3 seconds!'
    },
    {
      examTag: 'RRB Group-D • Factor & Divisibility Model',
      qEn: 'Determine whether (4⁶¹ + 4⁶² + 4⁶³ + 4⁶⁴) is divisible by: (A) 3  (B) 10  (C) 11  (D) 13',
      qTe: '(4⁶¹ + 4⁶² + 4⁶³ + 4⁶⁴) అనే సమాసం క్రింది వాటిలో దేనిచే నిశ్శేషంగా భాగించబడుతుంది? (A) 3  (B) 10  (C) 11  (D) 13',
      solEn: 'Step 1: Take the smallest power 4⁶¹ common from all terms:\n= 4⁶¹ × (4⁰ + 4¹ + 4² + 4³)\n= 4⁶¹ × (1 + 4 + 16 + 64) = 4⁶¹ × 85.\nStep 2: Check factors of 4⁶¹ × 85:\nSince 85 = 5 × 17 and 4⁶¹ contains factors of 2 (4⁶¹ = 2 × 2 × 4⁶⁰):\n4⁶¹ × 85 = 4⁶⁰ × (4 × 85) = 4⁶⁰ × 340.\nSince 340 ends in 0, it is completely divisible by 10 (Option B)!',
      solTe: 'సోపానం 1: అన్ని పదాల నుండి కనిష్ట ఘాతం 4⁶¹ ని కామన్ తీయండి:\n= 4⁶¹ × (1 + 4 + 16 + 64) = 4⁶¹ × 85.\nసోపానం 2: ఇక్కడ 85 లో 5 కారణాంకంగా ఉంది మరియు 4⁶¹ లో 2 కారణాంకంగా ఉంది (4 × 85 = 340).\nకాబట్టి ఈ సమాసం ఖచ్చితంగా 10 చే నిశ్శేషంగా భాగించబడుతుంది (ఆప్షన్ B)!',
      shortcutTip: 'Always factor out the smallest power in expressions like aⁿ + aⁿ⁺¹ + aⁿ⁺²!'
    },
    {
      examTag: 'RRB NTPC Undergraduate • Recurring Decimals',
      qEn: 'Find the value of: 0.47̄ + 0.503̄ - 0.39̄ × 0.8̄ (where bars are on 7, 03, 9, and 8 respectively).',
      qTe: '0.47̄ + 0.503̄ - 0.39̄ × 0.8̄ విలువను కనుగొనండి.',
      solEn: 'Step 1: Convert each recurring decimal to a fraction:\n• 0.47̄ = (47 - 4)/90 = 43/90\n• 0.503̄ = (503 - 5)/990 = 498/990\n• 0.39̄ × 0.8̄ = [(39 - 3)/90] × (8/9) = (36/90) × (8/9) = (4/10) × (8/9) = 32/90.\nStep 2: Combine (43/90 - 32/90) + 498/990:\n= 11/90 + 498/990 = 121/990 + 498/990 = 619/990.\nStep 3: Convert 619/990 back to recurring decimal:\nSince 619 = 625 - 6 → 619/990 = 0.625̄ (bar on 25)!',
      solTe: 'సోపానం 1: ప్రతి ఆవర్తత దశాంశాన్ని భిన్నంగా మార్చండి:\n• 0.47̄ = 43/90  |  0.503̄ = 498/990  |  0.39̄ × 0.8̄ = (36/90) × (8/9) = 32/90.\nసోపానం 2: (43/90 - 32/90) + 498/990 = 11/90 + 498/990 = (121 + 498)/990 = 619/990.\nసోపానం 3: 619/990 = (625 - 6)/990 = 0.625̄ (25 మీద బార్).',
      shortcutTip: 'Combine fractions with denominator 90 first before taking LCD 990!'
    }
  ],

  /* --------------------------------------------------------------------------
     13. QUICK REVISION (క్విక్ రివిజన్ — 5-Minute Pre-Exam Cheat Sheet)
     -------------------------------------------------------------------------- */
  quickRevision: [
    {
      pointEn: '1 is neither prime nor composite. 2 is the smallest and only even prime. 4 is the smallest composite number, and 9 is the smallest odd composite number.',
      pointTe: '1 ప్రధాన సంఖ్య కాదు, సంయుక్త సంఖ్య కాదు. 2 ఏకైక సరి ప్రధాన సంఖ్య. 4 అతి చిన్న సంయుక్త సంఖ్య, 9 అతి చిన్న బేసి సంయుక్త సంఖ్య.'
    },
    {
      pointEn: 'Prime Counts: 1–50 has 15 primes | 51–100 has 10 primes | 1–100 has 25 primes | Twin prime pairs (1–100) = 8.',
      pointTe: 'ప్రధాన సంఖ్యల లెక్క: 1–50 మధ్య 15 | 51–100 మధ్య 10 | 1–100 మధ్య 25 | కవల ప్రధాన సంఖ్యల జతలు (1–100) = 8.'
    },
    {
      pointEn: 'π (Pi) is an Irrational Number, whereas 22/7 is a Rational Number. Zero (0) is an Even Integer and a Rational Number (0/1).',
      pointTe: 'π (పై) కరణీయ సంఖ్య, కానీ 22/7 అకరణీయ సంఖ్య. సున్నా (0) సరి పూర్ణ సంఖ్య మరియు అకరణీయ సంఖ్య.'
    },
    {
      pointEn: 'Combined Divisibility: 72 = 8 × 9 (check last 3 digits for 8, digit sum for 9) | 88 = 8 × 11 | 99 = 9 × 11. Any 6-digit number abcabc is divisible by 7, 11, 13, and 1001.',
      pointTe: 'సంయుక్త భాజనీయత: 72 = 8 × 9 | 88 = 8 × 11 | 99 = 9 × 11. abcabc రూపంలోని సంఖ్య 7, 11, 13 మరియు 1001 చే భాగించబడుతుంది.'
    },
    {
      pointEn: 'Unit Digit Rules: (0, 1, 5, 6)ⁿ → Same digit | 4^Odd = 4, 4^Even = 6 | 9^Odd = 9, 9^Even = 1 | For (2, 3, 7, 8)ⁿ divide power n by 4 (if remainder is 0, use power 4!).',
      pointTe: 'ఒకట్ల స్థానం: (0,1,5,6)ⁿ → మారవు | 4^బేసి=4, 4^సరి=6 | 9^బేసి=9, 9^సరి=1 | (2,3,7,8)ⁿ కు ఘాతాన్ని 4 చే భాగించాలి (శేషం 0 వస్తే ఘాతం 4 తీసుకోవాలి!).'
    },
    {
      pointEn: 'Factors of N = 2ᵖ·aᵍ·bʳ: Total = (p+1)(q+1)(r+1) | Odd = (q+1)(r+1) | Even = p(q+1)(r+1). Trailing zeros in 100! = 24, in 1000! = 249.',
      pointTe: 'కారణాంకాలు: మొత్తం = (p+1)(q+1)(r+1) | బేసి = (q+1)(r+1) | సరి = p(q+1)(r+1). 100! చివర సున్నాలు = 24.'
    }
  ]
};

/* ============================================================================
   CHAPTER 2: LCM AND HCF — COMPLETE CHAPTER (క.సా.గు మరియు గ.సా.భా — పూర్తి పాఠ్యపుస్తక అధ్యాయం)
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + 12-Slide Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-lcm-hcf'] = {
  id: 'math-lcm-hcf',
  chapterNo: 2,
  titleEn: 'Chapter 2: LCM and HCF — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 2: క.సా.గు (LCM) మరియు గ.సా.భా (HCF) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (2–3 Questions in Every Shift)',
  readTime: '35 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-lcm-hcf',

  introEn: `Welcome to Chapter 2: **LCM (Least Common Multiple) and HCF (Highest Common Factor)**. In RRB NTPC and Group-D exams, 2 to 3 questions are asked in every paper from LCM & HCF—ranging from basic fraction LCM/HCF and Co-Prime Ratio models to Remainder problems and real-life applications like railway bells tolling together or traffic lights changing simultaneously. This textbook chapter covers all **8 syllabus sub-topics** in full detail with step-by-step Telugu and English explanations.`,

  introTe: `**అధ్యాయం 2: క.సా.గు (LCM) మరియు గ.సా.భా (HCF)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి ఎన్‌టిపిసి మరియు గ్రూప్-డి పరీక్షలలో ప్రతి షిఫ్ట్‌లో ఈ అధ్యాయం నుండి **2 నుండి 3 ప్రశ్నలు** తప్పనిసరిగా వస్తాయి. ఇందులో గుణిజాలు, కారణాంకాలు, భిన్నాల క.సా.గు/గ.సా.భా, పరస్పర ప్రధాన సంఖ్యల నిష్పత్తి, శేషాలతో కూడిన క.సా.గు/గ.సా.భా లెక్కలు మరియు గంటలు/ట్రాఫిక్ లైట్ల అనువర్తనాలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుంటారు.`,

  subTopics: [
    {
      code: '2.1',
      titleEn: 'Concept of Multiples, Common Multiples & LCM (కనిష్ట సామాన్య గుణిజం)',
      titleTe: 'గుణిజాలు, సామాన్య గుణిజాలు మరియు క.సా.గు (LCM) భావన',
      conceptEn: `• **Multiple (గుణిజం)**: The multiples of a number are obtained by multiplying it by 1, 2, 3, ... (e.g., multiples of 6 are 6, 12, 18, 24, 30, 36...). Multiples of a number are infinite and are always greater than or equal to the number itself.
• **Least Common Multiple (LCM — కనిష్ట సామాన్య గుణిజం)**: The **smallest positive integer** that is exactly divisible by each of the given numbers.
  - Example: Multiples of 12 = 12, 24, **36**, 48, 60, **72**...
  - Multiples of 18 = 18, **36**, 54, **72**...
  - Common multiples = 36, 72, 108... → The smallest common multiple is **36**, so **LCM(12, 18) = 36**.`,
      conceptTe: `• **గుణిజం (Multiple)**: ఒక సంఖ్యను 1, 2, 3... లతో గుణించగా వచ్చే లబ్దాలను ఆ సంఖ్య యొక్క గుణిజాలు అంటారు (ఉదా: 12 గుణిజాలు = 12, 24, 36, 48...).
• **కనిష్ట సామాన్య గుణిజం (LCM)**: ఇచ్చిన సంఖ్యలన్నింటి చేతా నిశ్శేషంగా భాగించబడే **అతి చిన్న ధన పూర్ణ సంఖ్యను** క.సా.గు అంటారు. ఉదా: 12 మరియు 18 చే భాగించబడే అతి చిన్న సంఖ్య **36**.`,
      ruleEn: 'LCM of given numbers is always greater than or equal to the largest given number. If the largest number is divisible by all other numbers, that largest number itself is the LCM!',
      ruleTe: 'ఇచ్చిన సంఖ్యలలో అతి పెద్ద సంఖ్య మిగిలిన అన్ని చిన్న సంఖ్యలచే భాగించబడితే, ఆ పెద్ద సంఖ్యే నేరుగా క.సా.గు (LCM) అవుతుంది! (ఉదా: 4, 8, 16, 32 ల క.సా.గు = 32).',
      formula: 'By Prime Factorization: LCM = Product of HIGHEST powers of all prime factors involved.',
      exampleQEn: 'Find the LCM of 24, 36, and 40 using prime factorization.',
      exampleQTe: 'ప్రధాన కారణాంకాల పద్ధతిలో 24, 36 మరియు 40 ల క.సా.గు (LCM) కనుగొనండి.',
      exampleSolEn: 'Step 1: Write prime factorization:\n24 = 2³ × 3¹  |  36 = 2² × 3²  |  40 = 2³ × 5¹.\nStep 2: Take highest power of each prime (2³, 3², 5¹):\nLCM = 8 × 9 × 5 = 360.',
      exampleSolTe: 'సోపానం 1: ప్రధాన కారణాంకాలు: 24 = 2³ × 3¹, 36 = 2² × 3², 40 = 2³ × 5¹.\nసోపానం 2: గరిష్ట ఘాతాల లబ్దం = 2³ × 3² × 5¹ = 8 × 9 × 5 = 360.'
    },
    {
      code: '2.2',
      titleEn: 'Concept of Factors, Common Divisors & HCF / GCD (గరిష్ట సామాన్య భాజకం)',
      titleTe: 'కారణాంకాలు, సామాన్య భాజకాలు మరియు గ.సా.భా (HCF / GCD) భావన',
      conceptEn: `• **Factor / Divisor (కారణాంకం / భాజకం)**: A number that divides a given number exactly without leaving any remainder. Factors of a number are finite and are always less than or equal to the number.
• **Highest Common Factor (HCF / GCD — గరిష్ట సామాన్య భాజకం)**: The **greatest number** that divides each of the given numbers completely without remainder.
  - Example: Factors of 24 = 1, 2, 3, 4, 6, 8, **12**, 24.
  - Factors of 36 = 1, 2, 3, 4, 6, 9, **12**, 18, 36.
  - Greatest common factor = **12**, so **HCF(24, 36) = 12**.`,
      conceptTe: `• **గరిష్ట సామాన్య భాజకం (HCF / GCD)**: ఇచ్చిన సంఖ్యలన్నింటినీ నిశ్శేషంగా భాగించగలిగే **అతి పెద్ద సంఖ్యను** గ.సా.భా అంటారు. ఉదా: 24 మరియు 36 రెండింటినీ భాగించే అతి పెద్ద సంఖ్య **12**.`,
      ruleEn: 'Difference Trick for HCF: The HCF of two or more numbers can NEVER be greater than the smallest difference between any two of the numbers! It is always equal to that difference or a factor of that difference.',
      ruleTe: 'గ.సా.భా భేదం ట్రిక్: ఇచ్చిన సంఖ్యలలో దగ్గరగా ఉన్న రెండు సంఖ్యల మధ్య భేదాన్ని కనుగొనండి. గ.సా.భా ఆ భేదం అయినా అవుతుంది లేదా ఆ భేదం యొక్క కారణాంకం అయినా అవుతుంది!',
      formula: 'By Prime Factorization: HCF = Product of LOWEST powers of COMMON prime factors only.',
      exampleQEn: 'Find the HCF of 136, 170, and 255 using the Difference Shortcut.',
      exampleQTe: 'భేదం షార్ట్‌కట్ పద్ధతి ద్వారా 136, 170 మరియు 255 ల గ.సా.భా (HCF) కనుగొనండి.',
      exampleSolEn: 'Step 1: Smallest difference is between 136 and 170 = 170 - 136 = 34.\nStep 2: Check if 34 divides 255: No (255 is odd).\nStep 3: Factors of 34 are 17 × 2. Check 17:\n136 = 17×8, 170 = 17×10, 255 = 17×15. All are divisible by 17 → HCF = 17!',
      exampleSolTe: 'సోపానం 1: 136 మరియు 170 ల మధ్య భేదం = 170 - 136 = 34.\nసోపానం 2: 255 బేసి సంఖ్య కాబట్టి 34 చే భాగించబడదు. 34 యొక్క కారణాంకాలు = 17 × 2.\nసోపానం 3: 17 చే 136, 170, 255 మూడూ భాగించబడతాయి కాబట్టి గ.సా.భా = 17!'
    },
    {
      code: '2.3',
      titleEn: 'Product of Two Numbers & Co-Prime Ratio Model (A × B = LCM × HCF)',
      titleTe: 'రెండు సంఖ్యల లబ్దం (A × B = LCM × HCF) & పరస్పర ప్రధాన నిష్పత్తి మోడల్',
      conceptEn: `For any two positive numbers **A** and **B** whose HCF is **H** and LCM is **L**:
1. **Fundamental Formula**:
   $$\text{First Number (A)} \times \text{Second Number (B)} = \text{LCM} \times \text{HCF}$$
2. **Co-Prime Ratio Representation (Most Important Tool in HCF-LCM)**:
   • If $\text{HCF}(A, B) = H$, then we can ALWAYS write:
     $$A = H \cdot x \quad \text{and} \quad B = H \cdot y$$
     where **$x$ and $y$ are CO-PRIME numbers** ($\text{HCF}(x, y) = 1$, and $x : y$ is the simplified ratio of the two numbers).
   • Then:
     $$\text{LCM} = H \times x \times y \quad \text{and} \quad A + B = H(x + y)$$
   • **Divisibility Law**: **HCF always divides LCM completely!** ($\frac{\text{LCM}}{\text{HCF}} = x \times y$).`,
      conceptTe: `ఏవైనా రెండు సంఖ్యలు **A** మరియు **B** ల క.సా.గు = **L**, గ.సా.భా = **H** అయినప్పుడు:
1. **ప్రాథమిక సూత్రం**:
   $$\text{మొదటి సంఖ్య (A)} \times \text{రెండవ సంఖ్య (B)} = \text{క.సా.గు (LCM)} \times \text{గ.సా.భా (HCF)}$$
2. **నిష్పత్తి సూత్రం ($A : B = x : y$)**:
   • రెండు సంఖ్యల నిష్పత్తి $x : y$ (ఇక్కడ $x, y$ పరస్పర ప్రధాన సంఖ్యలు) మరియు గ.సా.భా $H$ అయితే:
     - **మొదటి సంఖ్య $A = H \times x$**
     - **రెండవ సంఖ్య $B = H \times y$**
     - **క.సా.గు ($\text{LCM}$) = $H \times x \times y$**
     - **సంఖ్యల మొత్తం ($A + B$) = $H(x + y)$**
   • **ముఖ్య నియమం**: ఏ రెండు సంఖ్యల క.సా.గు (LCM) అయినా వాటి గ.సా.భా (HCF) చేత ఎల్లప్పుడూ నిశ్శేషంగా భాగించబడుతుంది!`,
      ruleEn: 'Whenever the sum (A + B) or LCM is given along with HCF, write A = Hx and B = Hy where HCF(x, y) = 1. Count only co-prime pairs (x, y)!',
      ruleTe: 'సంఖ్యల మొత్తం లేదా క.సా.గు తో పాటు గ.సా.భా ఇచ్చినప్పుడు, ఆ సంఖ్యలను Hx, Hy గా తీసుకుని కేవలం పరస్పర ప్రధాన జతలను (Co-prime pairs) మాత్రమే తీసుకోవాలి.',
      formula: 'A × B = LCM × HCF | A = Hx, B = Hy | LCM = H·x·y | x·y = LCM / HCF',
      exampleQEn: 'The sum of two numbers is 216 and their HCF is 27. How many such pairs of numbers are possible?',
      exampleQTe: 'రెండు సంఖ్యల మొత్తం 216 మరియు వాటి గ.సా.భా 27. అటువంటి సంఖ్యల జతలు (Pairs) ఎన్ని సాధ్యమవుతాయి?',
      exampleSolEn: 'Step 1: Let the numbers be 27x and 27y, where x and y are co-prime.\nStep 2: 27x + 27y = 216 → 27(x + y) = 216 → x + y = 216 / 27 = 8.\nStep 3: Find co-prime pairs (x, y) that add up to 8:\n• (1, 7) → Co-prime ✓ (Numbers: 27, 189)\n• (2, 6) → Not co-prime ✕\n• (3, 5) → Co-prime ✓ (Numbers: 81, 135)\n• (4, 4) → Not co-prime ✕\nTherefore, exactly 2 pairs are possible!',
      exampleSolTe: 'సోపానం 1: ఆ సంఖ్యలు 27x మరియు 27y అనుకుందాం.\nసోపానం 2: 27(x + y) = 216 → x + y = 216 / 27 = 8.\nసోపానం 3: మొత్తం 8 అయ్యే పరస్పర ప్రధాన జతలు (Co-prime pairs): (1, 7) మరియు (3, 5) మాత్రమే. (2,6 మరియు 4,4 పరస్పర ప్రధాన సంఖ్యలు కావు).\nకాబట్టి 2 జతలు మాత్రమే సాధ్యమవుతాయి!'
    },
    {
      code: '2.4',
      titleEn: 'LCM and HCF of Fractions & Decimals',
      titleTe: 'భిన్నాలు మరియు దశాంశ సంఖ్యల క.సా.గు & గ.సా.భా',
      conceptEn: `1. **For Fractions ($\frac{a}{b}, \frac{c}{d}, \frac{e}{f}$ in simplest form)**:
   • $\text{LCM of Fractions} = \frac{\text{LCM of Numerators }(a, c, e)}{\text{HCF of Denominators }(b, d, f)}$
   • $\text{HCF of Fractions} = \frac{\text{HCF of Numerators }(a, c, e)}{\text{LCM of Denominators }(b, d, f)}$
   *(Memory Tip: Whatever is asked—LCM or HCF—perform that operation on the **Numerators**, and the opposite operation on the **Denominators**!)*
2. **For Decimal Numbers**:
   • Always make the number of decimal places **equal** in all given numbers by adding trailing zeros (e.g., for $1.2, 0.24, 6 \rightarrow 1.20, 0.24, 6.00$), find LCM/HCF of the integers ($120, 24, 600$), and place the decimal back!`,
      conceptTe: `1. **భిన్నాల క.సా.గు మరియు గ.సా.భా సూత్రాలు**:
   • **భిన్నాల క.సా.గు (LCM)** = $\frac{\text{లవాల క.సా.గు (LCM of Numerators)}}{\text{హారాల గ.సా.భా (HCF of Denominators)}}$
   • **భిన్నాల గ.సా.భా (HCF)** = $\frac{\text{లవాల గ.సా.భా (HCF of Numerators)}}{\text{హారాల క.సా.గు (LCM of Denominators)}}$
   *(గుర్తుంచుకునే కోడ్: క.సా.గు అడిగితే లవాలకు క.సా.గు చేయాలి; గ.సా.భా అడిగితే లవాలకు గ.సా.భా చేయాలి!)*
2. **దశాంశ సంఖ్యలకు**: ముందుగా అన్ని సంఖ్యలలో దశాంశ స్థానాల సంఖ్యను సున్నాలు చేర్చి సమానం చేసి, పూర్ణ సంఖ్యల వలె క.సా.గు/గ.సా.భా కనుగొని తిరిగి దశాంశ బిందువు పెట్టాలి.`,
      ruleEn: 'Before applying the fraction LCM/HCF formula, ensure every fraction (or decimal converted to fraction) is reduced to its lowest/simplest form!',
      ruleTe: 'భిన్నాల సూత్రం వాడే ముందు ప్రతి భిన్నం దాని కనిష్ట రూపంలో (Simplest form) ఉందో లేదో సరిచూసుకోవాలి!',
      formula: 'LCM(Fractions) = LCM(Num) / HCF(Den) | HCF(Fractions) = HCF(Num) / LCM(Den)',
      exampleQEn: 'Find the LCM and HCF of the fractions: 2/3, 4/9, 8/15, and 10/21.',
      exampleQTe: '2/3, 4/9, 8/15 మరియు 10/21 భిన్నాల క.సా.గు (LCM) మరియు గ.సా.భా (HCF) కనుగొనండి.',
      exampleSolEn: 'Step 1 (LCM): LCM of Numerators (2, 4, 8, 10) = 40. HCF of Denominators (3, 9, 15, 21) = 3.\nSo LCM of Fractions = 40 / 3.\nStep 2 (HCF): HCF of Numerators (2, 4, 8, 10) = 2. LCM of Denominators (3, 9, 15, 21) = 315.\nSo HCF of Fractions = 2 / 315.',
      exampleSolTe: 'సోపానం 1 (క.సా.గు): లవాలు (2, 4, 8, 10) ల క.సా.గు = 40. హారాలు (3, 9, 15, 21) ల గ.సా.భా = 3 → భిన్నాల క.సా.గు = 40/3.\nసోపానం 2 (గ.సా.భా): లవాల గ.సా.భా = 2. హారాల క.సా.గు = 315 → భిన్నాల గ.సా.భా = 2/315.'
    },
    {
      code: '2.5',
      titleEn: 'LCM Remainder Models (Same Remainder vs Constant Difference)',
      titleTe: 'క.సా.గు శేషాల మోడల్స్ (ఒకే శేషం వచ్చే లెక్కలు & స్థిర భేదం లెక్కలు)',
      conceptEn: `There are 3 classic LCM Remainder models asked in RRB exams:
• **Model 1 (Exact Divisibility)**: Least number divisible by $x, y, z = \mathbf{\text{LCM}(x, y, z)}$.
• **Model 2 (Same Remainder $r$ in each case)**: Least number which when divided by $x, y, z$ leaves the **same remainder $r$** in each case:
  $$\text{Number} = \mathbf{\text{LCM}(x, y, z) + r}$$
  *(If it also must be divisible by another number $M$, take $\text{LCM}(x,y,z) \cdot k + r$ and test $k = 1, 2, 3\dots$)*
• **Model 3 (Different Remainders $a, b, c$ with Constant Difference $K$)**: Least number which when divided by $x, y, z$ leaves remainders $a, b, c$ such that $(x - a) = (y - b) = (z - c) = K$:
  $$\text{Number} = \mathbf{\text{LCM}(x, y, z) - K}$$`,
      conceptTe: `క.సా.గు (LCM) లో శేషాలకు సంబంధించిన 3 ముఖ్యమైన మోడల్స్:
• **మోడల్ 1 (నిశ్శేషంగా భాగించబడే కనిష్ట సంఖ్య)**: $x, y, z$ లచే భాగించబడే కనిష్ట సంఖ్య = **$\text{LCM}(x, y, z)$**.
• **మోడల్ 2 (ప్రతి సందర్భంలోనూ ఒకే శేషం $r$ మిగిలే కనిష్ట సంఖ్య)**: $x, y, z$ లచే భాగించినప్పుడు ప్రతిసారీ $r$ శేషం ఇచ్చే కనిష్ట సంఖ్య:
  $$\text{కావలసిన సంఖ్య} = \mathbf{\text{LCM}(x, y, z) + r}$$
• **మోడల్ 3 (వేర్వేరు శేషాలు — స్థిర భేదం $K$ ఉన్నప్పుడు)**: $x, y, z$ లచే భాగించినప్పుడు వరుసగా $a, b, c$ శేషాలు వస్తూ, $(x - a) = (y - b) = (z - c) = K$ స్థిరంగా ఉంటే:
  $$\text{కావలసిన సంఖ్య} = \mathbf{\text{LCM}(x, y, z) - K}$$`,
      ruleEn: 'Remember: For SAME remainder r, ADD r to LCM (LCM + r). For DIFFERENT remainders with constant difference K, SUBTRACT K from LCM (LCM - K)!',
      ruleTe: 'గుర్తుంచుకోండి: ఒకే శేషం r అయితే క.సా.గు కు r కలపాలి (LCM + r). వేర్వేరు శేషాలు ఇచ్చి భాజకానికి, శేషానికి భేదం K సమానంగా ఉంటే క.సా.గు నుండి K తీసివేయాలి (LCM - K)!',
      formula: 'Same Remainder r → LCM(x,y,z) + r | Constant Diff K=(x-a)=(y-b) → LCM(x,y,z) - K',
      exampleQEn: 'Find the least number which when divided by 12, 15, 20, and 54 leaves a remainder of 8 in each case.',
      exampleQTe: '12, 15, 20 మరియు 54 లచే భాగించినప్పుడు ప్రతి సందర్భంలోనూ 8 శేషం వచ్చే కనిష్ట సంఖ్య ఏది?',
      exampleSolEn: 'Step 1: Find LCM of 12, 15, 20, and 54:\nLCM(12, 15, 20) = 60. LCM(60, 54) = 540.\nStep 2: Since remainder is 8 in each case, add 8:\nRequired Number = 540 + 8 = 548.',
      exampleSolTe: 'సోపానం 1: 12, 15, 20, 54 ల క.సా.గు (LCM) = 540.\nసోపానం 2: ప్రతి సందర్భంలోనూ 8 శేషం రావాలి కాబట్టి: కావలసిన సంఖ్య = 540 + 8 = 548.'
    },
    {
      code: '2.6',
      titleEn: 'HCF Remainder Models (Greatest Number Leaving Given Remainders)',
      titleTe: 'గ.సా.భా శేషాల మోడల్స్ (ఇచ్చిన శేషాలను మిగిల్చే గరిష్ట సంఖ్య)',
      conceptEn: `When a question asks for the **"Greatest Number"** that divides given numbers:
• **Model 1 (Different Remainders $r_1, r_2, r_3$ Given)**: The greatest number that divides $x, y, z$ leaving remainders $r_1, r_2, r_3$ respectively is:
  $$\text{Required Number} = \mathbf{\text{HCF}\big((x - r_1),\ (y - r_2),\ (z - r_3)\big)}$$
• **Model 2 (Same Unknown Remainder in Each Case)**: The greatest number that divides $x, y, z$ leaving the **same remainder** (when remainder is not given) is:
  $$\text{Required Number} = \mathbf{\text{HCF}\big(|x - y|,\ |y - z|,\ |z - x|\big)}$$`,
      conceptTe: `ప్రశ్నలో **"గరిష్ట సంఖ్య (Greatest Number)"** అని అడిగినప్పుడు గ.సా.భా (HCF) కనుగొనాలి:
• **మోడల్ 1 (వేర్వేరు శేషాలు $r_1, r_2, r_3$ ఇచ్చినప్పుడు)**: $x, y, z$ లను భాగించినప్పుడు వరుసగా $r_1, r_2, r_3$ శేషాలు ఇచ్చే గరిష్ట సంఖ్య:
  $$\mathbf{\text{HCF}\big((x - r_1),\ (y - r_2),\ (z - r_3)\big)}$$
• **మోడల్ 2 (ప్రతి సందర్భంలోనూ సమాన శేషం — శేషం విలువ ఇవ్వనప్పుడు)**: $x, y, z$ లను భాగించినప్పుడు ఒకే శేషం ఇచ్చే గరిష్ట సంఖ్య:
  $$\mathbf{\text{HCF}\big(|x - y|,\ |y - z|,\ |z - x|\big)}$$`,
      ruleEn: 'Keyword Matching: "Least / Smallest number divided by..." → Use LCM. "Greatest / Largest number that divides..." → Use HCF!',
      ruleTe: 'కీ-వర్డ్ ట్రిక్: "భాగించబడే కనిష్ట సంఖ్య (Least number divided by)" అంటే క.సా.గు (LCM) చేయాలి. "భాగించే గరిష్ట సంఖ్య (Greatest number that divides)" అంటే గ.సా.భా (HCF) చేయాలి!',
      formula: 'Given remainders r₁, r₂ → HCF(x - r₁, y - r₂) | Same unknown remainder → HCF(|x - y|, |y - z|)',
      exampleQEn: 'Find the greatest number that will divide 148, 246, and 623 leaving remainders 4, 6, and 11 respectively.',
      exampleQTe: '148, 246 మరియు 623 లను భాగించినప్పుడు వరుసగా 4, 6 మరియు 11 శేషాలను మిగిల్చే గరిష్ట సంఖ్య ఏది?',
      exampleSolEn: 'Step 1: Subtract the respective remainders first:\n• 148 - 4 = 144\n• 246 - 6 = 240\n• 623 - 11 = 612.\nStep 2: Find HCF(144, 240, 612):\nDifference(240 - 144) = 96. Factors of 96 that divide 144, 240, and 612 → HCF = 12!',
      exampleSolTe: 'సోపానం 1: ఇచ్చిన సంఖ్యల నుండి ఆయా శేషాలను తీసివేయండి:\n148 - 4 = 144, 246 - 6 = 240, 623 - 11 = 612.\nసోపానం 2: 144, 240, 612 ల గ.సా.భా (HCF) = 12.'
    },
    {
      code: '2.7',
      titleEn: 'Largest & Smallest n-Digit Numbers Divisible by x, y, z',
      titleTe: 'x, y, z లచే భాగించబడే n-అంకెల గరిష్ట మరియు కనిష్ట సంఖ్యలు',
      conceptEn: `To find the largest or smallest 4-digit (or 5-digit) number divisible by $x, y, z$:
1. First find **$L = \text{LCM}(x, y, z)$**.
2. **For Largest $n$-digit number**: Divide the largest $n$-digit number ($9999\dots$) by $L$ and find the remainder $R$.
   • Exact divisible largest number = **$9999 - R$**.
   • If it must leave remainder $k$, answer = **$(9999 - R) + k$**.
3. **For Smallest $n$-digit number**: Divide the smallest $n$-digit number ($1000\dots$) by $L$ and find the remainder $R$.
   • Exact divisible smallest number = **$1000 + (L - R)$**.`,
      conceptTe: `$x, y, z$ లచే నిశ్శేషంగా భాగించబడే 4-అంకెల (లేదా 5-అంకెల) గరిష్ట/కనిష్ట సంఖ్యను కనుగొనుట:
1. ముందుగా **$L = \text{LCM}(x, y, z)$** కనుగొనండి.
2. **4-అంకెల గరిష్ట సంఖ్య కోసం**: 9999 ను $L$ చే భాగించి శేషం $R$ కనుగొనండి $\rightarrow$ కావలసిన సంఖ్య = **$9999 - R$**.
3. **4-అంకెల కనిష్ట సంఖ్య కోసం**: 1000 ను $L$ చే భాగించి శేషం $R$ కనుగొనండి $\rightarrow$ కావలసిన సంఖ్య = **$1000 + (L - R)$**.`,
      ruleEn: 'In exam hall, instead of long division on 9999, use divisibility rules of 9, 8, 5, or 11 directly on the 4 options to pick the answer in 5 seconds!',
      ruleTe: 'పరీక్షలో 9999 ను భాగించే బదులు, ఇచ్చిన 4 ఆప్షన్లలో ఏ ఆప్షన్ 9, 8 లేదా 5 చే భాగించబడుతుందో చూసి 5 సెకన్లలో జవాబు పెట్టవచ్చు!',
      formula: 'Largest 4-digit = 9999 - Remainder(9999 ÷ LCM) | Smallest 4-digit = 1000 + (LCM - Remainder)',
      exampleQEn: 'Find the greatest 4-digit number which is exactly divisible by 15, 25, 40, and 75.',
      exampleQTe: '15, 25, 40 మరియు 75 లచే నిశ్శేషంగా భాగించబడే 4-అంకెల గరిష్ట సంఖ్య ఏది?',
      exampleSolEn: 'Step 1: LCM of 15, 25, 40, 75 = 600.\nStep 2: Divide greatest 4-digit number 9999 by 600:\n9999 = (600 × 16) + 399 → Remainder R = 399.\nStep 3: Required number = 9999 - 399 = 9600.',
      exampleSolTe: 'సోపానం 1: 15, 25, 40, 75 ల క.సా.గు (LCM) = 600.\nసోపానం 2: 9999 ను 600 చే భాగించగా: 600 × 16 = 9600, శేషం = 399.\nసోపానం 3: కావలసిన 4-అంకెల గరిష్ట సంఖ్య = 9999 - 399 = 9600.'
    },
    {
      code: '2.8',
      titleEn: 'Real-Life Applications: Bells, Traffic Lights, Circular Track & Square Tiles',
      titleTe: 'నిజ జీవిత అనువర్తనాలు: గంటలు, ట్రాఫిక్ లైట్లు, వృత్తాకార ట్రాక్ & చతురస్రాకార టైల్స్',
      conceptEn: `1. **Bells Tolling / Traffic Lights / Runners on Circular Track (Use LCM)**:
   • Time after which they ring/meet together again = **$\text{LCM}$ of individual time intervals**.
   • **Total number of times they ring together in time $T$ (including the starting bell at $t = 0$)**:
     $$\text{Count} = \left\lfloor \frac{\text{Total Time } T}{\text{LCM}} \right\rfloor + \mathbf{1}$$
     *(Never forget to add $+1$ if they rang together at the start!)*
2. **Minimum Number of Square Tiles to Pave a Rectangular Floor of Length $L$ and Breadth $B$ (Use HCF)**:
   • Side of largest square tile = **$\text{HCF}(L, B)$**.
   • Minimum number of square tiles = **$\frac{\text{Area of Floor } (L \times B)}{(\text{HCF})^2}$**.`,
      conceptTe: `1. **గంటలు ఒకేసారి మోగడం / ట్రాఫిక్ లైట్లు / వృత్తాకార ట్రాక్ (క.సా.గు వాడాలి)**:
   • అవి మళ్ళీ ఎప్పుడు ఒకేసారి మోగుతాయి అంటే = **ఇచ్చిన సమయాల క.సా.గు (LCM)**.
   • **మొత్తం $T$ సమయంలో అవి ఎన్నిసార్లు ఒకేసారి మోగుతాయి (ప్రారంభంలో మోగిన దాంతో కలిపి)**:
     $$\text{మొత్తం సార్లు} = \left( \frac{\text{మొత్తం సమయం } T}{\text{LCM}} \right) + \mathbf{1}$$
2. **దీర్ఘచతురస్రాకార గదిలో వేయాల్సిన కనిష్ట చతురస్రాకార టైల్స్ సంఖ్య (గ.సా.భా వాడాలి)**:
   • టైల్ యొక్క గరిష్ట భుజం = **$\text{HCF}(\text{పొడవు } L, \text{వెడల్పు } B)$**.
   • కనిష్ట టైల్స్ సంఖ్య = **$\frac{L \times B}{(\text{HCF})^2}$**.`,
      ruleEn: 'Always check whether the question asks "how many times in T minutes (including the start)" → add +1, or "excluding the start" → do not add +1.',
      ruleTe: 'మొత్తం ఎన్నిసార్లు మోగుతాయి అని అడిగినప్పుడు ప్రారంభంలో మోగిన 1 సారిని తప్పకుండా కలపాలి (+1)!',
      formula: 'Next Simultaneous Time = LCM(t₁, t₂, ...) | Min Square Tiles = (L × B) / [HCF(L, B)]²',
      exampleQEn: 'Five bells ring at intervals of 3, 5, 6, 8, and 10 seconds. If they ring together at the start, how many times will they ring together in 30 minutes?',
      exampleQTe: 'ఐదు గంటలు వరుసగా 3, 5, 6, 8 మరియు 10 సెకన్ల వ్యవధిలో మోగుతాయి. అవి ప్రారంభంలో ఒకేసారి మోగితే, 30 నిమిషాలలో మొత్తం ఎన్నిసార్లు ఒకేసారి మోగుతాయి?',
      exampleSolEn: 'Step 1: LCM of 3, 5, 6, 8, 10 = 120 seconds = 2 minutes.\nStep 2: In 30 minutes, number of 2-minute intervals = 30 ÷ 2 = 15.\nStep 3: Including the first toll at the start (t = 0): Total times = 15 + 1 = 16 times!',
      exampleSolTe: 'సోపానం 1: 3, 5, 6, 8, 10 సెకన్ల క.సా.గు = 120 సెకన్లు = 2 నిమిషాలు.\nసోపానం 2: 30 నిమిషాలలో 30 ÷ 2 = 15 సార్లు.\nసోపానం 3: ప్రారంభంలో మోగిన 1 సారిని కలిపితే = 15 + 1 = 16 సార్లు!'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Factor vs Multiple Distinction',
      titleTe: '1. కారణాంకం (Factor) మరియు గుణిజం (Multiple) మధ్య తేడా',
      en: 'Factors of 12 are smaller numbers that divide 12 (1, 2, 3, 4, 6, 12). Multiples of 12 are larger numbers in the 12-table (12, 24, 36, 48...). Hence HCF ≤ smallest number, while LCM ≥ largest number.',
      te: '12 యొక్క కారణాంకాలు (1, 2, 3, 4, 6, 12) 12 కంటే చిన్నవిగా ఉంటాయి. 12 యొక్క గుణిజాలు (12, 24, 36...) 12 ఎక్కంలో వచ్చే పెద్ద సంఖ్యలు. కాబట్టి HCF చిన్నదిగా, LCM పెద్దదిగా ఉంటుంది.'
    },
    {
      titleEn: '2. Co-Prime Numbers Have HCF = 1 and LCM = Product',
      titleTe: '2. పరస్పర ప్రధాన సంఖ్యల గ.సా.భా = 1 మరియు క.సా.గు = వాటి లబ్దం',
      en: 'If two numbers share no common factor other than 1 (e.g., 8 and 15), their HCF is 1 and their LCM is simply their product (8 × 15 = 120).',
      te: 'రెండు పరస్పర ప్రధాన సంఖ్యల (ఉదా: 8, 15) గ.సా.భా ఎల్లప్పుడూ 1 అవుతుంది, మరియు వాటి క.సా.గు ఆ రెండింటి లబ్దం (8 × 15 = 120) అవుతుంది.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Divisibility of LCM by HCF',
      termTe: 'క.సా.గు ఎల్లప్పుడూ గ.సా.భా చే భాగించబడుతుంది',
      defEn: 'For any set of numbers, their LCM is ALWAYS an exact multiple of their HCF. For example, if HCF of two numbers is 12, their LCM can NEVER be 90 (since 90 is not divisible by 12).',
      defTe: 'ఏ సంఖ్యల క.సా.గు (LCM) అయినా వాటి గ.సా.భా (HCF) చేత ఖచ్చితంగా భాగించబడాలి. ఉదాహరణకు గ.సా.భా 12 అయితే, క.సా.గు 90 అయ్యే అవకాశమే లేదు!'
    },
    {
      termEn: 'Sum of Reciprocals Formula',
      termTe: 'సంఖ్యల వ్యుత్క్రమాల మొత్తం సూత్రం',
      defEn: 'The sum of reciprocals of two numbers A and B is: 1/A + 1/B = (A + B) / (A × B) = (A + B) / (LCM × HCF).',
      defTe: 'రెండు సంఖ్యల వ్యుత్క్రమాల మొత్తం: 1/A + 1/B = (A + B) / (LCM × HCF).'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Finding Missing Number or Ratio from LCM & HCF',
      nameTe: 'క.సా.గు మరియు గ.సా.భా నుండి రెండవ సంఖ్య లేదా నిష్పత్తిని కనుగొనుట',
      patternEn: 'Two numbers are in ratio 3 : 4 and their LCM is 180. Find their HCF and the numbers.',
      patternTe: 'రెండు సంఖ్యల నిష్పత్తి 3 : 4 మరియు క.సా.గు 180 అయిన ఆ సంఖ్యలు ఏవి?',
      approachEn: 'Use LCM = H × a × b → 180 = H × 3 × 4 → H = 15. Numbers are 45 and 60.',
      approachTe: 'LCM = H × 3 × 4 = 180 → H = 15. కాబట్టి సంఖ్యలు 45 మరియు 60.'
    },
    {
      typeNo: 'Type 2',
      nameEn: 'Counting Number of Pairs from Sum/Product & HCF',
      nameTe: 'సంఖ్యల మొత్తం మరియు గ.సా.భా ఇచ్చినప్పుడు సాధ్యమయ్యే జతల సంఖ్య',
      patternEn: 'Sum of two numbers is 144 and HCF is 18. Find number of pairs.',
      patternTe: 'రెండు సంఖ్యల మొత్తం 144, గ.సా.భా 18. ఎన్ని జతలు సాధ్యం?',
      approachEn: 'x + y = 144 / 18 = 8 → Co-prime pairs adding to 8 are (1,7) and (3,5) → 2 pairs.',
      approachTe: 'x + y = 144/18 = 8 → పరస్పర ప్రధాన జతలు (1,7) మరియు (3,5) → 2 జతలు.'
    },
    {
      typeNo: 'Type 3',
      nameEn: 'Least Number Leaving Remainder r and Divisible by M',
      nameTe: 'r శేషం మిగులుస్తూ మరొక సంఖ్య M చే నిశ్శేషంగా భాగించబడే కనిష్ట సంఖ్య',
      patternEn: 'Least number which when divided by 5, 6, 7, 8 leaves remainder 3, but is divisible by 9.',
      patternTe: '5, 6, 7, 8 లచే భాగిస్తే 3 శేషం వస్తూ, 9 చే నిశ్శేషంగా భాగించబడే కనిష్ట సంఖ్య ఏది?',
      approachEn: 'LCM(5,6,7,8) = 840. Form = 840k + 3. For k = 2, 1680 + 3 = 1683 (sum of digits = 18, divisible by 9!).',
      approachTe: '840k + 3 రూపంలో ఉంటూ 9 చే భాగించబడే సంఖ్య: k = 2 వద్ద 1683.'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Classic Remainder + Divisibility',
      qEn: 'Find the least number which when divided by 5, 6, 7, and 8 leaves a remainder 3, but when divided by 9 leaves no remainder.',
      qTe: '5, 6, 7 మరియు 8 లచే భాగించినప్పుడు 3 శేషం వస్తూ, 9 చే భాగించినప్పుడు శేషం సున్నా వచ్చే కనిష్ట సంఖ్య ఏది?',
      solEn: 'Step 1: LCM of 5, 6, 7, 8 = 840.\nStep 2: Required number is of the form 840k + 3, and must be divisible by 9.\nStep 3: Divide 840 by 9 → 840 = 9×93 + 3 → Remainder is 3k + 3.\nFor k = 2: 3(2) + 3 = 9 (divisible by 9!).\nSo Number = 840(2) + 3 = 1683.',
      solTe: 'సోపానం 1: 5, 6, 7, 8 ల క.సా.గు = 840.\nసోపానం 2: కావలసిన సంఖ్య = 840k + 3 (ఇది 9 చే భాగించబడాలి).\nసోపానం 3: k = 2 ప్రతిక్షేపిస్తే 840(2) + 3 = 1683 (అంకెల మొత్తం 1+6+8+3 = 18, 9 చే భాగించబడుతుంది!).',
      shortcutTip: 'Option Check in 3 Seconds: Just check which option has sum of digits divisible by 9 AND ends in 3 or 8 (since ÷5 gives remainder 3)!'
    },
    {
      examTag: 'RRB Group-D • Co-Prime LCM-HCF Model',
      qEn: 'The LCM of two numbers is 495 and their HCF is 5. If the sum of the numbers is 100, find their difference.',
      qTe: 'రెండు సంఖ్యల క.సా.గు 495 మరియు గ.సా.భా 5. ఆ రెండు సంఖ్యల మొత్తం 100 అయితే, వాటి భేదం ఎంత?',
      solEn: 'Step 1: Let numbers be 5x and 5y. Given 5(x + y) = 100 → x + y = 20.\nStep 2: Also 5 × x × y = 495 → x × y = 99.\nStep 3: Find two co-prime numbers whose sum is 20 and product is 99 → x = 11 and y = 9!\nStep 4: The numbers are 5(11) = 55 and 5(9) = 45. Difference = 55 - 45 = 10.',
      solTe: 'సోపానం 1: సంఖ్యలు 5x, 5y అనుకుంటే 5(x+y) = 100 → x + y = 20.\nసోపానం 2: క.సా.గు 5xy = 495 → xy = 99.\nసోపానం 3: కూడితే 20, గుణిస్తే 99 వచ్చే సంఖ్యలు 11 మరియు 9.\nసోపానం 4: ఆ సంఖ్యలు 55 మరియు 45 → వాటి భేదం = 55 - 45 = 10.',
      shortcutTip: 'Factor 99 = 11 × 9 → Check 11 + 9 = 20 → Difference = 5 × (11 - 9) = 10!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'First Number × Second Number = LCM × HCF. If numbers are in ratio a : b (co-prime) and HCF is H, then Numbers = Ha, Hb and LCM = H·a·b.',
      pointTe: 'మొదటి సంఖ్య × రెండవ సంఖ్య = LCM × HCF. నిష్పత్తి a:b మరియు గ.సా.భా H అయితే సంఖ్యలు Ha, Hb మరియు క.సా.గు = H·a·b.'
    },
    {
      pointEn: 'LCM of Fractions = LCM(Numerators) / HCF(Denominators). HCF of Fractions = HCF(Numerators) / LCM(Denominators).',
      pointTe: 'భిన్నాల క.సా.గు = లవాల క.సా.గు / హారాల గ.సా.భా. భిన్నాల గ.సా.భా = లవాల గ.సా.భా / హారాల క.సా.గు.'
    },
    {
      pointEn: 'Least number leaving same remainder r → LCM + r. Least number leaving remainders with constant difference K → LCM - K.',
      pointTe: 'ఒకే శేషం r మిగిలే కనిష్ట సంఖ్య → LCM + r. స్థిర భేదం K గల శేషాలు మిగిలే కనిష్ట సంఖ్య → LCM - K.'
    },
    {
      pointEn: 'Greatest number dividing x, y, z leaving remainders r₁, r₂, r₃ → HCF(x - r₁, y - r₂, z - r₃). Same unknown remainder → HCF(|x - y|, |y - z|).',
      pointTe: 'r₁, r₂, r₃ శేషాలు మిగిల్చే గరిష్ట సంఖ్య → HCF(x-r₁, y-r₂, z-r₃). సమాన శేషం మిగిల్చే గరిష్ట సంఖ్య → HCF(|x-y|, |y-z|).'
    }
  ]
};

/* ============================================================================
   CHAPTER 3: PERCENTAGES — COMPLETE CHAPTER (శాతాలు — పూర్తి పాఠ్యపుస్తక అధ్యాయం)
   9 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-percentages'] = {
  id: 'math-percentages',
  chapterNo: 3,
  titleEn: 'Chapter 3: Percentages — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 3: శాతాలు (Percentages) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'Core Arithmetic Pillar (3–4 Questions in Every Shift)',
  readTime: '40 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-percentages',

  introEn: `Welcome to Chapter 3: **Percentages (శాతాలు)**. Percentages is the backbone of the entire Arithmetic section in RRB NTPC and Group-D—not only does it carry **3 to 4 direct questions**, but its fraction-ratio methods are also used directly in Profit & Loss, Simple & Compound Interest, and Data Interpretation. This complete textbook chapter covers all **9 syllabus sub-topics** from basic fraction conversions to Election, Passing Marks, Population, and Venn Diagram problems.`,

  introTe: `**అధ్యాయం 3: శాతాలు (Percentages)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! అంకగణితం (Arithmetic) మొత్తానికి గుండెకాయ వంటి అధ్యాయం ఇది. ఆర్‌ఆర్‌బి పరీక్షలలో నేరుగా **3 నుండి 4 ప్రశ్నలు** రావడమే కాకుండా, లాభనష్టాలు, బారువడ్డీ-చక్రవడ్డీ మరియు డేటా ఇంటర్‌ప్రిటేషన్ లెక్కలు కూడా ఈ శాతాల భిన్న పద్ధతి (Fraction Method) ఆధారంగానే చేస్తాము. ఈ అధ్యాయంలో 9 ఉప-అంశాలను పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '3.1',
      titleEn: 'Meaning of Percentage & Base-100 Conversions (Fraction ↔ Percentage)',
      titleTe: 'శాతం (%) అర్థం మరియు భిన్నాలు ↔ శాతాల మార్పిడి నియమాలు',
      conceptEn: `• **"Per Cent"** means **"out of every 100"**: $x\% = \frac{x}{100}$.
• **Rule 1 (Percentage → Fraction)**: Divide by 100 (e.g., $35\% = \frac{35}{100} = \frac{7}{20}$).
• **Rule 2 (Fraction → Percentage)**: Multiply by $100\%$ (e.g., $\frac{3}{8} = \frac{3}{8} \times 100\% = 37.5\%$).
• **Commutative Law**: **$x\% \text{ of } y = y\% \text{ of } x$**. For example, $48\% \text{ of } 250 = 250\% \text{ of } 48 = 2.5 \times 48 = 120$.`,
      conceptTe: `• **శాతం (Percent)** అంటే ప్రతి వందకు (Out of 100) అని అర్థం: $x\% = \frac{x}{100}$.
• **శాతాన్ని భిన్నంగా మార్చడానికి**: 100 చే భాగించాలి ($20\% = \frac{20}{100} = \frac{1}{5}$).
• **భిన్నాన్ని శాతంగా మార్చడానికి**: 100 తో గుణించాలి ($\frac{3}{4} \times 100\% = 75\%$).
• **తారుమారు నియమం**: $y$ లో $x\%$ అన్నా, $x$ లో $y\%$ అన్నా విలువ ఒకటే! ($250 \text{ లో } 48\% = 48 \text{ లో } 250\% = 120$).`,
      ruleEn: 'Mental Split Rule: For any number, 10% is found by shifting the decimal 1 place left, 1% by shifting 2 places left, and 5% is half of 10%.',
      ruleTe: 'మనోగణిత నియమం: ఏ సంఖ్యలోనైనా 10% కావాలంటే చివరి నుండి ఒక అంకె ముందు చుక్క పెట్టండి. 10% లో సగం చేస్తే 5% వస్తుంది!',
      formula: 'x% = x/100 | (a/b) in % = (a/b) × 100% | x% of y = y% of x',
      exampleQEn: 'Find 36% of 250 + 45% of 180 mentally.',
      exampleQTe: '250 లో 36% + 180 లో 45% విలువను కనుగొనండి.',
      exampleSolEn: '36% of 250 = 250% of 36 = 2.5 × 36 = 90.\n45% of 180 = (50% - 5%) of 180 = 90 - 9 = 81.\nTotal = 90 + 81 = 171.',
      exampleSolTe: '250 లో 36% = 36 లో 250% = 36 × 2.5 = 90.\n180 లో 45% = 50% (90) - 5% (9) = 81.\nమొత్తం = 90 + 81 = 171.'
    },
    {
      code: '3.2',
      titleEn: 'Master Fraction-to-Percentage Table & Ratio Interpretation',
      titleTe: 'భిన్నాలు - శాతాల మాస్టర్ పట్టిక మరియు నిష్పత్తి పద్ధతి',
      conceptEn: `Memorize these standard fractions to solve RRB questions in 5 seconds:
• $\frac{1}{2} = 50\%$ | $\frac{1}{3} = 33.33\%$ ($33\frac{1}{3}\%$) | $\frac{2}{3} = 66.66\%$ ($66\frac{2}{3}\%$)
• $\frac{1}{4} = 25\%$ | $\frac{3}{4} = 75\%$ | $\frac{1}{5} = 20\%$ | $\frac{1}{6} = 16.66\%$ ($16\frac{2}{3}\%$) | $\frac{5}{6} = 83.33\%$
• $\frac{1}{7} = 14.28\%$ ($14\frac{2}{7}\%$) | $\frac{1}{8} = 12.5\%$ | $\frac{3}{8} = 37.5\%$ | $\frac{5}{8} = 62.5\%$ | $\frac{7}{8} = 87.5\%$
• $\frac{1}{9} = 11.11\%$ | $\frac{1}{11} = 9.09\%$ | $\frac{1}{12} = 8.33\%$ | $\frac{1}{15} = 6.66\%$ | $\frac{1}{16} = 6.25\%$
• **Ratio Meaning**: In $\frac{\text{Numerator}}{\text{Denominator}}$, **Denominator = Original Value**, and **Numerator = Increase/Decrease**.`,
      conceptTe: `5 సెకన్లలో లెక్కలు చేయడానికి ఈ భిన్నాల పట్టికను తప్పక గుర్తుంచుకోండి:
• $\frac{1}{2}=50\%$, $\frac{1}{3}=33\frac{1}{3}\%$, $\frac{1}{4}=25\%$, $\frac{1}{5}=20\%$, $\frac{1}{6}=16\frac{2}{3}\%$, $\frac{1}{7}=14\frac{2}{7}\%$, $\frac{1}{8}=12.5\%$, $\frac{3}{8}=37.5\%$, $\frac{5}{8}=62.5\%$, $\frac{7}{8}=87.5\%$, $\frac{1}{9}=11\frac{1}{9}\%$, $\frac{1}{11}=9\frac{1}{11}\%$, $\frac{1}{12}=8\frac{1}{3}\%$, $\frac{1}{16}=6.25\%$.
• **భిన్నం అర్థం**: హారం (Denominator) ఎల్లప్పుడూ **అసలు విలువను**, లవం (Numerator) **పెరుగుదల లేదా తగ్గుదలను** సూచిస్తుంది!`,
      ruleEn: 'If a number increases by +1/n, the ratio of Original : New is n : (n + 1). If it decreases by -1/n, the ratio is n : (n - 1).',
      ruleTe: 'ఒక సంఖ్య 12.5% (+1/8) పెరిగితే అసలు సంఖ్య : కొత్త సంఖ్య నిష్పత్తి = 8 : 9 అవుతుంది. అదే 12.5% తగ్గితే 8 : 7 అవుతుంది.',
      formula: '1/8 = 12.5% | 3/8 = 37.5% | 5/8 = 62.5% | 7/8 = 87.5% | 1/6 = 16.66% | 1/7 = 14.28%',
      exampleQEn: 'When 64 is added to a number, the number becomes 116⅔% of itself. Find the original number.',
      exampleQTe: 'ఒక సంఖ్యకు 64 కలిపితే, ఆ సంఖ్య తనలో 116⅔% అవుతుంది. అయిన అసలు సంఖ్య ఎంత?',
      exampleSolEn: 'Step 1: 116⅔% = 100% + 16⅔% = 1 + 1/6 = 7/6.\nStep 2: Original number = 6 parts, New number = 7 parts.\nIncrease = 7 - 6 = 1 part = 64.\nStep 3: Original number (6 parts) = 6 × 64 = 384.',
      exampleSolTe: 'సోపానం 1: 16⅔% = 1/6. అంటే అసలు సంఖ్య 6 భాగాలు అయితే, కొత్త సంఖ్య 7 భాగాలు అయింది.\nసోపానం 2: పెరిగిన 1 భాగం = 64.\nసోపానం 3: అసలు సంఖ్య (6 భాగాలు) = 6 × 64 = 384.'
    },
    {
      code: '3.3',
      titleEn: 'Percentage Increase/Decrease & Base Comparison ("Of / Than" Rule)',
      titleTe: 'శాతం పెరుగుదల/తగ్గుదల మరియు పోలిక నియమం ("కంటే / లో" నియమం)',
      conceptEn: `• Whenever comparing two numbers $A$ and $B$, the quantity that comes immediately after the word **"of"** or **"than"** (తెలుగులో **"కంటే"** లేదా **"లో"**) MUST be placed in the **Denominator (Base)**:
  - $A$ is what $\%$ of $B \rightarrow \frac{A}{B} \times 100\%$
  - $A$ is what $\%$ more than $B \rightarrow \frac{A - B}{B} \times 100\%$
  - $B$ is what $\%$ less than $A \rightarrow \frac{A - B}{A} \times 100\%$`,
      conceptTe: `• రెండు సంఖ్యలను పోల్చేటప్పుడు ఏ సంఖ్య పక్కన అయితే **"కంటే (than)"** లేదా **"లో (of)"** అనే పదం ఉంటుందో, ఆ సంఖ్యను ఎల్లప్పుడూ **హారంలో (Denominator)** ఉంచాలి!`,
      ruleEn: 'Never put the wrong number in the denominator! Always ask: "Compared to WHICH original/base value?"',
      ruleTe: 'హారంలో ఎప్పుడూ అసలు విలువను లేదా పోల్చే సంఖ్యను మాత్రమే రాయాలి.',
      formula: '% Change = (Change / Original Base) × 100%',
      exampleQEn: 'If 60% of (A - B) = 40% of (A + B), then B is what percentage of A?',
      exampleQTe: '(A - B) లో 60% = (A + B) లో 40% అయినచో, A లో B ఎంత శాతం?',
      exampleSolEn: 'Step 1: 60(A - B) = 40(A + B) → 3(A - B) = 2(A + B).\nStep 2: 3A - 3B = 2A + 2B → A = 5B → A / B = 5 / 1.\nStep 3: Required % = (B / A) × 100% = (1 / 5) × 100% = 20%.',
      exampleSolTe: 'సోపానం 1: 3(A - B) = 2(A + B) → 3A - 3B = 2A + 2B → A = 5B.\nసోపానం 2: A = 5 భాగాలు, B = 1 భాగం → A లో B శాతం = (1/5) × 100% = 20%.'
    },
    {
      code: '3.4',
      titleEn: 'Constant Product Rule (Price × Consumption = Expenditure)',
      titleTe: 'స్థిర లబ్ద నియమం (ధర × వినియోగం = ఖర్చు & జీతాల పోలిక)',
      conceptEn: `Whenever the product of two quantities is constant ($A \times B = \text{Constant}$, such as $\text{Price} \times \text{Consumption} = \text{Expenditure}$, or $\text{Length} \times \text{Breadth} = \text{Area}$, or $\text{Speed} \times \text{Time} = \text{Distance}$):
• If one quantity increases by **$R\%$** (or $+\frac{1}{n}$), the other must decrease by:
  $$\left[ \frac{R}{100 + R} \times 100 \right]\% \quad \text{or simply} \quad \mathbf{-\frac{1}{n + 1}}$$
• If one quantity decreases by **$R\%$** (or $-\frac{1}{n}$), the other can increase by:
  $$\left[ \frac{R}{100 - R} \times 100 \right]\% \quad \text{or simply} \quad \mathbf{+\frac{1}{n - 1}}$$`,
      conceptTe: `రెండు రాశుల లబ్దం స్థిరంగా ఉన్నప్పుడు ($\text{ధర} \times \text{వినియోగం} = \text{ఖర్చు}$):
• ఒక రాశి **$+\frac{1}{n}$** పెరిగితే, రెండవ రాశి **$-\frac{1}{n+1}$** తగ్గాలి (ఉదా: ధర $25\% = +\frac{1}{4}$ పెరిగితే, వినియోగం $-\frac{1}{5} = 20\%$ తగ్గాలి).
• ఒక రాశి **$-\frac{1}{n}$** తగ్గితే, రెండవ రాశి **$+\frac{1}{n-1}$** పెరుగుతుంది (ఉదా: ధర $20\% = -\frac{1}{5}$ తగ్గితే, వినియోగం $+\frac{1}{4} = 25\%$ పెరుగుతుంది).`,
      ruleEn: 'If price drops by x% enabling a person to buy k kg more for ₹A, then: Reduced (New) Price per kg = (x% of A) / k!',
      ruleTe: 'ధర x% తగ్గడం వల్ల ₹A కు k కిలోలు ఎక్కువ వస్తే: తగ్గిన తర్వాత కొత్త ధర = (A లో x%) ÷ k!',
      formula: 'Increase +R% → Decrease [R/(100+R)]×100% | Decrease -R% → Increase [R/(100-R)]×100%',
      exampleQEn: 'A reduction of 20% in the price of sugar enables a purchaser to obtain 4 kg more for ₹400. Find the reduced price and original price per kg.',
      exampleQTe: 'చక్కెర ధర 20% తగ్గడం వల్ల ఒక వ్యక్తి ₹400 లకు 4 కిలోల చక్కెర ఎక్కువగా కొనగలిగాడు. అయిన తగ్గిన ధర మరియు అసలు ధర ఎంత?',
      exampleSolEn: 'Step 1: Money saved due to 20% drop = 20% of ₹400 = ₹80.\nThis ₹80 buys 4 kg now → Reduced (New) Price = 80 ÷ 4 = ₹20/kg.\nStep 2: Since ₹20 is 80% of Original Price (after 20% drop):\nOriginal Price = 20 × (100 / 80) = ₹25/kg.',
      exampleSolTe: 'సోపానం 1: ₹400 లో 20% = ₹80. ఈ ₹80 కి ప్రస్తుతం 4 కిలోలు వస్తున్నాయి కాబట్టి తగ్గిన ధర (New Price) = 80 ÷ 4 = ₹20/కిలో.\nసోపానం 2: 20% తగ్గాక ధర ₹20 అంటే 80% = ₹20 → అసలు ధర (100%) = ₹25/కిలో.'
    },
    {
      code: '3.5',
      titleEn: 'Successive Percentage Change & 2D/3D Area/Volume Effects',
      titleTe: 'వరుస శాతాల మార్పు (Successive Change) & వైశాల్యం/ఘనపరిమాణంపై ప్రభావం',
      conceptEn: `When a quantity undergoes two successive percentage changes of $x\%$ and $y\%$ (use $+$ for increase, $-$ for decrease):
$$\text{Net } \% \text{ Change} = \left( x + y + \frac{x \cdot y}{100} \right)\%$$
• **Application to 2D Area**: Since Circle Area $= \pi r^2$ and Square Area $= a^2$, if radius or side increases by $x\%$, Area increases by **$(2x + \frac{x^2}{100})\%$**!`,
      conceptTe: `ఒక విలువ వరుసగా $x\%$ మరియు $y\%$ మారితే నికర మార్పు:
$$\text{నికర శాతం మార్పు} = \left( x + y + \frac{x \cdot y}{100} \right)\%$$
• వృత్త వ్యాసార్థం లేదా చతురస్ర భుజం $x\%$ పెరిగితే, దాని వైశాల్యం **$(2x + \frac{x^2}{100})\%$** పెరుగుతుంది!`,
      ruleEn: 'If a number is increased by R% and then decreased by R%, there is ALWAYS a net DECREASE of (R² / 100)%!',
      ruleTe: 'ఒక సంఖ్యను ముందుగా R% పెంచి, ఆపై R% తగ్గిస్తే ఎల్లప్పుడూ (R² / 100)% తగ్గుదల (నష్టం) మాత్రమే వస్తుంది!',
      formula: 'Net % = x + y + (xy)/100 | Equal +R% and -R% → Always -(R²/100)% Decrease',
      exampleQEn: 'If the radius of a circle is increased by 15%, by what percentage does its area increase?',
      exampleQTe: 'ఒక వృత్త వ్యాసార్థాన్ని 15% పెంచితే, దాని వైశాల్యం ఎంత శాతం పెరుగుతుంది?',
      exampleSolEn: 'Using Net % = 2x + x²/100 for x = 15:\nArea Increase = 2(15) + (15² / 100) = 30 + 2.25 = 32.25%.',
      exampleSolTe: 'సూత్రం: 2x + x²/100 లో x = 15 రాయగా = 2(15) + (225/100) = 30 + 2.25 = 32.25%.'
    },
    {
      code: '3.6',
      titleEn: 'Income, Expenditure & Savings Problems',
      titleTe: 'ఆదాయం (Income), ఖర్చు (Expenditure) మరియు పొదుపు (Savings) లెక్కలు',
      conceptEn: `Fundamental Equation: **$\text{Income (I)} = \text{Expenditure (E)} + \text{Savings (S)}$**.
• Always take Initial Income = **100** (or use ratio multiplied by 100). If a person spends $75\%$ of income, then $I = 100, E = 75, S = 25$ (Ratio $4 : 3 : 1$).`,
      conceptTe: `ప్రాథమిక సమీకరణం: **$\text{ఆదాయం (Income)} = \text{ఖర్చు (Expenditure)} + \text{పొదుపు (Savings)}$**.
• ఆదాయం = 100 అనుకుని, ఖర్చు మరియు పొదుపులో వచ్చిన పెరుగుదలలను నేరుగా లెక్కిస్తే 10 సెకన్లలో జవాబు వస్తుంది.`,
      ruleEn: 'Wait! Distinguish between "spends 20% of total income" vs "spends 20% of the REMAINING income". For "remaining", use successive multiplication!',
      ruleTe: '"మిగిలిన ఆదాయంలో (of the remaining)" అని ఇచ్చినప్పుడు వరుస భిన్నాల గుణకారం వాడాలి!',
      formula: 'Income = Expenditure + Savings | Remaining Income = Total × (1 - a/100) × (1 - b/100)',
      exampleQEn: 'Ramesh spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. Find the percentage increase in his savings.',
      exampleQTe: 'రమేష్ తన ఆదాయంలో 75% ఖర్చు చేస్తాడు. అతని ఆదాయం 20% పెరిగింది మరియు ఖర్చు 10% పెరిగింది. అయిన అతని పొదుపు ఎంత శాతం పెరిగింది?',
      exampleSolEn: 'Step 1: Let Income = 100 → Expenditure = 75, Savings = 25.\nStep 2: New Income (+20%) = 120. New Expenditure (+10% of 75) = 75 + 7.5 = 82.5.\nStep 3: New Savings = 120 - 82.5 = 37.5.\nIncrease in Savings = 37.5 - 25 = 12.5 on base 25 → (12.5 / 25) × 100% = 50%!',
      exampleSolTe: 'సోపానం 1: ఆదాయం = 100 అనుకుంటే, ఖర్చు = 75, పొదుపు = 25.\nసోపానం 2: కొత్త ఆదాయం = 120. కొత్త ఖర్చు = 75 + 7.5 = 82.5.\nసోపానం 3: కొత్త పొదుపు = 120 - 82.5 = 37.5. పెరిగిన పొదుపు = 12.5 → శాతం = (12.5 / 25) × 100% = 50%!'
    },
    {
      code: '3.7',
      titleEn: 'Examination Passing Marks & Two-Student Comparison Model',
      titleTe: 'పరీక్షలో ఉత్తీర్ణత మార్కులు (Passing Marks) & ఇద్దరు విద్యార్థుల పోలిక లెక్కలు',
      conceptEn: `When Student 1 scores $P_1\%$ and **fails by $M_1$ marks**, while Student 2 scores $P_2\%$ and gets **$M_2$ marks MORE than passing marks**:
$$\text{Difference in } \% = (P_2 - P_1)\% = M_1 + M_2 \text{ Marks}$$
From this, find $1\%$ and then **Maximum Marks ($100\%$)** and **Passing Marks ($P_1\% + M_1$)**!`,
      conceptTe: `ఒక విద్యార్థికి $P_1\%$ మార్కులు వచ్చి $M_1$ మార్కులతో ఫెయిల్ అయితే, మరొక విద్యార్థికి $P_2\%$ మార్కులు వచ్చి పాస్ మార్కుల కంటే $M_2$ మార్కులు ఎక్కువ వస్తే:
$$\text{శాతాల భేదం } (P_2 - P_1)\% = \text{మార్కుల మొత్తం } (M_1 + M_2)$$`,
      ruleEn: 'If one student FAILS (-M₁) and the other PASSES (+M₂), ADD the marks (M₁ + M₂). If both pass or both fail, SUBTRACT the marks |M₁ - M₂|!',
      ruleTe: 'ఒకరు ఫెయిల్ అయి మరొకరు పాస్ అయితే మార్కులను కూడాలి (M₁ + M₂). ఇద్దరూ పాస్ అయినా లేదా ఇద్దరూ ఫెయిల్ అయినా మార్కులను తీసివేయాలి |M₁ - M₂|!',
      formula: '(P₂ - P₁)% of Max Marks = M₁ (shortfall) + M₂ (excess)',
      exampleQEn: 'A candidate scoring 28% fails by 18 marks, while another candidate scoring 40% gets 30 marks more than the minimum pass marks. Find the maximum marks and passing percentage.',
      exampleQTe: 'ఒక అభ్యర్థికి 28% మార్కులు వచ్చి 18 మార్కులతో ఫెయిల్ అయ్యాడు. మరొక అభ్యర్థికి 40% మార్కులు వచ్చి పాస్ మార్కుల కంటే 30 మార్కులు ఎక్కువ వచ్చాయి. గరిష్ట మార్కులు మరియు ఉత్తీర్ణత శాతం ఎంత?',
      exampleSolEn: 'Step 1: (40% - 28%) = 12% corresponds to (18 + 30) = 48 marks.\nStep 2: 1% = 48 / 12 = 4 marks → Maximum Marks (100%) = 400.\nStep 3: 18 marks = 18 / 4 = 4.5% → Passing % = 28% + 4.5% = 32.5% (130 marks).',
      exampleSolTe: 'సోపానం 1: 40% - 28% = 12% = 18 + 30 = 48 మార్కులు.\nసోపానం 2: 1% = 4 మార్కులు → గరిష్ట మార్కులు (100%) = 400.\nసోపానం 3: పాస్ మార్కులు = 28% (112) + 18 = 130 మార్కులు (32.5%).'
    },
    {
      code: '3.8',
      titleEn: 'Election Problems (Total Voters, Valid Votes & Winning Margin)',
      titleTe: 'ఎన్నికల లెక్కలు (మొత్తం ఓటర్లు, చెల్లిన ఓట్లు & మెజారిటీ)',
      conceptEn: `Hierarchy of Votes in an Election:
1. **Total Enrolled Voters ($100\%$)** $\\xrightarrow{-\text{Did not vote}}$ **Votes Polled** $\\xrightarrow{-\text{Invalid Votes}}$ **Valid Votes**.
2. If Winner gets **$W\%$ of Valid Votes**, then Loser gets **$(100 - W)\%$ of Valid Votes**, and **Winning Margin = $(2W - 100)\%$ of Valid Votes**!`,
      conceptTe: `ఎన్నికల లెక్కలలో క్రమం:
1. **మొత్తం ఓటర్లు** $\rightarrow$ **పోలైన ఓట్లు** $\rightarrow$ **చెల్లిన ఓట్లు (Valid Votes)**.
2. విజేతకు చెల్లిన ఓట్లలో $W\%$ వస్తే, ఓడిన వ్యక్తికి $(100 - W)\%$ వస్తాయి. కాబట్టి **మెజారిటీ (Winning Margin) = చెల్లిన ఓట్లలో $(W - (100 - W))\%$**!`,
      ruleEn: 'Carefully check whether the winner got x% of "Valid Votes" or x% of "Total Enrolled Voters"!',
      ruleTe: 'విజేతకు వచ్చిన శాతం "చెల్లిన ఓట్లలోనా (of valid votes)" లేక "మొత్తం ఓటర్లలోనా (of total voters)" అనేది ప్రశ్నలో జాగ్రత్తగా గమనించాలి!',
      formula: 'Winner % - Loser % = Winning Margin % (on Valid Votes)',
      exampleQEn: 'In an election between two candidates, 10% of voters did not vote and 10% of polled votes were declared invalid. The winner got 54% of valid votes and won by 1,620 votes. Find the total number of voters.',
      exampleQTe: 'ఒక ఎన్నికలో 10% మంది ఓటు వేయలేదు. పోలైన ఓట్లలో 10% చెల్లలేదు. విజేతకు చెల్లిన ఓట్లలో 54% వచ్చి 1,620 ఓట్ల మెజారిటీతో గెలిచాడు. మొత్తం ఓటర్ల సంఖ్య ఎంత?',
      exampleSolEn: 'Step 1: Let Total Voters = T. Polled = (9/10)T. Valid = (9/10) × (9/10)T = (81/100)T.\nStep 2: Winner got 54% of valid → Loser got 46% of valid → Margin = (54% - 46%) = 8% of valid.\nStep 3: (8/100) × (81/100) × T = 1620 → T = (1620 × 10000) / (8 × 81) = 25,000 voters!',
      exampleSolTe: 'సోపానం 1: మొత్తం ఓటర్లు = T. పోలైనవి = 90%, చెల్లినవి = 90% లో 90% = 81%.\nసోపానం 2: విజేత 54%, ఓడినవారు 46% → మెజారిటీ = చెల్లిన ఓట్లలో 8%.\nసోపానం 3: T × (81/100) × (8/100) = 1620 → T = 25,000 ఓటర్లు!'
    },
    {
      code: '3.9',
      titleEn: 'Population Growth, Depreciation & Venn Diagram Overlap',
      titleTe: 'జనాభా వృద్ధి, యంత్రాల తరుగుదల & వెన్ చిత్రాల శాతాల లెక్కలు',
      conceptEn: `1. **Population / Machine Value after $n$ years**:
   $$P_n = P_0 \times \left(1 \pm \frac{R}{100}\right)^n$$
2. **2-Subject Venn Diagram Pass/Fail Formula**:
   $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
   • Ensure all 3 values ($A, B$, and $\text{Both}$) are converted to the **SAME type (all Pass % or all Fail %)** before applying the formula!`,
      conceptTe: `1. **జనాభా / యంత్రం విలువ**: $P_n = P_0 \left(1 \pm \frac{R}{100}\right)^n$.
2. **వెన్ చిత్రాల సూత్రం**: $n(A \cup B) = n(A) + n(B) - n(A \cap B)$. సూత్రం వాడే ముందు అన్నీ 'పాస్ శాతాలు' లేదా అన్నీ 'ఫెయిల్ శాతాలు' ఉండేలా చూసుకోవాలి!`,
      ruleEn: 'In Venn diagram problems: Total Pass % = 100% - (Net Fail % in at least one subject).',
      ruleTe: 'రెండు సబ్జెక్టులలో పాస్ అయిన వారి శాతం = 100% - (కనీసం ఒక్క సబ్జెక్టులోనైనా ఫెయిల్ అయిన వారి నికర శాతం).',
      formula: 'Net Fail % = Fail(A) + Fail(B) - Fail(Both) | Pass in Both % = 100% - Net Fail %',
      exampleQEn: 'In an examination, 35% of students failed in Mathematics, 25% failed in Reasoning, and 10% failed in both subjects. Find the percentage of students who passed in both subjects.',
      exampleQTe: 'ఒక పరీక్షలో 35% మంది గణితంలో, 25% మంది రీజనింగ్‌లో మరియు 10% మంది రెండింటిలోనూ ఫెయిల్ అయ్యారు. అయిన రెండు సబ్జెక్టులలోనూ పాస్ అయిన విద్యార్థుల శాతం ఎంత?',
      exampleSolEn: 'Step 1: Total % failed in at least one subject = 35% + 25% - 10% = 50%.\nStep 2: Percentage passed in BOTH subjects = 100% - 50% = 50%.',
      exampleSolTe: 'సోపానం 1: కనీసం ఒక్క సబ్జెక్టులోనైనా ఫెయిల్ అయిన వారు = 35% + 25% - 10% = 50%.\nసోపానం 2: రెండింటిలోనూ పాస్ అయిన వారు = 100% - 50% = 50%.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Every Percentage is a Ratio with Base 100',
      titleTe: '1. ప్రతి శాతం 100 ఆధారంగా గల నిష్పత్తి',
      en: 'Thinking of 25% as 1/4 (1 out of every 4) eliminates big multiplications.',
      te: '25% ని 1/4 గా (ప్రతి 4 భాగాలలో 1 భాగం) ఊహించుకుంటే పెద్ద గుణకారాలు చేయాల్సిన అవసరం ఉండదు.'
    },
    {
      titleEn: '2. Base Value (100%) Identification',
      titleTe: '2. ఆధార విలువ (100%) ను గుర్తించడం',
      en: 'Initial value, Cost Price, Maximum Marks, or Total Voters is always treated as 100%.',
      te: 'ప్రారంభ విలువ, గరిష్ట మార్కులు లేదా మొత్తం ఓటర్లను ఎల్లప్పుడూ 100% గా తీసుకోవాలి.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Multiplying Factor (గుణకార కారకం)',
      termTe: 'గుణకార కారకం (Multiplying Factor)',
      defEn: 'To increase a value by R%, multiply by (100 + R)/100. To decrease by R%, multiply by (100 - R)/100.',
      defTe: 'ఒక సంఖ్య R% పెరిగితే (100+R)/100 తో, R% తగ్గితే (100-R)/100 తో గుణించాలి.'
    },
    {
      termEn: 'Fresh Fruit vs Dry Fruit Constant Pulp Rule',
      termTe: 'తాజా పండ్లు - ఎండు పండ్లు (గుజ్జు స్థిర నియమం)',
      defEn: 'When fresh fruit dries, water evaporates but the solid PULP weight remains constant: (Pulp % in Fresh) × (Fresh Weight) = (Pulp % in Dry) × (Dry Weight).',
      defTe: 'తాజా పండ్లు ఎండినప్పుడు నీరు ఆవిరవుతుంది కానీ గుజ్జు (Pulp) బరువు మారదు: (తాజా పండ్లలో గుజ్జు % × బరువు) = (ఎండు పండ్లలో గుజ్జు % × బరువు).'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Fraction-Table Speed Simplification',
      nameTe: 'భిన్నాల పట్టిక ఆధారంగా వేగవంతమైన గణన',
      patternEn: 'Find 62.5% of 480 + 14.28% of 350.',
      patternTe: '480 లో 62.5% + 350 లో 14.28% విలువ ఎంత?',
      approachEn: 'Replace 62.5% with 5/8 and 14.28% with 1/7 → (5/8 × 480) + (1/7 × 350) = 300 + 50 = 350.',
      approachTe: '62.5% = 5/8 మరియు 14.28% = 1/7 రాస్తే 300 + 50 = 350.'
    },
    {
      typeNo: 'Type 2',
      nameEn: 'Price Drop & Extra Quantity Purchased',
      nameTe: 'ధర తగ్గుదల వల్ల ఎక్కువ పరిమాణం కొనుగోలు చేసే లెక్కలు',
      patternEn: '20% drop in price gives 5 kg more for ₹600.',
      patternTe: 'ధర 20% తగ్గడం వల్ల ₹600 కు 5 కిలోలు ఎక్కువ వస్తాయి.',
      approachEn: 'New price = (20% of 600) / 5 = 120 / 5 = ₹24/kg.',
      approachTe: 'కొత్త ధర = (600 లో 20%) ÷ 5 = 120 ÷ 5 = ₹24/కిలో.'
    },
    {
      typeNo: 'Type 3',
      nameEn: 'Fresh Fruit vs Dry Fruit Weight',
      nameTe: 'తాజా పండ్ల నుండి లభించే ఎండు పండ్ల బరువు',
      patternEn: 'Fresh grapes contain 80% water and dry grapes contain 10% water. How many kg of dry grapes are obtained from 90 kg of fresh grapes?',
      patternTe: 'తాజా ద్రాక్షలో 80% నీరు, ఎండు ద్రాక్షలో 10% నీరు కలదు. 90 కిలోల తాజా ద్రాక్ష నుండి ఎన్ని కిలోల ఎండు ద్రాక్ష లభిస్తుంది?',
      approachEn: 'Equate pulp %: 20% of 90 = 90% of Dry → Dry = 20 kg!',
      approachTe: 'గుజ్జు శాతాన్ని సమానం చేయండి: 90 × 20% = Dry × 90% → Dry = 20 కిలోలు!'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-2 • Fresh vs Dry Fruit Model',
      qEn: 'Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruits?',
      qTe: 'తాజా పండ్లలో 68% నీరు మరియు ఎండు పండ్లలో 20% నీరు ఉంటుంది. 100 కిలోల తాజా పండ్ల నుండి ఎన్ని కిలోల ఎండు పండ్లు లభిస్తాయి?',
      solEn: 'Step 1: Solid pulp in fresh fruit = 100% - 68% = 32%. Solid pulp in dry fruit = 100% - 20% = 80%.\nStep 2: Equate pulp weight: 32% of 100 kg = 80% of Dry Weight (D).\nStep 3: 32 × 100 = 80 × D → D = 3200 / 80 = 40 kg!',
      solTe: 'సోపానం 1: తాజా పండ్లలో గుజ్జు = 100% - 68% = 32%. ఎండు పండ్లలో గుజ్జు = 100% - 20% = 80%.\nసోపానం 2: గుజ్జు బరువు స్థిరం కాబట్టి: 100 × 32 = D × 80 → D = 3200 / 80 = 40 కిలోలు!',
      shortcutTip: 'Always equate NON-CHANGING part (Pulp % × Weight = Constant)!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'x% of y = y% of x. Key fractions: 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 3/8 = 37.5%, 5/8 = 62.5%, 7/8 = 87.5%.',
      pointTe: 'x% of y = y% of x. ముఖ్య భిన్నాలు: 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 3/8 = 37.5%, 5/8 = 62.5%.'
    },
    {
      pointEn: 'Constant Product Rule: +1/n increase requires -1/(n+1) decrease. Net successive change = (x + y + xy/100)%.',
      pointTe: 'స్థిర లబ్ద నియమం: +1/n పెరిగితే -1/(n+1) తగ్గించాలి. వరుస మార్పు = (x + y + xy/100)%.'
    },
    {
      pointEn: 'Passing Marks: (P₂ - P₁)% = Shortfall Marks + Extra Marks. Venn Diagram: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
      pointTe: 'పాస్ మార్కులు: (P₂ - P₁)% = తక్కువైన మార్కులు + ఎక్కువైన మార్కులు.'
    }
  ]
};

/* ============================================================================
   CHAPTER 4: PROFIT, LOSS & DISCOUNT — COMPLETE CHAPTER (లాభం, నష్టం & రాయితీ)
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-profit-loss'] = {
  id: 'math-profit-loss',
  chapterNo: 4,
  titleEn: 'Chapter 4: Profit, Loss & Discount — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 4: లాభం, నష్టం మరియు రాయితీ (Profit, Loss & Discount) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (3 Questions in Every Shift)',
  readTime: '38 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-profit-loss',

  introEn: `Welcome to Chapter 4: **Profit, Loss & Discount (లాభం, నష్టం మరియు రాయితీ)**. Every RRB NTPC and Group-D paper features 3 direct questions from this chapter—covering Cost Price & Selling Price ratios, Equating Articles ($x\text{ CP} = y\text{ SP}$), Same Selling Price with Equal Profit/Loss %, Dishonest Shopkeeper false weights, Successive Discounts, and the Golden $\text{CP}:\text{MP}$ formula. Study all **8 syllabus sub-topics** below.`,

  introTe: `**అధ్యాయం 4: లాభం, నష్టం మరియు రాయితీ (Profit, Loss & Discount)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి ఎన్‌టిపిసి మరియు గ్రూప్-డి పరీక్షలలో ప్రతి షిఫ్ట్‌లో ఈ అధ్యాయం నుండి **3 ప్రశ్నలు** తప్పనిసరిగా వస్తాయి. ఇందులో కొన్న వెల (CP), అమ్మిన వెల (SP), ప్రకటన వెల (MP), వస్తువుల సంఖ్య ఆధారంగా లాభనష్టాలు, తప్పుడు తూకం (Dishonest Dealer), వరుస రాయితీలు మరియు CP : MP నిష్పత్తి సూత్రాలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '4.1',
      titleEn: 'Basic Terms: Cost Price (CP), Overhead Charges, Selling Price (SP), Profit & Loss',
      titleTe: 'ప్రాథమిక పదాలు: కొన్న వెల (CP), అదనపు ఖర్చులు, అమ్మిన వెల (SP), లాభం & నష్టం',
      conceptEn: `• **Cost Price (CP — కొన్న వెల)**: The price at which an article is purchased. Always treat **$\text{CP} = 100\%$**.
• **Overhead Expenses (అదనపు ఖర్చులు)**: Transport, repair, or installation charges are ALWAYS added to CP to get **Effective Cost Price**.
• **Selling Price (SP — అమ్మిన వెల)**: The price at which the article is sold.
• **Profit (లాభం)**: When $\text{SP} > \text{CP} \Rightarrow \text{Profit} = \text{SP} - \text{CP}$, and $\text{Profit}\% = \frac{\text{Profit}}{\text{CP}} \times 100\%$.
• **Loss (నష్టం)**: When $\text{CP} > \text{SP} \Rightarrow \text{Loss} = \text{CP} - \text{SP}$, and $\text{Loss}\% = \frac{\text{Loss}}{\text{CP}} \times 100\%$.`,
      conceptTe: `• **కొన్న వెల (Cost Price - CP)**: వస్తువును కొనుగోలు చేసిన ధర. దీనిని ఎల్లప్పుడూ **100%** గా తీసుకోవాలి. రవాణా లేదా మరమ్మతు ఖర్చులు ఉంటే వాటిని కొన్న వెల (CP) లోనే కలపాలి.
• **అమ్మిన వెల (Selling Price - SP)**: వస్తువును అమ్మిన ధర.
• **లాభం (Profit) = SP - CP** | **నష్టం (Loss) = CP - SP**. లాభ శాతం లేదా నష్ట శాతం ఎల్లప్పుడూ **కొన్న వెల (CP)** మీదనే లెక్కించాలి!`,
      ruleEn: 'Profit % and Loss % are ALWAYS calculated on Cost Price (CP), never on Selling Price (unless explicitly asked as "% profit on SP").',
      ruleTe: 'లాభ శాతం లేదా నష్ట శాతం ఎల్లప్పుడూ కొన్న వెల (CP) ఆధారంగానే లెక్కించాలి!',
      formula: 'Profit % = [(SP - CP) / CP] × 100 | SP = CP × (100 + Profit%) / 100 | SP = CP × (100 - Loss%) / 100',
      exampleQEn: 'A mechanic buys an old scooter for ₹14,200, spends ₹1,800 on its repairs, and sells it for ₹18,400. Find his profit percentage.',
      exampleQTe: 'ఒక మెకానిక్ పాత స్కూటర్‌ను ₹14,200 కు కొని, మరమ్మతులకు ₹1,800 ఖర్చు చేసి, ₹18,400 కు అమ్మాడు. అతని లాభ శాతం ఎంత?',
      exampleSolEn: 'Step 1: Effective Cost Price (CP) = 14,200 + 1,800 = ₹16,000.\nStep 2: Profit = SP - CP = 18,400 - 16,000 = ₹2,400.\nStep 3: Profit % = (2400 / 16000) × 100% = 15%.',
      exampleSolTe: 'సోపానం 1: మొత్తం కొన్న వెల (CP) = 14,200 + 1,800 = ₹16,000.\nసోపానం 2: లాభం = 18,400 - 16,000 = ₹2,400.\nసోపానం 3: లాభ శాతం = (2400 / 16000) × 100% = 15%.'
    },
    {
      code: '4.2',
      titleEn: 'Equating Quantity Model (CP of x Articles = SP of y Articles)',
      titleTe: 'x వస్తువుల కొన్న వెల = y వస్తువుల అమ్మిన వెల మోడల్',
      conceptEn: `When the **Cost Price of $x$ articles equals the Selling Price of $y$ articles** ($x \times \text{CP} = y \times \text{SP}$):
• Simply flip the coefficients to get the direct ratio:
  $$\frac{\text{CP}}{\text{SP}} = \frac{y}{x} \implies \text{CP} = y \text{ units, and } \text{SP} = x \text{ units!}$$
• Then Profit or Loss $\%$ is:
  $$\text{Profit / Loss } \% = \left( \frac{x - y}{y} \right) \times 100\%$$`,
      conceptTe: `**$x$ వస్తువుల కొన్న వెల (CP) = $y$ వస్తువుల అమ్మిన వెల (SP)** అయినప్పుడు:
• $x \times \text{CP} = y \times \text{SP} \implies \frac{\text{CP}}{\text{SP}} = \frac{y}{x}$.
• అంటే **కొన్న వెల (CP) = $y$ భాగాలు**, **అమ్మిన వెల (SP) = $x$ భాగాలు** అవుతుంది!`,
      ruleEn: 'Do not confuse price with quantity! Write x × CP = y × SP and cross-read CP = y, SP = x.',
      ruleTe: 'x × CP = y × SP అని రాసుకుంటే CP ఎదురుగా ఉన్న y కొన్న వెల, SP ఎదురుగా ఉన్న x అమ్మిన వెల అవుతుంది!',
      formula: 'If x·CP = y·SP → CP : SP = y : x → Profit/Loss % = [(x - y) / y] × 100%',
      exampleQEn: 'If the cost price of 15 tables is equal to the selling price of 12 tables, find the profit percentage.',
      exampleQTe: '15 టేబుళ్ల కొన్న వెల, 12 టేబుళ్ల అమ్మిన వెలకు సమానమైతే లాభ శాతం ఎంత?',
      exampleSolEn: '15 × CP = 12 × SP → CP / SP = 12 / 15 = 4 / 5.\nHere CP = 4 units, SP = 5 units → Profit = 1 unit.\nProfit % = (1 / 4) × 100% = 25%.',
      exampleSolTe: '15 × CP = 12 × SP → CP : SP = 12 : 15 = 4 : 5.\nకొన్న వెల = 4, అమ్మిన వెల = 5 → లాభం = 1 భాగం → లాభ శాతం = (1/4) × 100% = 25%.'
    },
    {
      code: '4.3',
      titleEn: 'Price-Quantity Cross-Multiplication Model (a Items for ₹b vs c Items for ₹d)',
      titleTe: '₹b కి a వస్తువులు కొని, ₹d కి c వస్తువులు అమ్మే మోడల్',
      conceptEn: `When a vendor buys **$a$ items for ₹$b$** and sells **$c$ items for ₹$d$**:
• Write **Quantity (Items)** in the first column and **Price (₹)** in the second column, then cross-multiply:
  - $\text{Cost Price (CP)} = b \times c$
  - $\text{Selling Price (SP)} = a \times d$
•Alternatively, equalize the number of items to $\text{LCM}(a, c)$!`,
      conceptTe: `ఒక వ్యాపారి **₹$b$ లకు $a$ వస్తువులు కొని, ₹$d$ లకు $c$ వస్తువులు అమ్మితే**:
• వస్తువుల సంఖ్యను సమానం చేయడానికి $\text{LCM}(a, c)$ వస్తువులను తీసుకోండి, లేదా అడ్డగుణకారం ద్వారా $\text{CP} = b \times c$ మరియు $\text{SP} = a \times d$ సూత్రం వాడండి!`,
      ruleEn: 'Always equalize the NUMBER OF ARTICLES bought and sold before finding profit or loss!',
      ruleTe: 'కొన్న వస్తువుల సంఖ్యను, అమ్మిన వస్తువుల సంఖ్యను క.సా.గు (LCM) ద్వారా సమానం చేస్తే లెక్క అతి సులభమవుతుంది.',
      formula: 'Buy a for ₹b, Sell c for ₹d → CP = b×c, SP = a×d',
      exampleQEn: 'A fruit seller buys lemons at 6 for ₹5 and sells them at 5 for ₹6. Find his gain percentage.',
      exampleQTe: 'ఒక వ్యాపారి ₹5 లకు 6 నిమ్మకాయల చొప్పున కొని, ₹6 లకు 5 నిమ్మకాయల చొప్పున అమ్మాడు. అతని లాభ శాతం ఎంత?',
      exampleSolEn: 'Cross-multiply:\nCP = 5 × 5 = ₹25.\nSP = 6 × 6 = ₹36.\nProfit = 36 - 25 = ₹11 on CP ₹25 → Profit % = (11 / 25) × 100% = 44%.',
      exampleSolTe: 'అడ్డగుణకారం చేయగా:\nకొన్న వెల (CP) = 5 × 5 = ₹25.\nఅమ్మిన వెల (SP) = 6 × 6 = ₹36.\nలాభం = 36 - 25 = 11 → లాభ శాతం = (11/25) × 100% = 44%.'
    },
    {
      code: '4.4',
      titleEn: 'Same Cost Price vs Same Selling Price (SP₁ = SP₂) for Two Articles',
      titleTe: 'రెండు వస్తువుల కొన్న వెల సమానం (CP₁=CP₂) vs అమ్మిన వెల సమానం (SP₁=SP₂)',
      conceptEn: `Carefully distinguish these two high-frequency RRB cases:
• **Case 1: Same Cost Price ($\text{CP}_1 = \text{CP}_2$)** — If one article is sold at $R\%$ profit and another at $R\%$ loss, there is **NO Profit, NO Loss ($0\%$)**! More generally, Net $\%$ = $\frac{x + y}{2}\%$.
• **Case 2: Same Selling Price ($\text{SP}_1 = \text{SP}_2$)** — If two articles are sold for the **SAME Selling Price**, one at $R\%$ profit and the other at $R\%$ loss, there is **ALWAYS a Net LOSS** equal to:
  $$\text{Net Loss } \% = \left( \frac{R}{10} \right)^2 \% = \frac{R^2}{100}\%$$`,
      conceptTe: `ఈ రెండు సందర్భాల మధ్య తేడాను జాగ్రత్తగా గమనించండి:
• **సందర్భం 1: కొన్న వెల సమానం ($\text{CP}_1 = \text{CP}_2$)** — ఒకదానిపై $R\%$ లాభం, మరొకదానిపై $R\%$ నష్టం వస్తే **లాభం ఉండదు, నష్టం ఉండదు ($0\%$)**!
• **సందర్భం 2: అమ్మిన వెల సమానం ($\text{SP}_1 = \text{SP}_2$)** — రెండు వస్తువులను **ఒకే ధరకు అమ్మి**, ఒకదానిపై $R\%$ లాభం, మరొకదానిపై $R\%$ నష్టం వస్తే **ఎల్లప్పుడూ నష్టమే** వస్తుంది:
  $$\text{నికర నష్ట శాతం} = \frac{R^2}{100}\%$$`,
      ruleEn: 'When SP₁ = SP₂ and Profit% = Loss% = R%, you don\'t even need the selling price value in rupees—the loss % is immediately (R²/100)%!',
      ruleTe: 'అమ్మిన వెలలు సమానంగా ఉండి లాభ శాతం = నష్ట శాతం = R% అయితే, రూపాయల విలువతో సంబంధం లేకుండా నష్ట శాతం = (R²/100)%!',
      formula: 'Same CP: Net % = (P% - L%)/2 | Same SP with +R% and -R%: Always Loss = (R²/100)%',
      exampleQEn: 'A shopkeeper sells two watches for ₹3,960 each. On one he gains 10% and on the other he loses 10%. Find his overall gain or loss percentage.',
      exampleQTe: 'ఒక వ్యాపారి రెండు గడియారాలను ఒక్కొక్కటి ₹3,960 చొప్పున అమ్మాడు. ఒకదానిపై 10% లాభం, మరొకదానిపై 10% నష్టం వచ్చింది. మొత్తం మీద లాభమా? నష్టమా? ఎంత శాతం?',
      exampleSolEn: 'Since SP₁ = SP₂ and R = 10%:\nOverall Loss % = (10)² / 100 = 100 / 100 = 1% Loss.',
      exampleSolTe: 'అమ్మిన వెలలు సమానం మరియు R = 10% కాబట్టి:\nనికర నష్ట శాతం = (10)² / 100 = 1% నష్టం.'
    },
    {
      code: '4.5',
      titleEn: 'Dishonest Shopkeeper & False Weight Problems (తప్పుడు తూకం లెక్కలు)',
      titleTe: 'మోసపూరిత వ్యాపారి మరియు తప్పుడు తూకం లెక్కలు (Dishonest Dealer)',
      conceptEn: `When a dishonest dealer claims to sell at Cost Price (1000 grams) but actually uses a **false weight of $W$ grams** (e.g., 800 g instead of 1000 g):
• Money goes out of his pocket only for **$W$ grams** (so $\text{CP} = W$), while he collects money from the customer for **1000 grams** (so $\text{SP} = 1000$)!
  $$\text{Profit } \% = \left( \frac{\text{Error}}{{\text{True Weight} - \text{Error}}} \right) \times 100\% = \left( \frac{1000 - W}{W} \right) \times 100\%$$`,
      conceptTe: `ఒక వ్యాపారి కొన్న వెలకే అమ్ముతున్నానని చెప్పి, 1 కిలో (1000 గ్రాముల) బదులుగా **$W$ గ్రాముల తప్పుడు తూకం** వాడితే:
• వ్యాపారి చేతి నుండి వెళ్ళే వస్తువు **$W$ గ్రాములు మాత్రమే (కాబట్టి $\text{CP} = W$)**, కానీ కస్టమర్ నుండి వసూలు చేసేది **1000 గ్రాముల డబ్బు ($\text{SP} = 1000$)**!
  $$\text{లాభ శాతం} = \left( \frac{1000 - W}{W} \right) \times 100\%$$`,
      ruleEn: 'Always put the ACTUAL weight given to the customer (False Weight W) in the denominator as CP!',
      ruleTe: 'హారంలో ఎల్లప్పుడూ కస్టమర్‌కు నిజంగా ఇచ్చిన బరువును (తప్పుడు తూకం W) మాత్రమే రాయాలి!',
      formula: 'Profit % = [(True Weight - False Weight) / False Weight] × 100%',
      exampleQEn: 'A dishonest grocer professes to sell sugar at cost price, but uses a weight of 800 grams for 1 kg. Find his actual profit percentage.',
      exampleQTe: 'ఒక వ్యాపారి చక్కెరను కొన్న ధరకే అమ్ముతానని చెప్పి, 1 కిలో (1000 గ్రా.) బదులుగా 800 గ్రాముల రాయిని వాడుతున్నాడు. అతని లాభ శాతం ఎంత?',
      exampleSolEn: 'Here True Weight = 1000 g, False Weight given (CP) = 800 g.\nError (Gain) = 1000 - 800 = 200 g.\nProfit % = (200 / 800) × 100% = (1/4) × 100% = 25%.',
      exampleSolTe: 'ఇచ్చిన బరువు (CP) = 800 గ్రా., వసూలు చేసింది (SP) = 1000 గ్రా.\nలాభం = 200 గ్రా. → లాభ శాతం = (200 / 800) × 100% = 25%.'
    },
    {
      code: '4.6',
      titleEn: 'Difference in Selling Prices (Sold for ₹D More/Less Model)',
      titleTe: 'అమ్మిన వెలల మధ్య భేదం (₹D ఎక్కువకు అమ్మితే వచ్చే లాభం/నష్టం మోడల్)',
      conceptEn: `When an article sold at $x\%$ Loss is instead sold for **₹$D$ more** to get $y\%$ Profit:
• **Loss to Profit (Opposite signs → ADD percentages)**: $(x + y)\% \text{ of CP} = ₹D$.
• **Profit to Profit or Loss to Loss (Same signs → SUBTRACT percentages)**: $|x - y|\% \text{ of CP} = ₹D$.`,
      conceptTe: `ఒక వస్తువును $x\%$ నష్టానికి అమ్మే బదులు **₹$D$ ఎక్కువకు అమ్మితే** $y\%$ లాభం వస్తుందని ఇచ్చినప్పుడు:
• **నష్టం నుండి లాభానికి మారితే (శాతాలను కూడాలి)**: $(x + y)\% = ₹D$.
• **లాభం నుండి లాభానికి (లేదా నష్టం నుండి నష్టానికి) మారితే (శాతాలను తీసివేయాలి)**: $|x - y|\% = ₹D$.`,
      ruleEn: 'Opposite (Loss ↔ Profit) = Add %. Same (Profit ↔ Profit) = Subtract %!',
      ruleTe: 'నష్టం నుండి లాభానికి మారితే శాతాలను కూడాలి; రెండూ లాభాలే అయితే శాతాలను తీసివేయాలి!',
      formula: 'Loss x% to Profit y% for ₹D more → (x + y)% of CP = D',
      exampleQEn: 'An article was sold at a loss of 8%. Had it been sold for ₹120 more, there would have been a profit of 7%. Find the Cost Price.',
      exampleQTe: 'ఒక వస్తువును 8% నష్టానికి అమ్మారు. దానిని ₹120 ఎక్కువకు అమ్మి ఉంటే 7% లాభం వచ్చేది. ఆ వస్తువు కొన్న వెల ఎంత?',
      exampleSolEn: 'From 8% Loss to 7% Profit, total percentage gap = 8% + 7% = 15%.\nGiven: 15% of CP = ₹120 → 1% = ₹8 → CP (100%) = ₹800.',
      exampleSolTe: '8% నష్టం నుండి 7% లాభం అంటే మొత్తం తేడా = 8% + 7% = 15%.\n15% = ₹120 → 1% = ₹8 → కొన్న వెల (100%) = ₹800.'
    },
    {
      code: '4.7',
      titleEn: 'Marked Price (MP), Discount %, Successive Discounts & Free Articles',
      titleTe: 'ప్రకటన వెల (MP), రాయితీ (Discount), వరుస రాయితీలు & ఉచిత వస్తువుల ఆఫర్లు',
      conceptEn: `1. **Discount (రాయితీ / డిస్కౌంట్)** is ALWAYS calculated on **Marked Price (MP)**:
   $$\text{Selling Price (SP)} = \text{MP} \times \left(\frac{100 - \text{Discount}\%}{100}\right)$$
2. **Equivalent Single Discount for two successive discounts $d_1\%$ and $d_2\%$**:
   $$D_{\text{eq}} = \left( d_1 + d_2 - \frac{d_1 \times d_2}{100} \right)\%$$
3. **"Buy $x$ Get $y$ Free" Offer Discount %**:
   $$\text{Discount } \% = \left( \frac{\text{Free Items } (y)}{\text{Total Items Taken Home } (x + y)} \right) \times 100\%$$`,
      conceptTe: `1. **రాయితీ (Discount)** ఎల్లప్పుడూ **ప్రకటన వెల (Marked Price - MP)** మీద లెక్కిస్తారు: $\text{SP} = \text{MP} - \text{Discount}$.
2. **$d_1\%$ మరియు $d_2\%$ రెండు వరుస రాయితీలకు సమానమైన ఒకే రాయితీ**:
   $$D = \left( d_1 + d_2 - \frac{d_1 \cdot d_2}{100} \right)\%$$
3. **"$x$ కొంటే $y$ ఉచితం (Buy x Get y Free)" ఆఫర్‌లో రాయితీ శాతం**:
   $$\text{రాయితీ } \% = \left( \frac{\text{ఉచిత వస్తువులు } y}{\text{మొత్తం వస్తువులు } (x + y)} \right) \times 100\%$$`,
      ruleEn: 'In "Buy 4 Get 1 Free", denominator is TOTAL items (4 + 1 = 5), NOT 4! So Discount % = (1/5) × 100% = 20%.',
      ruleTe: '"4 కొంటే 1 ఉచితం" అన్నప్పుడు హారంలో మొత్తం వస్తువులు (4 + 1 = 5) వేయాలి! కాబట్టి రాయితీ = (1/5) × 100% = 20%.',
      formula: 'Single Discount = d₁ + d₂ - (d₁d₂)/100 | Buy x Get y Free → Discount % = [y / (x + y)] × 100%',
      exampleQEn: 'Find the single discount equivalent to two successive discounts of 20% and 15%. Also find the discount % in "Buy 3 Get 1 Free".',
      exampleQTe: '20% మరియు 15% రెండు వరుస రాయితీలకు సమానమైన ఒకే రాయితీ ఎంత? అలాగే "3 కొంటే 1 ఉచితం" ఆఫర్‌లో రాయితీ శాతం ఎంత?',
      exampleSolEn: 'Part 1: Single Discount = 20 + 15 - (20 × 15)/100 = 35 - 3 = 32%.\nPart 2: Buy 3 Get 1 Free → Free = 1, Total = 3 + 1 = 4 → (1/4) × 100% = 25%.',
      exampleSolTe: 'భాగం 1: ఒకే రాయితీ = 20 + 15 - (20×15)/100 = 35 - 3 = 32%.\nభాగం 2: 3 కొంటే 1 ఉచితం → ఉచితం = 1, మొత్తం = 4 → (1/4) × 100% = 25%.'
    },
    {
      code: '4.8',
      titleEn: 'Golden Relation Between CP and MP: CP / MP = (100 - D%) / (100 + P%)',
      titleTe: 'కొన్న వెల (CP) మరియు ప్రకటన వెల (MP) మధ్య గోల్డెన్ సూత్రం',
      conceptEn: `Since $\text{SP} = \text{CP} \times \frac{100 + P\%}{100}$ and also $\text{SP} = \text{MP} \times \frac{100 - D\%}{100}$, equating both gives the **most powerful formula in Profit & Loss**:
$$\frac{\text{Cost Price (CP)}}{\text{Marked Price (MP)}} = \frac{100 - \text{Discount}\%}{100 + \text{Profit}\%} \quad \left(\text{or } \frac{100 - \text{Discount}\%}{100 - \text{Loss}\%}\right)$$`,
      conceptTe: `ప్రశ్నలో **రాయితీ శాతం (Discount %)** మరియు **లాభ శాతం (Profit %)** ఇచ్చినప్పుడు అమ్మిన వెల (SP) కనుగొనాల్సిన అవసరం లేకుండా నేరుగా ఈ గోల్డెన్ నిష్పత్తి వాడండి:
$$\frac{\text{కొన్న వెల (CP)}}{\text{ప్రకటన వెల (MP)}} = \frac{100 - \text{రాయితీ}\%}{100 + \text{లాభం}\%}$$`,
      ruleEn: 'Use CP : MP = (100 - D%) : (100 + P%) whenever Discount% and Profit% are mentioned together in any RRB question!',
      ruleTe: 'రాయితీ శాతం మరియు లాభ శాతం రెండూ ఇచ్చిన ప్రతి లెక్కలో CP : MP = (100 - D%) : (100 + P%) సూత్రం వాడితే 5 సెకన్లలో జవాబు వస్తుంది!',
      formula: 'CP : MP = (100 - Discount%) : (100 + Profit%)',
      exampleQEn: 'A trader marks his goods at ₹960 and allows a discount of 25%. If he still gains 20%, find the Cost Price of the article.',
      exampleQTe: 'ఒక వ్యాపారి వస్తువు ప్రకటన వెలను ₹960 గా నిర్ణయించి 25% రాయితీ ఇచ్చాడు. అయినప్పటికీ అతనికి 20% లాభం వస్తే ఆ వస్తువు కొన్న వెల ఎంత?',
      exampleSolEn: 'Using CP / MP = (100 - 25) / (100 + 20) = 75 / 120 = 5 / 8.\nGiven MP (8 parts) = ₹960 → 1 part = ₹120.\nTherefore, CP (5 parts) = 5 × 120 = ₹600.',
      exampleSolTe: 'CP : MP = (100 - 25) : (100 + 20) = 75 : 120 = 5 : 8.\nఇక్కడ 8 భాగాలు (MP) = ₹960 → 1 భాగం = ₹120.\nకావున కొన్న వెల (5 భాగాలు) = 5 × 120 = ₹600.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. CP is Base for Profit/Loss; MP is Base for Discount',
      titleTe: '1. లాభనష్టాలకు ఆధారం కొన్న వెల (CP); రాయితీకి ఆధారం ప్రకటన వెల (MP)',
      en: 'Shopkeeper buys at CP, marks up the price to MP, gives a discount on MP, and sells at SP.',
      te: 'వ్యాపారి కొన్న వెల (CP) కు కొని, ధరను పెంచి ప్రకటన వెల (MP) వేస్తాడు. MP మీద రాయితీ ఇచ్చి అమ్మిన వెల (SP) కు అమ్ముతాడు.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Mark-up Percentage (ప్రకటన వెల పెంపు శాతం)',
      termTe: 'ప్రకటన వెల పెంపు శాతం (Mark-up %)',
      defEn: 'Mark-up % = [(MP - CP) / CP] × 100%. If an article is marked M% above CP and sold at D% discount, then Net Profit % = M - D - (M × D)/100.',
      defTe: 'కొన్న వెల కంటే M% ఎక్కువగా ప్రకటన వెల వేసి, D% రాయితీ ఇస్తే: నికర లాభ శాతం = M - D - (M × D)/100.'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Direct CP : MP Ratio Problems',
      nameTe: 'CP : MP నిష్పత్తి లెక్కలు',
      patternEn: 'How much % above CP must a shopkeeper mark his goods so that after 10% discount he gains 26%?',
      patternTe: '10% రాయితీ ఇచ్చిన తర్వాత కూడా 26% లాభం రావాలంటే కొన్న వెల కంటే ఎంత శాతం ఎక్కువగా ప్రకటన వెల నిర్ణయించాలి?',
      approachEn: 'CP : MP = (100 - 10) : (100 + 26) = 90 : 126 = 5 : 7 → Mark-up = (2/5) × 100% = 40% above CP!',
      approachTe: 'CP : MP = 90 : 126 = 5 : 7 → పెంపు శాతం = (2/5) × 100% = 40%.'
    },
    {
      typeNo: 'Type 2',
      nameEn: 'Profit/Loss Equals SP or CP of k Articles',
      nameTe: 'n వస్తువులు అమ్మితే k వస్తువుల అమ్మిన వెలకు సమానమైన లాభం/నష్టం వచ్చే లెక్కలు',
      patternEn: 'By selling 33 meters of cloth, a trader gains the selling price of 11 meters. Find gain %.',
      patternTe: '33 మీటర్ల గుడ్డను అమ్మడం ద్వారా 11 మీటర్ల అమ్మిన వెలకు సమానమైన లాభం వస్తే లాభ శాతం ఎంత?',
      approachEn: 'Let SP of 1m = ₹1 → Total SP = ₹33, Profit = ₹11 → CP = 33 - 11 = ₹22 → Profit % = (11/22)×100% = 50%!',
      approachTe: '1 మీ. SP = ₹1 అనుకుంటే మొత్తం SP = 33, లాభం = 11 → CP = 33 - 11 = 22 → లాభ శాతం = (11/22)×100% = 50%.'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Profit in Terms of SP',
      qEn: 'By selling 45 lemons, a vendor loses a sum equal to the selling price of 5 lemons. Find his loss percentage.',
      qTe: '45 నిమ్మకాయలను అమ్మడం వల్ల ఒక వ్యాపారికి 5 నిమ్మకాయల అమ్మిన వెలకు సమానమైన నష్టం వచ్చింది. అతని నష్ట శాతం ఎంత?',
      solEn: 'Step 1: Let SP of 1 lemon = ₹1. Then SP of 45 lemons = ₹45, and Loss = ₹5.\nStep 2: Since Loss = CP - SP → CP = SP + Loss = 45 + 5 = ₹50.\nStep 3: Loss % = (Loss / CP) × 100% = (5 / 50) × 100% = 10%.',
      solTe: 'సోపానం 1: 1 నిమ్మకాయ అమ్మిన వెల = ₹1 అనుకుంటే, 45 కాయల SP = ₹45 మరియు నష్టం = ₹5.\nసోపానం 2: కొన్న వెల (CP) = SP + నష్టం = 45 + 5 = ₹50.\nసోపానం 3: నష్ట శాతం = (5 / 50) × 100% = 10%.',
      shortcutTip: 'If Selling N items gives Profit of P items\' SP → CP = N - P. If it gives Loss of L items\' SP → CP = N + L!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Profit/Loss % is always on CP; Discount % is always on MP. Golden Ratio: CP : MP = (100 - D%) : (100 + P%).',
      pointTe: 'లాభ/నష్ట శాతం CP మీద, రాయితీ శాతం MP మీద లెక్కిస్తారు. CP : MP = (100 - D%) : (100 + P%).'
    },
    {
      pointEn: 'Same SP with R% profit and R% loss always results in (R²/100)% Loss. False weight W for 1000g gives [(1000-W)/W]×100% profit.',
      pointTe: 'ఒకే అమ్మిన వెలకు R% లాభం, R% నష్టం వస్తే ఎల్లప్పుడూ (R²/100)% నష్టం వస్తుంది.'
    }
  ]
};

/* ============================================================================
   CHAPTER 5: SIMPLE & COMPOUND INTEREST — COMPLETE CHAPTER (బారువడ్డీ & చక్రవడ్డీ)
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-si-ci'] = {
  id: 'math-si-ci',
  chapterNo: 5,
  titleEn: 'Chapter 5: Simple & Compound Interest — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 5: బారువడ్డీ మరియు చక్రవడ్డీ (SI & CI) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (2–3 Questions in Every Shift)',
  readTime: '38 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-si-ci',

  introEn: `Welcome to Chapter 5: **Simple Interest (SI) and Compound Interest (CI)**. Every RRB NTPC and Group-D shift includes 2 to 3 questions from SI and CI—testing effective percentage rates, money multiplying in $T$ years, 2-year and 3-year CI-SI difference formulas, half-yearly/quarterly compounding, and annual installments. Master all **8 syllabus sub-topics** below without lengthy calculations.`,

  introTe: `**అధ్యాయం 5: బారువడ్డీ (SI) మరియు చక్రవడ్డీ (CI)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి పరీక్షలలో ప్రతి షిఫ్ట్‌లో 2 నుండి 3 ప్రశ్నలు ఈ అధ్యాయం నుండి వస్తాయి. ఇందులో బారువడ్డీ సూత్రాలు, అసలు $n$ రెట్లు అవడం, చక్రవడ్డీ ట్రీ/నిష్పత్తి పద్ధతి, 2 మరియు 3 సంవత్సరాల చక్రవడ్డీ-బారువడ్డీ భేదం, అర్ధ సంవత్సర/త్రైమాసిక వడ్డీ మరియు వాయిదాల లెక్కలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '5.1',
      titleEn: 'Simple Interest Fundamentals (SI = P·T·R / 100 & Effective Rate T·R%)',
      titleTe: 'బారువడ్డీ ప్రాథమిక సూత్రాలు (SI = PTR / 100 మరియు ప్రభావవంతమైన శాతం TR%)',
      conceptEn: `• **Principal (P — అసలు)**: The sum of money borrowed or invested (Always treated as **$100\%$**).
• **Simple Interest (SI — బారువడ్డీ)**: Interest calculated ONLY on the original Principal every year:
  $$\text{SI} = \frac{P \times T \times R}{100} \quad \text{or simply} \quad \text{SI}\% = (T \times R)\% \text{ of } P$$
• **Amount (A — మొత్తం)**: $\text{Amount} = \text{Principal} + \text{SI} = (100 + T \cdot R)\% \text{ of } P$.`,
      conceptTe: `• **అసలు (Principal - P)**: అప్పుగా తీసుకున్న సొమ్ము (ఎల్లప్పుడూ **100%**).
• **బారువడ్డీ (SI)**: ప్రతి సంవత్సరం కేవలం అసలు మీద మాత్రమే లెక్కించే వడ్డీ. బారువడ్డీ శాతం = **$(T \times R)\%$**.
• **మొత్తం (Amount - A)** = అసలు + వడ్డీ = **$(100 + TR)\%$**.`,
      ruleEn: 'If time is given in months, divide by 12 (e.g., 8 months = 8/12 = 2/3 year). If given in days, divide by 365 (73 days = 1/5 yr, 146 days = 2/5 yr, 219 days = 3/5 yr).',
      ruleTe: 'కాలం నెలల్లో ఇస్తే 12 చే భాగించాలి. రోజుల్లో ఇస్తే 365 చే భాగించాలి (73 రోజులు = 1/5 సం., 146 రోజులు = 2/5 సం.).',
      formula: 'SI = (P × T × R) / 100 | Amount A = P × [1 + (T × R)/100]',
      exampleQEn: 'A sum of money lent at 12% per annum simple interest amounts to ₹6,800 in 3 years. Find the Principal.',
      exampleQTe: 'కొంత అసలును సంవత్సరానికి 12% బారువడ్డీ రేటుతో అప్పుగా ఇస్తే 3 సంవత్సరాలలో ₹6,800 మొత్తం అయింది. అయిన అసలు ఎంత?',
      exampleSolEn: 'Step 1: Effective SI % for 3 years at 12% = 3 × 12% = 36%.\nStep 2: Amount % = 100% + 36% = 136% = ₹6,800.\nStep 3: 1% = 6800 / 136 = ₹50 → Principal (100%) = ₹5,000.',
      exampleSolTe: 'సోపానం 1: 3 ఏళ్లకు 12% చొప్పున వడ్డీ = 3 × 12% = 36%.\nసోపానం 2: మొత్తం = 100% + 36% = 136% = ₹6,800.\nసోపానం 3: 1% = ₹50 → అసలు (100%) = ₹5,000.'
    },
    {
      code: '5.2',
      titleEn: 'Sum Becoming n Times in Simple Interest & Two-Time-Period Amounts',
      titleTe: 'బారువడ్డీలో అసలు n రెట్లు అవడం & రెండు వేర్వేరు సంవత్సరాల మొత్తాలు',
      conceptEn: `1. **When a sum becomes $n$ times itself in $T$ years at $R\%$ SI**:
   • Principal = $1$, Amount = $n \implies \text{SI} = (n - 1)$:
     $$R \times T = (n - 1) \times 100 \quad \text{and} \quad \frac{n_1 - 1}{T_1} = \frac{n_2 - 1}{T_2}$$
2. **When a sum amounts to $A_1$ in $T_1$ years and $A_2$ in $T_2$ years at SI**:
   • Interest for $(T_2 - T_1)$ years = $A_2 - A_1 \implies 1\text{ Year SI} = \frac{A_2 - A_1}{T_2 - T_1}$.
   • Subtract $T_1$ years' SI from $A_1$ to get Principal $P$!`,
      conceptTe: `1. **బారువడ్డీలో అసలు $T$ ఏళ్లలో $n$ రెట్లు అయితే**:
   $$R \times T = (n - 1) \times 100 \quad \text{మరియు} \quad \frac{n_1 - 1}{T_1} = \frac{n_2 - 1}{T_2}$$
2. **కొంత అసలు $T_1$ ఏళ్లలో $A_1$ గాను, $T_2$ ఏళ్లలో $A_2$ గాను మారితే**:
   • $(T_2 - T_1)$ సంవత్సరాల వడ్డీ = $A_2 - A_1$. దీని నుండి 1 సంవత్సరం వడ్డీ కనుగొని $A_1$ నుండి తీసివేస్తే అసలు $P$ వస్తుంది!`,
      ruleEn: 'Never confuse the SI n-times formula [(n₁ - 1)/T₁ = (n₂ - 1)/T₂] with the CI n-times power rule!',
      ruleTe: 'బారువడ్డీలో (n - 1) సూత్రం వాడాలి; చక్రవడ్డీలో ఘాతాల (Powers) సూత్రం వాడాలి!',
      formula: 'SI n-times: (n₁ - 1) / T₁ = (n₂ - 1) / T₂ | R = [(n - 1) / T] × 100%',
      exampleQEn: 'A sum of money doubles itself in 8 years at Simple Interest. In how many years will it become 4 times itself at the same rate?',
      exampleQTe: 'కొంత అసలు బారువడ్డీతో 8 సంవత్సరాలలో రెట్టింపు (2 రెట్లు) అవుతుంది. అదే వడ్డీ రేటుతో ఎన్ని సంవత్సరాలలో 4 రెట్లు అవుతుంది?',
      exampleSolEn: 'Using (n₁ - 1)/T₁ = (n₂ - 1)/T₂ with n₁ = 2, T₁ = 8, n₂ = 4:\n(2 - 1) / 8 = (4 - 1) / T₂ → 1 / 8 = 3 / T₂ → T₂ = 24 years.',
      exampleSolTe: '(n₁ - 1)/T₁ = (n₂ - 1)/T₂ సూత్రం ప్రకారం:\n(2 - 1)/8 = (4 - 1)/T₂ → 1/8 = 3/T₂ → T₂ = 24 సంవత్సరాలు.'
    },
    {
      code: '5.3',
      titleEn: 'Compound Interest Fundamentals (Ratio Method & 2:1 / 3:3:1 Tree Rule)',
      titleTe: 'చక్రవడ్డీ ప్రాథమిక భావనలు (నిష్పత్తి పద్ధతి మరియు 2:1 / 3:3:1 గోల్డెన్ రూల్)',
      conceptEn: `In **Compound Interest (CI)**, interest of each year is added to the principal for the next year:
$$A = P \left(1 + \frac{R}{100}\right)^n \quad \text{and} \quad \text{CI} = A - P$$
• **Golden Multiplier Ratio Rule**:
  - **For 2 Years**: Multiply stepwise interest by **$2 : 1$** (or Effective CI% = $2R + \frac{R^2}{100}\%$).
  - **For 3 Years**: Multiply stepwise interest by **$3 : 3 : 1$**.
  - **For 4 Years**: Multiply stepwise interest by **$4 : 6 : 4 : 1$**.`,
      conceptTe: `**చక్రవడ్డీ (CI)** లో ప్రతి సంవత్సరం వచ్చిన వడ్డీని అసలుకు కలిపి, ఆ మొత్తంపై తర్వాతి సంవత్సరం వడ్డీ లెక్కిస్తారు.
• **గోల్డెన్ నిష్పత్తి పద్ధతి**:
  - **2 సంవత్సరాలకు**: **$2 : 1$** నిష్పత్తి (లేదా నికర వడ్డీ శాతం = $2R + \frac{R^2}{100}\%$).
  - **3 సంవత్సరాలకు**: **$3 : 3 : 1$** నిష్పత్తి.
  - **4 సంవత్సరాలకు**: **$4 : 6 : 4 : 1$** నిష్పత్తి.`,
      ruleEn: 'Memorize standard 2-year & 3-year CI rates: At 10%, 2-yr CI = 21%, 3-yr CI = 33.1%. At 5%, 2-yr CI = 10.25%, 3-yr CI = 15.7625%.',
      ruleTe: '10% రేటు వద్ద 2 ఏళ్ల చక్రవడ్డీ = 21%, 3 ఏళ్ల చక్రవడ్డీ = 33.1%. 5% రేటు వద్ద 2 ఏళ్ల చక్రవడ్డీ = 10.25%.',
      formula: 'A = P(1 + R/100)ⁿ | 2-Yr Effective CI% = 2R + R²/100 | 3-Yr Multiplier = 3 : 3 : 1',
      exampleQEn: 'Find the Compound Interest on ₹20,000 at 10% per annum for 3 years.',
      exampleQTe: '₹20,000 అసలుపై సంవత్సరానికి 10% చొప్పున 3 సంవత్సరాలకు అయ్యే చక్రవడ్డీ ఎంత?',
      exampleSolEn: 'Method 1 (Effective %): For 3 years at 10%, CI = 33.1% of 20,000 = ₹6,620.\nMethod 2 (3:3:1 Rule): 10% of 20,000 = 2000; 10% of 2000 = 200; 10% of 200 = 20.\nCI = 3(2000) + 3(200) + 1(20) = 6000 + 600 + 20 = ₹6,620.',
      exampleSolTe: '3 : 3 : 1 నిష్పత్తి ప్రకారం: 20,000 లో 10% = 2000; 2000 లో 10% = 200; 200 లో 10% = 20.\nచక్రవడ్డీ = 3(2000) + 3(200) + 1(20) = ₹6,620.'
    },
    {
      code: '5.4',
      titleEn: 'Half-Yearly, Quarterly & 8-Monthly Compounding Rules',
      titleTe: 'అర్ధ సంవత్సర (Half-Yearly) మరియు త్రైమాసిక (Quarterly) చక్రవడ్డీ నియమాలు',
      conceptEn: `When interest is compounded more than once a year:
1. **Half-Yearly (Every 6 Months)**:
   • New Rate = **$\frac{R}{2}\%$** per half-year  |  New Time Cycles ($n$) = **$2T$** (Number of 6-month periods).
2. **Quarterly (Every 3 Months)**:
   • New Rate = **$\frac{R}{4}\%$** per quarter  |  New Time Cycles ($n$) = **$4T$** (Number of 3-month periods).
3. **8-Monthly Compounding**:
   • New Rate = **$R \times \frac{8}{12} = \frac{2}{3}R\%$**  |  Time Cycles = Total Months $\div 8$.`,
      conceptTe: `వడ్డీని సంవత్సరానికి ఒకసారి కాకుండా అర్ధ సంవత్సరానికి లేదా త్రైమాసికానికి లెక్కించినప్పుడు:
1. **అర్ధ సంవత్సరానికి ఒకసారి (Half-Yearly — 6 నెలలకు)**: వడ్డీ రేటు సగం అవుతుంది (**$R/2\%$**), కాలం రెట్టింపు అవుతుంది (**$2T$ అర్ధ సంవత్సరాలు**).
2. **త్రైమాసికానికి ఒకసారి (Quarterly — 3 నెలలకు)**: వడ్డీ రేటు నాలుగవ వంతు అవుతుంది (**$R/4\%$**), కాలం 4 రెట్లు అవుతుంది (**$4T$ త్రైమాసికాలు**).`,
      ruleEn: 'Example: 20% p.a. for 1.5 years compounded half-yearly is identical to 10% rate for 3 cycles (33.1% effective CI)!',
      ruleTe: 'ఉదాహరణకు 20% వార్షిక రేటుతో 1.5 సంవత్సరాలకు అర్ధ సంవత్సర వడ్డీ అంటే: 10% రేటుతో 3 విడతలు (33.1% వడ్డీ) అని అర్థం!',
      formula: 'Half-Yearly: Rate = R/2, Cycles = 2T | Quarterly: Rate = R/4, Cycles = 4T',
      exampleQEn: 'Find the compound interest on ₹16,000 at 20% per annum for 9 months, compounded quarterly.',
      exampleQTe: '₹16,000 అసలుపై సంవత్సరానికి 20% వడ్డీ రేటుతో 9 నెలలకు త్రైమాసిక పద్ధతిలో (Quarterly) చక్రవడ్డీ ఎంత?',
      exampleSolEn: 'Step 1: Quarterly Rate = 20% ÷ 4 = 5% per quarter.\nStep 2: In 9 months, number of quarters (3-month periods) = 9 ÷ 3 = 3 cycles.\nStep 3: Using 3:3:1 at 5% on ₹16,000:\n5% of 16,000 = 800; 5% of 800 = 40; 5% of 40 = 2.\nCI = 3(800) + 3(40) + 1(2) = 2400 + 120 + 2 = ₹2,522.',
      exampleSolTe: 'సోపానం 1: త్రైమాసిక రేటు = 20% ÷ 4 = 5%. 9 నెలలలో 3 త్రైమాసికాలు (n = 3) ఉంటాయి.\nసోపానం 2: 3:3:1 నిష్పత్తి ప్రకారం: 16,000 లో 5% = 800; 800 లో 5% = 40; 40 లో 5% = 2.\nచక్రవడ్డీ = 3(800) + 3(40) + 1(2) = ₹2,522.'
    },
    {
      code: '5.5',
      titleEn: 'Difference Between CI and SI for 2 Years and 3 Years',
      titleTe: '2 సంవత్సరాలు మరియు 3 సంవత్సరాలకు చక్రవడ్డీ - బారువడ్డీల మధ్య భేదం',
      conceptEn: `The most repeated formula in RRB NTPC and Group-D:
1. **For 2 Years ($D_2 = \text{CI}_2 - \text{SI}_2$)**:
   $$D_2 = P \times \left( \frac{R}{100} \right)^2 \quad \text{and} \quad \frac{D_2}{\text{SI}_2} = \frac{R}{200}$$
2. **For 3 Years ($D_3 = \text{CI}_3 - \text{SI}_3$)**:
   $$D_3 = P \times \left( \frac{R}{100} \right)^2 \times \left( \frac{300 + R}{100} \right)$$
   Also notice: **$\frac{D_3}{D_2} = \frac{300 + R}{100} = 3 + \frac{R}{100}$**!`,
      conceptTe: `ఆర్‌ఆర్‌బి పరీక్షలలో అత్యధిక సార్లు అడిగే సూత్రాలు:
1. **2 సంవత్సరాలకు చక్రవడ్డీ - బారువడ్డీ భేదం ($D_2$)**:
   $$D_2 = P \times \left( \frac{R}{100} \right)^2$$
2. **3 సంవత్సరాలకు చక్రవడ్డీ - బారువడ్డీ భేదం ($D_3$)**:
   $$D_3 = P \times \left( \frac{R}{100} \right)^2 \times \left( \frac{300 + R}{100} \right)$$`,
      ruleEn: 'For 1st year alone, Simple Interest and Compound Interest (compounded annually) are ALWAYS EQUAL!',
      ruleTe: 'మొదటి 1 సంవత్సరానికి బారువడ్డీ మరియు వార్షిక చక్రవడ్డీ ఎల్లప్పుడూ సమానంగా ఉంటాయి!',
      formula: '2-Yr Diff D₂ = P(R/100)² | 3-Yr Diff D₃ = P(R/100)²[(300+R)/100] | D₃ / D₂ = (300 + R) / 100',
      exampleQEn: 'The difference between CI and SI on a certain sum at 10% per annum for 3 years is ₹155. Find the Principal.',
      exampleQTe: 'కొంత అసలుపై 10% వార్షిక వడ్డీ రేటుతో 3 సంవత్సరాలకు చక్రవడ్డీ మరియు బారువడ్డీల మధ్య భేదం ₹155. అయిన అసలు ఎంత?',
      exampleSolEn: 'At 10% for 3 years, SI = 30% and CI = 33.1% → Difference = 3.1% of P.\nGiven: 3.1% of P = ₹155 → 1% = 155 / 3.1 = ₹50 → Principal (100%) = ₹5,000.',
      exampleSolTe: '10% రేటు వద్ద 3 ఏళ్లకు SI = 30%, CI = 33.1% → భేదం = 3.1%.\n3.1% = ₹155 → 1% = ₹50 → అసలు (100%) = ₹5,000.'
    },
    {
      code: '5.6',
      titleEn: 'Sum Becoming n Times in Compound Interest & Consecutive Year Amounts',
      titleTe: 'చక్రవడ్డీలో అసలు n రెట్లు అవడం & వరుస సంవత్సరాల మొత్తాల నియమం',
      conceptEn: `1. **CI Power-Multiplication Rule**:
   • If a sum becomes **$a$ times** in **$T$ years** at CI, then it will become **$a^k$ times** in **$k \times T$ years**!
   • Example: If a sum doubles ($2^1$) in 5 years at CI, it becomes $8$ times ($2^3$) in $3 \times 5 = 15$ years!
2. **Consecutive Years Amount Rule**:
   • If Amount in $n$ years is $A_1$ and in $(n+1)$ years is $A_2$, then:
     $$\text{Rate } R\% = \left( \frac{A_2 - A_1}{A_1} \right) \times 100\%$$`,
      conceptTe: `1. **చక్రవడ్డీ ఘాత నియమం**:
   • చక్రవడ్డీలో కొంత అసలు $T$ సంవత్సరాలలో **$a$ రెట్లు** అయితే, అది **$a^k$ రెట్లు** అవడానికి పట్టే సమయం = **$k \times T$ సంవత్సరాలు**!
2. **వరుస సంవత్సరాల మొత్తాలు ($A_1, A_2$) ఇచ్చినప్పుడు వడ్డీ రేటు**:
   $$R\% = \left( \frac{A_2 - A_1}{A_1} \right) \times 100\%$$`,
      ruleEn: 'In CI, equal time intervals have equal MULTIPLYING RATIOS! If P becomes ₹4,500 in 2 yrs and ₹6,750 in 4 yrs, then P = (4500 × 4500) / 6750 = ₹3,000!',
      ruleTe: 'చక్రవడ్డీలో సమాన కాల వ్యవధులలో మొత్తాల నిష్పత్తి సమానంగా ఉంటుంది: P / A₁ = A₁ / A₂ → P = (A₁)² / A₂!',
      formula: 'CI: a times in T yrs → aᵏ times in (k × T) yrs | Equal intervals T and 2T: Principal P = (A₁)² / A₂',
      exampleQEn: 'A sum of money triples (becomes 3 times) itself in 4 years at Compound Interest. In how many years will it become 27 times itself?',
      exampleQTe: 'కొంత అసలు చక్రవడ్డీతో 4 సంవత్సరాలలో 3 రెట్లు అవుతుంది. అదే రేటుతో ఎన్ని సంవత్సరాలలో 27 రెట్లు అవుతుంది?',
      exampleSolEn: 'Step 1: Write 27 as a power of 3 → 27 = 3³ (so power k = 3).\nStep 2: Required Time = k × T = 3 × 4 = 12 years.',
      exampleSolTe: 'సోపానం 1: 27 ని 3 యొక్క ఘాతంగా రాయండి → 27 = 3³ (ఘాతం k = 3).\nసోపానం 2: కావలసిన సమయం = 3 × 4 = 12 సంవత్సరాలు.'
    },
    {
      code: '5.7',
      titleEn: 'Finding Rate (R%) When Ratio of Principal to Amount is Given',
      titleTe: 'అసలు మరియు మొత్తాల నిష్పత్తి ఇచ్చినప్పుడు చక్రవడ్డీ రేటు కనుగొనుట',
      conceptEn: `If a sum $P$ becomes $A$ in $n$ years at CI, reduce the ratio $P : A$ to simplest form and take the **$n$-th root** (Square root for 2 years, Cube root for 3 years):
$$\sqrt[n]{P} : \sqrt[n]{A} = x : y \implies \text{Rate } R\% = \left( \frac{y - x}{x} \right) \times 100\%$$`,
      conceptTe: `అసలు $P$ మరియు మొత్తం $A$ ఇచ్చినప్పుడు, $P : A$ ని కనిష్ట నిష్పత్తిలో రాసి, **2 ఏళ్లైతే వర్గమూలం ($\sqrt{}$)**, **3 ఏళ్లైతే ఘనమూలం ($\sqrt[3]{}$)** కనుగొనాలి!`,
      ruleEn: '2 Years → Take Square Root (√). 3 Years → Take Cube Root (∛) of simplified P : A ratio!',
      ruleTe: '2 సంవత్సరాలైతే వర్గమూలం, 3 సంవత్సరాలైతే ఘనమూలం తీసుకుంటే 1 సంవత్సరం నిష్పత్తి నేరుగా వస్తుంది!',
      formula: 'For n years: 1-Yr Ratio = ⁿ√P : ⁿ√A',
      exampleQEn: 'At what rate percent per annum of compound interest will ₹2,000 amount to ₹2,662 in 3 years?',
      exampleQTe: 'సంవత్సరానికి ఎంత చక్రవడ్డీ రేటుతో ₹2,000 అసలు 3 సంవత్సరాలలో ₹2,662 మొత్తం అవుతుంది?',
      exampleSolEn: 'Step 1: Simplify P : A = 2000 : 2662 (divide by 2) = 1000 : 1331.\nStep 2: Since time = 3 years, take Cube Root:\n∛1000 : ∛1331 = 10 : 11.\nStep 3: Rate R% = [(11 - 10) / 10] × 100% = 10% p.a.',
      exampleSolTe: 'సోపానం 1: P : A = 2000 : 2662 = 1000 : 1331.\nసోపానం 2: 3 ఏళ్లు కాబట్టి ఘనమూలం తీసుకోగా: ∛1000 : ∛1331 = 10 : 11.\nసోపానం 3: వడ్డీ రేటు = (1/10) × 100% = 10%.'
    },
    {
      code: '5.8',
      titleEn: 'Equal Annual Installments in Simple & Compound Interest',
      titleTe: 'బారువడ్డీ మరియు చక్రవడ్డీలో సమాన వార్షిక వాయిదాల లెక్కలు (Installments)',
      conceptEn: `1. **Compound Interest Equal Installment ($I$) for 2 Years**:
   • If Rate $R\%$ gives fraction $1\text{-yr ratio } = a : b$:
     - 1st Year: Principal $= a$, Installment $= b$ (multiply by $b \rightarrow ab : b^2$)
     - 2nd Year: Principal $= a^2$, Installment $= b^2$
     - **Total Principal Borrowed $= a(a + b)$ parts**, and **Each Installment $= b^2$ parts**!
2. **Simple Interest Debt Due in $T$ Years**:
   • Take each annual installment $= 100$ units. Total Debt cleared $= 100T + R \times [0 + 1 + 2 + \dots + (T-1)]$.`,
      conceptTe: `1. **చక్రవడ్డీలో 2 సమాన వాయిదాల షార్ట్‌కట్**:
   • వడ్డీ రేటు భిన్నం నుండి 1వ ఏడాది నిష్పత్తి $a : b$ అయితే:
     - **మొత్తం అప్పు (Principal) = $a(a + b)$ భాగాలు**
     - **ప్రతి వాయిదా (Installment) = $b^2$ భాగాలు**!`,
      ruleEn: 'In CI installment problems, equalize the installment side to b² so you can add the principal parts directly!',
      ruleTe: 'చక్రవడ్డీ వాయిదాల లెక్కలలో వాయిదా భాగాలను b² కు సమానం చేస్తే 10 సెకన్లలో జవాబు వస్తుంది!',
      formula: '2-Yr CI Installment (Ratio a:b) → Total Loan P = a(a+b) parts, Each Installment I = b² parts',
      exampleQEn: 'A loan of ₹8,400 is to be paid back in 2 equal annual installments at 10% p.a. compound interest. Find the value of each installment.',
      exampleQTe: '₹8,400 అప్పును 10% వార్షిక చక్రవడ్డీ రేటుతో 2 సమాన వార్షిక వాయిదాలలో చెల్లించాలి. అయిన ఒక్కొక్క వాయిదా విలువ ఎంత?',
      exampleSolEn: 'Step 1: 10% = 1/10 → Ratio a : b = 10 : 11.\nStep 2: Yr-1 = 10 : 11 (×11 → 110 : 121). Yr-2 = 10² : 11² = 100 : 121.\nStep 3: Total Principal = 110 + 100 = 210 parts = ₹8,400 → 1 part = ₹40.\nEach Installment (121 parts) = 121 × 40 = ₹4,840.',
      exampleSolTe: 'సోపానం 1: 10% = 1/10 → a : b = 10 : 11.\nసోపానం 2: మొత్తం అప్పు = 10(10 + 11) = 210 భాగాలు = ₹8,400 → 1 భాగం = ₹40.\nసోపానం 3: ప్రతి వాయిదా (11² = 121 భాగాలు) = 121 × 40 = ₹4,840.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Why CI is Greater than SI from Year 2 Onwards',
      titleTe: '1. రెండవ సంవత్సరం నుండి బారువడ్డీ కంటే చక్రవడ్డీ ఎందుకు ఎక్కువగా ఉంటుంది?',
      en: 'In Year 1, SI = CI. In Year 2, CI earns extra interest on Year 1\'s interest: Extra = R% of (Year 1 SI).',
      te: 'మొదటి ఏడాది SI మరియు CI సమానం. 2వ ఏడాదిలో 1వ ఏడాది వడ్డీ మీద అదనపు వడ్డీ రావడం వల్ల చక్రవడ్డీ పెరుగుతుంది.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Given 2-Year SI and 2-Year CI → Finding Rate R%',
      termTe: '2 ఏళ్ల బారువడ్డీ మరియు చక్రవడ్డీ ఇచ్చినప్పుడు వడ్డీ రేటు కనుగొనుట',
      defEn: 'If 2-year SI and 2-year CI are given: 1-year SI = (2-yr SI)/2, and Difference D = CI - SI. Then Rate R% = (D / 1-yr SI) × 100%!',
      defTe: '2 ఏళ్ల SI మరియు CI ఇస్తే: 1 ఏడాది SI = SI/2. వడ్డీ రేటు R% = [(CI - SI) / (1 ఏడాది SI)] × 100%!'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Finding R% and P from 2-Year SI & CI',
      nameTe: '2 సంవత్సరాల SI మరియు CI నుండి వడ్డీ రేటు మరియు అసలు కనుగొనుట',
      patternEn: 'For 2 years, SI is ₹400 and CI is ₹420. Find Rate R% and Principal P.',
      patternTe: '2 సంవత్సరాలకు బారువడ్డీ ₹400 మరియు చక్రవడ్డీ ₹420 అయిన వడ్డీ రేటు మరియు అసలు ఎంత?',
      approachEn: '1-yr SI = ₹200. Extra ₹20 is interest on ₹200 → R = (20/200)×100 = 10%. Since 10% of P = 200 → P = ₹2,000!',
      approachTe: '1 ఏడాది వడ్డీ = ₹200. భేదం ₹20 అనేది ₹200 పై వచ్చిన వడ్డీ → R = (20/200)×100 = 10%, అసలు = ₹2,000!'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-2 • Equal Intervals CI Model',
      qEn: 'A sum of money invested at compound interest amounts to ₹4,800 in 4 years and ₹6,000 in 8 years. Find the Principal and the amount after 12 years.',
      qTe: 'కొంత అసలు చక్రవడ్డీతో 4 సంవత్సరాలలో ₹4,800 మరియు 8 సంవత్సరాలలో ₹6,000 అవుతుంది. అయిన అసలు మరియు 12 సంవత్సరాల తర్వాత అయ్యే మొత్తం ఎంత?',
      solEn: 'Step 1: Multiplier in every 4-year block = 6000 / 4800 = 5 / 4.\nStep 2: Principal P × (5/4) = 4800 → P = 4800 × (4/5) = ₹3,840.\nStep 3: Amount after 12 years = 6000 × (5/4) = ₹7,500.',
      solTe: 'సోపానం 1: ప్రతి 4 ఏళ్లకు పెరిగే నిష్పత్తి = 6000 / 4800 = 5/4.\nసోపానం 2: అసలు P = 4800 × (4/5) = ₹3,840.\nసోపానం 3: 12 ఏళ్ల తర్వాత మొత్తం = 6000 × (5/4) = ₹7,500.',
      shortcutTip: 'In equal time steps (0 → 4 → 8 → 12 yrs), amounts form a Geometric Progression!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'SI = PTR/100. Money becoming n times at SI: (n₁ - 1)/T₁ = (n₂ - 1)/T₂. At CI: a times in T yrs → aᵏ times in k·T yrs.',
      pointTe: 'బారువడ్డీలో (n₁-1)/T₁ = (n₂-1)/T₂. చక్రవడ్డీలో T ఏళ్లలో a రెట్లు అయితే k·T ఏళ్లలో aᵏ రెట్లు అవుతుంది.'
    },
    {
      pointEn: '2-Yr CI-SI Diff = P(R/100)². 3-Yr CI-SI Diff = P(R/100)²[(300+R)/100]. 3-Yr CI multiplier = 3 : 3 : 1.',
      pointTe: '2 ఏళ్ల భేదం = P(R/100)². 3 ఏళ్ల భేదం = P(R/100)²[(300+R)/100].'
    }
  ]
};

/* ============================================================================
   CHAPTER 6: RATIO, PROPORTION, AGES & PARTNERSHIP — COMPLETE CHAPTER
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-ratio-proportion'] = {
  id: 'math-ratio-proportion',
  chapterNo: 6,
  titleEn: 'Chapter 6: Ratio, Proportion, Ages & Partnership — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 6: నిష్పత్తి, అనుపాతం, వయస్సులు & భాగస్వామ్యం — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (2–3 Questions in Every Shift)',
  readTime: '36 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-ratio-proportion',

  introEn: `Welcome to Chapter 6: **Ratio, Proportion, Ages, Partnership & Mixtures**. In RRB NTPC and Group-D exams, 2 to 3 questions appear in every shift from Combining Ratios, Mean/Third/Fourth Proportionals, Coins in a Bag, Problems on Ages, Partnership Profit Sharing, and Mixture Replacement. Read all **8 syllabus sub-topics** below.`,

  introTe: `**అధ్యాయం 6: నిష్పత్తి, అనుపాతం, వయస్సులు మరియు భాగస్వామ్యం** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి పరీక్షలలో ప్రతి షిఫ్ట్‌లో ఈ అధ్యాయం నుండి 2 నుండి 3 ప్రశ్నలు వస్తాయి. ఇందులో సంయుక్త నిష్పత్తులు, మధ్యమ/తృతీయ/చతుర్థ అనుపాతాలు, సంచిలో నాణేల లెక్కలు, వయస్సుల లెక్కలు, భాగస్వామ్యం మరియు మిశ్రమాల నియమాలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '6.1',
      titleEn: 'Types of Ratios (Duplicate, Sub-Duplicate, Triplicate, Compound & Inverse)',
      titleTe: 'నిష్పత్తుల రకాలు (వర్గ, వర్గమూల, ఘన, ఘనమూల, సంయుక్త మరియు విలోమ నిష్పత్తులు)',
      conceptEn: `For a given ratio **$a : b$**:
1. **Duplicate Ratio (వర్గ నిష్పత్తి)**: **$a^2 : b^2$** (e.g., for $3:4 \rightarrow 9:16$).
2. **Sub-duplicate Ratio (వర్గమూల నిష్పత్తి)**: **$\sqrt{a} : \sqrt{b}$** (e.g., for $16:25 \rightarrow 4:5$).
3. **Triplicate Ratio (ఘన నిష్పత్తి)**: **$a^3 : b^3$** (e.g., for $2:3 \rightarrow 8:27$).
4. **Sub-triplicate Ratio (ఘనమూల నిష్పత్తి)**: **$\sqrt[3]{a} : \sqrt[3]{b}$** (e.g., for $27:64 \rightarrow 3:4$).
5. **Compound Ratio (సంయుక్త నిష్పత్తి)** of $(a:b)$ and $(c:d)$: **$(a \times c) : (b \times d)$**.
6. **Inverse / Reciprocal Ratio (విలోమ నిష్పత్తి)** of $a : b : c$: **$\frac{1}{a} : \frac{1}{b} : \frac{1}{c} = bc : ac : ab$**.`,
      conceptTe: `ఇచ్చిన నిష్పత్తి **$a : b$** కి వివిధ రూపాలు:
1. **వర్గ నిష్పత్తి (Duplicate Ratio)**: **$a^2 : b^2$**
2. **వర్గమూల నిష్పత్తి (Sub-duplicate Ratio)**: **$\sqrt{a} : \sqrt{b}$**
3. **ఘన నిష్పత్తి (Triplicate Ratio)**: **$a^3 : b^3$**
4. **ఘనమూల నిష్పత్తి (Sub-triplicate Ratio)**: **$\sqrt[3]{a} : \sqrt[3]{b}$**
5. **సంయుక్త నిష్పత్తి (Compound Ratio)**: పూర్వ పదాల లబ్దం : పర పదాల లబ్దం = **$ac : bd$**.
6. **విలోమ నిష్పత్తి (Inverse Ratio)**: $a : b : c$ యొక్క విలోమ నిష్పత్తి = **$bc : ac : ab$** (దాచిపెట్టే పద్ధతి / Hide Method).`,
      ruleEn: 'Hide Method for 2A = 3B = 4C: To find A : B : C, hide A and multiply (3×4 = 12); hide B and multiply (2×4 = 8); hide C and multiply (2×3 = 6) → 12 : 8 : 6 = 6 : 4 : 3!',
      ruleTe: '2A = 3B = 4C అయినప్పుడు A : B : C కనుగొనడానికి "దాచిపెట్టే పద్ధతి (Hide Method)" వాడండి: A కోసం 3×4=12, B కోసం 2×4=8, C కోసం 2×3=6 → 6 : 4 : 3!',
      formula: 'If pA = qB = rC → A : B : C = (qr) : (pr) : (pq)',
      exampleQEn: 'If 3A = 4B = 6C, find the ratio A : B : C.',
      exampleQTe: '3A = 4B = 6C అయినచో A : B : C నిష్పత్తి ఎంత?',
      exampleSolEn: 'Divide by LCM(3, 4, 6) = 12:\nA = 12/3 = 4, B = 12/4 = 3, C = 12/6 = 2 → A : B : C = 4 : 3 : 2.',
      exampleSolTe: '3, 4, 6 ల క.సా.గు = 12 చే భాగించగా: A = 12/3 = 4, B = 12/4 = 3, C = 12/6 = 2 → A : B : C = 4 : 3 : 2.'
    },
    {
      code: '6.2',
      titleEn: 'Combining Ratios (Neighbor Fill Method for A : B : C : D)',
      titleTe: 'నిష్పత్తులను కలపడం (A : B : C : D కనుగొనే పక్క అంకె పద్ధతి)',
      conceptEn: `When $A : B = m : n$ and $B : C = p : q$:
• Use the **Neighbor Fill / N-Pattern**:
  $$A : B : C = (m \times p) : (n \times p) : (n \times q)$$
• Also notice: **$\frac{A}{D} = \frac{A}{B} \times \frac{B}{C} \times \frac{C}{D}$** (First-to-Last Ratio cancels all middle terms!).`,
      conceptTe: `$A : B = m : n$ మరియు $B : C = p : q$ ఇచ్చినప్పుడు:
• ఉమ్మడి పదం $B$ ని సమానం చేయండి లేదా తిరగబడిన 'N' ఆకారంలో గుణించండి: **$A : B : C = mp : np : nq$**.
• మొదటి మరియు చివరి పదాల నిష్పత్తి ($A : D$) మాత్రమే అడిగితే అన్ని భిన్నాలను నేరుగా గుణించండి: $\frac{A}{D} = \frac{A}{B} \times \frac{B}{C} \times \frac{C}{D}$.`,
      ruleEn: 'Whenever A/2 = B/3 = C/5 (denominators under variables), then directly A : B : C = 2 : 3 : 5!',
      ruleTe: 'A/2 = B/3 = C/5 రూపంలో హారంలో అంకెలు ఉంటే, నేరుగా A : B : C = 2 : 3 : 5 అవుతుంది!',
      formula: 'A:B = m:n, B:C = p:q → A:B:C = mp : np : nq',
      exampleQEn: 'If A : B = 2 : 3, B : C = 4 : 5, and C : D = 5 : 6, find A : B : C : D.',
      exampleQTe: 'A : B = 2 : 3, B : C = 4 : 5 మరియు C : D = 5 : 6 అయినచో A : B : C : D ఎంత?',
      exampleSolEn: 'First combine A : B : C = (2×4) : (3×4) : (3×5) = 8 : 12 : 15.\nNow C : D = 5 : 6 = 15 : 18 (multiply by 3 so C matches 15!).\nTherefore, A : B : C : D = 8 : 12 : 15 : 18.',
      exampleSolTe: 'ముందుగా A : B : C = 8 : 12 : 15. C : D = 5 : 6 ని 3 తో గుణిస్తే 15 : 18 అవుతుంది.\nకావున A : B : C : D = 8 : 12 : 15 : 18.'
    },
    {
      code: '6.3',
      titleEn: 'Proportions: Mean, Third & Fourth Proportional (అనుపాత సూత్రాలు)',
      titleTe: 'అనుపాతం: మధ్యమ అనుపాతం, తృతీయ అనుపాతం & చతుర్థ అనుపాతం',
      conceptEn: `When $a : b :: c : d$, Product of Extremes = Product of Means ($a \times d = b \times c$):
1. **Mean Proportional (మధ్యమ అనుపాతం)** between $a$ and $b$: **$x = \sqrt{a \times b}$**
2. **Third Proportional (తృతీయ అనుపాతం)** to $a$ and $b$: **$x = \frac{b^2}{a}$**
3. **Fourth Proportional (చతుర్థ అనుపాతం)** to $a, b,$ and $c$: **$x = \frac{b \times c}{a}$**`,
      conceptTe: `ఆర్‌ఆర్‌బి పరీక్షలలో ప్రతి షిఫ్ట్‌లో అడిగే 3 అనుపాత సూత్రాలు:
1. **$a, b$ ల మధ్యమ అనుపాతం (Mean Proportional)** = **$\sqrt{a \times b}$**
2. **$a, b$ ల తృతీయ అనుపాతం (Third Proportional)** = **$\frac{b^2}{a}$**
3. **$a, b, c$ ల చతుర్థ అనుపాతం (Fourth Proportional)** = **$\frac{b \times c}{a}$**`,
      ruleEn: 'Number to be added/subtracted so a, b, c, d are in proportion: Just check options or use x = (bc - ad) / [(a + d) - (b + c)]!',
      ruleTe: 'a, b, c, d అనుపాతంలో ఉండటానికి కలపాల్సిన సంఖ్య x = (bc - ad) / [(a + d) - (b + c)].',
      formula: 'Mean Prop = √(ab) | Third Prop = b²/a | Fourth Prop = (bc)/a',
      exampleQEn: 'Find the ratio between the Third Proportional to 12 and 30 and the Mean Proportional between 9 and 25.',
      exampleQTe: '12, 30 ల తృతీయ అనుపాతానికి మరియు 9, 25 ల మధ్యమ అనుపాతానికి గల నిష్పత్తి ఎంత?',
      exampleSolEn: 'Step 1: Third Proportional to 12 and 30 = (30 × 30) / 12 = 900 / 12 = 75.\nStep 2: Mean Proportional between 9 and 25 = √(9 × 25) = 3 × 5 = 15.\nStep 3: Required Ratio = 75 : 15 = 5 : 1.',
      exampleSolTe: 'సోపానం 1: 12, 30 ల తృతీయ అనుపాతం = (30×30)/12 = 75.\nసోపానం 2: 9, 25 ల మధ్యమ అనుపాతం = √(9×25) = 15.\nసోపానం 3: నిష్పత్తి = 75 : 15 = 5 : 1.'
    },
    {
      code: '6.4',
      titleEn: 'Coins and Bag Denomination Problems (నాణేల లెక్కలు)',
      titleTe: 'సంచిలో వివిధ రకాల నాణేల సంఖ్య మరియు విలువ లెక్కలు',
      conceptEn: `Always look at what is given as the **Total**:
• **Case 1 (Total VALUE in ₹ is given, and Ratio of NUMBER of coins is given)**: Multiply each coin ratio by its denomination value to get the **Value Ratio**!
• **Case 2 (Total NUMBER of coins is given, and Ratio of VALUES is given)**: Multiply each value ratio by the number of coins in ₹1 (₹1 $\rightarrow \times 1$, 50p $\rightarrow \times 2$, 25p $\rightarrow \times 4$, 10p $\rightarrow \times 10$) to get the **Coin Count Ratio**!`,
      conceptTe: `నాణేల లెక్కలలో రెండు రకాలు ఉంటాయి:
• **రకం 1 (మొత్తం విలువ రూపాయలలో ఇచ్చి, నాణేల సంఖ్య నిష్పత్తి ఇచ్చినప్పుడు)**: నాణేల సంఖ్యను ఆ నాణెం విలువతో గుణించి మొత్తం విలువకు సమానం చేయాలి.
• **రకం 2 (మొత్తం నాణేల సంఖ్య ఇచ్చి, విలువల నిష్పత్తి ఇచ్చినప్పుడు)**: ₹1 కి ఎన్ని నాణేలు వస్తాయో (50 పైసలైతే $\times 2$, 25 పైసలైతే $\times 4$) దానితో గుణించి నాణేల సంఖ్య నిష్పత్తి కనుగొనాలి!`,
      ruleEn: 'Convert all values to Paise (or all to Rupees) so there is zero confusion with decimals!',
      ruleTe: 'గణన సులభంగా ఉండటానికి అన్ని విలువలను పైసలలోకి (₹1 = 100 పైసలు) మార్చుకోవచ్చు!',
      formula: 'Total Value = (Count of ₹1 × 1) + (Count of 50p × 0.5) + (Count of 25p × 0.25)',
      exampleQEn: 'A bag contains ₹1, 50 paise, and 25 paise coins in the ratio 5 : 6 : 8. If the total amount in the bag is ₹210, find the number of 50 paise coins.',
      exampleQTe: 'ఒక సంచిలో ₹1, 50 పైసలు మరియు 25 పైసల నాణేలు 5 : 6 : 8 నిష్పత్తిలో ఉన్నాయి. సంచిలోని మొత్తం సొమ్ము ₹210 అయితే, 50 పైసల నాణేల సంఖ్య ఎంత?',
      exampleSolEn: 'Step 1: Convert coin ratio (5 : 6 : 8) into Value in Rupees:\n• Five ₹1 coins = ₹5\n• Six 50p coins = ₹3\n• Eight 25p coins = ₹2\nTotal Value = 5 + 3 + 2 = 10 units = ₹210 → 1 unit = 21.\nStep 2: Number of 50p coins (6 units) = 6 × 21 = 126 coins.',
      exampleSolTe: 'సోపానం 1: నాణేల విలువ = 5(₹1) + 6(₹0.50) + 8(₹0.25) = 5 + 3 + 2 = 10 భాగాలు.\nసోపానం 2: 10 భాగాలు = ₹210 → 1 భాగం = 21.\n50 పైసల నాణేల సంఖ్య (6 భాగాలు) = 6 × 21 = 126 నాణేలు.'
    },
    {
      code: '6.5',
      titleEn: 'Problems on Ages (Constant Age Difference Method)',
      titleTe: 'వయస్సుల లెక్కలు (వయస్సుల మధ్య భేదం స్థిర నియమం)',
      conceptEn: `Golden Rule of Ages: **The difference between the ages of any two persons $A$ and $B$ remains CONSTANT throughout their lives!**
• If Present Ratio is $a : b$ and after $T$ years the ratio becomes $c : d$:
  1. Check if the difference $(b - a)$ equals $(d - c)$.
  2. If not equal, multiply the first ratio by $|d - c|$ and the second ratio by $|b - a|$ to equalize their horizontal gaps!
  3. Then the vertical increase in ratio units equals **$T$ years**!`,
      conceptTe: `వయస్సుల లెక్కలలో గోల్డెన్ రూల్: **ఇద్దరు వ్యక్తుల వయస్సుల మధ్య భేదం ఎప్పటికీ మారదు!**
• వారి వయస్సుల నిష్పత్తులు $a : b$ మరియు $T$ ఏళ్ల తర్వాత $c : d$ అయితే, రెండు నిష్పత్తులలో మధ్య భేదాన్ని సమానం చేయండి. అప్పుడు నిష్పత్తిలో పెరిగిన భాగాలు నేరుగా **$T$ సంవత్సరాలకు** సమానమవుతాయి!`,
      ruleEn: 'Average age of N people increases by T years after T years! If total age 5 years ago was S, present total age is S + 5N.',
      ruleTe: 'N మంది వ్యక్తుల వయస్సుల మొత్తం T సంవత్సరాల తర్వాత (N × T) పెరుగుతుంది!',
      formula: 'Equalize |a - b| and |c - d| → Ratio shift = Time Gap (T years)',
      exampleQEn: 'The ratio of present ages of Father and Son is 7 : 2. After 10 years, their ages will be in the ratio 9 : 4. Find the present age of the Father.',
      exampleQTe: 'తండ్రి మరియు కుమారుడి ప్రస్తుత వయస్సుల నిష్పత్తి 7 : 2. 10 సంవత్సరాల తర్వాత వారి వయస్సుల నిష్పత్తి 9 : 4 అవుతుంది. తండ్రి ప్రస్తుత వయస్సు ఎంత?',
      exampleSolEn: 'Step 1: Check difference in both ratios: (7 - 2) = 5 and (9 - 4) = 5 (Already equal!).\nStep 2: Increase in ratio = 9 - 7 = 2 parts = 10 years → 1 part = 5 years.\nStep 3: Father\'s present age (7 parts) = 7 × 5 = 35 years.',
      exampleSolTe: 'సోపానం 1: నిష్పత్తులలో భేదం 7-2 = 5 మరియు 9-4 = 5 (సమానంగా ఉంది).\nసోపానం 2: పెరిగిన భాగాలు = 9 - 7 = 2 భాగాలు = 10 ఏళ్లు → 1 భాగం = 5 ఏళ్లు.\nసోపానం 3: తండ్రి ప్రస్తుత వయస్సు (7 భాగాలు) = 7 × 5 = 35 సంవత్సరాలు.'
    },
    {
      code: '6.6',
      titleEn: 'Partnership (Profit = Capital × Time)',
      titleTe: 'భాగస్వామ్యం (లాభాల నిష్పత్తి = పెట్టుబడి × కాలం)',
      conceptEn: `In any business partnership, profits are shared in the ratio of the product of **Capital ($C$)** and **Time Period ($T$)**:
$$P_1 : P_2 : P_3 = (C_1 \times T_1) : (C_2 \times T_2) : (C_3 \times T_3)$$
• If capitals are invested for the same time, Profit Ratio = Capital Ratio.
• Also, $\text{Time Ratio} = \frac{\text{Profit}_1}{\text{Capital}_1} : \frac{\text{Profit}_2}{\text{Capital}_2}$.`,
      conceptTe: `భాగస్వామ్య వ్యాపారంలో లాభాలను ఎల్లప్పుడూ **పెట్టుబడి (Capital) × కాలం (Time)** లబ్దాల నిష్పత్తిలో పంచుకోవాలి:
$$\text{లాభాల నిష్పత్తి} = (C_1 \times T_1) : (C_2 \times T_2) : (C_3 \times T_3)$$`,
      ruleEn: 'If partner B joins after k months in a 1-year (12 months) business, B\'s money stays in business for (12 - k) months!',
      ruleTe: '1 సంవత్సరం (12 నెలలు) వ్యాపారంలో B అనే వ్యక్తి k నెలల తర్వాత చేరితే, B పెట్టుబడి ఉన్న కాలం = (12 - k) నెలలు మాత్రమే!',
      formula: 'Profit Ratio = (C₁ × T₁) : (C₂ × T₂) | Time Ratio = (P₁/C₁) : (P₂/C₂)',
      exampleQEn: 'A starts a business with ₹45,000. After 4 months, B joins him with ₹60,000. At the end of the year, in what ratio should they share the profit?',
      exampleQTe: 'A ₹45,000 తో వ్యాపారం ప్రారంభించాడు. 4 నెలల తర్వాత B ₹60,000 తో చేరాడు. సంవత్సరాంతమున వారు లాభాన్ని ఏ నిష్పత్తిలో పంచుకోవాలి?',
      exampleSolEn: 'A\'s time = 12 months; B\'s time = 12 - 4 = 8 months.\nProfit Ratio = (45,000 × 12) : (60,000 × 8) = (3 × 12) : (4 × 8) = 36 : 32 = 9 : 8.',
      exampleSolTe: 'A కాలం = 12 నెలలు; B కాలం = 12 - 4 = 8 నెలలు.\nలాభాల నిష్పత్తి = (45 × 12) : (60 × 8) = (3 × 12) : (4 × 8) = 9 : 8.'
    },
    {
      code: '6.7',
      titleEn: 'Mixture & Alligation Rule (మిశ్రమాలు మరియు అలిగేషన్ నియమం)',
      titleTe: 'మిశ్రమాలు మరియు అలిగేషన్ క్రాస్ నియమం (Alligation Rule)',
      conceptEn: `When two ingredients of prices/concentrations $C_1$ (Cheaper) and $C_2$ (Dearer) are mixed to produce a mean price/concentration $M$:
$$\frac{\text{Quantity of Cheaper}}{\text{Quantity of Dearer}} = \frac{C_2 - M}{M - C_1}$$
• **Adding Milk/Water to Change Ratio**: When water is added to a milk-water mixture, **Milk quantity remains constant**! Equalize the milk ratio before and after.`,
      conceptTe: `రెండు రకాల వస్తువులను ($C_1$ మరియు $C_2$) కలిపి సగటు ధర $M$ గల మిశ్రమాన్ని తయారు చేసినప్పుడు వాటి పరిమాణాల నిష్పత్తి:
$$Q_1 : Q_2 = (C_2 - M) : (M - C_1)$$
• పాలు-నీళ్ల మిశ్రమానికి **నీరు మాత్రమే కలిపినప్పుడు పాల పరిమాణం మారదు** కాబట్టి పాల భాగాలను సమానం చేయాలి!`,
      ruleEn: 'In Alligation, all three values (C₁, C₂, and Mean M) MUST be in the same unit (all Cost Prices, or all % concentrations)!',
      ruleTe: 'అలిగేషన్ వేసేటప్పుడు మూడు విలువలు ($C_1, C_2, M$) ఒకే ప్రమాణంలో (అన్నీ కొన్న వెలలు లేదా అన్నీ శాతాలు) ఉండాలి!',
      formula: 'Cheaper : Dearer = (Dearer - Mean) : (Mean - Cheaper)',
      exampleQEn: 'In a 60-liter mixture of milk and water, the ratio of milk to water is 2 : 1. How much water must be added to make the ratio 1 : 2?',
      exampleQTe: '60 లీటర్ల పాలు, నీళ్ల మిశ్రమంలో పాలు మరియు నీళ్ల నిష్పత్తి 2 : 1. ఆ నిష్పత్తి 1 : 2 కావాలంటే ఎన్ని లీటర్ల నీరు కలపాలి?',
      exampleSolEn: 'Step 1: Initial ratio = 2 : 1 (3 parts = 60 L → Milk = 40 L, Water = 20 L).\nStep 2: Only water is added, so Milk stays 40 L.\nIn new ratio 1 : 2, 1 part (Milk) = 40 L → 2 parts (Water) = 80 L.\nWater added = 80 - 20 = 60 liters!',
      exampleSolTe: 'సోపానం 1: 60 లీటర్లలో (2:1) పాలు = 40 లీ., నీరు = 20 లీ.\nసోపానం 2: కొత్త నిష్పత్తి 1 : 2 లో పాలు (1 భాగం) = 40 లీ. అయితే నీరు (2 భాగాలు) = 80 లీ. కావాలి.\nకలపాల్సిన నీరు = 80 - 20 = 60 లీటర్లు!'
    },
    {
      code: '6.8',
      titleEn: 'Cross-Product Method for Income-Expenditure & Two-Number Changes',
      titleTe: 'ఆదాయం-ఖర్చు మరియు రెండు సంఖ్యల మార్పులకు అడ్డగుణకార పద్ధతి',
      conceptEn: `When two numbers (or Incomes) are in ratio $a : b$, and after adding/subtracting $x$ and $y$ (or Savings $S_1, S_2$), the new ratio becomes $c : d$:
$$\text{1 Ratio Unit} = \frac{|c \cdot S_2 - d \cdot S_1|}{|a \cdot d - b \cdot c|}$$`,
      conceptTe: `ఇద్దరి ఆదాయాల నిష్పత్తి $a : b$, ఖర్చుల నిష్పత్తి $c : d$, మరియు వారి పొదుపులు $S_1, S_2$ ఇచ్చినప్పుడు అడ్డగుణకార భేదాల సూత్రం ద్వారా $x$ లేకుండా 5 సెకన్లలో జవాబు కనుగొనవచ్చు!`,
      ruleEn: 'If both persons save the SAME amount S and horizontal ratio gaps are equal, just equate the vertical ratio difference directly to S!',
      ruleTe: 'ఇద్దరి పొదుపులు సమానంగా ఉన్నప్పుడు నిష్పత్తుల భేదాన్ని సమానం చేస్తే నేరుగా జవాబు వస్తుంది!',
      formula: '1 Unit = |c·S₂ - d·S₁| / |ad - bc|',
      exampleQEn: 'The monthly incomes of A and B are in the ratio 5 : 4 and their expenditures are in the ratio 3 : 2. If each saves ₹4,000 per month, find A\'s monthly income.',
      exampleQTe: 'A మరియు B ల నెలవారీ ఆదాయాల నిష్పత్తి 5 : 4 మరియు వారి ఖర్చుల నిష్పత్తి 3 : 2. ప్రతి ఒక్కరూ నెలకు ₹4,000 ఆదా చేస్తే, A నెలవారీ ఆదాయం ఎంత?',
      exampleSolEn: 'Income = 5 : 4, Expenditure = 3 : 2.\nNotice vertical gap for both A and B is (5 - 3) = 2 parts and (4 - 2) = 2 parts!\nSo 2 parts (Savings) = ₹4,000 → 1 part = ₹2,000.\nA\'s Income (5 parts) = 5 × 2,000 = ₹10,000.',
      exampleSolTe: 'ఆదాయం = 5 : 4, ఖర్చు = 3 : 2.\nఇద్దరిలోనూ భేదం (పొదుపు) = 5 - 3 = 2 భాగాలు = ₹4,000 → 1 భాగం = ₹2,000.\nA ఆదాయం (5 భాగాలు) = 5 × 2,000 = ₹10,000.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Ratio Has No Units & Does Not Change on Multiplying by k',
      titleTe: '1. నిష్పత్తికి ప్రమాణాలు ఉండవు',
      en: 'Multiplying or dividing both terms of a ratio a : b by the same non-zero number k leaves the ratio unchanged (ka : kb = a : b).',
      te: 'నిష్పత్తిలోని రెండు పదాలను ఒకే సంఖ్యతో గుణించినా లేదా భాగించినా నిష్పత్తి విలువ మారదు.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Componendo and Dividendo Rule (సమష్టి - వ్యష్టి నియమం)',
      termTe: 'సమష్టి మరియు వ్యష్టి నియమం (Componendo & Dividendo)',
      defEn: 'If a / b = c / d, then (a + b) / (a - b) = (c + d) / (c - d). Conversely, if (x + y) / (x - y) = m / n, then x / y = (m + n) / (m - n)!',
      defTe: '(x + y) / (x - y) = m / n అయినప్పుడు నేరుగా x / y = (m + n) / (m - n) అవుతుంది!'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Mean, Third & Fourth Proportional',
      nameTe: 'మధ్యమ, తృతీయ మరియు చతుర్థ అనుపాతాలు',
      patternEn: 'Find the fourth proportional to 6, 9, and 20.',
      patternTe: '6, 9 మరియు 20 ల చతుర్థ అనుపాతం ఎంత?',
      approachEn: 'x = (9 × 20) / 6 = 30.',
      approachTe: 'x = (9 × 20) / 6 = 30.'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Mixture Replacement Model',
      qEn: 'A container contains 40 liters of pure milk. From this container, 4 liters of milk was taken out and replaced by water. This process was repeated one more time (total 2 times). How much milk is now left in the container?',
      qTe: 'ఒక పాత్రలో 40 లీటర్ల స్వచ్ఛమైన పాలు ఉన్నాయి. అందులో నుండి 4 లీటర్ల పాలు తీసివేసి దానికి బదులుగా నీరు కలిపారు. ఈ ప్రక్రియను మరొకసారి (మొత్తం 2 సార్లు) చేశారు. ఇప్పుడు పాత్రలో ఉన్న పాల పరిమాణం ఎంత?',
      solEn: 'Step 1: Fraction removed each time = 4 / 40 = 1/10 (so 9/10 of milk remains each time).\nStep 2: Remaining Milk after n = 2 operations = 40 × (1 - 1/10)² = 40 × (9/10) × (9/10) = 32.4 liters.',
      solTe: 'సోపానం 1: ప్రతిసారీ తీసిన భాగం = 4/40 = 1/10 (మిగిలే భాగం = 9/10).\nసోపానం 2: 2 సార్ల తర్వాత మిగిలిన పాలు = 40 × (9/10) × (9/10) = 32.4 లీటర్లు.',
      shortcutTip: 'Formula: Remaining Pure Liquid = Initial × [1 - (Replaced / Total)]ⁿ!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Mean Prop = √(ab) | Third Prop = b²/a | Fourth Prop = (bc)/a. Age difference |A - B| is always constant.',
      pointTe: 'మధ్యమ అనుపాతం = √(ab) | తృతీయ అనుపాతం = b²/a | చతుర్థ అనుపాతం = bc/a. వయస్సుల భేదం ఎప్పుడూ మారదు.'
    },
    {
      pointEn: 'Partnership Profit Ratio = (C₁ × T₁) : (C₂ × T₂). Mixture replacement: Remaining = V × (1 - x/V)ⁿ.',
      pointTe: 'భాగస్వామ్య లాభాల నిష్పత్తి = (పెట్టుబడి × కాలం). మిశ్రమ తొలగింపు సూత్రం = V × (1 - x/V)ⁿ.'
    }
  ]
};

/* ============================================================================
   CHAPTER 7: TIME & WORK AND PIPES & CISTERNS — COMPLETE CHAPTER
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-time-work'] = {
  id: 'math-time-work',
  chapterNo: 7,
  titleEn: 'Chapter 7: Time & Work and Pipes & Cisterns — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 7: కాలం - పని మరియు పైపులు - తొట్టెలు — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (3 Questions in Every Shift)',
  readTime: '38 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-time-work',

  introEn: `Welcome to Chapter 7: **Time & Work and Pipes & Cisterns (కాలం - పని మరియు పైపులు - తొట్టెలు)**. Every RRB NTPC and Group-D paper contains 2 to 3 questions from this chapter. Instead of slow fraction additions ($\frac{1}{x} + \frac{1}{y}$), this textbook chapter teaches you the **LCM Total Work & Daily Efficiency Method** across all **8 syllabus sub-topics**: Working Together, Leaving After Start vs Leaving Before Completion, Efficiency Ratios, Alternate Days, Work & Wages, Chain Rule ($M_1 D_1 H_1 / W_1$), and Pipes & Cisterns.`,

  introTe: `**అధ్యాయం 7: కాలం - పని మరియు పైపులు - తొట్టెలు** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి పరీక్షలలో ప్రతి షిఫ్ట్‌లో ఈ అధ్యాయం నుండి 2 నుండి 3 ప్రశ్నలు తప్పనిసరిగా వస్తాయి. ఇందులో భిన్నాలతో కాకుండా **క.సా.గు (LCM) మొత్తం పని పద్ధతి** ద్వారా ఇద్దరు/ముగ్గురు కలిసి పనిచేయడం, పని మధ్యలో లేదా పని ముగిసే ముందు వెళ్ళిపోవడం, రోజు విడిచి రోజు పనిచేయడం (Alternate Days), సామర్థ్య నిష్పత్తి, కూలీ డబ్బుల పంపిణీ, పురుషులు-స్త్రీలు-పిల్లల లెక్కలు మరియు పైపులు-తొట్టెల లెక్కలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '7.1',
      titleEn: 'LCM Total Work & Daily Efficiency Method (Work = Efficiency × Time)',
      titleTe: 'క.సా.గు మొత్తం పని పద్ధతి (మొత్తం పని = సామర్థ్యం × కాలం)',
      conceptEn: `Never use fractions in Time & Work! Follow this 3-step universal rule:
1. Take the **LCM of all given days** as **Total Work (in units)**.
2. Divide Total Work by each person's days to get their **1-Day Efficiency (Units/day)**:
   $$\text{Efficiency (E)} = \frac{\text{Total Work (W)}}{\text{Time (T)}} \quad \text{and} \quad \text{Time} = \frac{\text{Total Work}}{\text{Combined Efficiency}}$$
• For 2 persons $A$ ($x$ days) and $B$ ($y$ days): $\text{Together} = \frac{x \times y}{x + y}$ days.`,
      conceptTe: `కాలం-పని లెక్కలలో 3-సోపానాల క.సా.గు (LCM) పద్ధతి:
1. ఇచ్చిన రోజుల **క.సా.గు (LCM)** ను **మొత్తం పని (Total Work - యూనిట్లలో)** గా తీసుకోండి.
2. మొత్తం పనిని రోజులతో భాగించి ఒక్కొక్కరి **రోజువారీ సామర్థ్యం (Efficiency)** కనుగొనండి.
3. $\text{పట్టే సమయం} = \frac{\text{మొత్తం పని}}{\text{సామర్థ్యాల మొత్తం}}$.`,
      ruleEn: 'If A + B takes x days and A alone takes y days, then B alone takes = (x × y) / (y - x) days!',
      ruleTe: 'A మరియు B కలిసి x రోజులలో, A ఒక్కడే y రోజులలో చేస్తే, B ఒక్కడే చేసే రోజులు = (x × y) / (y - x)!',
      formula: 'Total Work = LCM(Days) | Efficiency = Work / Time | Two Persons Together = (xy) / (x + y)',
      exampleQEn: 'A, B, and C can complete a piece of work in 10, 12, and 15 days respectively. In how many days will they complete the work together?',
      exampleQTe: 'A, B మరియు C ఒక పనిని వరుసగా 10, 12 మరియు 15 రోజులలో చేయగలరు. ముగ్గురూ కలిసి ఆ పనిని ఎన్ని రోజులలో పూర్తి చేస్తారు?',
      exampleSolEn: 'Step 1: Total Work = LCM(10, 12, 15) = 60 units.\nStep 2: Daily Efficiency: A = 60/10 = 6, B = 60/12 = 5, C = 60/15 = 4.\nCombined Efficiency (A + B + C) = 6 + 5 + 4 = 15 units/day.\nStep 3: Time taken together = 60 / 15 = 4 days.',
      exampleSolTe: 'సోపానం 1: మొత్తం పని = LCM(10, 12, 15) = 60 యూనిట్లు.\nసోపానం 2: రోజువారీ సామర్థ్యం: A = 6, B = 5, C = 4 (మొత్తం = 15 యూనిట్లు/రోజు).\nసోపానం 3: ముగ్గురూ కలిసి చేసే రోజులు = 60 / 15 = 4 రోజులు.'
    },
    {
      code: '7.2',
      titleEn: 'Pairwise Working Model (A+B, B+C, and C+A Given)',
      titleTe: 'జతలుగా పనిచేసే మోడల్ (A+B, B+C మరియు C+A ఇచ్చినప్పుడు)',
      conceptEn: `When $(A + B)$, $(B + C)$, and $(C + A)$ days are given:
• Adding their daily efficiencies gives **$2(A + B + C)$** (because each person appears twice!).
• So **$\text{Efficiency of } (A + B + C) = \frac{E_{A+B} + E_{B+C} + E_{C+A}}{2}$**!
• To find $A$'s efficiency alone: **$E_A = E_{A+B+C} - E_{B+C}$**.`,
      conceptTe: `$(A+B)$, $(B+C)$ మరియు $(C+A)$ రోజులు ఇచ్చినప్పుడు:
• ఆ మూడు జతల సామర్థ్యాలను కూడితే **$2(A + B + C)$** సామర్థ్యం వస్తుంది. కాబట్టి దానిని **2 చే భాగించి** $(A + B + C)$ సామర్థ్యం కనుగొనాలి!
• $A$ ఒక్కడి సామర్థ్యం కావాలంటే $(A+B+C)$ నుండి $(B+C)$ సామర్థ్యాన్ని తీసివేయాలి.`,
      ruleEn: 'Never forget to divide the sum of pairwise efficiencies by 2 to get (A + B + C)!',
      ruleTe: 'జతల సామర్థ్యాల మొత్తాన్ని 2 చే భాగించడం మర్చిపోవద్దు!',
      formula: 'E(A + B + C) = [ E(A+B) + E(B+C) + E(C+A) ] / 2',
      exampleQEn: 'A and B can do a work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do the work?',
      exampleQTe: 'A, B లు ఒక పనిని 12 రోజుల్లో, B, C లు 15 రోజుల్లో, C, A లు 20 రోజుల్లో చేయగలరు. అయిన A ఒక్కడే ఆ పనిని ఎన్ని రోజుల్లో చేయగలడు?',
      exampleSolEn: 'Step 1: Total Work = LCM(12, 15, 20) = 60 units.\nStep 2: E(A+B) = 5, E(B+C) = 4, E(C+A) = 3.\nE(A+B+C) = (5 + 4 + 3) / 2 = 6 units/day.\nStep 3: A\'s efficiency = E(A+B+C) - E(B+C) = 6 - 4 = 2 units/day.\nTime for A alone = 60 / 2 = 30 days.',
      exampleSolTe: 'సోపానం 1: మొత్తం పని = LCM(12, 15, 20) = 60 యూనిట్లు.\nసోపానం 2: (A+B) = 5, (B+C) = 4, (C+A) = 3 → (A+B+C) సామర్థ్యం = (5+4+3)/2 = 6.\nసోపానం 3: A సామర్థ్యం = 6 - (B+C 4) = 2 → A ఒక్కడే చేసే రోజులు = 60 / 2 = 30 రోజులు.'
    },
    {
      code: '7.3',
      titleEn: 'Workers Leaving After k Days vs Leaving k Days Before Completion',
      titleTe: 'పని ప్రారంభమైన k రోజుల తర్వాత వెళ్ళిపోవడం vs పూర్తయ్యే k రోజుల ముందు వెళ్ళిపోవడం',
      conceptEn: `Two super-fast rules for workers leaving midway:
1. **Rule 1 (Leaves $k$ days AFTER start)**: **SUBTRACT** that person's $k$ days' work from Total Work, and divide remaining work by the remaining workers.
2. **Rule 2 (Leaves $k$ days BEFORE completion)**: Ask them not to leave! **ADD** that person's $k$ days' work to Total Work, and divide by ALL workers' combined efficiency!`,
      conceptTe: `పని మధ్యలో వెళ్ళిపోయే లెక్కలకు 2 గోల్డెన్ షార్ట్‌కట్స్:
1. **ప్రారంభమైన $k$ రోజుల తర్వాత (After) వెళ్ళిపోతే**: ఆ వ్యక్తి చేసిన $k$ రోజుల పనిని మొత్తం పని నుండి **తీసివేయండి (-)**.
2. **పని ముగియడానికి $k$ రోజుల ముందు (Before) వెళ్ళిపోతే**: ఆ వ్యక్తి యొక్క $k$ రోజుల పనిని మొత్తం పనికి **కలపండి (+)** మరియు అందరి సామర్థ్యంతో భాగించండి!`,
      ruleEn: 'After start → SUBTRACT work (-). Before completion → ADD work (+)!',
      ruleTe: 'తర్వాత (After) వెళ్ళిపోతే తీసివేయాలి (-); ముందు (Before) వెళ్ళిపోతే కలపాలి (+) !',
      formula: 'Left k days before end → Total Time = [Total Work + (k × Left Person\'s Efficiency)] / Total Efficiency',
      exampleQEn: 'A, B, and C can do a work in 10, 12, and 15 days. They start together, but A leaves 2 days before completion and B leaves 3 days before completion. Find total days taken.',
      exampleQTe: 'A, B, C లు ఒక పనిని వరుసగా 10, 12, 15 రోజుల్లో చేస్తారు. వారు కలిసి పని ప్రారంభించారు కానీ పని పూర్తయ్యే 2 రోజుల ముందు A, 3 రోజుల ముందు B వెళ్ళిపోయారు. మొత్తం పని ఎన్ని రోజుల్లో పూర్తయింది?',
      exampleSolEn: 'LCM = 60. Efficiencies: A = 6, B = 5, C = 4 (Total = 15).\nAdd A\'s 2 days work (2×6 = 12) and B\'s 3 days work (3×5 = 15) to Total Work:\nAdjusted Work = 60 + 12 + 15 = 87 units.\nTotal Days = 87 / 15 = 29 / 5 = 5⅘ days.',
      exampleSolTe: 'LCM = 60. సామర్థ్యాలు: A = 6, B = 5, C = 4 (మొత్తం = 15).\nముందు వెళ్ళిపోయారు కాబట్టి A (2×6=12) మరియు B (3×5=15) పనులను కలపండి = 60 + 12 + 15 = 87.\nమొత్తం రోజులు = 87 / 15 = 5⅘ రోజులు.'
    },
    {
      code: '7.4',
      titleEn: 'Efficiency Ratio & Time Ratio Inverse Law',
      titleTe: 'సామర్థ్య నిష్పత్తి మరియు కాల నిష్పత్తి విలోమ నియమం',
      conceptEn: `When Total Work is constant, **Efficiency ($E$) is inversely proportional to Time ($T$)**:
$$E_A : E_B = a : b \iff T_A : T_B = b : a$$
• Also, $\text{Total Work} = (\text{Efficiency given from ratio}) \times (\text{Given Days})$.`,
      conceptTe: `పని స్థిరంగా ఉన్నప్పుడు **సామర్థ్యం (Efficiency) మరియు కాలం (Time) విలోమానుపాతంలో ఉంటాయి**:
$$E_A : E_B = a : b \implies T_A : T_B = b : a$$`,
      ruleEn: '"A is 50% more efficient than B" means E_A : E_B = 150 : 100 = 3 : 2. Never convert it to days unless asked—directly use 3 and 2 as daily efficiencies!',
      ruleTe: '"B కంటే A సామర్థ్యం 50% ఎక్కువ" అంటే E_A : E_B = 3 : 2. నేరుగా A రోజుకు 3 యూనిట్లు, B రోజుకు 2 యూనిట్లు చేస్తారని తీసుకుని లెక్క చేయండి!',
      formula: 'Total Work = (Combined Efficiency) × (Days Together)',
      exampleQEn: 'A is twice as efficient as B, and together they finish a work in 18 days. In how many days will A alone finish the work?',
      exampleQTe: 'B కంటే A కు రెట్టింపు సామర్థ్యం కలదు. ఇద్దరూ కలిసి ఒక పనిని 18 రోజులలో పూర్తి చేస్తే, A ఒక్కడే ఎన్ని రోజులలో పూర్తి చేస్తాడు?',
      exampleSolEn: 'Efficiency A : B = 2 : 1 (Together = 2 + 1 = 3 units/day).\nTotal Work = 3 units/day × 18 days = 54 units.\nTime for A alone = 54 / 2 = 27 days.',
      exampleSolTe: 'సామర్థ్యం A : B = 2 : 1 (ఇద్దరూ కలిపి రోజుకు 3 యూనిట్లు).\nమొత్తం పని = 3 × 18 = 54 యూనిట్లు.\nA ఒక్కడే చేసే రోజులు = 54 / 2 = 27 రోజులు.'
    },
    {
      code: '7.5',
      titleEn: 'Alternate Days Working Model (రోజు విడిచి రోజు పనిచేసే లెక్కలు)',
      titleTe: 'రోజు విడిచి రోజు (Alternate Days) పనిచేసే లెక్కలు',
      conceptEn: `When A works on Day 1, B works on Day 2, A on Day 3, B on Day 4...:
1. Combine **1 Full Cycle = 2 Days**, and find **Work done in 2 Days = $(E_A + E_B)$ units**.
2. Divide Total Work by 1-Cycle Work to find the integer number of full cycles $k$, then multiply $k \times 2$ days, and assign the remaining work to whoever starts the next day!`,
      conceptTe: `మొదటి రోజు A, రెండవ రోజు B చొప్పున రోజు విడిచి రోజు పనిచేసినప్పుడు:
1. **1 విడత (Cycle) = 2 రోజులు** గా తీసుకుని, 2 రోజులలో జరిగే పనిని $(E_A + E_B)$ కనుగొనాలి.
2. మొత్తం పనిలో ఎన్ని పూర్తి విడతలు ఉన్నాయో చూసి, మిగిలిన పనిని మరుసటి రోజు వంతు వచ్చే వ్యక్తితో చేయించాలి!`,
      ruleEn: 'Never divide Total Work directly by 2-day work if there is a remainder! Take full integer cycles first.',
      ruleTe: 'శేషం మిగిలినప్పుడు నేరుగా భాగించకుండా, ముందుగా పూర్తి జతల (Cycles) పనిని తీసివేసి, మిగిలిన పనిని వంతు ప్రకారం కేటాయించాలి.',
      formula: '1 Cycle (2 Days) Work = E_A + E_B',
      exampleQEn: 'A and B can do a work in 12 and 18 days respectively. If they work on alternate days starting with A, in how many days will the work be completed?',
      exampleQTe: 'A మరియు B ఒక పనిని వరుసగా 12, 18 రోజుల్లో చేయగలరు. A తో ప్రారంభించి రోజు విడిచి రోజు పనిచేస్తే పని ఎన్ని రోజుల్లో పూర్తవుతుంది?',
      exampleSolEn: 'Step 1: Total Work = LCM(12, 18) = 36 units. A = 3 u/day, B = 2 u/day.\nStep 2: In 1 cycle of 2 days (A + B), work done = 3 + 2 = 5 units.\nStep 3: 7 cycles (7 × 2 = 14 days) complete 7 × 5 = 35 units.\nStep 4: Remaining 1 unit is done by A on Day 15 in 1/3 day → Total = 14⅓ days.',
      exampleSolTe: 'సోపానం 1: మొత్తం పని = 36. A = 3, B = 2.\nసోపానం 2: 2 రోజులలో (1 విడత) జరిగే పని = 3 + 2 = 5 యూనిట్లు.\nసోపానం 3: 7 విడతలలో (14 రోజులు) = 35 యూనిట్లు పూర్తవుతుంది. మిగిలిన 1 యూనిట్‌ను 15వ రోజు A 1/3 రోజులో చేస్తాడు → మొత్తం = 14⅓ రోజులు.'
    },
    {
      code: '7.6',
      titleEn: 'Work and Wages (పని మరియు కూలీ డబ్బుల పంపిణీ)',
      titleTe: 'పని మరియు వేతనాలు / కూలీ డబ్బుల పంపిణీ (Work & Wages)',
      conceptEn: `Wages (money) are ALWAYS distributed in the ratio of **Work Done** by each person. If all workers work for the same number of days, **Wages Ratio = Daily Efficiency Ratio ($E_A : E_B : E_C$)**!`,
      conceptTe: `కూలీ డబ్బులను ఎల్లప్పుడూ **చేసిన పని (లేదా సామర్థ్యాల నిష్పత్తి $E_A : E_B : E_C$)** ఆధారంగా పంచాలి — రోజుల నిష్పత్తిలో ఎప్పుడూ పంచకూడదు!`,
      ruleEn: 'Trap Alert: If A takes 4 days and B takes 5 days, their Wages Ratio is 5 : 4 (Efficiency ratio), NOT 4 : 5!',
      ruleTe: 'A 4 రోజులు, B 5 రోజులు తీసుకుంటే వారి కూలీ నిష్పత్తి 5 : 4 (సామర్థ్య నిష్పత్తి) అవుతుంది, 4 : 5 కాదు!',
      formula: 'Wages Ratio = Work Done Ratio = Efficiency Ratio (when working together)',
      exampleQEn: 'A can do a work in 10 days and B in 15 days. With the help of C, they finish it in 5 days. If they are paid ₹3,000 for the whole work, find C\'s share.',
      exampleQTe: 'A ఒక పనిని 10 రోజుల్లో, B 15 రోజుల్లో చేస్తారు. C సహాయంతో ముగ్గురూ కలిసి 5 రోజుల్లో పూర్తి చేశారు. మొత్తం కూలీ ₹3,000 అయితే C వాటా ఎంత?',
      exampleSolEn: 'LCM(10, 15, 5) = 30. Efficiencies: A = 3, B = 2, (A+B+C) = 6 → C = 6 - (3+2) = 1.\nRatio A : B : C = 3 : 2 : 1 (Total 6 parts = ₹3,000 → C\'s 1 part = ₹500).',
      exampleSolTe: 'LCM = 30. సామర్థ్యాలు: A = 3, B = 2, (A+B+C) = 6 → C = 1.\nకూలీ నిష్పత్తి = 3 : 2 : 1 (6 భాగాలు = ₹3,000 → C వాటా 1 భాగం = ₹500).'
    },
    {
      code: '7.7',
      titleEn: 'Chain Rule (M₁D₁H₁ / W₁ = M₂D₂H₂ / W₂) & Men-Women-Children Problems',
      titleTe: 'చైన్ రూల్ (MDH / W సూత్రం) మరియు పురుషులు - స్త్రీలు - పిల్లల లెక్కలు',
      conceptEn: `1. **MDH Chain Rule Formula**:
   $$\frac{M_1 \times D_1 \times H_1}{W_1} = \frac{M_2 \times D_2 \times H_2}{W_2}$$
2. **"OR" vs "AND" Shortcut**:
   • If **$a_1$ Men OR $b_1$ Women** do a work in **$D$ days**, then **$a_2$ Men AND $b_2$ Women** will do it in:
     $$\text{Days} = \frac{D}{\frac{a_2}{a_1} + \frac{b_2}{b_1}} \quad \left(\frac{\text{Given Days}}{\text{AND / OR sum}}\right)$$`,
      conceptTe: `1. **MDH చైన్ రూల్ సూత్రం**: $\frac{M_1 D_1 H_1}{W_1} = \frac{M_2 D_2 H_2}{W_2}$.
2. **"లేదా (OR)" మరియు "మరియు (AND)" షార్ట్‌కట్**:
   • $a_1$ పురుషులు **లేదా** $b_1$ స్త్రీలు $D$ రోజుల్లో చేస్తే, $a_2$ పురుషులు **మరియు** $b_2$ స్త్రీలు కలిసి చేసే రోజులు:
     $$\text{రోజులు} = \frac{D}{\frac{\text{AND పురుషులు}}{\text{OR పురుషులు}} + \frac{\text{AND స్త్రీలు}}{\text{OR స్త్రీలు}}}$$`,
      ruleEn: 'Remember: Work (W) — like length of wall built, number of chairs made, or ₹ earned — ALWAYS goes in the DENOMINATOR!',
      ruleTe: 'చేసిన పని (W) — కట్టిన గోడ పొడవు, తయారు చేసిన వస్తువులు లేదా సంపాదించిన రూపాయలు — ఎల్లప్పుడూ హారంలో (Denominator) మాత్రమే రాయాలి!',
      formula: 'M₁D₁H₁ / W₁ = M₂D₂H₂ / W₂ | AND/OR Shortcut: Days = D / [(a₂/a₁) + (b₂/b₁)]',
      exampleQEn: 'If 3 Men or 6 Women can complete a work in 16 days, in how many days can 12 Men and 8 Women complete the same work?',
      exampleQTe: '3 పురుషులు లేదా 6 స్త్రీలు ఒక పనిని 16 రోజులలో చేయగలరు. అయిన 12 పురుషులు మరియు 8 స్త్రీలు కలిసి ఆ పనిని ఎన్ని రోజులలో చేస్తారు?',
      exampleSolEn: 'Using AND / OR Shortcut:\nDays = 16 / [ (12 / 3) + (8 / 6) ] = 16 / [ 4 + 4/3 ] = 16 / (16 / 3) = 3 days!',
      exampleSolTe: 'AND / OR షార్ట్‌కట్ ప్రకారం:\nరోజులు = 16 / [ (12/3) + (8/6) ] = 16 / (16/3) = 3 రోజులు!'
    },
    {
      code: '7.8',
      titleEn: 'Pipes and Cisterns (Inlet + vs Outlet / Leak -)',
      titleTe: 'పైపులు మరియు తొట్టెలు (నింపే పైపు + మరియు ఖాళీ చేసే పైపు / లీక్ -)',
      conceptEn: `Pipes & Cisterns works on the exact same LCM method as Time & Work, with one key difference:
• **Inlet Pipe (నింపే పైపు)**: Positive efficiency (**$+E$**).
• **Outlet Pipe / Leak (ఖాళీ చేసే పైపు / రంధ్రం)**: Negative efficiency (**$-E$**).
• If Inlet A fills in $x$ hrs and Outlet B empties in $y$ hrs ($y > x$), together they fill in **$\frac{x \times y}{y - x}$ hours**.`,
      conceptTe: `పైపులు-తొట్టెల లెక్కలు కూడా క.సా.గు (LCM) పద్ధతిలోనే చేస్తాము:
• **నింపే పైపు (Inlet)** సామర్థ్యానికి **$+ (ప్లస్)$** గుర్తు, **ఖాళీ చేసే పైపు లేదా లీక్ (Outlet)** సామర్థ్యానికి **$- (మైనస్)$** గుర్తు పెట్టాలి!`,
      ruleEn: 'In Alternate Pipes (Inlet +a units in Hr 1, Outlet -b units in Hr 2), subtract the positive leap (a) from Total Capacity first before dividing by cycle work so the tank doesn\'t overflow and get drained back!',
      ruleTe: 'ఒక పైపు నింపుతూ, మరొక పైపు ఖాళీ చేస్తూ వంతులవారీగా పనిచేసేటప్పుడు, ముందుగా నింపే పైపు సామర్థ్యాన్ని మొత్తం సామర్థ్యం నుండి తీసివేసి లెక్కించాలి!',
      formula: 'Net Efficiency = E(Inlets) - E(Outlets) | One Inlet x & One Outlet y → Time = (xy) / |y - x|',
      exampleQEn: 'Pipe A can fill a tank in 12 hours and Pipe B can fill it in 15 hours, while Pipe C can empty the full tank in 20 hours. If all three pipes are opened together, in how many hours will the tank be filled?',
      exampleQTe: 'A మరియు B పైపులు ఒక తొట్టెను వరుసగా 12, 15 గంటలలో నింపగలవు. C పైపు నిండు తొట్టెను 20 గంటలలో ఖాళీ చేయగలదు. మూడు పైపులను ఒకేసారి తెరిస్తే తొట్టె ఎన్ని గంటలలో నిండుతుంది?',
      exampleSolEn: 'Step 1: Total Capacity = LCM(12, 15, 20) = 60 liters.\nStep 2: Efficiencies: A = +5, B = +4, C = -3 (Outlet!).\nNet Efficiency = 5 + 4 - 3 = +6 liters/hour.\nStep 3: Time to fill = 60 / 6 = 10 hours.',
      exampleSolTe: 'సోపానం 1: తొట్టె సామర్థ్యం = LCM(12, 15, 20) = 60 లీటర్లు.\nసోపానం 2: సామర్థ్యాలు: A = +5, B = +4, C = -3 (ఖాళీ చేసే పైపు).\nనికర సామర్థ్యం = 5 + 4 - 3 = 6 లీ./గంట → పట్టే సమయం = 60 / 6 = 10 గంటలు.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Why LCM Method Beats Fractions Every Time',
      titleTe: '1. భిన్నాల కంటే క.సా.గు (LCM) పద్ధతి ఎందుకు ఉత్తమమైనది?',
      en: 'Assuming Total Work as the LCM of days turns every person\'s daily work into a clean whole number.',
      te: 'రోజుల క.సా.గును మొత్తం పనిగా తీసుకోవడం వల్ల భిన్నాల బెడద లేకుండా సామర్థ్యాలు పూర్ణ సంఖ్యలలో వస్తాయి.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'A takes a days more than (A+B), and B takes b days more than (A+B)',
      termTe: '(A+B) కంటే A కు a రోజులు ఎక్కువ, B కు b రోజులు ఎక్కువ పట్టే గోల్డెన్ రూల్',
      defEn: 'If A alone takes "a" days more than (A + B) together, and B alone takes "b" days more than (A + B) together, then (A + B) together finish the work in √(a × b) days!',
      defTe: '(A+B) కంటే A ఒక్కడికి a రోజులు ఎక్కువ, B ఒక్కడికి b రోజులు ఎక్కువ పడితే, (A+B) కలిసి చేసే రోజులు = √(a × b)!'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Extra Days Over Combined Time (√(ab) Rule)',
      nameTe: 'ఇద్దరూ కలిసిన సమయం కంటే అదనపు రోజులు ఇచ్చినప్పుడు √(ab) ట్రిక్',
      patternEn: 'A takes 9 days more than (A+B) and B takes 16 days more than (A+B). Find days taken by (A+B).',
      patternTe: '(A+B) కంటే A కు 9 రోజులు ఎక్కువ, B కు 16 రోజులు ఎక్కువ పడితే (A+B) ఎన్ని రోజుల్లో చేస్తారు?',
      approachEn: 'Days taken by (A + B) = √(9 × 16) = 3 × 4 = 12 days in 2 seconds!',
      approachTe: '(A+B) చేసే రోజులు = √(9 × 16) = 12 రోజులు!'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Contractor & Extra Men Model',
      qEn: 'A contractor undertook to finish a railway bridge in 40 days and employed 100 men. After 35 days, he employed 100 more men and finished the work on time. If he had not employed additional men, how many days behind schedule would the work have been finished?',
      qTe: 'ఒక కాంట్రాక్టర్ ఒక రైల్వే వంతెనను 40 రోజుల్లో పూర్తి చేయడానికి 100 మందిని నియమించాడు. 35 రోజుల తర్వాత అదనంగా మరో 100 మందిని చేర్చుకుని సమయానికి పూర్తి చేశాడు. అదనపు వ్యక్తులను చేర్చుకోకపోతే పని ఎన్ని రోజులు ఆలస్యంగా పూర్తయ్యేది?',
      solEn: 'Step 1: For the last 5 days (40 - 35 = 5 days), 200 men worked.\nRemaining work = 200 men × 5 days = 1000 man-days.\nStep 2: If only the original 100 men worked on this remaining 1000 man-days, they would take = 1000 / 100 = 10 days (instead of 5 days).\nStep 3: Extra delay = 10 - 5 = 5 days behind schedule!',
      solTe: 'సోపానం 1: చివరి 5 రోజులు 200 మంది పనిచేశారు → ఆ పని = 200 × 5 = 1000 యూనిట్లు.\nసోపానం 2: పాత 100 మందే ఆ పని చేస్తే 1000 / 100 = 10 రోజులు పట్టేది (అంటే గడువు కంటే 10 - 5 = 5 రోజులు ఆలస్యమయ్యేది!).',
      shortcutTip: 'Delay = (Extra Men × Remaining Days) / Original Men = (100 × 5) / 100 = 5 days!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Total Work = LCM(Days). Left k days after start → Subtract work (-). Left k days before end → Add work (+).',
      pointTe: 'మొత్తం పని = రోజుల క.సా.గు. ప్రారంభమైన తర్వాత వెళ్ళిపోతే తీసివేయాలి (-); ముగిసే ముందు వెళ్ళిపోతే కలపాలి (+).'
    },
    {
      pointEn: 'M₁D₁H₁/W₁ = M₂D₂H₂/W₂. AND/OR Shortcut: Days = D / [(a₂/a₁) + (b₂/b₁)]. Extra days a, b over (A+B) → √(ab).',
      pointTe: 'M₁D₁H₁/W₁ = M₂D₂H₂/W₂. AND/OR షార్ట్‌కట్: D / [(a₂/a₁) + (b₂/b₁)].'
    }
  ]
};

/* ============================================================================
   CHAPTER 8: TIME, SPEED, DISTANCE, TRAINS & BOATS — COMPLETE CHAPTER
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-trains-speed'] = {
  id: 'math-trains-speed',
  chapterNo: 8,
  titleEn: 'Chapter 8: Time, Speed, Distance, Trains & Boats — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 8: కాలం, దూరం, వేగం, రైళ్లు & పడవలు — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'Railway Special! (3–4 Questions Guaranteed in Every Shift)',
  readTime: '42 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-trains-speed',

  introEn: `Welcome to Chapter 8: **Time, Speed, Distance, Problems on Trains, and Boats & Streams**. Because this is a Railway Recruitment Board (RRB) examination, Problems on Trains and Time-Speed-Distance carry **3 to 4 guaranteed questions in every single shift**. This complete textbook chapter covers all **8 syllabus sub-topics**: 18-Table vs 5-Table speed conversion, Late/Early arrival formula, Average Speed & Stoppage Time, Relative Speed & Thief-Police chasing, Trains crossing Poles/Platforms/Trains, Radha's Meeting Formula, Boats & Streams, and Circular Track Races.`,

  introTe: `**అధ్యాయం 8: కాలం, దూరం, వేగం, రైళ్లు మరియు పడవలు - ప్రవాహాలు** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఇది రైల్వే పరీక్ష కాబట్టి ప్రతి షిఫ్ట్‌లో ఈ అధ్యాయం నుండి **3 నుండి 4 ప్రశ్నలు** తప్పనిసరిగా వస్తాయి. ఇందులో 18 ఎక్కం - 5 ఎక్కం వేగ మార్పిడి, ఆఫీసుకు ఆలస్యం/ముందుగా చేరే సూత్రం, సగటు వేగం, ఆగు సమయం, సాపేక్ష వేగం, దొంగ-పోలీసు లెక్కలు, రైళ్లు స్తంభాలు/వంతెనలు/మరో రైలును దాటడం మరియు పడవలు-ప్రవాహాలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '8.1',
      titleEn: 'Fundamental Relation (D = S × T) & Instant 18-Table vs 5-Table Speed Conversion',
      titleTe: 'ప్రాథమిక సూత్రం (D = S × T) & 18 ఎక్కం - 5 ఎక్కం వేగం మార్పిడి ట్రిక్',
      conceptEn: `1. **Three Core Formulas**:
   $$\text{Distance (D)} = \text{Speed (S)} \times \text{Time (T)}, \quad S = \frac{D}{T}, \quad T = \frac{D}{S}$$
2. **Unit Conversion Rule ($\text{km/hr} \leftrightarrow \text{m/s}$)**:
   • $\text{km/hr} \rightarrow \text{m/s}$: Multiply by **$\frac{5}{18}$**
   • $\text{m/s} \rightarrow \text{km/hr}$: Multiply by **$\frac{18}{5}$**
3. **Instant 18-Table vs 5-Table**:
   • $18\text{ km/hr} = 5\text{ m/s}$ | $36\text{ km/hr} = 10\text{ m/s}$ | $54\text{ km/hr} = 15\text{ m/s}$ | $72\text{ km/hr} = 20\text{ m/s}$ | $90\text{ km/hr} = 25\text{ m/s}$ | $108\text{ km/hr} = 30\text{ m/s}$.`,
      conceptTe: `1. **ప్రాథమిక సూత్రం**: $\text{దూరం (D)} = \text{వేగం (S)} \times \text{కాలం (T)}$.
2. **ప్రమాణాల మార్పిడి**:
   • కి.మీ/గంట ($\text{km/hr}$) ను మీ/సె ($\text{m/s}$) లోకి మార్చడానికి **$\frac{5}{18}$** తో గుణించాలి.
   • మీ/సె ($\text{m/s}$) ను కి.మీ/గంట ($\text{km/hr}$) లోకి మార్చడానికి **$\frac{18}{5}$** తో గుణించాలి.
3. **18 ఎక్కం - 5 ఎక్కం ట్రిక్**: $18\text{ km/hr}=5\text{ m/s}, 36=10, 54=15, 72=20, 90=25, 108=30\text{ m/s}$.`,
      ruleEn: 'Always check units before multiplying! If length is in meters and time in seconds, speed MUST be in m/s.',
      ruleTe: 'దూరం మీటర్లలో, సమయం సెకన్లలో ఉన్నప్పుడు వేగాన్ని తప్పనిసరిగా మీ/సె (m/s) లోకి మార్చాలి!',
      formula: 'D = S × T | km/hr × (5/18) = m/s | m/s × (18/5) = km/hr',
      exampleQEn: 'An express train runs at 90 km/hr. How many meters will it cover in 16 seconds?',
      exampleQTe: 'ఒక ఎక్స్‌ప్రెస్ రైలు గంటకు 90 కి.మీ వేగంతో ప్రయాణిస్తోంది. అది 16 సెకన్లలో ఎన్ని మీటర్ల దూరం ప్రయాణిస్తుంది?',
      exampleSolEn: '90 km/hr = (18 × 5) km/hr → (5 × 5) = 25 m/s.\nDistance in 16 s = 25 m/s × 16 s = 400 meters.',
      exampleSolTe: '90 km/hr = 25 m/s (18×5 → 5×5).\n16 సెకన్లలో ప్రయాణించే దూరం = 25 × 16 = 400 మీటర్లు.'
    },
    {
      code: '8.2',
      titleEn: 'Constant Distance Inverse Law (S ∝ 1/T) & Late/Early Arrival Formula',
      titleTe: 'స్థిర దూర నియమం (వేగం ∝ 1/కాలం) & ఆలస్యం/ముందుగా చేరే సూత్రం',
      conceptEn: `When Distance $D$ is constant, **Speed Ratio is the inverse of Time Ratio ($S_1 : S_2 = T_2 : T_1$)**.
• **Golden Late/Early Distance Formula**: If a person travelling at speed $S_1$ reaches $t_1$ minutes late, and at speed $S_2$ reaches $t_2$ minutes early, then:
  $$\text{Distance } D = \left( \frac{S_1 \times S_2}{|S_1 - S_2|} \right) \times \frac{\Delta t \text{ (in minutes)}}{60}$$
  *(Where $\Delta t = t_1 + t_2$ for Late + Early, and $\Delta t = |t_1 - t_2|$ for Late + Late or Early + Early!)*`,
      conceptTe: `దూరం స్థిరంగా ఉన్నప్పుడు **వేగాల నిష్పత్తికి, కాలాల నిష్పత్తి విలోమంగా ఉంటుంది ($S_1 : S_2 = T_2 : T_1$)**.
• **ఆఫీసుకు ఆలస్యం / ముందుగా చేరే లెక్కల సూత్రం**:
  $$\text{దూరం } D = \left( \frac{S_1 \times S_2}{|S_1 - S_2|} \right) \times \frac{\text{సమయాల తేడా } (\Delta t)}{60}$$
  *(ఒకసారి ఆలస్యం, ఒకసారి ముందుగా అయితే సమయాలను కూడాలి; రెండూ ఆలస్యమే అయితే తీసివేయాలి!)*`,
      ruleEn: 'Walking at (a/b) of usual speed causes a delay of Δt → Usual Time = [ a / |b - a| ] × Δt!',
      ruleTe: 'సాధారణ వేగంలో (a/b) వంతు వేగంతో వెళ్ళడం వల్ల Δt ఆలస్యమైతే: సాధారణ సమయం = [ a / |b - a| ] × Δt!',
      formula: 'D = [ (S₁ × S₂) / |S₁ - S₂| ] × (Δt / 60) | At (a/b) speed: Usual Time = a × Δt / |b - a|',
      exampleQEn: 'Walking at 3/4 of his usual speed, a railway employee reaches his office 15 minutes late. Find his usual time to reach the office.',
      exampleQTe: 'తన సాధారణ వేగంలో 3/4 వంతు వేగంతో నడవడం వల్ల ఒక రైల్వే ఉద్యోగి ఆఫీసుకు 15 నిమిషాలు ఆలస్యంగా చేరుకున్నాడు. అతని సాధారణ సమయం ఎంత?',
      exampleSolEn: 'Here a/b = 3/4 and Δt = 15 mins.\nUsual Time = [ 3 / (4 - 3) ] × 15 = 3 × 15 = 45 minutes.',
      exampleSolTe: 'సూత్రం: [ a / (b - a) ] × Δt = [ 3 / (4 - 3) ] × 15 = 45 నిమిషాలు.'
    },
    {
      code: '8.3',
      titleEn: 'Average Speed & Train Stoppage Time per Hour',
      titleTe: 'సగటు వేగం (Average Speed) & రైలు గంటకు ఆగే సమయం (Stoppage Time)',
      conceptEn: `1. **Average Speed**: $\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}$ (Never just $\frac{S_1 + S_2}{2}$!).
   • For **two equal distances** at speeds $S_1$ and $S_2$:
     $$S_{\text{avg}} = \frac{2 \cdot S_1 \cdot S_2}{S_1 + S_2}$$
   • For **three equal distances** at $S_1, S_2, S_3$: $S_{\text{avg}} = \frac{3 S_1 S_2 S_3}{S_1 S_2 + S_2 S_3 + S_3 S_1}$ (or use LCM of speeds as each distance!).
2. **Stoppage Time per Hour Formula**:
   $$\text{Minutes stopped per hour} = \left( \frac{\text{Speed without stoppages} - \text{Speed with stoppages}}{\text{Speed without stoppages}} \right) \times 60$$`,
      conceptTe: `1. **సమాన దూరాలకు సగటు వేగం**: $\text{సగటు వేగం} = \frac{2 S_1 S_2}{S_1 + S_2}$.
2. **రైలు గంటకు ఎన్ని నిమిషాలు ఆగుతుంది (Stoppage Formula)**:
   $$\text{గంటకు ఆగే నిమిషాలు} = \left( \frac{\text{ఆగకుండా వేగం} - \text{ఆగుతూ వేగం}}{\text{ఆగకుండా వేగం}} \right) \times 60$$`,
      ruleEn: 'Never take the simple arithmetic mean (S₁+S₂)/2 when distances are equal—always use the harmonic mean 2S₁S₂/(S₁+S₂)!',
      ruleTe: 'దూరాలు సమానంగా ఉన్నప్పుడు (S₁+S₂)/2 ఎప్పుడూ చేయకూడదు — 2S₁S₂/(S₁+S₂) సూత్రమే వాడాలి!',
      formula: 'Avg Speed (Equal D) = 2S₁S₂ / (S₁ + S₂) | Stoppage mins/hr = [(S_fast - S_slow) / S_fast] × 60',
      exampleQEn: 'Excluding stoppages, the speed of a train is 60 km/hr, and including stoppages, it is 45 km/hr. For how many minutes does the train stop per hour?',
      exampleQTe: 'స్టేషన్లలో ఆగకుండా వెళ్తే ఒక రైలు వేగం 60 కి.మీ/గం., ఆగుతూ వెళ్తే 45 కి.మీ/గం. అయిన ఆ రైలు గంటకు ఎన్ని నిమిషాలు ఆగుతుంది?',
      exampleSolEn: 'Minutes stopped per hour = [ (60 - 45) / 60 ] × 60 = 15 minutes per hour.',
      exampleSolTe: 'గంటకు ఆగే సమయం = [ (60 - 45) / 60 ] × 60 = 15 నిమిషాలు.'
    },
    {
      code: '8.4',
      titleEn: 'Relative Speed (Same vs Opposite Direction) & Thief-Police Chasing',
      titleTe: 'సాపేక్ష వేగం (ఒకే దిశలో vs వ్యతిరేక దిశలో) & దొంగ-పోలీసు లెక్కలు',
      conceptEn: `When two bodies move simultaneously with speeds $S_1$ and $S_2$:
• **Opposite Direction (ఎదురెదురుగా)**: $\text{Relative Speed} = S_1 + S_2$ (Add speeds).
• **Same Direction (ఒకే దిశలో / Chasing)**: $\text{Relative Speed} = |S_1 - S_2|$ (Subtract speeds).
• **Thief-Police Catching Time**: $\text{Time to catch} = \frac{\text{Initial Gap Distance}}{S_{\text{Police}} - S_{\text{Thief}}}$.`,
      conceptTe: `రెండు వస్తువులు ఒకేసారి కదులుతున్నప్పుడు:
• **వ్యతిరేక దిశలో (ఎదురెదురుగా)**: సాపేక్ష వేగం = **$S_1 + S_2$ (వేగాలను కూడాలి)**.
• **ఒకే దిశలో (దొంగ-పోలీసు ఛేజింగ్)**: సాపేక్ష వేగం = **$|S_1 - S_2|$ (వేగాలను తీసివేయాలి)**.`,
      ruleEn: 'Distance covered by Police to catch the thief = (Police Speed) × (Catching Time).',
      ruleTe: 'దొంగను పట్టుకోవడానికి పట్టే సమయం = (మధ్య గల దూరం) ÷ (వేగాల భేదం).',
      formula: 'Opposite: S_rel = S₁ + S₂ | Same Direction: S_rel = |S₁ - S₂| | Catch Time = Gap / (S_P - S_T)',
      exampleQEn: 'A thief is spotted by a policeman from a distance of 200 m. The thief starts running at 10 km/hr and the policeman chases him at 12 km/hr. In how many minutes will the policeman catch the thief?',
      exampleQTe: '200 మీటర్ల దూరంలో ఉన్న దొంగను పోలీసు చూశాడు. దొంగ 10 కి.మీ/గం వేగంతో, పోలీసు 12 కి.మీ/గం వేగంతో పరిగెడితే, పోలీసు దొంగను ఎన్ని నిమిషాలలో పట్టుకుంటాడు?',
      exampleSolEn: 'Relative speed (same direction) = 12 - 10 = 2 km/hr = 2 × (5/18) = 5/9 m/s.\nTime = Gap / Relative Speed = 200 ÷ (5/9) = 360 seconds = 6 minutes.',
      exampleSolTe: 'సాపేక్ష వేగం = 12 - 10 = 2 km/hr = 5/9 m/s.\nసమయం = 200 ÷ (5/9) = 360 సెకన్లు = 6 నిమిషాలు.'
    },
    {
      code: '8.5',
      titleEn: 'Problems on Trains — Part 1: Crossing a Pole/Man vs Crossing a Bridge/Platform',
      titleTe: 'రైళ్ల లెక్కలు — భాగం 1: స్తంభం/మనిషిని దాటడం vs వంతెన/ప్లాట్‌ఫారమ్‌ను దాటడం',
      conceptEn: `1. **Crossing a Stationary Pole / Signal / Standing Man (Negligible Length)**:
   $$\text{Distance Covered} = \text{Length of Train } (L_T)$$
2. **Crossing a Platform / Bridge / Tunnel / Standing Train of Length $L_P$**:
   $$\text{Distance Covered} = \text{Length of Train } (L_T) + \text{Length of Platform } (L_P)$$
3. **Train Crossing Both a Pole (in $t_1$ sec) and a Platform of length $L_P$ (in $t_2$ sec)**:
   • Extra time $(t_2 - t_1)$ is taken solely to cover the Platform length $L_P$!
     $$\text{Speed of Train} = \frac{L_P}{t_2 - t_1} \text{ m/s}$$`,
      conceptTe: `1. **రైలు ఒక స్తంభాన్ని / సిగ్నల్‌ను / నిలబడి ఉన్న మనిషిని దాటినప్పుడు**: దూరం = **రైలు పొడవు ($L_T$)** మాత్రమే.
2. **రైలు ఒక వంతెన / ప్లాట్‌ఫారమ్ / సొరంగాన్ని దాటినప్పుడు**: దూరం = **రైలు పొడవు ($L_T$) + వంతెన పొడవు ($L_P$)**.
3. **రైలు స్తంభాన్ని $t_1$ సెకన్లలో, $L_P$ పొడవు గల వంతెనను $t_2$ సెకన్లలో దాటితే**:
   $$\text{రైలు వేగం} = \frac{\text{వంతెన పొడవు } (L_P)}{t_2 - t_1} \text{ మీ/సె}$$`,
      ruleEn: 'When a train crosses a platform in t₂ s and a man in t₁ s, never write two equations—directly divide Platform Length by (t₂ - t₁) to get Speed!',
      ruleTe: 'వంతెన పొడవును సమయాల భేదం (t₂ - t₁) చే భాగిస్తే రైలు వేగం ఒక్క స్టెప్పులో వస్తుంది!',
      formula: 'Pole: t₁ = L_T / S | Platform: t₂ = (L_T + L_P) / S | Speed S = L_P / (t₂ - t₁)',
      exampleQEn: 'A train passes a standing man in 8 seconds and a 264-meter long platform in 20 seconds. Find the length and speed of the train.',
      exampleQTe: 'ఒక రైలు నిలబడి ఉన్న మనిషిని 8 సెకన్లలో మరియు 264 మీటర్ల పొడవు గల ప్లాట్‌ఫారమ్‌ను 20 సెకన్లలో దాటింది. ఆ రైలు పొడవు మరియు వేగం ఎంత?',
      exampleSolEn: 'Step 1: Speed of Train = 264 / (20 - 8) = 264 / 12 = 22 m/s (= 22 × 18/5 = 79.2 km/hr).\nStep 2: Length of Train = Speed × Man-crossing time = 22 × 8 = 176 meters.',
      exampleSolTe: 'సోపానం 1: రైలు వేగం = 264 / (20 - 8) = 264 / 12 = 22 మీ/సె.\nసోపానం 2: రైలు పొడవు = 22 × 8 = 176 మీటర్లు.'
    },
    {
      code: '8.6',
      titleEn: 'Problems on Trains — Part 2: Two Moving Trains & After-Meeting Formula',
      titleTe: 'రైళ్ల లెక్కలు — భాగం 2: రెండు కదులుతున్న రైళ్లు & కలిసిన తర్వాత చేరే సూత్రం',
      conceptEn: `1. **Two Trains of lengths $L_1$ and $L_2$ Moving at Speeds $S_1$ and $S_2$**:
   • **Total Distance is ALWAYS $(L_1 + L_2)$** in BOTH same and opposite directions!
   • Crossing Time (Opposite) $= \frac{L_1 + L_2}{S_1 + S_2}$ | Crossing Time (Same Direction) $= \frac{L_1 + L_2}{|S_1 - S_2|}$.
2. **After-Meeting Time Formula**: If two trains start at the same time from A and B towards each other, and **after meeting** they take $t_1$ and $t_2$ hours to reach their destinations:
   $$\frac{S_1}{S_2} = \sqrt{\frac{t_2}{t_1}} \quad \text{and} \quad \text{Meeting Time } T = \sqrt{t_1 \times t_2}$$`,
      conceptTe: `1. **రెండు రైళ్లు ఏ దిశలో ప్రయాణించినా వాటి పొడవులను ఎల్లప్పుడూ కూడాలి ($L_1 + L_2$)**! వేగాలను మాత్రమే ఎదురెదురుగా అయితే కూడాలి ($S_1 + S_2$), ఒకే దిశలో అయితే తీసివేయాలి ($|S_1 - S_2|$).
2. **రెండు రైళ్లు మధ్యలో కలుసుకున్న తర్వాత** గమ్యস্থానాలకు చేరడానికి $t_1, t_2$ సమయాలు తీసుకుంటే:
   $$\frac{S_1}{S_2} = \sqrt{\frac{t_2}{t_1}} \quad \text{మరియు కలుసుకునే సమయం } T = \sqrt{t_1 \times t_2}$$`,
      ruleEn: 'Never subtract train lengths! Train lengths L₁ + L₂ are ALWAYS added.',
      ruleTe: 'రైళ్ల పొడవులను ఎప్పుడూ తీసివేయకూడదు — ఎల్లప్పుడూ (L₁ + L₂) కూడాలి!',
      formula: 't_cross = (L₁ + L₂) / S_rel | After-Meeting: S₁ : S₂ = √t₂ : √t₁',
      exampleQEn: 'Two trains A and B start simultaneously from stations X and Y towards each other. After passing each other, they take 9 hours and 16 hours respectively to reach Y and X. If speed of train A is 48 km/hr, find the speed of train B.',
      exampleQTe: 'X మరియు Y స్టేషన్ల నుండి A, B రైళ్లు ఎదురెదురుగా బయలుదేరి కలుసుకున్న తర్వాత తమ గమ్యస్థానాలకు చేరడానికి వరుసగా 9 గంటలు మరియు 16 గంటలు తీసుకున్నాయి. A వేగం 48 కి.మీ/గం అయితే B వేగం ఎంత?',
      exampleSolEn: 'Using S₁ / S₂ = √(t₂ / t₁) = √(16 / 9) = 4 / 3.\nGiven S₁ (4 parts) = 48 km/hr → 1 part = 12 → S₂ (3 parts) = 36 km/hr.',
      exampleSolTe: 'S₁ / S₂ = √(16 / 9) = 4 / 3.\n4 భాగాలు = 48 km/hr → 3 భాగాలు (B వేగం) = 36 కి.మీ/గం.'
    },
    {
      code: '8.7',
      titleEn: 'Boats and Streams (పడవలు మరియు ప్రవాహాలు — Downstream & Upstream)',
      titleTe: 'పడవలు మరియు ప్రవాహాలు (వాలు ప్రవాహం D & ఎదురు ప్రవాహం U)',
      conceptEn: `Let Speed of Boat in still water $= u$, and Speed of Stream (Current) $= v$:
1. **Downstream Speed (వాలు ప్రవాహం — with water)**: **$D = u + v$**
2. **Upstream Speed (ఎదురు ప్రవాహం — against water)**: **$U = u - v$**
3. **Given $D$ and $U$, find Boat Speed ($u$) and Stream Speed ($v$)**:
   $$u = \frac{D + U}{2} \quad \text{and} \quad v = \frac{D - U}{2}$$
4. **Round-Trip Distance Formula** (Going distance $d$ and returning in total time $T$):
   $$d = T \times \left( \frac{u^2 - v^2}{2u} \right) = \frac{T \times D \times U}{D + U}$$`,
      conceptTe: `నిలకడ నీటిలో పడవ వేగం $= u$, ప్రవాహ వేగం $= v$ అయినప్పుడు:
1. **వాలు ప్రవాహ వేగం (Downstream - $D$)** = **$u + v$**
2. **ఎదురు ప్రవాహ వేగం (Upstream - $U$)** = **$u - v$**
3. **పడవ వేగం $u = \frac{D + U}{2}$**  |  **ప్రవాహ వేగం $v = \frac{D - U}{2}$**.`,
      ruleEn: 'To find Boat speed, ADD Downstream and Upstream and divide by 2. To find Stream speed, SUBTRACT and divide by 2!',
      ruleTe: 'పడవ వేగం కావాలంటే కూడి 2 చే భాగించండి; ప్రవాహ వేగం కావాలంటే తీసివేసి 2 చే భాగించండి!',
      formula: 'D = u + v | U = u - v | u = (D + U)/2 | v = (D - U)/2 | Round-trip d = T(u² - v²)/(2u)',
      exampleQEn: 'A boat covers 36 km downstream in 3 hours and 24 km upstream in 4 hours. Find the speed of the boat in still water and the speed of the stream.',
      exampleQTe: 'ఒక పడవ ప్రవాహ దిశలో 36 కి.మీ దూరాన్ని 3 గంటలలో, ప్రవాహానికి ఎదురుగా 24 కి.మీ దూరాన్ని 4 గంటలలో ప్రయాణిస్తుంది. నిలకడ నీటిలో పడవ వేగం మరియు ప్రవాహ వేగం ఎంత?',
      exampleSolEn: 'Downstream speed D = 36 / 3 = 12 km/hr. Upstream speed U = 24 / 4 = 6 km/hr.\nBoat Speed u = (12 + 6) / 2 = 9 km/hr.\nStream Speed v = (12 - 6) / 2 = 3 km/hr.',
      exampleSolTe: 'వాలు వేగం D = 36/3 = 12 km/hr, ఎదురు వేగం U = 24/4 = 6 km/hr.\nపడవ వేగం u = (12+6)/2 = 9 km/hr; ప్రవాహ వేగం v = (12-6)/2 = 3 km/hr.'
    },
    {
      code: '8.8',
      titleEn: 'Races & Circular Track Meeting Problems',
      titleTe: 'పరుగు పందాలు (Races) మరియు వృత్తాకార ట్రాక్ లెక్కలు',
      conceptEn: `1. **"A gives B a start of $x$ meters in a $L$-meter race"**: Means while A runs $L$ meters, B runs $(L - x)$ meters.
2. **Circular Track of Length $L$**:
   • **First meeting anywhere on track** = $\frac{L}{\text{Relative Speed}}$
   • **First meeting at the STARTING POINT** = $\text{LCM}\left(\frac{L}{S_1},\ \frac{L}{S_2}\right)$.`,
      conceptTe: `వృత్తాకార ట్రాక్ పొడవు $L$ అయినప్పుడు:
• ట్రాక్‌పై మొదటిసారి కలుసుకునే సమయం = $\frac{L}{\text{సాపేక్ష వేగం}}$.
• బయలుదేరిన చోటే (Starting Point) మళ్ళీ కలుసుకునే సమయం = ఒక్కొక్కరు ఒక చుట్టు పూర్తి చేయడానికి పట్టే సమయాల **క.సా.గు (LCM)**!`,
      ruleEn: 'Meeting anywhere on circular track → Divide Track Length by Relative Speed. Meeting at Starting Point → Take LCM of lap times!',
      ruleTe: 'ఎక్కడైనా కలవడం అంటే సాపేక్ష వేగంతో భాగించాలి; ప్రారంభ బిందువు వద్ద కలవడం అంటే సమయాల క.సా.గు (LCM) కనుగొనాలి!',
      formula: 'First Meet = L / S_rel | Meet at Start = LCM(L/S₁, L/S₂)',
      exampleQEn: 'In a 1000 m race, A beats B by 100 m, and in a 800 m race, B beats C by 80 m. By how many meters will A beat C in a 1000 m race?',
      exampleQTe: '1000 మీ. పరుగు పందెంలో A అనే వ్యక్తి B ని 100 మీ. తేడాతో, 800 మీ. పందెంలో B అనే వ్యక్తి C ని 80 మీ. తేడాతో ఓడిస్తారు. అయిన 1000 మీ. పందెంలో A అనే వ్యక్తి C ని ఎన్ని మీటర్ల తేడాతో ఓడిస్తాడు?',
      exampleSolEn: 'Ratio A : B = 1000 : 900 = 10 : 9. Ratio B : C = 800 : 720 = 10 : 9.\nCombine A : C = (10 × 10) : (9 × 9) = 100 : 81 = 1000 : 810.\nWhen A runs 1000 m, C runs 810 m → A beats C by 1000 - 810 = 190 meters!',
      exampleSolTe: 'A : B = 10 : 9 మరియు B : C = 10 : 9 → A : C = 100 : 81 = 1000 : 810.\nA 1000 మీ. పరిగెత్తేసరికి C 810 మీ. మాత్రమే పరిగెడతాడు → తేడా = 190 మీటర్లు!'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Unit Consistency is 90% of the Battle in TSD',
      titleTe: '1. ప్రమాణాల ఏకరూపత (Unit Consistency)',
      en: 'Keep {km, hr, km/hr} together OR {meters, seconds, m/s} together.',
      te: 'కి.మీ, గంటలు, కి.మీ/గం ఒక జతగా; మీటర్లు, సెకన్లు, మీ/సె మరొక జతగా ఉండాలి.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Relative Speed Direction Law',
      termTe: 'సాపేక్ష వేగ దిశ నియమం',
      defEn: 'Opposite directions add speeds (S₁ + S₂) because both help close the gap. Same directions subtract speeds |S₁ - S₂|.',
      defTe: 'ఎదురెదురుగా వస్తే వేగాలు కూడాలి (S₁ + S₂); ఒకే దిశలో వెళ్తే వేగాలు తీసివేయాలి |S₁ - S₂|.'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Two Trains Crossing Each Other',
      nameTe: 'రెండు రైళ్లు ఒకదానినొకటి దాటడం',
      patternEn: 'Two trains of lengths 140m and 160m running at 60 km/h and 48 km/h in opposite directions cross in how many seconds?',
      patternTe: '140 మీ., 160 మీ. పొడవు గల రెండు రైళ్లు 60 కి.మీ/గం, 48 కి.మీ/గం వేగాలతో ఎదురెదురుగా వెళ్తూ ఎన్ని సెకన్లలో దాటుకుంటాయి?',
      approachEn: 'Total L = 300 m. S_rel = 60 + 48 = 108 km/h = 30 m/s → Time = 300 / 30 = 10 seconds!',
      approachTe: 'మొత్తం పొడవు = 300 మీ. సాపేక్ష వేగం = 108 km/h = 30 m/s → సమయం = 300/30 = 10 సెకన్లు!'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-2 • Late/Early Office Distance',
      qEn: 'A student cycling at 10 km/hr reaches his school 6 minutes late. Next day he cycles at 12 km/hr and reaches 6 minutes early. Find the distance of the school from his house.',
      qTe: 'ఒక విద్యార్థి 10 కి.మీ/గం వేగంతో సైకిల్ తొక్కితే స్కూలుకు 6 నిమిషాలు ఆలస్యంగా వెళ్తాడు. మరుసటి రోజు 12 కి.మీ/గం వేగంతో వెళ్లి 6 నిమిషాలు ముందుగా చేరుకుంటాడు. ఇంటి నుండి స్కూలుకు గల దూరం ఎంత?',
      solEn: 'Using D = [ (S₁ × S₂) / |S₁ - S₂| ] × (Δt / 60):\nHere S₁ = 10, S₂ = 12, and Δt = 6 (late) + 6 (early) = 12 minutes.\nD = [ (10 × 12) / (12 - 10) ] × (12 / 60) = 60 × (1/5) = 12 km.',
      solTe: 'సూత్రం: D = [ (10 × 12) / (12 - 10) ] × (12 / 60) = 60 × (1/5) = 12 కి.మీ.',
      shortcutTip: 'Late + Early → Add minutes (6 + 6 = 12 mins = 1/5 hr)!'
    }
  ],

  quickRevision: [
    {
      pointEn: '18 km/h = 5 m/s | 36 = 10 | 54 = 15 | 72 = 20 | 90 = 25 | 108 = 30 m/s. Avg Speed (equal D) = 2S₁S₂/(S₁+S₂).',
      pointTe: '18 km/h = 5 m/s | 36 = 10 | 54 = 15 | 72 = 20 | 90 = 25 | 108 = 30 m/s. సగటు వేగం = 2S₁S₂/(S₁+S₂).'
    },
    {
      pointEn: 'Train lengths L₁ + L₂ are ALWAYS added. Boat speed u = (D + U)/2, Stream speed v = (D - U)/2.',
      pointTe: 'రైళ్ల పొడవులు ఎల్లప్పుడూ కూడాలి (L₁+L₂). పడవ వేగం u = (D+U)/2, ప్రవాహ వేగం v = (D-U)/2.'
    }
  ]
};

/* ============================================================================
   CHAPTER 9: MENSURATION, GEOMETRY, ALGEBRA & TRIGONOMETRY — COMPLETE CHAPTER
   8 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-mensuration-algebra'] = {
  id: 'math-mensuration-algebra',
  chapterNo: 9,
  titleEn: 'Chapter 9: Mensuration, Geometry, Algebra & Trigonometry — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 9: క్షేత్రమితి, రేఖాగణితం, బీజగణితం & త్రికోణమితి — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'Highest Weightage (5–6 Questions Across CBT-1 & CBT-2)',
  readTime: '45 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-mensuration-algebra',

  introEn: `Welcome to Chapter 9: **Mensuration (2D & 3D), Geometry, Algebra & Trigonometry**. In RRB NTPC and Group-D exams, 5 to 6 direct formula-and-identity questions come from this combined advance-math block. Every single sub-topic—from Triangles, Quadrilaterals, Circles, and 3D Solids (Cylinder, Cone, Sphere) to Geometry theorems, Algebraic reciprocal powers ($x + \frac{1}{x} = k$), Trigonometric identities, and Heights & Distances—is covered thoroughly below.`,

  introTe: `**అధ్యాయం 9: క్షేత్రమితి (2D & 3D), రేఖాగణితం, బీజగణితం మరియు త్రికోణమితి** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి ఎన్‌టిపిసి మరియు గ్రూప్-డి పరీక్షలలో ఈ అధ్యాయం నుండి 5 నుండి 6 ప్రశ్నలు నేరుగా సూత్రాల ఆధారంగా వస్తాయి. ఇందులో త్రిభుజాలు, చతుర్భుజాలు, వృత్తాలు, ఘన ఆకారాలు (స్తూపం, శంఖువు, గోళం), రేఖాగణిత సిద్ధాంతాలు, బీజగణిత సూత్రాలు ($x + 1/x = k$), త్రికోణమితి మరియు ఎత్తులు-దూరాలను 8 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '9.1',
      titleEn: '2D Mensuration — Triangles (Right-Angled, Equilateral, Isosceles & Heron\'s Formula)',
      titleTe: '2D క్షేత్రమితి — త్రిభుజాలు (లంబకోణ, సమబాహు, సమద్విబాహు & హెరాన్ సూత్రం)',
      conceptEn: `1. **General Triangle**: $\text{Area} = \frac{1}{2} \times \text{Base} \times \text{Height}$.
   • **Heron's Formula**: Semi-perimeter $s = \frac{a+b+c}{2}$, $\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$.
2. **Right-Angled Triangle**: $\text{Area} = \frac{1}{2} \times b \times h$, Hypotenuse $H = \sqrt{b^2 + h^2}$.
   • **Pythagorean Triplets (Must Memorize)**: **(3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (9, 40, 41), (20, 21, 29)**.
   • Inradius $r = \frac{b + h - H}{2}$ | Circumradius $R = \frac{H}{2}$.
3. **Equilateral Triangle (All sides $= a$)**:
   • $\text{Height } h = \frac{\sqrt{3}}{2}a$  |  $\text{Area} = \frac{\sqrt{3}}{4}a^2$
   • Inradius $r = \frac{a}{2\sqrt{3}}$ | Circumradius $R = \frac{a}{\sqrt{3}}$ (**Ratio $R : r = 2 : 1$, Area Ratio $= 4 : 1$**).`,
      conceptTe: `1. **సాధారణ త్రిభుజ వైశాల్యం** = $\frac{1}{2} \times \text{భూమి} \times \text{ఎత్తు}$. హెరాన్ సూత్రం = $\sqrt{s(s-a)(s-b)(s-c)}$.
2. **లంబకోణ త్రిభుజం**: పైథాగరస్ త్రికాలు: **(3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25)**. అంతర వ్యాసార్థం $r = \frac{b + h - H}{2}$, పరివ్యాసార్థం $R = \frac{H}{2}$.
3. **సమబాహు త్రిభుజం (భుజం $= a$)**:
   • ఎత్తు $h = \frac{\sqrt{3}}{2}a$  |  వైశాల్యం = $\frac{\sqrt{3}}{4}a^2$  |  $R : r = 2 : 1$.`,
      ruleEn: 'Whenever three sides match a Pythagorean triplet (like 5, 12, 13 or 10, 24, 26), NEVER use Heron\'s formula—immediately do (1/2) × legs!',
      ruleTe: 'త్రిభుజ భుజాలు పైథాగరస్ త్రికం (ఉదా: 5, 12, 13) అయితే హెరాన్ సూత్రం వాడకుండా నేరుగా (1/2)×5×12 = 30 వేయండి!',
      formula: 'Equilateral Area = (√3/4)a², Height = (√3/2)a | Right Triangle: r = (P+B-H)/2, R = H/2',
      exampleQEn: 'Find the area and circumradius of a triangle whose sides are 10 cm, 24 cm, and 26 cm.',
      exampleQTe: '10 సెం.మీ, 24 సెం.మీ మరియు 26 సెం.మీ భుజాలు గల త్రిభుజ వైశాల్యం మరియు పరివ్యాసార్థం (R) కనుగొనండి.',
      exampleSolEn: 'Notice 10, 24, 26 is 2 × (5, 12, 13) → It is a Right-Angled Triangle!\nArea = (1/2) × 10 × 24 = 120 cm².\nCircumradius R = Hypotenuse / 2 = 26 / 2 = 13 cm.',
      exampleSolTe: '10, 24, 26 అనేవి 2 × (5, 12, 13) కాబట్టి ఇది లంబకోణ త్రిభుజం!\nవైశాల్యం = (1/2) × 10 × 24 = 120 చ.సెం.మీ. పరివ్యాసార్థం R = కర్ణం/2 = 26/2 = 13 సెం.మీ.'
    },
    {
      code: '9.2',
      titleEn: '2D Mensuration — Rectangle, Square, Rhombus, Parallelogram & Trapezium',
      titleTe: '2D క్షేత్రమితి — దీర్ఘచతురస్రం, చతురస్రం, రాంబస్, సమాంతర చతుర్భుజం & ట్రెపీజియం',
      conceptEn: `1. **Rectangle ($l, b$)**: $\text{Area} = l \times b$, $\text{Perimeter} = 2(l + b)$, $\text{Diagonal } d = \sqrt{l^2 + b^2}$.
   • **Area of Path of width $w$ outside rectangle** $= 2w(l + b + 2w)$ | **Inside** $= 2w(l + b - 2w)$ | **Cross-roads** $= w(l + b - w)$.
2. **Square (side $a$)**: $\text{Area} = a^2 = \frac{d^2}{2}$, $\text{Perimeter} = 4a$, $\text{Diagonal } d = \sqrt{2}a$.
3. **Rhombus (Diagonals $d_1, d_2$ bisect at $90^\circ$)**:
   • $\text{Area} = \frac{1}{2} \times d_1 \times d_2$  |  **Side $a = \sqrt{\left(\frac{d_1}{2}\right)^2 + \left(\frac{d_2}{2}\right)^2}$** (or $4a^2 = d_1^2 + d_2^2$).
4. **Trapezium**: $\text{Area} = \frac{1}{2} \times (\text{Sum of parallel sides}) \times \text{Height} = \frac{1}{2}(a + b)h$.`,
      conceptTe: `1. **దీర్ఘచతురస్రం**: వైశాల్యం $= lb$, చుట్టుకొలత $= 2(l+b)$, కర్ణం $= \sqrt{l^2+b^2}$.
2. **చతురస్రం**: వైశాల్యం $= a^2 = \frac{d^2}{2}$, చుట్టుకొలత $= 4a$, కర్ణం $= \sqrt{2}a$.
3. **రాంబస్ (సమచతుర్భుజం)**: వైశాల్యం $= \frac{1}{2} d_1 d_2$. కర్ణాల సగాలు మరియు భుజం లంబకోణ త్రిభుజాన్ని ఏర్పరుస్తాయి: $\text{భుజం } a = \sqrt{(d_1/2)^2 + (d_2/2)^2}$.
4. **ట్రెపీజియం (సమలంబ చతుర్భుజం)**: వైశాల్యం $= \frac{1}{2}(a + b)h$.`,
      ruleEn: 'In a Rhombus, half-diagonals (d₁/2) and (d₂/2) with side "a" form a Right Triangle (Pythagorean Triplet)!',
      ruleTe: 'రాంబస్‌లో కర్ణాల సగాలు (d₁/2, d₂/2) మరియు భుజం (a) ఎల్లప్పుడూ పైథాగరస్ త్రికాన్ని ఏర్పరుస్తాయి!',
      formula: 'Square Area = a² = d²/2 | Rhombus Area = (1/2)d₁d₂, 4a² = d₁² + d₂² | Trapezium Area = (1/2)(a+b)h',
      exampleQEn: 'The diagonals of a rhombus are 16 cm and 30 cm. Find its area and perimeter.',
      exampleQTe: 'ఒక రాంబస్ యొక్క కర్ణాలు 16 సెం.మీ మరియు 30 సెం.మీ. దాని వైశాల్యం మరియు చుట్టుకొలత కనుగొనండి.',
      exampleSolEn: 'Step 1: Area = (1/2) × 16 × 30 = 240 cm².\nStep 2: Half-diagonals are 8 cm and 15 cm. By triplet (8, 15, 17), Side a = 17 cm.\nStep 3: Perimeter = 4a = 4 × 17 = 68 cm.',
      exampleSolTe: 'సోపానం 1: వైశాల్యం = (1/2) × 16 × 30 = 240 చ.సెం.మీ.\nసోపానం 2: కర్ణాల సగాలు 8, 15 → (8, 15, 17) త్రికం ప్రకారం భుజం a = 17 సెం.మీ.\nసోపానం 3: చుట్టుకొలత = 4 × 17 = 68 సెం.మీ.'
    },
    {
      code: '9.3',
      titleEn: '2D Mensuration — Circle, Semi-Circle, Sector & Wheel Revolutions',
      titleTe: '2D క్షేత్రమితి — వృత్తం, అర్ధవృత్తం, సెక్టార్ & చక్రం భ్రమణాలు',
      conceptEn: `1. **Circle (Radius $r$)**: $\text{Circumference } C = 2\pi r$, $\text{Area } A = \pi r^2$.
   • **Golden $r = 7k$ Table**:
     - $r = 7 \implies C = 44,\ A = 154$
     - $r = 14 \implies C = 88,\ A = 616$
     - $r = 21 \implies C = 132,\ A = 1386$.
2. **Semi-Circle Perimeter**: $P = \pi r + 2r = \mathbf{\frac{36}{7}r}$!
3. **Sector (Angle $\theta$)**: $\text{Arc Length } l = \frac{\theta}{360^\circ} \times 2\pi r$ | $\text{Area} = \frac{\theta}{360^\circ} \times \pi r^2 = \frac{1}{2} l \cdot r$.
4. **Wheel Revolutions**: $\text{Distance} = N \times 2\pi r$.`,
      conceptTe: `1. **వృత్తం ($r = 7$ గోల్డెన్ పట్టిక)**:
   • $r = 7 \implies \text{చుట్టుకొలత } = 44, \text{ వైశాల్యం } = 154$.
   • $r = 14 \implies \text{చుట్టుకొలత } = 88, \text{ వైశాల్యం } = 616$.
2. **అర్ధవృత్త చుట్టుకొలత** $= \pi r + 2r = \mathbf{\frac{36}{7}r}$!
3. **సెక్టార్ వైశాల్యం** $= \frac{\theta}{360^\circ} \pi r^2 = \frac{1}{2} l r$.`,
      ruleEn: 'Trap Alert: Perimeter of a Semi-Circle is NOT πr! It includes the diameter 2r, so Perimeter = (36/7)r!',
      ruleTe: 'అర్ధవృత్త చుట్టుకొలత అంటే πr మాత్రమే కాదు, వ్యాసం 2r కూడా కలపాలి = (36/7)r!',
      formula: 'r=7 → C=44, A=154 | Semi-circle Perimeter = (36/7)r | Sector Area = (θ/360)πr² = (1/2)lr',
      exampleQEn: 'Find the perimeter and area of a semi-circular park of radius 14 meters.',
      exampleQTe: '14 మీటర్ల వ్యాసార్థం గల అర్ధవృత్తాకార పార్కు చుట్టుకొలత మరియు వైశాల్యం ఎంత?',
      exampleSolEn: 'Perimeter = (36 / 7) × 14 = 72 meters.\nArea = (1/2) × πr² = (1/2) × 616 = 308 m².',
      exampleSolTe: 'చుట్టుకొలత = (36/7) × 14 = 72 మీటర్లు.\nవైశాల్యం = 616 / 2 = 308 చ.మీ.'
    },
    {
      code: '9.4',
      titleEn: '3D Mensuration — Cube, Cuboid, Cylinder, Cone, Sphere & Hemisphere',
      titleTe: '3D క్షేత్రమితి — సమఘనం, దీర్ఘఘనం, స్తూపం, శంఖువు, గోళం & అర్ధగోళం',
      conceptEn: `Complete 3D Formula Chart for RRB:
1. **Cuboid ($l, b, h$)**: $\text{Volume} = lbh$ | $\text{LSA (4 Walls)} = 2h(l+b)$ | $\text{TSA} = 2(lb+bh+hl)$ | $\text{Diagonal} = \sqrt{l^2+b^2+h^2}$.
2. **Cube (side $a$)**: $\text{Volume} = a^3$ | $\text{LSA} = 4a^2$ | $\text{TSA} = 6a^2$ | $\text{Diagonal} = \sqrt{3}a$.
3. **Cylinder ($r, h$)**: $\text{Volume} = \pi r^2 h$ | $\text{CSA} = 2\pi rh$ | $\text{TSA} = 2\pi r(r + h)$.
4. **Cone ($r, h$, slant height $l = \sqrt{r^2+h^2}$)**: $\text{Volume} = \frac{1}{3}\pi r^2 h$ | $\text{CSA} = \pi rl$ | $\text{TSA} = \pi r(r + l)$.
5. **Sphere ($r$)**: $\text{Volume} = \frac{4}{3}\pi r^3$ | $\text{Surface Area} = 4\pi r^2$.
6. **Hemisphere ($r$)**: $\text{Volume} = \frac{2}{3}\pi r^3$ | $\text{CSA} = 2\pi r^2$ | **$\text{TSA} = 3\pi r^2$**.
• **Melting / Recasting Rule**: Volume before melting = Total Volume after recasting ($N = \frac{V_{\text{big}}}{V_{\text{small}}}$).`,
      conceptTe: `3D ఘన ఆకారాల పూర్తి సూత్రాలు:
1. **దీర్ఘఘనం (Cuboid)**: ఘనపరిమాణం $= lbh$, 4 గోడల వైశాల్యం $= 2h(l+b)$, సంపూర్ణ తల వైశాల్యం $= 2(lb+bh+hl)$, కర్ణం $= \sqrt{l^2+b^2+h^2}$.
2. **సమఘనం (Cube)**: ఘనపరిమాణం $= a^3$, ప్రక్కతల వైశాల్యం $= 4a^2$, సంపూర్ణ తల వైశాల్యం $= 6a^2$, కర్ణం $= \sqrt{3}a$.
3. **స్తూపం (Cylinder)**: ఘనపరిమాణం $= \pi r^2 h$, వక్రతల వైశాల్యం $= 2\pi rh$, సంపూర్ణ తల వైశాల్యం $= 2\pi r(r+h)$.
4. **శంఖువు (Cone)**: ఏటవాలు ఎత్తు $l = \sqrt{r^2+h^2}$, ఘనపరిమాణం $= \frac{1}{3}\pi r^2 h$, వక్రతల వైశాల్యం $= \pi rl$.
5. **గోళం (Sphere)**: ఘనపరిమాణం $= \frac{4}{3}\pi r^3$, తల వైశాల్యం $= 4\pi r^2$. **అర్ధగోళ సంపూర్ణ తల వైశాల్యం $= 3\pi r^2$**.`,
      ruleEn: '11-Divisibility Shortcut: Since π = 22/7 (multiple of 11), almost every Circle/Cylinder/Cone/Sphere answer is divisible by 11!',
      ruleTe: 'π = 22/7 లో 11 కారణాంకంగా ఉంటుంది కాబట్టి, స్తూపం/శంఖువు/గోళం లెక్కలలో ఇచ్చిన ఆప్షన్లలో ఏ సంఖ్య 11 చే భాగించబడుతుందో చూసి సెకన్లలో జవాబు గుర్తించవచ్చు!',
      formula: 'V_cyl = πr²h | V_cone = (1/3)πr²h | V_sphere = (4/3)πr³ | TSA_hemisphere = 3πr²',
      exampleQEn: 'A solid metallic sphere of radius 6 cm is melted and recast into small cones of radius 2 cm and height 6 cm. Find the number of cones formed.',
      exampleQTe: '6 సెం.మీ వ్యాసార్థం గల ఒక లోహపు గోళాన్ని కరిగించి, 2 సెం.మీ వ్యాసార్థం మరియు 6 సెం.మీ ఎత్తు గల చిన్న శంఖువులుగా పోతపోశారు. ఎన్ని శంఖువులు ఏర్పడతాయి?',
      exampleSolEn: 'Equate Volumes (cancel π/3 on both sides!):\nN × (1/3)π r_cone² h = (4/3)π R_sphere³\nN × (2² × 6) = 4 × (6 × 6 × 6) → N × 24 = 864 → N = 36 cones.',
      exampleSolTe: 'ఘనపరిమాణాలను సమానం చేయగా (π/3 క్యాన్సిల్ అవుతుంది):\nN × (2² × 6) = 4 × (6³) → N × 24 = 864 → N = 36 శంఖువులు.'
    },
    {
      code: '9.5',
      titleEn: 'Geometry — Polygons, Triangles, Cyclic Quadrilaterals & Circle Theorems',
      titleTe: 'రేఖాగణితం — బహుభుజులు, త్రిభుజాలు, చక్రీయ చతుర్భుజాలు & వృత్త సిద్ధాంతాలు',
      conceptEn: `High-yield RRB Geometry formulas:
1. **Regular Polygon of $n$ sides**:
   • **Sum of Interior Angles** $= (n - 2) \times 180^\circ$  |  **Sum of Exterior Angles** $= 360^\circ$ (Always!)
   • **Each Exterior Angle** $= \frac{360^\circ}{n}$  |  **Each Interior Angle** $= 180^\circ - \frac{360^\circ}{n}$
   • **Number of Diagonals** $= \frac{n(n - 3)}{2}$.
2. **Triangle & Circle Theorems**:
   • **Similar Triangles ($\triangle ABC \sim \triangle DEF$)**: $\frac{\text{Area}_1}{\text{Area}_2} = \left(\frac{\text{Side}_1}{\text{Side}_2}\right)^2 = \left(\frac{\text{Perimeter}_1}{\text{Perimeter}_2}\right)^2$.
   • **Incentre Angle**: $\angle BIC = 90^\circ + \frac{\angle A}{2}$ | **Circumcentre Angle**: $\angle BOC = 2\angle A$.
   • **Cyclic Quadrilateral**: Opposite angles sum to **$180^\circ$** ($\angle A + \angle C = 180^\circ$).
   • **Tangent-Secant Theorem**: $PT^2 = PA \times PB$.`,
      conceptTe: `రేఖాగణితం ముఖ్య సూత్రాలు:
1. **$n$ భుజాల క్రమ బహుభుజి (Regular Polygon)**:
   • అంతర కోణాల మొత్తం $= (n - 2) \times 180^\circ$ | బాహ్య కోణాల మొత్తం $= 360^\circ$.
   • ప్రతి బాహ్య కోణం $= \frac{360^\circ}{n}$ | **కర్ణాల సంఖ్య $= \frac{n(n - 3)}{2}$**.
2. **త్రిభుజ & వృత్త సిద్ధాంతాలు**:
   • సరూప త్రిభుజాల వైశాల్యాల నిష్పత్తి = భుజాల వర్గాల నిష్పత్తి ($\frac{A_1}{A_2} = \frac{S_1^2}{S_2^2}$).
   • అంతర కేంద్రం వద్ద కోణం $\angle BIC = 90^\circ + \frac{\angle A}{2}$. చక్రీయ చతుర్భుజంలో ఎదురెదురు కోణాల మొత్తం $= 180^\circ$.`,
      ruleEn: 'To find interior angle of a regular polygon quickly, ALWAYS find Exterior Angle = 360°/n first, then subtract from 180°!',
      ruleTe: 'బహుభుజి అంతర కోణం కావాలంటే ముందుగా బాహ్య కోణం (360°/n) కనుగొని, దానిని 180° నుండి తీసివేయండి!',
      formula: 'Diagonals = n(n-3)/2 | Exterior Angle = 360°/n | Incentre ∠BIC = 90° + ∠A/2 | PT² = PA × PB',
      exampleQEn: 'If each interior angle of a regular polygon is 144°, find the number of sides and the number of diagonals of the polygon.',
      exampleQTe: 'ఒక క్రమ బహుభుజిలోని ప్రతి అంతర కోణం 144° అయితే, దాని భుజాల సంఖ్య మరియు కర్ణాల సంఖ్య ఎంత?',
      exampleSolEn: 'Step 1: Exterior angle = 180° - 144° = 36°.\nStep 2: Number of sides n = 360° / 36° = 10 sides (Decagon).\nStep 3: Number of diagonals = n(n - 3)/2 = 10(7)/2 = 35 diagonals.',
      exampleSolTe: 'సోపానం 1: బాహ్య కోణం = 180° - 144° = 36°.\nసోపానం 2: భుజాల సంఖ్య n = 360° / 36° = 10.\nసోపానం 3: కర్ణాల సంఖ్య = 10(10 - 3) / 2 = 35 కర్ణాలు.'
    },
    {
      code: '9.6',
      titleEn: 'Algebra — Reciprocal Identities (x + 1/x = k) & Conditional Identities',
      titleTe: 'బీజగణితం — వ్యుత్క్రమ సూత్రాలు (x + 1/x = k) మరియు బీజగణిత సర్వసమీకరణాలు',
      conceptEn: `1. **Golden $x + \frac{1}{x} = k$ Ladder**:
   • $x^2 + \frac{1}{x^2} = \mathbf{k^2 - 2}$
   • $x^3 + \frac{1}{x^3} = \mathbf{k^3 - 3k}$
   • $x^4 + \frac{1}{x^4} = \mathbf{(k^2 - 2)^2 - 2}$
   • $x - \frac{1}{x} = \pm\sqrt{k^2 - 4}$
2. **If $x - \frac{1}{x} = k$**:
   • $x^2 + \frac{1}{x^2} = \mathbf{k^2 + 2}$  |  $x^3 - \frac{1}{x^3} = \mathbf{k^3 + 3k}$.
3. **Special Cases**:
   • If $x + \frac{1}{x} = 2 \implies \mathbf{x = 1}$!
   • If $x + \frac{1}{x} = -2 \implies \mathbf{x = -1}$!
   • **If $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$**!`,
      conceptTe: `1. **$x + \frac{1}{x} = k$ గోల్డెన్ సూత్రాలు**:
   • $x^2 + \frac{1}{x^2} = \mathbf{k^2 - 2}$
   • $x^3 + \frac{1}{x^3} = \mathbf{k^3 - 3k}$
2. **$x - \frac{1}{x} = k$ అయినప్పుడు**:
   • $x^2 + \frac{1}{x^2} = \mathbf{k^2 + 2}$  |  $x^3 - \frac{1}{x^3} = \mathbf{k^3 + 3k}$.
3. **$a + b + c = 0$ అయితే $a^3 + b^3 + c^3 = 3abc$**!`,
      ruleEn: 'Plus to Plus (x + 1/x = k) → Subtract (-2 or -3k). Minus to Plus/Minus (x - 1/x = k) → Add (+2 or +3k)!',
      ruleTe: 'ప్లస్ (+) ఇచ్చినప్పుడు సూత్రంలో మైనస్ (-2 లేదా -3k) వస్తుంది; మైనస్ (-) ఇచ్చినప్పుడు ప్లస్ (+2 లేదా +3k) వస్తుంది!',
      formula: 'x+1/x=k → x²+1/x²=k²-2, x³+1/x³=k³-3k | a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)',
      exampleQEn: 'If x + 1/x = 4, find the values of (i) x² + 1/x², (ii) x³ + 1/x³, and (iii) x⁴ + 1/x⁴.',
      exampleQTe: 'x + 1/x = 4 అయినచో (i) x² + 1/x², (ii) x³ + 1/x³, (iii) x⁴ + 1/x⁴ విలువలు కనుగొనండి.',
      exampleSolEn: 'Here k = 4:\n(i) x² + 1/x² = 4² - 2 = 14.\n(ii) x³ + 1/x³ = 4³ - 3(4) = 64 - 12 = 52.\n(iii) x⁴ + 1/x⁴ = 14² - 2 = 196 - 2 = 194.',
      exampleSolTe: 'k = 4 కావున:\n(i) x² + 1/x² = 4² - 2 = 14.\n(ii) x³ + 1/x³ = 4³ - 3(4) = 52.\n(iii) x⁴ + 1/x⁴ = 14² - 2 = 194.'
    },
    {
      code: '9.7',
      titleEn: 'Trigonometry — Ratios, Standard Table (0° to 90°), Identities & Complementary Angles',
      titleTe: 'త్రికోణమితి — నిష్పత్తులు, కోణాల పట్టిక (0°–90°), సర్వసమీకరణాలు & పూరక కోణాలు',
      conceptEn: `1. **3 Fundamental Identities**:
   • $\sin^2\theta + \cos^2\theta = 1$
   • $\sec^2\theta - \tan^2\theta = 1 \implies \mathbf{\sec\theta + \tan\theta = \frac{1}{\sec\theta - \tan\theta}}$
   • $\text{cosec}^2\theta - \cot^2\theta = 1 \implies \mathbf{\text{cosec}\theta + \cot\theta = \frac{1}{\text{cosec}\theta - \cot\theta}}$
2. **Complementary Angles (When $A + B = 90^\circ$)**:
   • $\sin A = \cos B$, $\tan A = \cot B$, $\sec A = \text{cosec } B$.
   • **$\tan A \cdot \tan B = 1$** (e.g., $\tan 10^\circ \cdot \tan 80^\circ = 1$, and $\tan 45^\circ = 1$).`,
      conceptTe: `1. **3 త్రికోణమితి సర్వసమీకరణాలు**:
   • $\sin^2\theta + \cos^2\theta = 1$
   • $\sec^2\theta - \tan^2\theta = 1$ (అనగా $\sec\theta + \tan\theta = k$ అయితే $\sec\theta - \tan\theta = 1/k$!).
   • $\text{cosec}^2\theta - \cot^2\theta = 1$.
2. **పూరక కోణాలు ($A + B = 90^\circ$ అయినప్పుడు)**: $\sin^2 A + \sin^2 B = 1$ మరియు $\tan A \cdot \tan B = 1$.`,
      ruleEn: 'If sec θ + tan θ = k, then sec θ - tan θ = 1/k, and adding both gives 2 sec θ = k + 1/k!',
      ruleTe: 'sec θ + tan θ = k అయితే sec θ - tan θ = 1/k అవుతుంది!',
      formula: 'sin²θ + cos²θ = 1 | sec²θ - tan²θ = 1 | If A+B=90° → tan A · tan B = 1',
      exampleQEn: 'If sec θ + tan θ = 3, find the value of sec θ and cos θ.',
      exampleQTe: 'sec θ + tan θ = 3 అయినచో, sec θ మరియు cos θ విలువలు ఎంత?',
      exampleSolEn: 'Given: sec θ + tan θ = 3 ... (1)\nThen: sec θ - tan θ = 1/3 ... (2)\nAdd (1) and (2): 2 sec θ = 3 + 1/3 = 10/3 → sec θ = 5/3 → cos θ = 3/5.',
      exampleSolTe: 'sec θ + tan θ = 3 మరియు sec θ - tan θ = 1/3.\nరెండింటినీ కూడగా: 2 sec θ = 10/3 → sec θ = 5/3 → cos θ = 3/5.'
    },
    {
      code: '9.8',
      titleEn: 'Heights and Distances (30°–60°–90° and 45°–45°–90° Triangle Ratio Method)',
      titleTe: 'ఎత్తులు మరియు దూరాలు (30°–60°–90° మరియు 45°–45°–90° నిష్పత్తి ట్రిక్)',
      conceptEn: `Never use $\tan\theta$ equations in Heights & Distances—use the **Triangle Side Ratio Trick**:
• **For $45^\circ$ Right Triangle**: $\text{Height} : \text{Base} : \text{Hypotenuse} = \mathbf{1 : 1 : \sqrt{2}}$ (Height = Shadow!).
• **For $30^\circ - 60^\circ - 90^\circ$ Triangle**:
  $$\text{Side opposite } 30^\circ : \text{Side opposite } 60^\circ : \text{Hypotenuse } (90^\circ) = \mathbf{1 : \sqrt{3} : 2}$$
• **Shadow Shift from $30^\circ$ to $60^\circ$**: Distance walked towards tower $= \mathbf{2 \text{ units}}$, Height of tower $= \mathbf{\sqrt{3} \text{ units}}$!`,
      conceptTe: `ఎత్తులు-దూరాల లెక్కలను 5 సెకన్లలో చేసే నిష్పత్తి ట్రిక్:
• **కోణం $45^\circ$ ఉన్నప్పుడు**: ఎత్తు మరియు నీడ పొడవు సమానం (**$1 : 1 : \sqrt{2}$**).
• **$30^\circ - 60^\circ - 90^\circ$ త్రిభుజంలో**: కోణాలకు ఎదురుగా ఉండే భుజాల నిష్పత్తి = **$1 : \sqrt{3} : 2$**.`,
      ruleEn: 'When elevation angle changes from 30° to 45° on walking distance d towards a tower of height H: d = H(√3 - 1) → H = d(√3 + 1)/2!',
      ruleTe: 'కోణం 30° నుండి 45° కి మారినప్పుడు గోపురం ఎత్తు H = d(√3 + 1) / 2!',
      formula: '45°-45°-90° → 1 : 1 : √2 | 30°-60°-90° → 1 : √3 : 2',
      exampleQEn: 'The angle of elevation of the top of a tower from a point 60 m away from its foot is 30°. Find the height of the tower.',
      exampleQTe: 'ఒక టవర్ అడుగు భాగం నుండి 60 మీటర్ల దూరంలో ఉన్న బిందువు నుండి టవర్పై కొన ఊర్ధ్వ కోణం 30°. ఆ టవర్ ఎత్తు ఎంత?',
      exampleSolEn: 'In 30°–60°–90° triangle, side opposite 60° (Base) = √3 parts = 60 m.\nHeight (side opposite 30° = 1 part) = 60 / √3 = 20√3 meters.',
      exampleSolTe: '30°–60°–90° నిష్పత్తి ప్రకారం: భూమి (√3 భాగాలు) = 60 మీ.\nటవర్ ఎత్తు (1 భాగం) = 60 / √3 = 20√3 మీటర్లు.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. 2D Perimeter/Area vs 3D Surface Area/Volume Scaling',
      titleTe: '1. భుజం k రెట్లు పెరిగితే వైశాల్యం k² రెట్లు, ఘనపరిమాణం k³ రెట్లు పెరుగుతుంది',
      en: 'If linear dimension (radius/side) becomes k times, Area becomes k² times and Volume becomes k³ times.',
      te: 'వ్యాసార్థం లేదా భుజం నిష్పత్తి a : b అయితే, వైశాల్యాల నిష్పత్తి a² : b² మరియు ఘనపరిమాణాల నిష్పత్తి a³ : b³ అవుతుంది.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Quadratic Equation Roots (α, β) of ax² + bx + c = 0',
      termTe: 'వర్గ సమీకరణం ax² + bx + c = 0 యొక్క మూలాల నియమం',
      defEn: 'Sum of roots (α + β) = -b/a | Product of roots (α·β) = c/a | Equation from roots: x² - (α+β)x + αβ = 0.',
      defTe: 'మూలాల మొత్తం (α + β) = -b/a | మూలాల లబ్దం (αβ) = c/a.'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Ratio of Volumes & Surface Areas of Spheres/Cubes',
      nameTe: 'గోళాలు లేదా సమఘనాల వైశాల్యాలు మరియు ఘనపరిమాణాల నిష్పత్తి',
      patternEn: 'Surface areas of two spheres are in ratio 4 : 9. Find ratio of their volumes.',
      patternTe: 'రెండు గోళాల ఉపరితల వైశాల్యాల నిష్పత్తి 4 : 9. వాటి ఘనపరిమాణాల నిష్పత్తి ఎంత?',
      approachEn: 'Radius ratio = √4 : √9 = 2 : 3 → Volume ratio = 2³ : 3³ = 8 : 27!',
      approachTe: 'వ్యాసార్థాల నిష్పత్తి = √4 : √9 = 2 : 3 → ఘనపరిమాణాల నిష్పత్తి = 2³ : 3³ = 8 : 27!'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Algebra Reciprocal Cube',
      qEn: 'If x - 1/x = 5, find the value of x³ - 1/x³.',
      qTe: 'x - 1/x = 5 అయినచో, x³ - 1/x³ విలువ ఎంత?',
      solEn: 'Using formula: If x - 1/x = k, then x³ - 1/x³ = k³ + 3k.\nFor k = 5: 5³ + 3(5) = 125 + 15 = 140.',
      solTe: 'సూత్రం: x - 1/x = k అయితే x³ - 1/x³ = k³ + 3k = 5³ + 3(5) = 125 + 15 = 140.',
      shortcutTip: 'Minus to Minus → ADD 3k (k³ + 3k)!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Circle r=7 → C=44, A=154. Semi-circle perimeter = (36/7)r. Polygon diagonals = n(n-3)/2.',
      pointTe: 'వృత్తం r=7 → చుట్టుకొలత=44, వైశాల్యం=154. అర్ధవృత్త చుట్టుకొలత=(36/7)r. బహుభుజి కర్ణాలు=n(n-3)/2.'
    },
    {
      pointEn: 'x + 1/x = k → x² + 1/x² = k² - 2, x³ + 1/x³ = k³ - 3k. sin²θ + cos²θ = 1, sec²θ - tan²θ = 1.',
      pointTe: 'x + 1/x = k → x² + 1/x² = k² - 2, x³ + 1/x³ = k³ - 3k.'
    }
  ]
};

/* ============================================================================
   CHAPTER 10: DECIMALS & FRACTIONS — COMPLETE CHAPTER (దశాంశ భిన్నాలు)
   7 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-decimals'] = {
  id: 'math-decimals',
  chapterNo: 10,
  titleEn: 'Chapter 10: Decimals & Fractions — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 10: దశాంశ భిన్నాలు మరియు ఆవర్తత దశాంశాలు (Decimals) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (2 Questions in Every Shift)',
  readTime: '32 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-decimals',

  introEn: `Welcome to Chapter 10: **Decimals & Fractions (దశాంశ భిన్నాలు మరియు ఆవర్తత దశాంశాలు)**. Officially listed as a standalone topic in the RRB NTPC and Group-D Mathematics syllabus, Decimals contributes 2 direct questions per shift—testing Fraction Comparison, Terminating vs Non-Terminating Decimal Rules ($2^n \times 5^m$), Pure and Mixed Recurring Decimals (Bar Numbers), Decimal LCM & HCF, and Ladder Fractions. Study all **7 syllabus sub-topics** below.`,

  introTe: `**అధ్యాయం 10: దశాంశ భిన్నాలు మరియు ఆవర్తత దశాంశాలు (Decimals)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి అధికారిక గణిత సిలబస్‌లో ప్రత్యేకంగా పేర్కొన్న ఈ అధ్యాయం నుండి ప్రతి షిఫ్ట్‌లో 2 ప్రశ్నలు వస్తాయి. ఇందులో భిన్నాల పోలిక, అంతమయ్యే దశాంశ నియమం ($2^n \times 5^m$), ఆవర్తత దశాంశాల (Bar సంఖ్యల) మార్పిడి, దశాంశాల క.సా.గు/గ.సా.భా మరియు మెట్ల భిన్నాలను 7 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '10.1',
      titleEn: 'Types of Fractions (Proper, Improper, Mixed & Decimal Fractions)',
      titleTe: 'భిన్నాల రకాలు (క్రమ, అపక్రమ, మిశ్రమ మరియు దశాంశ భిన్నాలు)',
      conceptEn: `• **Proper Fraction (క్రమ భిన్నం)**: Numerator $<$ Denominator (Value $< 1$, e.g., $\frac{3}{7}$).
• **Improper Fraction (అపక్రమ భిన్నం)**: Numerator $\ge$ Denominator (Value $\ge 1$, e.g., $\frac{9}{4}$).
• **Mixed Fraction (మిశ్రమ భిన్నం)**: $a\frac{b}{c} = a + \frac{b}{c} = \frac{ac + b}{c}$.
• **Decimal Fraction (దశాంశ భిన్నం)**: A fraction whose denominator is a power of 10 ($10, 100, 1000\dots$).`,
      conceptTe: `• **క్రమ భిన్నం**: లవం $<$ హారం (ఉదా: $\frac{3}{7}$, దీని విలువ 1 కంటే తక్కువ).
• **అపక్రమ భిన్నం**: లవం $\ge$ హారం (ఉదా: $\frac{9}{4}$).
• **మిశ్రమ భిన్నం**: $a\frac{b}{c} = a + \frac{b}{c}$ (సూక్ష్మీకరణలో పూర్ణాంకాలను, భిన్నాలను విడివిడిగా కూడుకోవచ్చు!).`,
      ruleEn: 'In adding mixed fractions like 99(1/7) + 99(2/7) + ... + 99(6/7), add integer parts (99 × 6 = 594) and fraction parts (21/7 = 3) separately → 597!',
      ruleTe: 'మిశ్రమ భిన్నాలను కూడేటప్పుడు పూర్ణ సంఖ్యలను విడిగా, భిన్నాలను విడిగా కూడితే 5 సెకన్లలో జవాబు వస్తుంది!',
      formula: 'a(b/c) = a + b/c | Sum of (1/n + 2/n + ... + (n-1)/n) = (n - 1) / 2',
      exampleQEn: 'Find the value of: 999(1/7) + 999(2/7) + 999(3/7) + 999(4/7) + 999(5/7) + 999(6/7).',
      exampleQTe: '999(1/7) + 999(2/7) + 999(3/7) + 999(4/7) + 999(5/7) + 999(6/7) విలువ ఎంత?',
      exampleSolEn: 'Step 1: Add the six integer parts: 999 × 6 = 5994.\nStep 2: Add the fraction parts: (1 + 2 + 3 + 4 + 5 + 6)/7 = 21/7 = 3.\nStep 3: Total = 5994 + 3 = 5997.',
      exampleSolTe: 'సోపానం 1: ఆరు పూర్ణ సంఖ్యల మొత్తం = 999 × 6 = 5994.\nసోపానం 2: భిన్నాల మొత్తం = (1+2+3+4+5+6)/7 = 21/7 = 3.\nసోపానం 3: మొత్తం = 5994 + 3 = 5997.'
    },
    {
      code: '10.2',
      titleEn: 'Comparison of Fractions (Difference Rule & Cross-Multiplication)',
      titleTe: 'భిన్నాల పోలిక — ఏది పెద్ద భిన్నం? ఏది చిన్న భిన్నం? (భేదం నియమం)',
      conceptEn: `1. **Constant Gap Rule**: In proper fractions ($\text{Num} < \text{Den}$), if the difference $(\text{Denominator} - \text{Numerator})$ is the SAME for all fractions, then the fraction with the **LARGEST Numerator is the LARGEST fraction**!
   • Example: Compare $\frac{13}{15}, \frac{17}{19}, \frac{23}{25}, \frac{31}{33}$ (All have gap $= 2$) $\implies \mathbf{\frac{31}{33}}$ is the largest!
2. **Unequal Gap Rule**: Divide each Numerator by its Gap $(\text{Den} - \text{Num})$!`,
      conceptTe: `1. **లవానికి, హారానికి మధ్య భేదం సమానంగా ఉన్నప్పుడు**: క్రమ భిన్నాలలో లవానికి, హారానికి మధ్య భేదం సమానంగా ఉంటే, **పెద్ద లవం గల భిన్నమే అతి పెద్ద భిన్నం** అవుతుంది!
2. **భేదాలు వేర్వేరుగా ఉన్నప్పుడు**: ప్రతి భిన్నం యొక్క **లవాన్ని ఆ భిన్నం యొక్క భేదం (హారం - లవం) చే భాగించండి**!`,
      ruleEn: 'Quickest Test for Any Fractions: Divide Numerator by (Denominator - Numerator)! Largest quotient = Largest fraction.',
      ruleTe: 'ఏ భిన్నాలనైనా పోల్చడానికి: (లవం) ÷ (హారం - లవం) చేయండి! పెద్ద విలువ వచ్చినదే పెద్ద భిన్నం.',
      formula: 'Comparison Score = Numerator / (Denominator - Numerator)',
      exampleQEn: 'Find the largest and smallest fractions among: 5/6, 7/9, 11/13, and 16/19.',
      exampleQTe: '5/6, 7/9, 11/13 మరియు 16/19 లలో అతి పెద్ద మరియు అతి చిన్న భిన్నాలను కనుగొనండి.',
      exampleSolEn: 'Divide Numerator by Gap (Den - Num):\n• 5/6 → 5/1 = 5.0\n• 7/9 → 7/2 = 3.5 (Smallest!)\n• 11/13 → 11/2 = 5.5 (Largest!)\n• 16/19 → 16/3 = 5.33.\nSo Largest = 11/13, Smallest = 7/9.',
      exampleSolTe: 'లవం ÷ భేదం చేయగా:\n• 5/6 → 5/1 = 5.0\n• 7/9 → 7/2 = 3.5 (అతి చిన్నది)\n• 11/13 → 11/2 = 5.5 (అతి పెద్దది)\n• 16/19 → 16/3 = 5.33.\nకావున పెద్ద భిన్నం = 11/13, చిన్న భిన్నం = 7/9.'
    },
    {
      code: '10.3',
      titleEn: 'Terminating vs Non-Terminating Decimals (2ⁿ × 5ᵐ Denominator Rule)',
      titleTe: 'అంతమయ్యే దశాంశం vs అంతం కాని ఆవర్తత దశాంశం (2ⁿ × 5ᵐ హార నియమం)',
      conceptEn: `A fraction $\frac{p}{q}$ (reduced to its lowest form) produces a **Terminating Decimal** if and only if the prime factorization of the denominator $q$ contains **ONLY $2$ and/or $5$** ($q = 2^n \times 5^m$).
• Also, the **number of decimal places** after which it terminates is $\mathbf{\max(n, m)}$!`,
      conceptTe: `కనిష్ట రూపంలో ఉన్న $\frac{p}{q}$ భిన్నం యొక్క హారం $q$ లో **కేవలం 2 లేదా 5 మాత్రమే** ప్రధాన కారణాంకాలుగా ($q = 2^n \times 5^m$) ఉంటే అది **అంతమయ్యే దశాంశం (Terminating Decimal)** అవుతుంది. లేకపోతే ఆవర్తత దశాంశం అవుతుంది!`,
      ruleEn: 'Always cancel common factors between numerator and denominator FIRST before checking the denominator!',
      ruleTe: 'హారాన్ని పరీక్షించే ముందు లవహారాలలో ఉమ్మడి కారణాంకాలు ఉంటే తప్పకుండా కొట్టివేయాలి (ఉదా: 6/15 = 2/5 → అంతమయ్యే దశాంశం)!',
      formula: 'q = 2ⁿ × 5ᵐ → Terminates after max(n, m) decimal places',
      exampleQEn: 'After how many decimal places will the fraction 43 / (2⁴ × 5³) terminate?',
      exampleQTe: '43 / (2⁴ × 5³) అనే భిన్నం దశాంశ బిందువు తర్వాత ఎన్ని స్థానాలకు అంతమవుతుంది?',
      exampleSolEn: 'Here powers of 2 and 5 in denominator are n = 4 and m = 3.\nIt terminates after max(4, 3) = 4 decimal places.',
      exampleSolTe: 'హారంలో 2 ఘాతం 4 మరియు 5 ఘాతం 3. గరిష్ట ఘాతం max(4, 3) = 4 కాబట్టి 4 దశాంశ స్థానాల తర్వాత అంతమవుతుంది.'
    },
    {
      code: '10.4',
      titleEn: 'Pure & Mixed Recurring Decimals (Bar Numbers) to Vulgar Fractions',
      titleTe: 'ఆవర్తత దశాంశాలను (Bar సంఖ్యలు) సాధారణ భిన్నాలుగా మార్చే 9లు & 0ల నియమం',
      conceptEn: `• **Pure Recurring**: $0.\overline{ab} = \frac{ab}{99}$, $0.\overline{abc} = \frac{abc}{999}$.
• **Mixed Recurring**: $0.a\overline{bc} = \frac{abc - a}{990}$ (Write as many **9s** as digits under the bar, followed by as many **0s** as non-repeating decimal digits!).`,
      conceptTe: `• **శుద్ధ ఆవర్తత దశాంశం**: బార్ కింద ఎన్ని అంకెలు ఉంటే హారంలో అన్ని **9లు** రాయాలి ($0.\overline{27} = \frac{27}{99} = \frac{3}{11}$).
• **మిశ్రమ ఆవర్తత దశాంశం**: బార్ కింద ఉన్న అంకెలకు **9లు**, బార్ ముందు ఉన్న దశాంశ అంకెలకు **0లు** హారంలో రాయాలి ($0.2\overline{35} = \frac{235 - 2}{990} = \frac{233}{990}$).`,
      ruleEn: 'If there is an integer before the decimal point like 2.36̄, write it as 2 + (36/99) = 2 + 4/11 = 26/11!',
      ruleTe: 'దశాంశ బిందువు ముందు పూర్ణ సంఖ్య ఉంటే (ఉదా: 2.36̄), దానిని 2 + 36/99 = 2(4/11) = 26/11 గా రాయాలి!',
      formula: '0.ab̄ = ab/99 | 0.a(bc)̄ = (abc - a)/990',
      exampleQEn: 'Express 1.272727... (1.27̄) in the form p/q.',
      exampleQTe: '1.272727... (1.27̄) ను p/q భిన్నం రూపంలో తెలపండి.',
      exampleSolEn: '1.27̄ = 1 + 0.27̄ = 1 + (27 / 99) = 1 + (3 / 11) = 14 / 11.',
      exampleSolTe: '1.27̄ = 1 + 27/99 = 1 + 3/11 = 14/11.'
    },
    {
      code: '10.5',
      titleEn: 'Operations on Decimals (Multiplication/Division Place Shifts)',
      titleTe: 'దశాంశ సంఖ్యల గుణకారం మరియు భాగహారాలలో దశాంశ బిందువు స్థాన మార్పిడి',
      conceptEn: `When the exact integer product is given (e.g., $48 \times 35 = 1680$), to find $0.048 \times 3.5$, simply count total decimal places ($3 + 1 = 4$ places from right) $\implies 0.1680 = 0.168$!`,
      conceptTe: `గుణకారంలో రెండు సంఖ్యలలోని దశాంశ స్థానాల సంఖ్యను కూడి, లబ్దంలో కుడివైపు నుండి అన్ని స్థానాల ముందు చుక్క పెట్టాలి. భాగహారంలో (లవం దశాంశ స్థానాలు - హారం దశాంశ స్థానాలు) నియమం వాడాలి.`,
      ruleEn: 'In division (0.0144 ÷ 0.12), decimal places in result = (4 places in num) - (2 places in den) = 2 decimal places → 0.12!',
      ruleTe: 'భాగహారంలో ఫలితంలోని దశాంశ స్థానాలు = (లవంలోని దశాంశ స్థానాలు) - (హారంలోని దశాంశ స్థానాలు)!',
      formula: 'Decimal Places in (A × B) = Places(A) + Places(B) | In (A ÷ B) = Places(A) - Places(B)',
      exampleQEn: 'If 2994 ÷ 14.5 = 172, then find the value of 29.94 ÷ 1.45.',
      exampleQTe: '2994 ÷ 14.5 = 172 అయినచో, 29.94 ÷ 1.45 విలువ ఎంత?',
      exampleSolEn: 'Note: Actually 29.94 / 1.45 has (2 - 2 = 0) shift relative to 2994/145, whereas given 2994 / 14.5 has (0 - 1 = +1) shift.\nMoving numerator 2 places left (÷100) and denominator 1 place left (÷10) divides the answer by 10 → 172 ÷ 10 = 17.2.',
      exampleSolTe: '29.94 ÷ 1.45 = (2994 ÷ 14.5) × (10 / 100) = 172 ÷ 10 = 17.2.'
    },
    {
      code: '10.6',
      titleEn: 'LCM and HCF of Decimal Numbers',
      titleTe: 'దశాంశ సంఖ్యల క.సా.గు (LCM) మరియు గ.సా.భా (HCF)',
      conceptEn: `Step 1: Add trailing zeros so all numbers have the **same number of digits after the decimal point**.
Step 2: Ignore the decimal point and find the LCM and HCF of the resulting integers.
Step 3: Put back the same number of decimal places in the answer!`,
      conceptTe: `సోపానం 1: అన్ని సంఖ్యలలో దశాంశ స్థానాల సంఖ్య సమానంగా ఉండేలా చివర సున్నాలు చేర్చండి.
సోపానం 2: పూర్ణ సంఖ్యల వలె క.సా.గు మరియు గ.సా.భా కనుగొని, తిరిగి అన్ని దశాంశ స్థానాల ముందు చుక్క పెట్టండి!`,
      ruleEn: 'Never find LCM/HCF of decimals without equalizing decimal places first!',
      ruleTe: 'దశాంశ స్థానాలను సమానం చేయకుండా ఎప్పుడూ క.సా.గు / గ.సా.భా చేయకూడదు!',
      formula: 'Equalize decimal places → Find Integer LCM/HCF → Restore decimal places',
      exampleQEn: 'Find the HCF and LCM of 1.08, 0.36, and 0.9.',
      exampleQTe: '1.08, 0.36 మరియు 0.9 ల గ.సా.భా (HCF) మరియు క.సా.గు (LCM) కనుగొనండి.',
      exampleSolEn: 'Equalize to 2 decimal places: 1.08, 0.36, 0.90.\nFor integers 108, 36, 90:\n• HCF(108, 36, 90) = 18 → HCF = 0.18.\n• LCM(108, 36, 90) = 540 → LCM = 5.40 = 5.4.',
      exampleSolTe: '2 దశాంశ స్థానాలకు సమానం చేయగా: 1.08, 0.36, 0.90.\n108, 36, 90 ల గ.సా.భా = 18 → HCF = 0.18.\nక.సా.గు = 540 → LCM = 5.40 = 5.4.'
    },
    {
      code: '10.7',
      titleEn: 'Continued / Ladder Fractions (మెట్ల భిన్నాల సూక్ష్మీకరణ)',
      titleTe: 'మెట్ల భిన్నాలు (Continued / Ladder Fractions) — అడుగు నుండి పైకి చేసే ట్రిక్',
      conceptEn: `To simplify a ladder fraction like $1 + \frac{1}{1 + \frac{1}{1 + \frac{2}{3}}}$, ALWAYS start from the **bottom-most fraction** and move upwards step-by-step using the Chain Addition Rule!`,
      conceptTe: `మెట్ల భిన్నాలను ఎల్లప్పుడూ **అట్టడుగున ఉన్న భిన్నం నుండి ప్రారంభించి పైకి** సూక్ష్మీకరించాలి!`,
      ruleEn: 'Chain Trick for 1 + 1/(1 + 1/(1 + a/b)): Write a, b and add previous term for each step: a, b, (a+b), (a+2b), (2a+3b)...!',
      ruleTe: 'అన్నీ +1 లు ఉన్న మెట్ల భిన్నంలో చివరి భిన్నం a/b యొక్క లవ హారాలను వరుసగా కూడుకుంటూ వెళ్తే 5 సెకన్లలో జవాబు వస్తుంది!',
      formula: 'Start from bottom-most denominator and reciprocate at each step.',
      exampleQEn: 'Simplify the ladder fraction: 1 + 1 / (1 + 1 / (1 + 2/3)).',
      exampleQTe: 'సూక్ష్మీకరించండి: 1 + 1 / (1 + 1 / (1 + 2/3)).',
      exampleSolEn: 'Step 1 (Bottom): 1 + 2/3 = 5/3 → Reciprocal = 3/5.\nStep 2 (Middle): 1 + 3/5 = 8/5 → Reciprocal = 5/8.\nStep 3 (Top): 1 + 5/8 = 13/8.',
      exampleSolTe: 'సోపానం 1 (అడుగున): 1 + 2/3 = 5/3 → వ్యుత్క్రమం = 3/5.\nసోపానం 2 (మధ్యలో): 1 + 3/5 = 8/5 → వ్యుత్క్రమం = 5/8.\nసోపానం 3 (పైన): 1 + 5/8 = 13/8.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Trailing Zeros After Decimal Do Not Change Value',
      titleTe: '1. దశాంశ బిందువు తర్వాత చివరలో చేర్చే సున్నాల వల్ల విలువ మారదు',
      en: '0.5 = 0.50 = 0.500. This property is used when adding, subtracting, or finding LCM/HCF of decimals.',
      te: '0.5 = 0.50 = 0.500. దశాంశాల క.సా.గు మరియు గ.సా.భా కనుగొనేటప్పుడు ఈ ధర్మాన్ని వాడుతాము.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: '0.999... (0.9̄) Equals Exactly 1',
      termTe: '0.999... (0.9̄) విలువ ఖచ్చితంగా 1 కి సమానం',
      defEn: 'By recurring rule, 0.9̄ = 9/9 = 1.',
      defTe: 'ఆవర్తత నియమం ప్రకారం 0.9̄ = 9/9 = 1.'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Ascending / Descending Order of Fractions',
      nameTe: 'భిన్నాల ఆరోహణ / అవరోహణ క్రమం',
      patternEn: 'Arrange 3/5, 7/9, 11/13 in ascending order.',
      patternTe: '3/5, 7/9, 11/13 భిన్నాలను ఆరోహణ క్రమంలో అమర్చండి.',
      approachEn: 'Gap is 2 for all! So smaller numerator = smaller fraction: 3/5 < 7/9 < 11/13.',
      approachTe: 'అన్నింటిలో భేదం 2 కాబట్టి: 3/5 < 7/9 < 11/13.'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB Group-D • Recurring Decimal Addition',
      qEn: 'Find the value of: 0.63̄ + 0.37̄ + 0.80̄ (where bar is on both digits in each term).',
      qTe: '0.63̄ + 0.37̄ + 0.80̄ విలువ ఎంత?',
      solEn: '= 63/99 + 37/99 + 80/99 = 180/99 = (99 + 81)/99 = 1 + 81/99 = 1.81̄.',
      solTe: '= 63/99 + 37/99 + 80/99 = 180/99 = 1 + 81/99 = 1.81̄.',
      shortcutTip: 'Keep denominator as 99 without simplifying so you can convert back to bar form immediately!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Compare Fractions: Score = Num / (Den - Num). Terminating Decimal: Denominator in lowest form has only 2ⁿ × 5ᵐ.',
      pointTe: 'భిన్నాల పోలిక = లవం / (హారం - లవం). అంతమయ్యే దశాంశానికి హారంలో 2 మరియు 5 మాత్రమే ఉండాలి.'
    },
    {
      pointEn: 'Recurring Decimals: 0.ab̄ = ab/99 | 0.a(bc)̄ = (abc - a)/990. Equalize decimal places before finding LCM/HCF.',
      pointTe: '0.ab̄ = ab/99 | 0.a(bc)̄ = (abc - a)/990.'
    }
  ]
};

/* ============================================================================
   CHAPTER 11: SQUARE ROOTS, CUBE ROOTS, SURDS & INDICES — COMPLETE CHAPTER
   7 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-square-roots'] = {
  id: 'math-square-roots',
  chapterNo: 11,
  titleEn: 'Chapter 11: Square Roots, Cube Roots, Surds & Indices — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 11: వర్గమూలాలు, ఘనమూలాలు, కరణులు & ఘాతాంకాలు — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (2–3 Questions in Every Shift)',
  readTime: '34 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-square-roots',

  introEn: `Welcome to Chapter 11: **Square Roots, Cube Roots, Surds & Indices**. Every RRB NTPC and Group-D paper features 2 to 3 questions on Perfect Square properties, 5-second Square Root and Cube Root tricks, Decimal Square Roots, Laws of Exponents, Surd Rationalization ($\frac{1}{\sqrt{a} \pm \sqrt{b}}$), and Infinite Nested Square Roots. Study all **7 syllabus sub-topics** below.`,

  introTe: `**అధ్యాయం 11: వర్గమూలాలు, ఘనమూలాలు, కరణులు మరియు ఘాతాంకాలు (Square Roots, Cube Roots, Surds & Indices)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి పరీక్షలలో ప్రతి షిఫ్ట్‌లో ఈ అధ్యాయం నుండి 2 నుండి 3 ప్రశ్నలు తప్పనిసరిగా వస్తాయి. ఇందులో ఖచ్చితమైన వర్గ సంఖ్యల ధర్మాలు, 5 సెకన్లలో వర్గమూలం & ఘనమూలం కనుగొనే ట్రిక్స్, దశాంశ వర్గమూలాలు, ఘాతాంక నియమాలు, కరణుల అకరణీయీకరణం మరియు అనంత వర్గమూల శ్రేణులను 7 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '11.1',
      titleEn: 'Properties of Perfect Squares & Non-Square Unit Digit Rule (2, 3, 7, 8)',
      titleTe: 'ఖచ్చితమైన వర్గ సంఖ్యల ధర్మాలు & చివర ఉండకూడని అంకెల నియమం (2, 3, 7, 8)',
      conceptEn: `1. **Unit Digit Elimination Rule**: A Perfect Square can **NEVER end with unit digits 2, 3, 7, or 8**, and can never end with an **odd number of zeros**!
2. **Unit Digit Pairing of Squares**:
   • Ends in **1** $\rightarrow$ Root ends in **1 or 9** ($1+9=10$)
   • Ends in **4** $\rightarrow$ Root ends in **2 or 8** ($2+8=10$)
   • Ends in **5** $\rightarrow$ Root ends in **5** (and tens digit before 5 is ALWAYS **2**, i.e., ends in **25**!)
   • Ends in **6** $\rightarrow$ Root ends in **4 or 6** ($4+6=10$)
   • Ends in **9** $\rightarrow$ Root ends in **3 or 7** ($3+7=10$).
3. **Digital Sum of any Perfect Square** is always **1, 4, 7, or 9**.`,
      conceptTe: `1. **ఒకట్ల స్థానం నియమం**: ఏ ఖచ్చితమైన వర్గ సంఖ్య (Perfect Square) చివరన (ఒకట్ల స్థానంలో) **2, 3, 7, 8** అంకెలు లేదా **బేసి సంఖ్యలో సున్నాలు** ఎప్పుడూ ఉండవు!
2. **వర్గం చివరి అంకె $\rightarrow$ వర్గమూలం చివరి అంకె**:
   • చివర **1** ఉంటే $\rightarrow$ **1 లేదా 9**  |  చివర **4** ఉంటే $\rightarrow$ **2 లేదా 8**
   • చివర **5** ఉంటే $\rightarrow$ **5** (చివరి రెండు అంకెలు ఎల్లప్పుడూ **25** ఉంటాయి!)
   • చివర **6** ఉంటే $\rightarrow$ **4 లేదా 6**  |  చివర **9** ఉంటే $\rightarrow$ **3 లేదా 7**.`,
      ruleEn: 'Last two digits of any perfect square MUST match the last two digits of the square of some number from 1 to 24!',
      ruleTe: 'ఏ ఖచ్చితమైన వర్గ సంఖ్య యొక్క చివరి 2 అంకెలైనా 1 నుండి 24 వరకు గల సంఖ్యల వర్గాల చివరి 2 అంకెలతో సరిపోలాలి!',
      formula: 'Non-square endings: 2, 3, 7, 8 | (n5)² = n(n+1) followed by 25',
      exampleQEn: 'Which of the following numbers CANNOT be a perfect square? (A) 7921  (B) 5476  (C) 8643  (D) 9216',
      exampleQTe: 'క్రింది వాటిలో ఖచ్చితమైన వర్గ సంఖ్య (Perfect Square) కానిది ఏది? (A) 7921  (B) 5476  (C) 8643  (D) 9216',
      exampleSolEn: 'Option (C) 8643 ends with unit digit 3. Since no perfect square can end in 2, 3, 7, or 8, 8643 is NOT a perfect square.',
      exampleSolTe: 'ఆప్షన్ (C) 8643 చివర 3 ఉంది. ఏ వర్గ సంఖ్య చివర 2, 3, 7, 8 ఉండవు కాబట్టి 8643 వర్గ సంఖ్య కాదు.'
    },
    {
      code: '11.2',
      titleEn: '5-Second Shortcut to Find Square Root of Any 4-to-5 Digit Perfect Square',
      titleTe: '5 సెకన్లలో వర్గమూలం (Square Root) కనుగొనే చివరి 2-అంకెల కొట్టివేత ట్రిక్',
      conceptEn: `To find $\sqrt{N}$ (e.g., $\sqrt{7921}$):
1. Look at the **last digit** (1 $\rightarrow$ root ends in **1 or 9**) and **strike out the last 2 digits** (21).
2. For the remaining number (**79**), find the largest square $\le 79$: $8^2 = 64 \implies$ Tens digit is **8**.
3. Multiply $8 \times (8 + 1) = 8 \times 9 = 72$.
   • Since **$79 > 72$**, pick the **larger** unit digit (**9**) $\implies \mathbf{\sqrt{7921} = 89}$! (If remaining $< 72$, pick the smaller digit).`,
      conceptTe: `$\sqrt{7921}$ ను 5 సెకన్లలో కనుగొనే పద్ధతి:
1. చివరి అంకె 1 కాబట్టి వర్గమూలం చివర **1 లేదా 9** వస్తుంది. చివరి 2 అంకెలు (21) కొట్టివేయండి.
2. మిగిలిన సంఖ్య **79** కంటే చిన్నదైన వర్గం $8^2 = 64 \implies$ పదుల స్థానం = **8**.
3. 8 ని తర్వాతి సంఖ్య 9 తో గుణించండి: $8 \times 9 = 72$. ఇక్కడ 79 అనేది 72 కంటే **పెద్దది** కాబట్టి పెద్ద అంకె (**9**) తీసుకోవాలి $\implies \mathbf{89}$!`,
      ruleEn: 'Compare remaining number with n(n+1): If Remaining ≥ n(n+1), pick Larger unit digit; if Remaining < n(n+1), pick Smaller unit digit!',
      ruleTe: 'మిగిలిన సంఖ్య n(n+1) కంటే పెద్దదైతే పెద్ద అంకెను, చిన్నదైతే చిన్న అంకెను ఎంచుకోవాలి!',
      formula: 'Strike last 2 digits → Find n² ≤ Remaining → Compare Remaining with n(n+1)',
      exampleQEn: 'Find the square root of 9216 using the 5-second shortcut.',
      exampleQTe: '5 సెకన్ల షార్ట్‌కట్ ద్వారా 9216 యొక్క వర్గమూలం (√9216) కనుగొనండి.',
      exampleSolEn: 'Step 1: Ends in 6 → root ends in 4 or 6. Strike out 16, remaining = 92.\nStep 2: 9² = 81 ≤ 92 → Tens digit = 9.\nStep 3: Compare 92 with 9 × 10 = 90. Since 92 > 90, pick larger digit 6 → √9216 = 96!',
      exampleSolTe: 'సోపానం 1: చివర 6 కాబట్టి 4 లేదా 6. మిగిలిన సంఖ్య 92 → 9² = 81 (పదుల స్థానం 9).\nసోపానం 2: 9 × 10 = 90 కంటే 92 పెద్దది కాబట్టి పెద్ద అంకె 6 తీసుకోవాలి → √9216 = 96!'
    },
    {
      code: '11.3',
      titleEn: 'Perfect Cubes & 3-Second Cube Root Trick (ઘనమూలం — ∛)',
      titleTe: 'ఘన సంఖ్యలు మరియు 3 సెకన్లలో ఘనమూలం (Cube Root — ∛) కనుగొనే ట్రిక్',
      conceptEn: `Cube Roots ($\sqrt[3]{N}$) are even easier than Square Roots because **every digit has a UNIQUE cube ending**:
• **Same Ending Digits**: **0 $\rightarrow$ 0, 1 $\rightarrow$ 1, 4 $\rightarrow$ 4, 5 $\rightarrow$ 5, 6 $\rightarrow$ 6, 9 $\rightarrow$ 9**!
• **Flip Pairs (Sum = 10)**: **2 $\leftrightarrow$ 8**  and  **3 $\leftrightarrow$ 7**!
• **3-Second Method**: Match the last digit, **strike out the last 3 digits**, and find the largest cube $\le$ remaining number!`,
      conceptTe: `ఘనమూలం ($\sqrt[3]{N}$) కనుగొనడం వర్గమూలం కంటే సులభం:
• **మారని అంకెలు**: చివర **0, 1, 4, 5, 6, 9** ఉంటే ఘనమూలం చివర **అవే అంకెలు** వస్తాయి!
• **మారే జతలు**: **2 $\leftrightarrow$ 8** మరియు **3 $\leftrightarrow$ 7** మాత్రమే తారుమారవుతాయి!
• **పద్ధతి**: చివరి అంకెను బట్టి ఒకట్ల స్థానం రాసి, **చివరి 3 అంకెలను కొట్టివేసి**, మిగిలిన సంఖ్యకు దగ్గరగా ఉండే చిన్న ఘనం ($n^3$) తీసుకోండి!`,
      ruleEn: 'Memorize cubes 1³ to 10³: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.',
      ruleTe: '1³ నుండి 10³ వరకు ఘనాలు: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.',
      formula: '2 ↔ 8 | 3 ↔ 7 | All other digits (0,1,4,5,6,9) stay SAME! Strike out last 3 digits.',
      exampleQEn: 'Find the cube root of 175616 (∛175616).',
      exampleQTe: '175616 యొక్క ఘనమూలం (∛175616) ఎంత?',
      exampleSolEn: 'Step 1: Last digit is 6 → Cube root ends in 6. Strike out last 3 digits (616).\nStep 2: Remaining number is 175. Largest cube ≤ 175 is 5³ = 125 (since 6³ = 216 > 175).\nTherefore, ∛175616 = 56!',
      exampleSolTe: 'సోపానం 1: చివరి అంకె 6 కాబట్టి ఒకట్ల స్థానం = 6. చివరి 3 అంకెలు (616) కొట్టివేయగా మిగిలినది 175.\nసోపానం 2: 175 కంటే చిన్నదైన ఘనం 5³ = 125 → పదుల స్థానం = 5.\nకావున ∛175616 = 56!'
    },
    {
      code: '11.4',
      titleEn: 'Square Roots and Cube Roots of Decimal Numbers',
      titleTe: 'దశాంశ సంఖ్యల వర్గమూలాలు మరియు ఘనమూలాలు',
      conceptEn: `• **In Square Root ($\sqrt{}$)**: Number of decimal places becomes **HALF ($\div 2$)**! (e.g., 4 decimal places $\rightarrow 2$ decimal places in root).
• **In Cube Root ($\sqrt[3]{}$)**: Number of decimal places becomes **ONE-THIRD ($\div 3$)**! (e.g., 6 decimal places $\rightarrow 2$ decimal places in cube root: $\sqrt[3]{0.000027} = 0.03$).`,
      conceptTe: `• **వర్గమూలంలో ($\sqrt{}$)**: దశాంశ స్థానాల సంఖ్య **సగం ($\div 2$)** అవుతుంది!
• **ఘనమూలంలో ($\sqrt[3]{}$)**: దశాంశ స్థానాల సంఖ్య **మూడవ వంతు ($\div 3$)** అవుతుంది!`,
      ruleEn: 'Trap Alert: √0.4 is NOT 0.2! (Because 0.4 has only 1 decimal place: √0.40 ≈ 0.632, whereas √0.04 = 0.2!).',
      ruleTe: 'జాగ్రత్త: √0.4 విలువ 0.2 కాదు! √0.04 (2 దశాంశ స్థానాలు) విలువ మాత్రమే 0.2 అవుతుంది!',
      formula: 'Decimal places in √x = (Places in x) / 2 | Decimal places in ∛x = (Places in x) / 3',
      exampleQEn: 'Find the value of: √0.0144 + ∛0.000729.',
      exampleQTe: '√0.0144 + ∛0.000729 విలువ ఎంత?',
      exampleSolEn: '√0.0144 (4 places → 2 places) = 0.12.\n∛0.000729 (6 places → 2 places, since 9³=729) = 0.09.\nSum = 0.12 + 0.09 = 0.21.',
      exampleSolTe: '√0.0144 = 0.12 మరియు ∛0.000729 = 0.09.\nమొత్తం = 0.12 + 0.09 = 0.21.'
    },
    {
      code: '11.5',
      titleEn: 'Laws of Indices / Exponents (ఘాతాంక నియమాలు)',
      titleTe: 'ఘాతాంకాలు మరియు ఘాతాంక నియమాలు (Laws of Indices)',
      conceptEn: `Essential Laws of Exponents:
1. $a^m \times a^n = a^{m+n}$  |  $\frac{a^m}{a^n} = a^{m-n}$  |  $(a^m)^n = a^{m \cdot n}$
2. $a^0 = 1$ ($a \neq 0$)  |  $a^{-n} = \frac{1}{a^n}$  |  $\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$
3. $a^{m/n} = \sqrt[n]{a^m}$  |  If $a^x = a^y \implies x = y$.`,
      conceptTe: `ఘాతాంక నియమాలు:
1. భూములు సమానమైతే గుణకారంలో ఘాతాలను కూడాలి ($a^m \cdot a^n = a^{m+n}$), భాగహారంలో ఘాతాలను తీసివేయాలి ($a^m / a^n = a^{m-n}$).
2. $a^0 = 1$ మరియు $a^{-n} = \frac{1}{a^n}$.`,
      ruleEn: 'Note that (2³)² = 2⁶ = 64, whereas 2^(3²) = 2⁹ = 512! Without brackets, evaluate top-down.',
      ruleTe: 'బ్రాకెట్ ఉంటే ఘాతాలను గుణించాలి: (2³)² = 2⁶ = 64. బ్రాకెట్ లేకపోతే పై నుండి కిందకు ఘాతం చేయాలి: 2^(3²) = 2⁹ = 512!',
      formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ | (aᵐ)ⁿ = aᵐⁿ | (a/b)⁻ⁿ = (b/a)ⁿ',
      exampleQEn: 'Find the value of x if: 2^(2x - 1) = 1 / 8^(x - 3).',
      exampleQTe: '2^(2x - 1) = 1 / 8^(x - 3) అయినచో x విలువ ఎంత?',
      exampleSolEn: '1 / 8^(x - 3) = 8^(3 - x) = (2³)^(3 - x) = 2^(9 - 3x).\nEquate exponents of 2: 2x - 1 = 9 - 3x → 5x = 10 → x = 2.',
      exampleSolTe: '1 / 8^(x-3) = 2^(9 - 3x).\nఘాతాలను సమానం చేయగా: 2x - 1 = 9 - 3x → 5x = 10 → x = 2.'
    },
    {
      code: '11.6',
      titleEn: 'Surds, Rationalization & Square Root of (a ± 2√b)',
      titleTe: 'కరణులు, హార అకరణీయీకరణం & √(a ± 2√b) వర్గమూలం ట్రిక్',
      conceptEn: `1. **Rationalizing Denominator**:
   $$\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{\sqrt{a} - \sqrt{b}}{a - b} \quad \text{(If } a - b = 1,\text{ it is simply } \sqrt{a} - \sqrt{b}\text{!)}$$
2. **Golden Trick for $\sqrt{a \pm 2\sqrt{b}}$**:
   • Find two numbers $x$ and $y$ ($x > y$) such that **$x + y = a$** and **$x \times y = b$**.
   • Then immediately: **$\sqrt{a \pm 2\sqrt{b}} = \sqrt{x} \pm \sqrt{y}$**!`,
      conceptTe: `1. **హార అకరణీయీకరణం**: $\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{\sqrt{a} - \sqrt{b}}{a - b}$.
2. **$\sqrt{a \pm 2\sqrt{b}}$ వర్గమూలం షార్ట్‌కట్**:
   • కూడితే $a$ ($x + y = a$), గుణిస్తే $b$ ($x \times y = b$) వచ్చే రెండు సంఖ్యలు $x, y$ కనుగొనండి.
   • అప్పుడు నేరుగా **$\sqrt{a \pm 2\sqrt{b}} = \sqrt{x} \pm \sqrt{y}$** అవుతుంది!`,
      ruleEn: 'Ensure there is a "2" right outside the inner square root: √(a ± 2√b). If not, bring factors inside/outside to create 2!',
      ruleTe: 'లోపలి వర్గమూలం ముందు తప్పనిసరిగా "2" ఉండేలా చూసుకుని (కూడితే a, గుణిస్తే b) నియమం వాడాలి!',
      formula: 'If x + y = a and xy = b → √(a ± 2√b) = √x ± √y (where x > y)',
      exampleQEn: 'Find the square root of (8 + 2√15).',
      exampleQTe: '(8 + 2√15) యొక్క వర్గమూలం కనుగొనండి.',
      exampleSolEn: 'Find two numbers whose sum is 8 and product is 15 → 5 and 3 (since 5 + 3 = 8 and 5 × 3 = 15).\nTherefore, √(8 + 2√15) = √5 + √3!',
      exampleSolTe: 'కూడితే 8, గుణిస్తే 15 వచ్చే సంఖ్యలు 5 మరియు 3 (5+3=8, 5×3=15).\nకాబట్టి √(8 + 2√15) = √5 + √3!'
    },
    {
      code: '11.7',
      titleEn: 'Infinite & Finite Nested Square Root Series (అనంత వర్గమూల శ్రేణులు)',
      titleTe: 'అనంత మరియు పరిమిత వర్గమూల శ్రేణుల షార్ట్‌కట్ సూత్రాలు',
      conceptEn: `1. **Infinite Addition/Subtraction ($\sqrt{x \pm \sqrt{x \pm \sqrt{x \pm \dots \infty}}}$)**:
   • Factorize $x = n(n + 1)$ into two consecutive integers:
     - For **$+$ sign** $\rightarrow$ Answer is **Larger factor $(n + 1)$**.
     - For **$-$ sign** $\rightarrow$ Answer is **Smaller factor $n$**.
   • If $x$ cannot be factored as $n(n+1)$: Answer $= \frac{\sqrt{4x + 1} \pm 1}{2}$.
2. **Infinite Multiplication**: $\sqrt{x \cdot \sqrt{x \cdot \sqrt{x \dots \infty}}} = \mathbf{x}$.
3. **Finite Multiplication ($n$ square roots)**: $\sqrt{x \cdot \sqrt{x \dots (n \text{ times})}} = \mathbf{x^{(2^n - 1) / 2^n}}$.`,
      conceptTe: `1. **అనంత కూడిక/తీసివేత ($\sqrt{x \pm \sqrt{x \pm \dots \infty}}$)**:
   • $x$ ను రెండు వరుస సంఖ్యల లబ్దంగా రాయండి ($x = n(n+1)$):
     - **$+$ గుర్తు ఉంటే $\rightarrow$ పెద్ద సంఖ్య $(n+1)$** జవాబు!
     - **$-$ గుర్తు ఉంటే $\rightarrow$ చిన్న సంఖ్య $n$** జవాబు!
2. **అనంత గుణకారం**: $\sqrt{x \sqrt{x \sqrt{x \dots \infty}}} = \mathbf{x}$.
3. **$n$ సార్లు మాత్రమే గుణకారం ఉంటే**: జవాబు = **$\mathbf{x^{(2^n - 1) / 2^n}}$**.`,
      ruleEn: 'For 4 nested roots of 5: n = 4 → 2⁴ = 16 → Answer is 5^(15/16)!',
      ruleTe: 'వర్గమూలం n సార్లు ఉంటే 2ⁿ కనుగొని, ఘాతంలో (2ⁿ - 1) / 2ⁿ రాయండి!',
      formula: '√(n(n+1) + ...) = n+1 | √(n(n+1) - ...) = n | Finite n roots of x = x^((2ⁿ - 1)/2ⁿ)',
      exampleQEn: 'Find the value of: √(72 + √(72 + √(72 + ... ∞))) and √(7 · √(7 · √7)) (3 roots).',
      exampleQTe: '√(72 + √(72 + √(72 + ... ∞))) మరియు √(7 · √(7 · √7)) (3 సార్లు) విలువలు కనుగొనండి.',
      exampleSolEn: 'Part 1: 72 = 8 × 9. Since sign is (+), pick larger factor = 9.\nPart 2: Here x = 7 and n = 3 roots → 2³ = 8 → Answer = 7^((8 - 1)/8) = 7^(7/8).',
      exampleSolTe: 'భాగం 1: 72 = 8 × 9, (+) గుర్తు కాబట్టి పెద్ద సంఖ్య = 9.\nభాగం 2: n = 3 కాబట్టి 2³ = 8 → జవాబు = 7^(7/8).'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Square vs Square Root & Cube vs Cube Root Inverse Operations',
      titleTe: '1. వర్గం ↔ వర్గమూలం మరియు ఘనం ↔ ఘనమూలం పరస్పర విలోమ ప్రక్రియలు',
      en: 'If 12² = 144, then √144 = 12. If 6³ = 216, then ∛216 = 6.',
      te: '12² = 144 అయితే √144 = 12 అవుతుంది. 6³ = 216 అయితే ∛216 = 6 అవుతుంది.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Comparison of Surds (ⁿ√a vs ᵐ√b)',
      termTe: 'కరణుల పోలిక నియమం',
      defEn: 'To compare ²√3, ³√4, and ⁴√6, take LCM of root orders (2, 3, 4) = 12, and raise inside numbers to powers 12/2=6, 12/3=4, 12/4=3 → compare 3⁶, 4⁴, 6³!',
      defTe: 'కరణుల పరిమాణాల క.సా.గు (LCM) కనుగొని, లోపలి సంఖ్యల ఘాతాలను సమానం చేసి పోల్చాలి!'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Telescoping Rationalization Series',
      nameTe: 'హార అకరణీయీకరణ శ్రేణి లెక్కలు',
      patternEn: '1/(√1 + √2) + 1/(√2 + √3) + ... + 1/(√99 + √100).',
      patternTe: '1/(√1 + √2) + 1/(√2 + √3) + ... + 1/(√99 + √100) విలువ ఎంత?',
      approachEn: 'Result = √Largest - √Smallest = √100 - √1 = 10 - 1 = 9!',
      approachTe: 'షార్ట్‌కట్: √పెద్ద సంఖ్య - √చిన్న సంఖ్య = √100 - √1 = 10 - 1 = 9!'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Rationalization Telescoping Series',
      qEn: 'Find the value of: 1/(√9 - √8) - 1/(√8 - √7) + 1/(√7 - √6) - 1/(√6 - √5) + 1/(√5 - √4).',
      qTe: '1/(√9 - √8) - 1/(√8 - √7) + 1/(√7 - √6) - 1/(√6 - √5) + 1/(√5 - √4) విలువ ఎంత?',
      solEn: 'Rationalize each term:\n= (√9 + √8) - (√8 + √7) + (√7 + √6) - (√6 + √5) + (√5 + √4)\nAll middle terms have opposite signs and cancel out, leaving:\n= √9 + √4 = 3 + 2 = 5!',
      solTe: 'అకరణీయీకరణం చేయగా మధ్య పదాలు క్యాన్సిల్ అయి మొదటి మరియు చివరి పదాలు మిగులుతాయి:\n= √9 + √4 = 3 + 2 = 5!',
      shortcutTip: 'With alternating signs in denominator (-) and outside (+ - + -), answer is √First + √Last = √9 + √4 = 5!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Perfect square never ends in 2, 3, 7, 8. Cube root flip pairs: 2 ↔ 8, 3 ↔ 7. √(a ± 2√b) = √x ± √y where x+y=a, xy=b.',
      pointTe: 'వర్గ సంఖ్య చివర 2, 3, 7, 8 ఉండవు. ఘనమూలంలో 2↔8, 3↔7. √(a ± 2√b) = √x ± √y.'
    },
    {
      pointEn: 'Infinite nested √(n(n+1) ± ...): (+) gives (n+1), (-) gives n. Finite n roots of x = x^((2ⁿ-1)/2ⁿ).',
      pointTe: 'అనంత వర్గమూలంలో (+) ఉంటే పెద్ద కారణాంకం (n+1), (-) ఉంటే చిన్న కారణాంకం (n).'
    }
  ]
};

/* ============================================================================
   CHAPTER 12: ELEMENTARY STATISTICS & DATA INTERPRETATION — COMPLETE CHAPTER
   7 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-elementary-statistics'] = {
  id: 'math-elementary-statistics',
  chapterNo: 12,
  titleEn: 'Chapter 12: Elementary Statistics & Data Interpretation — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 12: ప్రాథమిక సాంఖ్యక శాస్త్రం & డేటా ఇంటర్‌ప్రిటేషన్ — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (3–4 Questions in CBT-1 & CBT-2)',
  readTime: '36 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-elementary-statistics',

  introEn: `Welcome to Chapter 12: **Elementary Statistics & Data Interpretation**. In RRB NTPC (CBT-1 & CBT-2) and Group-D, Elementary Statistics is a goldmine of 3 to 4 guaranteed marks—covering Mean (Average), Median, Mode, Pearson's Empirical Formula, Range, Mean Deviation, Variance ($\sigma^2$), Standard Deviation ($\sigma$), Coefficient of Variation (CV), and Pie-Chart/Bar-Graph Data Interpretation. Read all **7 syllabus sub-topics** below.`,

  introTe: `**అధ్యాయం 12: ప్రాథమిక సాంఖ్యక శాస్త్రం మరియు డేటా ఇంటర్‌ప్రిటేషన్ (Elementary Statistics & DI)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి ఎన్‌టిపిసి మరియు గ్రూప్-డి పరీక్షలలో ఈ అధ్యాయం నుండి 3 నుండి 4 సులభమైన ప్రశ్నలు వస్తాయి. ఇందులో అంకగణిత సగటు (Mean), మధ్యగతం (Median), బాహుళకం (Mode), ఎంపిరికల్ సూత్రం, వ్యాప్తి (Range), విస్తృతి (Variance), ప్రామాణిక విచలనం (Standard Deviation), విచలన గుణకం (CV) మరియు పై-చార్ట్ లెక్కలను 7 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '12.1',
      titleEn: 'Arithmetic Mean (Average) of Ungrouped & Grouped Frequency Data',
      titleTe: 'అంకగణిత సగటు (Mean / Average) — అవర్గీకృత మరియు పౌనఃపున్య దత్తాంశం',
      conceptEn: `1. **Ungrouped Data**: $\text{Mean } (\bar{x}) = \frac{\text{Sum of observations } (\sum x_i)}{\text{Number of observations } (n)}$.
2. **Grouped Frequency Table**: When values $x_1, x_2\dots$ occur with frequencies $f_1, f_2\dots$:
   $$\text{Mean } (\bar{x}) = \frac{\sum (f_i \cdot x_i)}{\sum f_i}$$
3. **Combined Mean** of two groups $(n_1, \bar{x}_1)$ and $(n_2, \bar{x}_2)$: $\bar{x}_{12} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$.`,
      conceptTe: `1. **అంకగణిత సగటు (Mean - $\bar{x}$)** = $\frac{\text{రాశుల మొత్తం}}{\text{రాశుల సంఖ్య}}$.
2. **పౌనఃపున్య పట్టిక (Frequency Data) ఇచ్చినప్పుడు**: $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$.
3. **ఉమ్మడి సగటు (Combined Mean)** = $\frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$.`,
      ruleEn: 'Sum of deviations of all observations from their Arithmetic Mean is ALWAYS ZERO: Σ(xᵢ - x̄) = 0!',
      ruleTe: 'అంకగణిత సగటు నుండి అన్ని రాశుల విచలనాల మొత్తం ఎల్లప్పుడూ సున్నా: Σ(xᵢ - x̄) = 0!',
      formula: 'Mean x̄ = (Σxᵢ)/n | Frequency Mean = (Σfᵢxᵢ)/(Σfᵢ) | Σ(xᵢ - x̄) = 0',
      exampleQEn: 'If the mean of 8, 12, 15, x, 20, and 25 is 16, find the value of x.',
      exampleQTe: '8, 12, 15, x, 20 మరియు 25 ల సగటు 16 అయినచో x విలువ ఎంత?',
      exampleSolEn: 'Sum of 6 observations = 6 × 16 = 96.\n8 + 12 + 15 + x + 20 + 25 = 80 + x = 96 → x = 16.',
      exampleSolTe: '6 రాశుల మొత్తం = 6 × 16 = 96.\n80 + x = 96 → x = 16.'
    },
    {
      code: '12.2',
      titleEn: 'Median (మధ్యగతం) for Odd and Even Number of Observations',
      titleTe: 'మధ్యగతం (Median) — బేసి మరియు సరి సంఖ్యలో రాశులు ఉన్నప్పుడు',
      conceptEn: `**Step 1 (Mandatory!)**: Always arrange the given observations in **Ascending Order (smallest to largest)** first!
**Step 2**: Count the number of observations $n$:
• **If $n$ is ODD**: $\text{Median} = \left(\frac{n + 1}{2}\right)\text{-th term}$.
• **If $n$ is EVEN**: $\text{Median} = \text{Average of } \left(\frac{n}{2}\right)\text{-th and } \left(\frac{n}{2} + 1\right)\text{-th terms}$.`,
      conceptTe: `**సోపానం 1 (తప్పనిసరి!)**: ఇచ్చిన రాశులను ముందుగా **ఆరోహణ క్రమంలో (చిన్న నుండి పెద్దకు)** అమర్చాలి!
**సోపానం 2**: రాశుల సంఖ్య $n$ ఆధారంగా:
• **$n$ బేసి సంఖ్య (Odd) అయితే**: మధ్యగతం = $\left(\frac{n+1}{2}\right)$ వ పదం.
• **$n$ సరి సంఖ్య (Even) అయితే**: మధ్యలో ఉండే రెండు పదాల ($\frac{n}{2}$ మరియు $\frac{n}{2}+1$ వ పదాల) సగటు!`,
      ruleEn: 'Never pick the middle number before sorting the dataset in ascending order!',
      ruleTe: 'ఆరోహణ క్రమంలో అమర్చకుండా మధ్యలో ఉన్న సంఖ్యను తీసుకుంటే సమాధానం తప్పవుతుంది!',
      formula: 'Odd n: [(n+1)/2]-th term | Even n: Avg of (n/2)-th and (n/2 + 1)-th terms',
      exampleQEn: 'Find the median of the dataset: 15, 8, 22, 11, 19, 14, 25, 10.',
      exampleQTe: '15, 8, 22, 11, 19, 14, 25, 10 దత్తాంశం యొక్క మధ్యగతం (Median) కనుగొనండి.',
      exampleSolEn: 'Step 1: Arrange in ascending order (n = 8, Even):\n8, 10, 11, 14, 15, 19, 22, 25.\nStep 2: Middle two terms (4th and 5th) are 14 and 15.\nMedian = (14 + 15) / 2 = 14.5.',
      exampleSolTe: 'సోపానం 1: ఆరోహణ క్రమం (n = 8): 8, 10, 11, 14, 15, 19, 22, 25.\nసోపానం 2: మధ్యలో ఉన్న 4వ, 5వ పదాలు 14 మరియు 15 → మధ్యగతం = (14 + 15)/2 = 14.5.'
    },
    {
      code: '12.3',
      titleEn: 'Mode (బాహుళకం) & Empirical Relation (Mode = 3 Median - 2 Mean)',
      titleTe: 'బాహుళకం (Mode) మరియు ఎంపిరికల్ సూత్రం (Mode = 3 Median - 2 Mean)',
      conceptEn: `1. **Mode (Z — బాహుళకం)**: The value that appears **most frequently** in the dataset.
2. **Pearson's Empirical Formula (Most Repeated in RRB)**:
   $$\mathbf{\text{Mode} = 3 \times \text{Median} - 2 \times \text{Mean}}$$
   Equivalent forms often asked in MCQs:
   • $\text{Mode} - \text{Mean} = 3(\text{Median} - \text{Mean})$
   • $\text{Mean} - \text{Mode} = 3(\text{Mean} - \text{Median})$.`,
      conceptTe: `1. **బాహుళకం (Mode)**: దత్తాంశంలో అత్యధిక సార్లు పునరావృతమైన విలువ.
2. **ఎంపిరికల్ సూత్రం (ప్రతి ఆర్‌ఆర్‌బి పరీక్షలో వచ్చే సూత్రం)**:
   $$\mathbf{\text{బాహుళకం (Mode)} = 3 \times \text{మధ్యగతం (Median)} - 2 \times \text{సగటు (Mean)}}$$`,
      ruleEn: 'Memory Trick: "M-O-D-E" is shortest word (1), "M-E-D-I-A-N" has 3×, "M-E-A-N" has -2× (3 - 2 = 1)!',
      ruleTe: 'గుర్తుంచుకునే కోడ్: Mode (1) = 3 Median - 2 Mean (ఇక్కడ 3 - 2 = 1)!',
      formula: 'Mode = 3 × Median - 2 × Mean | Median = (Mode + 2 × Mean) / 3',
      exampleQEn: 'If the Mode of a dataset is 34 and its Mean is 28, find its Median.',
      exampleQTe: 'ఒక దత్తాంశం యొక్క బాహుళకం (Mode) 34 మరియు సగటు (Mean) 28 అయినచో, మధ్యగతం (Median) ఎంత?',
      exampleSolEn: 'Using Mode = 3 Median - 2 Mean:\n34 = 3 × Median - 2(28) → 34 = 3 × Median - 56.\n3 × Median = 34 + 56 = 90 → Median = 30.',
      exampleSolTe: '34 = 3(మధ్యగతం) - 2(28) → 3(మధ్యగతం) = 34 + 56 = 90 → మధ్యగతం = 30.'
    },
    {
      code: '12.4',
      titleEn: 'Range, Coefficient of Range & Mean Deviation',
      titleTe: 'వ్యాప్తి (Range), వ్యాప్తి గుణకం మరియు సగటు విచలనం (Mean Deviation)',
      conceptEn: `1. **Range (వ్యాప్తి)**: $\text{Range} = \text{Largest Value } (L) - \text{Smallest Value } (S)$.
2. **Coefficient of Range**: $\frac{L - S}{L + S}$.
3. **Mean Deviation (సగటు విచలనం)** about Mean $\bar{x}$ (or Median $M$):
   $$\text{MD} = \frac{\sum |x_i - \bar{x}|}{n}$$`,
      conceptTe: `1. **వ్యాప్తి (Range)** = గరిష్ట విలువ ($L$) - కనిష్ట విలువ ($S$).
2. **వ్యాప్తి గుణకం** = $\frac{L - S}{L + S}$.
3. **సగటు విచలనం (Mean Deviation)** = $\frac{\sum |x_i - \bar{x}|}{n}$ (గుర్తులతో సంబంధం లేకుండా ధన విలువలను కూడి $n$ చే భాగించాలి).`,
      ruleEn: 'Mean Deviation is always MINIMUM when calculated about the MEDIAN!',
      ruleTe: 'మధ్యగతం (Median) ఆధారంగా లెక్కించినప్పుడే సగటు విచలనం కనిష్టంగా ఉంటుంది!',
      formula: 'Range = L - S | Coeff of Range = (L - S)/(L + S) | MD = (Σ|xᵢ - x̄|) / n',
      exampleQEn: 'Find the Range and Mean Deviation about the Mean for the data: 4, 6, 8, 10, 12.',
      exampleQTe: '4, 6, 8, 10, 12 దత్తాంశానికి వ్యాప్తి (Range) మరియు సగటు విచలనం (Mean Deviation) కనుగొనండి.',
      exampleSolEn: 'Range = 12 - 4 = 8.\nMean x̄ = 8. Absolute deviations |xᵢ - 8| are: 4, 2, 0, 2, 4.\nMean Deviation = (4 + 2 + 0 + 2 + 4) / 5 = 12 / 5 = 2.4.',
      exampleSolTe: 'వ్యాప్తి = 12 - 4 = 8.\nసగటు = 8. విచలనాలు |xᵢ - 8| = 4, 2, 0, 2, 4.\nసగటు విచలనం = 12 / 5 = 2.4.'
    },
    {
      code: '12.5',
      titleEn: 'Variance (σ²) and Population Standard Deviation (σ)',
      titleTe: 'విస్తృతి (Variance - σ²) మరియు ప్రామాణిక విచలనం (Standard Deviation - σ)',
      conceptEn: `1. **Variance ($\sigma^2$ — విస్తృతి)**: The average of the squared deviations from the Mean:
   $$\text{Variance } (\sigma^2) = \frac{\sum (x_i - \bar{x})^2}{n}$$
2. **Standard Deviation ($\sigma$ — ప్రామాణిక విచలనం)**: The positive square root of Variance:
   $$\text{Standard Deviation } (\sigma) = \sqrt{\text{Variance}} = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}}$$
   *(Note: Standard Deviation is always $\ge 0$!)*`,
      conceptTe: `1. **విస్తృతి (Variance - $\sigma^2$)** = $\frac{\sum (x_i - \bar{x})^2}{n}$ (సగటు నుండి విచలనాల వర్గాల సగటు).
2. **ప్రామాణిక విచలనం (Standard Deviation - $\sigma$)** = **$\sqrt{\text{విస్తృతి (Variance)}}$** (మరియు $\text{విస్తృతి} = \sigma^2$).`,
      ruleEn: 'Variance of first n natural numbers = (n² - 1) / 12. If all observations are equal (e.g., 7, 7, 7, 7), Variance and SD are ZERO (0)!',
      ruleTe: 'మొదటి n సహజ సంఖ్యల విస్తృతి = (n² - 1) / 12. అన్ని రాశులు సమానంగా ఉంటే (7, 7, 7, 7) ప్రామాణిక విచలనం సున్నా (0) అవుతుంది!',
      formula: 'Variance σ² = [Σ(xᵢ - x̄)²] / n | SD (σ) = √Variance | First n natural numbers σ² = (n² - 1)/12',
      exampleQEn: 'Find the Variance and Standard Deviation of the dataset: 6, 8, 10, 12, 14.',
      exampleQTe: '6, 8, 10, 12, 14 దత్తాంశం యొక్క విస్తృతి (Variance) మరియు ప్రామాణిక విచలనం (SD) కనుగొనండి.',
      exampleSolEn: 'Step 1: Mean x̄ = 10.\nStep 2: Deviations (xᵢ - 10) are: -4, -2, 0, +2, +4.\nStep 3: Squared deviations = 16, 4, 0, 4, 16 (Sum = 40).\nStep 4: Variance (σ²) = 40 / 5 = 8. Standard Deviation (σ) = √8 = 2√2.',
      exampleSolTe: 'సోపానం 1: సగటు = 10. విచలనాలు = -4, -2, 0, 2, 4.\nసోపానం 2: విచలనాల వర్గాల మొత్తం = 16 + 4 + 0 + 4 + 16 = 40.\nసోపానం 3: విస్తృతి (σ²) = 40 / 5 = 8. ప్రామాణిక విచలనం (σ) = √8 = 2√2.'
    },
    {
      code: '12.6',
      titleEn: 'Coefficient of Variation (CV) & Effect of Adding/Multiplying a Constant',
      titleTe: 'విచలన గుణకం (CV) & ప్రతి రాశికి స్థిరాంకాన్ని కలిపినప్పుడు/గుణించినప్పుడు మార్పు',
      conceptEn: `1. **Coefficient of Variation (CV — విచలన గుణకం)**:
   $$\text{CV} = \left( \frac{\text{Standard Deviation } (\sigma)}{\text{Mean } (\bar{x})} \right) \times 100\%$$
2. **Golden Transformation Law (High Yield)**:
   • **Adding or Subtracting $k$ to every observation**: Mean, Median, Mode all change by $\pm k$, **BUT Range, Variance ($\sigma^2$), and Standard Deviation ($\sigma$) DO NOT CHANGE AT ALL!**
   • **Multiplying every observation by $k$**: New Mean $= k\bar{x}$, **New SD $= |k|\sigma$**, and **New Variance $= k^2 \sigma^2$**!`,
      conceptTe: `1. **విచలన గుణకం (CV)** = $\frac{\text{ప్రామాణిక విచలనం } (\sigma)}{\text{సగటు } (\bar{x})} \times 100\%$.
2. **అతి ముఖ్యమైన ధర్మం**:
   • దత్తాంశంలోని ప్రతి రాశికి స్థిర సంఖ్య $k$ ను **కలిపినా లేదా తీసివేసినా** — **ప్రామాణిక విచలనం ($\sigma$) మరియు విస్తృతి ($\sigma^2$) అస్సలు మారవు!**
   • కానీ ప్రతి రాశిని $k$ తో **గుణిస్తే** మాత్రం కొత్త $\text{SD} = k\sigma$ మరియు కొత్త $\text{Variance} = k^2\sigma^2$ అవుతుంది!`,
      ruleEn: 'Addition/Subtraction has ZERO effect on Standard Deviation and Variance! Only Multiplication/Division changes them.',
      ruleTe: 'కూడిక లేదా తీసివేత వల్ల ప్రామాణిక విచలనం (SD) మరియు విస్తృతి (Variance) మారవు!',
      formula: 'CV = (σ / Mean) × 100% | For yᵢ = axᵢ + b → New SD = |a|σ, New Variance = a²σ²',
      exampleQEn: 'The Standard Deviation of 15 observations is 6. If each observation is increased by 9 and then multiplied by 2, find the new Standard Deviation and new Variance.',
      exampleQTe: '15 రాశుల ప్రామాణిక విచలనం 6. ప్రతి రాశికి 9 కలిపి, ఆపై 2 తో గుణిస్తే వచ్చే కొత్త ప్రామాణిక విచలనం మరియు కొత్త విస్తృతి ఎంత?',
      exampleSolEn: 'Step 1: Adding 9 has NO effect on SD (stays 6).\nStep 2: Multiplying by 2 multiplies SD by 2 → New SD = 2 × 6 = 12.\nStep 3: New Variance = (New SD)² = 12² = 144.',
      exampleSolTe: 'సోపానం 1: 9 కలపడం వల్ల SD మారదు (6 గానే ఉంటుంది).\nసోపానం 2: 2 తో గుణించడం వల్ల కొత్త SD = 2 × 6 = 12.\nసోపానం 3: కొత్త విస్తృతి = 12² = 144.'
    },
    {
      code: '12.7',
      titleEn: 'Data Interpretation — Pie Charts (100% = 360°), Bar Graphs & Tables',
      titleTe: 'డేటా ఇంటర్‌ప్రిటేషన్ — పై చార్టులు (100% = 360°), బార్ గ్రాఫ్‌లు & పట్టికలు',
      conceptEn: `In Pie Charts, the total circle represents **$100\% = 360^\circ$**:
• **$1\% = 3.6^\circ$**  and  **$5\% = 18^\circ$**  and  **$10\% = 36^\circ$**!
• **Percentage to Central Angle**: $\text{Angle} = \text{Percentage} \times 3.6^\circ$ (or $\frac{\text{Value}}{\text{Total}} \times 360^\circ$).
• **Central Angle to Percentage**: $\text{Percentage} = \frac{\text{Angle}}{3.6^\circ} = \text{Angle} \times \frac{5}{18}\%$.`,
      conceptTe: `పై-చార్ట్ (Pie Chart) లెక్కలలో మొత్తం వృత్తం **$100\% = 360^\circ$**:
• **$1\% = 3.6^\circ$**, **$5\% = 18^\circ$**, **$10\% = 36^\circ$**, **$25\% = 90^\circ$**!
• శాతాన్ని డిగ్రీలలోకి మార్చడానికి **$3.6^\circ$ తో గుణించాలి** ($\times \frac{18}{5}$). డిగ్రీలను శాతంలోకి మార్చడానికి **$\frac{5}{18}$ తో గుణించాలి**.`,
      ruleEn: 'Notice that converting % to Degrees (× 18/5) and Degrees to % (× 5/18) uses the EXACT same 18-table vs 5-table as Train Speeds!',
      ruleTe: 'డిగ్రీలు ↔ శాతాల మార్పిడికి కూడా రైళ్ల వేగంలో వాడిన 18 ఎక్కం - 5 ఎక్కం ట్రిక్ ($5\% = 18^\circ$) నేరుగా పనిచేస్తుంది!',
      formula: '100% = 360° | 1% = 3.6° | 5% = 18° | Central Angle = (Sector Value / Total) × 360°',
      exampleQEn: 'In a family budget pie-chart, 25% is spent on House Rent and 15% on Education. Find the difference between their central angles in degrees.',
      exampleQTe: 'ఒక కుటుంబ బడ్జెట్ పై-చార్ట్‌లో ఇంటి అద్దెకు 25%, విద్యకు 15% ఖర్చు చేస్తారు. ఆ రెంటి కేంద్ర కోణాల మధ్య భేదం ఎన్ని డిగ్రీలు?',
      exampleSolEn: 'Difference in % = 25% - 15% = 10%.\nSince 1% = 3.6°, 10% = 10 × 3.6° = 36°.',
      exampleSolTe: 'శాతాల భేదం = 25% - 15% = 10%.\n1% = 3.6° కావున 10% = 36°.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Measures of Central Tendency vs Dispersion',
      titleTe: '1. కేంద్రీయ స్థాన కొలతలు vs విస్తరణ కొలతలు',
      en: 'Mean, Median, Mode measure the center of data. Range, Variance, and Standard Deviation measure how spread out the data is.',
      te: 'సగటు, మధ్యగతం, బాహుళకం దత్తాంశ కేంద్రాన్ని తెలుపుతాయి. వ్యాప్తి, విస్తృతి, ప్రామాణిక విచలనం దత్తాంశ విస్తరణను తెలుపుతాయి.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Bimodal Data & Symmetrical Distribution',
      termTe: 'సౌష్టవ విభాజనం (Symmetrical Distribution)',
      defEn: 'For a perfectly symmetrical (normal) distribution: Mean = Median = Mode!',
      defTe: 'సౌష్టవ విభాజనంలో సగటు = మధ్యగతం = బాహుళకం (Mean = Median = Mode) సమానంగా ఉంటాయి!'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Finding Mode/Median using Empirical Formula',
      nameTe: 'ఎంపిరికల్ సూత్రం ద్వారా బాహుళకం/మధ్యగతం కనుగొనుట',
      patternEn: 'Mean = 20, Median = 22 → Find Mode.',
      patternTe: 'సగటు = 20, మధ్యగతం = 22 అయిన బాహుళకం ఎంత?',
      approachEn: 'Mode = 3(22) - 2(20) = 66 - 40 = 26.',
      approachTe: 'బాహుళకం = 3(22) - 2(20) = 26.'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-2 • CV & Variance Combined',
      qEn: 'The Coefficient of Variation (CV) of a distribution is 20% and its Variance is 16. Find the Mean of the distribution.',
      qTe: 'ఒక విభాజనం యొక్క విచలన గుణకం (CV) 20% మరియు విస్తృతి (Variance) 16 అయినచో, దాని సగటు (Mean) ఎంత?',
      solEn: 'Step 1: Standard Deviation (σ) = √Variance = √16 = 4.\nStep 2: Using CV = (σ / Mean) × 100%:\n20 = (4 / Mean) × 100 → Mean = 400 / 20 = 20.',
      solTe: 'సోపానం 1: ప్రామాణిక విచలనం (σ) = √16 = 4.\nసోపానం 2: CV = (σ / సగటు) × 100 → 20 = (4 / సగటు) × 100 → సగటు = 20.',
      shortcutTip: 'Always take √Variance first to get σ before plugging into CV!'
    }
  ],

  quickRevision: [
    {
      pointEn: 'Mode = 3 Median - 2 Mean. SD (σ) = √Variance. CV = (σ / Mean) × 100%.',
      pointTe: 'బాహుళకం = 3 మధ్యగతం - 2 సగటు. ప్రామాణిక విచలనం = √విస్తృతి. CV = (σ / సగటు) × 100%.'
    },
    {
      pointEn: 'Adding/subtracting k does NOT change SD or Variance. Pie chart: 100% = 360° (1% = 3.6°, 5% = 18°).',
      pointTe: 'స్థిరాంకాన్ని కలిపినా/తీసివేసినా SD మరియు విస్తృతి మారవు. పై చార్ట్: 1% = 3.6°.'
    }
  ]
};

/* ============================================================================
   CHAPTER 13: CALENDAR AND CLOCK — COMPLETE CHAPTER (క్యాలెండర్ మరియు గడియారం)
   7 Complete Syllabus Sub-Topics + All 13 Textbook Sections + Synchronized Telugu Video
   ============================================================================ */
window.RRB_MATH_TEXTBOOK_CHAPTERS['math-calendar-clock'] = {
  id: 'math-calendar-clock',
  chapterNo: 13,
  titleEn: 'Chapter 13: Calendar and Clock — Complete Textbook Chapter',
  titleTe: 'అధ్యాయం 13: క్యాలెండర్ మరియు గడియారం (Calendar & Clock) — పూర్తి పాఠ్యపుస్తక అధ్యాయం',
  importance: 'High Weightage (2–3 Questions Across Math & Reasoning)',
  readTime: '36 mins (Complete Chapter)',
  videoId: 'vid-textbook-math-calendar-clock',

  introEn: `Welcome to Chapter 13: **Calendar and Clock (క్యాలెండర్ మరియు గడియారం)**. Explicitly included in the official RRB NTPC and Group-D syllabus, Calendar and Clock questions test Leap Year rules, Odd Days in centuries, Day of the Week calculations, Calendar Repetition years, Clock Angle formula ($\theta = |30H - \frac{11}{2}M|$), Hands coinciding/opposite/perpendicular, and Mirror/Water image times. Master all **7 syllabus sub-topics** below.`,

  introTe: `**అధ్యాయం 13: క్యాలెండర్ మరియు గడియారం (Calendar & Clock)** పూర్తి పాఠ్యపుస్తక అధ్యాయానికి స్వాగతం! ఆర్‌ఆర్‌బి అధికారిక సిలబస్‌లో ప్రత్యేకంగా ఉన్న ఈ అధ్యాయం నుండి ప్రతి పరీక్షలో 2 నుండి 3 ప్రశ్నలు వస్తాయి. ఇందులో సాధారణ/లీపు సంవత్సర నియమాలు, విషమ రోజులు (Odd Days), ఏ తేదీన ఏ వారం వస్తుందో కనుగొనడం, క్యాలెండర్ పునరావృతం, గడియారం ముల్లుల మధ్య కోణం ($\theta = |30H - \frac{11}{2}M|$), ముల్లులు ఏకీభవించడం/లంబంగా ఉండటం మరియు అద్దం/నీటి ప్రతిబింబ సమయాలను 7 ఉప-అంశాలుగా పూర్తి వివరాలతో నేర్చుకుందాం.`,

  subTopics: [
    {
      code: '13.1',
      titleEn: 'Calendar Fundamentals: Ordinary Year vs Leap Year & Century Rule',
      titleTe: 'క్యాలెండర్ ప్రాథమిక అంశాలు: సాధారణ సంవత్సరం vs లీపు సంవత్సరం & శతాబ్దపు నియమం',
      conceptEn: `1. **Ordinary Year (సాధారణ సంవత్సరం)**: Has **365 days** (February = 28 days) = **52 weeks + 1 Odd Day**.
   • **Golden Rule**: In an Ordinary Year, **1st January and 31st December fall on the EXACT SAME day of the week!**
2. **Leap Year (లీపు సంవత్సరం)**: Has **366 days** (February = 29 days) = **52 weeks + 2 Odd Days**.
   • In a Leap Year, 31st December is **1 day ahead** of 1st January.
3. **How to Check for a Leap Year**:
   • **Non-Century Year** (last two digits $\neq 00$): Must be divisible by **4** (e.g., 2024, 2028 are leap years).
   • **Century Year** (ending in $00$, like 1700, 1800, 1900, 2000): Must be divisible by **400**! So **1600 and 2000 are Leap Years**, whereas **1700, 1800, 1900 are NOT Leap Years**!`,
      conceptTe: `1. **సాధారణ సంవత్సరం (Ordinary Year)**: 365 రోజులు = **52 వారాలు + 1 విషమ రోజు (Odd Day)**. సాధారణ సంవత్సరంలో **జనవరి 1 మరియు డిసెంబర్ 31 ఒకే వారం** అవుతాయి!
2. **లీపు సంవత్సరం (Leap Year)**: 366 రోజులు = **52 వారాలు + 2 విషమ రోజులు**. డిసెంబర్ 31 అనేది జనవరి 1 తర్వాతి వారం అవుతుంది.
3. **లీపు సంవత్సర పరీక్ష**: సాధారణ సంవత్సరాలు **4 చే** భాగించబడాలి. కానీ చివర 00 ఉన్న **శతాబ్దపు సంవత్సరాలు (1700, 1800, 1900, 2000) మాత్రం 400 చే భాగించబడితేనే** లీపు సంవత్సరాలు అవుతాయి! (కాబట్టి 1700, 1800, 1900 లీపు సంవత్సరాలు కావు!).`,
      ruleEn: 'In 100 consecutive years (1st century), there are 24 Leap Years and 76 Ordinary Years (NOT 25 leap years, because the 100th year is not divisible by 400!). In 400 years, there are 97 Leap Years!',
      ruleTe: '100 సంవత్సరాలలో 24 లీపు సంవత్సరాలు, 76 సాధారణ సంవత్సరాలు ఉంటాయి (100వ సంవత్సరం లీపు కాదు!). 400 సంవత్సరాలలో మొత్తం 97 లీపు సంవత్సరాలు ఉంటాయి!',
      formula: 'Ordinary Yr = 1 Odd Day | Leap Yr = 2 Odd Days | 100 Yrs = 24 Leap + 76 Ordinary | 400 Yrs = 97 Leap Yrs',
      exampleQEn: 'Which of the following is NOT a leap year? (A) 1600  (B) 2024  (C) 1900  (D) 2000',
      exampleQTe: 'క్రింది వాటిలో లీపు సంవత్సరం కానిది ఏది? (A) 1600  (B) 2024  (C) 1900  (D) 2000',
      exampleSolEn: '1900 is a century year not divisible by 400 (1900 ÷ 400 leaves remainder 300). Hence 1900 is NOT a leap year.',
      exampleSolTe: '1900 శతాబ్దపు సంవత్సరం, ఇది 400 చే భాగించబడదు కాబట్టి లీపు సంవత్సరం కాదు (ఆప్షన్ C).'
    },
    {
      code: '13.2',
      titleEn: 'Concept of Odd Days in Months and Centuries (5-3-1-0 Rule)',
      titleTe: 'నెలలు మరియు శతాబ్దాలలో విషమ రోజులు (Odd Days: 5-3-1-0 నియమం)',
      conceptEn: `**Odd Days** = Remainder when total days are divided by **7**.
1. **Month Odd Days**:
   • 31-day months (Jan, Mar, May, Jul, Aug, Oct, Dec) $\rightarrow 31 \div 7 \implies \mathbf{3\text{ Odd Days}}$.
   • 30-day months (Apr, Jun, Sep, Nov) $\rightarrow 30 \div 7 \implies \mathbf{2\text{ Odd Days}}$.
   • February $\rightarrow \mathbf{0}$ (Ordinary) or **1** (Leap).
2. **Century Odd Days (5 – 3 – 1 – 0 Rule)**:
   • **100 Years = 5 Odd Days**
   • **200 Years = 3 Odd Days**
   • **300 Years = 1 Odd Day**
   • **400 Years (and 800, 1200, 1600, 2000) = 0 Odd Days!**`,
      conceptTe: `మొత్తం రోజులను **7 చే భాగించగా వచ్చే శేషాన్ని విషమ రోజులు (Odd Days)** అంటారు:
1. **నెలల విషమ రోజులు**: 31 రోజుల నెలలకు = **3**, 30 రోజుల నెలలకు = **2**, ఫిబ్రవరికి = **0 లేదా 1**.
2. **శతాబ్దాల విషమ రోజులు (5 - 3 - 1 - 0 కోడ్)**:
   • **100 సం. = 5** | **200 సం. = 3** | **300 సం. = 1** | **400 సం. (1600, 2000) = 0 విషమ రోజులు**!`,
      ruleEn: 'Last day of a century can ONLY be Friday (5), Wednesday (3), Monday (1), or Sunday (0). It can NEVER be Tuesday, Thursday, or Saturday!',
      ruleTe: 'ఒక శతాబ్దం యొక్క చివరి రోజు ఎప్పుడూ మంగళవారం, గురువారం లేదా శనివారం కానేరదు!',
      formula: '100 Yrs = 5 | 200 Yrs = 3 | 300 Yrs = 1 | 400k Yrs = 0 Odd Days',
      exampleQEn: 'How many odd days are there in 300 years and in 1900 years?',
      exampleQTe: '300 సంవత్సరాలలో మరియు 1900 సంవత్సరాలలో ఎన్ని విషమ రోజులు (Odd Days) ఉంటాయి?',
      exampleSolEn: 'In 300 years = 1 Odd Day.\nIn 1900 years = 1600 + 300 → 0 + 1 = 1 Odd Day.',
      exampleSolTe: '300 సంవత్సరాలలో = 1 విషమ రోజు.\n1900 = 1600 (0) + 300 (1) = 1 విషమ రోజు.'
    },
    {
      code: '13.3',
      titleEn: 'Finding Day of the Week Across Dates and Years',
      titleTe: 'ఇచ్చిన తేదీ ఆధారంగా మరొక తేదీ నాటి వారాన్ని కనుగొనుట',
      conceptEn: `When a reference date and day are given:
1. **Same Date Across $N$ Years**:
   $$\text{Total Odd Days} = (\text{Number of Years } N) + (\text{Number of Leap Years in between}) \pmod 7$$
   *(Count a leap year only if **29th February** actually falls between the two dates!)*
2. Add $+ \text{Odd Days}$ for a future date, or subtract $- \text{Odd Days}$ for a past date.`,
      conceptTe: `ఒక తేదీ నాటి వారం ఇచ్చి, కొన్ని సంవత్సరాల తర్వాతి అదే తేదీ నాటి వారం అడిగితే:
$$\text{మొత్తం విషమ రోజులు} = (\text{సంవత్సరాల భేదం}) + (\text{మధ్యలో వచ్చిన ఫిబ్రవరి 29 ల సంఖ్య})$$
దీనిని 7 చే భాగించి శేషాన్ని ఇచ్చిన వారానికి కలపాలి!`,
      ruleEn: 'Be careful with Feb 29! From 10th March 2024 to 10th March 2025, there is ONLY 1 odd day because 29th Feb 2024 has already passed!',
      ruleTe: 'రెండు తేదీల మధ్య ఫిబ్రవరి 29 వస్తేనే ఆ సంవత్సరానికి 2 విషమ రోజులు తీసుకోవాలి!',
      formula: 'Odd Days between years = (Year Diff + Leap Feb-29s) mod 7',
      exampleQEn: 'If 1st January 2023 was a Sunday, what day of the week will 1st January 2029 be?',
      exampleQTe: '1 జనవరి 2023 ఆదివారం అయితే, 1 జనవరి 2029 ఏ వారం అవుతుంది?',
      exampleSolEn: 'Step 1: Number of years from 2023 to 2029 = 6 years.\nStep 2: Leap years between them (2024 and 2028) = 2 leap years.\nStep 3: Total Odd Days = 6 + 2 = 8 ≡ 1 (mod 7).\nSunday + 1 day = Monday.',
      exampleSolTe: 'సోపానం 1: 2023 నుండి 2029 వరకు = 6 సంవత్సరాలు + 2 లీపు సంవత్సరాలు (2024, 2028) = 8 రోజులు.\nసోపానం 2: 8 ÷ 7 శేషం = 1 → ఆదివారం + 1 = సోమవారం (Monday).'
    },
    {
      code: '13.4',
      titleEn: 'Calendar Repetition Rule (+6, +11, +28 Years Shortcut)',
      titleTe: 'క్యాలెండర్ మళ్ళీ ఏ సంవత్సరంలో పునరావృతమవుతుంది? (+6, +11, +28 ట్రిక్)',
      conceptEn: `To find when the calendar of year $Y$ repeats identically, divide the **last 2 digits of $Y$ by 4** and check the remainder $r$:
• **Remainder $r = 1$** (Immediate year after a leap year, e.g., 2021, 2025) $\rightarrow$ **Add $+6$ years**!
• **Remainder $r = 2 \text{ or } 3$** (e.g., 2022, 2023) $\rightarrow$ **Add $+11$ years**!
• **Remainder $r = 0$** (Leap Year itself, e.g., 2024) $\rightarrow$ **Add $+28$ years**!`,
      conceptTe: `ఇచ్చిన సంవత్సరం $Y$ యొక్క క్యాలెండర్ మళ్ళీ ఎప్పుడు యథాతథంగా రిపీట్ అవుతుందో కనుగొనడానికి ఆ సంవత్సరాన్ని **4 చే భాగించి శేషం** చూడండి:
• **శేషం 1 వస్తే** $\rightarrow$ **$+6$ సంవత్సరాలు** కలపండి (ఉదా: $2025 + 6 = 2031$).
• **శేషం 2 లేదా 3 వస్తే** $\rightarrow$ **$+11$ సంవత్సరాలు** కలపండి (ఉదా: $2023 + 11 = 2034$).
• **శేషం 0 వస్తే (లీపు సంవత్సరం)** $\rightarrow$ **$+28$ సంవత్సరాలు** కలపండి (ఉదా: $2024 + 28 = 2052$).`,
      ruleEn: 'Within the SAME Ordinary Year: Jan = Oct, Feb = Mar = Nov, Apr = Jul, Sep = Dec have identical calendars!',
      ruleTe: 'అదే సాధారణ సంవత్సరంలో: జనవరి = అక్టోబర్, ఫిబ్రవరి = మార్చి = నవంబర్, ఏప్రిల్ = జూలై నెలల క్యాలెండర్లు ఒకేలా ఉంటాయి!',
      formula: 'Y mod 4 = 1 → +6 yrs | Y mod 4 = 2 or 3 → +11 yrs | Y mod 4 = 0 (Leap) → +28 yrs',
      exampleQEn: 'The calendar for the year 2025 will be identical to the calendar for which upcoming year?',
      exampleQTe: '2025 సంవత్సర క్యాలెండర్ రాబోయే ఏ సంవత్సర క్యాలెండర్‌తో పూర్తిగా సమానంగా ఉంటుంది?',
      exampleSolEn: 'Divide 25 by 4 → Remainder = 1.\nBy rule, add +6 years: 2025 + 6 = 2031.',
      exampleSolTe: '25 ÷ 4 శేషం = 1 కాబట్టి +6 కలపాలి: 2025 + 6 = 2031.'
    },
    {
      code: '13.5',
      titleEn: 'Clock Angle Formula: θ = | 30H - (11/2)M | & Ratio Tricks',
      titleTe: 'గడియారం ముల్లుల మధ్య కోణం సూత్రం: θ = | 30H - (11/2)M |',
      conceptEn: `1. **Speed of Clock Hands**:
   • **Minute Hand**: $360^\circ$ in 60 mins $\implies \mathbf{6^\circ \text{ per minute}}$.
   • **Hour Hand**: $360^\circ$ in 12 hours $\implies 30^\circ \text{ per hour} = \mathbf{0.5^\circ \text{ per minute}}$.
   • **Relative Speed** of Minute hand over Hour hand $= 6^\circ - 0.5^\circ = \mathbf{5.5^\circ \left(\frac{11}{2}^\circ\right) \text{ per minute}}$.
2. **Universal Angle Formula at $H : M$**:
   $$\theta = \left| 30H - \frac{11}{2}M \right|^\circ$$
   *(If $\theta > 180^\circ$, interior angle $= 360^\circ - \theta$; Reflex angle is the angle $> 180^\circ$!)*`,
      conceptTe: `1. **ముల్లుల వేగాలు**: నిమిషాల ముల్లు నిమిషానికి **$6^\circ$**, గంటల ముల్లు గంటకు **$30^\circ$ (నిమిషానికి $0.5^\circ$)** తిరుగుతుంది. సాపేక్ష వేగం = **$5.5^\circ (11/2^\circ)$**.
2. **$H$ గంటల $M$ నిమిషాల వద్ద కోణం సూత్రం**:
   $$\theta = \left| 30H - \frac{11}{2}M \right|^\circ$$`,
      ruleEn: 'Ratio Shortcuts: If H : M = 1 : 5 (like 3:15, 4:20, 6:30), Angle = M / 2! If H : M = 1 : 4 (like 3:12, 4:16), Angle = 2 × M!',
      ruleTe: 'సమయం 1 : 5 నిష్పత్తిలో ఉంటే (ఉదా: 4:20, 6:30) కోణం = (నిమిషాలు ÷ 2)! సమయం 1 : 4 నిష్పత్తిలో ఉంటే కోణం = (నిమిషాలు × 2)!',
      formula: 'θ = |30H - (11/2)M| | Reflex Angle = 360° - θ | 1:5 Ratio → θ = M/2',
      exampleQEn: 'Find the angle and reflex angle between the hands of a clock at 7:20.',
      exampleQTe: 'గడియారంలో సమయం 7:20 అయినప్పుడు రెండు ముల్లుల మధ్య కోణం మరియు పరావర్తన కోణం (Reflex Angle) ఎంత?',
      exampleSolEn: 'θ = | 30(7) - (11/2)(20) | = | 210 - 110 | = 100°.\nReflex Angle = 360° - 100° = 260°.',
      exampleSolTe: 'కోణం θ = | 30(7) - (11/2)(20) | = | 210 - 110 | = 100°.\nపరావర్తన కోణం = 360° - 100° = 260°.'
    },
    {
      code: '13.6',
      titleEn: 'Special Positions of Hands: Coinciding (0°), Opposite (180°) & Right Angle (90°)',
      titleTe: 'ముల్లుల ప్రత్యేక స్థానాలు: ఏకీభవించడం (0°), వ్యతిరేక దిశ (180°) & లంబ కోణం (90°)',
      conceptEn: `Frequency Table (Must Memorize):
1. **Coincide / Overlap ($0^\circ$, every $65\frac{5}{11}$ mins)**: **11 times in 12 hours** | **22 times in 24 hours** (Does not happen between 12 and 1 except at 12:00).
   • Exact time between $H$ and $H+1$: **$M = \frac{60}{11} \times H$** minutes past $H$!
2. **Opposite / Straight Line ($180^\circ$)**: **11 times in 12 hours** | **22 times in 24 hours** (Exception between 5 and 7 at 6:00).
   • Exact time: **$M = \frac{60}{11} \times (H \pm 6)$** minutes past $H$.
3. **Right Angle / Perpendicular ($90^\circ$)**: **22 times in 12 hours** | **44 times in 24 hours**!
   • Exact time: **$M = \frac{60}{11} \times (H \pm 3)$** minutes past $H$.`,
      conceptTe: `ముల్లుల ప్రత్యేక స్థానాల పట్టిక:
1. **ఏకీభవించడం ($0^\circ$ — ఒకదానిపై ఒకటి)**: 12 గంటలలో **11 సార్లు**, 24 గంటలలో **22 సార్లు**. ఖచ్చితమైన సమయం = **$\frac{60}{11} \times H$** నిమిషాలు.
2. **వ్యతిరేక దిశలో సరళరేఖ ($180^\circ$)**: 12 గంటలలో **11 సార్లు**, 24 గంటలలో **22 సార్లు**.
3. **లంబ కోణం ($90^\circ$)**: 12 గంటలలో **22 సార్లు**, 24 గంటలలో **44 సార్లు**!`,
      ruleEn: '10-Sum Option Trick: In mixed fraction answers like 21(9/11) or 32(8/11), the unit digit of the integer part + numerator ALWAYS adds up to 10 (1+9=10, 2+8=10)!',
      ruleTe: '10-మొత్తం ఆప్షన్ ట్రిక్: ఇటువంటి లెక్కల సమాధానం $a\frac{b}{11}$ లో పూర్ణాంకం చివరి అంకె + లవం ఎల్లప్పుడూ **10** అవుతుంది (ఉదా: $21\frac{9}{11} \rightarrow 1+9=10$)!',
      formula: '0° Time = (60/11)H | 180° Time = (60/11)(H ± 6) | 90° Time = (60/11)(H ± 3)',
      exampleQEn: 'At what time between 4 o\'clock and 5 o\'clock will the hands of a clock coincide (overlap)?',
      exampleQTe: '4 గంటలు మరియు 5 గంటల మధ్య ఏ సమయంలో గడియారం యొక్క రెండు ముల్లులు ఏకీభవిస్తాయి (0°)?',
      exampleSolEn: 'Using M = (60 / 11) × H for H = 4:\nM = (60 × 4) / 11 = 240 / 11 = 21(9/11) minutes past 4.',
      exampleSolTe: 'సూత్రం: M = (60/11) × 4 = 240/11 = 4 గంటల 21(9/11) నిమిషాలు.'
    },
    {
      code: '13.7',
      titleEn: 'Mirror Image Time (11:60) & Water Image Time (18:30)',
      titleTe: 'అద్దం ప్రతిబింబ సమయం (11:60) మరియు నీటి ప్రతిబింబ సమయం (18:30)',
      conceptEn: `1. **Mirror Image Time (అద్దంలో సమయం)**:
   • Subtract the given time from **11:60** (or from **23:60** if given time is between 11:01 and 12:59).
2. **Water Image Time (నీటిలో ప్రతిబింబ సమయం)**:
   • Subtract the given time from **18:30** (if minutes $\le 30$) or from **17:90** (if minutes $> 30$).`,
      conceptTe: `1. **అద్దం ప్రతిబింబం (Mirror Image)**: ఇచ్చిన సమయాన్ని **11:60** నుండి తీసివేయాలి (12 గంటల సమయమైతే **23:60** నుండి తీసివేయాలి).
2. **నీటి ప్రతిబింబం (Water Image)**: ఇచ్చిన సమయాన్ని **18:30** (నిమిషాలు 30 లోపు ఉంటే) లేదా **17:90** (నిమిషాలు 30 కంటే ఎక్కువ ఉంటే) నుండి తీసివేయాలి.`,
      ruleEn: 'Mirror Image → Subtract from 11:60. Water Image → Subtract from 18:30 (or 17:90)!',
      ruleTe: 'అద్దం ప్రతిబింబం = 11:60 నుండి తీసివేత. నీటి ప్రతిబింబం = 18:30 (లేదా 17:90) నుండి తీసివేత!',
      formula: 'Mirror Time = 11:60 - Real Time | Water Time = 18:30 (or 17:90) - Real Time',
      exampleQEn: 'If a clock shows 8:25, what will be its Mirror Image time and Water Image time?',
      exampleQTe: 'ఒక గడియారంలో సమయం 8:25 అయితే, అద్దంలో మరియు నీటిలో కనిపించే సమయాలు ఎంత?',
      exampleSolEn: '• Mirror Image Time = 11:60 - 8:25 = 3:35.\n• Water Image Time = 18:30 - 8:25 = 10:05.',
      exampleSolTe: '• అద్దంలో సమయం = 11:60 - 8:25 = 3:35.\n• నీటిలో సమయం = 18:30 - 8:25 = 10:05.'
    }
  ],

  basicConcepts: [
    {
      titleEn: '1. Modular Arithmetic by 7 in Calendars & by 12/60 in Clocks',
      titleTe: '1. క్యాలెండర్‌లో 7 ఆవర్తనం, గడియారంలో 360° వృత్తాకార గమనం',
      en: 'Days of the week repeat every 7 days. Clock hands repeat relative positions every 65(5/11) minutes.',
      te: 'వారాలు ప్రతి 7 రోజులకు పునరావృతమవుతాయి. గడియారం ముల్లులు ప్రతి 65(5/11) నిమిషాలకు ఒకసారి కలుసుకుంటాయి.'
    }
  ],

  definitionsAndRules: [
    {
      termEn: 'Straight Line (0° + 180° Combined) Frequency',
      termTe: 'ముల్లులు ఒకే సరళరేఖలో ఉండే సార్లు (0° మరియు 180° కలిపి)',
      defEn: 'Hands are in a straight line (either pointing same direction 0° OR opposite 180°) 11 + 11 = 22 times in 12 hours, and 44 times in 24 hours!',
      defTe: 'ముల్లులు ఒకే సరళరేఖలో (0° మరియు 180° కలిపి) 12 గంటలలో 22 సార్లు, 24 గంటలలో 44 సార్లు ఉంటాయి!'
    }
  ],

  problemTypes: [
    {
      typeNo: 'Type 1',
      nameEn: 'Hour Hand Angular Rotation in Given Time',
      nameTe: 'గంటల ముల్లు తిరిగే కోణం',
      patternEn: 'Through how many degrees does the hour hand rotate from 8:00 AM to 2:00 PM?',
      patternTe: 'ఉదయం 8:00 నుండి మధ్యాహ్నం 2:00 వరకు గంటల ముల్లు ఎన్ని డిగ్రీలు తిరుగుతుంది?',
      approachEn: '6 hours × 30°/hr = 180°.',
      approachTe: '6 గంటలు × 30° = 180°.'
    }
  ],

  examLevelExamples: [
    {
      examTag: 'RRB NTPC CBT-1 • Exact Day of Historical Date',
      qEn: 'What day of the week was 15th August 1947 (India\'s Independence Day)?',
      qTe: '15 ఆగస్టు 1947 (భారత స్వాతంత్ర్య దినోత్సవం) ఏ వారం అయింది?',
      solEn: 'Step 1: Completed years = 1946 = 1600 (0 odd days) + 300 (1 odd day) + 46 years.\nIn 46 years: 11 leap years + 35 ordinary years → 46 + 11 = 57 odd days ≡ 1 odd day.\nSo up to 1946 = 0 + 1 + 1 = 2 odd days.\nStep 2: In 1947 up to 15 Aug: Jan(3) + Feb(0) + Mar(3) + Apr(2) + May(3) + Jun(2) + Jul(3) + Aug(15≡1) = 17 ≡ 3 odd days.\nStep 3: Total Odd Days = 2 + 3 = 5 (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Friday) → Friday!',
      solTe: 'సోపానం 1: 1946 పూర్తి సంవత్సరాలు = 1600 (0) + 300 (1) + 46 ఏళ్లు (46 + 11 లీపు = 57 ≡ 1) → మొత్తం = 2 విషమ రోజులు.\nసోపానం 2: 1947 లో ఆగస్టు 15 వరకు = 3+0+3+2+3+2+3+1 = 17 ≡ 3 విషమ రోజులు.\nసోపానం 3: మొత్తం = 2 + 3 = 5 → శుక్రవారం (Friday)!',
      shortcutTip: 'Memorize 2 landmark dates: 15 Aug 1947 = Friday | 26 Jan 1950 = Thursday!'
    }
  ],

  quickRevision: [
    {
      pointEn: '100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0 odd days. Calendar repeats in +6 (rem 1), +11 (rem 2,3), +28 (leap).',
      pointTe: '100 సం.=5, 200 సం.=3, 300 సం.=1, 400 సం.=0 విషమ రోజులు. క్యాలెండర్ రిపీట్: +6, +11, +28 ఏళ్లు.'
    },
    {
      pointEn: 'Clock Angle θ = |30H - (11/2)M|. 0° & 180° occur 22 times/day; 90° occurs 44 times/day. Mirror = 11:60, Water = 18:30.',
      pointTe: 'కోణం θ = |30H - (11/2)M|. అద్దం సమయం = 11:60 - T, నీటి సమయం = 18:30 - T.'
    }
  ]
};

/* ============================================================================
   ADDITIONAL RRB-STYLE PRACTICE QUESTIONS WITH DETAILED EXPLANATIONS
   Ensuring Number System & All 13 Mathematics Chapters Have Comprehensive
   Sub-Topic Coverage in Section 11 (Practice Questions) & Section 12 (Answers)
   ============================================================================ */
window.RRB_TEXTBOOK_EXTRA_QUESTIONS = [
  // --- CHAPTER 1: NUMBER SYSTEM (Covers Sub-Topics 1.1 to 1.10) ---
  {
    id: 'q-math-ns-tb-1',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Easy',
    examTag: 'RRB Group-D • Sub-Topic 1.1 & 1.2 (Primes & Classification)',
    qEn: 'Which of the following statements is TRUE regarding Prime and Rational numbers?',
    qTe: 'ప్రధాన సంఖ్యలు మరియు అకరణీయ సంఖ్యలకు సంబంధించి క్రింది వాటిలో సరైన వాక్యం ఏది?',
    optionsEn: [
      '1 is the smallest odd prime number',
      'There are 25 prime numbers between 1 and 100, and 2 is the only even prime',
      'π (Pi) is a rational number because π = 22/7',
      'Every whole number is a natural number'
    ],
    optionsTe: [
      '1 అనేది అతి చిన్న బేసి ప్రధాన సంఖ్య',
      '1 నుండి 100 వరకు 25 ప్రధాన సంఖ్యలు కలవు, మరియు 2 ఏకైక సరి ప్రధాన సంఖ్య',
      'π = 22/7 కాబట్టి π అనేది అకరణీయ సంఖ్య',
      'ప్రతి పూర్ణాంకం ఒక సహజ సంఖ్య అవుతుంది'
    ],
    answer: 1,
    expEn: '1 is neither prime nor composite (smallest odd prime is 3). π is an irrational number (22/7 is only an approximation). 0 is a whole number but not a natural number. Statement (B) is 100% true: there are 25 primes from 1 to 100 (15 from 1–50 and 10 from 51–100) and 2 is the only even prime.',
    expTe: '1 ప్రధాన సంఖ్య కాదు, సంయుక్త సంఖ్య కాదు (అతి చిన్న బేసి ప్రధాన సంఖ్య 3). π అనేది కరణీయ సంఖ్య. సున్నా (0) పూర్ణాంకం కానీ సహజ సంఖ్య కాదు. కాబట్టి ఆప్షన్ (B) మాత్రమే పూర్తిగా సరైనది: 1 నుండి 100 వరకు 25 ప్రధాన సంఖ్యలు ఉంటాయి మరియు 2 ఏకైక సరి ప్రధాన సంఖ్య.',
    trickEn: 'Memorize: Primes (1–50) = 15, Primes (51–100) = 10, Total (1–100) = 25!'
  },
  {
    id: 'q-math-ns-tb-2',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Easy',
    examTag: 'RRB NTPC CBT-1 • Sub-Topic 1.3 (Place Value & Face Value)',
    qEn: 'Find the difference between the Place Value of 8 and the Face Value of 8 in the number 4,83,625.',
    qTe: '4,83,625 అనే సంఖ్యలో 8 యొక్క స్థాన విలువ (Place Value) మరియు ముఖ విలువ (Face Value) ల మధ్య భేదం ఎంత?',
    optionsEn: ['79,992', '80,008', '79,920', '79,998'],
    optionsTe: ['79,992', '80,008', '79,920', '79,998'],
    answer: 0,
    expEn: 'Step 1: In 4,83,625, the digit 8 is in the Ten-Thousands place → Place Value = 80,000.\nStep 2: Face Value of 8 = 8.\nStep 3: Difference = 80,000 - 8 = 79,992.',
    expTe: 'సోపానం 1: 4,83,625 లో 8 పదివేల స్థానంలో ఉంది కాబట్టి స్థాన విలువ = 80,000.\nసోపానం 2: 8 యొక్క ముఖ విలువ = 8.\nసోపానం 3: భేదం = 80,000 - 8 = 79,992.',
    trickEn: 'Check unit digit: 0 - 8 borrows to give unit digit 2 (79,992)!'
  },
  {
    id: 'q-math-ns-tb-3',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Sub-Topic 1.4 (Divisibility by 72)',
    qEn: 'If the 8-digit number 789x531y is completely divisible by 72, find the value of (5x - 3y).',
    qTe: '789x531y అనే 8-అంకెల సంఖ్య 72 చే నిశ్శేషంగా భాగించబడితే, (5x - 3y) విలువ ఎంత?',
    optionsEn: ['-1', '4', '2', '8'],
    optionsTe: ['-1', '4', '2', '8'],
    answer: 0,
    expEn: 'Step 1: 72 = 8 × 9. By Rule of 8, last 3 digits (31y) must be divisible by 8.\nSince 312 ÷ 8 = 39, we get y = 2.\nStep 2: By Rule of 9, sum of digits (7+8+9+x+5+3+1+2 = 35 + x) must be divisible by 9.\n35 + x = 36 → x = 1.\nStep 3: Value of (5x - 3y) = 5(1) - 3(2) = 5 - 6 = -1.',
    expTe: 'సోపానం 1: 72 = 8 × 9. చివరి 3 అంకెలు (31y) 8 చే భాగించబడాలంటే 312 ÷ 8 = 39 కావున y = 2.\nసోపానం 2: 9 చే భాజనీయతకు అంకెల మొత్తం = 7+8+9+x+5+3+1+2 = 35 + x = 36 → x = 1.\nసోపానం 3: (5x - 3y) = 5(1) - 3(2) = -1.',
    trickEn: 'Always solve y first using the last 3 digits (÷8), then cast out 9s to find x!'
  },
  {
    id: 'q-math-ns-tb-4',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-2 • Sub-Topic 1.5 (Unit Digit of Powers)',
    qEn: 'What is the unit digit in the product: (4387)²⁴⁵ × (621)⁷² × (314)⁵⁸?',
    qTe: '(4387)²⁴⁵ × (621)⁷² × (314)⁵⁸ లబ్దంలో ఒకట్ల స్థానంలోని అంకె (Unit Digit) ఎంత?',
    optionsEn: ['2', '4', '7', '8'],
    optionsTe: ['2', '4', '7', '8'],
    answer: 0,
    expEn: 'Step 1: Unit digit of (4387)²⁴⁵ → divide power 45 by 4 → remainder = 1 → 7¹ = 7.\nStep 2: Unit digit of (621)⁷² → 1 raised to any power = 1.\nStep 3: Unit digit of (314)⁵⁸ → 4 raised to Even power (58) = 6.\nStep 4: Product of unit digits = 7 × 1 × 6 = 42 → Unit digit = 2.',
    expTe: 'సోపానం 1: (4387)²⁴⁵ లో 45 ÷ 4 శేషం 1 → 7¹ = 7.\nసోపానం 2: (621)⁷² లో చివర 1 ఉంది కాబట్టి = 1.\nసోపానం 3: (314)⁵⁸ లో సరి ఘాతం కాబట్టి 4^సరి = 6.\nసోపానం 4: ఒకట్ల స్థానాల లబ్దం = 7 × 1 × 6 = 42 → ఒకట్ల స్థానం = 2.',
    trickEn: 'For 7²⁴⁵, only divide the last 2 digits of the power (45 ÷ 4 → rem 1)!'
  },
  {
    id: 'q-math-ns-tb-5',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Moderate',
    examTag: 'RRB Group-D • Sub-Topic 1.6 (Remainder Theorem)',
    qEn: 'When a number N is divided by 72, it leaves a remainder of 25. What will be the remainder when (2N + 7) is divided by 18?',
    qTe: 'ఒక సంఖ్య N ను 72 చే భాగించినప్పుడు 25 శేషం వస్తుంది. అయిన (2N + 7) ను 18 చే భాగించినప్పుడు వచ్చే శేషం ఎంత?',
    optionsEn: ['3', '5', '11', '13'],
    optionsTe: ['3', '5', '11', '13'],
    answer: 0,
    expEn: 'Step 1: Since 72 is a multiple of 18 (18 × 4 = 72), take N = first remainder = 25.\nStep 2: Even faster, 25 ÷ 18 leaves remainder 7, so put N = 7.\nStep 3: Value of (2N + 7) = 2(7) + 7 = 21.\nStep 4: Divide 21 by 18 → Remainder = 3!',
    expTe: 'సోపానం 1: 72 అనేది 18 యొక్క గుణిజం కాబట్టి N = 25 (లేదా 25 ÷ 18 శేషం = 7) గా తీసుకోండి.\nసోపానం 2: 2N + 7 = 2(7) + 7 = 21.\nసోపానం 3: 21 ని 18 చే భాగిస్తే శేషం = 3!',
    trickEn: 'Treat the first remainder directly as the number N!'
  },
  {
    id: 'q-math-ns-tb-6',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Hard',
    examTag: 'RRB NTPC CBT-2 • Sub-Topic 1.7 (Total, Even & Odd Factors)',
    qEn: 'Find the total number of factors and the number of EVEN factors of 240.',
    qTe: '240 యొక్క మొత్తం కారణాంకాల సంఖ్య మరియు సరి కారణాంకాల (Even Factors) సంఖ్య ఎంత?',
    optionsEn: [
      'Total = 20, Even = 16',
      'Total = 16, Even = 12',
      'Total = 20, Even = 12',
      'Total = 24, Even = 18'
    ],
    optionsTe: [
      'మొత్తం = 20, సరి = 16',
      'మొత్తం = 16, సరి = 12',
      'మొత్తం = 20, సరి = 12',
      'మొత్తం = 24, సరి = 18'
    ],
    answer: 0,
    expEn: 'Step 1: Prime factorization of 240 = 16 × 15 = 2⁴ × 3¹ × 5¹.\nStep 2: Total Factors = (4 + 1)(1 + 1)(1 + 1) = 5 × 2 × 2 = 20.\nStep 3: Even Factors = p × (q + 1)(r + 1) = 4 × (1 + 1)(1 + 1) = 4 × 2 × 2 = 16.',
    expTe: 'సోపానం 1: 240 = 16 × 15 = 2⁴ × 3¹ × 5¹.\nసోపానం 2: మొత్తం కారణాంకాలు = (4+1)(1+1)(1+1) = 5 × 2 × 2 = 20.\nసోపానం 3: సరి కారణాంకాలు = 4 × (1+1)(1+1) = 4 × 2 × 2 = 16.',
    trickEn: 'Odd factors = (1+1)(1+1) = 4 → Even factors = Total (20) - Odd (4) = 16!'
  },
  {
    id: 'q-math-ns-tb-7',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Sub-Topic 1.8 (Trailing Zeros in n!)',
    qEn: 'Find the number of trailing zeros at the end of 200! (1 × 2 × 3 × ... × 200).',
    qTe: '200! (1 × 2 × 3 × ... × 200) లబ్దం చివరలో వచ్చే సున్నాల సంఖ్య ఎంత?',
    optionsEn: ['40', '48', '49', '50'],
    optionsTe: ['40', '48', '49', '50'],
    answer: 2,
    expEn: 'Divide 200 successively by 5 and add integer quotients:\n• 200 ÷ 5 = 40\n• 40 ÷ 5 = 8\n• 8 ÷ 5 = 1 (quotient)\nTotal Trailing Zeros = 40 + 8 + 1 = 49.',
    expTe: '200 ను వరుసగా 5 చే భాగిస్తూ భాగఫలాలను కూడండి:\n200 ÷ 5 = 40; 40 ÷ 5 = 8; 8 ÷ 5 = 1.\nమొత్తం సున్నాలు = 40 + 8 + 1 = 49.',
    trickEn: 'Memorize standard factorials: 50! → 12, 100! → 24, 200! → 49, 1000! → 249!'
  },
  {
    id: 'q-math-ns-tb-8',
    subject: 'math',
    topicId: 'math-number-system',
    difficulty: 'Hard',
    examTag: 'RRB NTPC CBT-2 • Sub-Topic 1.9 & 1.10 (Series & Algebraic Simplification)',
    qEn: 'Find the value of: [ 1/(2×5) + 1/(5×8) + 1/(8×11) + ... + 1/(29×32) ].',
    qTe: '[ 1/(2×5) + 1/(5×8) + 1/(8×11) + ... + 1/(29×32) ] శ్రేణి విలువ ఎంత?',
    optionsEn: ['5/32', '15/32', '10/32', '3/16'],
    optionsTe: ['5/32', '15/32', '10/32', '3/16'],
    answer: 0,
    expEn: 'Step 1: Here the difference between factors in the denominator is d = 5 - 2 = 3.\nStep 2: Apply Telescoping Formula:\nSum = (1 / Difference) × (1 / First Factor - 1 / Last Factor)\n= (1 / 3) × (1 / 2 - 1 / 32) = (1 / 3) × (15 / 32) = 5 / 32.',
    expTe: 'సోపానం 1: హారంలోని సంఖ్యల భేదం d = 5 - 2 = 3.\nసోపానం 2: సూత్రం = (1 / భేదం) × (1/మొదటి సంఖ్య - 1/చివరి సంఖ్య)\n= (1/3) × (1/2 - 1/32) = (1/3) × (15/32) = 5/32.',
    trickEn: 'Shortcut: Count number of terms n = 10 → Sum = n / (First × Last) = 10 / (2 × 32) = 5/32!'
  },

  // --- EXTRA PRACTICE QUESTIONS FOR OTHER MATHEMATICS CHAPTERS ---
  {
    id: 'q-math-lcm-tb-1',
    subject: 'math',
    topicId: 'math-lcm-hcf',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Chapter 2 (LCM & HCF Remainder Model)',
    qEn: 'Find the least number which when divided by 16, 24, 36, and 54 leaves remainders 12, 20, 32, and 50 respectively.',
    qTe: '16, 24, 36 మరియు 54 లచే భాగించినప్పుడు వరుసగా 12, 20, 32 మరియు 50 శేషాలను ఇచ్చే కనిష్ట సంఖ్య ఏది?',
    optionsEn: ['428', '432', '436', '424'],
    optionsTe: ['428', '432', '436', '424'],
    answer: 0,
    expEn: 'Step 1: Notice constant difference K between divisors and remainders:\n(16 - 12) = 4, (24 - 20) = 4, (36 - 32) = 4, (54 - 50) = 4.\nStep 2: LCM of (16, 24, 36, 54) = 432.\nStep 3: Required number = LCM - K = 432 - 4 = 428.',
    expTe: 'సోపానం 1: ప్రతి భాజకానికి, శేషానికి మధ్య స్థిర భేదం K = 16 - 12 = 4.\nసోపానం 2: 16, 24, 36, 54 ల క.సా.గు (LCM) = 432.\nసోపానం 3: కావలసిన సంఖ్య = 432 - 4 = 428.',
    trickEn: 'Constant difference K = 4 → Subtract 4 from LCM(432) = 428!'
  },
  {
    id: 'q-math-pl-tb-1',
    subject: 'math',
    topicId: 'math-profit-loss',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Chapter 4 (Dishonest Dealer)',
    qEn: 'A dishonest shopkeeper claims to sell rice at cost price, but uses a false weight of 750 grams instead of 1 kg (1000 g). Find his profit percentage.',
    qTe: 'ఒక వ్యాపారి బియ్యాన్ని కొన్న వెలకే అమ్ముతానని చెప్పి, 1 కిలో (1000 గ్రా.) బదులుగా 750 గ్రాముల తప్పుడు తూకం వాడతాడు. అతని లాభ శాతం ఎంత?',
    optionsEn: ['25%', '33⅓%', '20%', '30%'],
    optionsTe: ['25%', '33⅓%', '20%', '30%'],
    answer: 1,
    expEn: 'True Weight = 1000 g, False Weight given (CP) = 750 g.\nProfit in weight = 1000 - 750 = 250 g.\nProfit % = (250 / 750) × 100% = (1/3) × 100% = 33⅓%.',
    expTe: 'ఇచ్చిన బరువు (CP) = 750 గ్రా., వసూలు చేసింది (SP) = 1000 గ్రా.\nలాభం = 250 గ్రా. → లాభ శాతం = (250 / 750) × 100% = 33⅓%.',
    trickEn: 'Always put False Weight (750) in the denominator!'
  },
  {
    id: 'q-math-sici-tb-1',
    subject: 'math',
    topicId: 'math-si-ci',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-2 • Chapter 5 (3-Year CI vs SI Difference)',
    qEn: 'Find the difference between the Compound Interest and Simple Interest on ₹10,000 at 10% per annum for 3 years.',
    qTe: '₹10,000 అసలుపై సంవత్సరానికి 10% వడ్డీ రేటుతో 3 సంవత్సరాలకు చక్రవడ్డీ మరియు బారువడ్డీల మధ్య భేదం ఎంత?',
    optionsEn: ['₹300', '₹310', '₹331', '₹210'],
    optionsTe: ['₹300', '₹310', '₹331', '₹210'],
    answer: 1,
    expEn: 'At 10% for 3 years: SI = 30%, CI = 33.1% → Difference = 3.1% of Principal.\n3.1% of ₹10,000 = ₹310.\nOr by formula: D₃ = P(R/100)²[(300+R)/100] = 10000 × (1/100) × (310/100) = ₹310.',
    expTe: '10% రేటుతో 3 ఏళ్లకు SI = 30%, CI = 33.1% → భేదం = 3.1%.\n₹10,000 లో 3.1% = ₹310.',
    trickEn: 'At 10% p.a., 2-Yr Diff = 1% of P, and 3-Yr Diff = 3.1% of P!'
  },
  {
    id: 'q-math-rp-tb-1',
    subject: 'math',
    topicId: 'math-ratio-proportion',
    difficulty: 'Moderate',
    examTag: 'RRB Group-D • Chapter 6 (Coins in a Bag)',
    qEn: 'A box contains ₹1, 50 paise, and 25 paise coins in the ratio 3 : 4 : 8. If the total value of coins is ₹140, find the number of 25 paise coins.',
    qTe: 'ఒక పెట్టెలో ₹1, 50 పైసలు మరియు 25 పైసల నాణేలు 3 : 4 : 8 నిష్పత్తిలో ఉన్నాయి. మొత్తం సొమ్ము ₹140 అయితే, 25 పైసల నాణేల సంఖ్య ఎంత?',
    optionsEn: ['120', '160', '80', '140'],
    optionsTe: ['120', '160', '80', '140'],
    answer: 1,
    expEn: 'Value of 1 set = 3(₹1) + 4(₹0.50) + 8(₹0.25) = 3 + 2 + 2 = ₹7.\nTotal sets = ₹140 ÷ ₹7 = 20.\nNumber of 25 paise coins = 8 × 20 = 160 coins.',
    expTe: 'విలువ = 3(1) + 4(0.50) + 8(0.25) = 3 + 2 + 2 = 7 భాగాలు = ₹140 → 1 భాగం = 20.\n25 పైసల నాణేలు (8 భాగాలు) = 8 × 20 = 160.',
    trickEn: 'Convert coin ratio to rupee value ratio: 3 : 2 : 2 (Sum = 7 parts = ₹140)!'
  },
  {
    id: 'q-math-tw-tb-1',
    subject: 'math',
    topicId: 'math-time-work',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Chapter 7 (Alternate Days)',
    qEn: 'A can finish a work in 8 days and B can finish it in 12 days. If they work on alternate days starting with A, in how many days will the work be finished?',
    qTe: 'A ఒక పనిని 8 రోజుల్లో, B 12 రోజుల్లో చేయగలరు. A తో ప్రారంభించి రోజు విడిచి రోజు పనిచేస్తే పని ఎన్ని రోజుల్లో పూర్తవుతుంది?',
    optionsEn: ['9½ days', '9⅓ days', '10 days', '9⅔ days'],
    optionsTe: ['9½ రోజులు', '9⅓ రోజులు', '10 రోజులు', '9⅔ రోజులు'],
    answer: 0,
    expEn: 'Total Work = LCM(8, 12) = 24 units. A = 3 u/day, B = 2 u/day.\nIn 1 cycle (2 days), A + B do 3 + 2 = 5 units.\nIn 4 cycles (8 days), work done = 4 × 5 = 20 units.\nOn Day 9, A does 3 units (20 + 3 = 23 units).\nRemaining 1 unit is done by B on Day 10 in 1/2 day → Total = 9½ days.',
    expTe: 'మొత్తం పని = LCM(8, 12) = 24. A = 3, B = 2. 2 రోజుల్లో = 5 యూనిట్లు.\n8 రోజుల్లో (4 విడతలు) = 20 యూనిట్లు. 9వ రోజు A 3 యూనిట్లు చేస్తే 23 అవుతుంది. మిగిలిన 1 యూనిట్‌ను B 1/2 రోజులో చేస్తాడు → మొత్తం = 9½ రోజులు.',
    trickEn: 'Always step through the last cycle day-by-day!'
  },
  {
    id: 'q-math-tsd-tb-1',
    subject: 'math',
    topicId: 'math-trains-speed',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Chapter 8 (Boats & Streams)',
    qEn: 'A boat goes 40 km downstream in 4 hours and 30 km upstream in 5 hours. Find the speed of the boat in still water.',
    qTe: 'ఒక పడవ ప్రవాహ దిశలో 40 కి.మీ దూరాన్ని 4 గంటలలో, ఎదురు ప్రవాహంలో 30 కి.మీ దూరాన్ని 5 గంటలలో ప్రయాణిస్తుంది. నిలకడ నీటిలో పడవ వేగం ఎంత?',
    optionsEn: ['8 km/hr', '7.5 km/hr', '9 km/hr', '6 km/hr'],
    optionsTe: ['8 కి.మీ/గం', '7.5 కి.మీ/గం', '9 కి.మీ/గం', '6 కి.మీ/గం'],
    answer: 0,
    expEn: 'Downstream speed D = 40 / 4 = 10 km/hr.\nUpstream speed U = 30 / 5 = 6 km/hr.\nSpeed of boat in still water u = (D + U) / 2 = (10 + 6) / 2 = 8 km/hr.',
    expTe: 'వాలు వేగం D = 40/4 = 10 km/hr. ఎదురు వేగం U = 30/5 = 6 km/hr.\nనిలకడ నీటిలో పడవ వేగం u = (10 + 6)/2 = 8 km/hr.',
    trickEn: 'Boat speed = (D + U)/2 | Stream speed = (D - U)/2!'
  },
  {
    id: 'q-math-mens-tb-1',
    subject: 'math',
    topicId: 'math-mensuration-algebra',
    difficulty: 'Moderate',
    examTag: 'RRB NTPC CBT-1 • Chapter 9 (Polygon Diagonals)',
    qEn: 'Find the number of diagonals in a regular octagon (8-sided polygon).',
    qTe: 'ఒక క్రమ అష్టభుజిలో (8 భుజాల బహుభుజి) కర్ణాల సంఖ్య ఎంత?',
    optionsEn: ['16', '20', '24', '28'],
    optionsTe: ['16', '20', '24', '28'],
    answer: 1,
    expEn: 'Using formula: Number of diagonals = n(n - 3) / 2.\nFor n = 8: 8 × (8 - 3) / 2 = (8 × 5) / 2 = 20 diagonals.',
    expTe: 'కర్ణాల సంఖ్య సూత్రం = n(n - 3)/2 = 8(8 - 3)/2 = 20 కర్ణాలు.',
    trickEn: 'Triangle (3) has 0 diagonals, Pentagon (5) has 5, Hexagon (6) has 9, Octagon (8) has 20, Decagon (10) has 35!'
  }
];

/* ============================================================================
   AUTOMATIC TEXTBOOK ENRICHER & 100% SYNCHRONIZED TELUGU TEACHER VIDEO COMPILER
   Builds a complete Telugu Teacher Video Class for EVERY Mathematics Chapter
   where every single textbook Sub-Topic has its own dedicated video slide
   in the exact same order, plus Intro, Problem Types/Shortcuts, Exam Qs & Revision!
   ============================================================================ */
(function compileMathTextbookAndVideos() {
  if (!window.RRB_SUBJECTS || !window.RRB_MATH_TEXTBOOK_CHAPTERS) return;

  // 1. Add extra practice questions without duplicates
  if (window.RRB_QUESTIONS && Array.isArray(window.RRB_TEXTBOOK_EXTRA_QUESTIONS)) {
    window.RRB_TEXTBOOK_EXTRA_QUESTIONS.forEach(function (q) {
      if (!window.RRB_QUESTIONS.some(function (existing) { return existing.id === q.id; })) {
        window.RRB_QUESTIONS.push(q);
      }
    });
  }

  // Helper to strip markdown bold/backticks for smooth, natural Telugu human teacher speech
  function cleanSpeechText(str) {
    if (!str) return '';
    return String(str)
      .replace(/\*\*/g, '')
      .replace(/`/g, '')
      .replace(/\$\$/g, '')
      .replace(/\$/g, '')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 బై $2')
      .replace(/\\times/g, ' గుణకారం ')
      .replace(/\\div/g, ' భాగహారం ')
      .replace(/\\implies/g, ' కాబట్టి ')
      .replace(/\\rightarrow/g, ' నుండి ')
      .replace(/\\sqrt\{([^}]+)\}/g, ' వర్గమూలం $1 ')
      .replace(/•/g, '. ')
      .replace(/\n+/g, '. ');
  }

  var mathSubject = window.RRB_SUBJECTS.find(function (s) { return s.id === 'math'; });
  if (!mathSubject || !Array.isArray(mathSubject.topics)) return;

  window.RRB_VIDEOS = window.RRB_VIDEOS || [];

  mathSubject.topics.forEach(function (topic) {
    var tb = window.RRB_MATH_TEXTBOOK_CHAPTERS[topic.id];
    if (!tb) return;

    // Attach textbookChapter and keep backward-compatible properties enriched
    topic.textbookChapter = tb;
    topic.titleEn = tb.titleEn || topic.titleEn;
    topic.titleTe = tb.titleTe || topic.titleTe;
    topic.importance = tb.importance || topic.importance;
    topic.readTime = tb.readTime || topic.readTime;
    topic.videoId = tb.videoId;
    if (Array.isArray(tb.formulas) && tb.formulas.length > 0) {
      topic.formulas = tb.formulas;
    }
    if (Array.isArray(tb.examples) && tb.examples.length > 0) {
      topic.examples = tb.examples;
    }
    if (tb.shortcutEn) topic.shortcutEn = tb.shortcutEn;
    if (tb.shortcutTe) topic.shortcutTe = tb.shortcutTe;

    // Build 100% Synchronized Telugu Teacher Video Class for this exact Textbook Chapter
    var subTopics = tb.subTopics || [];
    var totalSlides = subTopics.length + 4; // Slide 1 (Intro) + N Sub-Topics + Models/Shortcuts + Exam Qs + Quick Revision
    var slides = [];

    // SLIDE 1: Chapter Introduction & All Relevant Sub-Topics Overview
    var subTopicListBoard = subTopics.map(function (st) {
      return '• Sub-Topic ' + st.code + ': ' + st.titleEn + '\n  (' + st.titleTe + ')';
    }).join('\n');

    var subTopicNamesTe = subTopics.map(function (st, idx) {
      return (idx + 1) + ') ' + st.titleTe;
    }).join(', ');

    slides.push({
      step: 'Slide 1 / ' + totalSlides + ' • అధ్యాయ పరిచయం & ఉప-అంశాలు (Chapter Intro)',
      subTopicCode: 'Intro',
      titleEn: tb.titleEn + ' — Introduction & Complete Syllabus Roadmap (' + subTopics.length + ' Sub-Topics)',
      titleTe: tb.titleTe + ' — అధ్యాయ పరిచయం మరియు మొత్తం ' + subTopics.length + ' ఉప-అంశాల వరుస క్రమం',
      boardMath: '📚 COMPLETE TEXTBOOK CHAPTER SYLLABUS (' + subTopics.length + ' SUB-TOPICS):\n' + subTopicListBoard,
      narrationTe: cleanSpeechText(
        'నమస్కారం విద్యార్థులారా! ' + tb.titleTe + ' పూర్తి తెలుగు వీడియో తరగతికి స్వాగతం. ' +
        tb.introTe + ' ఈ అధ్యాయంలో మనం మొత్తం ' + subTopics.length + ' ఉప-అంశాలను పాఠ్యపుస్తకంలోని వరుస క్రమంలోనే నేర్చుకుంటాము: ' +
        subTopicNamesTe + '. ప్రతి ఉప-అంశాన్ని ప్రాథమిక భావన నుండి సూత్రాలు, ఉదాహరణలు, షార్ట్‌కట్స్ మరియు ఆర్‌ఆర్‌బి పరీక్ష స్థాయి ప్రశ్నల వరకు స్పష్టంగా వివరిస్తాను. మొదటి ఉప-అంశంతో ప్రారంభిద్దాం!'
      ),
      narrationEn: cleanSpeechText(
        'Welcome students to ' + tb.titleEn + '. In this synchronized class, we will cover all ' + subTopics.length + ' textbook sub-topics in exact order, from basic concepts and definitions to formulas, step-by-step examples, shortcuts, RRB exam questions, and quick revision.'
      )
    });

    // SLIDES 2 to (N + 1): Every Single Sub-Topic in the Exact Same Order as the Textbook
    subTopics.forEach(function (st, idx) {
      var slideNo = idx + 2;
      var boardContent =
        '【SUB-TOPIC ' + st.code + ': ' + st.titleEn.toUpperCase() + '】\n' +
        '(' + st.titleTe + ')\n' +
        '----------------------------------------------------------------------\n' +
        '📌 KEY RULE / DEFINITION:\n' +
        '• (EN): ' + st.ruleEn + '\n' +
        '• (తెలుగు): ' + st.ruleTe + '\n\n' +
        '📐 FORMULA:  ' + st.formula + '\n' +
        '----------------------------------------------------------------------\n' +
        '✅ STEP-BY-STEP SOLVED EXAMPLE:\n' +
        'Q (EN): ' + st.exampleQEn + '\n' +
        'ప్రశ్న (TE): ' + st.exampleQTe + '\n\n' +
        'సాధన (Telugu Step-by-Step):\n' + st.exampleSolTe + '\n\n' +
        'Solution (English):\n' + st.exampleSolEn;

      var teacherTeluguNarration = cleanSpeechText(
        'ఇప్పుడు ఉప-అంశం ' + st.code + ': ' + st.titleTe + ' గురించి పూర్తిగా నేర్చుకుందాం. ' +
        st.conceptTe + ' ముఖ్య నియమం ఏమిటంటే: ' + st.ruleTe + ' ' +
        'ఇప్పుడు బోర్డు మీద ఉన్న ఉదాహరణ చూడండి. ప్రశ్న: ' + st.exampleQTe + ' ' +
        'దీనిని దశలవారీగా ఎలా సాధించాలంటే: ' + st.exampleSolTe
      );

      var teacherEnglishNarration = cleanSpeechText(
        'Sub-Topic ' + st.code + ': ' + st.titleEn + '. ' +
        st.conceptEn + ' Important Rule: ' + st.ruleEn + '. ' +
        'Formula: ' + st.formula + '. ' +
        'Example Question: ' + st.exampleQEn + '. Solution: ' + st.exampleSolEn
      );

      slides.push({
        step: 'Slide ' + slideNo + ' / ' + totalSlides + ' • ఉప-అంశం ' + st.code + ' (Sub-Topic ' + (idx + 1) + ' of ' + subTopics.length + ')',
        subTopicCode: st.code,
        titleEn: 'Sub-Topic ' + st.code + ': ' + st.titleEn,
        titleTe: 'ఉప-అంశం ' + st.code + ': ' + st.titleTe,
        boardMath: boardContent,
        narrationTe: teacherTeluguNarration,
        narrationEn: teacherEnglishNarration
      });
    });

    // SLIDE N + 2: Different Problem Types & Golden Shortcuts
    var typesBoard = (tb.problemTypes || []).slice(0, 5).map(function (pt) {
      return '• ' + pt.typeNo + ' (' + pt.nameTe + '):\n  ప్రశ్న తీరు: ' + pt.patternTe + '\n  సాధించే పద్ధతి: ' + pt.approachTe;
    }).join('\n\n');

    slides.push({
      step: 'Slide ' + (subTopics.length + 2) + ' / ' + totalSlides + ' • మోడల్స్ & షార్ట్‌కట్స్ (Problem Types & Tricks)',
      subTopicCode: 'Shortcuts',
      titleEn: 'Different Types of Problems & 5-Second Exam Shortcuts',
      titleTe: 'వివిధ రకాల ప్రశ్నల మోడల్స్ మరియు 5-సెకన్ల షార్ట్‌కట్ ట్రిక్స్',
      boardMath:
        '⚡ GOLDEN EXAM SHORTCUTS (తెలుగులో):\n' +
        (tb.shortcutTe || '') + '\n' +
        '----------------------------------------------------------------------\n' +
        '🎯 IMPORTANT EXAM PROBLEM MODELS:\n' + typesBoard,
      narrationTe: cleanSpeechText(
        'ఇప్పుడు ఈ అధ్యాయంలో అడిగే వివిధ రకాల ప్రశ్నల మోడల్స్ మరియు పరీక్షలో సమయాన్ని ఆదా చేసే షార్ట్‌కట్ ట్రిక్స్ చూద్దాం. ' +
        (tb.shortcutTe || '') + ' ' +
        (tb.problemTypes || []).map(function (pt) {
          return pt.typeNo + ': ' + pt.nameTe + '. దీనిని సాధించడానికి ' + pt.approachTe;
        }).join('. ')
      ),
      narrationEn: cleanSpeechText(
        'Now let us review the different types of problems and 5-second exam shortcuts for this chapter. ' +
        (tb.shortcutEn || '')
      )
    });

    // SLIDE N + 3: RRB NTPC & Group-D Exam-Level Solved Questions
    var examExBoard = (tb.examLevelExamples || []).map(function (ex, idx) {
      return '🏆 RRB EXAM QUESTION #' + (idx + 1) + ' (' + ex.examTag + '):\n' +
        'ప్రశ్న: ' + ex.qTe + '\n' +
        'Q (EN): ' + ex.qEn + '\n' +
        'సాధన (TE): ' + ex.solTe + '\n' +
        '⚡ Tip: ' + (ex.shortcutTip || '');
    }).join('\n----------------------------------------------------------------------\n');

    slides.push({
      step: 'Slide ' + (subTopics.length + 3) + ' / ' + totalSlides + ' • ఆర్‌ఆర్‌బి పరీక్ష స్థాయి ప్రశ్నలు (RRB Exam-Level Qs)',
      subTopicCode: 'ExamQs',
      titleEn: 'RRB NTPC & Group-D Exam-Level Solved Questions',
      titleTe: 'ఆర్‌ఆర్‌బి ఎన్‌టిపిసి & గ్రూప్-డి పరీక్ష స్థాయి ప్రశ్నల దశలవారీ సాధన',
      boardMath: examExBoard,
      narrationTe: cleanSpeechText(
        'ఇప్పుడు ఆర్‌ఆర్‌బి ఎన్‌టిపిసి మరియు గ్రూప్-డి పరీక్షలలో ఇచ్చిన అసలు పరీక్ష స్థాయి ప్రశ్నలను దశలవారీగా సాధిద్దాం. ' +
        (tb.examLevelExamples || []).map(function (ex, idx) {
          return 'ప్రశ్న ' + (idx + 1) + ': ' + ex.qTe + '. సాధన: ' + ex.solTe;
        }).join('. ')
      ),
      narrationEn: cleanSpeechText(
        'Let us solve actual RRB NTPC and Group-D exam-level questions step by step. ' +
        (tb.examLevelExamples || []).map(function (ex, idx) {
          return 'Question ' + (idx + 1) + ': ' + ex.qEn + '. Solution: ' + ex.solEn;
        }).join('. ')
      )
    });

    // SLIDE N + 4: Quick Revision & Pre-Exam Summary
    var revBoard = (tb.quickRevision || []).map(function (r, idx) {
      return (idx + 1) + '. (తెలుగు): ' + r.pointTe + '\n   (English): ' + r.pointEn;
    }).join('\n\n');

    slides.push({
      step: 'Slide ' + totalSlides + ' / ' + totalSlides + ' • క్విక్ రివిజన్ (Quick Revision)',
      subTopicCode: 'Revision',
      titleEn: 'Chapter Quick Revision & Final Exam Checklist',
      titleTe: 'అధ్యాయం పూర్తి క్విక్ రివిజన్ (పరీక్ష ముందు 5 నిమిషాల పునశ్చరణ)',
      boardMath: '📝 COMPLETE CHAPTER QUICK REVISION SUMMARY:\n\n' + revBoard,
      narrationTe: cleanSpeechText(
        'చివరగా ఈ అధ్యాయం మొత్తాన్ని ఒకసారి వేగంగా రివిజన్ చేద్దాం. ' +
        (tb.quickRevision || []).map(function (r, idx) {
          return 'పాయింట్ ' + (idx + 1) + ': ' + r.pointTe;
        }).join('. ') +
        '. ఇంతటితో ఈ అధ్యాయం యొక్క పూర్తి తెలుగు వీడియో తరగతి పూర్తయింది. ఇప్పుడు కింద ఉన్న ప్రాక్టీస్ ప్రశ్నలను స్వయంగా సాల్వ్ చేసి మీ సమాధానాలను సరిచూసుకోండి. ఆల్ ది బెస్ట్!'
      ),
      narrationEn: cleanSpeechText(
        'Finally, let us do a quick revision of the entire chapter. ' +
        (tb.quickRevision || []).map(function (r, idx) {
          return 'Point ' + (idx + 1) + ': ' + r.pointEn;
        }).join('. ') +
        '. Now practice the RRB questions right below this video!'
      )
    });

    var videoObj = {
      id: tb.videoId,
      topicId: topic.id,
      subject: 'math',
      titleEn: tb.titleEn + ' — Synchronized Telugu Teacher Video Class (' + subTopics.length + ' Sub-Topics)',
      titleTe: tb.titleTe + ' — పూర్తి తెలుగు ఉపాధ్యాయ వీడియో క్లాస్ (మొత్తం ' + subTopics.length + ' ఉప-అంశాల వివరణ)',
      instructor: 'శ్రీనివాస రావు గారు — Srinivas Rao Sir (Senior RRB Maths Faculty • Telugu Medium)',
      duration: (subTopics.length * 4 + 8) + ':00',
      level: 'Complete Textbook Chapter • ' + subTopics.length + ' Sub-Topics in Telugu',
      slides: slides
    };

    var existingIdx = window.RRB_VIDEOS.findIndex(function (v) { return v.id === tb.videoId || v.topicId === topic.id; });
    if (existingIdx !== -1) {
      window.RRB_VIDEOS[existingIdx] = videoObj;
    } else {
      window.RRB_VIDEOS.unshift(videoObj);
    }
  });
})();
