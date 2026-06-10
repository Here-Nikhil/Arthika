// ─────────────────────────────────────────────────────────────
// quizzes.js  — Arthika
// Structure per lesson: { beginner: [...], normal: [...], advanced: [...] }
// Each question: { q, q_hi, opts, opts_hi, ans (0-based index), exp, exp_hi }
// getQuiz(lessonId, mode, lang) → localised question array
// ─────────────────────────────────────────────────────────────

const QUIZZES = {

  // ═══════════════════════════════════════════════════════════
  //  MODULE 01 · Understanding Income
  // ═══════════════════════════════════════════════════════════

  // ── inc1 · What Is Income? ────────────────────────────────
  inc1: {
    beginner: [
      {
        q: "Income is best described as…",
        q_hi: "आय को सबसे अच्छी तरह कहा जा सकता है…",
        opts: ["Money you spend on shopping", "Money you receive from work or other sources", "Money you borrow from a bank", "Money kept under a mattress"],
        opts_hi: ["खरीदारी पर खर्च किया पैसा", "काम या अन्य स्रोतों से मिला पैसा", "बैंक से उधार लिया पैसा", "गद्दे के नीचे रखा पैसा"],
        ans: 1,
        exp: "Income is any money you receive — salary, business profit, rent, or gifts. It is the starting point of all financial planning.",
        exp_hi: "आय वह पैसा है जो आपको मिलता है — वेतन, व्यापार लाभ, किराया या उपहार। यह सभी वित्तीय योजना का शुरुआती बिंदु है।",
      },
      {
        q: "Which of these is NOT a source of income?",
        q_hi: "इनमें से कौन-सा आय का स्रोत नहीं है?",
        opts: ["Monthly salary", "Rent from a property", "Grocery shopping bill", "Dividend from shares"],
        opts_hi: ["मासिक वेतन", "संपत्ति से किराया", "किराने की खरीदारी का बिल", "शेयरों पर लाभांश"],
        ans: 2,
        exp: "A grocery bill is an expense, not income. Income flows IN; expenses flow OUT.",
        exp_hi: "किराने का बिल एक खर्च है, आय नहीं। आय अंदर आती है; खर्च बाहर जाता है।",
      },
    ],
    normal: [
      {
        q: "Passive income is best defined as…",
        q_hi: "निष्क्रिय आय की सबसे अच्छी परिभाषा है…",
        opts: ["Income from a government job", "Earnings that require continuous active work", "Money earned with little ongoing effort after initial setup", "Income received in cash only"],
        opts_hi: ["सरकारी नौकरी से आय", "लगातार सक्रिय काम से कमाई", "शुरुआती सेटअप के बाद कम मेहनत से कमाई", "केवल नकद में मिलने वाली आय"],
        ans: 2,
        exp: "Passive income (rent, dividends, royalties) requires little day-to-day effort once the asset is built or bought.",
        exp_hi: "निष्क्रिय आय (किराया, लाभांश, रॉयल्टी) के लिए संपत्ति बनने के बाद रोज़ाना कम मेहनत लगती है।",
      },
    ],
    advanced: [
      {
        q: "Which income type is most resilient to economic downturns?",
        q_hi: "आर्थिक मंदी में कौन-सी आय सबसे मज़बूत रहती है?",
        opts: ["Commission-based sales income", "Multiple diversified income streams", "Single salaried income", "Bonus-heavy compensation"],
        opts_hi: ["कमीशन आधारित बिक्री आय", "कई विविध आय स्रोत", "एकल वेतन आय", "बोनस-भारी मुआवज़ा"],
        ans: 1,
        exp: "Diversified income — salary + rental + dividends + freelance — ensures that if one stream dries up, others sustain you. Single-source income is high-risk.",
        exp_hi: "विविध आय — वेतन + किराया + लाभांश + फ्रीलांस — यह सुनिश्चित करती है कि एक स्रोत बंद होने पर दूसरे काम आएं।",
      },
    ],
  },

  // ── inc2 · Salary vs Business Income ─────────────────────
  inc2: {
    beginner: [
      {
        q: "A salary is…",
        q_hi: "वेतन है…",
        opts: ["A one-time gift from your employer", "A fixed regular payment for your work", "Money you lend to the company", "A type of business profit"],
        opts_hi: ["नियोक्ता से एकमुश्त उपहार", "काम के लिए नियमित तय भुगतान", "कंपनी को दिया उधार", "एक प्रकार का व्यापार लाभ"],
        ans: 1,
        exp: "A salary is a fixed, regular payment — usually monthly — that an employer pays you for your work.",
        exp_hi: "वेतन एक निश्चित, नियमित भुगतान है — आमतौर पर मासिक — जो नियोक्ता आपके काम के बदले देता है।",
      },
    ],
    normal: [
      {
        q: "Compared to salaried income, business income is…",
        q_hi: "वेतन की तुलना में व्यापारिक आय है…",
        opts: ["Always higher", "Variable and depends on profits", "Guaranteed every month", "Always taxed at a lower rate"],
        opts_hi: ["हमेशा अधिक", "परिवर्तनशील और लाभ पर निर्भर", "हर महीने तय", "हमेशा कम दर पर कर"],
        ans: 1,
        exp: "Business income varies with revenue and costs. A good month can mean high income; a slow month may mean very little.",
        exp_hi: "व्यापारिक आय राजस्व और लागत के साथ बदलती है। अच्छे महीने में अधिक और धीमे महीने में बहुत कम।",
      },
    ],
    advanced: [
      {
        q: "An owner's draw in a business is…",
        q_hi: "व्यापार में ओनर्स ड्रॉ होता है…",
        opts: ["Tax deductible like an employee salary", "Money the owner takes from business profits for personal use", "A government subsidy for small businesses", "The same as a company dividend"],
        opts_hi: ["कर्मचारी वेतन जैसा कर कटौती योग्य", "मालिक द्वारा व्यक्तिगत उपयोग के लिए लाभ से ली गई राशि", "छोटे व्यापार के लिए सरकारी सब्सिडी", "कंपनी लाभांश के समान"],
        ans: 1,
        exp: "Owner's draw is money taken from the business's profits for personal expenses. Unlike employee salary, it is not a business expense and is taxed as the owner's personal income.",
        exp_hi: "ओनर्स ड्रॉ व्यक्तिगत खर्चों के लिए व्यापार लाभ से ली गई राशि है। कर्मचारी वेतन के विपरीत, यह व्यावसायिक खर्च नहीं है।",
      },
    ],
  },

  // ── inc3 · Fixed vs Variable Income ──────────────────────
  inc3: {
    beginner: [
      {
        q: "Fixed income means your earnings…",
        q_hi: "निश्चित आय का मतलब है आपकी कमाई…",
        opts: ["Change every month", "Stay the same each month", "Depend on how many hours you work", "Come only from investments"],
        opts_hi: ["हर महीने बदलती है", "हर महीने समान रहती है", "काम के घंटों पर निर्भर", "केवल निवेश से आती है"],
        ans: 1,
        exp: "Fixed income is predictable — the same amount arrives each month, making budgeting easy.",
        exp_hi: "निश्चित आय अनुमानित होती है — हर महीने एक ही राशि आती है, जिससे बजट बनाना आसान होता है।",
      },
    ],
    normal: [
      {
        q: "The biggest financial challenge with variable income is…",
        q_hi: "परिवर्तनशील आय की सबसे बड़ी वित्तीय चुनौती है…",
        opts: ["It is always too low", "Planning expenses when monthly earnings fluctuate", "Paying lower taxes than salaried workers", "Receiving income in multiple currencies"],
        opts_hi: ["यह हमेशा बहुत कम होती है", "मासिक कमाई बदलने पर खर्च योजना बनाना", "वेतनभोगियों से कम कर देना", "कई मुद्राओं में आय"],
        ans: 1,
        exp: "Variable income means some months are lean. Without careful planning, a low month can lead to missed bills or debt.",
        exp_hi: "परिवर्तनशील आय में कुछ महीने कम हो सकते हैं। सावधानी न बरतने पर बिल चूक या कर्ज़ हो सकता है।",
      },
    ],
    advanced: [
      {
        q: "Best practice for managing variable income is…",
        q_hi: "परिवर्तनशील आय प्रबंधन की सर्वोत्तम प्रथा है…",
        opts: ["Spend freely in high-income months", "Budget based on your lowest expected monthly income", "Avoid all savings during lean months", "Keep all earnings in a current account"],
        opts_hi: ["अधिक आय वाले महीनों में खुलकर खर्च करें", "सबसे कम अपेक्षित मासिक आय पर बजट बनाएं", "कम महीनों में बचत बिल्कुल न करें", "सभी कमाई चालू खाते में रखें"],
        ans: 1,
        exp: "Budget on your worst-case monthly income. Surplus in good months goes to a buffer account first, then investments.",
        exp_hi: "सबसे कम मासिक आय पर बजट बनाएं। अच्छे महीनों में अधिशेष पहले बफर खाते में, फिर निवेश में।",
      },
    ],
  },

  // ── inc4 · Gross vs Net Income ────────────────────────────
  inc4: {
    beginner: [
      {
        q: "Net income (take-home pay) is…",
        q_hi: "शुद्ध आय (टेक-होम वेतन) है…",
        opts: ["Your salary before any deductions", "Your salary after taxes and deductions are removed", "The total company revenue", "Your bonus payment only"],
        opts_hi: ["किसी भी कटौती से पहले का वेतन", "कर और कटौती हटाने के बाद का वेतन", "कंपनी का कुल राजस्व", "केवल बोनस भुगतान"],
        ans: 1,
        exp: "Net income is what actually reaches your bank — gross pay minus TDS, PF, and other deductions.",
        exp_hi: "शुद्ध आय वह है जो वास्तव में आपके बैंक में आती है — सकल वेतन घटाकर TDS, PF और अन्य कटौतियां।",
      },
    ],
    normal: [
      {
        q: "Which deduction is mandatory for most salaried employees in India?",
        q_hi: "भारत में अधिकांश वेतनभोगी कर्मचारियों के लिए कौन-सी कटौती अनिवार्य है?",
        opts: ["Life insurance premium", "Employees' Provident Fund (EPF) contribution", "Home loan EMI", "Credit card payment"],
        opts_hi: ["जीवन बीमा प्रीमियम", "कर्मचारी भविष्य निधि (EPF) अंशदान", "होम लोन EMI", "क्रेडिट कार्ड भुगतान"],
        ans: 1,
        exp: "EPF is deducted at 12% of basic salary for most salaried employees. The employer matches this contribution.",
        exp_hi: "अधिकांश वेतनभोगियों के लिए मूल वेतन का 12% EPF कटता है। नियोक्ता इस योगदान की बराबरी करता है।",
      },
    ],
    advanced: [
      {
        q: "Your CTC is ₹12 lakh. After PF, gratuity provision, and TDS, take-home is ₹8.5 lakh. Your effective take-home rate is…",
        q_hi: "CTC ₹12 लाख है। PF, ग्रेच्युटी और TDS के बाद टेक-होम ₹8.5 लाख। आपकी प्रभावी टेक-होम दर है…",
        opts: ["50%", "About 71%", "100%", "About 85%"],
        opts_hi: ["50%", "लगभग 71%", "100%", "लगभग 85%"],
        ans: 1,
        exp: "8.5 ÷ 12 ≈ 71%. Always plan budgets on net income, not CTC — the gap is often 25–35%.",
        exp_hi: "8.5 ÷ 12 ≈ 71%। हमेशा CTC नहीं, शुद्ध आय पर बजट बनाएं — अंतर अक्सर 25-35% होता है।",
      },
    ],
  },

  // ── inc5 · Multiple Income Streams ───────────────────────
  inc5: {
    beginner: [
      {
        q: "Having multiple income streams means…",
        q_hi: "कई आय स्रोत होने का मतलब है…",
        opts: ["Earning money from only one job", "Earning money from several different sources", "Taking multiple loans at once", "Having multiple bank accounts"],
        opts_hi: ["केवल एक नौकरी से पैसे", "कई अलग-अलग स्रोतों से पैसे", "एक साथ कई कर्ज़", "कई बैंक खाते"],
        ans: 1,
        exp: "Multiple income streams — job + freelance + rent + dividends — spread risk so losing one source doesn't devastate you.",
        exp_hi: "कई आय स्रोत — नौकरी + फ्रीलांस + किराया + लाभांश — जोखिम फैलाते हैं।",
      },
    ],
    normal: [
      {
        q: "Passive income from a rental property requires…",
        q_hi: "किराये की संपत्ति से निष्क्रिय आय के लिए आवश्यक है…",
        opts: ["Zero upfront investment", "Initial capital to buy/build the property, then minimal ongoing effort", "Working there daily", "A government license"],
        opts_hi: ["कोई प्रारंभिक निवेश नहीं", "संपत्ति खरीदने/बनाने के लिए प्रारंभिक पूंजी, फिर न्यूनतम प्रयास", "वहाँ रोज़ काम करना", "सरकारी लाइसेंस"],
        ans: 1,
        exp: "Passive income assets need upfront money or effort to build. Once running, they need minimal daily involvement.",
        exp_hi: "निष्क्रिय आय संपत्तियों को शुरू में पैसे या प्रयास की ज़रूरत होती है। एक बार चलने के बाद बहुत कम काम।",
      },
    ],
    advanced: [
      {
        q: "Which side income idea in India carries the least startup capital risk?",
        q_hi: "भारत में किस साइड इनकम में स्टार्टअप पूंजी जोखिम सबसे कम है?",
        opts: ["Opening a restaurant", "Freelance skills (writing, coding, design)", "Buying rental property", "Stock day trading"],
        opts_hi: ["रेस्तरां खोलना", "फ्रीलांस कौशल (लेखन, कोडिंग, डिज़ाइन)", "किराये की संपत्ति खरीदना", "शेयर डे ट्रेडिंग"],
        ans: 1,
        exp: "Freelancing leverages skills you already have — zero inventory, zero premises. Lowest capital risk of the four.",
        exp_hi: "फ्रीलांसिंग में आपके मौजूदा कौशल का उपयोग — कोई इन्वेंट्री नहीं, कोई परिसर नहीं। सबसे कम पूंजी जोखिम।",
      },
    ],
  },

  // ── inc6 · Income Growth Mindset ─────────────────────────
  inc6: {
    beginner: [
      {
        q: "The best way to grow your income over time is…",
        q_hi: "समय के साथ आय बढ़ाने का सबसे अच्छा तरीका है…",
        opts: ["Ask for a raise every week", "Continuously improve skills and deliver results", "Change jobs every month", "Avoid all responsibilities at work"],
        opts_hi: ["हर हफ्ते वेतन वृद्धि मांगना", "लगातार कौशल सुधारना और परिणाम देना", "हर महीने नौकरी बदलना", "काम की सभी ज़िम्मेदारियों से बचना"],
        ans: 1,
        exp: "Skill development + delivering results builds your market value, making salary growth sustainable and justified.",
        exp_hi: "कौशल विकास + परिणाम देना आपकी बाज़ार कीमत बढ़ाता है, वेतन वृद्धि टिकाऊ बनाता है।",
      },
    ],
    normal: [
      {
        q: "When negotiating salary, you should…",
        q_hi: "वेतन वार्ता करते समय आपको चाहिए…",
        opts: ["Accept the first offer always", "Research market rates and anchor with a specific number", "Never discuss money until asked", "Only mention personal financial problems"],
        opts_hi: ["हमेशा पहला प्रस्ताव स्वीकार करें", "बाज़ार दरें जानें और एक विशिष्ट संख्या से शुरू करें", "पूछे जाने तक पैसों की बात न करें", "केवल व्यक्तिगत वित्तीय समस्याओं का उल्लेख"],
        ans: 1,
        exp: "Research median salaries for your role (Glassdoor, LinkedIn, Naukri). Anchor higher than your target — negotiations move down, not up.",
        exp_hi: "अपनी भूमिका की मध्यम वेतन जानकारी लें। अपने लक्ष्य से ऊंचा बोलें — वार्ता नीचे आती है।",
      },
    ],
    advanced: [
      {
        q: "The highest-ROI investment for income growth is typically…",
        q_hi: "आय वृद्धि के लिए सबसे अधिक ROI वाला निवेश आमतौर पर है…",
        opts: ["Buying gold jewellery", "Investing in high-demand skills and certifications", "Purchasing lottery tickets", "Keeping cash under a mattress"],
        opts_hi: ["सोने के गहने खरीदना", "उच्च-मांग वाले कौशल और प्रमाणपत्रों में निवेश", "लॉटरी टिकट खरीदना", "नकद गद्दे के नीचे रखना"],
        ans: 1,
        exp: "A ₹20,000 coding course that leads to a ₹5 lakh salary jump delivers 25x ROI in year one. Human capital often beats financial capital early in a career.",
        exp_hi: "₹20,000 का कोडिंग कोर्स जो ₹5 लाख वेतन वृद्धि दे, पहले साल 25x ROI देता है।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 02 · Budgeting Mastery
  // ═══════════════════════════════════════════════════════════

  // ── bud1 · Why Budget? ────────────────────────────────────
  bud1: {
    beginner: [
      {
        q: "The main purpose of a budget is to…",
        q_hi: "बजट का मुख्य उद्देश्य है…",
        opts: ["Restrict all spending", "Plan and control how you use your money", "Show off your wealth", "Only track income"],
        opts_hi: ["सभी खर्च रोकना", "पैसों के उपयोग की योजना और नियंत्रण करना", "अपनी संपत्ति दिखाना", "केवल आय ट्रैक करना"],
        ans: 1,
        exp: "A budget gives you control. It tells money where to go instead of wondering where it went.",
        exp_hi: "बजट आपको नियंत्रण देता है। यह पैसों को बताती है कहाँ जाना है।",
      },
    ],
    normal: [
      {
        q: "A common money mistake when there is no budget is…",
        q_hi: "बजट न होने पर एक सामान्य पैसे की गलती है…",
        opts: ["Saving too much", "Overspending on non-essentials without realising it", "Investing in too many assets", "Earning more than needed"],
        opts_hi: ["बहुत ज़्यादा बचत करना", "बिना जाने ग़ैर-ज़रूरी चीज़ों पर अधिक खर्च", "बहुत सारी संपत्तियों में निवेश", "ज़रूरत से ज़्यादा कमाना"],
        ans: 1,
        exp: "Without a budget, small purchases add up invisibly. By month-end, there's nothing left to save.",
        exp_hi: "बजट के बिना, छोटी खरीदारियाँ अदृश्य रूप से जुड़ती हैं। महीने के अंत तक बचत नहीं बचती।",
      },
    ],
    advanced: [
      {
        q: "Budgeting improves financial wellbeing primarily because…",
        q_hi: "बजट वित्तीय स्वास्थ्य मुख्य रूप से इसलिए सुधारता है…",
        opts: ["It limits your lifestyle permanently", "It creates intentionality — every rupee has a purpose", "It replaces the need for income growth", "It automatically eliminates all debt"],
        opts_hi: ["यह जीवनशैली स्थायी रूप से सीमित करता है", "यह जानबूझकर निर्णय बनाता है — हर रुपए का उद्देश्य होता है", "यह आय वृद्धि की ज़रूरत खत्म करता है", "यह सभी कर्ज़ स्वचालित रूप से खत्म करता है"],
        ans: 1,
        exp: "Budgeting creates conscious spending. Research shows budgeters save 15–20% more in the first year simply because they see where money leaks.",
        exp_hi: "बजट सचेत खर्च बनाता है। शोध दिखाता है कि बजट बनाने वाले पहले साल 15-20% अधिक बचाते हैं।",
      },
    ],
  },

  // ── bud2 · The 50-30-20 Rule ──────────────────────────────
  bud2: {
    beginner: [
      {
        q: "In the 50-30-20 rule, '20' stands for…",
        q_hi: "50-30-20 नियम में '20' का मतलब है…",
        opts: ["20% on food", "20% on savings and debt repayment", "20% on entertainment", "20% on taxes"],
        opts_hi: ["20% खाने पर", "20% बचत और कर्ज़ चुकाने पर", "20% मनोरंजन पर", "20% कर पर"],
        ans: 1,
        exp: "The 50-30-20 rule: 50% to needs, 30% to wants, 20% to savings and debt repayment.",
        exp_hi: "50-30-20 नियम: 50% ज़रूरतों पर, 30% इच्छाओं पर, 20% बचत/कर्ज़ पर।",
      },
    ],
    normal: [
      {
        q: "Which of the following is a 'need' under the 50-30-20 rule?",
        q_hi: "50-30-20 नियम में निम्नलिखित में से कौन-सी 'ज़रूरत' है?",
        opts: ["Netflix subscription", "A weekend trip", "Monthly rent", "Eating out at restaurants"],
        opts_hi: ["Netflix सब्सक्रिप्शन", "सप्ताहांत यात्रा", "मासिक किराया", "रेस्तरां में खाना"],
        ans: 2,
        exp: "Needs are essential expenses you cannot avoid — rent, groceries, electricity, EMIs. Wants are choices.",
        exp_hi: "ज़रूरतें अनिवार्य खर्च हैं — किराया, किराना, बिजली, EMI। इच्छाएं विकल्प हैं।",
      },
    ],
    advanced: [
      {
        q: "If take-home salary is ₹60,000/month, the 50-30-20 rule allocates how much to savings?",
        q_hi: "टेक-होम ₹60,000/माह है, तो 50-30-20 नियम से बचत के लिए कितना जाएगा?",
        opts: ["₹6,000", "₹12,000", "₹18,000", "₹30,000"],
        opts_hi: ["₹6,000", "₹12,000", "₹18,000", "₹30,000"],
        ans: 1,
        exp: "20% of ₹60,000 = ₹12,000 for savings/debt. 50% = ₹30,000 needs. 30% = ₹18,000 wants.",
        exp_hi: "₹60,000 का 20% = ₹12,000 बचत के लिए। 50% = ₹30,000 ज़रूरतें। 30% = ₹18,000 इच्छाएं।",
      },
    ],
  },

  // ── bud3 · Zero-Based Budgeting ──────────────────────────
  bud3: {
    beginner: [
      {
        q: "Zero-based budgeting means…",
        q_hi: "ज़ीरो-बेस्ड बजटिंग का मतलब है…",
        opts: ["Spending nothing at all", "Every rupee of income is assigned a purpose so income minus all allocations equals zero", "Saving everything and spending nothing", "Having zero income"],
        opts_hi: ["बिल्कुल खर्च न करना", "आय का हर रुपया एक उद्देश्य के लिए तय करना — आय - आवंटन = शून्य", "सब बचाना और कुछ खर्च न करना", "शून्य आय होना"],
        ans: 1,
        exp: "In ZBB, you plan all spending, saving, and investing so every rupee has a job. Income − all categories = ₹0.",
        exp_hi: "ZBB में आय का हर रुपया किसी काम के लिए तय होता है। आय − सभी श्रेणियां = ₹0।",
      },
    ],
    normal: [
      {
        q: "The main advantage of zero-based budgeting over traditional budgeting is…",
        q_hi: "पारंपरिक बजटिंग की तुलना में ZBB का मुख्य लाभ है…",
        opts: ["It requires less time each month", "It eliminates baseline creep — every rupee is justified from scratch monthly", "It allows unlimited discretionary spending", "It works only for high earners"],
        opts_hi: ["हर महीने कम समय लगता है", "बेसलाइन क्रीप खत्म — हर रुपए को मासिक आधार पर उचित ठहराना होता है", "असीमित विवेकाधीन खर्च", "केवल उच्च आय वालों के लिए"],
        ans: 1,
        exp: "Traditional budgeting rolls over last month's budget. ZBB forces you to justify every category afresh, cutting wasteful habits.",
        exp_hi: "पारंपरिक बजटिंग पिछले महीने का बजट आगे बढ़ाती है। ZBB हर श्रेणी को फिर से उचित ठहराने पर मजबूर करती है।",
      },
    ],
    advanced: [
      {
        q: "ZBB users tend to save more primarily because…",
        q_hi: "ZBB उपयोगकर्ता अधिक बचत करते हैं मुख्यतः क्योंकि…",
        opts: ["They earn higher salaries", "The process creates forced opportunity-cost awareness for every expense", "It removes income tax obligations", "Banks give them higher interest rates"],
        opts_hi: ["वे अधिक वेतन पाते हैं", "यह हर खर्च के लिए अवसर लागत जागरूकता पैदा करती है", "यह आयकर दायित्व हटाती है", "बैंक अधिक ब्याज देते हैं"],
        ans: 1,
        exp: "When you must actively justify each expense, you question unnecessary ones. ZBB users save 15–20% more in year one.",
        exp_hi: "हर खर्च को उचित ठहराने पर अनावश्यक खर्चों पर सवाल उठते हैं। ZBB उपयोगकर्ता पहले साल 15-20% अधिक बचाते हैं।",
      },
    ],
  },

  // ── bud4 · Tracking Expenses ─────────────────────────────
  bud4: {
    beginner: [
      {
        q: "Why should you track your daily expenses?",
        q_hi: "दैनिक खर्च ट्रैक क्यों करने चाहिए?",
        opts: ["To show your bank how much you spend", "To see where money goes and spot wasteful habits", "To get a better credit score", "To avoid paying taxes"],
        opts_hi: ["बैंक को दिखाने के लिए", "पैसा कहाँ जाता है देखने और बुरी आदतें पहचानने के लिए", "बेहतर क्रेडिट स्कोर के लिए", "कर देने से बचने के लिए"],
        ans: 1,
        exp: "Tracking reveals patterns — like ₹4,000/month on food delivery you forgot — so you can cut where needed.",
        exp_hi: "ट्रैकिंग से पैटर्न पता चलता है — जैसे हर महीने ₹4,000 फूड डिलीवरी पर — ताकि कटौती हो सके।",
      },
    ],
    normal: [
      {
        q: "Which app category is widely used for expense tracking in India?",
        q_hi: "भारत में खर्च ट्रैकिंग के लिए कौन-सा ऐप वर्ग व्यापक रूप से उपयोग होता है?",
        opts: ["Stock trading apps", "Personal finance apps like Walnut or Money Manager", "Gaming apps", "E-commerce apps"],
        opts_hi: ["स्टॉक ट्रेडिंग ऐप्स", "Walnut या Money Manager जैसे पर्सनल फाइनेंस ऐप्स", "गेमिंग ऐप्स", "ई-कॉमर्स ऐप्स"],
        ans: 1,
        exp: "Apps like Walnut or Money Manager automatically categorise spending from SMS bank alerts, making tracking effortless.",
        exp_hi: "Walnut जैसे ऐप SMS बैंक अलर्ट से खर्च स्वचालित रूप से श्रेणीबद्ध करते हैं।",
      },
    ],
    advanced: [
      {
        q: "The most effective frequency for reviewing your expense tracker is…",
        q_hi: "खर्च ट्रैकर की समीक्षा की सबसे प्रभावी आवृत्ति है…",
        opts: ["Once a year", "Weekly for habits, monthly for totals", "Only when you feel broke", "Never — automation handles it"],
        opts_hi: ["साल में एक बार", "आदतों के लिए साप्ताहिक, कुल के लिए मासिक", "केवल जब तंग महसूस हो", "कभी नहीं — ऑटोमेशन संभाल लेता है"],
        ans: 1,
        exp: "Weekly reviews catch overspending within 7 days, not 30. Monthly reviews confirm whether the budget held and reset for next month.",
        exp_hi: "साप्ताहिक समीक्षा 7 दिनों में अधिक खर्च पकड़ती है। मासिक समीक्षा पुष्टि करती है कि बजट टिका।",
      },
    ],
  },

  // ── bud5 · Cutting Expenses Smartly ──────────────────────
  bud5: {
    beginner: [
      {
        q: "Lifestyle inflation means…",
        q_hi: "लाइफस्टाइल इन्फ्लेशन का मतलब है…",
        opts: ["Prices in shops going up", "Spending more as you earn more, leaving no extra savings", "Saving more when income rises", "Investing in a lifestyle business"],
        opts_hi: ["दुकानों में कीमतें बढ़ना", "आय बढ़ने पर अधिक खर्च, कोई अतिरिक्त बचत नहीं", "आय बढ़ने पर अधिक बचत", "लाइफस्टाइल व्यवसाय में निवेश"],
        ans: 1,
        exp: "Lifestyle inflation is when a salary raise leads to proportionally higher spending rather than higher saving.",
        exp_hi: "लाइफस्टाइल इन्फ्लेशन तब होती है जब वेतन वृद्धि से बचत नहीं बल्कि खर्च उसी अनुपात में बढ़ जाते हैं।",
      },
    ],
    normal: [
      {
        q: "The smart way to cut expenses is…",
        q_hi: "खर्च कम करने का स्मार्ट तरीका है…",
        opts: ["Cut all entertainment immediately", "Identify high-impact low-regret cuts first (unused subscriptions, dining frequency)", "Never spend on anything that isn't food", "Ask your employer for advances"],
        opts_hi: ["तुरंत सभी मनोरंजन बंद करना", "पहले उच्च-प्रभाव, कम-पछतावे वाली कटौतियाँ (अनुपयोगी सदस्यता, खाने की आवृत्ति)", "खाने के अलावा कुछ खर्च न करें", "नियोक्ता से अग्रिम माँगें"],
        ans: 1,
        exp: "Start with subscriptions you barely use and frequent dining out — high financial impact, low quality-of-life impact.",
        exp_hi: "उन सदस्यताओं से शुरू करें जिनका आप मुश्किल से उपयोग करते हैं और बार-बार बाहर खाना — वित्तीय प्रभाव उच्च, जीवन गुणवत्ता पर कम असर।",
      },
    ],
    advanced: [
      {
        q: "Distinguishing needs from wants is hardest because…",
        q_hi: "ज़रूरतों और इच्छाओं में अंतर करना सबसे कठिन है क्योंकि…",
        opts: ["Needs are always more expensive", "Emotional reasoning turns wants into perceived needs over time", "Wants are always illegal", "Banks classify them differently"],
        opts_hi: ["ज़रूरतें हमेशा महंगी होती हैं", "भावनात्मक तर्क समय के साथ इच्छाओं को ज़रूरत जैसा बना देते हैं", "इच्छाएं हमेशा अवैध होती हैं", "बैंक उन्हें अलग वर्गीकृत करते हैं"],
        ans: 1,
        exp: "We rationalise wants as needs ('I need a new phone for work'). Ask: 'Would my life be seriously harmed without this?' True needs pass this test.",
        exp_hi: "हम इच्छाओं को ज़रूरत बता देते हैं। पूछें: 'अगर यह न हो तो क्या जीवन गंभीर रूप से प्रभावित होगा?' सच्ची ज़रूरतें यह परीक्षण पास करती हैं।",
      },
    ],
  },

  // ── bud6 · Emergency Fund ─────────────────────────────────
  bud6: {
    beginner: [
      {
        q: "An emergency fund is used for…",
        q_hi: "आपातकालीन फंड किस काम आता है?",
        opts: ["Buying luxuries on sale", "Unexpected urgent expenses like medical bills or job loss", "Annual vacation planning", "Stock market investing"],
        opts_hi: ["बिक्री पर विलासिता खरीदना", "अचानक आई ज़रूरी खर्च जैसे मेडिकल बिल या नौकरी जाना", "वार्षिक छुट्टी की योजना", "शेयर बाज़ार में निवेश"],
        ans: 1,
        exp: "An emergency fund is reserved exclusively for genuine emergencies. It prevents debt during crises.",
        exp_hi: "आपातकालीन फंड केवल वास्तविक आपात स्थितियों के लिए। यह संकट में कर्ज़ रोकता है।",
      },
    ],
    normal: [
      {
        q: "The ideal size of an emergency fund for a salaried person is…",
        q_hi: "वेतनभोगी व्यक्ति के लिए आपातकालीन फंड का आदर्श आकार है…",
        opts: ["₹500", "3–6 months of monthly expenses", "1 year of gross income", "Whatever is left after spending"],
        opts_hi: ["₹500", "3–6 महीने के मासिक खर्च", "1 साल की सकल आय", "खर्च के बाद जो बचे"],
        ans: 1,
        exp: "3–6 months of expenses gives you time to recover from job loss or a health crisis without borrowing.",
        exp_hi: "3-6 महीने के खर्च आपको बिना उधार लिए उबरने का समय देते हैं।",
      },
    ],
    advanced: [
      {
        q: "The best place to keep an emergency fund is…",
        q_hi: "आपातकालीन फंड रखने की सबसे अच्छी जगह है…",
        opts: ["Equity mutual funds", "A liquid fund or high-interest savings account accessible within 24 hours", "Physical gold", "A 5-year lock-in fixed deposit"],
        opts_hi: ["इक्विटी म्यूचुअल फंड", "लिक्विड फंड या उच्च-ब्याज बचत खाता — 24 घंटे में उपलब्ध", "भौतिक सोना", "5 साल के लॉक-इन वाला FD"],
        ans: 1,
        exp: "Emergency funds need instant access and capital safety. Liquid funds offer ~6-7% returns with T+1 withdrawal. Equity is too volatile; FDs may penalise early withdrawal.",
        exp_hi: "आपातकालीन फंड को तत्काल एक्सेस और पूंजी सुरक्षा चाहिए। लिक्विड फंड T+1 निकासी के साथ ~6-7% रिटर्न देते हैं।",
      },
    ],
  },

  // ── bud7 · Budget for Irregular Life ─────────────────────
  bud7: {
    beginner: [
      {
        q: "Budgeting for festivals (like Diwali) means…",
        q_hi: "त्योहारों (जैसे दिवाली) के लिए बजट बनाने का मतलब है…",
        opts: ["Spending everything on gifts without planning", "Setting aside a fixed amount each month throughout the year", "Borrowing money just before the festival", "Avoiding all festival celebrations"],
        opts_hi: ["बिना योजना के सब उपहारों पर खर्च", "साल भर हर महीने एक निश्चित राशि अलग रखना", "त्योहार से पहले उधार लेना", "सभी त्योहार समारोह से बचना"],
        ans: 1,
        exp: "Divide expected festival spend by 12 and save that monthly. Avoids last-minute debt.",
        exp_hi: "अपेक्षित त्योहार खर्च को 12 से विभाजित करें और मासिक बचाएं। अंतिम समय के कर्ज़ से बचता है।",
      },
    ],
    normal: [
      {
        q: "For irregular income earners, the best budget baseline is…",
        q_hi: "अनियमित आय वालों के लिए सबसे अच्छा बजट आधार है…",
        opts: ["The highest income month ever recorded", "The lowest typical monthly income", "Average of last 12 months", "This month's income only"],
        opts_hi: ["अब तक का सबसे अधिक आय वाला महीना", "सबसे कम सामान्य मासिक आय", "पिछले 12 महीनों का औसत", "केवल इस महीने की आय"],
        ans: 1,
        exp: "Budget on the worst-case month so you can always cover expenses. Surplus from good months goes to a buffer, then investments.",
        exp_hi: "सबसे कम महीने पर बजट बनाएं। अच्छे महीनों का अधिशेष बफर में, फिर निवेश में।",
      },
    ],
    advanced: [
      {
        q: "Annual expense planning involves…",
        q_hi: "वार्षिक खर्च योजना में शामिल है…",
        opts: ["Only monthly recurring bills", "Listing all irregular yearly costs (insurance, school fees, vehicle servicing) and dividing by 12", "Ignoring one-time costs", "Planning only for tax payments"],
        opts_hi: ["केवल मासिक नियमित बिल", "सभी अनियमित वार्षिक खर्चों को सूचीबद्ध करना और 12 से विभाजित करना", "एकमुश्त लागतों को अनदेखा करना", "केवल कर भुगतान की योजना"],
        ans: 1,
        exp: "List every annual cost, divide by 12, add to monthly budget as a 'sinking fund'. Eliminates budget-busting surprises.",
        exp_hi: "हर वार्षिक खर्च सूचीबद्ध करें, 12 से विभाजित करें और 'सिंकिंग फंड' के रूप में जोड़ें।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 03 · Banking & Payments
  // ═══════════════════════════════════════════════════════════

  // ── bnk1 · How Banks Work ────────────────────────────────
  bnk1: {
    beginner: [
      {
        q: "How do banks primarily make money?",
        q_hi: "बैंक मुख्य रूप से पैसे कैसे कमाते हैं?",
        opts: ["By charging ATM fees only", "By lending depositors' money at higher interest than they pay depositors", "By selling gold", "By charging account opening fees"],
        opts_hi: ["केवल ATM शुल्क लेकर", "जमाकर्ताओं को दिए ब्याज से अधिक ब्याज पर उधार देकर", "सोना बेचकर", "खाता खोलने का शुल्क लेकर"],
        ans: 1,
        exp: "Banks pay ~3–4% interest on savings and charge ~10–18% on loans. The spread is their core profit.",
        exp_hi: "बैंक बचत पर ~3-4% ब्याज देते हैं और कर्ज़ पर ~10-18% लेते हैं। यह अंतर उनका मुख्य लाभ है।",
      },
    ],
    normal: [
      {
        q: "Under DICGC, bank deposits in India are insured up to…",
        q_hi: "DICGC के तहत भारत में बैंक जमा कितनी राशि तक बीमित है?",
        opts: ["₹1 lakh", "₹5 lakh per depositor per bank", "₹10 lakh", "Unlimited"],
        opts_hi: ["₹1 लाख", "₹5 लाख प्रति जमाकर्ता प्रति बैंक", "₹10 लाख", "असीमित"],
        ans: 1,
        exp: "DICGC insures ₹5 lakh per depositor per bank. If a bank fails, you recover up to ₹5 lakh.",
        exp_hi: "DICGC प्रति जमाकर्ता प्रति बैंक ₹5 लाख बीमित करता है। बैंक विफल होने पर ₹5 लाख तक वापस मिलता है।",
      },
    ],
    advanced: [
      {
        q: "The RBI's primary role in India's banking system is…",
        q_hi: "भारत की बैंकिंग प्रणाली में RBI की प्राथमिक भूमिका है…",
        opts: ["Giving direct loans to citizens", "Regulating all banks, controlling money supply, and maintaining financial stability", "Running the stock market", "Printing currency for export"],
        opts_hi: ["नागरिकों को सीधे कर्ज़ देना", "सभी बैंकों को विनियमित करना, मुद्रा आपूर्ति नियंत्रित करना और वित्तीय स्थिरता बनाए रखना", "शेयर बाज़ार चलाना", "निर्यात के लिए मुद्रा छापना"],
        ans: 1,
        exp: "RBI is India's central bank — it sets the repo rate, regulates banks, manages forex reserves, and issues currency. It does NOT give retail loans.",
        exp_hi: "RBI भारत का केंद्रीय बैंक है — रेपो दर तय करता है, बैंकों को विनियमित करता है। यह खुदरा कर्ज़ नहीं देता।",
      },
    ],
  },

  // ── bnk2 · Types of Bank Accounts ───────────────────────
  bnk2: {
    beginner: [
      {
        q: "A savings account is best for…",
        q_hi: "बचत खाता सबसे उपयुक्त है…",
        opts: ["Daily business transactions in high volume", "Individuals storing and growing personal savings", "Importing and exporting goods", "Paying employee salaries only"],
        opts_hi: ["उच्च मात्रा में दैनिक व्यावसायिक लेनदेन", "व्यक्तिगत बचत रखने और बढ़ाने के लिए", "माल आयात-निर्यात", "केवल कर्मचारी वेतन देना"],
        ans: 1,
        exp: "Savings accounts earn interest and are ideal for personal use. Not designed for very high transaction volume.",
        exp_hi: "बचत खाते पर ब्याज मिलता है और यह व्यक्तिगत उपयोग के लिए आदर्श है।",
      },
    ],
    normal: [
      {
        q: "A zero-balance account (like BSBD) is significant because…",
        q_hi: "शून्य-बैलेंस खाता (जैसे BSBD) महत्वपूर्ण है क्योंकि…",
        opts: ["It earns the highest interest rate", "It allows people without minimum balance to access formal banking", "It is only for NRIs", "It requires no KYC"],
        opts_hi: ["यह सबसे अधिक ब्याज देता है", "यह न्यूनतम बैलेंस न रखने वालों को औपचारिक बैंकिंग तक पहुँचने देता है", "यह केवल NRI के लिए है", "इसे KYC की आवश्यकता नहीं"],
        ans: 1,
        exp: "Zero-balance accounts under Jan Dhan Yojana extend banking to low-income groups without the burden of minimum balance.",
        exp_hi: "जन धन योजना के तहत शून्य-बैलेंस खाते कम आय वाले लोगों को बैंकिंग तक पहुँच देते हैं।",
      },
    ],
    advanced: [
      {
        q: "A salary account automatically converts to a savings account if…",
        q_hi: "वेतन खाता स्वचालित रूप से बचत खाते में बदल जाता है यदि…",
        opts: ["You use ATM too often", "No salary credit is received for 3 consecutive months", "You open a fixed deposit", "You change your mobile number"],
        opts_hi: ["आप ATM का बहुत उपयोग करते हैं", "लगातार 3 महीने कोई वेतन जमा नहीं होता", "आप FD खोलते हैं", "आप मोबाइल नंबर बदलते हैं"],
        ans: 1,
        exp: "Salary accounts have no minimum balance as long as salary is credited. Stop receiving salary for ~3 months and the bank reclassifies it as a regular savings account.",
        exp_hi: "वेतन खातों में न्यूनतम बैलेंस की शर्त नहीं जब तक वेतन जमा होता है। ~3 महीने वेतन न आने पर बैंक इसे नियमित बचत खाते में बदल देता है।",
      },
    ],
  },

  // ── bnk3 · Interest on Savings ───────────────────────────
  bnk3: {
    beginner: [
      {
        q: "Banks pay savings account interest because…",
        q_hi: "बैंक बचत खाते पर ब्याज देते हैं क्योंकि…",
        opts: ["It is required by law for every transaction", "They use your deposited money to give loans and share a small return with you", "Inflation makes prices go up", "ATM machines generate profit"],
        opts_hi: ["यह हर लेनदेन के लिए कानून द्वारा आवश्यक है", "वे आपके जमा पैसे से कर्ज़ देते हैं और थोड़ा रिटर्न साझा करते हैं", "महंगाई से कीमतें बढ़ती हैं", "ATM मशीनें लाभ उत्पन्न करती हैं"],
        ans: 1,
        exp: "Your deposit funds the bank's loans. In return, the bank pays you interest — typically 2.5–4% in India.",
        exp_hi: "आपकी जमा राशि बैंक के कर्ज़ को वित्तपोषित करती है। बदले में बैंक आपको ब्याज देता है — भारत में 2.5–4%।",
      },
    ],
    normal: [
      {
        q: "To maximise interest on idle savings, you should…",
        q_hi: "निष्क्रिय बचत पर ब्याज अधिकतम करने के लिए आपको चाहिए…",
        opts: ["Keep all money in a current account", "Use a high-yield savings account or sweep-in FD for amounts beyond monthly needs", "Never put money in a bank", "Keep cash at home for safety"],
        opts_hi: ["सभी पैसे चालू खाते में रखें", "मासिक ज़रूरत से अधिक राशि के लिए उच्च-ब्याज बचत खाता या स्वीप-इन FD उपयोग करें", "कभी बैंक में पैसे न डालें", "सुरक्षा के लिए घर पर नकद रखें"],
        ans: 1,
        exp: "Small finance banks offer ~7% savings rate. Sweep-in FDs automatically move idle balances to FD and back, maximising interest.",
        exp_hi: "छोटे वित्त बैंक ~7% बचत दर देते हैं। स्वीप-इन FD निष्क्रिय बैलेंस को स्वचालित रूप से FD में और वापस ले जाते हैं।",
      },
    ],
    advanced: [
      {
        q: "Interest on savings accounts in India is calculated…",
        q_hi: "भारत में बचत खातों पर ब्याज की गणना होती है…",
        opts: ["On average monthly balance only", "On daily closing balance and credited quarterly or monthly", "On the highest balance of the month", "On annual balance once a year"],
        opts_hi: ["केवल औसत मासिक बैलेंस पर", "दैनिक समापन बैलेंस पर और त्रैमासिक या मासिक जमा", "महीने के उच्चतम बैलेंस पर", "साल में एक बार वार्षिक बैलेंस पर"],
        ans: 1,
        exp: "Since 2010, RBI mandated daily balance calculation. Credits are typically quarterly (Mar, Jun, Sep, Dec) or monthly depending on the bank.",
        exp_hi: "2010 से RBI ने दैनिक बैलेंस गणना अनिवार्य की। जमा आमतौर पर त्रैमासिक या मासिक होती है।",
      },
    ],
  },

  // ── bnk4 · Fixed Deposits Deep Dive ─────────────────────
  bnk4: {
    beginner: [
      {
        q: "A fixed deposit (FD) is…",
        q_hi: "सावधि जमा (FD) है…",
        opts: ["A savings account with a debit card", "Money deposited for a fixed period at a guaranteed interest rate", "A type of share in a company", "A government loan scheme"],
        opts_hi: ["डेबिट कार्ड के साथ बचत खाता", "एक निश्चित अवधि के लिए गारंटीड ब्याज दर पर जमा पैसा", "किसी कंपनी में शेयर", "एक सरकारी कर्ज़ योजना"],
        ans: 1,
        exp: "An FD locks your money for a fixed term (7 days to 10 years) at a fixed rate — safe, predictable, insured up to ₹5 lakh.",
        exp_hi: "FD आपके पैसे को एक निश्चित अवधि के लिए तय ब्याज दर पर लॉक करता है — सुरक्षित और ₹5 लाख तक बीमित।",
      },
    ],
    normal: [
      {
        q: "Interest earned on FDs in India is…",
        q_hi: "भारत में FD पर अर्जित ब्याज है…",
        opts: ["Always tax-free", "Taxable as per your income tax slab", "Taxed at a flat 10% always", "Only taxed if above ₹10 lakh"],
        opts_hi: ["हमेशा कर-मुक्त", "आपकी आयकर स्लैब के अनुसार कर योग्य", "हमेशा 10% की एक समान दर पर", "केवल ₹10 लाख से अधिक पर"],
        ans: 1,
        exp: "FD interest is added to your income and taxed at your slab rate. TDS at 10% is deducted if interest > ₹40,000/year (₹50,000 for seniors).",
        exp_hi: "FD ब्याज आपकी आय में जुड़ता है और स्लैब दर पर कर लगता है। ब्याज > ₹40,000/वर्ष पर 10% TDS काटा जाता है।",
      },
    ],
    advanced: [
      {
        q: "Breaking an FD prematurely usually results in…",
        q_hi: "FD समय से पहले तोड़ने पर आमतौर पर होता है…",
        opts: ["No penalty — you get full interest", "A penalty of 0.5–1% lower interest rate on the amount withdrawn", "Complete loss of the principal", "A credit score reduction"],
        opts_hi: ["कोई जुर्माना नहीं — पूरा ब्याज मिलता है", "निकाली गई राशि पर 0.5-1% कम ब्याज का जुर्माना", "मूलधन का पूर्ण नुकसान", "क्रेडिट स्कोर में कमी"],
        ans: 1,
        exp: "Most banks charge 0.5–1% premature withdrawal penalty on applicable interest. Principal is safe. Laddering FDs reduces this risk.",
        exp_hi: "अधिकांश बैंक 0.5-1% समयपूर्व निकासी जुर्माना लेते हैं। मूलधन सुरक्षित है।",
      },
    ],
  },

  // ── bnk5 · UPI & Digital Payments ───────────────────────
  bnk5: {
    beginner: [
      {
        q: "UPI allows you to…",
        q_hi: "UPI आपको अनुमति देता है…",
        opts: ["Only withdraw cash from ATMs", "Send and receive money instantly using a UPI ID or QR code", "Apply for a bank loan online", "Check stock prices"],
        opts_hi: ["केवल ATM से नकद निकालना", "UPI ID या QR कोड से तुरंत पैसे भेजना और प्राप्त करना", "ऑनलाइन बैंक कर्ज़ के लिए आवेदन", "शेयर की कीमतें देखना"],
        ans: 1,
        exp: "UPI enables instant bank-to-bank transfers 24/7/365, free of charge, using just a VPA (UPI ID) or QR code.",
        exp_hi: "UPI 24/7/365 तत्काल बैंक-से-बैंक ट्रांसफर सक्षम करता है, केवल UPI ID या QR कोड से।",
      },
    ],
    normal: [
      {
        q: "A common UPI fraud to watch out for is…",
        q_hi: "एक सामान्य UPI धोखाधड़ी जिससे सतर्क रहना चाहिए…",
        opts: ["UPI apps charging high fees", "Fraudsters sending collect requests pretending to give refunds — you approve and lose money", "Banks blocking UPI after 5pm", "UPI not working on weekends"],
        opts_hi: ["UPI ऐप्स उच्च शुल्क लेते हैं", "धोखेबाज़ रिफंड देने का नाटक करते हुए कलेक्ट रिक्वेस्ट भेजते हैं — आप अनुमोदित करते हैं और पैसे खोते हैं", "बैंक शाम 5 बजे UPI ब्लॉक करते हैं", "सप्ताहांत पर UPI काम नहीं करता"],
        ans: 1,
        exp: "To receive money you NEVER need to approve a request or enter your PIN. If asked, it's fraud.",
        exp_hi: "पैसे प्राप्त करने के लिए कभी रिक्वेस्ट अनुमोदित या PIN दर्ज करने की ज़रूरत नहीं। अगर कोई माँगे — धोखाधड़ी है।",
      },
    ],
    advanced: [
      {
        q: "Standard UPI transaction limits (as per recent RBI guidelines) are…",
        q_hi: "मानक UPI लेनदेन सीमाएं (हाल के RBI दिशानिर्देशों के अनुसार) हैं…",
        opts: ["₹1,000 per transaction always", "₹1 lakh/txn standard; higher (₹5 lakh) for tax payments, hospitals, and education", "Unlimited for all", "Only ₹5,000 for new users"],
        opts_hi: ["हमेशा ₹1,000 प्रति लेनदेन", "₹1 लाख/लेनदेन मानक; कर, अस्पताल और शिक्षा के लिए ₹5 लाख", "सभी के लिए असीमित", "नए उपयोगकर्ताओं के लिए केवल ₹5,000"],
        ans: 1,
        exp: "Standard UPI limit is ₹1 lakh/transaction. RBI has raised limits to ₹5 lakh for tax, hospitals, and educational institutions.",
        exp_hi: "मानक UPI सीमा ₹1 लाख/लेनदेन है। कर, अस्पतालों और शैक्षणिक संस्थानों के लिए ₹5 लाख।",
      },
    ],
  },

  // ── bnk6 · Net Banking & Mobile Apps ────────────────────
  bnk6: {
    beginner: [
      {
        q: "If you suspect your net banking is hacked, you should FIRST…",
        q_hi: "अगर नेट बैंकिंग हैक हुई लगे तो सबसे पहले…",
        opts: ["Wait and see if it resolves", "Immediately call your bank's helpline and change your password", "Tell your friends about it", "Transfer all money to someone else"],
        opts_hi: ["प्रतीक्षा करें", "तुरंत बैंक हेल्पलाइन पर कॉल करें और पासवर्ड बदलें", "दोस्तों को बताएं", "सब पैसे किसी और को ट्रांसफर करें"],
        ans: 1,
        exp: "Call your bank's 24/7 helpline immediately to block the account. Every minute of delay increases potential loss.",
        exp_hi: "तुरंत बैंक की 24/7 हेल्पलाइन पर कॉल करके खाता ब्लॉक करें। हर मिनट की देरी नुकसान बढ़ाती है।",
      },
    ],
    normal: [
      {
        q: "Setting up banking transaction alerts helps you…",
        q_hi: "बैंकिंग लेनदेन अलर्ट सेट करने से मदद मिलती है…",
        opts: ["Earn more interest", "Detect unauthorized transactions instantly and act quickly", "Reduce monthly bank charges", "Get better loan rates"],
        opts_hi: ["अधिक ब्याज कमाना", "अनधिकृत लेनदेन तुरंत पकड़ना और जल्दी कार्रवाई करना", "मासिक बैंक शुल्क कम करना", "बेहतर कर्ज़ दर पाना"],
        ans: 1,
        exp: "SMS and email alerts for every transaction let you spot fraud within seconds — not days when you check your statement.",
        exp_hi: "हर लेनदेन पर SMS और ईमेल अलर्ट सेकंड में धोखाधड़ी दिखाते हैं — स्टेटमेंट की जाँच के दिनों में नहीं।",
      },
    ],
    advanced: [
      {
        q: "The safest practice when using net banking on a public computer is…",
        q_hi: "सार्वजनिक कंप्यूटर पर नेट बैंकिंग उपयोग करते समय सबसे सुरक्षित अभ्यास है…",
        opts: ["Save your password for convenience", "Avoid it entirely; if unavoidable use incognito mode and log out completely", "Use the same password as your email", "Never change the default bank password"],
        opts_hi: ["सुविधा के लिए पासवर्ड सेव करें", "पूरी तरह बचें; यदि अपरिहार्य हो तो इनकॉगनिटो उपयोग करें और पूरी तरह लॉग आउट करें", "अपने ईमेल जैसा पासवर्ड उपयोग करें", "डिफ़ॉल्ट बैंक पासवर्ड कभी न बदलें"],
        ans: 1,
        exp: "Public computers may have keyloggers. Best: never use them for banking. If forced, use incognito, don't save anything, log out, clear the session.",
        exp_hi: "सार्वजनिक कंप्यूटरों में कीलॉगर हो सकते हैं। इनकॉगनिटो उपयोग करें, कुछ सेव न करें, लॉग आउट करें।",
      },
    ],
  },

  // ── bnk7 · NEFT RTGS IMPS Explained ─────────────────────
  bnk7: {
    beginner: [
      {
        q: "IMPS is unique because…",
        q_hi: "IMPS अनोखा है क्योंकि…",
        opts: ["It only works on weekdays", "It transfers money instantly 24/7/365 including holidays", "It requires visiting a bank branch", "It is free only above ₹2 lakh"],
        opts_hi: ["यह केवल कार्यदिवसों पर काम करता है", "यह छुट्टियों सहित 24/7/365 तुरंत पैसे ट्रांसफर करता है", "इसके लिए बैंक शाखा जाना पड़ता है", "यह केवल ₹2 लाख से अधिक पर मुफ्त है"],
        ans: 1,
        exp: "IMPS works 24/7/365 and is instant. NEFT processes in batches; RTGS requires a ₹2 lakh minimum.",
        exp_hi: "IMPS 24/7/365 काम करता है और तत्काल है। NEFT बैचों में प्रोसेस होता है; RTGS की न्यूनतम ₹2 लाख सीमा है।",
      },
    ],
    normal: [
      {
        q: "RTGS is most appropriate when…",
        q_hi: "RTGS सबसे उपयुक्त है जब…",
        opts: ["Sending ₹200 to a friend", "Transferring large amounts (minimum ₹2 lakh) needing real-time settlement", "Paying a local grocery store", "Sending money abroad"],
        opts_hi: ["किसी दोस्त को ₹200 भेजना", "बड़ी रकम (न्यूनतम ₹2 लाख) जिसे रियल-टाइम सेटलमेंट चाहिए", "स्थानीय किराना दुकान को भुगतान", "विदेश पैसे भेजना"],
        ans: 1,
        exp: "RTGS has a minimum of ₹2 lakh and settles each transaction individually in real time — ideal for large-value urgent transfers.",
        exp_hi: "RTGS की न्यूनतम ₹2 लाख है और प्रत्येक लेनदेन को रियल टाइम में सेटल करता है — बड़े तत्काल ट्रांसफर के लिए आदर्श।",
      },
    ],
    advanced: [
      {
        q: "NEFT operates on which settlement basis?",
        q_hi: "NEFT किस सेटलमेंट आधार पर संचालित होता है?",
        opts: ["Real-time individual settlement", "Deferred net settlement in half-hourly batches", "Weekly batch settlement", "Settlement once daily on business days only"],
        opts_hi: ["रियल-टाइम व्यक्तिगत सेटलमेंट", "आधे घंटे के बैचों में स्थगित शुद्ध सेटलमेंट", "साप्ताहिक बैच सेटलमेंट", "केवल कार्य दिवसों पर दिन में एक बार"],
        ans: 1,
        exp: "NEFT uses Deferred Net Settlement in half-hourly batches. It is available 24/7 since 2019 but still batch-processes — not individual like RTGS.",
        exp_hi: "NEFT आधे घंटे के बैचों में DNS उपयोग करता है। 2019 से 24/7 उपलब्ध है लेकिन अभी भी बैचों में प्रोसेस करता है।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 04 · Credit & Debt
  // ═══════════════════════════════════════════════════════════

  // ── crd1 · What Is Credit? ───────────────────────────────
  crd1: {
    beginner: [
      {
        q: "Credit means…",
        q_hi: "क्रेडिट का मतलब है…",
        opts: ["Money you earn", "Money lent to you with a promise to repay later", "A type of savings account", "A government tax benefit"],
        opts_hi: ["आपकी कमाई", "बाद में चुकाने के वादे के साथ आपको दिया पैसा", "एक प्रकार का बचत खाता", "सरकारी कर लाभ"],
        ans: 1,
        exp: "Credit is borrowed money. When a bank gives you a credit card or loan, you must repay it — with interest.",
        exp_hi: "क्रेडिट उधार लिया हुआ पैसा है। बैंक क्रेडिट कार्ड या कर्ज़ देता है जिसे ब्याज के साथ चुकाना होता है।",
      },
    ],
    normal: [
      {
        q: "Good credit used responsibly can help you…",
        q_hi: "ज़िम्मेदारी से उपयोग किया गया अच्छा क्रेडिट मदद कर सकता है…",
        opts: ["Spend more than you earn permanently", "Get lower interest rates on loans and approval for renting homes", "Avoid paying any taxes", "Borrow unlimited money"],
        opts_hi: ["स्थायी रूप से कमाई से अधिक खर्च", "कर्ज़ पर कम ब्याज और घर किराये की मंज़ूरी", "कोई कर न देना", "असीमित पैसे उधार लेना"],
        ans: 1,
        exp: "Good credit history signals trustworthiness — lower interest rates, higher loan limits, and even better housing options.",
        exp_hi: "अच्छी क्रेडिट हिस्ट्री विश्वसनीयता का संकेत देती है — कम ब्याज, उच्च कर्ज़ सीमा और बेहतर आवास विकल्प।",
      },
    ],
    advanced: [
      {
        q: "The key difference between good and bad debt is…",
        q_hi: "अच्छे और बुरे कर्ज़ का मुख्य अंतर है…",
        opts: ["Good debt has no interest; bad debt has high interest", "Good debt builds value or earning capacity; bad debt funds depreciating consumption", "Good debt is always less than ₹1 lakh", "Bad debt only comes from credit cards"],
        opts_hi: ["अच्छे कर्ज़ पर ब्याज नहीं", "अच्छा कर्ज़ मूल्य या कमाई क्षमता बढ़ाता है; बुरा कर्ज़ खपत को वित्तपोषित करता है", "अच्छा कर्ज़ हमेशा ₹1 लाख से कम", "बुरा कर्ज़ केवल क्रेडिट कार्ड से"],
        ans: 1,
        exp: "An education loan that raises earning capacity for decades is productive debt. Borrowing for a luxury vacation creates no future value — that's bad debt.",
        exp_hi: "शिक्षा कर्ज़ जो दशकों तक कमाई बढ़ाता है — उत्पादक कर्ज़। लग्ज़री छुट्टी के लिए उधार — बुरा कर्ज़।",
      },
    ],
  },

  // ── crd2 · CIBIL Score Explained ─────────────────────────
  crd2: {
    beginner: [
      {
        q: "Your CIBIL score is a number that…",
        q_hi: "आपका CIBIL स्कोर एक संख्या है जो…",
        opts: ["Shows how much money you have saved", "Measures your creditworthiness based on your borrowing history", "Is your Aadhaar number", "Tracks your monthly expenses"],
        opts_hi: ["दिखाता है कि आपने कितना बचाया", "आपकी उधार हिस्ट्री के आधार पर क्रेडिट योग्यता मापता है", "आपका आधार नंबर है", "मासिक खर्च ट्रैक करता है"],
        ans: 1,
        exp: "CIBIL score (300–900) shows how reliably you've repaid past loans and credit cards. Higher score = better borrower.",
        exp_hi: "CIBIL स्कोर (300–900) दिखाता है कि आपने पिछले कर्ज़ और क्रेडिट कार्ड कितनी विश्वसनीयता से चुकाए।",
      },
    ],
    normal: [
      {
        q: "A CIBIL score above 750 generally means…",
        q_hi: "750 से अधिक CIBIL स्कोर का मतलब आमतौर पर है…",
        opts: ["You will be rejected for all loans", "You are a low-risk borrower likely to get good loan rates", "You owe no money to anyone", "You earn above ₹10 lakh per year"],
        opts_hi: ["आप सभी कर्ज़ों के लिए अस्वीकृत होंगे", "आप कम जोखिम वाले उधारकर्ता हैं और अच्छी दर पर कर्ज़ मिलने की संभावना", "आप किसी का कुछ नहीं देते", "आप ₹10 लाख से अधिक कमाते हैं"],
        ans: 1,
        exp: "750+ is excellent. Banks readily approve loans and offer competitive rates to applicants in this range.",
        exp_hi: "750+ उत्कृष्ट है। बैंक इस रेंज में स्कोर वालों को आसानी से कर्ज़ स्वीकृत करते हैं।",
      },
    ],
    advanced: [
      {
        q: "Which factor has the HIGHEST weightage in CIBIL score calculation?",
        q_hi: "CIBIL स्कोर गणना में किस कारक का सबसे अधिक वेटेज है?",
        opts: ["Credit enquiries", "Payment history (on-time repayments)", "Credit mix", "Age of credit accounts"],
        opts_hi: ["क्रेडिट जांच", "भुगतान इतिहास (समय पर पुनर्भुगतान)", "क्रेडिट मिश्रण", "क्रेडिट खातों की आयु"],
        ans: 1,
        exp: "Payment history (~35%) is the dominant factor. Even one missed EMI can drop your score 50–100 points.",
        exp_hi: "भुगतान इतिहास (~35%) सबसे प्रभावशाली। एक EMI चूकने से स्कोर 50–100 अंक गिर सकता है।",
      },
    ],
  },

  // ── crd3 · Build a Good Credit Score ────────────────────
  crd3: {
    beginner: [
      {
        q: "The single best habit to build a good CIBIL score is…",
        q_hi: "अच्छा CIBIL स्कोर बनाने की सबसे अच्छी एकल आदत है…",
        opts: ["Taking as many loans as possible", "Paying all EMIs and credit card bills on time, every time", "Closing all credit cards", "Never checking your score"],
        opts_hi: ["जितने हो सके कर्ज़ लेना", "हर बार समय पर सभी EMI और क्रेडिट कार्ड बिल चुकाना", "सभी क्रेडिट कार्ड बंद करना", "कभी स्कोर न देखना"],
        ans: 1,
        exp: "On-time payments are the biggest positive signal. Set auto-pay for at least the minimum due on all credit accounts.",
        exp_hi: "समय पर भुगतान सबसे बड़ा सकारात्मक संकेत है। सभी क्रेडिट खातों पर न्यूनतम देय के लिए ऑटो-पे सेट करें।",
      },
    ],
    normal: [
      {
        q: "Keeping your credit utilisation ratio below 30% means…",
        q_hi: "क्रेडिट उपयोग अनुपात 30% से नीचे रखने का मतलब है…",
        opts: ["Spending only ₹300 a month", "Using less than 30% of your total credit card limit", "Having fewer than 3 credit cards", "Paying 30% of your bill each month"],
        opts_hi: ["प्रति माह केवल ₹300 खर्च", "कुल क्रेडिट कार्ड सीमा के 30% से कम उपयोग", "3 से कम क्रेडिट कार्ड रखना", "प्रति माह बिल का 30% चुकाना"],
        ans: 1,
        exp: "If your limit is ₹1 lakh, keeping usage below ₹30,000 signals healthy credit management and helps maintain a high score.",
        exp_hi: "सीमा ₹1 लाख हो तो उपयोग ₹30,000 से कम रखना स्वस्थ क्रेडिट प्रबंधन का संकेत देता है।",
      },
    ],
    advanced: [
      {
        q: "A hard enquiry on your credit report occurs when…",
        q_hi: "क्रेडिट रिपोर्ट पर हार्ड इन्क्वायरी तब होती है जब…",
        opts: ["You check your own CIBIL score", "A lender checks your score as part of a loan or credit card application you submitted", "You update your address at the bank", "Your employer checks your identity"],
        opts_hi: ["आप खुद CIBIL स्कोर देखते हैं", "कर्ज़/क्रेडिट कार्ड आवेदन के लिए ऋणदाता आपका स्कोर चेक करता है", "बैंक में पता अपडेट करते हैं", "नियोक्ता पहचान जांचता है"],
        ans: 1,
        exp: "Lender-initiated checks (hard enquiries) slightly lower your score. Multiple applications in a short window signal credit-hunger.",
        exp_hi: "ऋणदाता द्वारा जांच (हार्ड इन्क्वायरी) स्कोर थोड़ा कम करती है। कम समय में कई आवेदन क्रेडिट-भूख का संकेत देते हैं।",
      },
    ],
  },

  // ── crd4 · Credit Cards 101 ──────────────────────────────
  crd4: {
    beginner: [
      {
        q: "A credit card lets you…",
        q_hi: "क्रेडिट कार्ड आपको अनुमति देता है…",
        opts: ["Withdraw from your own savings instantly", "Borrow up to a credit limit and repay later — with interest if not paid in full", "Earn guaranteed fixed interest", "Open multiple bank accounts"],
        opts_hi: ["अपनी बचत से तुरंत निकालना", "क्रेडिट सीमा तक उधार लेना और बाद में चुकाना — पूरा न चुकाने पर ब्याज", "गारंटीड तय ब्याज कमाना", "कई बैंक खाते खोलना"],
        ans: 1,
        exp: "A credit card is a short-term loan. Spend now, repay by the due date to avoid interest charges.",
        exp_hi: "क्रेडिट कार्ड एक अल्पकालिक कर्ज़ उपकरण है। अभी खर्च करें, नियत तिथि तक चुकाएं।",
      },
    ],
    normal: [
      {
        q: "The credit card billing cycle works as follows…",
        q_hi: "क्रेडिट कार्ड बिलिंग चक्र इस प्रकार काम करता है…",
        opts: ["You are charged interest from day 1 of every purchase", "Purchases in the statement period are billed together; no interest if paid in full by due date", "You can spend unlimited with zero repayment", "Interest is charged only on weekdays"],
        opts_hi: ["हर खरीदारी के पहले दिन से ब्याज", "स्टेटमेंट अवधि में खरीदारियाँ एक साथ बिल; नियत तिथि तक पूरा चुकाने पर कोई ब्याज नहीं", "शून्य पुनर्भुगतान के साथ असीमित खर्च", "केवल कार्यदिवसों पर ब्याज"],
        ans: 1,
        exp: "Statement period (~30 days) + grace period (15–21 days). Pay in full within grace period = zero interest.",
        exp_hi: "स्टेटमेंट अवधि (~30 दिन) + ग्रेस अवधि (15–21 दिन)। ग्रेस में पूरा चुकाएं = शून्य ब्याज।",
      },
    ],
    advanced: [
      {
        q: "Paying only the minimum amount due on a credit card is dangerous because…",
        q_hi: "क्रेडिट कार्ड पर केवल न्यूनतम देय राशि चुकाना खतरनाक है क्योंकि…",
        opts: ["The bank cancels your card after one minimum payment", "The outstanding balance accrues interest at 36–42% APR and takes years to repay", "There is no danger — minimum payment is recommended", "It reduces your credit limit immediately"],
        opts_hi: ["एक न्यूनतम भुगतान के बाद बैंक कार्ड रद्द करता है", "बकाया बैलेंस 36-42% APR पर ब्याज जमा करता है और चुकाने में साल लगते हैं", "कोई खतरा नहीं", "यह तुरंत क्रेडिट सीमा कम करता है"],
        ans: 1,
        exp: "Credit card interest is 3–3.5%/month (36–42% annually). A ₹10,000 balance on minimum payment can take 5+ years and cost ₹30,000+ in interest.",
        exp_hi: "क्रेडिट कार्ड ब्याज 3–3.5%/माह (36–42% सालाना)। ₹10,000 का बैलेंस केवल न्यूनतम चुकाने पर 5+ साल और ₹30,000+ ब्याज लग सकता है।",
      },
    ],
  },

  // ── crd5 · Smart Credit Card Use ────────────────────────
  crd5: {
    beginner: [
      {
        q: "To use a credit card without falling into debt, you should…",
        q_hi: "क्रेडिट कार्ड से कर्ज़ में डूबे बिना उपयोग करने के लिए…",
        opts: ["Spend up to the maximum limit every month", "Only spend what you can afford to pay back in full by the due date", "Pay just the minimum amount every month", "Use the card for every possible purchase"],
        opts_hi: ["हर महीने अधिकतम सीमा तक खर्च", "केवल उतना खर्च जो नियत तिथि तक पूरा चुका सकें", "हर महीने केवल न्यूनतम राशि चुकाएं", "हर संभव खरीदारी के लिए कार्ड"],
        ans: 1,
        exp: "Treat a credit card like a debit card — only charge what your bank account can cover. Full payment monthly = free credit + rewards.",
        exp_hi: "क्रेडिट कार्ड को डेबिट कार्ड की तरह ट्रीट करें। पूर्ण मासिक भुगतान = मुफ्त क्रेडिट + पुरस्कार।",
      },
    ],
    normal: [
      {
        q: "Cashback and reward points are best used when…",
        q_hi: "कैशबैक और रिवार्ड पॉइंट सबसे अच्छे होते हैं जब…",
        opts: ["You carry a balance to earn more rewards", "You pay in full monthly — rewards are then genuinely free money", "You spend more than planned just to earn more rewards", "The card has the lowest limit possible"],
        opts_hi: ["अधिक पुरस्कार के लिए बैलेंस रखें", "पूरा मासिक चुकाएं — पुरस्कार तब वास्तव में मुफ्त पैसा हैं", "अधिक पुरस्कार के लिए योजना से अधिक खर्च", "कार्ड की सबसे कम सीमा हो"],
        ans: 1,
        exp: "Rewards are only worthwhile with zero interest. Carrying balance means paying 36% to earn 1–2% back.",
        exp_hi: "पुरस्कार तभी सार्थक जब शून्य ब्याज हो। बैलेंस रखने पर 1–2% वापस पाने के लिए 36% देते हैं।",
      },
    ],
    advanced: [
      {
        q: "When should you NOT use a credit card?",
        q_hi: "क्रेडिट कार्ड का उपयोग कब नहीं करना चाहिए?",
        opts: ["For grocery shopping", "When you are already struggling to pay last month's bill in full", "For flight bookings", "For online shopping with buyer protection"],
        opts_hi: ["किराने की खरीदारी के लिए", "जब पिछले महीने का पूरा बिल चुकाने में संघर्ष हो", "फ्लाइट बुकिंग के लिए", "ऑनलाइन खरीदारी के लिए"],
        ans: 1,
        exp: "If you can't pay last month's bill in full, adding more charges deepens the debt trap. Switch to cash/UPI until the card is clear.",
        exp_hi: "पिछले महीने का बिल पूरा न चुका सकें तो अधिक चार्ज कर्ज़ का जाल गहरा करते हैं। कार्ड साफ होने तक नकद/UPI उपयोग करें।",
      },
    ],
  },

  // ── crd6 · Personal Loans ────────────────────────────────
  crd6: {
    beginner: [
      {
        q: "A personal loan differs from a home loan because…",
        q_hi: "पर्सनल लोन होम लोन से अलग है क्योंकि…",
        opts: ["Personal loans are interest-free", "Personal loans are unsecured — no collateral needed — but at higher interest rates", "Personal loans always have lower rates", "Personal loans can only be used for travel"],
        opts_hi: ["पर्सनल लोन ब्याज-मुक्त हैं", "पर्सनल लोन असुरक्षित हैं — कोई संपार्श्विक नहीं — लेकिन उच्च ब्याज दर पर", "पर्सनल लोन में हमेशा कम ब्याज", "केवल यात्रा के लिए"],
        ans: 1,
        exp: "Personal loans need no collateral — hence interest rates of 10–24% vs 8–9% for home loans.",
        exp_hi: "पर्सनल लोन में संपार्श्विक नहीं — इसलिए होम लोन के 8-9% बनाम 10-24% ब्याज दर।",
      },
    ],
    normal: [
      {
        q: "A personal loan makes financial sense when…",
        q_hi: "पर्सनल लोन आर्थिक समझदारी है जब…",
        opts: ["Funding an impulse luxury purchase", "Consolidating multiple high-interest debts into one lower-rate loan", "Investing in stocks with borrowed money", "Buying consumer electronics on a whim"],
        opts_hi: ["आवेगी लग्ज़री खरीदारी के लिए", "कई उच्च-ब्याज कर्ज़ों को एक कम दर वाले में समेकित करना", "उधार से शेयरों में निवेश", "मन मर्ज़ी से इलेक्ट्रॉनिक्स खरीदना"],
        ans: 1,
        exp: "Debt consolidation — using a 12% personal loan to pay off 40% credit card debt — saves significant interest and simplifies repayment.",
        exp_hi: "12% पर पर्सनल लोन से 40% क्रेडिट कार्ड कर्ज़ चुकाने से महत्वपूर्ण ब्याज बचता है।",
      },
    ],
    advanced: [
      {
        q: "Always compare personal loans using APR rather than stated interest rate because…",
        q_hi: "पर्सनल लोन की तुलना हमेशा बताई गई दर की बजाय APR से करें क्योंकि…",
        opts: ["APR is always lower than the stated rate", "APR includes processing fees, insurance, and other charges — it reflects the true cost of borrowing", "APR only applies to home loans", "Banks are required to show a low APR"],
        opts_hi: ["APR हमेशा बताई गई दर से कम होती है", "APR में प्रोसेसिंग शुल्क, बीमा और अन्य शुल्क शामिल — यह उधार की वास्तविक लागत दर्शाता है", "APR केवल होम लोन पर लागू", "बैंक कम APR दिखाने के लिए बाध्य हैं"],
        ans: 1,
        exp: "An 11% loan with 3% processing + 1% insurance effectively costs 14–15% APR. Always ask for the APR before signing.",
        exp_hi: "3% प्रोसेसिंग + 1% बीमा के साथ 11% ब्याज वाले कर्ज़ की वास्तविक APR 14–15% होती है।",
      },
    ],
  },

  // ── crd7 · Home Loans ────────────────────────────────────
  crd7: {
    beginner: [
      {
        q: "An EMI on a home loan consists of…",
        q_hi: "होम लोन की EMI में शामिल है…",
        opts: ["Only the interest payment", "Both principal repayment and interest", "Only the property tax", "Only the bank's processing fee"],
        opts_hi: ["केवल ब्याज भुगतान", "मूलधन चुकाना और ब्याज दोनों", "केवल संपत्ति कर", "केवल बैंक का प्रोसेसिंग शुल्क"],
        ans: 1,
        exp: "Every EMI has two parts: principal (reduces loan balance) and interest (cost of borrowing). Early EMIs are interest-heavy; later ones are principal-heavy.",
        exp_hi: "हर EMI में दो भाग: मूलधन (कर्ज़ बैलेंस घटाता है) और ब्याज। शुरुआती EMI ब्याज-भारी; बाद वाली मूलधन-भारी।",
      },
    ],
    normal: [
      {
        q: "Home loan interest qualifies for tax deduction under which section?",
        q_hi: "होम लोन ब्याज किस धारा के तहत कर कटौती के लिए योग्य है?",
        opts: ["Section 80C", "Section 24(b) — up to ₹2 lakh/year for a self-occupied property", "Section 80D", "Section 10(10D)"],
        opts_hi: ["धारा 80C", "धारा 24(b) — स्व-अधिकृत संपत्ति के लिए ₹2 लाख/वर्ष तक", "धारा 80D", "धारा 10(10D)"],
        ans: 1,
        exp: "Section 24(b): up to ₹2 lakh/year deduction on home loan interest for self-occupied property. Principal repayment qualifies under 80C.",
        exp_hi: "धारा 24(b): स्व-अधिकृत संपत्ति पर ₹2 लाख/वर्ष तक ब्याज कटौती। मूलधन पुनर्भुगतान 80C के तहत।",
      },
    ],
    advanced: [
      {
        q: "A floating rate home loan is better than a fixed rate when…",
        q_hi: "फ्लोटिंग रेट होम लोन फिक्स्ड रेट से बेहतर है जब…",
        opts: ["Interest rates are expected to rise significantly", "Interest rates are expected to fall or stay stable over the loan tenure", "You plan to repay within 2 years", "You want complete EMI certainty"],
        opts_hi: ["ब्याज दरें काफी बढ़ने की उम्मीद हो", "कर्ज़ अवधि में दरें गिरने या स्थिर रहने की उम्मीद हो", "2 साल में चुकाने की योजना हो", "पूर्ण EMI निश्चितता चाहिए"],
        ans: 1,
        exp: "Floating rates adjust with repo rate. In a falling rate environment, your EMI or tenure reduces. Fixed rates are typically 1–2% higher upfront.",
        exp_hi: "फ्लोटिंग दरें रेपो दर के साथ समायोजित होती हैं। गिरती दर में EMI या अवधि कम होती है।",
      },
    ],
  },

  // ── crd8 · Getting Out of Debt ───────────────────────────
  crd8: {
    beginner: [
      {
        q: "The 'debt snowball' method means…",
        q_hi: "'डेट स्नोबॉल' विधि का मतलब है…",
        opts: ["Paying all debts equally each month", "Paying off the smallest debt first for quick wins, then rolling that payment to the next", "Taking a new loan to pay all old debts", "Ignoring interest rates and paying randomly"],
        opts_hi: ["हर महीने सभी कर्ज़ों को समान रूप से चुकाना", "त्वरित जीत के लिए पहले सबसे छोटा कर्ज़ चुकाना, फिर वह भुगतान अगले पर", "सभी पुराने कर्ज़ के लिए नया कर्ज़", "ब्याज दरों को नजरअंदाज करके यादृच्छिक भुगतान"],
        ans: 1,
        exp: "Snowball: pay minimums on all, put extra on the smallest balance. When gone, add that payment to the next smallest. Builds momentum.",
        exp_hi: "स्नोबॉल: सभी पर न्यूनतम, सबसे छोटे पर अतिरिक्त। खत्म होने पर वह भुगतान अगले पर। गति बनती है।",
      },
    ],
    normal: [
      {
        q: "The 'debt avalanche' method is mathematically superior because…",
        q_hi: "'डेट एवलांच' विधि गणितीय रूप से बेहतर है क्योंकि…",
        opts: ["It is emotionally more satisfying", "It targets the highest-interest debt first, minimising total interest paid", "It requires no budgeting", "It works only for credit card debt"],
        opts_hi: ["यह भावनात्मक रूप से संतोषजनक है", "यह पहले सबसे अधिक ब्याज वाले कर्ज़ को लक्षित करता है, कुल ब्याज न्यूनतम करता है", "बजटिंग की आवश्यकता नहीं", "केवल क्रेडिट कार्ड कर्ज़ के लिए"],
        ans: 1,
        exp: "Avalanche: pay minimums everywhere, direct extra to highest-rate debt. Costs less total interest than snowball — but needs more patience.",
        exp_hi: "एवलांच: सब जगह न्यूनतम, अतिरिक्त सबसे अधिक दर वाले पर। स्नोबॉल से कम कुल ब्याज — लेकिन अधिक धैर्य चाहिए।",
      },
    ],
    advanced: [
      {
        q: "To stop borrowing more debt while repaying existing debt, the most effective structural step is…",
        q_hi: "मौजूदा कर्ज़ चुकाते समय और अधिक उधार रोकने का सबसे प्रभावी कदम है…",
        opts: ["Cutting all your credit cards", "Identifying the root trigger (under-income or over-spending) and fixing it with a written budget", "Hiding your card from yourself", "Asking friends to monitor your spending"],
        opts_hi: ["सभी क्रेडिट कार्ड काटना", "मूल कारण (कम आय या अधिक खर्च) पहचानना और लिखित बजट से ठीक करना", "खुद से कार्ड छिपाना", "दोस्तों को खर्च देखने को कहना"],
        ans: 1,
        exp: "Debt is a symptom. If income < expenses, you'll keep borrowing regardless of willpower. A written budget that closes the gap structurally ends new debt.",
        exp_hi: "कर्ज़ एक लक्षण है। आय < खर्च हो तो उधार लेते रहेंगे। अंतर बंद करने वाला लिखित बजट नया कर्ज़ खत्म करता है।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 05 · Insurance Fundamentals
  // ═══════════════════════════════════════════════════════════

  // ── ins1 · Why Insurance? ────────────────────────────────
  ins1: {
    beginner: [
      {
        q: "Insurance works by…",
        q_hi: "बीमा काम करता है…",
        opts: ["Guaranteeing you will never face problems", "Pooling premiums from many people to pay the claims of the few who face losses", "Doubling your money over time", "Replacing the need to save money"],
        opts_hi: ["गारंटी देकर कि समस्या नहीं होगी", "कई लोगों से प्रीमियम इकट्ठा करके नुकसान उठाने वालों के दावे चुकाना", "समय के साथ पैसा दोगुना करना", "बचत की ज़रूरत खत्म करना"],
        ans: 1,
        exp: "Insurance is risk pooling. Millions pay small premiums; the unlucky few who suffer losses are compensated from that common pool.",
        exp_hi: "बीमा जोखिम पूलिंग है। लाखों छोटे प्रीमियम देते हैं; नुकसान उठाने वाले कुछ लोगों को सामान्य पूल से मुआवज़ा मिलता है।",
      },
    ],
    normal: [
      {
        q: "Why is pure insurance NOT a good investment?",
        q_hi: "शुद्ध बीमा एक अच्छा निवेश क्यों नहीं है?",
        opts: ["Insurance companies are untrustworthy", "Pure insurance (term, health) provides no investment return — it is protection, not growth", "Insurance is banned for investment use", "SEBI does not allow it"],
        opts_hi: ["बीमा कंपनियाँ अविश्वसनीय हैं", "शुद्ध बीमा कोई निवेश रिटर्न नहीं देता — यह सुरक्षा है, वृद्धि नहीं", "निवेश उपयोग के लिए प्रतिबंधित", "SEBI अनुमति नहीं देता"],
        ans: 1,
        exp: "Pure insurance pays only on a claim. If you don't claim, you get nothing back — that's the cost of protection. Keep insurance and investments separate.",
        exp_hi: "शुद्ध बीमा केवल दावे पर भुगतान करता है। दावा न करने पर कुछ नहीं मिलता — यह सुरक्षा की लागत है।",
      },
    ],
    advanced: [
      {
        q: "Risk pooling works best when…",
        q_hi: "जोखिम पूलिंग सबसे अच्छा काम करती है जब…",
        opts: ["All policyholders face the same risk simultaneously", "Risks are independent across a large population — not everyone facing the same event at once", "Everyone makes a claim in the same year", "The insurer has no reinsurance"],
        opts_hi: ["सभी पॉलिसीधारक एक साथ एक ही जोखिम का सामना करते हैं", "जोखिम बड़ी आबादी में स्वतंत्र हैं — सभी एक साथ नहीं", "सभी एक ही साल में दावा करते हैं", "बीमाकर्ता के पास पुनर्बीमा नहीं"],
        ans: 1,
        exp: "Pooling works when individual risks are independent. A pandemic breaks this (everyone claims at once) — that's why pandemics are usually exclusions.",
        exp_hi: "पूलिंग तब काम करती है जब व्यक्तिगत जोखिम स्वतंत्र हों। महामारी इसे तोड़ती है — इसलिए आमतौर पर बहिष्करण होती हैं।",
      },
    ],
  },

  // ── ins2 · Term Life Insurance ───────────────────────────
  ins2: {
    beginner: [
      {
        q: "Term insurance pays out…",
        q_hi: "टर्म बीमा भुगतान करता है…",
        opts: ["Every month as a savings plan", "Only if the policyholder dies within the policy term", "Double the premium after 5 years", "When you retire"],
        opts_hi: ["बचत योजना के रूप में हर महीने", "केवल तभी अगर पॉलिसीधारक पॉलिसी अवधि के भीतर मर जाता है", "5 साल बाद प्रीमियम का दोगुना", "सेवानिवृत्ति पर"],
        ans: 1,
        exp: "Term insurance is pure death cover. If you survive the term, you receive nothing — but your family is protected if you don't.",
        exp_hi: "टर्म बीमा शुद्ध मृत्यु कवर है। अवधि तक जीवित रहने पर कुछ नहीं — लेकिन परिवार सुरक्षित रहता है।",
      },
    ],
    normal: [
      {
        q: "A rule of thumb for the right term insurance cover amount is…",
        q_hi: "सही टर्म बीमा कवर राशि के लिए अंगूठे का नियम है…",
        opts: ["₹5 lakh regardless of income", "10–15x your annual income", "Exactly your home loan outstanding", "Your age × ₹1,000"],
        opts_hi: ["आय की परवाह किए बिना ₹5 लाख", "वार्षिक आय का 10–15 गुना", "बिल्कुल होम लोन बकाया के बराबर", "आयु × ₹1,000"],
        ans: 1,
        exp: "10–15x annual income lets your family replace your income via interest on the corpus. Add outstanding debts and child education costs.",
        exp_hi: "वार्षिक आय का 10–15 गुना परिवार को आय की भरपाई करने देता है। बकाया कर्ज़ और बच्चे की शिक्षा लागत जोड़ें।",
      },
    ],
    advanced: [
      {
        q: "Term insurance premiums are low relative to cover because…",
        q_hi: "टर्म बीमा प्रीमियम कवर की तुलना में कम हैं क्योंकि…",
        opts: ["The company doesn't pay most claims", "Most policyholders survive the term — statistically few claims, premiums spread over many", "The government subsidises term insurance", "It only covers accidental death"],
        opts_hi: ["कंपनी अधिकांश दावे नहीं देती", "अधिकांश पॉलिसीधारक अवधि तक जीवित रहते हैं — कम दावे, प्रीमियम कई लोगों में फैले", "सरकार सब्सिडी देती है", "केवल आकस्मिक मृत्यु कवर करता है"],
        ans: 1,
        exp: "Most 30-year-olds buying a 30-year term plan will survive. Low claims probability + large pool = low premium per lakh of cover.",
        exp_hi: "30 साल की उम्र में 30 साल का प्लान खरीदने वाले अधिकांश लोग जीवित रहेंगे। कम दावे + बड़ा पूल = कम प्रीमियम।",
      },
    ],
  },

  // ── ins3 · Health Insurance ──────────────────────────────
  ins3: {
    beginner: [
      {
        q: "Health insurance helps you by…",
        q_hi: "स्वास्थ्य बीमा आपकी मदद करता है…",
        opts: ["Preventing all illnesses", "Covering medical and hospitalisation expenses so you don't pay from savings", "Giving you monthly income when sick", "Replacing life insurance"],
        opts_hi: ["सभी बीमारियाँ रोकना", "चिकित्सा और अस्पताल के खर्चों को कवर करना ताकि बचत से भुगतान न करना पड़े", "बीमार होने पर मासिक आय देना", "जीवन बीमा की जगह लेना"],
        ans: 1,
        exp: "Health insurance pays for hospitalisation, surgery, and treatment. Without it, one emergency can wipe out years of savings.",
        exp_hi: "स्वास्थ्य बीमा अस्पताल, सर्जरी और उपचार लागत का भुगतान करता है। इसके बिना एक आपात स्थिति सालों की बचत खत्म कर सकती है।",
      },
    ],
    normal: [
      {
        q: "A family floater health plan is…",
        q_hi: "फैमिली फ्लोटर स्वास्थ्य योजना है…",
        opts: ["A plan covering only the head of the family", "A single policy covering all family members sharing one sum insured", "Individual plans for each family member", "A plan only for children under 12"],
        opts_hi: ["केवल परिवार के मुखिया को कवर करने वाली योजना", "सभी परिवार के सदस्यों को एक बीमित राशि साझा करते हुए कवर करने वाली एकल पॉलिसी", "प्रत्येक सदस्य के लिए व्यक्तिगत योजनाएं", "12 साल से कम बच्चों के लिए"],
        ans: 1,
        exp: "Family floater: one sum insured (e.g. ₹10 lakh) shared by all. One member using most of it leaves less for others that year. Usually cheaper than individual policies.",
        exp_hi: "फैमिली फ्लोटर: एक बीमित राशि सभी द्वारा साझा। एक सदस्य अधिक उपयोग करे तो दूसरों के लिए कम बचता है।",
      },
    ],
    advanced: [
      {
        q: "Cashless hospitalisation means…",
        q_hi: "कैशलेस अस्पताल में भर्ती का मतलब है…",
        opts: ["The hospital charges nothing at all", "The insurer directly settles the bill with a network hospital — you don't pay upfront", "You pay and are never reimbursed", "Only available in government hospitals"],
        opts_hi: ["अस्पताल कुछ भी नहीं लेता", "बीमाकर्ता सीधे नेटवर्क अस्पताल के साथ बिल का निपटान करता है — अग्रिम भुगतान नहीं", "आप भुगतान करते हैं और कभी प्रतिपूर्ति नहीं मिलती", "केवल सरकारी अस्पतालों में"],
        ans: 1,
        exp: "Show your health card at a network hospital, get treated, and the insurer pays directly. Only available at network hospitals.",
        exp_hi: "नेटवर्क अस्पताल में हेल्थ कार्ड दिखाएं, इलाज कराएं, बीमाकर्ता सीधे भुगतान करता है।",
      },
    ],
  },

  // ── ins4 · Health Insurance Pitfalls ────────────────────
  ins4: {
    beginner: [
      {
        q: "A waiting period in health insurance means…",
        q_hi: "स्वास्थ्य बीमा में प्रतीक्षा अवधि का मतलब है…",
        opts: ["Time you wait at the hospital counter", "A period after buying the policy during which certain claims are not covered", "Time taken to process your premium payment", "Waiting for the premium receipt"],
        opts_hi: ["अस्पताल काउंटर पर प्रतीक्षा", "पॉलिसी खरीदने के बाद की अवधि जिसमें कुछ दावे कवर नहीं होते", "प्रीमियम भुगतान प्रोसेस होने में समय", "प्रीमियम रसीद का इंतज़ार"],
        ans: 1,
        exp: "Initial waiting periods: 30–90 days for general illness, 1–4 years for pre-existing conditions. Buy early, before health issues develop.",
        exp_hi: "प्रारंभिक प्रतीक्षा अवधि: सामान्य बीमारी के लिए 30–90 दिन, पहले से मौजूद बीमारियों के लिए 1–4 साल।",
      },
    ],
    normal: [
      {
        q: "Corporate health insurance from your employer is insufficient as standalone cover because…",
        q_hi: "नियोक्ता का कॉर्पोरेट स्वास्थ्य बीमा अकेले पर्याप्त नहीं है क्योंकि…",
        opts: ["Employers are not allowed to provide health insurance", "It lapses the moment you leave the job, leaving you uninsured when you may need it most", "Corporate plans always have higher premiums", "It only covers dental expenses"],
        opts_hi: ["नियोक्ता बीमा देने की अनुमति नहीं", "नौकरी छोड़ते ही समाप्त — जब सबसे ज़रूरत हो तब बिना बीमा", "कॉर्पोरेट योजनाओं में हमेशा अधिक प्रीमियम", "केवल दंत चिकित्सा खर्च कवर"],
        ans: 1,
        exp: "Corporate cover ends with employment. Always maintain a personal health policy alongside employer cover.",
        exp_hi: "कॉर्पोरेट कवर रोजगार के साथ समाप्त। नियोक्ता कवर के साथ व्यक्तिगत स्वास्थ्य पॉलिसी हमेशा रखें।",
      },
    ],
    advanced: [
      {
        q: "A co-pay in health insurance means…",
        q_hi: "स्वास्थ्य बीमा में को-पे का मतलब है…",
        opts: ["The insurer pays everything", "You pay a fixed percentage of the claim; the insurer pays the rest", "Both spouses hold the policy together", "A discount for senior citizens"],
        opts_hi: ["बीमाकर्ता सब कुछ देता है", "आप दावे का एक निश्चित प्रतिशत देते हैं; बीमाकर्ता बाकी", "आप और जीवनसाथी दोनों मिलकर पॉलिसी रखते हैं", "वरिष्ठ नागरिकों को छूट"],
        ans: 1,
        exp: "20% co-pay on a ₹1 lakh claim: you pay ₹20,000; insurer pays ₹80,000. Co-pay reduces premiums but shares the financial burden — avoid high co-pay policies.",
        exp_hi: "₹1 लाख दावे पर 20% को-पे: आप ₹20,000; बीमाकर्ता ₹80,000। को-पे प्रीमियम कम करता है लेकिन बोझ साझा होता है।",
      },
    ],
  },

  // ── ins5 · Vehicle Insurance ─────────────────────────────
  ins5: {
    beginner: [
      {
        q: "Third-party vehicle insurance is mandatory in India because…",
        q_hi: "भारत में तृतीय-पक्ष वाहन बीमा अनिवार्य है क्योंकि…",
        opts: ["It covers repair of your own vehicle", "It protects others who may be injured or whose property may be damaged by your vehicle", "It gives you roadside assistance", "It is optional — just recommended by RTO"],
        opts_hi: ["यह आपके वाहन की मरम्मत कवर करता है", "यह उन लोगों की रक्षा करता है जो आपके वाहन से चोटिल हो सकते हैं", "रोडसाइड सहायता देता है", "वैकल्पिक है — RTO द्वारा अनुशंसित"],
        ans: 1,
        exp: "Third-party insurance is legally required under the Motor Vehicles Act. It compensates third parties for injuries or property damage caused by your vehicle.",
        exp_hi: "तृतीय-पक्ष बीमा मोटर वाहन अधिनियम के तहत अनिवार्य है।",
      },
    ],
    normal: [
      {
        q: "Comprehensive vehicle insurance differs from third-party because…",
        q_hi: "व्यापक वाहन बीमा तृतीय-पक्ष से अलग है क्योंकि…",
        opts: ["Comprehensive is cheaper than third-party", "Comprehensive also covers damage to your own vehicle (accident, theft, natural disaster)", "Comprehensive only covers theft, not accidents", "Both are identical in coverage"],
        opts_hi: ["व्यापक तृतीय-पक्ष से सस्ता है", "व्यापक आपके अपने वाहन की क्षति (दुर्घटना, चोरी, प्राकृतिक आपदा) भी कवर करता है", "केवल चोरी कवर", "दोनों समान"],
        ans: 1,
        exp: "Comprehensive = third-party liability + own damage. Costs more but protects you from repair costs too. Essential for new or expensive vehicles.",
        exp_hi: "व्यापक = तृतीय-पक्ष दायित्व + अपनी क्षति। अधिक महंगा लेकिन मरम्मत लागत से भी सुरक्षा।",
      },
    ],
    advanced: [
      {
        q: "Your No Claim Bonus (NCB) on vehicle insurance increases when…",
        q_hi: "NCB कब बढ़ता है…",
        opts: ["You make frequent small claims", "You do not make any claim during a policy year", "You upgrade your vehicle", "You add more riders to the policy"],
        opts_hi: ["आप बार-बार छोटे दावे करते हैं", "एक पॉलिसी वर्ष के दौरान कोई दावा नहीं", "आप वाहन अपग्रेड करते हैं", "पॉलिसी में और राइडर जोड़ते हैं"],
        ans: 1,
        exp: "NCB rewards claim-free years with up to 50% discount on own-damage premium after 5 consecutive claim-free years.",
        exp_hi: "NCB दावा-मुक्त वर्षों को 5 लगातार वर्षों के बाद अपनी क्षति प्रीमियम पर 50% तक छूट से पुरस्कृत करता है।",
      },
    ],
  },

  // ── ins6 · Avoid Bad Insurance ──────────────────────────
  ins6: {
    beginner: [
      {
        q: "Endowment plans mix insurance and investment, which is a problem because…",
        q_hi: "एंडोमेंट योजनाएं बीमा और निवेश मिलाती हैं, जो समस्या है क्योंकि…",
        opts: ["They are illegal in India", "You get low insurance cover AND low investment returns — neither does its job well", "They are only for NRIs", "They pay too much on death claims"],
        opts_hi: ["वे भारत में अवैध हैं", "कम बीमा कवर और कम निवेश रिटर्न — न तो बीमा अच्छा, न निवेश", "केवल NRI के लिए", "मृत्यु दावों पर बहुत अधिक भुगतान"],
        ans: 1,
        exp: "Endowment plans offer 4–6% returns (below inflation) and inadequate life cover. Better: pure term plan + invest separately in mutual funds.",
        exp_hi: "एंडोमेंट योजनाएं 4–6% रिटर्न (मुद्रास्फीति से कम) और अपर्याप्त कवर देती हैं। बेहतर: टर्म + म्यूचुअल फंड अलग।",
      },
    ],
    normal: [
      {
        q: "ULIPs are often poor value because…",
        q_hi: "ULIPs अक्सर खराब मूल्य होते हैं क्योंकि…",
        opts: ["They cannot be surrendered early", "High charges (premium allocation, fund management, mortality) eat returns — especially in early years", "They don't invest in the stock market", "The government taxes them at 50%"],
        opts_hi: ["जल्दी सरेंडर नहीं किया जा सकता", "उच्च शुल्क रिटर्न खा जाते हैं — खासकर शुरुआती वर्षों में", "शेयर बाज़ार में निवेश नहीं करते", "सरकार 50% कर लेती है"],
        ans: 1,
        exp: "ULIP charges can reduce returns to 4–6% even if markets deliver 12%. Surrender early and switch to term + mutual funds.",
        exp_hi: "ULIP शुल्क बाज़ार 12% देने पर भी रिटर्न 4–6% तक कम कर सकते हैं।",
      },
    ],
    advanced: [
      {
        q: "The 'buy term and invest the rest' strategy beats endowment plans because…",
        q_hi: "'टर्म खरीदें और बाकी निवेश करें' रणनीति एंडोमेंट से बेहतर है क्योंकि…",
        opts: ["Term insurance is risk-free like FDs", "You get 10–20x more life cover at same cost, and equity investments deliver 12%+ vs 4–5% endowment returns", "Endowment plans are not regulated", "It avoids all taxes"],
        opts_hi: ["टर्म FD जैसा जोखिम-मुक्त है", "समान लागत पर 10–20 गुना अधिक कवर और इक्विटी 12%+ बनाम 4–5% एंडोमेंट", "एंडोमेंट विनियमित नहीं", "सभी करों से बचाता है"],
        ans: 1,
        exp: "₹50,000/year on term = ₹1 crore cover. ₹50,000/year on endowment = ₹5–10 lakh cover + poor returns. Separate and optimise each.",
        exp_hi: "₹50,000/वर्ष टर्म पर = ₹1 करोड़ कवर। एंडोमेंट पर = ₹5–10 लाख कवर + कम रिटर्न।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 06 · Tax Simplified
  // ═══════════════════════════════════════════════════════════

  // ── tax1 · Income Tax Basics ─────────────────────────────
  tax1: {
    beginner: [
      {
        q: "Income tax in India is…",
        q_hi: "भारत में आयकर है…",
        opts: ["A fee charged by banks", "A direct tax paid to the government on your income, based on slabs", "A service fee paid to shops", "A fixed amount paid by every citizen"],
        opts_hi: ["बैंकों द्वारा लिया शुल्क", "स्लैब के आधार पर आय पर सरकार को भुगतान प्रत्यक्ष कर", "दुकानों को सेवा शुल्क", "हर नागरिक द्वारा निश्चित राशि"],
        ans: 1,
        exp: "Income tax is a percentage of your annual income paid to the government. Higher earners pay higher rates — this is the slab system.",
        exp_hi: "आयकर आपकी वार्षिक आय का एक प्रतिशत है जो सरकार को देते हैं। अधिक कमाने वाले अधिक दर देते हैं — स्लैब प्रणाली।",
      },
    ],
    normal: [
      {
        q: "Under the new tax regime (FY 2024-25), income up to ₹7 lakh is effectively…",
        q_hi: "नई कर व्यवस्था (FY 2024-25) में ₹7 लाख तक की आय पर प्रभावी रूप से…",
        opts: ["Taxed at 30%", "Zero tax due to the ₹25,000 rebate under Section 87A", "Fully exempt without any conditions", "Taxed at 5%"],
        opts_hi: ["30% कर", "धारा 87A के तहत ₹25,000 छूट के कारण शून्य कर", "किसी शर्त के बिना पूरी तरह छूट", "5% कर"],
        ans: 1,
        exp: "Section 87A rebate of ₹25,000 makes net tax zero for income up to ₹7 lakh. Above that, slabs apply (5%, 10%, 15%, 20%, 30%).",
        exp_hi: "धारा 87A की ₹25,000 छूट ₹7 लाख तक आय पर शुद्ध कर शून्य बनाती है। ऊपर स्लैब लागू।",
      },
    ],
    advanced: [
      {
        q: "Old tax regime benefits most when…",
        q_hi: "पुरानी कर व्यवस्था सबसे अधिक फायदेमंद होती है जब…",
        opts: ["You have no deductions or investments", "You have large 80C, HRA, home loan interest, and 80D claims exceeding the new regime tax saving", "You earn below ₹5 lakh", "You only have FD income"],
        opts_hi: ["कोई कटौती या निवेश नहीं", "बड़े 80C, HRA, होम लोन ब्याज और 80D दावे नई व्यवस्था की बचत से अधिक हों", "₹5 लाख से कम कमाते हैं", "केवल FD आय"],
        ans: 1,
        exp: "Old regime rewards heavy 80C + 80D + HRA + home loan investment. New regime suits those with fewer deductions — lower rates but no exemptions.",
        exp_hi: "पुरानी व्यवस्था 80C + 80D + HRA + होम लोन को पुरस्कृत करती है। नई व्यवस्था कम कटौती वालों के लिए उपयुक्त।",
      },
    ],
  },

  // ── tax2 · TDS Explained ─────────────────────────────────
  tax2: {
    beginner: [
      {
        q: "TDS stands for…",
        q_hi: "TDS का मतलब है…",
        opts: ["Total Deposit Savings", "Tax Deducted at Source — tax cut from income before you receive it", "Transfer Deposit System", "Tax Deferred Savings"],
        opts_hi: ["कुल जमा बचत", "स्रोत पर कर कटौती — आपको मिलने से पहले काटा गया कर", "स्थानांतरण जमा प्रणाली", "कर स्थगित बचत"],
        ans: 1,
        exp: "TDS is deducted before income reaches you — your employer deducts it from salary; banks deduct it from FD interest above ₹40,000/year.",
        exp_hi: "TDS आय आपको मिलने से पहले काटा जाता है — नियोक्ता वेतन से, बैंक ₹40,000/वर्ष से अधिक FD ब्याज पर।",
      },
    ],
    normal: [
      {
        q: "You can claim a TDS refund when…",
        q_hi: "TDS रिफंड का दावा कब कर सकते हैं…",
        opts: ["You want to avoid paying all taxes", "TDS deducted exceeds your actual tax liability after filing ITR", "You never file an ITR", "Your employer decides to give it"],
        opts_hi: ["सभी करों से बचना चाहते हैं", "ITR दाखिल करने के बाद TDS कटौती वास्तविक कर देनदारी से अधिक है", "कभी ITR दाखिल नहीं करते", "नियोक्ता देने का फैसला करता है"],
        ans: 1,
        exp: "If more TDS was cut than your actual tax, the excess is refunded by the IT department after you file ITR. Typically processed in 2–4 months.",
        exp_hi: "वास्तविक कर से अधिक TDS कटने पर ITR दाखिल करने के बाद IT विभाग अधिशेष वापस करता है।",
      },
    ],
    advanced: [
      {
        q: "Form 26AS is important because it shows…",
        q_hi: "फॉर्म 26AS महत्वपूर्ण है क्योंकि यह दिखाता है…",
        opts: ["Your loan repayment history", "All TDS deducted and deposited against your PAN — critical for ITR filing and refund claims", "Your monthly savings balance", "Your CIBIL score history"],
        opts_hi: ["कर्ज़ चुकाने का इतिहास", "PAN के विरुद्ध काटे और जमा किए गए सभी TDS — ITR और रिफंड दावों के लिए महत्वपूर्ण", "मासिक बचत बैलेंस", "CIBIL स्कोर इतिहास"],
        ans: 1,
        exp: "Form 26AS is your tax credit statement. Always verify TDS in 26AS matches your salary slips and FD certificates before filing ITR.",
        exp_hi: "फॉर्म 26AS आपका कर क्रेडिट स्टेटमेंट है। ITR दाखिल करने से पहले वेतन पर्ची और FD प्रमाणपत्रों से मिलान करें।",
      },
    ],
  },

  // ── tax3 · Save Tax Under 80C ────────────────────────────
  tax3: {
    beginner: [
      {
        q: "Section 80C allows you to…",
        q_hi: "धारा 80C आपको अनुमति देती है…",
        opts: ["Avoid paying any taxes permanently", "Deduct up to ₹1.5 lakh from taxable income through qualifying investments", "Earn double interest on savings", "Open a tax-free bank account"],
        opts_hi: ["स्थायी रूप से कोई कर न देना", "अर्हता प्राप्त निवेशों से कर योग्य आय से ₹1.5 लाख तक कटौती", "बचत पर दोगुना ब्याज", "कर-मुक्त बैंक खाता"],
        ans: 1,
        exp: "Section 80C: invest up to ₹1.5 lakh/year in ELSS, PPF, NSC, life insurance premium, EPF etc. and deduct that from taxable income.",
        exp_hi: "धारा 80C: ELSS, PPF, NSC, जीवन बीमा प्रीमियम, EPF आदि में ₹1.5 लाख/वर्ष तक निवेश करें और कर योग्य आय से घटाएं।",
      },
    ],
    normal: [
      {
        q: "The best 80C investment for wealth creation (not just tax saving) is…",
        q_hi: "संपत्ति निर्माण के लिए सबसे अच्छा 80C निवेश है…",
        opts: ["Life insurance endowment plans", "ELSS — market-linked returns with only a 3-year lock-in", "NSC — fixed 7% returns", "ULIPs"],
        opts_hi: ["जीवन बीमा एंडोमेंट योजनाएं", "ELSS — केवल 3 साल के लॉक-इन के साथ बाज़ार-संबद्ध रिटर्न", "NSC — तय 7% रिटर्न", "ULIPs"],
        ans: 1,
        exp: "ELSS invests in equities, historically delivering 12–15% CAGR, beating PPF and NSC. Shortest lock-in (3 years) among 80C options.",
        exp_hi: "ELSS इक्विटी में निवेश, ऐतिहासिक रूप से 12–15% CAGR। 80C विकल्पों में सबसे कम लॉक-इन (3 साल)।",
      },
    ],
    advanced: [
      {
        q: "ELSS vs PPF for a 30-year-old with a 20-year horizon — which is better?",
        q_hi: "20 साल के क्षितिज वाले 30 साल के व्यक्ति के लिए ELSS बनाम PPF — कौन बेहतर?",
        opts: ["PPF — risk-free with fixed returns", "ELSS — equity outperforms over 20 years; 3-year lock-in vs 15-year PPF lock-in gives more flexibility", "Both are identical in outcome", "PPF — ELSS has no tax benefits"],
        opts_hi: ["PPF — जोखिम-मुक्त और तय रिटर्न", "ELSS — 20 साल में इक्विटी बेहतर; 3 साल लॉक-इन 15 साल PPF से अधिक लचीला", "दोनों परिणाम में समान", "PPF — ELSS में कोई कर लाभ नहीं"],
        ans: 1,
        exp: "Over 20 years, ELSS equity returns (12–15% historically) significantly outpace PPF (7.1%). ELSS LTCG above ₹1 lakh taxed at only 10%.",
        exp_hi: "20 वर्षों में ELSS (12–15%) PPF (7.1%) से काफी आगे। ₹1 लाख से अधिक LTCG पर केवल 10% कर।",
      },
    ],
  },

  // ── tax4 · Other Tax Deductions ──────────────────────────
  tax4: {
    beginner: [
      {
        q: "Section 80D lets you deduct health insurance premiums paid for…",
        q_hi: "धारा 80D किसके लिए भुगतान किए गए स्वास्थ्य बीमा प्रीमियम घटाने देती है…",
        opts: ["Vehicle insurance", "Yourself, spouse, children, and parents — higher limits for senior citizen parents", "Only employer-provided insurance", "Travel insurance only"],
        opts_hi: ["वाहन बीमा", "स्वयं, जीवनसाथी, बच्चे और माता-पिता — वरिष्ठ नागरिक माता-पिता के लिए उच्च सीमा", "केवल नियोक्ता द्वारा प्रदान बीमा", "केवल यात्रा बीमा"],
        ans: 1,
        exp: "80D: ₹25,000 for self+family; extra ₹25,000 for parents (₹50,000 if senior citizens). Preventive health check-up covered up to ₹5,000.",
        exp_hi: "80D: स्वयं+परिवार के लिए ₹25,000; माता-पिता के लिए अतिरिक्त ₹25,000 (वरिष्ठ नागरिक होने पर ₹50,000)।",
      },
    ],
    normal: [
      {
        q: "HRA exemption is available when…",
        q_hi: "HRA छूट कब उपलब्ध है…",
        opts: ["You own the house you live in", "You are a salaried employee living in a rented house and receive HRA from your employer", "You are self-employed", "You pay rent informally to a friend"],
        opts_hi: ["आप जिस घर में रहते हैं वह आपका है", "आप वेतनभोगी कर्मचारी हैं किराये के घर में और नियोक्ता से HRA प्राप्त करते हैं", "आप स्व-नियोजित हैं", "दोस्त को अनौपचारिक किराया"],
        ans: 1,
        exp: "HRA exemption requires: actual HRA received, rent paid > 10% of basic salary, living in a rented home. Self-employed can claim under Section 80GG.",
        exp_hi: "HRA छूट के लिए: प्राप्त वास्तविक HRA, किराया > मूल वेतन का 10%, किराये के घर में रहना।",
      },
    ],
    advanced: [
      {
        q: "Section 80CCD(1B) allows an additional ₹50,000 deduction for…",
        q_hi: "धारा 80CCD(1B) अतिरिक्त ₹50,000 कटौती की अनुमति देती है…",
        opts: ["Life insurance premium", "NPS contributions — over and above the ₹1.5 lakh 80C limit", "PPF contributions only", "ELSS investments"],
        opts_hi: ["जीवन बीमा प्रीमियम", "NPS अंशदान — ₹1.5 लाख 80C सीमा से ऊपर और अलावा", "केवल PPF अंशदान", "ELSS निवेश"],
        ans: 1,
        exp: "80CCD(1B) gives ₹50,000 extra NPS deduction on top of 80C. Combined: deduct up to ₹2 lakh from 80C + NPS alone.",
        exp_hi: "80CCD(1B) 80C के ऊपर अतिरिक्त ₹50,000 NPS कटौती देता है। मिलाकर 80C + NPS से ₹2 लाख तक।",
      },
    ],
  },

  // ── tax5 · Filing Your ITR ───────────────────────────────
  tax5: {
    beginner: [
      {
        q: "Filing an ITR is important because…",
        q_hi: "ITR दाखिल करना महत्वपूर्ण है क्योंकि…",
        opts: ["It is only for the wealthy", "It is a legal declaration of income, claims TDS refunds, and is needed for loans and visas", "It automatically increases your salary", "It reduces your health insurance premium"],
        opts_hi: ["यह केवल अमीरों के लिए है", "यह आय की कानूनी घोषणा है, TDS रिफंड का दावा करती है और कर्ज़/वीजा के लिए ज़रूरी है", "वेतन स्वतः बढ़ाती है", "स्वास्थ्य बीमा प्रीमियम कम करती है"],
        ans: 1,
        exp: "ITR is your annual tax declaration. Required for loan applications, visa processing, and claiming TDS refunds.",
        exp_hi: "ITR आपकी वार्षिक कर घोषणा है। कर्ज़ आवेदन, वीजा और TDS रिफंड दावों के लिए ज़रूरी।",
      },
    ],
    normal: [
      {
        q: "The due date for ITR filing for salaried individuals (without audit) is typically…",
        q_hi: "वेतनभोगी व्यक्तियों (ऑडिट के बिना) के लिए ITR की अंतिम तिथि आमतौर पर है…",
        opts: ["31st March", "31st July of the assessment year", "31st December", "15th August"],
        opts_hi: ["31 मार्च", "आकलन वर्ष की 31 जुलाई", "31 दिसंबर", "15 अगस्त"],
        ans: 1,
        exp: "For most salaried taxpayers, ITR must be filed by 31st July of the assessment year (for income earned in the previous financial year ending 31 March).",
        exp_hi: "अधिकांश वेतनभोगियों के लिए आकलन वर्ष की 31 जुलाई तक ITR दाखिल होनी चाहिए।",
      },
    ],
    advanced: [
      {
        q: "ITR-1 (Sahaj) is the correct form when income includes…",
        q_hi: "ITR-1 (सहज) सही फॉर्म है जब आय में शामिल है…",
        opts: ["Business income", "Salary/pension + one house property + other income (interest) up to ₹50 lakh total", "Capital gains from stocks", "Agricultural income above ₹5,000"],
        opts_hi: ["व्यापारिक आय", "वेतन/पेंशन + एक मकान + अन्य आय (ब्याज) कुल ₹50 लाख तक", "शेयरों से पूंजीगत लाभ", "₹5,000 से अधिक कृषि आय"],
        ans: 1,
        exp: "ITR-1 is for simple filers with income ≤ ₹50 lakh from salary, one property, and interest. Capital gains or business income require ITR-2 or ITR-3.",
        exp_hi: "ITR-1 वेतन, एक संपत्ति और ब्याज से ₹50 लाख तक के सरल फाइलरों के लिए है।",
      },
    ],
  },

  // ── tax6 · Capital Gains Tax ─────────────────────────────
  tax6: {
    beginner: [
      {
        q: "Capital gains tax applies when you…",
        q_hi: "पूंजीगत लाभ कर तब लागू होता है जब आप…",
        opts: ["Earn a salary", "Sell an asset (shares, property, gold) for more than you paid for it", "Pay your monthly EMI", "Open a bank FD"],
        opts_hi: ["वेतन कमाते हैं", "किसी संपत्ति (शेयर, प्रॉपर्टी, सोना) को खरीद मूल्य से अधिक पर बेचते हैं", "मासिक EMI देते हैं", "बैंक FD खोलते हैं"],
        ans: 1,
        exp: "Capital gains = sale price − purchase price. The gain is taxable. Rate depends on how long you held the asset.",
        exp_hi: "पूंजीगत लाभ = बिक्री मूल्य − खरीद मूल्य। लाभ कर योग्य है। दर इस पर निर्भर कि संपत्ति कितने समय रखी।",
      },
    ],
    normal: [
      {
        q: "Long-term capital gains (LTCG) on equity mutual funds above ₹1 lakh/year are taxed at…",
        q_hi: "इक्विटी म्यूचुअल फंड पर ₹1 लाख से अधिक LTCG पर कर लगता है…",
        opts: ["30%", "10% without indexation benefit", "Nil — equity gains are always tax-free", "20% with indexation"],
        opts_hi: ["30%", "इंडेक्सेशन लाभ के बिना 10%", "शून्य — इक्विटी लाभ हमेशा कर-मुक्त", "इंडेक्सेशन के साथ 20%"],
        ans: 1,
        exp: "LTCG on equity (held > 1 year): first ₹1 lakh exempt; above ₹1 lakh taxed at 10% without indexation. Short-term (< 1 year) taxed at 15%.",
        exp_hi: "इक्विटी LTCG (> 1 साल): पहले ₹1 लाख छूट; ऊपर 10% बिना इंडेक्सेशन। अल्पकालिक (< 1 साल) 15%।",
      },
    ],
    advanced: [
      {
        q: "Tax harvesting in equity investments means…",
        q_hi: "इक्विटी निवेश में टैक्स हार्वेस्टिंग का मतलब है…",
        opts: ["Selling all investments before year end", "Booking up to ₹1 lakh LTCG tax-free each year and immediately reinvesting to reset cost basis", "Investing only in tax-free bonds", "Claiming 80C deduction on mutual fund gains"],
        opts_hi: ["साल के अंत से पहले सभी निवेश बेचना", "हर साल ₹1 लाख तक LTCG कर-मुक्त बुक करना और लागत आधार रीसेट करने के लिए तुरंत पुनर्निवेश", "केवल कर-मुक्त बांडों में निवेश", "म्यूचुअल फंड लाभ पर 80C दावा"],
        ans: 1,
        exp: "Booking ₹1 lakh LTCG annually tax-free and reinvesting resets your cost basis higher, reducing future taxable gains. A simple legal optimisation.",
        exp_hi: "हर साल ₹1 लाख LTCG कर-मुक्त बुक करके पुनर्निवेश लागत आधार ऊंचा रीसेट करता है — भविष्य के कर योग्य लाभ घटाता है।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 07 · Digital Safety
  // ═══════════════════════════════════════════════════════════

  // ── ds1 · Common Financial Frauds ───────────────────────
  ds1: {
    beginner: [
      {
        q: "Phishing is a fraud where…",
        q_hi: "फिशिंग एक धोखाधड़ी है जहाँ…",
        opts: ["Someone physically steals your wallet", "Fraudsters send fake messages pretending to be banks to steal your credentials", "ATMs dispense counterfeit notes", "Banks charge hidden fees"],
        opts_hi: ["कोई बटुआ चुराता है", "धोखेबाज़ बैंक बनकर नकली संदेश भेजते हैं और क्रेडेंशियल चुराते हैं", "ATM नकली नोट देते हैं", "बैंक छुपे शुल्क लेते हैं"],
        ans: 1,
        exp: "Phishing uses fake bank emails, SMS, or websites. Never click links in SMS/email claiming to be your bank — go directly to the bank's website.",
        exp_hi: "फिशिंग नकली बैंक ईमेल, SMS या वेबसाइट उपयोग करती है। बैंक का दावा करने वाले SMS/ईमेल में लिंक कभी क्लिक न करें।",
      },
    ],
    normal: [
      {
        q: "A common banking fraud in India is…",
        q_hi: "भारत में एक सामान्य बैंकिंग धोखाधड़ी है…",
        opts: ["Banks reducing interest rates", "Fraudsters calling as 'bank officials' asking for OTP, card details, or CVV to 'verify your account'", "ATMs running out of cash", "Banks charging maintenance fees"],
        opts_hi: ["बैंक ब्याज दरें कम करते हैं", "धोखेबाज़ 'बैंक अधिकारी' बनकर खाता सत्यापित करने के लिए OTP, कार्ड विवरण माँगते हैं", "ATM में नकद कमी", "बैंक रखरखाव शुल्क लेते हैं"],
        ans: 1,
        exp: "Real bank officials NEVER ask for your OTP, PIN, CVV, or full card number. If asked, it's fraud — hang up immediately.",
        exp_hi: "वास्तविक बैंक अधिकारी कभी OTP, PIN, CVV या पूरा कार्ड नंबर नहीं माँगते। माँगे तो धोखाधड़ी — तुरंत फोन काटें।",
      },
    ],
    advanced: [
      {
        q: "UPI fraud types include all EXCEPT…",
        q_hi: "UPI धोखाधड़ी के प्रकारों में सभी शामिल हैं EXCEPT…",
        opts: ["Fake collect requests posing as refunds", "Screen mirroring to watch you enter your PIN", "Legitimate bank alerts for real transactions", "QR code fraud where scammer's QR replaces merchant's"],
        opts_hi: ["रिफंड के रूप में नकली कलेक्ट रिक्वेस्ट", "PIN दर्ज करते समय स्क्रीन मिररिंग", "वास्तविक लेनदेन के लिए वैध बैंक अलर्ट", "स्कैमर का QR व्यापारी का QR बदल देता है"],
        ans: 2,
        exp: "Legitimate bank alerts for real transactions are NOT fraud — they are security features. The other three are genuine UPI attack vectors.",
        exp_hi: "वास्तविक लेनदेन के लिए वैध बैंक अलर्ट धोखाधड़ी नहीं — सुरक्षा सुविधाएं हैं। बाकी तीन वास्तविक UPI हमले हैं।",
      },
    ],
  },

  // ── ds2 · OTP & SIM Swap Fraud ───────────────────────────
  ds2: {
    beginner: [
      {
        q: "OTP fraud happens when…",
        q_hi: "OTP धोखाधड़ी तब होती है जब…",
        opts: ["You receive too many bank messages", "You share your OTP with a fraudster who then uses it to authorise a transaction", "An ATM fails to dispense cash", "Your bank changes its app"],
        opts_hi: ["आपको बहुत सारे बैंक संदेश मिलते हैं", "आप OTP धोखेबाज़ को साझा करते हैं जो लेनदेन अधिकृत करता है", "ATM नकद नहीं देता", "बैंक ऐप बदलता है"],
        ans: 1,
        exp: "OTP is your transaction password. Never share it with anyone — not even someone claiming to be from your bank.",
        exp_hi: "OTP आपका लेनदेन पासवर्ड है। इसे कभी किसी के साथ साझा न करें — बैंक का दावा करने वाले के साथ भी नहीं।",
      },
    ],
    normal: [
      {
        q: "SIM swap fraud works by…",
        q_hi: "SIM स्वैप धोखाधड़ी काम करती है…",
        opts: ["Physically stealing your phone", "Fraudster convinces telecom company to transfer your number to a SIM they control, intercepting all OTPs", "Installing a virus on your laptop", "Cloning your credit card at an ATM"],
        opts_hi: ["आपका फोन चुराना", "धोखेबाज़ दूरसंचार कंपनी को आपका नंबर अपने SIM पर स्थानांतरित करवाता है और सभी OTP इंटरसेप्ट करता है", "लैपटॉप पर वायरस इंस्टॉल करना", "ATM पर क्रेडिट कार्ड क्लोन करना"],
        ans: 1,
        exp: "SIM swap is serious — attacker gets all your OTPs and can drain bank accounts. Warning: phone suddenly shows 'no service'. Call your operator immediately.",
        exp_hi: "SIM स्वैप गंभीर — हमलावर को सभी OTP मिलते हैं। चेतावनी: फोन 'नो सर्विस' दिखाए। तुरंत ऑपरेटर को कॉल करें।",
      },
    ],
    advanced: [
      {
        q: "To protect yourself from SIM swap, the best practice is…",
        q_hi: "SIM स्वैप से बचाव की सबसे अच्छी प्रथा है…",
        opts: ["Never use mobile banking", "Enable SIM lock with your telecom operator, use app-based 2FA (not SMS), and watch for sudden loss of signal", "Use only a single bank", "Share OTPs only with family"],
        opts_hi: ["कभी मोबाइल बैंकिंग न उपयोग करें", "ऑपरेटर के साथ SIM लॉक सक्षम करें, ऐप-आधारित 2FA उपयोग करें (SMS नहीं), अचानक सिग्नल हानि पर ध्यान दें", "केवल एक बैंक उपयोग करें", "केवल परिवार के साथ OTP साझा करें"],
        ans: 1,
        exp: "SIM lock requires in-person verification for porting. App-based 2FA (Google Authenticator) is unaffected by SIM swap. Sudden loss of network is the primary warning sign.",
        exp_hi: "SIM लॉक पोर्टिंग के लिए व्यक्तिगत सत्यापन माँगता है। ऐप-आधारित 2FA SIM स्वैप से अप्रभावित। अचानक नेटवर्क हानि प्राथमिक चेतावनी।",
      },
    ],
  },

  // ── ds3 · Investment Scams ───────────────────────────────
  ds3: {
    beginner: [
      {
        q: "A Ponzi scheme is…",
        q_hi: "पोंजी स्कीम है…",
        opts: ["A government savings bond", "A fraud that pays early investors with money from new investors — not actual profits", "A type of mutual fund", "A legitimate MLM business"],
        opts_hi: ["एक सरकारी बचत बांड", "एक धोखाधड़ी जो प्रारंभिक निवेशकों को नए निवेशकों के पैसे से भुगतान करती है — वास्तविक लाभ नहीं", "एक प्रकार का म्यूचुअल फंड", "एक वैध MLM व्यापार"],
        ans: 1,
        exp: "Ponzi schemes collapse when new investors dry up. Returns that seem too good to be true (30%+ guaranteed) are the tell-tale sign.",
        exp_hi: "पोंजी स्कीम तब ढहती है जब नए निवेशक नहीं आते। बहुत अधिक लगने वाला रिटर्न (30%+ गारंटी) पहचान का संकेत।",
      },
    ],
    normal: [
      {
        q: "How can you verify if an investment scheme is SEBI-registered?",
        q_hi: "निवेश योजना SEBI-पंजीकृत है कैसे सत्यापित करें?",
        opts: ["Ask your neighbour", "Check SEBI's official website (sebi.gov.in) for the intermediary's registration", "Trust YouTube ads about the scheme", "Look for 'SEBI approved' text in WhatsApp forwards"],
        opts_hi: ["पड़ोसी से पूछें", "मध्यस्थ के पंजीकरण के लिए sebi.gov.in जांचें", "YouTube विज्ञापनों पर भरोसा करें", "WhatsApp फॉरवर्ड में 'SEBI approved' देखें"],
        ans: 1,
        exp: "Only SEBI's own website is authoritative. Anyone can write 'SEBI approved' in marketing materials. Always verify at sebi.gov.in before investing.",
        exp_hi: "केवल SEBI की अपनी वेबसाइट आधिकारिक है। निवेश से पहले sebi.gov.in पर सत्यापित करें।",
      },
    ],
    advanced: [
      {
        q: "Red flags that indicate an investment fraud include…",
        q_hi: "निवेश धोखाधड़ी के लाल झंडे हैं…",
        opts: ["SEBI-registered firm, audited fund, clear fee structure", "Guaranteed high returns (20%+ monthly), urgency to invest now, unregistered operator, no written documentation", "Licensed stockbroker with transparent charges", "A mutual fund with a 5-year track record on AMFI website"],
        opts_hi: ["SEBI-पंजीकृत फर्म, ऑडिटेड फंड, स्पष्ट शुल्क", "गारंटीड उच्च रिटर्न (20%+ मासिक), तात्कालिकता, अपंजीकृत ऑपरेटर, कोई लिखित दस्तावेज़ नहीं", "पारदर्शी शुल्क वाला लाइसेंस प्राप्त ब्रोकर", "AMFI पर 5 साल के ट्रैक रिकॉर्ड वाला म्यूचुअल फंड"],
        ans: 1,
        exp: "Guaranteed high returns, urgency, and no documentation are top fraud signals. Legitimate investments never guarantee specific returns.",
        exp_hi: "गारंटीड उच्च रिटर्न, तात्कालिकता और दस्तावेज़ीकरण की कमी — शीर्ष धोखाधड़ी संकेत।",
      },
    ],
  },

  // ── ds4 · Safe Digital Banking ──────────────────────────
  ds4: {
    beginner: [
      {
        q: "Two-factor authentication (2FA) makes your account safer because…",
        q_hi: "द्वि-कारक प्रमाणीकरण (2FA) खाता सुरक्षित बनाता है क्योंकि…",
        opts: ["It makes your password longer automatically", "Even if someone knows your password, they also need a second factor (OTP/app) to log in", "It disables online access for security", "It is only for email accounts"],
        opts_hi: ["पासवर्ड स्वतः लंबा बनाता है", "भले ही कोई पासवर्ड जाने, लॉगिन के लिए दूसरे कारक (OTP/ऐप) की ज़रूरत होती है", "सुरक्षा के लिए ऑनलाइन एक्सेस अक्षम करता है", "केवल ईमेल खातों के लिए"],
        ans: 1,
        exp: "2FA requires two proofs of identity. Even with a stolen password, an attacker can't log in without your phone or authenticator app.",
        exp_hi: "2FA के लिए पहचान के दो प्रमाण चाहिए। चोरी हुए पासवर्ड के बावजूद फोन या ऑथेंटिकेटर ऐप के बिना लॉगिन नहीं।",
      },
    ],
    normal: [
      {
        q: "Best practice for banking passwords is…",
        q_hi: "बैंकिंग पासवर्ड के लिए सर्वोत्तम अभ्यास है…",
        opts: ["Use your date of birth for easy remembering", "A long, unique password for each account — never reused, stored in a password manager", "The same password everywhere for convenience", "Write it on a sticky note near your computer"],
        opts_hi: ["आसान याद के लिए जन्मतिथि", "प्रत्येक खाते के लिए लंबा, अनोखा पासवर्ड — कभी पुनः उपयोग नहीं, पासवर्ड मैनेजर में", "सुविधा के लिए हर जगह एक ही पासवर्ड", "कंप्यूटर के पास स्टिकी नोट पर लिखना"],
        ans: 1,
        exp: "Reusing passwords means one breach exposes all accounts. A password manager generates and stores unique strong passwords securely.",
        exp_hi: "पासवर्ड पुनः उपयोग से एक उल्लंघन सभी खाते उजागर करता है। पासवर्ड मैनेजर अद्वितीय मजबूत पासवर्ड सुरक्षित रखता है।",
      },
    ],
    advanced: [
      {
        q: "Safe internet banking requires avoiding…",
        q_hi: "सुरक्षित इंटरनेट बैंकिंग के लिए बचना चाहिए…",
        opts: ["Using your bank's official app", "Logging in over public WiFi without a VPN", "Setting up transaction alerts", "Enabling 2FA on your bank account"],
        opts_hi: ["बैंक के आधिकारिक ऐप का उपयोग", "VPN के बिना सार्वजनिक WiFi पर लॉगिन", "लेनदेन अलर्ट सेट करना", "बैंक खाते पर 2FA सक्षम करना"],
        ans: 1,
        exp: "Public WiFi can be monitored. A man-in-the-middle attack can intercept banking data. Use mobile data or a trusted VPN if forced to use public WiFi.",
        exp_hi: "सार्वजनिक WiFi की निगरानी हो सकती है। बैंकिंग डेटा इंटरसेप्ट हो सकता है। मोबाइल डेटा या विश्वसनीय VPN उपयोग करें।",
      },
    ],
  },

  // ── ds5 · What To Do If Scammed ─────────────────────────
  ds5: {
    beginner: [
      {
        q: "If you lose money to bank fraud, your FIRST step should be…",
        q_hi: "बैंक धोखाधड़ी से पैसे खोने पर पहला कदम होना चाहिए…",
        opts: ["Tell your friends on social media", "Call your bank's helpline immediately to block the account and report the fraud", "Wait and see if money returns", "File a police complaint only after a month"],
        opts_hi: ["सोशल मीडिया पर दोस्तों को बताएं", "तुरंत बैंक हेल्पलाइन पर कॉल करें और खाता ब्लॉक करें", "प्रतीक्षा करें", "एक महीने बाद पुलिस शिकायत"],
        ans: 1,
        exp: "Speed is critical. Call your bank immediately to freeze the account. Then file at cybercrime.gov.in and the RBI Banking Ombudsman.",
        exp_hi: "गति महत्वपूर्ण है। तुरंत बैंक कॉल करें। फिर cybercrime.gov.in और RBI बैंकिंग लोकपाल पर शिकायत करें।",
      },
    ],
    normal: [
      {
        q: "The RBI Banking Ombudsman helps you when…",
        q_hi: "RBI बैंकिंग लोकपाल कब मदद करता है…",
        opts: ["You want to open a new account faster", "Your bank has not resolved a complaint within 30 days or gave an unsatisfactory response", "You want to negotiate a lower interest rate", "You need a new chequebook"],
        opts_hi: ["जल्दी नया खाता खोलना चाहते हैं", "बैंक ने 30 दिनों में शिकायत का समाधान नहीं किया या असंतोषजनक उत्तर दिया", "कम ब्याज दर चाहते हैं", "नई चेक बुक चाहिए"],
        ans: 1,
        exp: "The Banking Ombudsman is a free grievance authority. File at bankingombudsman.rbi.org.in if your bank doesn't resolve your fraud complaint in 30 days.",
        exp_hi: "बैंकिंग लोकपाल मुफ्त शिकायत निवारण प्राधिकरण है। bankingombudsman.rbi.org.in पर दाखिल करें।",
      },
    ],
    advanced: [
      {
        q: "Under RBI's limited liability framework, you may get a full refund when…",
        q_hi: "RBI की सीमित देनदारी ढांचे के तहत पूर्ण वापसी मिल सकती है जब…",
        opts: ["The fraud happened due to your own negligence", "The fraud was due to bank negligence or a third-party breach, reported within 3 working days", "You reported it after 10 days", "You shared your OTP with the fraudster"],
        opts_hi: ["धोखाधड़ी आपकी लापरवाही से हुई", "बैंक/तीसरे पक्ष के उल्लंघन से धोखाधड़ी हुई और 3 कार्य दिवसों के भीतर रिपोर्ट की", "10 दिन बाद रिपोर्ट की", "OTP धोखेबाज़ के साथ साझा किया"],
        ans: 1,
        exp: "RBI framework: 0 liability if reported within 3 days of a bank/third-party breach. Customer negligence (like sharing OTP) reduces or removes protection.",
        exp_hi: "RBI ढांचा: बैंक/तीसरे पक्ष के उल्लंघन के 3 दिनों में रिपोर्ट पर 0 देनदारी। ग्राहक लापरवाही (OTP साझा) से सुरक्षा कम या खत्म।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 08 · Investing Basics
  // ═══════════════════════════════════════════════════════════

  // ── iv1 · Why Invest? ────────────────────────────────────
  iv1: {
    beginner: [
      {
        q: "Saving alone is not enough because…",
        q_hi: "केवल बचत पर्याप्त नहीं है क्योंकि…",
        opts: ["Banks always freeze savings accounts", "Inflation reduces the purchasing power of savings over time", "Saving creates too much money", "Banks charge fees on savings"],
        opts_hi: ["बैंक हमेशा बचत खाते फ्रीज करते हैं", "महंगाई समय के साथ बचत की क्रय शक्ति कम करती है", "बचत से बहुत अधिक पैसा बनता है", "बैंक बचत पर शुल्क लेते हैं"],
        ans: 1,
        exp: "At 6% inflation, ₹1 lakh today buys only ~₹55,000 worth of goods in 10 years. Investments that beat inflation are essential for real wealth growth.",
        exp_hi: "6% महंगाई पर आज का ₹1 लाख 10 साल में केवल ~₹55,000 मूल्य की चीज़ें खरीदेगा। असली संपत्ति वृद्धि के लिए महंगाई से अधिक रिटर्न देने वाला निवेश ज़रूरी।",
      },
    ],
    normal: [
      {
        q: "The power of compounding means…",
        q_hi: "चक्रवृद्धि की शक्ति का मतलब है…",
        opts: ["Only earning on your principal", "Your returns also earn returns — creating exponential growth over time", "Taking more risk for higher returns", "Getting tax benefits on investments"],
        opts_hi: ["केवल मूलधन पर कमाना", "आपके रिटर्न भी रिटर्न कमाते हैं — समय के साथ तेज़ वृद्धि", "अधिक रिटर्न के लिए अधिक जोखिम", "निवेश पर कर लाभ"],
        ans: 1,
        exp: "Compounding: ₹1 lakh at 12% becomes ₹3.1 lakh in 10 years, ₹9.6 lakh in 20 years, ₹29.9 lakh in 30 years. Time is the most powerful ingredient.",
        exp_hi: "चक्रवृद्धि: ₹1 लाख 12% पर 10 साल में ₹3.1 लाख, 20 साल में ₹9.6 लाख, 30 साल में ₹29.9 लाख।",
      },
    ],
    advanced: [
      {
        q: "Early investing beats late investing primarily because…",
        q_hi: "जल्दी निवेश बाद के निवेश से बेहतर है मुख्यतः क्योंकि…",
        opts: ["Early investors get government subsidies", "More years of compounding delivers exponentially larger corpus — waiting even 5 years loses substantial wealth", "Markets always rise in the first 5 years", "Early investors pay lower taxes"],
        opts_hi: ["जल्दी निवेशकों को सरकारी सब्सिडी मिलती है", "अधिक वर्षों की चक्रवृद्धि से बहुत अधिक कॉर्पस — 5 साल देरी से भी काफी संपत्ति खोती है", "बाज़ार पहले 5 वर्षों में हमेशा बढ़ते हैं", "जल्दी निवेशक कम कर देते हैं"],
        ans: 1,
        exp: "₹10,000/month SIP at 12% for 30 years = ₹3.5 crore. Start 10 years late for 20 years = ₹98 lakh. The 10-year delay costs over ₹2.5 crore.",
        exp_hi: "30 साल के लिए ₹10,000/माह SIP 12% पर = ₹3.5 करोड़। 10 साल देर से 20 साल = ₹98 लाख। 10 साल की देरी ₹2.5 करोड़ से अधिक खर्च करती है।",
      },
    ],
  },

  // ── iv2 · Risk & Return ──────────────────────────────────
  iv2: {
    beginner: [
      {
        q: "In investing, risk and return are…",
        q_hi: "निवेश में जोखिम और रिटर्न हैं…",
        opts: ["Unrelated — high return with zero risk is common", "Directly related — higher potential returns usually come with higher risk", "Always the same across all investments", "Determined only by the government"],
        opts_hi: ["असंबंधित — शून्य जोखिम के साथ उच्च रिटर्न सामान्य है", "सीधे संबंधित — उच्च संभावित रिटर्न आमतौर पर उच्च जोखिम के साथ", "सभी निवेशों में हमेशा समान", "केवल सरकार द्वारा निर्धारित"],
        ans: 1,
        exp: "The risk-return tradeoff is fundamental. FDs are low-risk, low-return. Equities are high-risk, high-return over the long term. No investment is high-return with zero risk.",
        exp_hi: "जोखिम-रिटर्न ट्रेडऑफ मौलिक है। FD कम जोखिम, कम रिटर्न। इक्विटी दीर्घकालिक रूप से उच्च जोखिम, उच्च रिटर्न।",
      },
    ],
    normal: [
      {
        q: "Time horizon affects investment risk because…",
        q_hi: "समय क्षितिज निवेश जोखिम को प्रभावित करता है क्योंकि…",
        opts: ["Longer horizons mean more market crashes", "Longer time allows recovery from volatility — equity is risky for 1 year but historically safe over 10+ years", "Short horizons always give better returns", "Time horizon doesn't affect risk"],
        opts_hi: ["लंबे क्षितिज में अधिक बाज़ार दुर्घटनाएं", "लंबा समय अस्थिरता से उबरने देता है — इक्विटी 1 साल के लिए जोखिम भरी लेकिन 10+ साल में ऐतिहासिक रूप से सुरक्षित", "छोटे क्षितिज में हमेशा बेहतर रिटर्न", "समय क्षितिज जोखिम को प्रभावित नहीं करता"],
        ans: 1,
        exp: "In any 1-year Nifty window, returns range from -50% to +80%. In any rolling 10-year window since 1990, Nifty has always delivered positive returns.",
        exp_hi: "किसी भी 1 साल की Nifty विंडो में रिटर्न -50% से +80%। 1990 से किसी भी 10 साल की विंडो में Nifty ने हमेशा सकारात्मक रिटर्न दिया।",
      },
    ],
    advanced: [
      {
        q: "Types of investment risk include all EXCEPT…",
        q_hi: "निवेश जोखिम के प्रकारों में सभी शामिल हैं EXCEPT…",
        opts: ["Market risk (systematic risk)", "Liquidity risk", "Guaranteed return risk", "Concentration risk"],
        opts_hi: ["बाज़ार जोखिम (व्यवस्थित जोखिम)", "तरलता जोखिम", "गारंटीड रिटर्न जोखिम", "एकाग्रता जोखिम"],
        ans: 2,
        exp: "'Guaranteed return risk' is not a real risk category. Real types: market risk, liquidity risk, credit risk, inflation risk, and concentration risk.",
        exp_hi: "'गारंटीड रिटर्न जोखिम' वास्तविक श्रेणी नहीं। वास्तविक: बाज़ार जोखिम, तरलता जोखिम, क्रेडिट जोखिम, मुद्रास्फीति जोखिम, एकाग्रता जोखिम।",
      },
    ],
  },

  // ── iv3 · Asset Classes Overview ────────────────────────
  iv3: {
    beginner: [
      {
        q: "Which asset class historically provides the highest long-term returns in India?",
        q_hi: "भारत में ऐतिहासिक रूप से सबसे अधिक दीर्घकालिक रिटर्न कौन-सा संपत्ति वर्ग देता है?",
        opts: ["Cash in a savings account", "Equities (stocks and equity mutual funds)", "Gold jewellery", "Government bonds"],
        opts_hi: ["बचत खाते में नकद", "इक्विटी (शेयर और इक्विटी म्यूचुअल फंड)", "सोने के गहने", "सरकारी बांड"],
        ans: 1,
        exp: "Equities have delivered ~12–15% CAGR in India long-term, far ahead of gold (~8%), FDs (~7%), and savings accounts (~3–4%).",
        exp_hi: "भारत में इक्विटी ने दीर्घकालिक रूप से ~12–15% CAGR दिया — सोने (~8%), FD (~7%) और बचत खातों (~3–4%) से बहुत आगे।",
      },
    ],
    normal: [
      {
        q: "Gold is valuable in a portfolio primarily as…",
        q_hi: "पोर्टफोलियो में सोना मुख्य रूप से मूल्यवान है…",
        opts: ["The highest-return asset class", "A hedge against inflation and market downturns — it often rises when equities fall", "A replacement for health insurance", "The safest way to save for retirement"],
        opts_hi: ["सबसे अधिक रिटर्न वाला वर्ग", "मुद्रास्फीति और बाज़ार मंदी के खिलाफ बचाव — इक्विटी गिरने पर अक्सर बढ़ता है", "स्वास्थ्य बीमा का विकल्प", "सेवानिवृत्ति के लिए सबसे सुरक्षित तरीका"],
        ans: 1,
        exp: "Gold is a safe-haven asset that doesn't correlate with equities. 5–10% gold allocation improves portfolio stability during crashes.",
        exp_hi: "सोना सुरक्षित-आश्रय संपत्ति है — इक्विटी से संबद्ध नहीं। 5–10% सोना दुर्घटनाओं में पोर्टफोलियो स्थिरता सुधारता है।",
      },
    ],
    advanced: [
      {
        q: "For most middle-class Indian investors, equity is preferred over real estate because…",
        q_hi: "अधिकांश मध्यम वर्गीय भारतीय निवेशकों के लिए रियल एस्टेट की बजाय इक्विटी पसंदीदा है क्योंकि…",
        opts: ["Real estate always loses value", "Equity is highly liquid, divisible, transparent, professionally managed, with comparable or better long-term returns", "Equity has no tax implications", "Real estate requires no maintenance"],
        opts_hi: ["रियल एस्टेट हमेशा मूल्य खोता है", "इक्विटी अत्यधिक तरल, विभाज्य, पारदर्शी, पेशेवर रूप से प्रबंधित और तुलनीय या बेहतर दीर्घकालिक रिटर्न", "इक्विटी में कर निहितार्थ नहीं", "रियल एस्टेट में कोई रखरखाव नहीं"],
        ans: 1,
        exp: "Real estate needs large lumpy capital, has low liquidity, involves maintenance and tenant risk. Equity via mutual funds needs just ₹500/month SIP with instant liquidity.",
        exp_hi: "रियल एस्टेट में बड़ी पूंजी, कम तरलता, रखरखाव जोखिम। म्यूचुअल फंड से इक्विटी ₹500/माह SIP पर तत्काल तरलता के साथ।",
      },
    ],
  },

  // ── iv4 · Rule of 72 ─────────────────────────────────────
  iv4: {
    beginner: [
      {
        q: "The Rule of 72 tells you…",
        q_hi: "72 का नियम बताता है…",
        opts: ["How much tax you will pay", "Approximately how many years it takes for money to double at a given interest rate", "The maximum safe investment amount", "The best time to sell stocks"],
        opts_hi: ["आप कितना कर देंगे", "एक निश्चित ब्याज दर पर पैसा दोगुना होने में लगभग कितने साल", "अधिकतम सुरक्षित निवेश राशि", "शेयर बेचने का सबसे अच्छा समय"],
        ans: 1,
        exp: "Rule of 72: Years to double = 72 ÷ interest rate. At 8% money doubles in 9 years. At 12% it doubles in 6 years.",
        exp_hi: "72 का नियम: दोगुना होने के वर्ष = 72 ÷ ब्याज दर। 8% पर 9 साल में दोगुना। 12% पर 6 साल में।",
      },
    ],
    normal: [
      {
        q: "At 6% FD interest rate, ₹1 lakh doubles in approximately…",
        q_hi: "6% FD ब्याज दर पर ₹1 लाख लगभग दोगुना होता है…",
        opts: ["6 years", "12 years", "20 years", "30 years"],
        opts_hi: ["6 साल", "12 साल", "20 साल", "30 साल"],
        ans: 1,
        exp: "72 ÷ 6 = 12 years. Compare: at 12% equity return it doubles in just 6 years — showing why equity beats FDs for wealth creation.",
        exp_hi: "72 ÷ 6 = 12 साल। तुलना: 12% इक्विटी रिटर्न पर सिर्फ 6 साल में दोगुना — इक्विटी FD से बेहतर क्यों है।",
      },
    ],
    advanced: [
      {
        q: "The Rule of 72 is most accurate for interest rates in the range of…",
        q_hi: "72 का नियम किस ब्याज दर सीमा में सबसे सटीक है…",
        opts: ["0–2%", "6–10%", "50–100%", "Only for FD rates"],
        opts_hi: ["0–2%", "6–10%", "50–100%", "केवल FD दरों के लिए"],
        ans: 1,
        exp: "The Rule of 72 is a linear approximation that works best between 6–10%. For very high rates, use the Rule of 69.3 for more precision.",
        exp_hi: "72 का नियम 6–10% के बीच सबसे अच्छा काम करता है। बहुत उच्च दरों के लिए 69.3 का नियम उपयोग करें।",
      },
    ],
  },

  // ── iv5 · Time Value of Money ────────────────────────────
  iv5: {
    beginner: [
      {
        q: "Time Value of Money means…",
        q_hi: "पैसे का समय मूल्य मतलब है…",
        opts: ["Money is more valuable on weekdays than weekends", "₹1,000 today is worth more than ₹1,000 in the future, because it can grow", "Rich people have more time", "Banks value time deposits less"],
        opts_hi: ["सप्ताहांत की तुलना में कार्यदिवसों पर पैसा अधिक मूल्यवान", "आज का ₹1,000 भविष्य के ₹1,000 से अधिक मूल्यवान क्योंकि यह बढ़ सकता है", "अमीर लोगों के पास अधिक समय", "बैंक सावधि जमा को कम महत्व देते हैं"],
        ans: 1,
        exp: "Money today can be invested to grow. ₹1,000 at 10% becomes ₹1,100 in a year. So future ₹1,100 = today's ₹1,000.",
        exp_hi: "आज का पैसा बढ़ने के लिए निवेश हो सकता है। ₹1,000 10% पर एक साल में ₹1,100 बनता है।",
      },
    ],
    normal: [
      {
        q: "Compounding frequency matters because…",
        q_hi: "चक्रवृद्धि आवृत्ति मायने रखती है क्योंकि…",
        opts: ["Banks with more frequent compounding always charge higher fees", "More frequent compounding (daily vs annual) increases the effective annual yield on the same nominal rate", "Only annual compounding matters", "Frequency is fixed by the government"],
        opts_hi: ["अधिक बार चक्रवृद्धि वाले बैंक हमेशा अधिक शुल्क लेते हैं", "अधिक बार चक्रवृद्धि (दैनिक बनाम वार्षिक) समान नाममात्र दर पर प्रभावी वार्षिक उपज बढ़ाती है", "केवल वार्षिक चक्रवृद्धि मायने रखती है", "आवृत्ति सरकार द्वारा तय"],
        ans: 1,
        exp: "10% nominal rate compounded daily gives ~10.52% effective annual rate. Growth option mutual funds compound continuously since gains reinvest without tax interruption.",
        exp_hi: "दैनिक चक्रवृद्धि पर 10% नाममात्र दर ~10.52% प्रभावी वार्षिक दर देती है।",
      },
    ],
    advanced: [
      {
        q: "Investing ₹10,000/month from age 25 vs 35, both stopping at 60 — the difference in corpus is approximately…",
        q_hi: "25 साल से बनाम 35 साल से ₹10,000/माह निवेश, दोनों 60 पर रुकते हुए — कॉर्पस में अंतर लगभग है…",
        opts: ["₹10 lakh", "₹2.5 crore or more at 12% CAGR", "₹50 lakh", "₹5 lakh"],
        opts_hi: ["₹10 लाख", "12% CAGR पर ₹2.5 करोड़ या अधिक", "₹50 लाख", "₹5 लाख"],
        ans: 1,
        exp: "Starting at 25 (35 years): ~₹3.5 crore. Starting at 35 (25 years): ~₹1.05 crore. The 10-year delay costs over ₹2.4 crore.",
        exp_hi: "25 से शुरू (35 साल): ~₹3.5 करोड़। 35 से शुरू (25 साल): ~₹1.05 करोड़। 10 साल की देरी ₹2.4 करोड़ से अधिक खर्च करती है।",
      },
    ],
  },

  // ── iv6 · Diversification ───────────────────────────────
  iv6: {
    beginner: [
      {
        q: "Diversification in investing means…",
        q_hi: "निवेश में विविधीकरण का मतलब है…",
        opts: ["Putting all money in the best-performing stock", "Spreading investments across different assets so one loss doesn't devastate the whole portfolio", "Only investing in government schemes", "Investing the same amount every month"],
        opts_hi: ["सबसे अच्छे शेयर में सब पैसे", "एक नुकसान से पूरा पोर्टफोलियो बर्बाद न हो इसलिए विभिन्न संपत्तियों में फैलाना", "केवल सरकारी योजनाओं में", "हर महीने एक ही राशि"],
        ans: 1,
        exp: "Diversification: don't put all eggs in one basket. A mix of equity, debt, gold, and real estate reduces risk because they don't all fall at the same time.",
        exp_hi: "विविधीकरण: सभी अंडे एक टोकरी में न रखें। इक्विटी, ऋण, सोना और रियल एस्टेट का मिश्रण जोखिम कम करता है।",
      },
    ],
    normal: [
      {
        q: "Why does diversification reduce risk but not eliminate it?",
        q_hi: "विविधीकरण जोखिम कम क्यों करता है लेकिन खत्म नहीं?",
        opts: ["Because all assets are 100% correlated", "Because systematic risk (market crashes, recessions) affects most assets simultaneously — only unsystematic risk is diversifiable", "Because diversification increases tax", "Because it requires professional management"],
        opts_hi: ["सभी संपत्तियाँ 100% सहसंबद्ध हैं", "व्यवस्थित जोखिम (बाज़ार दुर्घटनाएं, मंदी) अधिकांश संपत्तियों को एक साथ प्रभावित — केवल असंगठित जोखिम विविधीकरण योग्य", "विविधीकरण कर बढ़ाता है", "पेशेवर प्रबंधन चाहिए"],
        ans: 1,
        exp: "Diversification eliminates company-specific (unsystematic) risk. But if the whole economy crashes (2008, 2020), all equity assets fall together — that's systematic risk.",
        exp_hi: "विविधीकरण कंपनी-विशिष्ट जोखिम खत्म करता है। पूरी अर्थव्यवस्था दुर्घटनाग्रस्त होने पर सभी इक्विटी एक साथ गिरती हैं — व्यवस्थित जोखिम।",
      },
    ],
    advanced: [
      {
        q: "Two assets being negatively correlated means…",
        q_hi: "दो संपत्तियाँ नकारात्मक रूप से सहसंबद्ध होने का मतलब है…",
        opts: ["They both rise together", "When one rises, the other tends to fall — combining them reduces portfolio volatility", "They are both loss-making", "They track the same index"],
        opts_hi: ["दोनों एक साथ बढ़ते हैं", "जब एक बढ़ता है दूसरा गिरता है — उन्हें मिलाने से पोर्टफोलियो अस्थिरता कम होती है", "दोनों घाटे में हैं", "दोनों एक ही सूचकांक ट्रैक करते हैं"],
        ans: 1,
        exp: "Gold and equity are often negatively correlated. 90% equity + 10% gold has historically shown lower volatility than 100% equity with similar long-term returns.",
        exp_hi: "सोना और इक्विटी अक्सर नकारात्मक रूप से सहसंबद्ध। 90% इक्विटी + 10% सोना ने 100% इक्विटी से कम अस्थिरता दिखाई है।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 09 · Mutual Funds
  // ═══════════════════════════════════════════════════════════

  // ── mf1 · What Are Mutual Funds? ────────────────────────
  mf1: {
    beginner: [
      {
        q: "A mutual fund pools money from many investors to…",
        q_hi: "म्यूचुअल फंड कई निवेशकों से पैसे इकट्ठा करता है…",
        opts: ["Keep it in a single bank FD", "Invest collectively in a diversified portfolio managed by a professional fund manager", "Give everyone equal returns regardless of market", "Lend money to the government only"],
        opts_hi: ["एकल बैंक FD में रखने के लिए", "एक पेशेवर फंड मैनेजर द्वारा प्रबंधित विविध पोर्टफोलियो में सामूहिक निवेश", "बाज़ार की परवाह किए बिना सभी को समान रिटर्न", "केवल सरकार को पैसे उधार देना"],
        ans: 1,
        exp: "Mutual funds pool small investments from many people, invest in a diversified basket, and pass proportional returns to each investor.",
        exp_hi: "म्यूचुअल फंड कई लोगों के छोटे निवेश इकट्ठा करते हैं, विविध टोकरी में निवेश करते हैं और आनुपातिक रिटर्न देते हैं।",
      },
    ],
    normal: [
      {
        q: "NAV (Net Asset Value) of a mutual fund is…",
        q_hi: "म्यूचुअल फंड का NAV (शुद्ध संपत्ति मूल्य) है…",
        opts: ["The fund's total profit for the year", "The per-unit value of the fund — total assets minus liabilities divided by units outstanding", "The minimum investment amount", "The fund manager's annual salary"],
        opts_hi: ["फंड का वार्षिक कुल लाभ", "फंड का प्रति-यूनिट मूल्य — कुल संपत्ति घटाकर देनदारियाँ, बकाया यूनिटों से विभाजित", "न्यूनतम निवेश राशि", "फंड मैनेजर का वार्षिक वेतन"],
        ans: 1,
        exp: "NAV is calculated daily. When you buy, you get units at that day's NAV; when you sell, you receive the NAV at the time of redemption.",
        exp_hi: "NAV दैनिक गणना होती है। खरीदने पर उस दिन के NAV पर यूनिट मिलती हैं; बेचने पर रिडेम्पशन के समय का NAV मिलता है।",
      },
    ],
    advanced: [
      {
        q: "The expense ratio of a mutual fund matters because…",
        q_hi: "म्यूचुअल फंड का व्यय अनुपात मायने रखता है क्योंकि…",
        opts: ["It determines how often you can redeem", "It is deducted from returns annually — a 1% vs 0.1% ratio difference compounds to a significant gap over 20 years", "It is a one-time entry charge", "It only applies to debt funds"],
        opts_hi: ["यह निर्धारित करता है कि आप कितनी बार रिडीम कर सकते हैं", "यह रिटर्न से वार्षिक रूप से काटा जाता है — 1% बनाम 0.1% का अंतर 20 साल में महत्वपूर्ण अंतर बनाता है", "यह एकमुश्त प्रवेश शुल्क है", "केवल डेट फंड पर लागू"],
        ans: 1,
        exp: "A 1% expense ratio on ₹10 lakh over 20 years at 12% gross return costs ~₹8 lakh more than a 0.1% ratio fund. Always prefer low-cost index or direct funds.",
        exp_hi: "20 साल में ₹10 लाख पर 12% सकल रिटर्न पर 1% व्यय अनुपात 0.1% फंड से ~₹8 लाख अधिक खर्च करता है।",
      },
    ],
  },

  // ── mf2 · Types of Mutual Funds ─────────────────────────
  mf2: {
    beginner: [
      {
        q: "An equity mutual fund primarily invests in…",
        q_hi: "इक्विटी म्यूचुअल फंड मुख्य रूप से निवेश करता है…",
        opts: ["Fixed deposits", "Stocks (shares) of companies", "Government bonds only", "Real estate properties"],
        opts_hi: ["सावधि जमा", "कंपनियों के शेयरों में", "केवल सरकारी बांड", "रियल एस्टेट संपत्तियां"],
        ans: 1,
        exp: "Equity funds invest at least 65% in stocks. They carry higher risk but have historically delivered the highest long-term returns.",
        exp_hi: "इक्विटी फंड कम से कम 65% शेयरों में निवेश करते हैं। अधिक जोखिम लेकिन ऐतिहासिक रूप से सबसे अधिक दीर्घकालिक रिटर्न।",
      },
    ],
    normal: [
      {
        q: "A debt mutual fund is suitable for…",
        q_hi: "डेट म्यूचुअल फंड उपयुक्त है…",
        opts: ["Investors seeking maximum growth over 20 years", "Investors wanting stable, lower-risk returns — like an FD alternative with better liquidity", "Speculative short-term trading", "Buying real estate indirectly"],
        opts_hi: ["20 साल में अधिकतम वृद्धि चाहने वाले", "स्थिर, कम जोखिम वाले रिटर्न चाहने वाले — बेहतर तरलता के साथ FD विकल्प", "सट्टा अल्पकालिक ट्रेडिंग", "अप्रत्यक्ष रूप से रियल एस्टेट खरीदना"],
        ans: 1,
        exp: "Debt funds invest in bonds, T-bills, and money market instruments. Lower risk than equity; better post-tax returns than FDs for higher tax bracket investors.",
        exp_hi: "डेट फंड बांड, T-बिल और मनी मार्केट साधनों में निवेश करते हैं। उच्च कर वर्ग के निवेशकों के लिए FD से बेहतर कर-पश्चात रिटर्न।",
      },
    ],
    advanced: [
      {
        q: "A hybrid fund (balanced fund) is best suited for…",
        q_hi: "हाइब्रिड फंड (बैलेंस्ड फंड) सबसे उपयुक्त है…",
        opts: ["Investors who want 100% equity exposure", "Investors wanting a single fund that automatically maintains an equity-debt balance — moderate risk and return", "Very short-term (< 3 months) parking of funds", "Day traders"],
        opts_hi: ["100% इक्विटी एक्सपोजर चाहने वाले", "एक ही फंड में इक्विटी-डेट संतुलन चाहने वाले — मध्यम जोखिम और रिटर्न", "बहुत अल्पकालिक (< 3 महीने) पार्किंग", "डे ट्रेडर्स"],
        ans: 1,
        exp: "Hybrid funds (e.g., 60% equity + 40% debt) provide growth with stability. Automatic rebalancing maintains the target allocation without investor action.",
        exp_hi: "हाइब्रिड फंड (जैसे 60% इक्विटी + 40% डेट) स्थिरता के साथ वृद्धि देते हैं। स्वचालित रीबैलेंसिंग लक्ष्य आवंटन बनाए रखती है।",
      },
    ],
  },

  // ── mf3 · SIP Explained ──────────────────────────────────
  mf3: {
    beginner: [
      {
        q: "A SIP (Systematic Investment Plan) means…",
        q_hi: "SIP (व्यवस्थित निवेश योजना) का मतलब है…",
        opts: ["Investing a lump sum once a year", "Investing a fixed amount regularly (monthly) in a mutual fund automatically", "A savings account with automatic interest", "A government pension scheme"],
        opts_hi: ["साल में एक बार एकमुश्त निवेश", "म्यूचुअल फंड में स्वचालित रूप से नियमित (मासिक) निश्चित राशि निवेश", "स्वचालित ब्याज वाला बचत खाता", "सरकारी पेंशन योजना"],
        ans: 1,
        exp: "A SIP auto-debits a fixed amount monthly and buys mutual fund units at that day's NAV. As low as ₹100/month to start.",
        exp_hi: "SIP मासिक निश्चित राशि ऑटो-डेबिट करती है और उस दिन के NAV पर म्यूचुअल फंड यूनिट खरीदती है। ₹100/माह से शुरू।",
      },
    ],
    normal: [
      {
        q: "Rupee cost averaging through SIP means…",
        q_hi: "SIP के माध्यम से रुपया लागत औसत का मतलब है…",
        opts: ["Always buying at the lowest price", "Buying more units when prices are low and fewer when prices are high — automatically averaging your cost", "Selling units when market falls", "Getting a fixed return regardless of market"],
        opts_hi: ["हमेशा सबसे कम कीमत पर खरीदना", "कीमत कम होने पर अधिक यूनिट और अधिक होने पर कम — स्वचालित रूप से लागत का औसत", "बाज़ार गिरने पर यूनिट बेचना", "बाज़ार की परवाह किए बिना तय रिटर्न"],
        ans: 1,
        exp: "With ₹5,000/month SIP: NAV=50 → buy 100 units; NAV=25 → buy 200 units. Lower average cost than buying all at once at any single price.",
        exp_hi: "₹5,000/माह SIP पर: NAV=50 → 100 यूनिट; NAV=25 → 200 यूनिट। किसी भी एकल कीमत पर एक साथ खरीदने से कम औसत लागत।",
      },
    ],
    advanced: [
      {
        q: "A SIP is better than a lump-sum investment primarily when…",
        q_hi: "SIP लम्पसम निवेश से बेहतर है मुख्यतः जब…",
        opts: ["Markets are at an all-time high and you have a large corpus ready", "You don't have a large corpus upfront and markets are volatile — SIP smooths entry price over time", "You are investing for less than 1 month", "The fund has a very low expense ratio"],
        opts_hi: ["बाज़ार सर्वकालिक उच्च पर हैं और बड़ा कॉर्पस तैयार है", "आपके पास बड़ा कॉर्पस नहीं और बाज़ार अस्थिर — SIP समय के साथ प्रवेश मूल्य को सुचारू करती है", "1 महीने से कम के लिए निवेश", "फंड का व्यय अनुपात बहुत कम है"],
        ans: 1,
        exp: "SIP is ideal for salaried investors investing monthly income. Lump sum beats SIP in a steadily rising market — but timing the market is impossible for most.",
        exp_hi: "SIP वेतनभोगी निवेशकों के लिए आदर्श जो मासिक आय निवेश करते हैं। लगातार बढ़ते बाज़ार में लम्पसम SIP से बेहतर — लेकिन अधिकांश के लिए बाज़ार का समय निर्धारण असंभव।",
      },
    ],
  },

  // ── mf4 · Direct vs Regular Plans ───────────────────────
  mf4: {
    beginner: [
      {
        q: "A direct mutual fund plan differs from a regular plan because…",
        q_hi: "डायरेक्ट म्यूचुअल फंड प्लान रेगुलर प्लान से अलग है क्योंकि…",
        opts: ["Direct plans invest in different stocks", "Direct plans have no distributor commission — lower expense ratio, higher returns for same fund", "Regular plans are only for large investors", "Direct plans require a minimum of ₹1 lakh"],
        opts_hi: ["डायरेक्ट प्लान अलग शेयरों में निवेश करते हैं", "डायरेक्ट प्लान में वितरक कमीशन नहीं — कम व्यय अनुपात, समान फंड पर अधिक रिटर्न", "रेगुलर प्लान केवल बड़े निवेशकों के लिए", "डायरेक्ट प्लान में न्यूनतम ₹1 लाख"],
        ans: 1,
        exp: "Direct plans cut out the distributor middleman. The same fund's direct plan typically has 0.5–1% lower expense ratio than the regular plan.",
        exp_hi: "डायरेक्ट प्लान वितरक बिचौलिए को हटाते हैं। उसी फंड का डायरेक्ट प्लान रेगुलर से 0.5–1% कम व्यय अनुपात पर होता है।",
      },
    ],
    normal: [
      {
        q: "Over 20 years, choosing direct over regular plan on ₹5,000/month SIP (at 12% gross) saves approximately…",
        q_hi: "20 साल में ₹5,000/माह SIP पर डायरेक्ट बनाम रेगुलर प्लान चुनने से (12% सकल पर) लगभग बचत होती है…",
        opts: ["₹500", "₹3–5 lakh or more due to compounding of the saved expense ratio", "₹50 only", "Nothing — both plans are identical"],
        opts_hi: ["₹500", "बचाए गए व्यय अनुपात की चक्रवृद्धि के कारण ₹3–5 लाख या अधिक", "केवल ₹50", "कुछ नहीं — दोनों प्लान समान"],
        ans: 1,
        exp: "A 1% expense ratio difference compounding over 20 years on a growing corpus leads to lakhs in difference. Always invest via direct plan through AMC website or MF apps.",
        exp_hi: "20 साल में बढ़ते कॉर्पस पर 1% व्यय अनुपात का अंतर चक्रवृद्धि होने पर लाखों का अंतर बनाता है।",
      },
    ],
    advanced: [
      {
        q: "The best platform to invest in direct mutual funds in India is…",
        q_hi: "भारत में डायरेक्ट म्यूचुअल फंड में निवेश का सबसे अच्छा प्लेटफॉर्म है…",
        opts: ["Your bank's relationship manager", "AMC websites directly, MFCentral, or zero-commission apps like Groww, Zerodha Coin, or Kuvera", "Insurance agents who also sell funds", "Post office savings schemes"],
        opts_hi: ["बैंक के रिलेशनशिप मैनेजर", "AMC वेबसाइट, MFCentral, या Groww, Zerodha Coin, Kuvera जैसे शून्य-कमीशन ऐप्स", "बीमा एजेंट जो फंड भी बेचते हैं", "डाकघर बचत योजनाएं"],
        ans: 1,
        exp: "AMC websites and zero-commission platforms (Groww, Kuvera, Coin) offer direct plans with no distributor cut. Bank RMs and insurance agents typically push regular plans for their commission.",
        exp_hi: "AMC वेबसाइट और शून्य-कमीशन प्लेटफॉर्म बिना वितरक कटौती के डायरेक्ट प्लान देते हैं।",
      },
    ],
  },

  // ── mf5 · Index Funds ────────────────────────────────────
  mf5: {
    beginner: [
      {
        q: "An index fund tracks…",
        q_hi: "इंडेक्स फंड ट्रैक करता है…",
        opts: ["A fund manager's stock picks", "A market index like Nifty 50 or Sensex — buying all stocks in the same proportion", "Only government bonds", "The performance of gold prices"],
        opts_hi: ["फंड मैनेजर की शेयर पसंद", "Nifty 50 या Sensex जैसा बाज़ार सूचकांक — सभी शेयर उसी अनुपात में खरीदना", "केवल सरकारी बांड", "सोने की कीमतों का प्रदर्शन"],
        ans: 1,
        exp: "An index fund passively replicates an index. No active stock picking — just mirrors the index. Very low expense ratio (0.05–0.2%).",
        exp_hi: "इंडेक्स फंड निष्क्रिय रूप से एक सूचकांक की नकल करता है। कोई सक्रिय शेयर चयन नहीं — बहुत कम व्यय अनुपात (0.05–0.2%)।",
      },
    ],
    normal: [
      {
        q: "Most actively managed funds underperform index funds over 10+ years because…",
        q_hi: "अधिकांश सक्रिय रूप से प्रबंधित फंड 10+ साल में इंडेक्स फंड से कम प्रदर्शन करते हैं क्योंकि…",
        opts: ["Index funds are government-guaranteed", "Higher expense ratios, trading costs, and the difficulty of consistently beating the market erode active fund returns", "Active fund managers are not qualified", "SEBI forces active funds to underperform"],
        opts_hi: ["इंडेक्स फंड सरकार द्वारा गारंटीड हैं", "उच्च व्यय अनुपात, ट्रेडिंग लागत और लगातार बाज़ार को मात देने की कठिनाई सक्रिय फंड रिटर्न कम करती है", "सक्रिय फंड मैनेजर योग्य नहीं", "SEBI सक्रिय फंड को कम प्रदर्शन करने पर मजबूर करता है"],
        ans: 1,
        exp: "SPIVA data shows 80–90% of active large-cap funds underperform their benchmark over 10 years. Low-cost index funds often win simply by keeping costs low.",
        exp_hi: "SPIVA डेटा दिखाता है कि 80–90% सक्रिय लार्ज-कैप फंड 10 साल में बेंचमार्क से कम प्रदर्शन करते हैं।",
      },
    ],
    advanced: [
      {
        q: "For a beginner investor, the ideal starting portfolio is…",
        q_hi: "शुरुआती निवेशक के लिए आदर्श शुरुआती पोर्टफोलियो है…",
        opts: ["10 different sector funds", "A simple Nifty 50 index fund + a short-duration debt fund — low cost, diversified, easy to manage", "Only small-cap funds for maximum returns", "A single thematic fund"],
        opts_hi: ["10 अलग सेक्टर फंड", "सरल Nifty 50 इंडेक्स फंड + शॉर्ट-ड्यूरेशन डेट फंड — कम लागत, विविध, प्रबंधन में आसान", "अधिकतम रिटर्न के लिए केवल स्मॉल-कैप फंड", "एकल थीमेटिक फंड"],
        ans: 1,
        exp: "Simplicity beats complexity for most investors. A Nifty 50 index fund (equity) + liquid/short-term debt fund covers both growth and stability with minimal cost.",
        exp_hi: "अधिकांश निवेशकों के लिए सरलता जटिलता को मात देती है। Nifty 50 इंडेक्स फंड + लिक्विड/शॉर्ट-टर्म डेट फंड न्यूनतम लागत पर वृद्धि और स्थिरता दोनों।",
      },
    ],
  },

  // ── mf6 · Reading a Fund Factsheet ──────────────────────
  mf6: {
    beginner: [
      {
        q: "When choosing a mutual fund, past returns alone are…",
        q_hi: "म्यूचुअल फंड चुनते समय केवल पिछले रिटर्न हैं…",
        opts: ["The only thing that matters", "Insufficient — you must also consider risk measures, expense ratio, fund house quality, and consistency", "A guarantee of future performance", "Irrelevant to the decision"],
        opts_hi: ["एकमात्र महत्वपूर्ण बात", "अपर्याप्त — जोखिम उपाय, व्यय अनुपात, फंड हाउस गुणवत्ता और स्थिरता भी देखनी चाहिए", "भविष्य के प्रदर्शन की गारंटी", "निर्णय के लिए अप्रासंगिक"],
        ans: 1,
        exp: "SEBI mandates the disclaimer: 'Past performance is not indicative of future returns.' Evaluate expense ratio, Sharpe ratio, rolling returns, and fund house pedigree.",
        exp_hi: "SEBI अनिवार्य करता है: 'पिछला प्रदर्शन भविष्य के रिटर्न का संकेत नहीं।' व्यय अनुपात, शार्प अनुपात, रोलिंग रिटर्न और फंड हाउस की साख देखें।",
      },
    ],
    normal: [
      {
        q: "The Sharpe ratio of a fund measures…",
        q_hi: "फंड का शार्प अनुपात मापता है…",
        opts: ["The fund's total assets", "Return per unit of risk taken — higher Sharpe = better risk-adjusted performance", "How many stocks the fund holds", "The fund manager's experience in years"],
        opts_hi: ["फंड की कुल संपत्ति", "लिए गए जोखिम प्रति यूनिट रिटर्न — उच्च शार्प = बेहतर जोखिम-समायोजित प्रदर्शन", "फंड कितने शेयर रखता है", "फंड मैनेजर के वर्षों का अनुभव"],
        ans: 1,
        exp: "Sharpe ratio = (fund return − risk-free rate) ÷ standard deviation. A Sharpe > 1 is good; > 2 is excellent. Compare funds with similar categories using this ratio.",
        exp_hi: "शार्प अनुपात = (फंड रिटर्न − जोखिम-मुक्त दर) ÷ मानक विचलन। शार्प > 1 अच्छा; > 2 उत्कृष्ट।",
      },
    ],
    advanced: [
      {
        q: "Rolling returns are more useful than trailing returns because…",
        q_hi: "रोलिंग रिटर्न ट्रेलिंग रिटर्न से अधिक उपयोगी हैं क्योंकि…",
        opts: ["They are always higher", "They show consistency across ALL periods, not just the current end-date — avoiding survivorship bias", "They are easier to calculate", "SEBI mandates them for all funds"],
        opts_hi: ["वे हमेशा अधिक होते हैं", "वे सभी अवधियों में स्थिरता दिखाते हैं, न केवल वर्तमान अंत-तिथि — उत्तरजीविता पूर्वाग्रह से बचते हैं", "गणना करना आसान है", "SEBI सभी फंड के लिए अनिवार्य करता है"],
        ans: 1,
        exp: "Trailing returns (1Y, 3Y, 5Y) are point-to-point and depend heavily on the start/end date. Rolling returns (e.g., every 3-year window over 10 years) reveal true consistency.",
        exp_hi: "ट्रेलिंग रिटर्न बिंदु-से-बिंदु हैं और शुरू/अंत तिथि पर निर्भर। रोलिंग रिटर्न वास्तविक स्थिरता दिखाते हैं।",
      },
    ],
  },

  // ── mf7 · Common Mutual Fund Mistakes ───────────────────
  mf7: {
    beginner: [
      {
        q: "A common mutual fund mistake beginners make is…",
        q_hi: "शुरुआती लोग म्यूचुअल फंड में एक सामान्य गलती करते हैं…",
        opts: ["Investing through direct plans", "Stopping SIP when markets fall — exactly when buying is most beneficial", "Choosing a low expense ratio fund", "Investing for more than 5 years"],
        opts_hi: ["डायरेक्ट प्लान के माध्यम से निवेश", "बाज़ार गिरने पर SIP रोकना — जब खरीदना सबसे फायदेमंद होता है", "कम व्यय अनुपात फंड चुनना", "5 साल से अधिक के लिए निवेश"],
        ans: 1,
        exp: "Market falls = lower NAV = more units per ₹. Stopping SIP in a downturn means missing the best buying opportunity. Stay invested through the cycle.",
        exp_hi: "बाज़ार गिरना = कम NAV = प्रति ₹ अधिक यूनिट। गिरावट में SIP रोकने का मतलब सबसे अच्छा खरीद अवसर चूकना।",
      },
    ],
    normal: [
      {
        q: "Over-diversifying a mutual fund portfolio (owning 15+ funds) is harmful because…",
        q_hi: "म्यूचुअल फंड पोर्टफोलियो में अत्यधिक विविधीकरण (15+ फंड) हानिकारक है क्योंकि…",
        opts: ["SEBI restricts holding more than 10 funds", "Funds in the same category overlap heavily — you get complexity without meaningful additional diversification", "More funds always means more returns", "It increases your tax burden automatically"],
        opts_hi: ["SEBI 10 से अधिक फंड रखने पर रोक लगाता है", "एक ही श्रेणी के फंड काफी ओवरलैप करते हैं — बिना सार्थक अतिरिक्त विविधीकरण के जटिलता", "अधिक फंड = हमेशा अधिक रिटर्न", "कर बोझ स्वतः बढ़ता है"],
        ans: 1,
        exp: "3–5 well-chosen funds provide sufficient diversification. 15 large-cap funds still mostly hold the same Nifty 50 stocks. More funds = more confusion, not more safety.",
        exp_hi: "3–5 अच्छी तरह चुने गए फंड पर्याप्त विविधीकरण देते हैं। 15 लार्ज-कैप फंड फिर भी वही Nifty 50 शेयर रखते हैं।",
      },
    ],
    advanced: [
      {
        q: "Redemption of equity mutual fund units held for less than 1 year attracts…",
        q_hi: "1 साल से कम समय के लिए रखी इक्विटी म्यूचुअल फंड यूनिट की रिडेम्पशन पर लगता है…",
        opts: ["No tax at all", "Short-term capital gains tax at 15%", "Tax at your income slab rate", "Long-term capital gains tax at 10%"],
        opts_hi: ["कोई कर नहीं", "15% पर अल्पकालिक पूंजीगत लाभ कर", "आपकी आय स्लैब दर पर कर", "10% पर दीर्घकालिक पूंजीगत लाभ कर"],
        ans: 1,
        exp: "Equity MF held < 1 year: STCG at 15%. Held > 1 year: LTCG at 10% on gains above ₹1 lakh. Always hold equity funds for > 1 year to get LTCG treatment.",
        exp_hi: "इक्विटी MF < 1 साल: 15% STCG। > 1 साल: ₹1 लाख से अधिक लाभ पर 10% LTCG। हमेशा LTCG लाभ के लिए > 1 साल रखें।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 10 · Stock Market
  // ═══════════════════════════════════════════════════════════

  // ── sm1 · What Is the Stock Market? ─────────────────────
  sm1: {
    beginner: [
      {
        q: "The stock market is a place where…",
        q_hi: "शेयर बाज़ार एक जगह है जहाँ…",
        opts: ["Only banks trade money", "Buyers and sellers trade shares of publicly listed companies", "The government sets all prices", "Only mutual funds are bought and sold"],
        opts_hi: ["केवल बैंक पैसे का व्यापार करते हैं", "खरीदार और विक्रेता सार्वजनिक रूप से सूचीबद्ध कंपनियों के शेयरों का व्यापार करते हैं", "सरकार सभी कीमतें तय करती है", "केवल म्यूचुअल फंड खरीदे और बेचे जाते हैं"],
        ans: 1,
        exp: "The stock market is an exchange where shares of public companies are bought and sold. In India, the two main exchanges are BSE and NSE.",
        exp_hi: "शेयर बाज़ार एक एक्सचेंज है जहाँ सार्वजनिक कंपनियों के शेयर खरीदे और बेचे जाते हैं। भारत में दो मुख्य एक्सचेंज BSE और NSE हैं।",
      },
    ],
    normal: [
      {
        q: "Stock prices are primarily determined by…",
        q_hi: "शेयर की कीमतें मुख्य रूप से निर्धारित होती हैं…",
        opts: ["The government setting a fixed price daily", "Supply and demand — driven by company performance, investor sentiment, and macroeconomic factors", "The Reserve Bank of India", "The face value of the share only"],
        opts_hi: ["सरकार द्वारा दैनिक निश्चित कीमत", "माँग और आपूर्ति — कंपनी प्रदर्शन, निवेशक भावना और व्यापक आर्थिक कारकों द्वारा", "भारतीय रिज़र्व बैंक", "केवल शेयर का अंकित मूल्य"],
        ans: 1,
        exp: "Share prices move based on supply (sellers) and demand (buyers). Strong earnings, good news, and bullish sentiment push prices up; the opposite brings them down.",
        exp_hi: "शेयर की कीमतें आपूर्ति और माँग के आधार पर बदलती हैं। मजबूत कमाई और अच्छी खबर कीमतें बढ़ाती है; विपरीत कम करता है।",
      },
    ],
    advanced: [
      {
        q: "The Nifty 50 index represents…",
        q_hi: "Nifty 50 सूचकांक प्रतिनिधित्व करता है…",
        opts: ["The 50 cheapest stocks on NSE", "The 50 largest and most liquid stocks on NSE — a benchmark for Indian large-cap equity performance", "All stocks listed on BSE", "The top 50 government companies only"],
        opts_hi: ["NSE पर 50 सबसे सस्ते शेयर", "NSE पर 50 सबसे बड़े और सबसे तरल शेयर — भारतीय लार्ज-कैप इक्विटी प्रदर्शन का बेंचमार्क", "BSE पर सूचीबद्ध सभी शेयर", "केवल शीर्ष 50 सरकारी कंपनियां"],
        ans: 1,
        exp: "Nifty 50 is NSE's flagship index of 50 large-cap stocks across sectors. It is the primary benchmark for Indian equity mutual funds and ETFs.",
        exp_hi: "Nifty 50 NSE का प्रमुख सूचकांक है जिसमें विभिन्न क्षेत्रों के 50 लार्ज-कैप शेयर हैं। भारतीय इक्विटी म्यूचुअल फंड और ETF का प्राथमिक बेंचमार्क।",
      },
    ],
  },

  // ── sm2 · How to Buy Stocks ──────────────────────────────
  sm2: {
    beginner: [
      {
        q: "To buy stocks in India you need…",
        q_hi: "भारत में शेयर खरीदने के लिए आपको चाहिए…",
        opts: ["A savings account only", "A Demat account and a trading account linked to your bank account", "A fixed deposit of at least ₹1 lakh", "Permission from SEBI for each trade"],
        opts_hi: ["केवल बचत खाता", "बैंक खाते से जुड़ा डीमैट खाता और ट्रेडिंग खाता", "कम से कम ₹1 लाख का FD", "प्रत्येक ट्रेड के लिए SEBI की अनुमति"],
        ans: 1,
        exp: "You need a Demat account (holds shares electronically) and a trading account (places buy/sell orders). Both are opened with a SEBI-registered broker.",
        exp_hi: "डीमैट खाता (शेयर इलेक्ट्रॉनिक रूप से रखता है) और ट्रेडिंग खाता (खरीद/बिक्री ऑर्डर) चाहिए। दोनों SEBI-पंजीकृत ब्रोकर के साथ खोले जाते हैं।",
      },
    ],
    normal: [
      {
        q: "A limit order in stock trading means…",
        q_hi: "स्टॉक ट्रेडिंग में लिमिट ऑर्डर का मतलब है…",
        opts: ["Buying at whatever price the stock is trading at right now", "Buying or selling only at a specified price or better — you control the execution price", "Limiting the number of shares you can own", "An order that expires at end of day automatically"],
        opts_hi: ["अभी जो भी कीमत पर शेयर ट्रेड हो रहा है खरीदना", "केवल निर्दिष्ट कीमत या बेहतर पर खरीदना/बेचना — आप निष्पादन कीमत नियंत्रित करते हैं", "आपके पास शेयरों की संख्या सीमित करना", "दिन के अंत में स्वतः समाप्त होने वाला ऑर्डर"],
        ans: 1,
        exp: "Limit order: 'Buy at ₹500 or less.' Market order: 'Buy at whatever price now.' Limit orders protect you from unfavourable price movements.",
        exp_hi: "लिमिट ऑर्डर: '₹500 या कम पर खरीदें।' मार्केट ऑर्डर: 'अभी जो भी कीमत पर खरीदें।' लिमिट ऑर्डर प्रतिकूल मूल्य आंदोलनों से बचाते हैं।",
      },
    ],
    advanced: [
      {
        q: "T+1 settlement in India means…",
        q_hi: "भारत में T+1 सेटलमेंट का मतलब है…",
        opts: ["Trades are settled instantly", "Shares and money are exchanged on the next trading day after the transaction", "It takes one month to receive shares", "Only applies to bond trading"],
        opts_hi: ["ट्रेड तुरंत सेटल होते हैं", "लेनदेन के अगले ट्रेडिंग दिन शेयर और पैसे का आदान-प्रदान होता है", "शेयर प्राप्त करने में एक महीना लगता है", "केवल बांड ट्रेडिंग पर लागू"],
        ans: 1,
        exp: "India moved to T+1 settlement in 2023 — one of the fastest in the world. Shares credited to Demat and money debited the next trading day after your trade.",
        exp_hi: "भारत 2023 में T+1 सेटलमेंट पर चला गया — दुनिया में सबसे तेज़ में से एक। ट्रेड के अगले ट्रेडिंग दिन डीमैट में शेयर जमा और पैसे डेबिट।",
      },
    ],
  },

  // ── sm3 · Reading Stock Fundamentals ────────────────────
  sm3: {
    beginner: [
      {
        q: "The P/E ratio (Price-to-Earnings) tells you…",
        q_hi: "P/E अनुपात (मूल्य-से-आय) बताता है…",
        opts: ["The company's total revenue", "How many times the annual earnings the market is willing to pay for one share", "The company's debt level", "How many employees the company has"],
        opts_hi: ["कंपनी का कुल राजस्व", "बाज़ार एक शेयर के लिए वार्षिक कमाई का कितना गुना देने को तैयार है", "कंपनी का कर्ज़ स्तर", "कंपनी के कर्मचारियों की संख्या"],
        ans: 1,
        exp: "P/E = Share Price ÷ Earnings Per Share. A P/E of 20 means you pay ₹20 for every ₹1 of annual profit. Lower P/E may indicate undervaluation; higher may mean overvaluation.",
        exp_hi: "P/E = शेयर मूल्य ÷ प्रति शेयर आय। P/E 20 का मतलब ₹1 वार्षिक लाभ के लिए ₹20 देते हैं। कम P/E कम मूल्यांकन का संकेत हो सकता है।",
      },
    ],
    normal: [
      {
        q: "A company with high Return on Equity (ROE) indicates…",
        q_hi: "उच्च ROE (इक्विटी पर रिटर्न) वाली कंपनी संकेत देती है…",
        opts: ["The company has a lot of debt", "The company efficiently generates profit from shareholders' money — generally a sign of quality management", "The stock price is low", "The company pays no dividends"],
        opts_hi: ["कंपनी पर बहुत कर्ज़ है", "कंपनी शेयरधारकों के पैसे से कुशलतापूर्वक लाभ उत्पन्न करती है — आमतौर पर गुणवत्ता प्रबंधन का संकेत", "शेयर की कीमत कम है", "कंपनी कोई लाभांश नहीं देती"],
        ans: 1,
        exp: "ROE = Net Profit ÷ Shareholders' Equity. ROE > 15% consistently suggests the company creates good returns for its owners. Warren Buffett looks for ROE > 20%.",
        exp_hi: "ROE = शुद्ध लाभ ÷ शेयरधारकों की इक्विटी। लगातार ROE > 15% अच्छे मालिक रिटर्न का सुझाव देता है।",
      },
    ],
    advanced: [
      {
        q: "Free Cash Flow (FCF) is considered more reliable than net profit because…",
        q_hi: "फ्री कैश फ्लो (FCF) शुद्ध लाभ से अधिक विश्वसनीय माना जाता है क्योंकि…",
        opts: ["FCF is always higher than net profit", "FCF is actual cash generated after capex — harder to manipulate than accounting profit which can be adjusted via depreciation, provisions etc.", "FCF includes loan repayments", "FCF is mandated by SEBI to be reported monthly"],
        opts_hi: ["FCF हमेशा शुद्ध लाभ से अधिक होता है", "FCF capex के बाद उत्पन्न वास्तविक नकद है — लेखांकन लाभ से हेरफेर करना कठिन जो मूल्यह्रास, प्रावधानों आदि से समायोजित हो सकता है", "FCF में कर्ज़ चुकाना शामिल है", "SEBI FCF मासिक रिपोर्ट करना अनिवार्य करता है"],
        ans: 1,
        exp: "Companies can inflate net profit via accounting adjustments. FCF = Operating Cash Flow − Capital Expenditure. A company consistently generating positive FCF is financially healthy.",
        exp_hi: "कंपनियाँ लेखांकन समायोजन से शुद्ध लाभ बढ़ा सकती हैं। FCF = परिचालन नकद प्रवाह − पूंजी व्यय। लगातार सकारात्मक FCF वित्तीय स्वास्थ्य का संकेत।",
      },
    ],
  },

  // ── sm4 · Bull & Bear Markets ───────────────────────────
  sm4: {
    beginner: [
      {
        q: "A bull market means…",
        q_hi: "बुल मार्केट का मतलब है…",
        opts: ["Markets are closed for trading", "Stock prices are rising broadly and investor confidence is high", "Only bank stocks are performing well", "A market crash is imminent"],
        opts_hi: ["बाज़ार ट्रेडिंग के लिए बंद हैं", "शेयर की कीमतें व्यापक रूप से बढ़ रही हैं और निवेशक का विश्वास उच्च है", "केवल बैंक शेयर अच्छा प्रदर्शन कर रहे हैं", "बाज़ार दुर्घटना आसन्न है"],
        ans: 1,
        exp: "Bull market: sustained rise in stock prices (typically 20%+ from recent lows). Bear market: sustained fall of 20%+ from recent highs. Both are normal parts of the market cycle.",
        exp_hi: "बुल मार्केट: शेयर की कीमतों में निरंतर वृद्धि (आमतौर पर हाल के निम्न से 20%+)। बेयर मार्केट: हाल के उच्च से 20%+ की गिरावट।",
      },
    ],
    normal: [
      {
        q: "The best investor behaviour during a market crash is…",
        q_hi: "बाज़ार दुर्घटना के दौरान सबसे अच्छा निवेशक व्यवहार है…",
        opts: ["Sell everything to avoid further loss", "Stay invested or buy more if you have a long horizon — crashes are temporary, recoveries are permanent", "Move all money to gold immediately", "Stop all SIPs until markets recover"],
        opts_hi: ["और नुकसान से बचने के लिए सब बेचें", "लंबे क्षितिज पर निवेशित रहें या अधिक खरीदें — दुर्घटनाएं अस्थायी, रिकवरी स्थायी", "तुरंत सब सोने में ले जाएं", "बाज़ार ठीक होने तक सभी SIP रोकें"],
        ans: 1,
        exp: "Every major Nifty crash (2008, 2020) fully recovered and hit new highs. Selling during crashes locks in losses. Staying invested or buying more (SIP) captures the recovery.",
        exp_hi: "हर बड़ी Nifty दुर्घटना (2008, 2020) पूरी तरह से ठीक हुई और नई ऊंचाई पर पहुँची। दुर्घटना के दौरान बेचना नुकसान को पक्का करता है।",
      },
    ],
    advanced: [
      {
        q: "Market corrections (10–20% drops) are healthy because…",
        q_hi: "बाज़ार सुधार (10–20% गिरावट) स्वस्थ हैं क्योंकि…",
        opts: ["They permanently destroy wealth", "They reset overvaluations, shake out weak hands, and create better entry points for long-term investors", "They only affect small-cap stocks", "They signal the end of the economy"],
        opts_hi: ["वे स्थायी रूप से संपत्ति नष्ट करते हैं", "वे अत्यधिक मूल्यांकन रीसेट करते हैं, कमज़ोर हाथ हटाते हैं और दीर्घकालिक निवेशकों के लिए बेहतर प्रवेश बिंदु बनाते हैं", "केवल स्मॉल-कैप शेयरों को प्रभावित करते हैं", "अर्थव्यवस्था के अंत का संकेत"],
        ans: 1,
        exp: "Corrections are part of every healthy bull market. Nifty has had 10%+ corrections roughly every 1–2 years but has still compounded at ~12% CAGR over decades.",
        exp_hi: "सुधार हर स्वस्थ बुल मार्केट का हिस्सा हैं। Nifty में लगभग हर 1–2 साल में 10%+ सुधार हुआ लेकिन दशकों में ~12% CAGR पर चक्रवृद्धि हुई।",
      },
    ],
  },

  // ── sm5 · Dividends & Buybacks ──────────────────────────
  sm5: {
    beginner: [
      {
        q: "A dividend is…",
        q_hi: "लाभांश है…",
        opts: ["A fine paid by a company for breaking rules", "A portion of company profits distributed to shareholders", "The fee to buy a share", "A type of loan from the company"],
        opts_hi: ["नियम तोड़ने के लिए कंपनी द्वारा भुगतान जुर्माना", "शेयरधारकों को वितरित कंपनी के लाभ का एक हिस्सा", "शेयर खरीदने की फीस", "कंपनी का एक प्रकार का कर्ज़"],
        ans: 1,
        exp: "Dividends are cash payments from a company's profits to its shareholders. Not all companies pay dividends — growth companies reinvest profits instead.",
        exp_hi: "लाभांश कंपनी के लाभ से शेयरधारकों को नकद भुगतान है। सभी कंपनियाँ लाभांश नहीं देतीं — विकास कंपनियाँ लाभ पुनर्निवेश करती हैं।",
      },
    ],
    normal: [
      {
        q: "A share buyback by a company usually signals…",
        q_hi: "कंपनी द्वारा शेयर बायबैक आमतौर पर संकेत देता है…",
        opts: ["The company is going bankrupt", "Management believes the stock is undervalued and returning cash to shareholders is the best use of surplus funds", "The company is issuing new shares", "Dividends will be stopped permanently"],
        opts_hi: ["कंपनी दिवालिया हो रही है", "प्रबंधन को लगता है शेयर कम मूल्यांकित है और अधिशेष फंड का सबसे अच्छा उपयोग शेयरधारकों को नकद वापस करना है", "कंपनी नए शेयर जारी कर रही है", "लाभांश स्थायी रूप से बंद होगा"],
        ans: 1,
        exp: "Buybacks reduce shares outstanding, increasing EPS for remaining shareholders. They are often seen as a bullish signal from management about future prospects.",
        exp_hi: "बायबैक बकाया शेयर कम करता है, शेष शेयरधारकों के लिए EPS बढ़ाता है। अक्सर भविष्य की संभावनाओं के बारे में प्रबंधन से तेजी का संकेत।",
      },
    ],
    advanced: [
      {
        q: "Dividend income from Indian companies in hands of resident individuals is taxed at…",
        q_hi: "भारतीय कंपनियों से लाभांश आय निवासी व्यक्तियों के हाथ में कर लगती है…",
        opts: ["0% — always tax-free", "The individual's applicable income tax slab rate", "A flat 10% always", "20% with surcharge"],
        opts_hi: ["0% — हमेशा कर-मुक्त", "व्यक्ति की लागू आयकर स्लैब दर", "हमेशा 10% की एकमुश्त दर", "अधिभार के साथ 20%"],
        ans: 1,
        exp: "Since FY 2020-21, dividends are taxable in the hands of the recipient at their slab rate. TDS at 10% is deducted if dividend > ₹5,000/year from a company.",
        exp_hi: "FY 2020-21 से, लाभांश प्राप्तकर्ता के हाथ में उनकी स्लैब दर पर कर योग्य। कंपनी से ₹5,000/वर्ष से अधिक लाभांश पर 10% TDS।",
      },
    ],
  },

  // ── sm6 · Common Stock Market Mistakes ──────────────────
  sm6: {
    beginner: [
      {
        q: "The most dangerous beginner mistake in stock markets is…",
        q_hi: "शेयर बाज़ार में सबसे खतरनाक शुरुआती गलती है…",
        opts: ["Investing in index funds", "Following stock tips from social media or WhatsApp groups without research", "Holding stocks for more than 3 years", "Diversifying across sectors"],
        opts_hi: ["इंडेक्स फंड में निवेश", "बिना शोध के सोशल मीडिया या WhatsApp ग्रुप से स्टॉक टिप्स फॉलो करना", "3 साल से अधिक शेयर रखना", "क्षेत्रों में विविधीकरण"],
        ans: 1,
        exp: "Unverified tips lead to pump-and-dump schemes. Always research a company's fundamentals before investing. If someone guarantees returns, it's a red flag.",
        exp_hi: "असत्यापित टिप्स पंप-एंड-डंप योजनाओं की ओर ले जाती हैं। निवेश से पहले हमेशा कंपनी के मूल सिद्धांतों का शोध करें।",
      },
    ],
    normal: [
      {
        q: "Trying to 'time the market' (buy at the bottom, sell at the top) fails for most investors because…",
        q_hi: "'बाज़ार का समय' (नीचे खरीदें, ऊपर बेचें) अधिकांश निवेशकों के लिए विफल होता है क्योंकि…",
        opts: ["It is illegal in India", "No one can consistently predict market tops and bottoms — missing just the 10 best days in a decade devastates returns", "Markets move too slowly to time", "Only institutions can time markets legally"],
        opts_hi: ["यह भारत में अवैध है", "कोई भी लगातार बाज़ार के शीर्ष और तलहटी की भविष्यवाणी नहीं कर सकता — एक दशक में केवल 10 सबसे अच्छे दिन चूकने से रिटर्न बर्बाद", "बाज़ार बहुत धीरे चलते हैं", "केवल संस्थाएं कानूनी रूप से समय निर्धारित कर सकती हैं"],
        ans: 1,
        exp: "Studies show missing the 10 best market days in a decade can cut returns by 50%+. Those best days often occur during volatile, scary periods when most people are selling.",
        exp_hi: "अध्ययन दिखाते हैं एक दशक में 10 सबसे अच्छे दिन चूकने से रिटर्न 50%+ कट सकता है। ये दिन अक्सर अस्थिर, डरावने समय में आते हैं।",
      },
    ],
    advanced: [
      {
        q: "Overconfidence bias in stock investing leads to…",
        q_hi: "शेयर निवेश में अत्यधिक आत्मविश्वास पूर्वाग्रह की ओर ले जाता है…",
        opts: ["Better stock selection through confidence", "Excessive trading, under-diversification, and ignoring contradictory evidence — all reducing returns", "Higher dividends from companies", "Better returns than index funds always"],
        opts_hi: ["आत्मविश्वास से बेहतर शेयर चयन", "अत्यधिक ट्रेडिंग, कम विविधीकरण और विरोधाभासी साक्ष्य को अनदेखा करना — सभी रिटर्न कम करते हैं", "कंपनियों से अधिक लाभांश", "हमेशा इंडेक्स फंड से बेहतर रिटर्न"],
        ans: 1,
        exp: "Overconfident investors trade too often (increasing costs), concentrate in few stocks (increasing risk), and dismiss negative information. Systematic index investing beats most overconfident active traders.",
        exp_hi: "अत्यधिक आत्मविश्वासी निवेशक बहुत अधिक ट्रेड करते हैं, कुछ शेयरों में ध्यान केंद्रित करते हैं और नकारात्मक जानकारी को खारिज करते हैं।",
      },
    ],
  },

  // ── sm7 · Long-Term Wealth via Stocks ───────────────────
  sm7: {
    beginner: [
      {
        q: "The safest way for a beginner to invest in stocks is…",
        q_hi: "शुरुआती व्यक्ति के लिए शेयरों में निवेश का सबसे सुरक्षित तरीका है…",
        opts: ["Buying penny stocks for high returns", "Investing through a Nifty 50 index fund or ETF via SIP", "Day trading using leverage", "Following celebrity stock tips on Instagram"],
        opts_hi: ["उच्च रिटर्न के लिए पैनी स्टॉक खरीदना", "SIP के माध्यम से Nifty 50 इंडेक्स फंड या ETF के माध्यम से निवेश", "लीवरेज का उपयोग करके डे ट्रेडिंग", "Instagram पर सेलिब्रिटी स्टॉक टिप्स फॉलो करना"],
        ans: 1,
        exp: "Index funds give instant diversification across 50 large companies, low cost, and long-term market returns — without needing to pick stocks.",
        exp_hi: "इंडेक्स फंड 50 बड़ी कंपनियों में तत्काल विविधीकरण, कम लागत और दीर्घकालिक बाज़ार रिटर्न देते हैं — शेयर चुने बिना।",
      },
    ],
    normal: [
      {
        q: "Warren Buffett's key investing principle that applies universally is…",
        q_hi: "वॉरेन बफेट का मुख्य निवेश सिद्धांत जो सार्वभौमिक रूप से लागू होता है…",
        opts: ["Buy high, sell higher", "Buy great businesses at fair prices and hold for the long term — let compounding do the work", "Trade frequently to capture short-term moves", "Only invest in US stocks"],
        opts_hi: ["ऊंचा खरीदें, और ऊंचा बेचें", "उचित कीमत पर महान व्यवसाय खरीदें और दीर्घकालिक रूप से रखें — चक्रवृद्धि को काम करने दें", "अल्पकालिक चाल पकड़ने के लिए बार-बार ट्रेड करें", "केवल US शेयरों में निवेश करें"],
        ans: 1,
        exp: "Buffett's approach: buy quality businesses with competitive moats at reasonable valuations. Hold for years. Time in the market beats timing the market.",
        exp_hi: "बफेट का दृष्टिकोण: उचित मूल्यांकन पर प्रतिस्पर्धी खाई वाले गुणवत्ता व्यवसाय खरीदें। वर्षों तक रखें। बाज़ार में समय, समय निर्धारण को मात देता है।",
      },
    ],
    advanced: [
      {
        q: "The primary reason equity creates long-term wealth is…",
        q_hi: "इक्विटी दीर्घकालिक संपत्ति बनाने का प्राथमिक कारण है…",
        opts: ["Stock prices are always rising in the short term", "Equity represents ownership in businesses that reinvest profits to grow — compounding real economic value over decades", "Government guarantees equity returns", "Stock markets are manipulated to always go up"],
        opts_hi: ["शेयर की कीमतें अल्पकालिक में हमेशा बढ़ती हैं", "इक्विटी उन व्यवसायों में स्वामित्व का प्रतिनिधित्व करती है जो बढ़ने के लिए लाभ पुनर्निवेश करते हैं — दशकों में वास्तविक आर्थिक मूल्य की चक्रवृद्धि", "सरकार इक्विटी रिटर्न की गारंटी देती है", "शेयर बाज़ार हमेशा ऊपर जाने के लिए हेरफेर किए जाते हैं"],
        ans: 1,
        exp: "Stocks = ownership in real businesses. As companies grow revenues and profits over decades, their intrinsic value and stock prices follow. This is why long-term equity outperforms all other assets.",
        exp_hi: "शेयर = वास्तविक व्यवसायों में स्वामित्व। जैसे-जैसे कंपनियाँ दशकों में राजस्व और लाभ बढ़ाती हैं, उनका आंतरिक मूल्य और शेयर मूल्य बढ़ता है।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 11 · Retirement Planning
  // ═══════════════════════════════════════════════════════════

  // ── ret1 · Why Plan for Retirement? ─────────────────────
  ret1: {
    beginner: [
      {
        q: "Why is retirement planning important?",
        q_hi: "सेवानिवृत्ति योजना क्यों महत्वपूर्ण है?",
        opts: ["Because the government funds everyone's retirement fully", "Because you will need income when you stop working — and building that corpus takes decades", "Because it reduces your current income tax to zero", "Because your employer is required to save for you"],
        opts_hi: ["क्योंकि सरकार सभी की सेवानिवृत्ति पूरी तरह वित्तपोषित करती है", "क्योंकि काम बंद करने पर आपको आय चाहिए — और वह कॉर्पस बनाने में दशक लगते हैं", "क्योंकि यह वर्तमान आयकर शून्य कर देता है", "क्योंकि नियोक्ता आपके लिए बचाने के लिए बाध्य है"],
        ans: 1,
        exp: "Most Indians have no government pension. You must build your own retirement corpus — and the longer you wait, the harder it becomes due to compounding.",
        exp_hi: "अधिकांश भारतीयों के पास कोई सरकारी पेंशन नहीं। आपको अपना सेवानिवृत्ति कॉर्पस खुद बनाना होगा — और जितना अधिक इंतज़ार, उतना कठिन।",
      },
    ],
    normal: [
      {
        q: "The 'retirement corpus' is the amount you need because…",
        q_hi: "'सेवानिवृत्ति कॉर्पस' वह राशि है जो आपको चाहिए क्योंकि…",
        opts: ["Banks require it for senior citizen accounts", "It should generate enough annual income (via interest/returns) to cover your expenses for the rest of your life", "It is required by law before age 60", "It replaces health insurance in old age"],
        opts_hi: ["बैंक वरिष्ठ नागरिक खातों के लिए इसकी आवश्यकता रखते हैं", "यह आपके शेष जीवन के खर्चों को कवर करने के लिए पर्याप्त वार्षिक आय (ब्याज/रिटर्न के माध्यम से) उत्पन्न करे", "यह 60 वर्ष की आयु से पहले कानून द्वारा आवश्यक है", "यह वृद्धावस्था में स्वास्थ्य बीमा की जगह लेता है"],
        ans: 1,
        exp: "A retirement corpus invested conservatively at 6–7% should generate enough monthly income to sustain your lifestyle without depleting the principal.",
        exp_hi: "6–7% पर रूढ़िवादी रूप से निवेश किया गया सेवानिवृत्ति कॉर्पस मूलधन को खर्च किए बिना आपकी जीवनशैली बनाए रखने के लिए पर्याप्त मासिक आय उत्पन्न करे।",
      },
    ],
    advanced: [
      {
        q: "The 4% withdrawal rule suggests…",
        q_hi: "4% निकासी नियम सुझाव देता है…",
        opts: ["Withdraw 4% of savings monthly", "Withdraw 4% of your retirement corpus annually — this rate has historically sustained a portfolio for 30 years", "Invest only 4% of income for retirement", "Keep 4% of corpus in cash always"],
        opts_hi: ["मासिक बचत का 4% निकालें", "वार्षिक सेवानिवृत्ति कॉर्पस का 4% निकालें — यह दर ऐतिहासिक रूप से 30 साल के लिए पोर्टफोलियो बनाए रखती है", "सेवानिवृत्ति के लिए केवल आय का 4% निवेश करें", "कॉर्पस का 4% हमेशा नकद में रखें"],
        ans: 1,
        exp: "The 4% rule (Bengen, 1994): withdrawing 4% of corpus in year 1 and adjusting for inflation each year historically sustained a balanced portfolio for 30 years.",
        exp_hi: "4% नियम (बेनगेन, 1994): वर्ष 1 में कॉर्पस का 4% निकालना और हर साल मुद्रास्फीति के लिए समायोजित करना ऐतिहासिक रूप से 30 साल के लिए संतुलित पोर्टफोलियो बनाए रखता है।",
      },
    ],
  },

  // ── ret2 · EPF & PPF for Retirement ─────────────────────
  ret2: {
    beginner: [
      {
        q: "EPF (Employees' Provident Fund) helps retirement because…",
        q_hi: "EPF (कर्मचारी भविष्य निधि) सेवानिवृत्ति में मदद करता है क्योंकि…",
        opts: ["It pays monthly salary after retirement automatically", "A portion of your salary is saved each month earning interest — building a corpus over your working years", "It replaces term insurance", "It is only for government employees"],
        opts_hi: ["यह सेवानिवृत्ति के बाद स्वचालित रूप से मासिक वेतन देता है", "आपके वेतन का एक हिस्सा हर महीने ब्याज कमाते हुए बचाया जाता है — कार्यकाल में कॉर्पस बनाता है", "यह टर्म बीमा की जगह लेता है", "केवल सरकारी कर्मचारियों के लिए"],
        ans: 1,
        exp: "12% of basic salary goes to EPF each month (matched by employer). The corpus earns ~8.1% interest and is tax-free at maturity — a powerful forced saving.",
        exp_hi: "मूल वेतन का 12% हर महीने EPF में जाता है (नियोक्ता द्वारा मिलान)। कॉर्पस ~8.1% ब्याज कमाता है और परिपक्वता पर कर-मुक्त है।",
      },
    ],
    normal: [
      {
        q: "PPF (Public Provident Fund) is ideal for retirement because…",
        q_hi: "PPF (सार्वजनिक भविष्य निधि) सेवानिवृत्ति के लिए आदर्श है क्योंकि…",
        opts: ["It offers the highest returns of all investments", "It is EEE (Exempt-Exempt-Exempt) — investment, interest, and maturity are all tax-free; sovereign guarantee", "It has no lock-in period", "It is only available to government employees"],
        opts_hi: ["यह सभी निवेशों का उच्चतम रिटर्न देता है", "यह EEE है — निवेश, ब्याज और परिपक्वता सभी कर-मुक्त; संप्रभु गारंटी", "कोई लॉक-इन नहीं", "केवल सरकारी कर्मचारियों के लिए"],
        ans: 1,
        exp: "PPF: ₹500–₹1.5 lakh/year, 15-year lock-in (extendable), ~7.1% interest, fully EEE status. No market risk. A cornerstone of conservative retirement planning.",
        exp_hi: "PPF: ₹500–₹1.5 लाख/वर्ष, 15 साल लॉक-इन (विस्तार योग्य), ~7.1% ब्याज, पूरी तरह EEE। कोई बाज़ार जोखिम नहीं।",
      },
    ],
    advanced: [
      {
        q: "The optimal retirement strategy combining EPF + PPF + equity is…",
        q_hi: "EPF + PPF + इक्विटी को मिलाकर इष्टतम सेवानिवृत्ति रणनीति है…",
        opts: ["Invest only in EPF and PPF for complete safety", "Use EPF + PPF for the safe debt portion, and equity mutual funds (via SIP) for growth — targeting 60/40 or 70/30 equity/debt ratio based on age", "Invest only in equity for maximum returns", "Keep everything in FDs for simplicity"],
        opts_hi: ["पूर्ण सुरक्षा के लिए केवल EPF और PPF में निवेश", "सुरक्षित डेट भाग के लिए EPF + PPF और वृद्धि के लिए इक्विटी म्यूचुअल फंड (SIP के माध्यम से) — आयु के आधार पर 60/40 या 70/30 इक्विटी/डेट अनुपात", "अधिकतम रिटर्न के लिए केवल इक्विटी में", "सरलता के लिए सब FD में"],
        ans: 1,
        exp: "EPF + PPF provide safe, tax-free debt returns. Equity SIPs drive growth. A rule of thumb: equity allocation = 100 − your age. Rebalance annually.",
        exp_hi: "EPF + PPF सुरक्षित, कर-मुक्त डेट रिटर्न देते हैं। इक्विटी SIP वृद्धि देती है। अंगूठे का नियम: इक्विटी आवंटन = 100 − आपकी आयु।",
      },
    ],
  },

  // ── ret3 · NPS Explained ─────────────────────────────────
  ret3: {
    beginner: [
      {
        q: "NPS (National Pension System) is…",
        q_hi: "NPS (राष्ट्रीय पेंशन प्रणाली) है…",
        opts: ["A type of health insurance", "A voluntary government-regulated retirement savings scheme with market-linked returns", "A savings account for children only", "A scheme only for government employees"],
        opts_hi: ["एक प्रकार का स्वास्थ्य बीमा", "बाज़ार-संबद्ध रिटर्न के साथ स्वैच्छिक सरकार-नियमित सेवानिवृत्ति बचत योजना", "केवल बच्चों के लिए बचत खाता", "केवल सरकारी कर्मचारियों के लिए योजना"],
        ans: 1,
        exp: "NPS is open to all Indian citizens (18–70 years). Money is invested in equity, corporate bonds, and government securities. Withdrawals allowed at 60.",
        exp_hi: "NPS सभी भारतीय नागरिकों (18–70 वर्ष) के लिए खुला है। पैसा इक्विटी, कॉर्पोरेट बांड और सरकारी प्रतिभूतियों में निवेश होता है।",
      },
    ],
    normal: [
      {
        q: "NPS Tier 1 account has which key restriction?",
        q_hi: "NPS टियर 1 खाते की मुख्य सीमा क्या है?",
        opts: ["Maximum ₹500/year contribution", "Funds are locked till age 60 with limited partial withdrawal allowed for specific purposes", "No tax benefit on contributions", "Cannot invest in equities"],
        opts_hi: ["अधिकतम ₹500/वर्ष योगदान", "60 वर्ष की आयु तक लॉक — विशिष्ट उद्देश्यों के लिए सीमित आंशिक निकासी की अनुमति", "योगदान पर कोई कर लाभ नहीं", "इक्विटी में निवेश नहीं कर सकते"],
        ans: 1,
        exp: "NPS Tier 1 is locked till 60 (with exceptions for illness, education, home purchase). At 60, 60% can be withdrawn tax-free; 40% must be used to buy an annuity.",
        exp_hi: "NPS टियर 1 60 तक लॉक है (बीमारी, शिक्षा, घर खरीदने के अपवाद)। 60 पर 60% कर-मुक्त निकासी; 40% से एन्युटी खरीदनी होगी।",
      },
    ],
    advanced: [
      {
        q: "NPS is most tax-efficient because of…",
        q_hi: "NPS सबसे अधिक कर-कुशल है क्योंकि…",
        opts: ["Zero returns risk", "Triple deduction benefit: 80C (₹1.5L) + 80CCD(1B) (₹50K extra) + employer contribution under 80CCD(2) — potentially ₹2 lakh+ deduction", "Dividends are tax-free", "There is no lock-in period"],
        opts_hi: ["शून्य रिटर्न जोखिम", "तीहरा कटौती लाभ: 80C (₹1.5L) + 80CCD(1B) (₹50K अतिरिक्त) + 80CCD(2) के तहत नियोक्ता योगदान — संभावित ₹2 लाख+ कटौती", "लाभांश कर-मुक्त हैं", "कोई लॉक-इन नहीं"],
        ans: 1,
        exp: "NPS offers the only investment with BOTH an 80C bucket AND an additional exclusive ₹50,000 deduction under 80CCD(1B). Employer NPS contributions (up to 10% of salary) are also deductible under 80CCD(2).",
        exp_hi: "NPS एकमात्र निवेश है जो 80C बकेट AND अतिरिक्त विशेष ₹50,000 कटौती 80CCD(1B) दोनों देता है। नियोक्ता NPS योगदान (वेतन का 10% तक) भी 80CCD(2) के तहत कटौती योग्य।",
      },
    ],
  },

  // ── ret4 · How Much to Save for Retirement ───────────────
  ret4: {
    beginner: [
      {
        q: "A simple rule for how much to save for retirement is…",
        q_hi: "सेवानिवृत्ति के लिए कितना बचाएं — एक सरल नियम है…",
        opts: ["Save whatever is left after spending", "Save at least 15–20% of your income specifically for retirement from your first paycheck", "Save only after age 45", "Save only if your employer matches contributions"],
        opts_hi: ["खर्च के बाद जो बचे बचाएं", "पहले वेतन से विशेष रूप से सेवानिवृत्ति के लिए कम से कम आय का 15–20% बचाएं", "केवल 45 वर्ष की आयु के बाद बचाएं", "केवल तभी बचाएं जब नियोक्ता योगदान मिलाए"],
        ans: 1,
        exp: "Starting early with 15–20% of income dedicated to retirement leverages compounding. Waiting till 40 requires saving 30–40% to catch up.",
        exp_hi: "जल्दी शुरू करके आय का 15–20% सेवानिवृत्ति के लिए समर्पित करना चक्रवृद्धि का लाभ उठाता है। 40 तक इंतज़ार करने पर 30–40% बचत चाहिए।",
      },
    ],
    normal: [
      {
        q: "To estimate your retirement corpus needed, a common formula is…",
        q_hi: "आवश्यक सेवानिवृत्ति कॉर्पस का अनुमान लगाने के लिए एक सामान्य सूत्र है…",
        opts: ["Current monthly expenses × 12", "Annual expenses at retirement (inflation-adjusted) × 25 — based on the 4% withdrawal rule", "Your current salary × 10", "₹1 crore for everyone"],
        opts_hi: ["वर्तमान मासिक खर्च × 12", "सेवानिवृत्ति पर वार्षिक खर्च (मुद्रास्फीति-समायोजित) × 25 — 4% निकासी नियम पर आधारित", "आपका वर्तमान वेतन × 10", "सभी के लिए ₹1 करोड़"],
        ans: 1,
        exp: "If monthly expenses at retirement = ₹50,000 (₹6 lakh/year), corpus needed = ₹6 lakh × 25 = ₹1.5 crore. Adjust for inflation between now and retirement.",
        exp_hi: "यदि सेवानिवृत्ति पर मासिक खर्च = ₹50,000 (₹6 लाख/वर्ष), कॉर्पस = ₹6 लाख × 25 = ₹1.5 करोड़। अभी और सेवानिवृत्ति के बीच मुद्रास्फीति के लिए समायोजित करें।",
      },
    ],
    advanced: [
      {
        q: "Inflation's impact on retirement planning means…",
        q_hi: "सेवानिवृत्ति योजना पर मुद्रास्फीति के प्रभाव का मतलब है…",
        opts: ["You need less corpus because prices will fall", "Today's ₹50,000/month expenses will cost ~₹1.3 lakh/month in 20 years at 5% inflation — your corpus must account for this", "Inflation doesn't affect retired people", "Only food prices are affected by inflation"],
        opts_hi: ["कम कॉर्पस चाहिए क्योंकि कीमतें गिरेंगी", "आज के ₹50,000/माह खर्च 5% मुद्रास्फीति पर 20 साल में ~₹1.3 लाख/माह होंगे — आपके कॉर्पस को यह ध्यान में रखना होगा", "मुद्रास्फीति सेवानिवृत्त लोगों को प्रभावित नहीं करती", "केवल खाद्य कीमतें मुद्रास्फीति से प्रभावित होती हैं"],
        ans: 1,
        exp: "At 5% inflation, purchasing power halves every 14 years. A retirement corpus must be sized for future (inflation-adjusted) expenses, not today's expenses.",
        exp_hi: "5% मुद्रास्फीति पर क्रय शक्ति 14 साल में आधी हो जाती है। कॉर्पस भविष्य के (मुद्रास्फीति-समायोजित) खर्चों के लिए होना चाहिए।",
      },
    ],
  },

  // ── ret5 · Annuities & Pension Products ─────────────────
  ret5: {
    beginner: [
      {
        q: "An annuity is…",
        q_hi: "एन्युटी है…",
        opts: ["A type of bank savings account", "A financial product that provides regular income payments in exchange for a lump sum investment", "A government tax on retirement savings", "A type of health insurance for seniors"],
        opts_hi: ["एक प्रकार का बैंक बचत खाता", "एक वित्तीय उत्पाद जो एकमुश्त निवेश के बदले नियमित आय भुगतान प्रदान करता है", "सेवानिवृत्ति बचत पर सरकारी कर", "वरिष्ठ नागरिकों के लिए स्वास्थ्य बीमा"],
        ans: 1,
        exp: "You give an insurance company a lump sum; they pay you a monthly income for life (or a fixed period). NPS requires 40% of corpus to be annuitised at retirement.",
        exp_hi: "आप बीमा कंपनी को एकमुश्त देते हैं; वे आपको जीवनभर (या निश्चित अवधि के लिए) मासिक आय देते हैं।",
      },
    ],
    normal: [
      {
        q: "The main drawback of annuities in India is…",
        q_hi: "भारत में एन्युटी का मुख्य नुकसान है…",
        opts: ["They are illegal for private citizens", "Low annuity rates (5–6%) that may not keep up with inflation — eroding real purchasing power over time", "They pay returns only for 5 years maximum", "They require daily management"],
        opts_hi: ["वे निजी नागरिकों के लिए अवैध हैं", "कम एन्युटी दरें (5–6%) जो मुद्रास्फीति के साथ नहीं रह सकती — समय के साथ वास्तविक क्रय शक्ति कम करती हैं", "वे अधिकतम 5 साल के लिए रिटर्न देती हैं", "दैनिक प्रबंधन की आवश्यकता है"],
        ans: 1,
        exp: "Indian annuity rates are typically 5–6%. At 6% inflation, fixed annuity income loses real value every year. Inflation-indexed annuities exist but are expensive.",
        exp_hi: "भारतीय एन्युटी दरें आमतौर पर 5–6% हैं। 6% मुद्रास्फीति पर निश्चित एन्युटी आय हर साल वास्तविक मूल्य खोती है।",
      },
    ],
    advanced: [
      {
        q: "A systematic withdrawal plan (SWP) from mutual funds is often better than an annuity for retirement income because…",
        q_hi: "सेवानिवृत्ति आय के लिए म्यूचुअल फंड से SWP अक्सर एन्युटी से बेहतर है क्योंकि…",
        opts: ["SWP is guaranteed by the government", "SWP allows the remaining corpus to keep growing in equities while withdrawing regularly — potentially inflation-beating income with capital preservation", "Annuities always give higher income", "SWP has no tax implications"],
        opts_hi: ["SWP सरकार द्वारा गारंटीड है", "SWP शेष कॉर्पस को इक्विटी में बढ़ते रहने देता है जबकि नियमित निकासी होती है — संभावित मुद्रास्फीति-मात करने वाली आय और पूंजी संरक्षण", "एन्युटी हमेशा अधिक आय देती है", "SWP के कोई कर निहितार्थ नहीं"],
        ans: 1,
        exp: "SWP from a balanced fund: withdraw ₹30,000/month while corpus grows at 8–10%. Corpus may last 30+ years vs a fixed annuity that erodes with inflation.",
        exp_hi: "संतुलित फंड से SWP: ₹30,000/माह निकालें जबकि कॉर्पस 8–10% पर बढ़ता है। कॉर्पस 30+ साल तक चल सकता है।",
      },
    ],
  },

  // ── ret6 · Retirement Mistakes to Avoid ─────────────────
  ret6: {
    beginner: [
      {
        q: "The biggest retirement planning mistake is…",
        q_hi: "सेवानिवृत्ति योजना की सबसे बड़ी गलती है…",
        opts: ["Investing in index funds", "Starting too late — every decade of delay requires roughly 3x more monthly savings to reach the same corpus", "Having too much in equity", "Checking your retirement balance regularly"],
        opts_hi: ["इंडेक्स फंड में निवेश", "बहुत देर से शुरू करना — देरी के हर दशक के लिए एक ही कॉर्पस तक पहुँचने के लिए लगभग 3x अधिक मासिक बचत चाहिए", "इक्विटी में बहुत अधिक रखना", "नियमित रूप से सेवानिवृत्ति बैलेंस जाँचना"],
        ans: 1,
        exp: "₹5,000/month SIP at 12% from age 25 = ₹1.76 crore at 60. Starting at 35 needs ₹17,000/month for the same corpus. Time is irreplaceable.",
        exp_hi: "25 साल से ₹5,000/माह SIP 12% पर = 60 पर ₹1.76 करोड़। 35 से शुरू करने पर उसी कॉर्पस के लिए ₹17,000/माह चाहिए।",
      },
    ],
    normal: [
      {
        q: "Withdrawing from EPF before retirement is a mistake because…",
        q_hi: "सेवानिवृत्ति से पहले EPF निकालना गलती है क्योंकि…",
        opts: ["It is illegal to withdraw EPF early", "You lose decades of tax-free compounding — the true power of EPF is in letting it grow untouched", "The government charges a 50% penalty", "Banks block your account if you withdraw"],
        opts_hi: ["EPF जल्दी निकालना अवैध है", "आप दशकों की कर-मुक्त चक्रवृद्धि खोते हैं — EPF की असली शक्ति इसे अछूता बढ़ने देने में है", "सरकार 50% जुर्माना लेती है", "निकालने पर बैंक खाता ब्लॉक करते हैं"],
        ans: 1,
        exp: "EPF at 8.1% tax-free compounding over 30 years turns ₹10,000/month into ~₹1.5 crore. Withdrawing early for a car or wedding wipes out this potential.",
        exp_hi: "30 साल में 8.1% कर-मुक्त चक्रवृद्धि पर EPF ₹10,000/माह को ~₹1.5 करोड़ बनाता है। कार या शादी के लिए जल्दी निकालने से यह संभावना खत्म होती है।",
      },
    ],
    advanced: [
      {
        q: "Sequence-of-returns risk in retirement means…",
        q_hi: "सेवानिवृत्ति में रिटर्न का क्रम जोखिम का मतलब है…",
        opts: ["All investments must be in sequence", "A market crash early in retirement (when withdrawals start) can permanently damage corpus more than a crash mid-retirement — even if average returns are the same", "Returns must increase sequentially each year", "You must withdraw in a specific sequence"],
        opts_hi: ["सभी निवेश क्रम में होने चाहिए", "सेवानिवृत्ति के शुरू में बाज़ार दुर्घटना (जब निकासी शुरू होती है) मध्य-सेवानिवृत्ति दुर्घटना से कॉर्पस को स्थायी रूप से अधिक नुकसान पहुँचा सकती है — भले ही औसत रिटर्न समान हो", "रिटर्न हर साल क्रमिक रूप से बढ़ने चाहिए", "आपको विशिष्ट क्रम में निकासी करनी होगी"],
        ans: 1,
        exp: "Retiring into a bear market forces selling units at low prices to fund living expenses — permanently reducing corpus. Mitigation: keep 2–3 years of expenses in liquid assets at retirement.",
        exp_hi: "बेयर मार्केट में सेवानिवृत्त होने पर जीवन खर्च के लिए कम कीमत पर यूनिट बेचनी पड़ती है — कॉर्पस स्थायी रूप से कम होता है। समाधान: सेवानिवृत्ति पर 2–3 साल के खर्च लिक्विड में रखें।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MODULE 12 · Entrepreneurship & Business Finance
  // ═══════════════════════════════════════════════════════════

  // ── ent1 · Business vs Job Income ────────────────────────
  ent1: {
    beginner: [
      {
        q: "The key difference between job income and business income is…",
        q_hi: "नौकरी आय और व्यापार आय के बीच मुख्य अंतर है…",
        opts: ["Job income is always higher", "Job income is fixed and regular; business income is variable and depends on profits", "Business income is tax-free always", "Job income requires no effort"],
        opts_hi: ["नौकरी आय हमेशा अधिक होती है", "नौकरी आय निश्चित और नियमित; व्यापार आय परिवर्तनशील और लाभ पर निर्भर", "व्यापार आय हमेशा कर-मुक्त", "नौकरी आय में कोई प्रयास नहीं"],
        ans: 1,
        exp: "A salary arrives every month regardless of the company's performance. Business income fluctuates with revenue and costs — some months profit, some months loss.",
        exp_hi: "वेतन कंपनी के प्रदर्शन की परवाह किए बिना हर महीने आता है। व्यापार आय राजस्व और लागत के साथ बदलती है।",
      },
    ],
    normal: [
      {
        q: "Owner's salary in a business should be…",
        q_hi: "व्यापार में मालिक का वेतन होना चाहिए…",
        opts: ["Equal to 100% of business profits", "A fixed, reasonable amount separate from profits — so business finances stay predictable", "Zero — owners don't deserve pay", "Whatever is left after all other expenses"],
        opts_hi: ["व्यापार लाभ का 100%", "एक निश्चित, उचित राशि लाभ से अलग — ताकि व्यापार वित्त अनुमानित रहे", "शून्य — मालिक वेतन के पात्र नहीं", "अन्य सभी खर्चों के बाद जो बचे"],
        ans: 1,
        exp: "Mixing personal and business money creates financial chaos. Pay yourself a fixed salary; treat remaining profit separately as business retained earnings.",
        exp_hi: "व्यक्तिगत और व्यापार पैसे मिलाने से वित्तीय अराजकता होती है। खुद को निश्चित वेतन दें; शेष लाभ को व्यापार प्रतिधारित आय के रूप में अलग रखें।",
      },
    ],
    advanced: [
      {
        q: "Gross profit margin vs net profit margin — the key distinction is…",
        q_hi: "सकल लाभ मार्जिन बनाम शुद्ध लाभ मार्जिन — मुख्य अंतर है…",
        opts: ["They are identical metrics", "Gross margin = (Revenue − COGS) ÷ Revenue; Net margin = (Revenue − ALL costs) ÷ Revenue. Net margin reveals true profitability after overhead, taxes, interest", "Gross margin includes taxes; net doesn't", "Net margin is always higher than gross margin"],
        opts_hi: ["वे समान मेट्रिक्स हैं", "सकल मार्जिन = (राजस्व − COGS) ÷ राजस्व; शुद्ध मार्जिन = (राजस्व − सभी लागत) ÷ राजस्व। शुद्ध मार्जिन ओवरहेड, कर, ब्याज के बाद वास्तविक लाभप्रदता दिखाता है", "सकल मार्जिन में कर शामिल; शुद्ध में नहीं", "शुद्ध मार्जिन हमेशा सकल से अधिक"],
        ans: 1,
        exp: "A business with 40% gross margin but 2% net margin has massive overhead problems. Track both to understand where money is leaking.",
        exp_hi: "40% सकल मार्जिन लेकिन 2% शुद्ध मार्जिन वाले व्यापार में भारी ओवरहेड समस्याएं हैं। दोनों ट्रैक करें।",
      },
    ],
  },

  // ── ent2 · Cash Flow for Small Business ─────────────────
  ent2: {
    beginner: [
      {
        q: "A business can be profitable but still fail if…",
        q_hi: "एक व्यापार लाभदायक हो सकता है लेकिन फिर भी विफल हो सकता है यदि…",
        opts: ["It has too many customers", "It runs out of cash — profit on paper doesn't pay salaries or rent today", "It makes too much profit", "It has too many employees"],
        opts_hi: ["बहुत अधिक ग्राहक हैं", "नकद खत्म हो जाता है — कागज़ पर लाभ आज वेतन या किराया नहीं देता", "बहुत अधिक लाभ होता है", "बहुत अधिक कर्मचारी हैं"],
        ans: 1,
        exp: "Cash flow crisis is the #1 reason small businesses fail. A profitable business can collapse if customers delay payment but suppliers demand immediate payment.",
        exp_hi: "नकद प्रवाह संकट छोटे व्यापारों के विफल होने का #1 कारण है। लाभदायक व्यापार भी ढह सकता है यदि ग्राहक भुगतान में देरी करें।",
      },
    ],
    normal: [
      {
        q: "Positive cash flow means…",
        q_hi: "सकारात्मक नकद प्रवाह का मतलब है…",
        opts: ["The business has no debt", "More cash is coming in than going out in a given period", "Profits are very high", "The owner is taking a large salary"],
        opts_hi: ["व्यापार पर कोई कर्ज़ नहीं", "एक निश्चित अवधि में बाहर जाने से अधिक नकद आ रहा है", "लाभ बहुत अधिक हैं", "मालिक बड़ा वेतन ले रहा है"],
        ans: 1,
        exp: "Positive cash flow means the business has enough cash to pay bills and invest in growth. It's more important than profit in the short term.",
        exp_hi: "सकारात्मक नकद प्रवाह का मतलब व्यापार के पास बिल चुकाने और विकास में निवेश के लिए पर्याप्त नकद है।",
      },
    ],
    advanced: [
      {
        q: "Working capital management in a small business means…",
        q_hi: "छोटे व्यापार में कार्यशील पूंजी प्रबंधन का मतलब है…",
        opts: ["Managing employee work hours", "Optimising the cash conversion cycle — collecting receivables fast, paying payables slowly, managing inventory lean", "Reducing the owner's salary", "Hiring fewer employees"],
        opts_hi: ["कर्मचारियों के काम के घंटे प्रबंधित करना", "नकद रूपांतरण चक्र अनुकूलित करना — जल्दी प्राप्तियां इकट्ठा करना, धीरे देय भुगतान करना, इन्वेंट्री दुबली रखना", "मालिक का वेतन कम करना", "कम कर्मचारी रखना"],
        ans: 1,
        exp: "Cash Conversion Cycle = Days Sales Outstanding + Days Inventory Outstanding − Days Payable Outstanding. Shorter cycle = less capital tied up = healthier cash flow.",
        exp_hi: "नकद रूपांतरण चक्र = बिक्री बकाया दिन + इन्वेंट्री बकाया दिन − देय बकाया दिन। छोटा चक्र = कम पूंजी बंधी = स्वस्थ नकद प्रवाह।",
      },
    ],
  },

  // ── ent3 · GST for Small Business ───────────────────────
  ent3: {
    beginner: [
      {
        q: "GST (Goods and Services Tax) registration is mandatory when…",
        q_hi: "GST पंजीकरण अनिवार्य है जब…",
        opts: ["You start any business regardless of size", "Annual turnover exceeds ₹40 lakh (₹20 lakh for services in most states)", "You hire more than 5 employees", "You open a bank account for your business"],
        opts_hi: ["आप किसी भी आकार का व्यापार शुरू करते हैं", "वार्षिक कारोबार ₹40 लाख से अधिक (अधिकांश राज्यों में सेवाओं के लिए ₹20 लाख)", "आप 5 से अधिक कर्मचारी रखते हैं", "व्यापार के लिए बैंक खाता खोलते हैं"],
        ans: 1,
        exp: "GST registration threshold: ₹40 lakh turnover for goods, ₹20 lakh for services (₹10 lakh in special category states). Voluntary registration is also possible.",
        exp_hi: "GST पंजीकरण सीमा: वस्तुओं के लिए ₹40 लाख, सेवाओं के लिए ₹20 लाख। स्वैच्छिक पंजीकरण भी संभव।",
      },
    ],
    normal: [
      {
        q: "Input Tax Credit (ITC) in GST means…",
        q_hi: "GST में इनपुट टैक्स क्रेडिट (ITC) का मतलब है…",
        opts: ["A refund from the government for all purchases", "Businesses can deduct GST paid on inputs (purchases) from GST collected on outputs (sales) — paying only the net difference", "A discount given to small businesses only", "A penalty for late GST filing"],
        opts_hi: ["सभी खरीदारी के लिए सरकार से वापसी", "व्यापार इनपुट (खरीदारी) पर चुकाए GST को आउटपुट (बिक्री) पर एकत्र GST से घटा सकते हैं — केवल शुद्ध अंतर देना", "केवल छोटे व्यापारों को दी गई छूट", "देरी से GST दाखिल करने का जुर्माना"],
        ans: 1,
        exp: "ITC prevents cascading taxes. If you paid ₹18,000 GST on purchases and collected ₹30,000 on sales, you remit only ₹12,000 to the government.",
        exp_hi: "ITC कैस्केडिंग कर रोकता है। खरीदारी पर ₹18,000 GST दिया और बिक्री पर ₹30,000 एकत्र किया तो केवल ₹12,000 सरकार को जमा।",
      },
    ],
    advanced: [
      {
        q: "The Composition Scheme under GST is beneficial for small businesses because…",
        q_hi: "GST के तहत कम्पोजिशन स्कीम छोटे व्यापारों के लिए फायदेमंद है क्योंकि…",
        opts: ["It exempts them from all taxes permanently", "They pay a flat low rate (1–6%) on turnover instead of regular GST rates, with minimal compliance burden", "They get ITC on all purchases", "It allows unlimited inter-state trade"],
        opts_hi: ["यह उन्हें स्थायी रूप से सभी करों से छूट देती है", "वे नियमित GST दरों की बजाय टर्नओवर पर एक समान कम दर (1–6%) देते हैं, न्यूनतम अनुपालन बोझ के साथ", "सभी खरीदारी पर ITC मिलता है", "असीमित अंतर-राज्य व्यापार की अनुमति"],
        ans: 1,
        exp: "Composition scheme (turnover < ₹1.5 crore): pay 1% (traders), 2% (manufacturers), or 5% (restaurants) on turnover quarterly. No ITC but minimal paperwork.",
        exp_hi: "कम्पोजिशन स्कीम (टर्नओवर < ₹1.5 करोड़): तिमाही टर्नओवर पर 1% (व्यापारी), 2% (निर्माता) या 5% (रेस्तरां) दें।",
      },
    ],
  },

  // ── ent4 · Business Loans & Funding ─────────────────────
  ent4: {
    beginner: [
      {
        q: "A business loan differs from a personal loan because…",
        q_hi: "व्यापार कर्ज़ पर्सनल लोन से अलग है क्योंकि…",
        opts: ["Business loans are interest-free", "Business loans are specifically for business purposes and may use business assets as collateral; interest is a tax-deductible business expense", "Business loans are only for large companies", "Personal loans always have lower interest rates"],
        opts_hi: ["व्यापार कर्ज़ ब्याज-मुक्त हैं", "व्यापार कर्ज़ विशेष रूप से व्यापारिक उद्देश्यों के लिए और व्यापार संपत्ति संपार्श्विक हो सकती है; ब्याज कर-कटौती योग्य व्यापारिक खर्च", "केवल बड़ी कंपनियों के लिए", "पर्सनल लोन में हमेशा कम ब्याज"],
        ans: 1,
        exp: "Business loan interest is a deductible business expense, reducing taxable profit. This makes the effective cost lower than a personal loan of the same rate.",
        exp_hi: "व्यापार कर्ज़ का ब्याज कटौती योग्य व्यापारिक खर्च है, कर योग्य लाभ कम करता है। यह समान दर के पर्सनल लोन से प्रभावी लागत कम बनाता है।",
      },
    ],
    normal: [
      {
        q: "The MUDRA loan scheme helps…",
        q_hi: "MUDRA कर्ज़ योजना मदद करती है…",
        opts: ["Only IT companies in metro cities", "Micro and small businesses access collateral-free loans up to ₹10 lakh under three categories: Shishu, Kishor, Tarun", "Only women entrepreneurs", "Only agricultural businesses"],
        opts_hi: ["केवल मेट्रो शहरों में IT कंपनियां", "सूक्ष्म और छोटे व्यापारों को तीन श्रेणियों में ₹10 लाख तक संपार्श्विक-मुक्त कर्ज़: शिशु, किशोर, तरुण", "केवल महिला उद्यमी", "केवल कृषि व्यापार"],
        ans: 1,
        exp: "MUDRA: Shishu (up to ₹50,000), Kishor (₹50,000–₹5 lakh), Tarun (₹5–10 lakh). Collateral-free for micro-enterprises. Available through banks, MFIs, and NBFCs.",
        exp_hi: "MUDRA: शिशु (₹50,000 तक), किशोर (₹50,000–₹5 लाख), तरुण (₹5–10 लाख)। सूक्ष्म उद्यमों के लिए संपार्श्विक-मुक्त।",
      },
    ],
    advanced: [
      {
        q: "Bootstrap funding vs venture capital — bootstrapping is better when…",
        q_hi: "बूटस्ट्रैप फंडिंग बनाम वेंचर कैपिटल — बूटस्ट्रैपिंग बेहतर है जब…",
        opts: ["You need ₹100 crore immediately", "The business can grow profitably with internal cash flows — you retain full ownership and control without investor pressure", "You want to scale globally in 6 months", "The product requires massive upfront R&D"],
        opts_hi: ["आपको तुरंत ₹100 करोड़ चाहिए", "व्यापार आंतरिक नकद प्रवाह से लाभदायक रूप से बढ़ सकता है — निवेशक दबाव के बिना पूर्ण स्वामित्व और नियंत्रण", "6 महीने में वैश्विक स्तर पर विस्तार", "उत्पाद को भारी अग्रिम R&D चाहिए"],
        ans: 1,
        exp: "Bootstrapping keeps equity intact and forces discipline. VC funding dilutes ownership (typically 20–40% per round) and creates pressure for hyper-growth exit.",
        exp_hi: "बूटस्ट्रैपिंग इक्विटी बरकरार रखती है और अनुशासन मजबूर करती है। VC फंडिंग स्वामित्व घटाती है (आमतौर पर प्रति राउंड 20–40%)।",
      },
    ],
  },

  // ── ent5 · Break-Even Analysis ───────────────────────────
  ent5: {
    beginner: [
      {
        q: "The break-even point of a business is…",
        q_hi: "व्यापार का ब्रेक-ईवन बिंदु है…",
        opts: ["When the business makes maximum profit", "When total revenue exactly equals total costs — neither profit nor loss", "When all debts are repaid", "When the business is sold"],
        opts_hi: ["जब व्यापार अधिकतम लाभ कमाता है", "जब कुल राजस्व कुल लागत के बिल्कुल बराबर है — न लाभ न हानि", "जब सभी कर्ज़ चुका दिए जाते हैं", "जब व्यापार बेचा जाता है"],
        ans: 1,
        exp: "Break-even = Fixed Costs ÷ (Selling Price − Variable Cost per unit). Above this point every unit sold generates profit.",
        exp_hi: "ब्रेक-ईवन = निश्चित लागत ÷ (बिक्री मूल्य − प्रति यूनिट परिवर्तनीय लागत)। इस बिंदु के ऊपर बेची गई हर यूनिट लाभ उत्पन्न करती है।",
      },
    ],
    normal: [
      {
        q: "Fixed costs in a business are…",
        q_hi: "व्यापार में निश्चित लागत हैं…",
        opts: ["Costs that change with every unit sold", "Costs that remain the same regardless of how much you produce or sell — rent, salaries, insurance", "Only raw material costs", "Costs paid only once at startup"],
        opts_hi: ["बेची गई हर यूनिट के साथ बदलने वाली लागत", "उत्पादन या बिक्री की परवाह किए बिना समान रहने वाली लागत — किराया, वेतन, बीमा", "केवल कच्चे माल की लागत", "केवल स्टार्टअप पर एक बार दी जाने वाली लागत"],
        ans: 1,
        exp: "Fixed costs (rent, salaries, insurance) don't change with sales volume. Understanding them is critical — a business must sell enough to cover them before turning profit.",
        exp_hi: "निश्चित लागत (किराया, वेतन, बीमा) बिक्री मात्रा के साथ नहीं बदलती। लाभ से पहले उन्हें कवर करने के लिए पर्याप्त बिक्री ज़रूरी।",
      },
    ],
    advanced: [
      {
        q: "Contribution margin per unit tells you…",
        q_hi: "प्रति यूनिट योगदान मार्जिन बताता है…",
        opts: ["The total profit of the business", "How much each unit sold contributes toward covering fixed costs and then generating profit (Selling Price − Variable Cost)", "The tax per unit sold", "The salary of each employee"],
        opts_hi: ["व्यापार का कुल लाभ", "बेची गई प्रत्येक यूनिट निश्चित लागत को कवर करने और फिर लाभ उत्पन्न करने में कितना योगदान देती है (बिक्री मूल्य − परिवर्तनीय लागत)", "बेची गई प्रति यूनिट कर", "प्रत्येक कर्मचारी का वेतन"],
        ans: 1,
        exp: "If selling price = ₹100, variable cost = ₹60, contribution margin = ₹40. Fixed costs ÷ ₹40 = units needed to break even. Every unit beyond that is pure profit contribution.",
        exp_hi: "बिक्री मूल्य = ₹100, परिवर्तनीय लागत = ₹60, योगदान मार्जिन = ₹40। निश्चित लागत ÷ ₹40 = ब्रेक-ईवन के लिए आवश्यक यूनिट।",
      },
    ],
  },

  // ── ent6 · Separating Personal & Business Finance ────────
  ent6: {
    beginner: [
      {
        q: "Why must you keep personal and business finances separate?",
        q_hi: "व्यक्तिगत और व्यापारिक वित्त अलग क्यों रखने चाहिए?",
        opts: ["Banks require it by law for everyone", "It provides clear business picture, simplifies tax filing, and protects personal assets from business liabilities", "It reduces your personal tax automatically", "It is only important for large companies"],
        opts_hi: ["बैंक सभी के लिए कानून द्वारा इसकी आवश्यकता रखते हैं", "यह स्पष्ट व्यापारिक तस्वीर देता है, कर दाखिल करना सरल बनाता है और व्यापारिक देनदारियों से व्यक्तिगत संपत्ति की रक्षा करता है", "यह स्वचालित रूप से व्यक्तिगत कर कम करता है", "केवल बड़ी कंपनियों के लिए महत्वपूर्ण"],
        ans: 1,
        exp: "Mixing finances creates accounting confusion, invites tax scrutiny, and can make personal savings liable for business debts. Open a dedicated business current account from day one.",
        exp_hi: "वित्त मिलाने से लेखांकन भ्रम होता है, कर जांच होती है और व्यापार कर्ज़ के लिए व्यक्तिगत बचत देय हो सकती है।",
      },
    ],
    normal: [
      {
        q: "A business emergency fund should cover…",
        q_hi: "व्यापार आपातकालीन फंड कवर करना चाहिए…",
        opts: ["One day of operating costs", "3–6 months of fixed operating costs (rent, salaries, utilities) — to survive low-revenue periods without closing", "Only the owner's personal expenses", "Next year's expansion budget"],
        opts_hi: ["एक दिन की परिचालन लागत", "3–6 महीने की निश्चित परिचालन लागत (किराया, वेतन, उपयोगिताएं) — बंद किए बिना कम-राजस्व अवधि में जीवित रहने के लिए", "केवल मालिक के व्यक्तिगत खर्च", "अगले साल का विस्तार बजट"],
        ans: 1,
        exp: "Seasonal businesses especially need 3–6 months of fixed cost reserves. This buys time during slow periods without desperate borrowing or closing.",
        exp_hi: "मौसमी व्यापारों को विशेष रूप से 3–6 महीने के निश्चित लागत भंडार की ज़रूरत है। यह निराशाजनक उधार या बंद किए बिना समय खरीदता है।",
      },
    ],
    advanced: [
      {
        q: "The most important financial metric for a bootstrapped small business in its first year is…",
        q_hi: "पहले साल में बूटस्ट्रैप्ड छोटे व्यापार के लिए सबसे महत्वपूर्ण वित्तीय मेट्रिक है…",
        opts: ["Total revenue", "Monthly cash burn rate and runway — how many months can the business survive at current spending before cash runs out", "Brand valuation", "Number of social media followers"],
        opts_hi: ["कुल राजस्व", "मासिक नकद बर्न दर और रनवे — वर्तमान खर्च पर व्यापार नकद खत्म होने से पहले कितने महीने जीवित रह सकता है", "ब्रांड मूल्यांकन", "सोशल मीडिया फॉलोअर्स की संख्या"],
        ans: 1,
        exp: "Cash runway = Cash reserves ÷ Monthly burn rate. If you have ₹6 lakh and burn ₹1 lakh/month, runway = 6 months. This is the #1 survival metric for early-stage businesses.",
        exp_hi: "नकद रनवे = नकद भंडार ÷ मासिक बर्न दर। ₹6 लाख और ₹1 लाख/माह बर्न पर रनवे = 6 महीने। शुरुआती व्यापारों के लिए #1 उत्तरजीविता मेट्रिक।",
      },
    ],
  },

}; // ← END of QUIZZES object

// ─────────────────────────────────────────────────────────────
//  getQuiz — public API
//  Returns localised question array for a given lesson + mode.
//  Falls back: advanced → normal → beginner if level missing.
// ─────────────────────────────────────────────────────────────
export function getQuiz(lessonId, mode = "beginner", lang = "en") {
  const lessonQuiz = QUIZZES[lessonId];
  if (!lessonQuiz) return [];

  const qs =
    lessonQuiz[mode] ??
    lessonQuiz["normal"] ??
    lessonQuiz["beginner"] ??
    [];

  return qs.map((q) => ({
    q:    lang === "hi" && q.q_hi    ? q.q_hi    : q.q,
    opts: lang === "hi" && q.opts_hi ? q.opts_hi : q.opts,
    ans:  q.ans,
    exp:  lang === "hi" && q.exp_hi  ? q.exp_hi  : q.exp,
  }));
}

export default QUIZZES;