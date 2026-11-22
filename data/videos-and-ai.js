/* ============================================================================
   STUDENT LEARNING VIDEOS (INTERACTIVE WHITEBOARD + VOICE NARRATION)
   & INTELLIGENT BILINGUAL AI DOUBT SOLVER ENGINE (ENGLISH + తెలుగు)
   ============================================================================ */

window.RRB_VIDEOS = [
  {
    id: 'vid-math-percentages',
    topicId: 'math-percentages',
    subject: 'math',
    titleEn: 'Percentages — Lesson 1: Basics of Percentage to RRB Exam-Level Questions',
    titleTe: 'శాతాలు (Percentages) — లెసన్ 1: ప్రాథమిక అంశాల నుండి ఆర్‌ఆర్‌బి పరీక్ష స్థాయి ప్రశ్నల వరకు పూర్తి వీడియో క్లాస్',
    instructor: 'Srinivas Rao Sir (Senior RRB Quant Faculty)',
    duration: '26:40',
    level: 'Lesson 1 • Basic to Exam Level',
    slides: [
      {
        step: 'Part 1 / 5 • Level 1: Basics of Percentage',
        titleEn: 'What is Percentage (%)? Understanding the Base-100 Concept & Conversions',
        titleTe: 'శాతం (%) అంటే ఏమిటి? 100 ఆధార భావన & భిన్నాలు-శాతాల మార్పిడి',
        boardMath: `MEANING OF PERCENTAGE ("Per Cent" = Out of 100):
• x%  =  x / 100     (Example: 25% = 25/100 = 1/4 = 0.25)

RULE 1: Fraction / Decimal → Percentage (Multiply by 100%)
• 3/5   = (3/5) × 100%   = 60%
• 0.35  = 0.35 × 100%    = 35%

RULE 2: Percentage → Fraction (Divide by 100)
• 40%   = 40 / 100       = 2/5
• 12.5% = 12.5 / 100     = 1/8

GOLDEN MENTAL MATH SPLIT RULE:
• To find 35% of 480:
  10% of 480 = 48  ⇒  30% = 48 × 3 = 144
   5% of 480 = 24  ⇒  35% = 144 + 24 = 168! (No pen & paper needed!)`,
        narrationEn: 'Welcome to Mathematics Percentages Lesson 1! Let us start from the absolute basics. Percent simply means out of every 100. Whenever you want to convert a fraction into a percentage, multiply by 100. Whenever you want to remove the percentage sign, divide by 100. Also look at the Mental Math Split Rule on the board: for any number, move the decimal one place left to get 10 percent, and halve it to get 5 percent!',
        narrationTe: 'గణితం శాతాలు (Percentages) లెసన్ 1 తరగతికి స్వాగతం! ప్రాథమిక అంశం నుండి ప్రారంభిద్దాం: శాతం అంటే ప్రతి వందకు (Out of 100) అని అర్థం. భిన్నాన్ని శాతంలోకి మార్చడానికి 100 తో గుణించాలి, శాతాన్ని భిన్నంలోకి మార్చడానికి 100 తో భాగించాలి. ఏ సంఖ్యలోనైనా 10% కావాలంటే చివరి నుండి ఒక దశాంశ స్థానం జరపండి!'
      },
      {
        step: 'Part 2 / 5 • Level 1.5: Master Fraction Table',
        titleEn: 'Must-Memorize RRB Fraction-to-Percentage Table (5-Second Speed Booster)',
        titleTe: 'ఆర్‌ఆర్‌బి పరీక్షల్లో 5 సెకన్లలో జవాబు ఇచ్చే భిన్నాలు - శాతాల పట్టిక',
        boardMath: `HIGH-FREQUENCY RRB FRACTION TABLE:
• 1/2 = 50%        • 1/3 = 33.33% (33⅓%)   • 2/3 = 66.66% (66⅔%)
• 1/4 = 25%        • 3/4 = 75%             • 1/5 = 20%
• 1/6 = 16.66%     • 5/6 = 83.33%          • 1/7 = 14.28% (14²/₇%)
• 1/8 = 12.5%      • 3/8 = 37.5%           • 5/8 = 62.5%
• 1/9 = 11.11%     • 1/11 = 9.09%          • 1/12 = 8.33%
• 1/15 = 6.66%     • 1/16 = 6.25%          • 1/20 = 5%

DENOMINATOR = ORIGINAL VALUE | NUMERATOR = CHANGE:
• +20% Increase ⇒ +1/5 ⇒ New Value becomes (5 + 1) = 6 parts!
• -12.5% Decrease ⇒ -1/8 ⇒ New Value becomes (8 - 1) = 7 parts!`,
        narrationEn: 'Why do toppers solve percentage questions in 5 seconds? Because they never multiply decimals like 12.5 percent or 16.66 percent! They immediately write 12.5 percent as 1 by 8, and 16.66 percent as 1 by 6. In any fraction, the bottom number is always the Original Value and the top number is the Increase or Decrease!',
        narrationTe: 'టాపర్లు శాతాల లెక్కలను 5 సెకన్లలో ఎలా చేస్తారో తెలుసా? వారు 12.5% కనిపిస్తే వెంటనే 1/8 అని, 16.66% కనిపిస్తే 1/6 అని రాస్తారు! భిన్నంలోని హారం (Denominator) ఎల్లప్పుడూ అసలు విలువను, లవం (Numerator) పెరుగుదల లేదా తగ్గుదలను సూచిస్తుంది.'
      },
      {
        step: 'Part 3 / 5 • Level 2: Basic & Foundation Examples',
        titleEn: 'Step-by-Step Examples: Basic Calculation to Number Restoration',
        titleTe: 'ఉదాహరణలు: ప్రాథమిక లెక్కల నుండి అసలు సంఖ్యను కనుగొనే పద్ధతి వరకు',
        boardMath: `EXAMPLE 1 (Basic Level):
Q: Find 37.5% of 640 + 25% of 320.
Sol: Since 37.5% = 3/8 and 25% = 1/4:
     = (3/8 × 640) + (1/4 × 320)
     = (3 × 80) + 80 = 240 + 80 = 320!

EXAMPLE 2 (Foundation Level — Finding Original Number):
Q: If a number is increased by 25%, it becomes 750. Find the original number.
Sol (Ratio Method):
     25% = +1/4  ⇒  Original = 4 parts, New = 5 parts
     Given: 5 parts = 750  ⇒  1 part = 150
     Original Number (4 parts) = 4 × 150 = 600!`,
        narrationEn: 'Let us solve two examples together. In Example 1, instead of multiplying 37.5 with 640, we replace 37.5 percent with 3 by 8. Eight divides 640 eighty times, and 3 times 80 is 240! Plus 80 gives 320. In Example 2, a 25 percent increase means 4 parts become 5 parts. If 5 parts equal 750, 1 part is 150, so 4 parts equal 600!',
        narrationTe: 'ఇప్పుడు రెండు ఉదాహరణలు చూద్దాం. మొదటి లెక్కలో 37.5% బదులుగా 3/8 రాస్తే, 3/8 × 640 = 240. దానికి 80 కలిపితే 320! రెండవ లెక్కలో 25% పెరుగుదల అంటే +1/4. అసలు సంఖ్య 4 భాగాలు అయితే కొత్త సంఖ్య 5 భాగాలు = 750. కాబట్టి 1 భాగం = 150, అసలు సంఖ్య = 4 × 150 = 600!'
      },
      {
        step: 'Part 4 / 5 • Level 3: Golden Exam Shortcuts',
        titleEn: 'Salary Comparison (Constant Product Rule) & Successive Change Formula',
        titleTe: 'జీతాల పోలిక (Constant Product) & వరుస శాతాల మార్పు (Successive Change)',
        boardMath: `SHORTCUT 1: Constant Product / Salary & Price Rule
If A is R% more than B, then B is less than A by: [ R / (100 + R) ] × 100%
• Example: Sugar price rises by 25% (+1/4). Consumption must drop by:
  +1/4 (Increase)  ⇒  -1/(4 + 1) = -1/5 = 20% Reduction!

SHORTCUT 2: Net Successive Percentage Change (A% then B%)
Net % Change = ( A + B + AB / 100 ) %
• Example: Salary increased by +20%, then decreased by -10%:
  Net Change = 20 - 10 + (20 × -10)/100 = 10 - 2 = +8% Net Increase!`,
        narrationEn: 'Now we move to Intermediate RRB Exam shortcuts. First, the Constant Product Rule: if price goes up by 1 by N, consumption must go down by 1 by N plus 1 so expenditure stays unchanged. So a 25 percent or 1 by 4 rise needs a 1 by 5 or 20 percent cut! Second, when two percentage changes happen back to back, use A plus B plus A B by 100.',
        narrationTe: 'ఇప్పుడు ఆర్‌ఆర్‌బి పరీక్షల్లో తరచుగా అడిగే 2 షార్ట్‌కట్స్ చూద్దాం. మొదటిది: చక్కెర ధర 25% (+1/4) పెరిగితే, ఖర్చు మారకుండా ఉండాలంటే వినియోగం 1/(4+1) = 1/5 = 20% తగ్గించాలి! రెండవది: వరుసగా A% మరియు B% మార్పులు జరిగితే నికర మార్పు = (A + B + AB/100)%.'
      },
      {
        step: 'Part 5 / 5 • Level 4: RRB CBT Exam-Level Questions',
        titleEn: 'Crack Exam-Level Passing Marks & Election Questions in 10 Seconds',
        titleTe: 'పరీక్షలో ఉత్తీర్ణత మార్కులు (Passing Marks) & ఎన్నికల ప్రశ్నలు — 10 సెకన్ల ట్రిక్',
        boardMath: `EXAM MODEL 1 (Passing Marks Question — RRB NTPC CBT-1/2):
Q: A student scores 32% and fails by 24 marks. Another scores 42% and gets
   36 marks more than passing marks. Find Maximum Marks & Passing %!
Sol: Difference in % = 42% - 32% = 10%
     Difference in Marks = 24 (shortfall) + 36 (extra) = 60 Marks
     ⇒ 10% = 60 Marks  ⇒  100% (Max Marks) = 600!
     ⇒ Passing Marks = 32% of 600 + 24 = 192 + 24 = 216 (Passing % = 36%)

EXAM MODEL 2 (Election Question — RRB NTPC CBT-2):
Q: In an election, 10% voters did not vote. Winner got 60% of valid votes
   and won by 1,800 votes. Find Total Enrolled Voters!
Sol: Valid Votes = 90% of Total (T).
     Winner = 60% of Valid, Loser = 40% of Valid ⇒ Margin = 20% of Valid!
     ⇒ 20% of (90% of T) = 1,800  ⇒  18% of T = 1,800  ⇒  T = 10,000 Voters!`,
        narrationEn: 'Finally, let us master the two most repeated advanced RRB exam questions! In Passing Marks problems, equate the difference in percentages to the sum of shortfall and extra marks: 42 minus 32 is 10 percent, which equals 24 plus 36, that is 60 marks. Immediately, 100 percent is 600 marks! In Election problems, the winner gets 60 percent of valid votes and the loser gets 40 percent, so the winning margin is 20 percent of valid votes. Practice the questions right below this video to test your mastery!',
        narrationTe: 'చివరగా ఆర్‌ఆర్‌బి పరీక్షల్లో అత్యధికంగా అడిగే 2 అడ్వాన్స్‌డ్ మోడల్స్ చూద్దాం! 1) పాసింగ్ మార్కుల లెక్కలో శాతాల తేడా (42% - 32% = 10%) = మార్కుల మొత్తం (24 + 36 = 60). అంటే 10% = 60 అయితే గరిష్ట మార్కులు (100%) = 600! 2) ఎన్నికల లెక్కలో విజేత 60%, ఓడినవారు 40% కాబట్టి మెజారిటీ = చెల్లిన ఓట్లలో 20%. అంటే 90% లో 20% = 18% = 1,800 ఓట్లు ⇒ మొత్తం ఓటర్లు = 10,000! ఇప్పుడు ఈ వీడియో కింద ఉన్న ప్రాక్టీస్ ప్రశ్నలను సాల్వ్ చేయండి!'
      }
    ]
  },
  {
    id: 'vid-ntpc-roadmap',
    subject: 'strategy',
    titleEn: 'Complete Roadmap: How to Crack RRB NTPC Undergraduate (10+2) in First Attempt',
    titleTe: 'మొదటి ప్రయత్నంలోనే ఆర్‌ఆర్‌బి ఎన్‌టిపిసి (10+2) ఉద్యోగం సాధించడం ఎలా? పూర్తి ప్లాన్',
    instructor: 'Ramesh Babu Sir (Ex-Station Master & RRB Mentor)',
    duration: '18:45',
    level: 'Beginner Must-Watch',
    slides: [
      {
        step: 'Slide 1 / 4 • Exam Structure',
        titleEn: 'Understanding RRB NTPC 10+2 (Undergraduate) Posts & Exam Pattern',
        titleTe: 'ఎన్‌టిపిసి అండర్ గ్రాడ్యుయేట్ (10+2) పోస్టులు & పరీక్షా విధానం',
        boardMath: `RRB NTPC UNDERGRADUATE (12th Pass):
• Commercial Cum Ticket Clerk (Level-3): Basic ₹21,700 (No Typing Test!)
• Accounts Clerk Cum Typist (Level-2): Basic ₹19,900 (Typing Qualifying)
• Junior Clerk Cum Typist (Level-2): Basic ₹19,900 (Typing Qualifying)
• Trains Clerk (Level-2): Basic ₹19,900 (No Typing Test!)

CBT-1: 100 Questions | 100 Marks | 90 Mins | -1/3 Negative Marking
CBT-2: 120 Questions | 120 Marks | 90 Mins | Final Merit Stage`,
        narrationEn: 'Welcome students! If you have passed 12th class or Intermediate, RRB NTPC Undergraduate is one of the best central government railway jobs. Notice that Commercial Cum Ticket Clerk and Trains Clerk do not even require a typing test! Your final selection depends on CBT-2 marks.',
        narrationTe: 'విద్యార్థులకు స్వాగతం! ఇంటర్మీడియట్ (10+2) అర్హతతో కేంద్ర ప్రభుత్వ రైల్వే ఉద్యోగం సాధించడానికి ఇది సువర్ణావకాశం. కమర్షియల్ కమ్ టికెట్ క్లర్క్ మరియు ట్రైన్స్ క్లర్క్ పోస్టులకు టైపింగ్ టెస్ట్ కూడా అవసరం లేదు!'
      },
      {
        step: 'Slide 2 / 4 • Safe Score Target',
        titleEn: 'Subject-Wise Target Score for 82+ Marks in CBT-1',
        titleTe: 'CBT-1 లో 82+ మార్కులు సాధించడానికి సబ్జెక్టుల వారీగా వ్యూహం',
        boardMath: `TARGET SCORE BREAKDOWN (Out of 100):
1. General Intelligence & Reasoning (30 Qs)  → Target: 27 - 28 Marks
2. Mathematics / Quantitative Aptitude (30 Qs) → Target: 25 - 27 Marks
3. General Awareness & Science (40 Qs)        → Target: 28 - 30 Marks
--------------------------------------------------------------------
TOTAL SAFE RAW SCORE                          → 80 to 85+ Marks!`,
        narrationEn: 'Mathematics and Reasoning together carry 60 marks out of 100 in CBT-1 and 70 marks out of 120 in CBT-2. Unlike GK, you can score nearly 95 percent accuracy in Math and Reasoning with daily practice.',
        narrationTe: 'గణితం మరియు రీజనింగ్ కలిపి CBT-1 లో 60 మార్కులు, CBT-2 లో 70 మార్కులు ఉంటాయి. వీటిలో రోజువారీ ప్రాక్టీస్ ద్వారా 90% పైగా మార్కులు సులభంగా సాధించవచ్చు.'
      },
      {
        step: 'Slide 3 / 4 • Negative Marking Rule',
        titleEn: 'How to Handle 1/3rd Negative Marking Smartly',
        titleTe: '1/3 వంతు నెగటివ్ మార్కింగ్‌ను అధిగమించడం ఎలా?',
        boardMath: `NEGATIVE MARKING RULE (-1/3):
• 1 Correct Answer = +1.00 Mark
• 3 Wrong Answers  = -1.00 Mark deducted!

Example:
Student A: Attempts 98 Qs (78 Right, 20 Wrong) → Score = 78 - 6.67 = 71.33
Student B: Attempts 84 Qs (78 Right,  6 Wrong) → Score = 78 - 2.00 = 76.00 (SELECTED!)`,
        narrationEn: 'Never do blind guessing in RRB exams! One-third negative marking is stricter than SSC one-fourth negative marking. Only take a calculated risk if you have eliminated at least two options.',
        narrationTe: 'రైల్వే పరీక్షలలో 1/3 వంతు నెగటివ్ మార్కింగ్ ఉంటుంది. అంటే 3 తప్పులకు 1 మార్కు పోతుంది. కాబట్టి తెలియని ప్రశ్నలకు గుడ్డిగా ఆప్షన్లు పెట్టకండి!'
      },
      {
        step: 'Slide 4 / 4 • 60-Day Study Routine',
        titleEn: 'Daily 4-Hour Study Timetable for Working & Full-Time Students',
        titleTe: 'ప్రతిరోజూ 4 గంటల స్టడీ ప్లాన్ (60 రోజుల ప్రణాళిక)',
        boardMath: `DAILY 4-HOUR WINNING ROUTINE:
• Hour 1 (Morning):  General Science (NCERT 9th & 10th) + Indian Railways GK
• Hour 2 (Noon):     Mathematics Topic Lesson + 25 Practice Questions
• Hour 3 (Evening):  Reasoning Speed Practice (Series, Coding, Syllogism)
• Hour 4 (Night):    1 Mock Test / PYQ Paper + AI Doubt Clearing`,
        narrationEn: 'Follow this 4-hour daily schedule consistently for 60 days using the Topic Lessons, Practice Bank, and CBT Mock Tests in this app. You will comfortably clear the cutoff!',
        narrationTe: 'ఈ యాప్‌లోని టాపిక్ లెసన్స్, ప్రాక్టీస్ ప్రశ్నలు మరియు మాక్ టెస్టులను 60 రోజుల పాటు క్రమం తప్పకుండా ప్రాక్టీస్ చేస్తే విజయం మీదే!'
      }
    ]
  },
  {
    id: 'vid-math-trains',
    topicId: 'math-trains-speed',
    subject: 'math',
    titleEn: 'Problems on Trains, Bridges & Relative Speed — 10-Second Shortcut Tricks',
    titleTe: 'రైళ్లు - వంతెనలు - సాపేక్ష వేగం లెక్కలు 10 సెకన్లలో చేసే షార్ట్‌కట్స్',
    instructor: 'Srinivas Rao Sir (Quant Specialist)',
    duration: '22:10',
    level: 'High Yield • 3 Marks Guaranteed',
    slides: [
      {
        step: 'Slide 1 / 3 • Speed Conversion',
        titleEn: 'Instant km/hr to m/s Conversion Using the 18-Table vs 5-Table',
        titleTe: '18 ఎక్కం - 5 ఎక్కం ట్రిక్‌తో వేగాన్ని క్షణాల్లో మార్చడం',
        boardMath: `18 km/hr  =  5 m/s
36 km/hr  = 10 m/s   (18 × 2 → 5 × 2)
54 km/hr  = 15 m/s   (18 × 3 → 5 × 3)
72 km/hr  = 20 m/s   (18 × 4 → 5 × 4)
90 km/hr  = 25 m/s   (18 × 5 → 5 × 5)
108 km/hr = 30 m/s   (18 × 6 → 5 × 6)`,
        narrationEn: 'In Railway exams, train length is in meters and time is in seconds, while speed is given in kilometers per hour. Instead of multiplying by 5 over 18 every time, just check which multiple of 18 the speed is, and take the same multiple of 5!',
        narrationTe: 'రైలు పొడవు మీటర్లలో, సమయం సెకన్లలో ఉన్నప్పుడు వేగాన్ని m/s లోకి మార్చాలి. ప్రతిసారీ 5/18 తో గుణించకుండా, వేగం 18 ఎక్కంలో ఎన్నవ గుణిజమో చూసి, 5 ఎక్కంలో అదే గుణిజాన్ని తీసుకోండి!'
      },
      {
        step: 'Slide 2 / 3 • Pole vs Bridge',
        titleEn: 'When a Train Crosses a Pole vs When it Crosses a Platform',
        titleTe: 'రైలు స్తంభాన్ని దాటినప్పుడు vs ప్లాట్‌ఫారమ్‌ను దాటినప్పుడు',
        boardMath: `CASE 1: Crossing a Pole / Standing Man / Signal Post
        Distance (D) = Length of Train (L_train)

CASE 2: Crossing a Platform / Bridge / Tunnel / Another Train
        Distance (D) = L_train + L_platform`,
        narrationEn: 'A pole or standing man has negligible width, so the train only travels its own length. When crossing a bridge or platform, always add the train length and platform length together to get total distance.',
        narrationTe: 'రైలు ఒక స్తంభాన్ని లేదా మనిషిని దాటితే దూరం = రైలు పొడవు మాత్రమే. అదే వంతెన లేదా ప్లాట్‌ఫారమ్‌ను దాటితే దూరం = రైలు పొడవు + వంతెన పొడవు!'
      },
      {
        step: 'Slide 3 / 3 • Relative Speed',
        titleEn: 'Two Trains Moving in Opposite vs Same Direction',
        titleTe: 'రెండు రైళ్లు ఎదురెదురుగా మరియు ఒకే దిశలో ప్రయాణించినప్పుడు',
        boardMath: `• Opposite Direction (ఎదురెదురుగా):
  Relative Speed = S₁ + S₂  (Add speeds!)

• Same Direction (ఒకే దిశలో):
  Relative Speed = |S₁ - S₂| (Subtract speeds!)

• Total Distance is ALWAYS (L₁ + L₂) in both cases!`,
        narrationEn: 'Students often make one common mistake: they subtract lengths when trains go in the same direction. Remember, lengths are ALWAYS added! Only speeds are subtracted in the same direction.',
        narrationTe: 'ముఖ్య గమనిక: రైళ్లు ఏ దిశలో వెళ్ళినా వాటి పొడవులను (L₁ + L₂) ఎల్లప్పుడూ కూడాలి! కేవలం వేగాలను మాత్రమే ఎదురెదురుగా అయితే కూడాలి, ఒకే దిశలో అయితే తీసివేయాలి.'
      }
    ]
  },
  {
    id: 'vid-math-sici',
    topicId: 'math-si-ci',
    subject: 'math',
    titleEn: 'Simple & Compound Interest Without Formulas (Tree & Ratio Method)',
    titleTe: 'సూత్రాలు లేకుండా బారువడ్డీ & చక్రవడ్డీ లెక్కలు (ట్రీ మెథడ్)',
    instructor: 'Srinivas Rao Sir (Quant Specialist)',
    duration: '19:30',
    level: 'Beginner Friendly',
    slides: [
      {
        step: 'Slide 1 / 3 • Effective Rate',
        titleEn: '2-Year Compound Interest Effective Percentage Trick',
        titleTe: '2 సంవత్సరాల చక్రవడ్డీ శాతాన్ని 5 సెకన్లలో కనుగొనే ట్రిక్',
        boardMath: `For 2 Years at Rate R%:
• Simple Interest (SI) %   = 2R %
• Compound Interest (CI) % = (2R + R²/100) %
• CI - SI Difference %     = (R² / 100) %

Examples:
Rate = 5%  → SI = 10%, CI = 10.25%, Diff = 0.25%
Rate = 8%  → SI = 16%, CI = 16.64%, Diff = 0.64%
Rate = 10% → SI = 20%, CI = 21.00%, Diff = 1.00%`,
        narrationEn: 'Look at this table. At 10 percent for 2 years, Simple Interest is 20 percent and Compound Interest is 21 percent. The difference is simply 1 percent of the Principal!',
        narrationTe: 'ఈ పట్టిక చూడండి: 10% వడ్డీ రేటుతో 2 ఏళ్లకు బారువడ్డీ 20% అయితే, చక్రవడ్డీ 21% అవుతుంది. రెండింటి మధ్య భేదం అసలులో కేవలం 1% మాత్రమే!'
      },
      {
        step: 'Slide 2 / 3 • Golden Ratio 2:1 & 3:3:1',
        titleEn: 'The 2 : 1 (2 Years) and 3 : 3 : 1 (3 Years) Multiplier Rule',
        titleTe: '2 ఏళ్లకు (2:1) మరియు 3 ఏళ్లకు (3:3:1) గోల్డెన్ నిష్పత్తి',
        boardMath: `Find CI on ₹10,000 at 10% for 3 years:
Step 1: 10% of 10,000 = 1000
Step 2: 10% of 1000   = 100
Step 3: 10% of 100    = 10

Multiply by (3 : 3 : 1):
CI = (3 × 1000) + (3 × 100) + (1 × 10) = ₹3,310!`,
        narrationEn: 'For 3 years, take R percent three times step-by-step and multiply by 3, 3, and 1. You get ₹3,310 in less than 10 seconds without cubing fractions!',
        narrationTe: '3 సంవత్సరాల చక్రవడ్డీ అడిగినప్పుడు 3 : 3 : 1 నిష్పత్తిని వాడితే ఎటువంటి పెద్ద గుణకారాలు లేకుండా 10 సెకన్లలో జవాబు వస్తుంది.'
      }
    ]
  },
  {
    id: 'vid-reas-syllogism',
    subject: 'reasoning',
    titleEn: 'Syllogism & Venn Diagrams — 100% Accuracy Visual Rules',
    titleTe: 'సిల్లోజిజం & వెన్ చిత్రాలు — తప్పు లేకుండా 100% మార్కులు సాధించే పద్ధతి',
    instructor: 'Anitha Madam (Reasoning Faculty)',
    duration: '16:20',
    level: 'Must-Watch • 3–4 Qs',
    slides: [
      {
        step: 'Slide 1 / 2 • 4 Basic Diagrams',
        titleEn: 'The Only 4 Venn Diagrams You Need in RRB Exams',
        titleTe: 'సిల్లోజిజంలో మీరు నేర్చుకోవాల్సిన 4 ప్రాథమిక వెన్ చిత్రాలు',
        boardMath: `1. ALL A are B (అన్ని A లు B లు)       → [ (A) inside B ]
2. SOME A are B (కొన్ని A లు B లు)      → ( A (∩) B )
3. NO A is B (ఏ A కూడా B కాదు)        → ( A ) ✕————✕ ( B )
4. SOME A are NOT B (కొన్ని A లు B కావు) → ( A• ) ——✕ ( B )`,
        narrationEn: 'Every syllogism question in RRB NTPC is built from these four statements. Always draw the minimum overlapping diagram first.',
        narrationTe: 'ఏ సిల్లోజిజం ప్రశ్న అయినా ఈ 4 చిత్రాల ఆధారంగానే ఉంటుంది. ఎల్లప్పుడూ కనిష్ట సంబంధం గల వెన్ చిత్రాన్ని గీయాలి.'
      },
      {
        step: 'Slide 2 / 2 • Definite vs Possibility',
        titleEn: 'Golden Rule: "Can Never Be" vs "Can Be (Possibility)"',
        titleTe: 'కచ్చితమైన తీర్మానం vs సంభావ్యత (Possibility) నియమం',
        boardMath: `• If two circles have NO direct restriction line (✕) between them:
  - Any DEFINITE conclusion ("Some A are B" / "No A is B") is FALSE!
  - Any POSSIBILITY conclusion ("All A being B is a possibility") is TRUE!`,
        narrationEn: 'When two circles do not touch each other and have no cross restriction between them, we know nothing definite about them. So definite conclusions fail, while possibilities succeed!',
        narrationTe: 'రెండు వృత్తాల మధ్య ఎటువంటి ప్రత్యక్ష సంబంధం చెప్పనప్పుడు, వాటి మధ్య కచ్చితమైన తీర్మానాలు (Definite Conclusions) తప్పు అవుతాయి, కానీ సంభావ్యత (Possibility) నిజమవుతుంది!'
      }
    ]
  },
  {
    id: 'vid-ga-railways',
    subject: 'ga',
    titleEn: 'Indian Railways Complete GK: 18/19 Zones, Production Units & Vande Bharat Facts',
    titleTe: 'భారతీయ రైల్వే పూర్తి జీకే: జోన్లు, ప్రధాన కార్యాలయాలు & ఉత్పత్తి కేంద్రాలు',
    instructor: 'Dr. K. Prasad (GK & Current Affairs)',
    duration: '21:15',
    level: 'Guaranteed Questions',
    slides: [
      {
        step: 'Slide 1 / 2 • Railway Zones Map',
        titleEn: 'Memorizing Railway Zones & Headquarters by Compass Directions',
        titleTe: 'దిశల ఆధారంగా రైల్వే జోన్ల ప్రధాన కార్యాలయాలు గుర్తుంచుకునే కోడ్',
        boardMath: `• Northern Railway (NR)           → New Delhi
• Southern Railway (SR)           → Chennai
• Eastern Railway (ER)            → Kolkata (Fairlie Place)
• Western Railway (WR)            → Mumbai (Churchgate)
• Central Railway (CR)            → Mumbai (CSMT)
• South Central Railway (SCR)     → Secunderabad (Rail Nilayam)
• South Coast Railway (SCoR)      → Visakhapatnam
• East Coast Railway (ECoR)       → Bhubaneswar
• South Western Railway (SWR)     → Hubballi`,
        narrationEn: 'For students from Telangana and Andhra Pradesh, remember South Central Railway HQ is Secunderabad, established in 1966, and South Coast Railway HQ is Visakhapatnam.',
        narrationTe: 'తెలుగు రాష్ట్రాల అభ్యర్థులు ముఖ్యంగా గుర్తుంచుకోవాల్సినవి: దక్షిణ మధ్య రైల్వే (SCR) ప్రధాన కార్యాలయం సికింద్రాబాద్, మరియు దక్షిణ కోస్తా రైల్వే (SCoR) ప్రధాన కార్యాలయం విశాఖపట్నం.'
      },
      {
        step: 'Slide 2 / 2 • Production Units',
        titleEn: 'Indian Railways Coach & Locomotive Manufacturing Units',
        titleTe: 'భారతీయ రైల్వే కోచ్ మరియు ఇంజన్ల తయారీ కేంద్రాలు',
        boardMath: `• ICF (Integral Coach Factory)        → Perambur, Chennai (Tamil Nadu)
• RCF (Rail Coach Factory)            → Kapurthala (Punjab)
• MCF (Modern Coach Factory)          → Raebareli (Uttar Pradesh)
• CLW (Chittaranjan Locomotive Works) → Chittaranjan (West Bengal)
• BLW (Banaras Locomotive Works)      → Varanasi (Uttar Pradesh)
• RWF (Rail Wheel Factory)            → Yelahanka, Bengaluru (Karnataka)`,
        narrationEn: 'ICF Chennai, RCF Kapurthala, and CLW Chittaranjan are asked repeatedly in RRB NTPC shifts. Note them down in your revision sheet!',
        narrationTe: 'ఐసిఎఫ్ చెన్నై, ఆర్‌సిఎఫ్ కపుర్తలా మరియు చిత్తరంజన్ లోకోమోటివ్ వర్క్స్ నుండి ప్రతి పరీక్షలో ప్రశ్నలు వస్తున్నాయి.'
      }
    ]
  },
  {
    id: 'vid-sci-ncert',
    subject: 'science',
    titleEn: 'NCERT Class 9 & 10 Science Marathon: Physics Formulas, Chemical Names & Vitamins',
    titleTe: 'NCERT 9 & 10వ తరగతి జనరల్ సైన్స్ మారథాన్ (భౌతిక, రసాయన, జీవ శాస్త్రాలు)',
    instructor: 'Dr.Swapna Reddy (General Science)',
    duration: '24:00',
    level: '15 Marks Booster',
    slides: [
      {
        step: 'Slide 1 / 2 • Physics & Optics',
        titleEn: 'Mirrors, Lenses, Human Eye Defects & Electric Power Formulas',
        titleTe: 'దర్పణాలు, కటకాలు, కంటి లోపాలు మరియు విద్యుత్ సూత్రాలు',
        boardMath: `• Myopia (Short-sightedness / హ్రస్వదృష్టి)     → Corrected by CONCAVE Lens
• Hypermetropia (Long-sightedness / దీర్ఘదృష్టి) → Corrected by CONVEX Lens
• Presbyopia (చత్వారం)                         → Corrected by BIFOCAL Lens

• Ohm's Law: V = I × R
• Electric Power: P = V × I = I²R = V²/R (SI Unit: Watt)
• Fuse Wire: Made of Alloy of Lead (Pb) + Tin (Sn) → Low Melting Point & High Resistance!`,
        narrationEn: 'Remember: Myopia is a short word, Hypermetropia is a longer word. Myopia uses a Concave lens, and Hypermetropia uses a Convex lens!',
        narrationTe: 'హ్రస్వదృష్టి (దగ్గరి వస్తువులు మాత్రమే కనిపించడం) నివారణకు పుటాకార కటకం (Concave Lens), దీర్ఘదృష్టి నివారణకు కుంభాకార కటకం (Convex Lens) వాడతారు.'
      },
      {
        step: 'Slide 2 / 2 • Chemistry & Biology',
        titleEn: 'Top 10 Chemical Formulas & Vitamin Deficiency Chart',
        titleTe: 'అతి ముఖ్యమైన రసాయన ఫార్ములాలు & విటమిన్ల పట్టిక',
        boardMath: `• Baking Soda     = NaHCO₃ (Sodium Bicarbonate)
• Washing Soda    = Na₂CO₃·10H₂O (Sodium Carbonate)
• Bleaching Powder= CaOCl₂ (Calcium Oxychloride)
• Plaster of Paris= CaSO₄·½H₂O
• Laughing Gas    = N₂O (Nitrous Oxide)

• Vitamin A → Night Blindness | Vitamin B1 → Beriberi
• Vitamin C → Scurvy          | Vitamin D  → Rickets`,
        narrationEn: 'Revise this single slide before entering your exam center — at least 3 questions in General Science come directly from these compounds and vitamins.',
        narrationTe: 'పరీక్షకు వెళ్లే ముందు ఈ ఒక్క స్లైడ్ చదువుకున్నా జనరల్ సైన్స్‌లో 2 నుండి 3 మార్కులు గ్యారెంటీగా వస్తాయి!'
      }
    ]
  }
];

/* ============================================================================
   INTELLIGENT BILINGUAL RRB AI DOUBT SOLVER (ENGLISH + తెలుగు)
   Solves Dynamic Math/Reasoning Problems + RRB Exam/Syllabus/GK Doubts
   ============================================================================ */

window.RRBAITutor = {
  solveDoubt: function(rawQuery) {
    const q = (rawQuery || '').trim();
    const lower = q.toLowerCase();
    const nums = (q.match(/\d+(\.\d+)?/g) || []).map(Number);

    // 1. Check if it's a Train / Speed / Distance / Bridge calculation problem
    if (
      (lower.includes('train') || lower.includes('km/h') || lower.includes('kmph') || lower.includes('m/s') || lower.includes('bridge') || lower.includes('platform') || lower.includes('రైలు') || lower.includes('వేగం'))
    ) {
      if (nums.length >= 2) {
        // Attempt smart extraction for train problem
        let explanationEn = `### 🚆 Step-by-Step Train / Speed Solution\n`;
        let explanationTe = `### 🚆 రైలు - వేగం - దూరం పూర్తి వివరణ (తెలుగులో)\n`;

        // Case: Train length, platform length, speed given (3 numbers)
        if (nums.length >= 3 && (lower.includes('platform') || lower.includes('bridge') || lower.includes('tunnel') || lower.includes('వంతెన') || lower.includes('ప్లాట్‌ఫారమ్'))) {
          const sorted = [...nums];
          // Identify speed (usually 36, 54, 72, 90, etc. or followed by km)
          let speedKmh = nums.find(n => n <= 150 && n % 9 === 0) || nums[1];
          const others = nums.filter((n, idx) => idx !== nums.indexOf(speedKmh));
          const d1 = others[0] || 180;
          const d2 = others[1] || 120;
          const speedMs = +(speedKmh * (5 / 18)).toFixed(2);
          const totalDist = d1 + d2;
          const timeSec = +(totalDist / speedMs).toFixed(2);

          explanationEn += `1. **Total Distance (D)** = Length 1 + Length 2 = ${d1} + ${d2} = **${totalDist} meters**.\n` +
            `2. **Convert Speed to m/s**: ${speedKmh} km/hr × (5 / 18) = **${speedMs} m/s**.\n` +
            `3. **Time Taken (T = D ÷ S)** = ${totalDist} ÷ ${speedMs} = **${timeSec} seconds** (or if ${d2} was seconds, Bridge Length = ${speedMs} × ${d2} - ${d1} = **${+(speedMs * d2 - d1).toFixed(1)} m**).`;

          explanationTe += `1. **మొత్తం దూరం (D)** = రైలు పొడవు + ప్లాట్‌ఫారమ్/వంతెన పొడవు = ${d1} + ${d2} = **${totalDist} మీటర్లు**.\n` +
            `2. **వేగాన్ని m/s లోకి మార్చగా**: ${speedKmh} × (5 / 18) = **${speedMs} m/s**.\n` +
            `3. **పట్టే సమయం (T = D ÷ S)** = ${totalDist} ÷ ${speedMs} = **${timeSec} సెకన్లు**.\n` +
            `⚡ **షార్ట్‌కట్**: km/hr ని m/s లోకి మార్చడానికి ఎల్లప్పుడూ **5/18** తో గుణించండి!`;

          return { en: explanationEn, te: explanationTe, tag: 'Mathematics • Trains & Speed' };
        }

        // Case: 2 numbers (Length and Speed or Speed and Time)
        const n1 = nums[0], n2 = nums[1];
        const speedMs = +(n2 * 5 / 18).toFixed(2);
        const timeIfPole = +(n1 / (speedMs || 1)).toFixed(2);
        explanationEn += `• **Formula**: Distance = Speed × Time\n` +
          `• **Unit Conversion**: 1 km/hr = (5/18) m/s and 1 m/s = (18/5) km/hr.\n` +
          `• Using your values (${n1} and ${n2}): If Length = ${n1} m and Speed = ${n2} km/hr (= ${speedMs} m/s), Time to cross a pole = ${n1} ÷ ${speedMs} = **${timeIfPole} seconds**.`;
        explanationTe += `• **సూత్రం**: దూరం = వేగం × కాలం (D = S × T).\n` +
          `• రైలు పొడవు ${n1} మీ. మరియు వేగం ${n2} km/hr (= ${speedMs} m/s) అయితే, స్తంభాన్ని దాటడానికి పట్టే సమయం = ${n1} ÷ ${speedMs} = **${timeIfPole} సెకన్లు**.`;
        return { en: explanationEn, te: explanationTe, tag: 'Mathematics • Speed & Distance' };
      }
    }

    // 2. Simple & Compound Interest Solver
    if (lower.includes('interest') || lower.includes('ci') || lower.includes('si') || lower.includes('principal') || lower.includes('వడ్డీ') || lower.includes('చక్రవడ్డీ') || lower.includes('బారువడ్డీ')) {
      if (nums.length >= 3) {
        const P = Math.max(...nums);
        const rest = nums.filter(x => x !== P);
        const R = rest[0] || 10;
        const T = rest[1] || 2;
        const si = +((P * R * T) / 100).toFixed(2);
        const amountCI = +(P * Math.pow(1 + R / 100, T)).toFixed(2);
        const ci = +(amountCI - P).toFixed(2);
        const diff = +(ci - si).toFixed(2);

        return {
          tag: 'Mathematics • Simple & Compound Interest',
          en: `### 💰 Simple & Compound Interest Calculation\nFor **Principal (P) = ₹${P}**, **Rate (R) = ${R}%**, **Time (T) = ${T} years**:\n` +
              `1. **Simple Interest (SI)** = (P × T × R) ÷ 100 = (${P} × ${T} × ${R}) ÷ 100 = **₹${si}**\n` +
              `2. **Compound Interest (CI)** = P × (1 + R/100)ᵀ - P = **₹${ci}** (Total Amount = ₹${amountCI})\n` +
              `3. **Difference (CI - SI)** = **₹${diff}**\n` +
              `⚡ **RRB Shortcut (for 2 yrs)**: Difference = P × (R / 100)².`,
          te: `### 💰 బారువడ్డీ & చక్రవడ్డీ లెక్క (తెలుగు వివరణ)\n**అసలు (P) = ₹${P}**, **వడ్డీ రేటు (R) = ${R}%**, **కాలం (T) = ${T} సంవత్సరాలు** అయినప్పుడు:\n` +
              `1. **బారువడ్డీ (SI)** = (P × T × R) ÷ 100 = **₹${si}**\n` +
              `2. **చక్రవడ్డీ (CI)** = **₹${ci}** (మొత్తం = ₹${amountCI})\n` +
              `3. **చక్రవడ్డీ - బారువడ్డీ భేదం (CI - SI)** = **₹${diff}**\n` +
              `⚡ **షార్ట్‌కట్**: 2 సంవత్సరాలకు భేదం D = P × (R / 100)².`
        };
      }
    }

    // 3. Time and Work Solver
    if (lower.includes('work') || lower.includes('days') || lower.includes('రోజుల్లో') || lower.includes('పని')) {
      if (nums.length >= 2) {
        const a = nums[0], b = nums[1];
        const gcd = (x, y) => (!y ? x : gcd(y, x % y));
        const lcm = (a * b) / gcd(a, b);
        const effA = lcm / a;
        const effB = lcm / b;
        const together = +(lcm / (effA + effB)).toFixed(2);
        return {
          tag: 'Mathematics • Time & Work',
          en: `### 🛠️ Time & Work (LCM Efficiency Method)\nGiven **A = ${a} days** and **B = ${b} days**:\n` +
              `1. **Total Work** = LCM(${a}, ${b}) = **${lcm} units**.\n` +
              `2. **Daily Efficiency**: A = ${lcm} ÷ ${a} = **${effA} units/day**, B = ${lcm} ÷ ${b} = **${effB} units/day**.\n` +
              `3. **Together (A + B)** = Total Work ÷ Total Efficiency = ${lcm} ÷ (${effA} + ${effB}) = **${together} days**.`,
          te: `### 🛠️ కాలం - పని (క.సా.గు పద్ధతి)\n**A = ${a} రోజులు**, **B = ${b} రోజులు** ఇచ్చినప్పుడు:\n` +
              `1. **మొత్తం పని (Total Work)** = LCM(${a}, ${b}) = **${lcm} యూనిట్లు**.\n` +
              `2. **రోజువారీ సామర్థ్యం**: A = ${effA} యూనిట్లు/రోజు, B = ${effB} యూనిట్లు/రోజు.\n` +
              `3. **ఇద్దరూ కలిసి పని పూర్తి చేయు సమయం** = ${lcm} ÷ (${effA} + ${effB}) = **${together} రోజులు**.`
        };
      }
    }

    // 4. RRB NTPC Undergraduate Eligibility, Syllabus, Salary, Posts, Typing Test
    if (
      lower.includes('ntpc') || lower.includes('undergraduate') || lower.includes('10+2') ||
      lower.includes('12th') || lower.includes('inter') || lower.includes('salary') ||
      lower.includes('post') || lower.includes('clerk') || lower.includes('typing') ||
      lower.includes('syllabus') || lower.includes('pattern') || lower.includes('సిలబస్') ||
      lower.includes('జీతం') || lower.includes('అర్హత')
    ) {
      return {
        tag: 'RRB NTPC Undergraduate (10+2) Guide',
        en: `### 🎯 Complete Guide to RRB NTPC Undergraduate (10+2 / Inter Level)\n` +
            `**1. Eligible Posts & Starting Monthly Salary:**\n` +
            `• **Commercial Cum Ticket Clerk (Level-3)**: Basic ₹21,700 (Gross **₹35,000–₹40,000/month**) — *No Typing Test!*\n` +
            `• **Trains Clerk (Level-2)**: Basic ₹19,900 (Gross **₹32,000–₹36,000/month**) — *No Typing Test!*\n` +
            `• **Accounts Clerk Cum Typist & Junior Clerk Cum Typist (Level-2)**: Basic ₹19,900 (Gross **₹31,000–₹35,000/month**) — *Qualifying Typing Skill Test (30 WPM English / 25 WPM Hindi).* \n\n` +
            `**2. Official Exam Pattern (Negative Marking: -1/3):**\n` +
            `• **CBT-1 (90 Mins, 100 Qs, 100 Marks)**: Mathematics (30), General Intelligence & Reasoning (30), General Awareness & Science (40).\n` +
            `• **CBT-2 (90 Mins, 120 Qs, 120 Marks)**: Mathematics (35), Reasoning (35), General Awareness & Science (50).`,
        te: `### 🎯 ఆర్‌ఆర్‌బి ఎన్‌టిపిసి అండర్ గ్రాడ్యుయేట్ (10+2 / ఇంటర్ స్థాయి) పూర్తి వివరాలు\n` +
            `**1. పోస్టులు & ప్రారంభ నెలవారీ జీతం:**\n` +
            `• **కమర్షియల్ కమ్ టికెట్ క్లర్క్ (Level-3)**: బేసిక్ ₹21,700 (మొత్తం జీతం **₹35,000–₹40,000**) — *టైపింగ్ టెస్ట్ లేదు!*\n` +
            `• **ట్రైన్స్ క్లర్క్ (Level-2)**: బేసిక్ ₹19,900 (మొత్తం జీతం **₹32,000–₹36,000**) — *టైపింగ్ టెస్ట్ లేదు!*\n` +
            `• **అకౌంట్స్ క్లర్క్ & జూనియర్ క్లర్క్ కమ్ టైపిస్ట్ (Level-2)**: బేసిక్ ₹19,900 — *ఇంగ్లీష్‌లో నిమిషానికి 30 పదాల టైపింగ్ అర్హత పరీక్ష ఉంటుంది.*\n\n` +
            `**2. పరీక్షా విధానం (-1/3 నెగటివ్ మార్కింగ్):**\n` +
            `• **CBT-1 (100 మార్కులు, 90 నిమిషాలు)**: గణితం (30), రీజనింగ్ (30), జనరల్ అవేర్‌నెస్ & సైన్స్ (40).\n` +
            `• **CBT-2 (120 మార్కులు, 90 నిమిషాలు)**: గణితం (35), రీజనింగ్ (35), జనరల్ అవేర్‌నెస్ & సైన్స్ (50).`
      };
    }

    // 5. Indian Railways Zones & GK
    if (lower.includes('zone') || lower.includes('headquarter') || lower.includes('secunderabad') || lower.includes('scr') || lower.includes('జోన్') || lower.includes('సికింద్రాబాద్')) {
      return {
        tag: 'Indian Railways GK • Zones & HQs',
        en: `### 🚆 Key Indian Railway Zones & Headquarters\n` +
            `• **South Central Railway (SCR)**: Secunderabad (Formed 2 Oct 1966)\n` +
            `• **South Coast Railway (SCoR - 18th Zone)**: Visakhapatnam\n` +
            `• **Southern Railway (SR)**: Chennai\n` +
            `• **South Western Railway (SWR)**: Hubballi (Longest platform in the world: 1,507 m!)\n` +
            `• **Central Railway (CR) & Western Railway (WR)**: Mumbai (CSMT & Churchgate)\n` +
            `• **Northern Railway (NR)**: New Delhi\n` +
            `• **Eastern & South Eastern Railway**: Kolkata`,
        te: `### 🚆 భారతీయ రైల్వే ముఖ్య జోన్లు & ప్రధాన కార్యాలయాలు\n` +
            `• **దక్షిణ మధ్య రైల్వే (SCR)**: సికింద్రాబాద్ (రైల్ నిలయం - 1966)\n` +
            `• **దక్షిణ కోస్తా రైల్వే (SCoR)**: విశాఖపట్నం\n` +
            `• **దక్షిణ రైల్వే (SR)**: చెన్నై\n` +
            `• **నైరుతి రైల్వే (SWR)**: హుబ్బళ్ళి (ప్రపంచంలోనే అతి పొడవైన ప్లాట్‌ఫారమ్ 1,507 మీ.)\n` +
            `• **మధ్య & పశ్చిమ రైల్వే**: ముంబై\n` +
            `• **ఉత్తర రైల్వే**: న్యూఢిల్లీ | **తూర్పు రైల్వే**: కోల్‌కతా`
      };
    }

    // 6. General Science (Vitamins, Mirrors, Acids, Physics)
    if (lower.includes('vitamin') || lower.includes('mirror') || lower.includes('lens') || lower.includes('acid') || lower.includes('science') || lower.includes('విటమిన్') || lower.includes('దర్పణం')) {
      return {
        tag: 'General Science • High-Yield Revision',
        en: `### 🔬 RRB General Science Golden Revision Notes\n` +
            `1. **Mirrors & Lenses**:\n` +
            `   • **Convex Mirror**: Vehicle Rear-View (Side) Mirror (Erect & Diminished image).\n` +
            `   • **Concave Mirror**: Dentist mirror, Shaving mirror, Headlights, Solar furnace.\n` +
            `   • **Myopia (Short-sightedness)** → Corrected by **Concave Lens**; **Hypermetropia** → **Convex Lens**.\n` +
            `2. **Vitamins**:\n` +
            `   • Water-Soluble = **B & C** | Fat-Soluble = **A, D, E, K**.\n` +
            `   • Vit A = Night Blindness | Vit B1 = Beriberi | Vit C = Scurvy | Vit D = Rickets | Vit K = Blood clotting.`,
        te: `### 🔬 జనరల్ సైన్స్ గోల్డెన్ రివిజన్ నోట్స్\n` +
            `1. **దర్పణాలు & కటకాలు**:\n` +
            `   • **కుంభాకార దర్పణం (Convex Mirror)**: వాహనాల సైడ్ మిర్రర్ (Rear-view mirror).\n` +
            `   • **పుటాకార దర్పణం (Concave Mirror)**: దంత వైద్యులు, షేవింగ్ మిర్రర్, వాహనాల హెడ్‌లైట్లు.\n` +
            `   • **హ్రస్వదృష్టి (Myopia)** → పుటాకార కటకం; **దీర్ఘదృష్టి (Hypermetropia)** → కుంభాకార కటకం.\n` +
            `2. **విటమిన్లు**:\n` +
            `   • నీటిలో కరిగేవి: **B, C** | కొవ్వులో కరిగేవి: **A, D, E, K**.\n` +
            `   • విటమిన్ A: రేచీకటి | B1: బెరిబెరి | C: స్కర్వీ | D: రికెట్స్ | K: రక్తం గడ్డకట్టకపోవడం.`
      };
    }

    // Default Comprehensive Bilingual Response for any custom RRB query
    return {
      tag: 'RRB AI Guru • Bilingual Explanation',
      en: `### 💡 RRB AI Doubt Analysis for: *"${q}"*\n` +
          `Here is the structured approach for your RRB NTPC / Group-D exam preparation:\n` +
          `1. **Core Concept**: In RRB CBT exams, identify whether this question belongs to **Arithmetic Shortcut**, **Logical Elimination**, or **Static/Science Fact**.\n` +
          `2. **Key Formula / Rule to Apply**:\n` +
          `   • For **Math**: Always convert units first (e.g., km/hr × 5/18 = m/s) and use Ratio/LCM instead of x.\n` +
          `   • For **Reasoning**: Check Alphabet Positions (A=1 ... Z=26, Opposite sum = 27) or draw the minimum Venn diagram.\n` +
          `   • For **Exam Rule**: Remember +1 mark for correct answer and -1/3 (-0.33) negative marking.\n` +
          `*Tip: You can also type specific numbers (e.g., "Train 240m crosses 160m bridge at 72 km/h" or "CI and SI on 20000 at 10% for 2 years") and I will calculate the exact step-by-step math answer for you!*`,
      te: `### 💡 మీ ప్రశ్నకు ఏఐ వివరణ: *"${q}"*\n` +
          `ఆర్‌ఆర్‌బి ఎన్‌టిపిసి (RRB NTPC) మరియు గ్రూప్-డి పరీక్షల కోసం ముఖ్య సూచనలు:\n` +
          `1. **గణితం (Math) అయితే**: x అనుకోకుండా నిష్పత్తి (Ratio), శాతం (Percentage) లేదా క.సా.గు (LCM) పద్ధతిని ఉపయోగించండి.\n` +
          `2. **రీజనింగ్ అయితే**: అక్షరాల స్థాన విలువలు (A=1 ... Z=26, వ్యతిరేక అక్షరాల మొత్తం = 27) లేదా వెన్ చిత్రం గీసి సాధించండి.\n` +
          `3. **లెక్కలను నేరుగా అడగండి**: ఉదాహరణకు *"180m రైలు 120m వంతెనను 54 km/h వేగంతో ఎంత సమయంలో దాటుతుంది?"* లేదా *"15000 అసలుపై 10% చొప్పున 2 ఏళ్లకు చక్రవడ్డీ ఎంత?"* అని అడిగితే పూర్తి స్టెప్-బై-స్టెప్ లెక్కను తెలుగు మరియు ఇంగ్లీష్‌లో చేసి చూపిస్తాను!`
    };
  }
};
