// Topic content — keyed by topic string from knowledgeGraph.js
// Each entry: { simple, normal, faq[], myths[], hi_simple?, hi_normal?, hi_faq?, hi_myths? }
// hi_* keys are Hindi translations. Falls back to English if not present.

const CONTENT = {
  "What is saving money": {
    simple: "Saving money means keeping some of your money aside instead of spending it all. Imagine your pocket money — you keep a part in a piggy bank for later. That saved money helps when you want something bigger or need it urgently!",
    normal: "Saving money means setting aside a portion of your income instead of spending everything immediately. People save to handle future needs, emergencies, or planned goals. Saving creates financial security and reduces stress during unexpected situations.",
    faq: ["Why save even if I earn less? → Even small savings build habits and prepare you for emergencies.", "Is saving the same as investing? → No — saving focuses on safety, investing on growth."],
    myths: ["Saving means you can't enjoy life. → Saving actually lets you enjoy without financial stress.", "Only rich people can save. → Even small amounts saved regularly make a big difference."],
    advanced: "Savings rate optimisation involves analysing your marginal propensity to consume (MPC) and structuring allocation using frameworks like 50-30-20 or zero-based budgeting. High earners benefit from automating savings via salary-split mandates into dedicated sub-accounts for emergency, goals, and investment. The opportunity cost of idle cash vs. a 7% liquid fund is ₹3,500 per year on every ₹1 lakh. Real savings rate = savings ÷ net income — target raising this by 1% each quarter until you reach 20–30%.",
    hi_simple: "पैसे बचाना मतलब है अपनी कमाई का कुछ हिस्सा अलग रखना, न कि सब खर्च कर देना। जैसे पॉकेट मनी में से कुछ पैसे गुल्लक में रखना। यह पैसे बाद में काम आते हैं जब ज़रूरत हो!",
    hi_normal: "पैसे बचाना मतलब अपनी आय का एक हिस्सा तुरंत खर्च न करके अलग रखना। लोग भविष्य की ज़रूरतों, आपात स्थिति या बड़े लक्ष्यों के लिए बचत करते हैं। बचत से आर्थिक सुरक्षा मिलती है और तनाव कम होता है।",
    hi_faq: ["कम कमाई में भी बचाएं क्यों? → छोटी बचत भी आदत बनाती है और आपात स्थिति में मदद करती है।", "क्या बचत और निवेश एक ही है? → नहीं — बचत सुरक्षा के लिए, निवेश वृद्धि के लिए होती है।"],
    hi_myths: ["बचत से जीवन का आनंद कम होता है। → बचत करने से बिना तनाव के आनंद लिया जा सकता है।", "केवल अमीर लोग बचत कर सकते हैं। → थोड़ी-थोड़ी बचत भी बहुत फर्क डालती है।"],
  },
  "What is budgeting": {
    simple: "Budgeting means planning how to use your money before you spend it. It's like making a shopping list so you don't buy things you don't need. You decide how much goes to food, fun, and savings.",
    normal: "Budgeting is the process of planning income and expenses over a specific period. It prevents overspending, ensures savings happen first, and gives you a clear picture of where your money goes each month.",
    faq: ["Does budgeting restrict freedom? → No — it gives you more control and peace of mind.", "How often should I review my budget? → Once a month is a great habit."],
    myths: ["Budgeting is only for people with low income. → Everyone benefits from budgeting.", "Budgeting is too complicated. → A simple budget on paper or phone is completely enough."],
    advanced: "Zero-based budgeting (ZBB) assigns every rupee a purpose each month from scratch, eliminating baseline creep. Priority-based budgeting funds goals in ranked order. For irregular income earners, set a budget at your lowest expected monthly income and deploy surplus via a waterfall: emergency fund top-up → high-interest debt → investment goals → discretionary. ZBB users save 15–20% more in the first year purely due to forced opportunity-cost awareness.",
    hi_simple: "बजट बनाना मतलब है खर्च करने से पहले पैसों का हिसाब लगाना। यह एक शॉपिंग लिस्ट की तरह है — ताकि फालतू चीजें न खरीदें। आप तय करते हैं कि खाने, मनोरंजन और बचत पर कितना खर्च होगा।",
    hi_normal: "बजट बनाना एक निश्चित अवधि के लिए आय और खर्चों की योजना बनाने की प्रक्रिया है। इससे अधिक खर्च रुकता है, बचत पहले होती है और हर महीने पैसों का हिसाब साफ रहता है।",
    hi_faq: ["क्या बजट से आज़ादी कम होती है? → नहीं — इससे आपको ज़्यादा नियंत्रण और मन की शांति मिलती है।", "बजट कितनी बार देखें? → महीने में एक बार देखना अच्छी आदत है।"],
    hi_myths: ["बजट सिर्फ कम आय वालों के लिए है। → हर किसी को बजट से फायदा होता है।", "बजट बनाना बहुत मुश्किल है। → कागज़ पर एक सरल बजट भी काफी है।"],
  },
  "What is an emergency fund": {
    simple: "An emergency fund is money you keep safe for sudden problems — like if you get sick or something breaks. It's like keeping an umbrella for a rainy day. This money saves you from big stress when you least expect it!",
    normal: "An emergency fund is savings reserved exclusively for unexpected expenses such as medical emergencies, job loss, or urgent repairs. It prevents reliance on loans and provides financial stability during difficult times.",
    faq: ["How big should an emergency fund be? → Aim for 3–6 months of monthly expenses.", "Where should I keep it? → A savings account that's easy to access quickly."],
    myths: ["Emergency funds are unnecessary if you have insurance. → Insurance doesn't cover everything.", "Small emergency funds are useless. → Any amount saved is better than nothing."],
    advanced: "Size your emergency fund by fixed monthly obligations (rent + EMIs + insurance + utilities) × months of coverage. Self-employed need 9–12 months; salaried dual-income households need 3. Deploy in tiers: 1 month in savings account (instant), 2–3 months in liquid mutual fund (next-day), remaining in ultra-short debt fund for yield. Never use equity, FDs with withdrawal penalties, or ELSS for emergency funds.",
    hi_simple: "आपातकालीन फंड वो पैसा है जो आप अचानक आई मुसीबत — जैसे बीमारी या कुछ टूट जाने — के लिए रखते हैं। यह बरसात के दिन के लिए छाता रखने जैसा है। यह पैसे बुरे वक्त में बड़ी राहत देते हैं!",
    hi_normal: "आपातकालीन फंड वो बचत है जो केवल अनपेक्षित खर्चों जैसे मेडिकल, नौकरी जाने या तत्काल मरम्मत के लिए रखी जाती है। इससे कर्ज़ की ज़रूरत नहीं पड़ती और मुश्किल समय में आर्थिक स्थिरता मिलती है।",
    hi_faq: ["आपातकालीन फंड कितना बड़ा हो? → 3–6 महीने के खर्च के बराबर रखने की कोशिश करें।", "इसे कहाँ रखें? → एक ऐसे बचत खाते में जहाँ से जल्दी निकाल सकें।"],
    hi_myths: ["बीमा होने पर आपातकालीन फंड की ज़रूरत नहीं। → बीमा सब कुछ कवर नहीं करता।", "छोटा आपातकालीन फंड बेकार है। → कुछ भी न होने से कुछ होना बेहतर है।"],
  },
  "What is interest": {
    simple: "Interest is extra money that gets added to your savings or charged on borrowed money. When you save in a bank, the bank gives you extra money as interest. When you borrow, you pay extra money back.",
    normal: "Interest is the cost of using money over time, expressed as a percentage. Banks pay interest to depositors and charge interest to borrowers. It's the engine that makes savings grow and loans more expensive.",
    faq: ["Who earns interest? → Savers and deposit holders earn it from banks.", "Why does interest exist? → It compensates the lender for time and the risk of lending."],
    myths: ["Interest is free money. → It is earned over time by the saver or paid by the borrower.", "Interest only applies to loans. → Savings accounts earn interest too."],
    advanced: "Compound interest formula: A = P(1+r/n)^(nt). Effective Annual Rate (EAR) = (1+r/n)^n − 1 captures the true cost of compounding. For loans, APR (Annual Percentage Rate) must include processing fees — always compare loans using APR, not the stated rate. Reducing-balance home loans are cheaper than flat-rate personal loans for the same stated rate. Rule of 72: years to double = 72 ÷ interest rate.",
    hi_simple: "ब्याज वो अतिरिक्त पैसा है जो आपकी बचत पर मिलता है या उधार पर देना पड़ता है। बैंक में पैसे रखने पर बैंक आपको ब्याज देता है। उधार लेने पर आपको ब्याज चुकाना पड़ता है।",
    hi_normal: "ब्याज समय के साथ पैसे के उपयोग की लागत है, जिसे प्रतिशत में व्यक्त किया जाता है। बैंक जमाकर्ताओं को ब्याज देते हैं और उधारकर्ताओं से वसूलते हैं। यही बचत को बढ़ाता है और कर्ज़ को महंगा बनाता है।",
    hi_faq: ["ब्याज कौन कमाता है? → बैंक में पैसे जमा करने वाले।", "ब्याज क्यों होता है? → यह उधार देने वाले को समय और जोखिम का मुआवजा देता है।"],
    hi_myths: ["ब्याज मुफ्त पैसा है। → यह समय के साथ बचतकर्ता को मिलता है या उधारकर्ता देता है।", "ब्याज सिर्फ कर्ज़ पर लगता है। → बचत खातों पर भी ब्याज मिलता है।"],
  },
  "Compound interest explained": {
    simple: "Compound interest is magical! When your savings earn interest, that interest also earns interest. It's like a snowball rolling down a hill — it keeps growing bigger and bigger the longer it rolls!",
    normal: "Compound interest is calculated on the principal plus all previously accumulated interest. This creates exponential growth over time. The longer you stay invested, the more powerful the compounding effect becomes.",
    faq: ["How is it different from simple interest? → Simple interest only grows on your original amount. Compound grows on everything including past interest.", "Does time matter? → Time is the single most important factor in compounding."],
    myths: ["Compound interest works instantly. → It needs years to show its real power.", "Only large amounts benefit. → Even small amounts grow enormously with enough time."],
    advanced: "The Rule of 72: doubling time = 72 ÷ rate. At 12% CAGR, ₹1L doubles every 6 years, becoming ₹32L in 30 years. Compounding frequency: daily compounding beats annual for the same nominal rate (EAR = (1+r/n)^n − 1). In mutual funds, the Growth option reinvests returns with no annual tax event — compounding is uninterrupted. Switching to IDCW triggers slab-rate tax on each distribution, breaking the compounding chain. A 6-month SIP pause in early years can reduce final corpus by 8–15%.",
    hi_simple: "चक्रवृद्धि ब्याज जादुई है! जब आपकी बचत पर ब्याज मिलता है, तो उस ब्याज पर भी ब्याज मिलता है। यह बर्फ के गोले जैसा है जो लुढ़कते-लुढ़कते बड़ा होता जाता है!",
    hi_normal: "चक्रवृद्धि ब्याज मूलधन और पहले के ब्याज दोनों पर गणना की जाती है। इससे समय के साथ तेज़ गति से वृद्धि होती है। जितने लंबे समय तक निवेशित रहें, चक्रवृद्धि का असर उतना ज़्यादा।",
    hi_faq: ["साधारण ब्याज से क्या अंतर है? → साधारण ब्याज केवल मूलधन पर; चक्रवृद्धि ब्याज पर भी ब्याज मिलता है।", "क्या समय मायने रखता है? → हाँ, चक्रवृद्धि में समय सबसे महत्वपूर्ण कारक है।"],
    hi_myths: ["चक्रवृद्धि ब्याज तुरंत काम करता है। → इसे असर दिखाने में सालों लगते हैं।", "केवल बड़ी रकम को फायदा होता है। → छोटी रकम भी काफी समय में बड़ी बन जाती है।"],
  },
  "What is inflation": {
    simple: "Inflation means prices go up over time. What costs ₹100 today might cost ₹110 next year! Because of inflation, money slowly buys less. That's why it's important to plan and grow your savings.",
    normal: "Inflation is the general increase in prices of goods and services over time, which reduces the purchasing power of money. It affects daily expenses, savings value, and long-term financial planning significantly.",
    faq: ["Who controls inflation? → Central banks like the RBI try to manage it.", "Does inflation affect everyone? → Yes, especially people with fixed incomes."],
    myths: ["Inflation only affects luxury goods. → It affects everyday necessities like food and fuel too.", "Inflation happens suddenly. → It usually rises slowly and gradually over time."],
    advanced: "India measures inflation via CPI (Consumer Price Index, RBI's 4% ± 2% target) and WPI (wholesale prices). Real interest rate = Nominal rate − Inflation. If your FD earns 7% and inflation is 6%, real return is only 1%. For financial planning use 6% general inflation, 8–10% for healthcare and education. Inflation-adjusted (real) returns are the only meaningful long-term metric — nominal growth that trails inflation is wealth destruction.",
    hi_simple: "महंगाई मतलब समय के साथ चीज़ों के दाम बढ़ना। आज जो ₹100 में मिलता है, अगले साल वो ₹110 का हो सकता है! इसीलिए पैसों की बचत और निवेश ज़रूरी है।",
    hi_normal: "महंगाई यानी समय के साथ वस्तुओं और सेवाओं की कीमतों में सामान्य वृद्धि, जिससे पैसे की खरीद शक्ति कम होती है। यह दैनिक खर्च, बचत के मूल्य और दीर्घकालिक योजना को प्रभावित करती है।",
    hi_faq: ["महंगाई को कौन नियंत्रित करता है? → RBI जैसे केंद्रीय बैंक इसे नियंत्रित करने की कोशिश करते हैं।", "क्या महंगाई सबको प्रभावित करती है? → हाँ, खासकर निश्चित आय वाले लोगों को।"],
    hi_myths: ["महंगाई केवल लग्ज़री चीज़ों पर असर डालती है। → यह खाने-पीने और ईंधन जैसी ज़रूरी चीज़ों को भी महंगा करती है।", "महंगाई अचानक आती है। → यह आमतौर पर धीरे-धीरे बढ़ती है।"],
  },
  "What is a loan": {
    simple: "A loan is money you borrow from a bank and promise to give back later — plus a little extra called interest. Loans help people buy important things like homes or pay for education when they don't have enough money right now.",
    normal: "A loan is money borrowed from a lender with a formal agreement to repay it over time with interest. Loans serve as financial tools for large purchases. The borrower must follow the repayment schedule to avoid penalties.",
    faq: ["Is a loan free money? → No — it must always be repaid with interest.", "Can loans help financially? → Yes, when used for productive purposes and repaid responsibly."],
    myths: ["All debt is bad. → Productive debt like education loans can improve your life.", "Interest on loans is small. → Over years, interest can exceed the original loan amount."],
    hi_simple: "कर्ज़ वो पैसा है जो आप बैंक से उधार लेते हैं और बाद में ब्याज के साथ वापस करने का वादा करते हैं। कर्ज़ से लोग घर खरीद सकते हैं या पढ़ाई कर सकते हैं जब उनके पास अभी पैसे नहीं हैं।",
    hi_normal: "कर्ज़ एक औपचारिक समझौते के तहत उधार ली गई राशि है जिसे ब्याज के साथ समय पर चुकाना होता है। बड़ी खरीदारी के लिए यह एक वित्तीय साधन है। समय पर EMI न चुकाने पर जुर्माना लगता है।",
    hi_faq: ["क्या कर्ज़ मुफ्त पैसा है? → नहीं — इसे हमेशा ब्याज सहित चुकाना होता है।", "क्या कर्ज़ फायदेमंद हो सकता है? → हाँ, अगर उत्पादक कार्यों के लिए और ज़िम्मेदारी से लिया जाए।"],
    hi_myths: ["सभी कर्ज़ बुरे हैं। → शिक्षा या घर जैसे उत्पादक कर्ज़ जीवन सुधार सकते हैं।", "कर्ज़ पर ब्याज कम होता है। → सालों में ब्याज मूलधन से भी ज़्यादा हो सकता है।"],
  },
  "What is EMI": {
    simple: "EMI means you pay a fixed amount every month to repay a loan. It's split into two parts: a bit of the loan amount, and a bit of interest. Paying it every month slowly finishes the loan.",
    normal: "EMI (Equated Monthly Installment) is the fixed monthly payment that covers both principal repayment and interest. It makes large loan amounts manageable by spreading cost evenly across the loan tenure.",
    faq: ["Does EMI include both principal and interest? → Yes, always.", "What if I miss an EMI? → Penalties apply and it harms your credit history significantly."],
    myths: ["EMI is only interest. → It includes principal repayment too.", "Low EMI means a cheaper loan. → Lower EMI often means a longer tenure and more total interest paid."],
    hi_simple: "EMI मतलब हर महीने एक तय रकम देकर कर्ज़ चुकाना। इसमें थोड़ा मूलधन और थोड़ा ब्याज होता है। हर महीने EMI देते-देते पूरा कर्ज़ खत्म हो जाता है।",
    hi_normal: "EMI (समान मासिक किस्त) एक निश्चित मासिक भुगतान है जिसमें मूलधन और ब्याज दोनों शामिल होते हैं। यह बड़े कर्ज़ को कार्यकाल में फैलाकर आसान बनाता है।",
    hi_faq: ["क्या EMI में मूलधन और ब्याज दोनों हैं? → हाँ, हमेशा।", "EMI चूक जाए तो? → जुर्माना लगता है और क्रेडिट हिस्ट्री खराब होती है।"],
    hi_myths: ["EMI केवल ब्याज है। → इसमें मूलधन का भुगतान भी शामिल होता है।", "कम EMI = सस्ता कर्ज़। → कम EMI अक्सर लंबी अवधि और ज़्यादा कुल ब्याज का मतलब है।"],
  },
  "What is a bank account": {
    simple: "A bank account is a safe place to keep your money instead of at home. The bank stores it safely, keeps track of every rupee, and lets you take it out when you need it. It also helps you pay for things without cash!",
    normal: "A bank account is a secure account with a financial institution for storing, managing, and transacting money. It enables digital payments, salary deposits, and builds a financial identity essential for modern life.",
    faq: ["Is bank money safe? → Yes, banks are regulated and deposits are insured.", "Can anyone open one? → Yes, with basic KYC documents like Aadhaar and PAN."],
    myths: ["Bank accounts are only for the wealthy. → Zero-balance accounts are available for everyone.", "Keeping cash at home is safer. → Banks offer significantly better security and protection."],
    hi_simple: "बैंक खाता आपके पैसों को घर पर रखने की बजाय सुरक्षित रखने की जगह है। बैंक आपका पैसा संभालता है, हर रुपए का हिसाब रखता है और ज़रूरत पर निकालने देता है। बिना नकद के भुगतान भी कर सकते हैं!",
    hi_normal: "बैंक खाता एक वित्तीय संस्था के साथ सुरक्षित खाता है जहाँ पैसे रखे, प्रबंधित और लेनदेन किए जाते हैं। यह डिजिटल भुगतान, वेतन जमा और आधुनिक जीवन के लिए ज़रूरी वित्तीय पहचान बनाता है।",
    hi_faq: ["बैंक का पैसा सुरक्षित है? → हाँ, बैंक नियंत्रित होते हैं और जमा बीमित होती है।", "क्या कोई भी खाता खोल सकता है? → हाँ, आधार और पैन जैसे KYC दस्तावेजों से।"],
    hi_myths: ["बैंक खाते सिर्फ अमीरों के लिए हैं। → शून्य-बैलेंस खाते सभी के लिए उपलब्ध हैं।", "घर पर नकद रखना ज़्यादा सुरक्षित है। → बैंक काफी बेहतर सुरक्षा देते हैं।"],
  },
  "What is a mutual fund": {
    simple: "A mutual fund is when many people pool their money together and a professional invests it for everyone. It's like a group of friends pooling money to buy something together — everyone benefits!",
    normal: "A mutual fund is a professionally managed investment vehicle that pools money from multiple investors to invest in diversified assets like stocks and bonds. It gives small investors access to expert management and diversification.",
    faq: ["Are mutual funds safe? → They carry market risk, which varies by fund type.", "Can beginners invest? → Yes — SIPs let you start with as little as ₹500/month."],
    myths: ["Mutual funds are like gambling. → They are regulated, diversified investments with professional management.", "Only experts can invest. → Anyone can invest through simple apps and platforms."],
    advanced: "NAV = (Total portfolio value − Liabilities − Expenses) ÷ Units outstanding, calculated daily. SEBI caps Total Expense Ratio (TER) at 2.25% for equity. A 1% TER difference over 20 years reduces corpus by ~20%. Direct plans (no distributor) have 0.5–1% lower TER than regular plans — on ₹10L over 20 years at 12% this is ₹15–16L more in the direct plan. SEBI's 'Skin in the Game' rule (2021) requires fund managers to invest 20% of take-home salary in their own schemes.",
    hi_simple: "म्यूचुअल फंड में कई लोग मिलकर पैसे लगाते हैं और एक विशेषज्ञ उन पैसों को निवेश करता है। यह दोस्तों के मिलकर कुछ खरीदने जैसा है — सबको फायदा होता है!",
    hi_normal: "म्यूचुअल फंड एक पेशेवर रूप से प्रबंधित निवेश साधन है जो कई निवेशकों का पैसा मिलाकर शेयर और बॉन्ड में लगाता है। छोटे निवेशकों को विशेषज्ञ प्रबंधन और विविधता मिलती है।",
    hi_faq: ["क्या म्यूचुअल फंड सुरक्षित हैं? → इनमें बाज़ार का जोखिम होता है जो फंड के प्रकार पर निर्भर करता है।", "क्या शुरुआती निवेश कर सकते हैं? → हाँ — SIP से ₹500 प्रति माह से शुरू कर सकते हैं।"],
    hi_myths: ["म्यूचुअल फंड जुआ है। → यह विनियमित, विविध निवेश है जो पेशेवर प्रबंधकों द्वारा चलाया जाता है।", "केवल विशेषज्ञ निवेश कर सकते हैं। → कोई भी ऐप के ज़रिए निवेश कर सकता है।"],
  },
  "What is SIP": {
    simple: "SIP means you invest a small fixed amount — like ₹500 — every month into a mutual fund automatically. Instead of needing a large lump sum, you invest little by little. Over time, it adds up to a lot!",
    normal: "SIP (Systematic Investment Plan) is a disciplined method of investing a fixed amount at regular intervals into mutual funds. It leverages rupee-cost averaging and removes the need to time the market.",
    faq: ["Can SIP be paused or stopped? → Yes, most SIPs can be paused or stopped anytime.", "Is SIP better than lump sum? → For beginners, SIP reduces risk and builds discipline."],
    myths: ["SIP is a type of mutual fund. → SIP is just an investing method, not a fund itself.", "SIP removes all risk. → Market risk remains, but timing risk is significantly reduced."],
    advanced: "SIP's mechanical advantage is Rupee Cost Averaging (RCA): units purchased = installment ÷ NAV. More units when NAV is low, fewer when high. The average purchase cost = harmonic mean of prices, which is always ≤ arithmetic mean — mathematically guaranteed. SIP XIRR (Extended Internal Rate of Return) is the correct return metric for SIPs, not CAGR. Step-up SIPs: increasing by 10% annually for 20 years creates ~3× more corpus than a flat SIP of the same starting amount.",
    hi_simple: "SIP मतलब हर महीने एक तय छोटी रकम — जैसे ₹500 — म्यूचुअल फंड में लगाना। एकमुश्त बड़ी रकम की ज़रूरत नहीं, थोड़ा-थोड़ा निवेश करते रहें। समय के साथ यह बड़ी रकम बन जाती है!",
    hi_normal: "SIP (व्यवस्थित निवेश योजना) म्यूचुअल फंड में नियमित अंतराल पर निश्चित राशि निवेश करने का अनुशासित तरीका है। यह रुपी-कॉस्ट एवरेजिंग का लाभ देता है और बाज़ार का सही समय चुनने की ज़रूरत नहीं रहती।",
    hi_faq: ["क्या SIP रोक सकते हैं? → हाँ, अधिकतर SIP कभी भी रोकी या बंद की जा सकती है।", "क्या SIP एकमुश्त से बेहतर है? → शुरुआती लोगों के लिए SIP जोखिम कम करती है और अनुशासन बनाती है।"],
    hi_myths: ["SIP एक म्यूचुअल फंड है। → SIP केवल निवेश का तरीका है, कोई फंड नहीं।", "SIP सारा जोखिम खत्म कर देती है। → बाज़ार का जोखिम रहता है, पर टाइमिंग का जोखिम कम होता है।"],
  },
  "What is a fixed deposit": {
    simple: "A Fixed Deposit (FD) is when you put money in a bank for a fixed time — like 1 year — and the bank pays you more money as interest at the end. Your money grows safely without any risk!",
    normal: "A fixed deposit is a financial instrument where money is deposited for a predetermined tenure at a fixed interest rate. It offers guaranteed, predictable returns and is one of the safest investment options available in India.",
    faq: ["Can I withdraw early? → Yes, but usually with a small penalty charge.", "Is FD completely risk-free? → It is very low risk, and deposits are insured up to ₹5 lakh by DICGC."],
    myths: ["FDs give high returns. → Returns are moderate but stable and guaranteed.", "Money in FD is locked forever. → It is only locked for your chosen tenure."],
    hi_simple: "FD मतलब बैंक में एक तय समय — जैसे 1 साल — के लिए पैसे जमा करना और अंत में ब्याज के साथ ज़्यादा पैसे वापस मिलना। बिना किसी जोखिम के पैसे बढ़ते हैं!",
    hi_normal: "फिक्स्ड डिपॉजिट एक वित्तीय साधन है जहाँ निश्चित समय के लिए निश्चित ब्याज दर पर पैसे जमा होते हैं। यह गारंटीड, अनुमानित रिटर्न देता है और भारत में सबसे सुरक्षित निवेश विकल्पों में से एक है।",
    hi_faq: ["समय से पहले निकाल सकते हैं? → हाँ, पर आमतौर पर छोटा जुर्माना लगता है।", "क्या FD पूरी तरह जोखिम-मुक्त है? → बहुत कम जोखिम है, और DICGC द्वारा ₹5 लाख तक बीमित है।"],
    hi_myths: ["FD बहुत ज़्यादा रिटर्न देती है। → रिटर्न मध्यम है पर स्थिर और गारंटीड।", "FD में पैसे हमेशा के लिए बंद हो जाते हैं। → पैसे केवल चुनी हुई अवधि के लिए बंद होते हैं।"],
  },
  "What is UPI": {
    simple: "UPI lets you send and receive money using just your phone number or a UPI ID — no cash or card needed! It moves money directly from one bank account to another in seconds. Apps like GPay and PhonePe use UPI.",
    normal: "UPI (Unified Payments Interface) is India's real-time digital payment system that enables instant bank-to-bank transfers using mobile apps. It's built on secure authentication and has transformed financial inclusion across India.",
    faq: ["Is UPI safe? → Yes, it uses bank-level security and PIN authentication.", "Is internet needed? → Yes, an active internet connection is required to complete payments."],
    myths: ["UPI stores money in the app. → Money always stays in your actual bank account.", "UPI needs a debit or credit card. → You only need a bank account linked to the app."],
    hi_simple: "UPI से आप सिर्फ फोन नंबर या UPI ID से पैसे भेज और पा सकते हैं — नकद या कार्ड की ज़रूरत नहीं! पैसे सेकंडों में एक बैंक खाते से दूसरे में चले जाते हैं। GPay और PhonePe UPI का ही इस्तेमाल करते हैं।",
    hi_normal: "UPI (यूनिफाइड पेमेंट्स इंटरफेस) भारत का रियल-टाइम डिजिटल भुगतान प्रणाली है जो मोबाइल ऐप से तुरंत बैंक-से-बैंक ट्रांसफर की सुविधा देता है। यह सुरक्षित प्रमाणीकरण पर आधारित है।",
    hi_faq: ["क्या UPI सुरक्षित है? → हाँ, यह बैंक-स्तरीय सुरक्षा और PIN प्रमाणीकरण का उपयोग करता है।", "इंटरनेट ज़रूरी है? → हाँ, भुगतान के लिए सक्रिय इंटरनेट कनेक्शन चाहिए।"],
    hi_myths: ["UPI ऐप में पैसे जमा होते हैं। → पैसे हमेशा आपके बैंक खाते में रहते हैं।", "UPI के लिए कार्ड चाहिए। → केवल ऐप से लिंक बैंक खाता चाहिए।"],
  },
  "Risk and return explained": {
    simple: "Risk means the chance you might lose some money, and return is the profit you might earn. Higher returns usually come with higher risk. Safer options grow slowly but steadily — riskier ones can grow fast but can also fall.",
    normal: "Risk and return are directly correlated in investing. Higher potential returns require accepting higher uncertainty and possible losses. Understanding this trade-off is the foundation of every sound investment decision.",
    faq: ["Is all risk bad? → No — managed risk is necessary for wealth growth.", "Can risk be avoided completely? → It can be managed and reduced through diversification but never fully eliminated."],
    myths: ["Higher return is always better. → Risk must always be considered alongside return.", "Low risk means no possibility of loss. → Very low risk still isn't zero risk — nothing is."],
    hi_simple: "जोखिम मतलब पैसे खोने की संभावना, और रिटर्न मतलब कमाई। ज़्यादा रिटर्न आमतौर पर ज़्यादा जोखिम के साथ आता है। सुरक्षित विकल्प धीरे बढ़ते हैं पर जोखिम भरे विकल्प तेज़ी से बढ़ और गिर सकते हैं।",
    hi_normal: "जोखिम और रिटर्न सीधे संबंधित हैं। ज़्यादा संभावित रिटर्न के लिए ज़्यादा अनिश्चितता स्वीकार करनी होती है। यह समझौता हर सही निवेश निर्णय की नींव है।",
    hi_faq: ["क्या सारा जोखिम बुरा है? → नहीं — संपत्ति बढ़ाने के लिए नियंत्रित जोखिम ज़रूरी है।", "क्या जोखिम पूरी तरह टाला जा सकता है? → विविधता से कम किया जा सकता है पर खत्म नहीं।"],
    hi_myths: ["ज़्यादा रिटर्न हमेशा बेहतर है। → रिटर्न के साथ जोखिम हमेशा देखना चाहिए।", "कम जोखिम = नुकसान की कोई संभावना नहीं। → बहुत कम जोखिम भी शून्य नहीं होता।"],
  },
  "100 minus age rule": {
    simple: "Subtract your age from 100 — that's the percentage to keep in stocks. At age 25, put 75% in equity and 25% in safer options like FDs. Shift toward safety as you get older.",
    normal: "The 100-minus-age rule is a thumb rule for asset allocation: equity % = 100 minus your age. Younger investors can tolerate more volatility; those near retirement need capital preservation. Many advisors now use 110 or 120 minus age due to longer life expectancy.",
    faq: ["Is this always accurate? → It's a starting guide, not a law — adjust based on your risk tolerance and goals.", "Should I rebalance every year? → A review every 3-5 years is sufficient for most investors."],
    myths: ["This rule guarantees good returns. → It's only a starting allocation guide; actual returns depend on market performance.", "Everyone the same age should have identical portfolios. → Age is just one factor; income stability, goals, and dependants also matter."],
  },
  "25x rule for retirement": {
    simple: "Save 25 times your expected annual expenses to retire comfortably. Spending ₹6 lakh/year? Target ₹1.5 crore. This lets you withdraw 4% annually for 30+ years without running out.",
    normal: "The 25x rule comes from the 4% safe withdrawal rate: you can withdraw 4% of your corpus annually and sustain it for ~30 years historically. Corpus = Annual expenses × 25. Adjust upward for early retirement or high healthcare costs.",
    faq: ["Why 25 times? → Because 1 ÷ 4% = 25. At 4% annual withdrawal, the corpus lasts ~30 years historically.", "Does inflation change this? → Yes — use future inflation-adjusted annual expenses, not today's numbers."],
    myths: ["25x is always enough for anyone. → Healthcare, longevity, and lifestyle changes may require 30x or more.", "This rule only works for large savings. → The ratio applies at any wealth level — it's about proportion, not absolute size."],
  },
  "50-30-20 rule explained": {
    simple: "Split take-home salary: 50% on needs (rent, food, bills, EMIs), 30% on wants (dining out, entertainment), and 20% on savings or debt repayment. It's the simplest budget you can start today.",
    normal: "The 50-30-20 rule allocates after-tax income: 50% to needs (essentials), 30% to wants (discretionary), 20% to savings and debt repayment. It provides structure without tracking every rupee — ideal for beginners.",
    faq: ["What counts as a need vs a want? → Needs are essentials you can't live or work without; wants improve comfort but aren't essential.", "What if my needs exceed 50%? → Cut wants first, then look to increase income over time."],
    myths: ["The percentages must be followed exactly. → Adjust to your situation — the key principle is saving at least 20%.", "This rule is only for high earners. → It scales to any income; the proportions matter more than the absolute amounts."],
  },
  "Advantages of zero-based budgeting": {
    simple: "In zero-based budgeting, every rupee gets a job before the month starts. You assign money to expenses, savings, and fun until nothing is unallocated. This stops money from quietly disappearing.",
    normal: "Zero-based budgeting (ZBB) resets to zero each month, requiring justification for every expense. Unlike traditional budgeting that adjusts last month's figures, ZBB eliminates habitual wasteful spending and forces conscious allocation of every rupee.",
    faq: ["Is ZBB too time-consuming? → The first month takes effort; after that, copying and adjusting takes 15-20 minutes.", "Does it work with irregular income? → Yes — base the budget on your lowest expected monthly income."],
    myths: ["Zero-based means spending nothing. → It means every rupee is assigned a purpose — including fun money.", "ZBB is only for businesses. → It's one of the most effective personal finance tools available."],
  },
  "Angel investors vs venture capital basics": {
    simple: "Angel investors are wealthy individuals who invest their own money in early startups for a small ownership stake. Venture capital firms invest pooled institutional money into startups at a later stage with larger amounts.",
    normal: "Angel investors: high-net-worth individuals investing ₹25 lakh–₹5 crore of personal funds in early-stage startups for equity, typically pre-revenue. VCs: fund managers deploying institutional money (₹5 crore+) in startups with proven traction, for significant equity and board representation.",
    faq: ["Which is better for a brand-new startup? → Angels for idea/MVP stage; VCs once you have revenue traction.", "Do they take control of your company? → They get minority equity, not full control — founders usually remain in charge."],
    myths: ["Only tech companies can get this funding. → Any high-growth business can attract angel or VC interest.", "Taking VC money means losing your business. → Dilution happens gradually — founders typically retain majority for several years."],
  },
  "Annual expense planning": {
    simple: "Some expenses hit once a year — insurance renewals, school fees, festival shopping, vehicle servicing. Divide each by 12 and set aside that amount monthly. When the bill arrives, the money is already there.",
    normal: "Annual expense planning identifies all irregular or seasonal costs and pre-funds them via monthly transfers to a dedicated sub-account. This prevents scrambling for lump sums, avoids credit card debt, and makes annual cash flow predictable.",
    faq: ["How do I know what annual expenses to expect? → Review last year's bank statements — irregular large withdrawals reveal the pattern.", "Where should I park this money? → A separate savings account or liquid fund — accessible but not mixed with daily spending."],
    myths: ["Annual expenses are impossible to predict. → Most repeat every year — last year's amounts are a reliable estimate.", "I'll borrow when the expense hits. → Pre-funding costs nothing; borrowing costs interest on top of the expense."],
  },
  "Asset allocation by age": {
    simple: "When young, keep more in stocks for higher growth. As you age, shift more to FDs and bonds. Starting point: put your age in bonds, rest in equity. Rebalance every few years.",
    normal: "Asset allocation by age: 20s-30s hold 70-80% equity for long-term growth; 40s shift to 50-60%; pre-retirement (55+) move to 30-40% equity for capital preservation. Annual rebalancing restores target allocation after market movements.",
    faq: ["How often should I rebalance? → Once or twice a year is sufficient for most long-term investors.", "What counts as equity here? → Equity mutual funds, direct stocks, and ULIPs with high equity allocation."],
    myths: ["Young people should put everything in equity. → Even young investors benefit from 10-20% in debt for stability during crashes.", "Older investors should avoid equity entirely. → With 20+ years of retirement ahead, some equity is still needed to beat inflation."],
  },
  "BSE and NSE explained": {
    simple: "BSE (Bombay Stock Exchange) and NSE (National Stock Exchange) are India's two main stock exchanges where companies list their shares. BSE is Asia's oldest; NSE is India's largest by trading volume.",
    normal: "BSE (est. 1875) has 5,000+ listed companies and hosts the Sensex (30-stock index). NSE (est. 1992) is India's largest by volume and home to the Nifty 50. Both are regulated by SEBI. Most large companies are dual-listed; prices stay nearly identical across both due to arbitrage.",
    faq: ["Which exchange should I use to buy shares? → Your broker routes orders automatically — you don't choose manually.", "What's the difference between Sensex and Nifty? → Sensex tracks 30 companies on BSE; Nifty 50 tracks 50 companies on NSE."],
    myths: ["BSE and NSE have completely different companies listed. → Most large-cap Indian companies are listed on both exchanges.", "Buying on one exchange gives different shares than the other. → Same company, same ownership rights — exchange is just the marketplace."],
  },
  "Balance sheet basics": {
    simple: "A balance sheet is a snapshot of a business at one moment — what it owns (assets), what it owes (liabilities), and what the owner has left (equity). Assets always equal liabilities plus equity.",
    normal: "A balance sheet shows assets, liabilities, and shareholders' equity at a specific date. The fundamental equation: Assets = Liabilities + Equity. It reveals financial health, solvency, and leverage. Current assets (cash, receivables) vs non-current assets (property, equipment) indicate short-term liquidity.",
    faq: ["What's the difference between balance sheet and P&L? → Balance sheet shows financial position at a point in time; P&L shows profit/loss over a period.", "Why must assets equal liabilities plus equity? → Double-entry accounting — every asset was funded by borrowing (liability) or owner investment (equity)."],
    myths: ["A balance sheet shows how profitable a business is. → Profitability is on the P&L statement; balance sheet shows position, not performance.", "Only large businesses need a balance sheet. → Any business tracking finances benefits from maintaining a simple balance sheet."],
  },
  "Basic bookkeeping concepts": {
    simple: "Bookkeeping means recording every financial transaction in your business — every sale, every expense, every payment. It's like keeping a diary for your business's money so you always know where things stand.",
    normal: "Bookkeeping is the systematic daily recording of all financial transactions into journals and ledgers. It forms the foundation for producing accurate financial statements (P&L, balance sheet) and tax filings. Core concepts: double-entry accounting, accounts receivable, accounts payable, and bank reconciliation.",
    faq: ["Do I need accounting software for bookkeeping? → Apps like Vyapar, Zoho Books, or Tally make it manageable without an accountant for small businesses.", "How often should I update my books? → Daily or weekly — letting it accumulate makes errors much harder to find."],
    myths: ["Bookkeeping is only needed at tax time. → Regular bookkeeping catches cash flow problems before they become crises.", "Bookkeeping and accounting are the same thing. → Bookkeeping is recording transactions; accounting is interpreting and reporting them."],
  },
  "Bootstrapping explained": {
    simple: "Bootstrapping means building a business using only your own money and early revenues — no investors, no loans. You grow slowly but own 100% of your company. Every rupee spent must earn its keep.",
    normal: "Bootstrapping is self-funding a business through personal savings and early customer revenue. It preserves full ownership and control, avoids equity dilution, and forces lean operations. The tradeoff is slower growth compared to funded competitors. Most Indian SMEs start bootstrapped.",
    faq: ["Is bootstrapping better than taking investor money? → Bootstrapping for control; investors for speed — choose based on your market and ambitions.", "Can any business be bootstrapped? → Service businesses and software products are easiest; capital-intensive manufacturing often requires external funding."],
    myths: ["Bootstrapped businesses always stay small. → Zoho bootstrapped its way to a multi-billion dollar company.", "You need large savings to bootstrap. → Starting with a service and reinvesting early revenue is a valid bootstrap strategy."],
  },
  "Budgeting for festivals and events": {
    simple: "Diwali, weddings, and other events can wreck your finances without a plan. Set a total spending limit before the season begins. List every cost — gifts, travel, clothes, food — and track against that limit. Celebrate without debt.",
    normal: "Festival and event budgeting requires setting a firm spending ceiling before the season, categorising all expected costs, and pre-saving monthly for predictable annual events. A dedicated festival sub-account funded throughout the year prevents impulsive credit card use and post-festival debt.",
    faq: ["How do I enjoy festivals without overspending? → Set a per-person gift limit, plan home meals for some occasions, and compare prices before buying.", "What about large one-time events like weddings? → Start a dedicated wedding fund years in advance — even modest monthly contributions add up."],
    myths: ["Festivals are exceptions where overspending is acceptable. → Festival debt is real and can take months to clear — celebrations don't require financial stress.", "I'll use my credit card and pay later. → Festival credit card spending often lingers with interest for months after the celebration ends."],
  },
  "Business credit card benefits": {
    simple: "A business credit card separates work expenses from personal spending. It automatically tracks business costs, earns rewards on purchases, and generates GST-compliant statements — making tax filing much easier.",
    normal: "Business credit cards offer higher credit limits, per-category expense tracking, GST-compliant invoicing for input tax credit claims, employee card controls, and rewards on business purchases. They also build a business credit profile separate from personal CIBIL.",
    faq: ["Can a sole proprietor get a business credit card? → Yes — most banks offer business cards to proprietors with GST registration and income proof.", "Are business card expenses tax-deductible? → Yes — legitimate business expenses paid via business card qualify as business deductions."],
    myths: ["Business and personal credit cards work the same way. → Business cards have higher limits, better expense controls, and different reward structures.", "I don't need a business card if I have a personal one. → Mixing personal and business expenses creates accounting complications and increases audit risk."],
  },
  "Business income explained": {
    simple: "Business income is the money a business earns from selling products or services. Unlike a fixed salary, it changes month to month based on sales. After paying all expenses, what remains is your profit.",
    normal: "Business income (turnover/revenue) is total earnings from core business activities before expenses. Net profit = Revenue minus all expenses (rent, salaries, materials, taxes). Business owners pay income tax on net profit, not total revenue. Business income is variable and carries market risk unlike salaried income.",
    faq: ["Is high revenue the same as being profitable? → No — a business can have high revenue and still make losses if expenses are higher.", "How is business income taxed? → Deduct all legitimate business expenses first; remaining profit is taxed under applicable income tax slab or presumptive taxation."],
    myths: ["Business owners don't pay income tax. → Business profits above ₹2.5 lakh are taxable under income tax slabs.", "High revenue always means a successful business. → Revenue without profit is just activity — what matters is what remains after all costs."],
  },
  "CIBIL score ranges explained": {
    simple: "CIBIL scores run from 300 to 900. Above 750: excellent — banks offer best loan rates. 650-750: good — most loans approved at standard rates. Below 650: difficult to get loans. Below 550: most applications rejected.",
    normal: "CIBIL score bands: 750-900 (Excellent): lowest interest rates, highest approval. 700-749 (Good): most products available. 650-699 (Fair): approvals possible at higher rates. 550-649 (Below Average): limited options. 300-549 (Poor): very few lenders willing to lend.",
    faq: ["How quickly can a bad score improve? → With consistent on-time payments and low utilisation, meaningful improvement takes 6-12 months.", "Does checking my own CIBIL score hurt it? → No — self-checks are soft inquiries with zero impact on your score."],
    myths: ["A score of 700 gets you the best loan rates. → Most premium rates and offers require 750 or above.", "One missed payment permanently ruins your score. → The impact fades over time with consistent good behaviour — it doesn't last forever."],
  },
  "Cashless hospitalisation explained": {
    simple: "Cashless hospitalisation means the insurance company pays the hospital directly — you don't need to arrange money upfront. Show your health insurance card at a network hospital, get treated, and walk out without paying the bill yourself.",
    normal: "Cashless hospitalisation eliminates out-of-pocket payment at network hospitals: the insurer settles bills directly after pre-authorisation. Available only at hospitals in the insurer's network. Non-network hospitals require paying first and claiming reimbursement. Co-pays, deductibles, and non-covered items still need out-of-pocket payment.",
    faq: ["What if my preferred hospital isn't in the network? → You pay first and file a reimbursement claim — more paperwork but still covered by your policy.", "Is there anything I still pay even with cashless? → Yes — co-pays, deductibles, room upgrades above covered limits, and excluded treatments."],
    myths: ["Cashless means completely free treatment. → You still pay portions excluded by your policy, such as co-pays and non-covered procedures.", "All hospitals offer cashless treatment. → Cashless is only available at hospitals in your specific insurer's empanelled network."],
  },
  "Co-pay in health insurance explained": {
    simple: "Co-pay means you share a portion of every hospital bill with the insurer. If your policy has 10% co-pay and the bill is ₹1 lakh, you pay ₹10,000 and the insurer pays ₹90,000. Policies with co-pay charge lower premiums.",
    normal: "A co-payment is a fixed percentage of each claim paid by the policyholder, with the insurer covering the rest. Common scenarios: 10-20% co-pay for senior citizen policies, geographic co-pay for metro claims, or voluntary co-pay chosen by policyholder for a lower premium.",
    faq: ["How do I avoid co-pay? → Choose policies with zero co-pay — they cost more in premium but you pay less at claim time.", "Is co-pay the same as a deductible? → No — a deductible is a fixed rupee amount; co-pay is a percentage of every claim."],
    myths: ["Co-pay makes insurance pointless. → Even 20% co-pay means the insurer covers 80% of large bills — still very valuable.", "All health insurance policies have co-pay. → Many comprehensive plans, especially for younger buyers, offer zero co-pay."],
  },
  "Common UPI frauds and how to avoid them": {
    simple: "Common UPI frauds: fake collect requests (look like incoming payments but send money out), phishing links, and callers pretending to be bank staff asking for your UPI PIN. Your PIN is only for sending money — never share it. You never need a PIN to receive money.",
    normal: "Major UPI fraud types: (1) Collect request scam — victim approves a payment request believing it's incoming money. (2) Vishing — fake bank calls extracting UPI PIN/OTP. (3) QR fraud — tampered QR codes redirect payments. (4) Screen sharing scams — AnyDesk installed by fraudster under pretext of UPI help. Never share PIN, OTP, or allow screen sharing.",
    faq: ["What if I accidentally approved a fraudulent payment? → Call your bank's fraud helpline immediately and report to cybercrime.gov.in and 1930 within minutes.", "Can UPI payments be reversed? → Legitimate UPI transfers cannot be reversed — prevention is the only protection."],
    myths: ["A collect request means someone is sending me money. → Approving a collect request means YOU are paying THEM — it's a payment, not a receipt.", "Strong UPI PIN means I'm safe from fraud. → If you're tricked into approving a payment yourself, the PIN strength is irrelevant."],
  },
  "Common banking frauds in India": {
    simple: "Common bank frauds: fake calls from 'bank officers' asking for your OTP, phishing websites that look like your bank, ATM card skimming, and SIM swap fraud. The most important rule: your bank will NEVER call and ask for your OTP, PIN, or password.",
    normal: "Major banking frauds: OTP phishing (vishing calls posing as bank staff), email/SMS phishing (fake bank links), ATM card skimming (devices cloning card data), SIM swap (fraudster gets duplicate SIM to receive OTPs), and cheque fraud. RBI mandates zero liability for customers who report within 3 days of discovering fraud.",
    faq: ["What should I do the moment I suspect fraud? → Call your bank's 24x7 helpline immediately to block your card/account, then report to cybercrime.gov.in and file FIR.", "Will the bank refund money lost to fraud? → If you report promptly (within 3 days) and weren't negligent, RBI guidelines mandate refund within 10 working days."],
    myths: ["Banking fraud only happens to uneducated people. → Sophisticated phishing targets educated, tech-savvy individuals too.", "Using net banking only from home means I'm safe. → Home WiFi can be compromised — always verify HTTPS and the bank's official domain before logging in."],
  },
  "Common money mistakes without a budget": {
    simple: "Without a budget, people overspend on food delivery and forgotten subscriptions, undersave, and are shocked when the month ends with nothing left. A budget is simply awareness — you can't manage what you don't measure.",
    normal: "Common budgetless financial mistakes: lifestyle creep (spending rises with income automatically), impulse purchases, zero emergency fund, revolving credit card debt, and missed investment opportunities. A budget creates the awareness needed to break each of these patterns intentionally.",
    faq: ["I mentally track my spending — is that enough? → Research shows mental tracking underestimates frequent small purchases by 40-60%.", "What's the single worst money mistake without a budget? → Not paying yourself first — saving 'whatever is left' almost always results in saving zero."],
    myths: ["Budgeting means not being able to enjoy life. → A good budget allocates money specifically for enjoyment — you just know how much in advance.", "Tracking every expense is too much effort. → Apps like ET Money or Walnut automate most of this in seconds."],
  },
  "Common mutual fund mistakes": {
    simple: "The biggest mutual fund mistakes: stopping your SIP when markets fall (worst time to stop), investing in too many funds at once, and chasing whatever fund performed best last year. Staying invested patiently is the actual skill.",
    normal: "Key mutual fund mistakes: (1) Stopping SIPs in downturns — missing buying at lower NAVs. (2) Over-diversification — holding 15+ funds duplicates exposure without benefit. (3) Return chasing — last year's top fund frequently underperforms next year. (4) Ignoring expense ratio — 1% extra in fees dramatically reduces wealth over 20 years. (5) No clear investment goal.",
    faq: ["How many mutual funds should I own? → 3-5 well-chosen funds adequately cover most financial goals.", "Should I sell when markets crash 20%? → Historically, staying invested and continuing SIPs during crashes creates significantly more wealth than selling."],
    myths: ["More funds means better diversification. → Beyond 5-6 funds, additional funds overlap heavily and reduce returns without reducing risk.", "A fund that performed well for 3 years will keep doing well. → Past performance is explicitly not a guarantee of future returns."],
  },
  "Compounding frequency explained": {
    simple: "Compounding frequency means how often your interest earns interest. Daily compounding grows money faster than monthly, which is faster than yearly. FDs in India are typically compounded quarterly. The more frequent, the better for your savings.",
    normal: "Compounding frequency determines how often interest is calculated and added to principal. More frequent compounding increases effective annual yield. Example: 8% p.a. compounded quarterly yields ~8.24% effective annual rate; daily compounding yields ~8.33%. For loans, more frequent compounding increases the effective cost to the borrower.",
    faq: ["Does daily vs monthly compounding make a big difference? → On large amounts over decades yes; on small short-term amounts the difference is marginal.", "What compounding frequency should I look for? → Maximise compounding frequency on savings; minimise it on loans by paying EMIs on time."],
    myths: ["The stated interest rate is what you actually earn. → The effective annual rate from compounding is always higher than the stated nominal rate.", "Compounding frequency doesn't matter for FDs. → Quarterly compounding earns more than annual compounding at the same stated rate."],
  },
  "Correlation between assets explained": {
    simple: "Correlation describes how two investments move relative to each other. When stocks fall, gold often rises — they have low correlation. Putting both in your portfolio smooths out the ride. Don't put all your money in things that all fall at the same time.",
    normal: "Correlation ranges from -1 (perfect inverse) to +1 (perfect same movement). Low or negative correlation between asset classes provides genuine diversification — portfolio losses during equity downturns are partially offset by gold or bond gains. High correlation (+1) offers no diversification benefit.",
    faq: ["Why does gold often rise when stocks fall? → Gold is a safe-haven asset — uncertainty drives investors toward it, increasing demand and price.", "How do I use this in building my portfolio? → Including 10-15% gold or bonds alongside equity smooths overall portfolio volatility significantly."],
    myths: ["All assets become perfectly correlated during market crashes. → Correlation increases in crises, but diversification still meaningfully reduces peak portfolio losses.", "Real estate and equity always move in the same direction. → Indian real estate and equity markets have historically moved on different cycles."],
  },
  "Credit card billing cycle": {
    simple: "Your credit card billing cycle is the period (usually 30 days) during which your purchases accumulate. At cycle end you receive a bill. You then have 15-25 days to pay. Pay the full amount by the due date and you owe zero interest.",
    normal: "The billing cycle is a 28-31 day period during which transactions are recorded. The statement date generates the bill; the due date (15-25 days later) is the interest-free deadline. Paying the minimum amount due triggers interest (24-48% p.a.) on the entire remaining balance, not just the unpaid portion.",
    faq: ["Can I change my billing cycle date? → Most banks allow one date change per year — align it with your salary credit date for easier management.", "What happens if I pay 2 days after the due date? → Late fee applies and the interest-free period is lost — the remaining balance starts accruing interest immediately."],
    myths: ["Paying the minimum amount is responsible credit card usage. → Minimum payment is a debt trap — interest accrues on the full balance at 24-48% p.a.", "I'm safe if I pay at least the minimum every month. → You'll pay dramatically more in total interest, and the debt can grow even as you make payments."],
  },
  "Credit card rewards and cashback": {
    simple: "Credit cards offer rewards for spending — cashback (₹ back on purchases), reward points (redeemable for flights or vouchers), and air miles. A good cashback card returns 1-5% of spending. Rewards only benefit you if you pay your bill in full every month.",
    normal: "Credit card reward structures: cashback (direct ₹ credit), reward points (redemption for partner brands), and co-branded benefits (lounge access, fuel surcharge waiver). Value optimisation requires matching the card's highest-reward category to your biggest spending category. Always calculate whether annual fees are offset by rewards earned.",
    faq: ["Which gives more value — cashback or reward points? → Cashback is simpler; reward points offer higher value for frequent flyers using airline co-branded cards.", "Do reward points expire? → Most banks expire points in 2-3 years — check your card's policy and redeem regularly."],
    myths: ["Cashback cards always beat reward point cards. → Frequent flyers using airline miles cards often get 3-5x more value per rupee spent.", "Spending more to earn rewards is smart. → Overspending to earn rewards costs far more in interest than any reward is worth."],
  },
  "Current account explained": {
    simple: "A current account is a bank account designed for businesses. It allows unlimited daily transactions, earns no interest, requires a higher minimum balance, and comes with an overdraft facility — letting you temporarily spend more than your balance.",
    normal: "Current accounts are transactional accounts for businesses requiring high-volume daily banking. Unlike savings accounts, they earn no interest, require higher minimum balances (₹10,000-₹1 lakh+), and provide cheque books and overdraft facilities for business cash flow management.",
    faq: ["Can an individual open a current account? → Yes, but it's designed for businesses — a savings account better serves personal banking needs.", "Why does a current account pay no interest? → Banks treat current account funds as operational cash that moves constantly, making interest impractical."],
    myths: ["Current and savings accounts are interchangeable. → Current accounts are built for business transaction volumes; savings accounts for personal use.", "Current accounts are only for large corporations. → Any small proprietor or business with regular transactions benefits from a dedicated current account."],
  },
  "Current account for business": {
    simple: "Every business should have a current account separate from the owner's personal account. This keeps business and personal money clean, makes accounting straightforward, and builds a banking track record essential for future business loans.",
    normal: "A dedicated business current account provides separation of business and personal finances, GST-compliant transaction history, higher transaction limits, overdraft for short-term working capital, and a business banking track record that strengthens loan eligibility.",
    faq: ["Can I run a business using my personal savings account? → Legally possible, but it creates accounting confusion, complicates tax filing, and may flag unusual activity with your bank.", "What documents are needed to open a business current account? → Business registration proof, GST certificate, PAN card, and address proof."],
    myths: ["A business current account is only needed once you're large. → Opening it from day one creates a clean financial record from the start.", "All current accounts offer the same features. → Banks offer different tiers with varying limits, minimum balances, overdraft facilities, and charges."],
  },
  "Debt avalanche method explained": {
    simple: "The debt avalanche method means paying off your highest-interest debt first while making minimum payments on all others. Once the costliest debt is cleared, move to the next highest rate. This saves the most money on interest overall.",
    normal: "The avalanche method prioritises debts by interest rate — highest first. After paying minimums on all accounts, direct all surplus money to the highest-rate balance. This is mathematically optimal — it minimises total interest paid. It requires discipline as the highest-rate debt may also be the largest balance.",
    faq: ["How is avalanche different from snowball? → Snowball pays smallest balance first (faster motivational wins); avalanche pays highest rate first (saves more money).", "Which method should I choose? → Avalanche if you're analytically motivated; snowball if you need quick wins to stay committed."],
    myths: ["Avalanche takes too long before you see results. → On high-rate debts like credit cards (36-48% p.a.), avalanche often frees up significant money within months.", "Both methods cost the same in the end. → Avalanche consistently saves more total interest compared to the snowball method."],
  },
  "Debt mutual funds explained": {
    simple: "Debt mutual funds invest in government bonds, company bonds, and fixed-income securities — not in stocks. They're more stable than equity funds, give better returns than savings accounts, and are ideal for short to medium-term money goals.",
    normal: "Debt mutual funds invest in fixed-income instruments: government securities, treasury bills, corporate bonds, and money market instruments. Returns are more stable than equity but not guaranteed. Risks include interest rate risk (NAV falls when rates rise) and credit risk. Tax-efficient vs FDs for investors in the 30% bracket over 3+ year horizons.",
    faq: ["Are debt mutual funds as safe as FDs? → Safer than equity but not risk-free — NAV can fall if interest rates rise or a bond defaults.", "Are debt funds better than FDs for a 3-year goal? → For investors in the 30% tax bracket, debt funds can be more tax-efficient."],
    myths: ["Debt funds guarantee returns like an FD. → NAV fluctuates with interest rate changes and credit events — there's no guaranteed return.", "Debt funds are boring and not worth considering. → For short-term parking of large sums, liquid debt funds typically earn more than savings accounts."],
  },
  "Debt snowball method explained": {
    simple: "The debt snowball method means paying off your smallest debt first, regardless of interest rate. Once cleared, roll that payment to the next smallest. Each debt eliminated creates a motivational win that keeps you going.",
    normal: "The snowball method prioritises debts by balance size (smallest first), creating quick psychological wins. Research shows higher debt payoff completion rates with snowball versus avalanche, despite the snowball costing slightly more in total interest.",
    faq: ["Does snowball cost more than avalanche? → Typically yes — slightly more total interest paid, but the motivational advantage often makes it more effective for completion.", "How do I start the snowball? → List all debts smallest to largest. Pay minimums on all. Put every extra rupee on the smallest balance until it's gone."],
    myths: ["Paying the smallest debt first is financially irrational. → For people who need motivational momentum to stay committed, it's psychologically rational and practically effective.", "Eliminating small debts makes no real difference. → Clearing a debt entirely frees that monthly payment to accelerate the next payoff."],
  },
  "Difference between NEFT RTGS IMPS": {
    simple: "NEFT transfers settle in batches throughout the day — good for normal transfers. RTGS settles instantly but requires a minimum of ₹2 lakh — for large transactions. IMPS settles instantly 24/7 with no minimum — ideal for most personal transfers.",
    normal: "NEFT: settled in 30-minute batches, available 24/7, no minimum or maximum. RTGS: real-time gross settlement, minimum ₹2 lakh, for large business transactions. IMPS: instant settlement, 24/7, limit ₹5 lakh per transaction. UPI: built on IMPS, limit ₹1 lakh standard. Choose based on amount and urgency.",
    faq: ["Which transfer method is cheapest? → NEFT and IMPS have minimal charges; RTGS may be free at many banks for amounts above ₹2 lakh.", "When would I use RTGS over IMPS? → For large transactions (property purchase, large vendor payment) where instant confirmed settlement is critical."],
    myths: ["NEFT is slow compared to RTGS and IMPS. → NEFT settles within 30 minutes in most cases — the user experience difference is minimal for most transfers.", "IMPS is risky because it's instant and irreversible. → Instant doesn't mean unsafe — IMPS uses full banking security including OTP verification."],
  },
  "Difference between investing and trading": {
    simple: "Investing means buying stocks or funds and holding for years to build wealth. Trading means buying and selling frequently to profit from short-term price moves. Investing is for everyone; trading is extremely difficult and over 90% of traders lose money.",
    normal: "Investing: long-term (3+ years), uses compound growth and fundamentals, low transaction frequency, historically 12-15% CAGR for Indian equity over 10-year periods. Trading: short-term (seconds to weeks), exploits price momentum, high frequency. SEBI data shows 90%+ of F&O traders lose money over 3 years.",
    faq: ["Can I trade profitably part-time? → Very few people do — successful trading demands full-time attention, emotional discipline, and significant capital.", "Should a beginner invest or trade? → Invest — a simple SIP in an index fund is statistically more profitable for most people than active trading."],
    myths: ["Trading is just faster investing with bigger returns. → Trading and investing require completely different skills, psychology, and risk management.", "I can learn to trade profitably from YouTube videos. → Trading competence requires years of live-market practice and rigorous study of risk management."],
  },
  "Difference between profit and cash flow": {
    simple: "Profit is what remains on paper after subtracting expenses from revenue. Cash flow is actual money moving in and out of your bank account. A business can show a profit but still run out of cash if customers haven't paid their invoices yet.",
    normal: "Profit (net income) is a book figure: Revenue minus all expenses including non-cash items like depreciation. Cash flow is actual cash received and disbursed. A profitable business can become insolvent from poor cash flow — a common cause of small business failure in India.",
    faq: ["Which matters more — profit or cash flow? → Cash flow for immediate survival; profit for long-term sustainability. Both matter simultaneously.", "How can I improve cash flow without increasing sales? → Invoice faster, shorten customer payment terms, and extend supplier payment terms."],
    myths: ["A profitable business always has healthy cash flow. → Not true when revenue is on credit terms and costs are paid in cash — very common in construction and manufacturing.", "Cash flow and revenue are the same thing. → Revenue is money earned; cash flow tracks actual collections and payments — they rarely match in timing."],
  },
  "Difference between salary and business income": {
    simple: "Salary is fixed and arrives on a predictable date every month with tax already deducted. Business income varies based on how much you sell, and you must pay your own taxes separately. Salary gives stability; business income gives unlimited potential.",
    normal: "Salary: fixed contractual payment, TDS deducted at source, employer-paid PF, predictable. Business income: variable based on sales/services, self-managed taxes (advance tax, GST), owner responsible for all benefits. Tax differs: salaried get standard deduction; business owners deduct actual expenses before computing taxable profit.",
    faq: ["Can I have both salary and business income? → Yes — many professionals have freelance income alongside salaried employment. Declare both in ITR.", "Which offers more financial freedom? → Business income has no ceiling — a successful business can far exceed any salary."],
    myths: ["Business owners always pay less tax than salaried employees. → Business owners pay tax on profit — a profitable business can result in more tax than a salaried person pays.", "Salaried jobs are always more secure than business. → Jobs can disappear overnight; a diversified business often provides more long-term resilience."],
  },
  "Differences between business and salaried income": {
    simple: "Salaried income is predictable, comes from one employer monthly, and requires minimal financial management. Business income fluctuates with market demand and requires active management — invoicing, cash flow, and tax planning.",
    normal: "Core differences: Stability (salary is fixed; business varies). Tax treatment (salaried get standard deduction and simple ITR-1; business owners file ITR-3/4 and deduct actual expenses). Risk profile (salary carries employment risk; business carries market risk but higher upside). Social security (EPF mandatory for salaried; business owners must self-fund retirement).",
    faq: ["Which income type is better for wealth building? → Business income has no ceiling; salary income is capped. Long-term, successful business owners typically build more wealth.", "How do I manage taxes on business income? → Maintain records of all income and expenses, pay advance tax quarterly, and consult a CA for ITR-3/4 filing."],
    myths: ["Salaried income is always more stable. → Stability comes at the cost of income growth ceiling — many salaried employees face sudden layoffs too.", "Managing business income tax is impossibly complicated. → With proper bookkeeping and a good accountant, it's very manageable."],
  },
  "Dividend reinvestment explained": {
    simple: "When you get dividends from a mutual fund or stock, you can choose to reinvest them — buy more units instead of taking cash. Over time this creates a compounding effect where your dividends earn more dividends. In mutual funds, choosing the 'Growth' option does this automatically.",
    normal: "Dividend reinvestment automatically uses payout proceeds to purchase additional units/shares, accelerating compounding. In mutual funds, the Growth option retains all returns within the fund (no payout), which is more tax-efficient than the IDCW option since there's no taxable event until redemption.",
    faq: ["Is the Growth option the same as dividend reinvestment? → Similar outcome but Growth is more tax-efficient — no tax event until you sell, unlike IDCW which taxes each payout.", "Can I switch my mutual fund from IDCW to Growth? → Yes — request a switch through your fund house or broker; it may trigger a taxable redemption."],
    myths: ["Dividend reinvestment and Growth options are identical. → Growth option defers all tax to redemption; IDCW creates taxable events at each payout.", "Taking dividends as cash is always better for retirement income. → A Systematic Withdrawal Plan (SWP) from a Growth fund is usually more tax-efficient than IDCW."],
  },
  "Dividend yield explained": {
    simple: "Dividend yield tells you what percentage of a share's price the company pays out as dividends each year. If a share costs ₹100 and pays ₹5 in dividends, the yield is 5%. High-yield stocks pay regular income — useful if you need steady cash from your investments.",
    normal: "Dividend yield = (Annual dividend per share ÷ Current share price) × 100. It measures annual income return from a stock, excluding capital appreciation. High-yield stocks are typically mature, stable companies (PSUs, utilities). A very high yield can signal a falling share price rather than generosity — always investigate the reason.",
    faq: ["Is a higher dividend yield always better? → Not if it results from a sharply falling share price — investigate whether the dividend is sustainable.", "Which Indian sectors typically have high dividend yields? → PSU banks, oil companies, power utilities, and established IT firms historically have higher yields."],
    myths: ["High dividend yield stocks are the safest investments. → High yield can indicate a struggling company whose share price has fallen significantly.", "Dividend yield and dividend amount are the same. → Yield is the return relative to price; the rupee dividend per share is separate from yield."],
  },
  "Doubling time at different interest rates": {
    simple: "The Rule of 72 tells you how long to double your money: divide 72 by the annual interest rate. At 6%, money doubles in 12 years. At 12%, in 6 years. This also works for debt — at 36% credit card interest, your debt doubles in just 2 years.",
    normal: "Rule of 72: Doubling time (years) = 72 ÷ Annual interest rate. Examples: FD at 7% → ~10.3 years; equity average 12% → 6 years; credit card debt 36% → 2 years. The rule applies symmetrically — savings compound upward; debts compound against you at the same speed.",
    faq: ["Is Rule of 72 exactly accurate? → It's a close approximation — Rule of 69.3 is more precise for continuous compounding, but 72 is easiest for mental math.", "Can I use Rule of 72 for inflation? → Yes — at 6% inflation, purchasing power of your cash halves in 12 years."],
    myths: ["High interest rate investments are always worth the risk. → Higher potential returns always come with higher risk — the Rule shows potential, not guarantee.", "The Rule of 72 only matters for large amounts. → The percentage doubling is the same regardless of amount — ₹10,000 to ₹20,000 is as significant as ₹10 lakh to ₹20 lakh."],
  },
  "ELSS lock-in period": {
    simple: "ELSS funds have a 3-year lock-in — the shortest among all Section 80C tax-saving options. You cannot withdraw before 3 years from each investment date. After 3 years, you're free to keep the money growing or redeem it.",
    normal: "ELSS has a mandatory 3-year lock-in from each investment's date. For SIP investors, each monthly instalment has its own 3-year clock — all units don't unlock simultaneously. This is the shortest lock-in among 80C instruments (PPF: 15 years, NSC: 5 years, tax-saving FDs: 5 years).",
    faq: ["Can I partially withdraw from ELSS before 3 years? → No — each unit is locked for exactly 3 years from its purchase date; no exceptions.", "What if I need money urgently and it's in ELSS? → You cannot redeem locked units — maintain 3-6 months of expenses separately in liquid form."],
    myths: ["All ELSS units unlock together after 3 years. → For SIP investors, each instalment has its own 3-year lock-in period starting from when that SIP was made.", "Lock-in means the money is lost or unavailable forever. → After 3 years, full redemption at current NAV is available — lock-in simply prevents premature withdrawal."],
  },
  "ELSS tax benefit under 80C": {
    simple: "ELSS investments up to ₹1.5 lakh per year qualify for tax deduction under Section 80C. At the 30% tax bracket, this saves ₹46,800 in tax annually. After the 3-year lock-in, your money has potentially grown in equity markets too.",
    normal: "ELSS investments qualify for 80C deduction (max ₹1.5 lakh combined across all 80C instruments). Available only under the old tax regime. After 3-year lock-in, gains are taxed as LTCG at 12.5% above ₹1.25 lakh per year. This combination — shortest lock-in, market-linked returns, and favourable LTCG rate — makes ELSS one of the most efficient 80C options.",
    faq: ["Can I claim 80C deduction on monthly ELSS SIPs? → Yes — each monthly SIP instalment qualifies for deduction in the financial year it was invested.", "Is ELSS available under the new tax regime? → No — 80C deductions including ELSS are only claimable under the old tax regime."],
    myths: ["I can invest the full ₹1.5 lakh limit solely in ELSS. → Yes you can, but the ₹1.5 lakh is a combined cap across all 80C instruments.", "ELSS gains are completely tax-free. → Gains above ₹1.25 lakh per year are taxed at 12.5% LTCG — not fully exempt."],
  },
  "ELSS vs PPF comparison": {
    simple: "ELSS offers market-linked returns (historically 12-15%, not guaranteed) with a 3-year lock-in. PPF offers guaranteed safe returns (~7.1% p.a., fully tax-free) with a 15-year lock-in. Use ELSS for long-term wealth building; PPF for guaranteed tax-free savings. Most advisors recommend both.",
    normal: "ELSS: equity-linked, historical 12-15% CAGR, 3-year lock-in, LTCG tax on gains above ₹1.25 lakh. PPF: government-backed, currently 7.1% p.a., tax-free interest and maturity (EEE status), 15-year lock-in. Both qualify for ₹1.5 lakh 80C deduction under the old regime.",
    faq: ["Which should I prioritise for 80C? → Invest in both — PPF for the guaranteed tax-free component; ELSS for equity growth.", "Is PPF always safer than ELSS? → PPF is capital-safe; ELSS can lose value short-term. Over 15 years, ELSS has typically delivered significantly higher returns."],
    myths: ["PPF is always the better choice because it's safer. → Safety comes with lower returns — over 15 years, ELSS has typically outperformed PPF substantially.", "ELSS is too risky to use for tax saving. → Over 3+ year periods, well-diversified equity funds have rarely given negative returns historically."],
  },
  "ELSS vs PPF vs NSC tax comparison": {
    simple: "All three save tax under 80C. PPF is best for tax efficiency — interest and maturity are fully tax-free (EEE). NSC interest is taxable every year. ELSS gains above ₹1.25 lakh are taxed at 12.5%. For pure tax-saving efficiency, PPF wins; for growth plus tax saving, ELSS wins.",
    normal: "Tax treatment: PPF = EEE (investment, interest, and maturity all exempt). NSC = EET (investment exempt; interest taxable yearly; maturity partially exempt). ELSS = ETE (investment exempt; gains at redemption taxed at 12.5% LTCG above ₹1.25 lakh). Lock-in periods: ELSS 3 years, NSC 5 years, PPF 15 years.",
    faq: ["Which is the most tax-efficient 80C instrument? → PPF has the cleanest EEE treatment; ELSS typically delivers better post-tax returns due to higher gross returns.", "Is NSC still worth considering? → NSC offers guaranteed returns (~7.7%) with 5-year lock-in, but taxable annual interest reduces effective yield."],
    myths: ["All three 80C instruments have the same tax treatment. → Their tax treatment on interest and gains is fundamentally different — compare effective post-tax returns.", "I should put all my 80C allocation in one instrument. → Splitting across PPF (safety and EEE) and ELSS (growth) balances risk and tax efficiency well."],
  },
  "EPF interest rate": {
    simple: "The EPF interest rate is set by the government each year. For FY2023-24 it was 8.25% per annum — one of the best risk-free rates available in India. This interest is credited to your EPF account at the end of the financial year.",
    normal: "EPF interest rates are declared annually by EPFO with government approval. Recent rates: FY22-23: 8.15%; FY23-24: 8.25%. Interest is calculated monthly on the opening balance plus cumulative contributions but credited once annually. Employee contributions above ₹2.5 lakh per year earn interest that becomes taxable from FY22 onwards.",
    faq: ["Is EPF interest guaranteed? → It's government-backed — default is virtually impossible, though the rate changes yearly.", "How is EPF interest calculated? → Interest = (Opening balance + running monthly contributions) × monthly interest rate, accumulated and credited yearly."],
    myths: ["EPF interest rate is always 8.5% and never changes. → The rate is reviewed annually; it has ranged from 8.1% to 8.75% in recent years.", "EPF interest is always completely tax-free. → Employee contributions above ₹2.5 lakh/year earn taxable interest from FY 2021-22 onwards."],
  },
  "EPF withdrawal rules": {
    simple: "You can fully withdraw EPF when you retire or after being unemployed for 2 months after resigning. Partial withdrawal is allowed for medical emergencies, home purchase, children's education, or marriage — each with different conditions.",
    normal: "Full EPF withdrawal: retirement (58 years) or 2 months after unemployment. Partial withdrawals (Form 31): medical emergency (any time, up to 6 months basic salary), housing (after 5 years, up to 90%), education/marriage (after 7 years, up to 50% of employee share). Tax: withdrawals after 5 years of continuous service are tax-free; before 5 years, the amount is taxable as income.",
    faq: ["Should I withdraw EPF when changing jobs? → No — transfer it instead via the EPFO member portal. Withdrawal before 5 years is taxable and breaks compounding.", "How long does EPF withdrawal take? → Online claims via the EPFO portal typically process in 5-10 working days if KYC is updated."],
    myths: ["I should always withdraw EPF when I resign. → Transferring preserves the tax benefit and lets compounding continue — withdrawal is almost always the worse option.", "EPF withdrawal on retirement is automatic. → You must apply online or through your last employer — it's not automatic."],
  },
  "Endowment plans vs term plans": {
    simple: "Term insurance gives large coverage (₹1 crore+) for a small premium (₹10,000-15,000/year). Endowment plans mix insurance with savings — high premium, small payout, returns that barely beat inflation. Buy term insurance and invest the rest separately.",
    normal: "Term plan: pure risk cover, no maturity benefit, very low premium, high coverage. Endowment plan: combines death benefit + maturity corpus, high premium, returns typically 4-6% (below inflation), high agent commissions. The 'buy term and invest the rest' strategy consistently outperforms endowment plans.",
    faq: ["Why do agents push endowment plans? → Agent commissions on endowment plans are 20-35%; on term plans they're 5-7%.", "What should I do if I already have an endowment plan? → Calculate surrender value vs total premiums paid. If acceptable, surrender and replace with term + investment."],
    myths: ["Endowment plans are good because you get money back when you survive. → The maturity payout rarely beats PPF or simple FD returns over the same period.", "Term insurance is a waste because there's no payout if I survive. → Insurance is for protection, not investment — you buy car insurance hoping not to use it."],
  },
  "Equity mutual funds explained": {
    simple: "Equity mutual funds pool money from many investors and buy shares of companies. When those companies grow, your investment grows too. Best for goals 5+ years away — short-term volatility is normal.",
    normal: "Equity mutual funds invest 65%+ in equity shares of listed companies. Classified by market cap: large-cap (lower volatility), mid-cap (moderate), small-cap (higher volatility and return potential). Historical Indian equity fund returns: large-cap ~10-12% CAGR, mid-cap ~12-15%, small-cap ~13-18% over 10-year periods.",
    faq: ["How long must I stay invested in equity funds? → Minimum 5 years; 10+ years is where the compounding effect becomes most powerful.", "Are all equity mutual funds equally volatile? → No — large-cap funds are significantly less volatile than mid and small-cap funds."],
    myths: ["Equity funds are gambling. → Equity investing is ownership of real businesses with real earnings — fundamentally different from gambling.", "I need to monitor my equity funds daily. → Quarterly reviews are sufficient. Frequent monitoring leads to panic selling at the worst times."],
  },
  "Equity vs debt vs gold vs real estate": {
    simple: "Equity (stocks/funds) gives highest long-term growth but fluctuates. Debt (FDs, bonds) is safe and steady. Gold protects against inflation and crisis. Real estate gives rental income and appreciation but needs large capital. A mix of all gives the best overall result.",
    normal: "10-year historical returns (India): Equity (Nifty 50) ~12-13% CAGR, Debt (10-year G-sec) ~6-7%, Gold ~8-10% INR, Real estate ~4-8% depending on location. Equity leads in long-term growth; gold hedges inflation; debt provides stability; real estate generates rental income but is illiquid.",
    faq: ["Should I invest in all four asset classes? → Diversification across asset classes reduces portfolio volatility — most advisors recommend holding at least equity, debt, and gold.", "Is real estate a better investment than equity? → In most Indian cities, Nifty 50 has outperformed residential real estate on returns over 10 years, with far greater liquidity."],
    myths: ["Real estate always beats every other investment. → Real estate returns vary enormously by location and timing — many properties have underperformed FDs.", "Gold is the safest investment for an Indian family. → Gold is volatile short-term and generates no income — it's a hedge, not a primary wealth builder."],
  },
  "FD interest rates in India": {
    simple: "FD interest rates in India typically range from 6.5% to 9% depending on the bank and tenure. Small finance banks offer 7.5-9%; large PSU banks offer 6.5-7.5%. Senior citizens always get 0.25-0.5% extra. Rates are fixed for the full tenure once you invest.",
    normal: "Current FD rate ranges: Large PSU banks (SBI, PNB): 6.5-7.5%. Private banks (HDFC, ICICI): 7-8%. Small finance banks (AU, Equitas, Jana): 7.5-9%. Senior citizen premium: 0.25-0.50%. FD interest is taxable as per income slab; TDS at 10% if annual interest exceeds ₹40,000 (₹50,000 for senior citizens).",
    faq: ["Are small finance bank FDs safe? → Deposits up to ₹5 lakh per bank are insured by DICGC — same guarantee as any scheduled commercial bank.", "Can FD interest rates change after I invest? → No — the rate is locked at investment time for the full chosen tenure."],
    myths: ["FDs are completely risk-free investments. → Up to ₹5 lakh is DICGC-insured; amounts above that carry credit risk if the bank fails.", "FD returns always beat inflation. → With CPI inflation at 5-6% and FD rates at 7%, real returns after tax (for 30% bracket) can be near zero."],
  },
  "Fixed income explained": {
    simple: "Fixed income investments pay a predictable, regular amount — like FDs, government bonds, or PPF. You know how much you'll earn before you invest. They're safer than stocks but typically earn less over the long term.",
    normal: "Fixed income instruments provide scheduled interest payments and return of principal at maturity. Examples: FDs, government securities, treasury bills, corporate bonds, PPF, NSC. They offer capital preservation and predictable cash flows but deliver lower long-term returns than equity and are vulnerable to inflation risk over time.",
    faq: ["Should young investors avoid fixed income? → No — 10-20% in fixed income reduces portfolio volatility and provides stability during equity crashes.", "What is the risk in fixed income? → Interest rate risk (bond values fall when rates rise) and credit risk (issuer default) for non-government instruments."],
    myths: ["Fixed income means zero risk. → Interest rate risk is real — bond fund NAVs can fall when RBI raises rates.", "Fixed income is only appropriate for retired people. → Every portfolio benefits from a fixed income component for stability and rebalancing opportunities."],
  },
  "Fixed vs floating home loan rate": {
    simple: "A fixed home loan rate stays the same throughout — your EMI is always predictable. A floating rate changes with RBI's repo rate — EMI can go up when rates rise, down when they fall. Most Indian home loans are floating rate.",
    normal: "Fixed rate: EMI certainty throughout tenure, typically 1-2% higher than floating rates. Floating rate: linked to the bank's External Benchmark Lending Rate (EBLR, tied to RBI repo rate), EMI adjusts when rates change. Over a 20-year loan, rate cycles average out — floating is typically more beneficial for long tenures.",
    faq: ["Which should I choose for a 20-year home loan? → Most experts recommend floating for long tenures — rate cycles balance out over 20 years.", "Can I switch from floating to fixed during the loan? → Yes — most banks allow switching with a one-time conversion fee."],
    myths: ["Fixed rate is always more expensive than floating. → In rising rate environments, a fixed rate locked in early can prove cheaper over the life of the loan.", "My floating EMI will never change during the loan. → Floating means EMI adjusts when RBI changes the repo rate — it can increase or decrease."],
  },
  "Fund rating agencies in India": {
    simple: "Agencies like CRISIL, ICRA, and Morningstar rate mutual funds based on risk-adjusted performance and consistency. A 5-star rating reflects past performance — it does not guarantee future returns. Use ratings as one input among several, not the only deciding factor.",
    normal: "Indian mutual fund rating providers: CRISIL (S&P subsidiary), ICRA (Moody's subsidiary), and Morningstar India. Ratings are based on risk-adjusted returns, performance consistency, and portfolio quality. Ratings change quarterly. A fund's expense ratio, fund manager track record, and portfolio quality are equally important to consider.",
    faq: ["Should I only invest in 5-star rated funds? → Ratings reflect past performance — always combine rating with expense ratio, fund manager consistency, and your investment goals.", "Are fund ratings regulated in India? → SEBI regulates credit rating agencies under the SEBI (Credit Rating Agencies) Regulations, 1999."],
    myths: ["A 5-star rated fund will always outperform. → Morningstar itself states that its star ratings do not reliably predict future performance.", "Funds with no rating are bad funds. → New funds or niche funds simply haven't accumulated enough track record for a rating to be generated."],
  },
  "GST registration threshold": {
    simple: "If your business annual turnover exceeds ₹40 lakh (for goods) or ₹20 lakh (for services) in most states, you must register for GST. Below this threshold, registration is optional but can be beneficial if your customers are GST-registered businesses.",
    normal: "GST registration is mandatory when aggregate annual turnover exceeds ₹40 lakh for goods (most states), ₹20 lakh for service providers. Voluntary registration is permitted below threshold — beneficial for B2B businesses whose customers need GST invoices to claim input tax credit. Non-registration when mandatory attracts penalties of up to 10% of tax due.",
    faq: ["Can I register voluntarily below the threshold? → Yes — voluntary registration gives access to input tax credit and allows you to issue GST invoices to business customers.", "What happens if I don't register when required? → Penalty of 10% of tax due (minimum ₹10,000) plus prosecution for deliberate non-compliance."],
    myths: ["GST applies only to large businesses. → Any business above the turnover threshold must register regardless of size.", "Once registered, I pay GST on all transactions. → Only taxable supplies attract GST; many goods and services are exempt or zero-rated."],
  },
  "GST return filing basics": {
    simple: "If GST-registered, you must file regular returns showing your sales, purchases, and tax collected and paid. The main returns are GSTR-1 (outward sales details) and GSTR-3B (monthly tax summary). Missing deadlines costs ₹50 per day in late fees plus interest on unpaid tax.",
    normal: "Core GST returns: GSTR-1 (outward supplies, monthly or quarterly), GSTR-3B (monthly summary of tax liability and ITC, due by 20th of following month), GSTR-9 (annual return). Composition dealers file CMP-08 quarterly. Late filing: ₹50/day (₹20/day for nil returns).",
    faq: ["How do I file GST returns? → Via the GSTN portal at gst.gov.in or through GST-compatible accounting software (Tally, Vyapar, Zoho Books).", "What if I have zero transactions in a month? → You must still file a nil return — failure to do so attracts the same late fee."],
    myths: ["I can skip GST returns for months with no sales. → Nil returns are mandatory — skipping them accumulates late fees.", "Filing GST manually without software is practical. → For businesses with multiple invoices, GST-compatible software is effectively necessary for accuracy and speed."],
  },
  "Glide path investing explained": {
    simple: "Glide path investing means automatically reducing the riskiness of your portfolio as you approach your goal date. Like a plane reducing speed as it approaches the runway — gradually shift from stocks to safer investments as retirement or your target nears.",
    normal: "A glide path is a dynamic asset allocation strategy that progressively reduces equity exposure and increases debt allocation as the investor approaches a target date. The rationale: a 30% market crash 2 years before retirement is far more damaging than the same crash 25 years earlier when there's time to recover.",
    faq: ["Do Indian mutual funds offer glide path investing? → Some retirement-oriented funds and pension products follow a glide path — check the scheme information document.", "Should I implement a manual glide path? → Yes — review your allocation every 3-5 years and shift 5-10% from equity to debt as your goal approaches."],
    myths: ["Glide path means eliminating equity completely at retirement. → It means reducing equity to 30-40% — you still need some equity to beat inflation over a 20+ year retirement.", "Glide path only applies to retirement planning. → Any long-term goal (child's education, home purchase) benefits from a glide path approach."],
  },
  "Good credit versus bad credit": {
    simple: "Good credit means you've borrowed and repaid responsibly — paid EMIs and credit card bills on time, kept balances manageable. Bad credit means missed payments or defaults. Good credit unlocks lower interest rates and easy approvals; bad credit closes those doors.",
    normal: "Good credit profile: CIBIL 750+, credit utilisation below 30%, zero missed payments, healthy mix of secured and unsecured credit, long credit history. Bad credit: CIBIL below 650, high utilisation, defaults, frequent applications. Good credit reduces lifetime borrowing costs significantly — even a 1% better rate on a ₹50 lakh home loan over 20 years saves over ₹10 lakh in interest.",
    faq: ["How long does bad credit take to recover? → Consistent on-time payments for 12-18 months typically move a score from poor to fair; 2-3 years to reach excellent.", "Can bad credit be permanent? → No — negative marks have a 7-year reporting limit per RBI guidelines. Consistent good behaviour rebuilds your profile."],
    myths: ["Closing credit cards improves your score. → Closing a card reduces your available credit and can shorten your credit history — both can lower your score.", "High income guarantees a good credit score. → Income is not a CIBIL scoring factor — only borrowing behaviour and repayment history matter."],
  },
  "HRA exemption explained": {
    simple: "If you pay rent and receive HRA from your employer, you can reduce your taxable income. The exemption is the lowest of: actual HRA received, rent paid minus 10% of basic salary, or 50% of basic salary (metro) / 40% (non-metro).",
    normal: "HRA exemption under Section 10(13A) = minimum of: (1) Actual HRA received, (2) Rent paid minus 10% of basic salary, (3) 50% of basic salary for metro cities or 40% for non-metro. Available only under the old tax regime. Rent above ₹1 lakh/year requires landlord's PAN for the deduction.",
    faq: ["Can I claim HRA if I pay rent to my parents? → Yes — if parents own the property, you have a legitimate rent agreement, and they declare the rental income.", "Can I claim both HRA and home loan interest deduction? → Yes — if your rented home and owned property are in different cities."],
    myths: ["I can claim my full HRA amount as exemption. → The exemption is the minimum of three calculations — often less than the full HRA received.", "HRA exemption is automatic in my salary. → You must submit rent receipts to your employer or claim it while filing ITR."],
  },
  "High-yield savings options in India": {
    simple: "Beyond regular savings accounts (3-4%), better options include: small finance bank savings accounts (6-7%), liquid mutual funds (6-7%), and short-term FDs at small finance banks (7.5-9%). These give meaningfully better returns for money you might need within months.",
    normal: "High-yield savings options: (1) Small finance bank savings accounts: 6-7% (AU, Equitas, Jana). (2) Liquid mutual funds: 6-7%, same-day/next-day redemption. (3) Short-duration debt funds: 6-7.5% for 6-12 month parking. (4) Short-term FDs at small finance banks: 7.5-9%. All bank deposits up to ₹5 lakh are DICGC-insured.",
    faq: ["Are small finance bank high rates safe? → Up to ₹5 lakh per bank is DICGC-insured — the same protection as SBI or HDFC for that amount.", "Is a liquid mutual fund better than a savings account? → For surplus money parked for weeks to months, liquid funds typically earn 1.5-2% more than standard savings accounts."],
    myths: ["A standard savings account is always the safest place for spare cash. → DICGC-insured small finance bank accounts and liquid funds backed by government securities offer equal safety with better returns.", "You need large amounts to access better yields. → Liquid funds have no minimum investment requirements; small finance bank accounts are accessible to everyone."],
  },
  "Home loan EMI calculation": {
    simple: "Your home loan EMI depends on three factors: loan amount, interest rate, and tenure. Longer tenure means lower EMI but more total interest paid. Use any bank's online EMI calculator to see exact figures instantly.",
    normal: "EMI formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P = principal, r = monthly interest rate (annual ÷ 12), n = total months. Example: ₹50 lakh at 8.5% for 20 years → EMI ≈ ₹43,391. In early years 70-80% of each EMI is interest; gradually principal repayment increases (amortisation).",
    faq: ["How can I reduce my home loan EMI? → Make partial prepayments to reduce principal, or refinance to a lower-rate lender.", "What if I miss an EMI? → Late fee applies immediately; multiple missed payments lead to NPA classification and legal recovery action."],
    myths: ["Longer tenure is always smarter because EMI is lower. → A 30-year loan pays approximately double the principal in total interest — a much higher total cost.", "EMI stays the same throughout the loan for floating rate loans. → Floating rate EMIs change when RBI changes the repo rate."],
  },
  "Home loan tax benefits under Section 24": {
    simple: "A home loan saves tax in two ways: up to ₹2 lakh per year deduction on interest paid under Section 24B, and up to ₹1.5 lakh on principal repayment under Section 80C. Both deductions are only available if you choose the old tax regime.",
    normal: "Section 24B: Deduction on home loan interest, up to ₹2 lakh per year for a self-occupied property (no upper limit for let-out property, but set-off losses capped). Section 80C: Principal repayment included in the ₹1.5 lakh combined limit. Both deductions are available only under the old tax regime.",
    faq: ["Can I claim 24B and 80C for the same loan? → Yes — interest under 24B and principal under 80C are separate deductions from different sections.", "What if the property is rented out? → The ₹2 lakh limit on interest doesn't apply for let-out property — full interest is deductible, though total loss set-off is capped at ₹2 lakh per year."],
    myths: ["Section 24 gives ₹2 lakh deduction regardless of actual interest paid. → You claim actual interest paid, subject to the ₹2 lakh maximum ceiling.", "Home loan tax benefits are available under the new tax regime. → Both 24B and 80C deductions are only claimable under the old tax regime."],
  },
  "How CIBIL score is calculated": {
    simple: "CIBIL score is calculated from your credit behaviour. The most important factor is whether you pay on time. It also considers how much of your credit limit you're using, how long you've had credit, your mix of credit types, and how many new loans you've recently applied for.",
    normal: "CIBIL score (300-900) calculation: Payment history (35%) — single most impactful factor. Credit utilisation (30%) — keep below 30% of total limit. Credit age (15%) — older average account age is better. Credit mix (10%) — healthy mix of secured and unsecured. New inquiries (10%) — too many loan applications in a short period hurts.",
    faq: ["Does checking my own CIBIL score affect it? → No — self-checks are soft inquiries with zero impact on your score.", "How long does a payment default stay on CIBIL report? → Defaults remain on your CIBIL report for 7 years per RBI guidelines."],
    myths: ["My income directly affects my CIBIL score. → Income is not a factor in CIBIL scoring — only your borrowing and repayment behaviour matters.", "Closing old credit card accounts improves my score. → Closing old accounts reduces credit history length and available credit — both can lower your score."],
  },
  "How EPF contributions work": {
    simple: "Every month, 12% of your basic salary is deducted and deposited into your EPF account. Your employer also contributes 12% of your basic salary. This money grows at 8.25% interest per year — creating a substantial retirement fund automatically.",
    normal: "EPF contributions: Employee contributes 12% of basic salary + DA. Employer contributes 12%, split between EPF (3.67%) and EPS (8.33%). Total 24% of basic monthly salary goes into EPF/EPS. UAN (Universal Account Number) links EPF across employers.",
    faq: ["Is EPF mandatory for all employees? → Mandatory for companies with 20+ employees for salaries up to ₹15,000/month basic; voluntary above this threshold.", "Can I contribute more than 12% voluntarily? → Yes — through VPF (Voluntary Provident Fund), additional contributions up to 100% of basic salary, also 80C deductible."],
    myths: ["EPF is just my own deduction — employer doesn't add anything extra. → The employer contributes an equal 12%, effectively doubling your monthly retirement savings.", "EPF interest rate is very low. → At 8.25% with full capital safety and tax benefits, EPF is among India's best risk-free returns."],
  },
  "How TDS is deducted from salary": {
    simple: "TDS (Tax Deducted at Source) is income tax that your employer deducts from your salary before paying you. The employer estimates your annual tax, divides it by 12, and deducts that amount every month. This pre-paid tax is credited to the government on your behalf.",
    normal: "Salary TDS (Section 192): Employer calculates projected annual tax based on salary components and declared investments/deductions. Divides by 12 and deducts monthly. Issues Form 16 annually as TDS certificate. If actual tax at year-end differs from TDS deducted, you either pay the difference or claim a refund when filing ITR.",
    faq: ["How do I reduce TDS from my salary? → Submit Form 12BB to your employer at year start, declaring 80C investments, HRA, home loan interest, and NPS contributions.", "What is Form 16? → Your employer's annual TDS certificate showing total salary paid and TDS deducted — required for filing your ITR."],
    myths: ["TDS is different from income tax — it's an additional charge. → TDS is income tax itself, just collected at source — not an extra tax.", "If TDS is deducted from my salary, I don't need to file ITR. → ITR filing is mandatory above specified income thresholds regardless of TDS deduction."],
  },
  "How UPI works": {
    simple: "UPI lets you send money instantly to anyone's bank account using just their phone number or UPI ID. You verify the payment with your UPI PIN — not your bank password. Money moves in seconds, 24/7, including weekends and holidays.",
    normal: "UPI is built by NPCI on IMPS infrastructure. Users link bank accounts to UPI apps (Google Pay, PhonePe, BHIM). Each account gets a UPI ID. Payment authorisation uses a UPI PIN that never exposes the underlying bank account details. Settlement is instant and final. Daily limits: ₹1 lakh standard; ₹5 lakh for verified accounts.",
    faq: ["Is UPI free to use? → Yes — person-to-person UPI transfers are free for users. Merchant transactions may carry charges for the merchant but not the customer.", "What's the maximum I can send via UPI in one transaction? → ₹1 lakh standard limit; ₹5 lakh for specific high-value categories with verified accounts."],
    myths: ["UPI PIN is needed to receive money. → Your PIN is only required to send money — you never need it to receive a payment.", "UPI and net banking are the same. → UPI is simpler, faster, and doesn't require knowing the recipient's account number or IFSC code."],
  },
  "How banks make money": {
    simple: "Banks borrow your money (deposits) at low interest rates (3-4%) and lend it to borrowers at higher rates (8-18%). The difference — the spread — is their primary profit. They also earn from transaction fees, forex, insurance commissions, and investment banking.",
    normal: "Banks' primary revenue is Net Interest Income (NII) = interest earned on loans minus interest paid on deposits, typically a 2-4% spread. Additional revenue: processing fees on loans, transaction charges, forex commissions, bancassurance commissions. RBI mandates Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR) to ensure sufficient liquidity.",
    faq: ["Why does the bank charge much more on loans than it pays on deposits? → The spread covers operating costs, provisions for bad loans (NPAs), regulatory reserve requirements, and profit.", "Can banks lose my deposit money? → DICGC insures ₹5 lakh per depositor per bank. Amounts above this carry credit risk if the bank fails."],
    myths: ["Banks keep all deposited money in a vault. → Banks lend out typically 70-80% of deposits — that's how the money supply expands.", "All banks are equally safe. → PSU banks have implicit government backing; private banks have DICGC cover up to ₹5 lakh."],
  },
  "How credit cards work": {
    simple: "A credit card lets you buy now and pay later, up to a pre-approved limit. Each month you receive a bill. Pay the full amount by the due date and there's zero interest. Pay only partly and high interest (24-48% yearly) applies immediately on the unpaid balance.",
    normal: "Credit cards provide revolving credit refreshed monthly. The billing cycle (30-31 days) accumulates purchases. Due date (15-25 days after statement date) is the interest-free deadline. Minimum due (typically 2-5% of outstanding) keeps the account current but triggers interest on the entire remaining balance at 24-48% p.a.",
    faq: ["Does responsible credit card use build my CIBIL score? → Yes — on-time full payments and low utilisation are among the fastest ways to build a strong credit history.", "What is credit utilisation and why does it matter? → Utilisation = balance used ÷ total credit limit. Keeping it below 30% positively impacts your CIBIL score."],
    myths: ["Carrying a balance on my credit card helps build credit. → It costs interest money and does not help your score — always pay in full.", "My credit limit is money the bank is giving me. → It's a borrowing facility — money spent must be repaid with potential interest."],
  },
  "How deposits are protected in India": {
    simple: "Your bank deposits are insured by DICGC (a subsidiary of RBI) up to ₹5 lakh per person per bank. If your bank fails, the government guarantees you get back up to ₹5 lakh. For amounts above ₹5 lakh in one bank, spread across multiple banks for full protection.",
    normal: "DICGC (RBI subsidiary, est. 1978) insures up to ₹5 lakh per depositor per insured bank (raised from ₹1 lakh in 2020). Coverage includes savings, current, FD, and recurring deposit accounts. All scheduled commercial banks and most cooperative banks are DICGC-insured. Inter-bank deposits are excluded.",
    faq: ["What if I have ₹8 lakh in one bank? → Only ₹5 lakh is insured. Spread amounts above ₹5 lakh across multiple banks for complete protection.", "Does DICGC cover mutual funds or equity investments? → No — DICGC covers only bank deposits. Market-linked investments carry market risk and are not insured."],
    myths: ["All my bank deposits are 100% safe regardless of amount. → Only ₹5 lakh per depositor per bank is insured. Amounts above this carry credit risk.", "Private banks are riskier than government banks. → Both are DICGC-insured up to ₹5 lakh. For amounts above, PSU banks have an implicit government backing advantage."],
  },
  "How home loans work": {
    simple: "A home loan lets you borrow money from a bank to buy a house, then repay it in monthly EMIs over 10-30 years. The bank holds a legal charge on your property until fully repaid. Once the loan is cleared, the property is entirely yours.",
    normal: "Home loan process: Application → credit and income assessment → property valuation → sanction (75-90% of property value, balance is down payment) → disbursement to seller/builder → repayment via EMI over chosen tenure. The property is mortgaged as collateral. Floating rate loans allow prepayment without penalty.",
    faq: ["How much down payment is required? → Minimum 10-20% of property value — banks finance 80-90% for first-time buyers under PMAY.", "Can I get a home loan for an under-construction property? → Yes — disbursement is tranche-based as construction progresses; you pay pre-EMI interest during construction."],
    myths: ["If the bank approves a loan, I can definitely afford the EMI. → Banks assess repayment capacity, but ensure EMI doesn't exceed 35-40% of take-home salary.", "Longer loan tenure is always smarter. → Lower EMI comes with dramatically higher total interest paid over the loan's lifetime."],
  },
  "How indices are calculated": {
    simple: "A stock index like Nifty 50 tracks the collective performance of a group of top companies. Each company's weight reflects its market size. When these companies' average share prices rise, the index rises — and vice versa.",
    normal: "Indian stock indices use free-float market capitalisation weighting. Free-float market cap = publicly tradable shares × current share price. Nifty 50 index value = (Current aggregate free-float market cap ÷ Base market cap) × 1000. Constituents are reviewed semi-annually by NSE Indices Ltd.",
    faq: ["Who decides which companies are in Nifty 50? → NSE Indices Limited reviews Nifty constituents every six months based on free-float market cap and liquidity criteria.", "If one large company's stock crashes, does the whole Nifty crash? → Large-weight companies (Reliance, TCS) have significant impact; smaller-weight companies have minimal individual effect."],
    myths: ["Nifty 50 includes the 50 most profitable companies. → It includes the 50 largest by free-float market cap — profitability is not the criterion.", "Index levels represent the actual price of shares. → An index is a relative performance benchmark, not a price."],
  },
  "How long it takes to build credit": {
    simple: "Building credit from scratch takes 6-12 months to get your first CIBIL score. Getting from a poor score to excellent takes 2-3 years of consistent on-time payments and responsible credit use. There are no shortcuts.",
    normal: "Credit building timeline: Months 1-6: open first credit account, make all payments on time, keep utilisation below 30%. Month 6: first CIBIL score generated (minimum 6 months history required). Year 1-2: score reaches 700s. Year 2-3: score reaches 750+ — the excellent range unlocking best loan rates.",
    faq: ["What's the fastest way to start building credit? → A secured credit card (backed by an FD deposit) is available to anyone and guaranteed to build credit when used responsibly.", "Can I build credit without a credit card? → Yes — any loan (personal, auto) that you repay on time builds your credit history."],
    myths: ["My CIBIL score appears immediately when I open a credit card. → CIBIL requires a minimum of 6 months of credit history before generating your first score.", "Paying electricity and mobile phone bills builds my CIBIL score. → These are not reported to CIBIL — only bank credit products (loans and credit cards) are tracked."],
  },
  "How much term cover do you need": {
    simple: "A simple rule: get term cover equal to 10-15 times your annual income. If you earn ₹10 lakh/year, get ₹1-1.5 crore in coverage. Add any outstanding loans on top of that.",
    normal: "Term cover calculation: (Annual income × 10-15) + all outstanding loans (home, car, personal) + children's education corpus + spouse's retirement needs − existing liquid financial assets. Increase cover on major life events: marriage, first child, home loan.",
    faq: ["When is the best time to buy term insurance? → As young as possible — premiums are cheapest before 35 and future health conditions can make coverage unavailable.", "What tenure should I choose? → Until age 60-65 (expected retirement) or until your youngest dependant is financially self-sufficient."],
    myths: ["10× income cover is always sufficient. → Also factor in outstanding loans and education/retirement goals for dependants.", "I don't need term insurance because I'm young and healthy. → Young and healthy is exactly the right time — premiums are cheapest now."],
  },
  "How much to keep in emergency fund": {
    simple: "Keep 3-6 months of your total monthly expenses in your emergency fund. If you spend ₹30,000/month, aim for ₹90,000-₹1.8 lakh. Self-employed people and those with irregular income should aim for 6-12 months.",
    normal: "Emergency fund size: 3 months expenses for dual-income households with stable jobs. 6 months for single-income households or anyone with an EMI. 9-12 months for self-employed, freelancers, or business owners with variable income. Use total monthly expenses (rent + food + utilities + EMIs + insurance premiums) as the baseline.",
    faq: ["Where should I keep my emergency fund? → In a high-yield savings account or liquid mutual fund — easily accessible within 24 hours, earning better than a current account.", "Can I count my investments as an emergency fund? → No — equity investments can fall 30-40% exactly when you need the money most."],
    myths: ["My credit card is my emergency fund. → Credit card debt during an emergency adds financial stress on top of the emergency itself.", "Once I build an emergency fund, I never need to touch it. → Use it when genuine emergencies arise — that's what it's for. Then rebuild it afterward."],
  },
  "How mutual funds work": {
    simple: "A mutual fund pools money from many investors and a professional fund manager invests it in a diversified portfolio of stocks, bonds, or both. When the portfolio grows, your investment grows proportionally. You don't need to pick stocks yourself.",
    normal: "Mutual funds are SEBI-regulated collective investment vehicles. Investors buy units at NAV; the fund invests pooled capital as per the scheme's mandate. Types: equity (growth), debt (income), hybrid (balanced), index (passive). Returns are market-linked — not guaranteed. Risk varies by fund type.",
    faq: ["Is my money safe in a mutual fund? → Your money is invested in regulated securities — SEBI regulation ensures transparent management but does not guarantee returns.", "Can I withdraw from a mutual fund anytime? → Open-ended funds allow redemption any working day at current NAV. ELSS and closed-ended funds have lock-in periods."],
    myths: ["Mutual funds are only for people who know about stock markets. → Mutual funds are specifically designed so you don't need market expertise — professional managers handle investment decisions.", "Mutual funds with higher NAV are more expensive. → NAV level is irrelevant to fund quality — compare percentage returns and expense ratio, not NAV levels."],
  },
  "How rupee cost averaging works": {
    simple: "When you invest a fixed amount every month via SIP, you buy more units when prices are low and fewer when prices are high. Over time this averages out your purchase price. You don't need to guess when the market will rise or fall.",
    normal: "Rupee Cost Averaging (RCA) is the effect of SIP investing: fixed periodic investment means more units purchased at lower NAVs and fewer at higher NAVs. Over market cycles, the average cost per unit tends to be lower than the average NAV. This makes SIPs particularly effective during volatile or declining markets.",
    faq: ["Does rupee cost averaging guarantee profits? → No — it reduces timing risk and lowers average cost, but if markets fall permanently the portfolio still loses value.", "Is RCA better than investing a lump sum? → For most investors without market-timing skills, SIP is more comfortable and psychologically easier to maintain through volatility."],
    myths: ["Rupee cost averaging only works in falling markets. → It reduces cost in falling markets AND prevents panic; in rising markets you still benefit from consistent participation.", "I should stop SIP when markets fall to protect my money. → Stopping SIP in a falling market is the worst time — you miss buying units at the lowest prices."],
  },
  "How savings account interest works": {
    simple: "Savings accounts pay interest on your balance — typically 2.5-4% per year for large banks, 6-7% for small finance banks. Interest is calculated daily on your closing balance and credited quarterly or monthly. Even idle money in your savings account is earning something.",
    normal: "Savings account interest is calculated daily on the closing balance and credited quarterly by most large banks. Formula: Daily interest = (Balance × Annual rate) ÷ 365. RBI deregulated savings account rates in 2011 — banks now set their own rates. Interest earned above ₹10,000/year is taxable as income.",
    faq: ["Why do small finance banks offer higher savings rates? → They offer higher rates to attract deposits as smaller institutions competing with large established banks.", "Is savings account interest taxable? → Yes — interest above ₹10,000/year (Section 80TTA exemption limit) is added to income and taxed at your slab rate."],
    myths: ["Savings account interest is too small to matter. → On a ₹1 lakh balance, even a 4% rate earns ₹4,000/year — better than letting it sit earning nothing.", "Higher savings rate from small banks is risky. → DICGC insures deposits up to ₹5 lakh at all scheduled banks, including small finance banks."],
  },
  "How stock prices are determined": {
    simple: "Stock prices are determined by supply and demand on the stock exchange. When more people want to buy a share than sell it, the price rises. When more want to sell, it falls. Company performance, earnings, and investor expectations all drive this balance.",
    normal: "Stock prices are set by continuous auction on exchanges (BSE, NSE). Prices fluctuate based on: earnings reports, dividend announcements, macroeconomic data (GDP, inflation, RBI rate decisions), global market movements, and investor sentiment. In the long run, stock prices follow company earnings growth. In the short run, sentiment drives prices away from fundamentals.",
    faq: ["Why do stock prices fall even when a company reports good profits? → If profits are below what investors expected, the price falls — markets price in expectations, not just absolute results.", "Can I predict stock price movements? → Short-term movements are essentially unpredictable; long-term prices follow fundamentals and business performance."],
    myths: ["Stock prices always reflect the true value of a company. → Prices frequently deviate from fundamental value due to sentiment, fear, greed, and liquidity.", "If a company is profitable, its stock will always go up. → Valuation (how much you pay vs what you get) matters as much as profitability."],
  },
  "How time horizon affects risk": {
    simple: "The longer you have before needing your money, the more risk you can take. A market crash hurts less if you have 15 years to recover than if you need the money next year. Long time horizon = more equity. Short time horizon = more safe/stable investments.",
    normal: "Time horizon fundamentally determines appropriate risk tolerance. Over 10+ years, historical Indian equity markets have almost never delivered negative returns. Over 1-2 years, equity can easily be down 30-50%. This is why financial goals are matched to instruments by time horizon: long-term goals use equity; near-term goals use debt/liquid funds.",
    faq: ["How do I determine my investment time horizon? → Time horizon = number of years until you need the money. Retirement corpus: likely 20-30 years. Emergency fund: immediate access.", "Should I change my investments as my time horizon shortens? → Yes — gradually reduce equity exposure (glide path) as a goal approaches to protect accumulated gains."],
    myths: ["Young investors should always be 100% in equity. → Even young investors should have an emergency fund in liquid instruments — not everything should be equity.", "Short time horizon means I can't invest at all. → For 3-5 year goals, debt mutual funds and FDs provide reasonable returns with much lower volatility than equity."],
  },
  "How to budget with irregular income": {
    simple: "With variable income, set your budget based on your lowest typical month. Pay fixed expenses (rent, insurance, EMIs) first. Save the surplus in good months to cover lean months. Never base your lifestyle on your best months.",
    normal: "Irregular income budgeting: (1) Calculate minimum monthly income over past 12 months — budget from this baseline. (2) Separate a business/income account from personal spending account. (3) Transfer a consistent monthly amount to personal account. (4) Direct surplus to income buffer (target: 3-6 months expenses). (5) Pay advance tax quarterly to avoid penalties.",
    faq: ["Should I still invest in bad income months? → Keep a minimum SIP amount even in bad months — consistency matters more than amount.", "How do I handle tax on irregular revenue? → Maintain a separate tax reserve account — set aside 25-30% of gross income for tax obligations as you earn."],
    myths: ["I can't budget with irregular income — it's impossible. → Budgeting around your minimum income and managing surpluses separately is entirely practical.", "In good income months, I should spend proportionally more. → Good months are for building buffers and investing — lifestyle should remain based on average, not peak income."],
  },
  "How to buy shares in India": {
    simple: "To buy shares in India you need a Demat account and a trading account — both opened together through a broker like Zerodha, Groww, or Upstox. Link your bank account, complete KYC with PAN and Aadhaar, and you're ready to buy shares within a week.",
    normal: "Steps to buy shares: (1) Open a Demat + trading account with a SEBI-registered broker. (2) Complete KYC (PAN, Aadhaar, bank proof, video KYC). (3) Fund the trading account. (4) Search for the company on the broker app, enter quantity and price (market or limit order), confirm. (5) Shares are credited to Demat within T+1 settlement.",
    faq: ["Which broker should I use to start? → Zerodha, Groww, and Upstox are popular discount brokers with low fees and good mobile apps for beginners.", "Can I buy less than one share? → No — Indian markets require whole shares."],
    myths: ["Buying shares requires a lot of money to start. → You can buy even a single share of any company at its market price.", "A Demat account and a bank account are the same. → A Demat account holds your shares electronically; a bank account holds cash — both are needed."],
  },
  "How to diversify investments": {
    simple: "Diversification means spreading your money across different types of investments so one bad event doesn't wipe out everything. Put money in equity funds, debt funds, gold, and keep an emergency fund in a savings account. Different investments react differently to the same event.",
    normal: "Investment diversification operates at three levels: (1) Asset class: equity, debt, gold, real estate. (2) Geographic: Indian equity + international funds. (3) Within equity: large-cap, mid-cap, small-cap across different sectors. Annual rebalancing restores target allocation after market movements.",
    faq: ["How many mutual funds does adequate diversification require? → 3-5 well-chosen funds covering different categories typically provides adequate diversification.", "Is diversification the same as buying many stocks? → Buying 50 stocks in the same sector isn't diversified — diversification requires different asset classes and categories."],
    myths: ["More diversification is always better. → Over-diversification (too many holdings) dilutes returns without significantly reducing risk.", "Diversification guarantees no losses. → Diversification reduces risk and volatility but cannot eliminate loss entirely — market-wide downturns affect most assets."],
  },
  "How to improve CIBIL score": {
    simple: "To improve your CIBIL score: pay every EMI and credit card bill on time — this is the biggest factor. Keep credit card spending below 30% of the limit. Don't apply for multiple loans at once. Let old accounts remain open. Time and consistent behaviour are the only real fixes.",
    normal: "CIBIL score improvement actions: (1) Pay all credit obligations on time — even one missed payment significantly impacts score. (2) Reduce credit card utilisation below 30% of combined limit. (3) Don't close old credit cards unnecessarily. (4) Avoid multiple loan applications in a short period (each creates a hard inquiry). Meaningful improvement takes 6-18 months.",
    faq: ["Can I pay someone to fix my CIBIL score quickly? → No legitimate score repair service exists — any company claiming to 'fix' your score quickly is a scam.", "Will settling a loan (paying less than owed) help my score? → Settlement is noted as 'Settled' not 'Closed' — it harms your score. Always try to pay the full amount."],
    myths: ["I can improve my CIBIL score in 30 days. → Significant improvement takes 6-12 months of consistent behaviour — there are no legitimate shortcuts.", "Settling outstanding loans cleans up my credit report. → 'Settled' status remains visible on your report and signals financial stress to future lenders."],
  },
  "How to reduce unnecessary expenses": {
    simple: "Start by listing all your monthly expenses and marking each as 'need' or 'want'. Cancel subscriptions you rarely use. Cook at home more often. Compare prices before buying. The most effective approach: wait 48 hours before any unplanned purchase — most impulses pass.",
    normal: "Expense reduction strategies: (1) Subscription audit: list all auto-debited subscriptions; cancel anything used less than 2×/month. (2) 48-hour rule for non-essential purchases above ₹500. (3) Meal planning: home meal vs delivery is typically 3-5× cheaper. (4) Track before cutting — you can't reduce what you haven't measured.",
    faq: ["What are the biggest areas of overspending for most Indians? → Food delivery, streaming subscriptions, apparel impulse purchases, and entertainment are the most common.", "Should I cut expenses or increase income? → Both — cutting expenses is immediate and certain; income growth takes time but has no ceiling."],
    myths: ["Cutting small expenses doesn't make a meaningful difference. → Cancelling ₹2,000 in monthly subscriptions = ₹24,000/year = ₹1.2 lakh over 5 years invested at 12%.", "I need to deprive myself to reduce expenses. → Eliminating things you barely use or value is not deprivation — it's redirecting money toward things you actually care about."],
  },
  "How to start a SIP in India": {
    simple: "Starting a SIP takes 10 minutes: open a mutual fund account on Groww, Kuvera, or Zerodha Coin. Complete KYC with PAN and Aadhaar. Select a fund, set your monthly amount (minimum ₹100-500), choose a debit date, and link your bank account. The amount is auto-debited every month.",
    normal: "SIP setup steps: (1) Complete KYC via a SEBI-registered platform. (2) Choose fund based on your goal and risk profile. (3) Select SIP amount and date. (4) Set up NACH (bank auto-debit mandate). (5) First SIP processes immediately; subsequent ones auto-debit monthly. SIPs can be paused, increased, decreased, or stopped at any time.",
    faq: ["Which platform is best for starting SIP in India? → Kuvera (fee-free, direct plans), Zerodha Coin (low cost, direct plans), or directly through the AMC website are good starting points.", "What's the minimum amount for a SIP? → Most funds accept ₹100-500/month — starting small and being consistent matters far more than the initial amount."],
    myths: ["SIPs are only for long-term investment — I can't use them for short-term goals. → Liquid fund SIPs work well for short-term goals (1-2 years) and beat savings account returns.", "Once I start a SIP, I'm locked in forever. → SIPs can be paused, stopped, or modified at any time — there's no penalty for stopping an open-ended fund SIP."],
  },
  "How to track daily expenses": {
    simple: "The simplest method: at the end of each day, write down everything you spent with the category (food, transport, fun). Total it weekly. Or use ET Money or Walnut app — they read SMS alerts from your bank automatically and categorise spending.",
    normal: "Daily expense tracking methods: (1) App-based (recommended): ET Money, Walnut, or Money Manager auto-read bank SMS alerts and categorise transactions. (2) Spreadsheet: effective if you prefer manual control. (3) Bank statement review: monthly review of bank and credit card statements identifies patterns even without daily tracking.",
    faq: ["Does tracking expenses alone reduce spending? → Research shows awareness alone reduces impulse spending by 10-15% — tracking is the first step toward control.", "What if I use cash and there's no SMS alert? → Keep a small pocket notebook or voice memo for cash transactions — even tracking cash for one month reveals important patterns."],
    myths: ["Expense tracking is too tedious to maintain long-term. → Apps that read SMS alerts require almost no effort — the data appears automatically.", "I only need to track when I'm in financial trouble. → Regular tracking prevents trouble — starting only when in crisis is reactive rather than proactive."],
  },
  "How to use credit card without debt": {
    simple: "The one rule for debt-free credit card use: always pay the full statement amount before the due date. Set up auto-pay for the full amount so it's automatic. Use your card only for purchases you would make anyway in cash. Never treat the credit limit as extra money to spend.",
    normal: "Debt-free credit card usage: (1) Auto-pay full statement balance every month — never the minimum due. (2) Keep utilisation below 30% of credit limit. (3) Use only for planned purchases. (4) Check card statement weekly to catch errors. (5) Treat credit card spending as if the money is already gone from your bank account.",
    faq: ["Can I use a credit card for large purchases if I'll pay in full next month? → Yes — as long as the funds are actually available in your bank account today, not hypothetical future income.", "What's the maximum I should put on a credit card monthly? → Whatever you can pay in full on the due date — not a rupee more."],
    myths: ["Using a credit card always leads to overspending and debt. → Responsible use (pay in full, low utilisation) builds credit score and earns rewards — debt results from behaviour, not the card itself.", "Carrying a small balance helps improve credit score. → Carrying a balance never helps — on-time full payment builds score better than any balance."],
  },
  "Hybrid mutual funds explained": {
    simple: "Hybrid mutual funds invest in both stocks and bonds in a single fund. They're less volatile than pure equity funds but potentially earn more than pure debt funds. Good for moderate-risk investors who want growth with less extreme ups and downs.",
    normal: "Hybrid funds combine equity and debt in different proportions. Categories: Aggressive hybrid (65-80% equity), Balanced hybrid (40-60% each), Conservative hybrid (10-25% equity). They provide automatic rebalancing between asset classes within a single fund.",
    faq: ["Who should invest in hybrid funds? → Investors with a 3-5 year horizon who want equity participation but can't stomach pure equity volatility.", "Is a balanced advantage fund a type of hybrid fund? → Yes — balanced advantage funds dynamically shift between equity and debt based on market conditions."],
    myths: ["Hybrid funds are always safer than equity funds. → Aggressive hybrid funds (65-80% equity) can lose nearly as much as pure equity funds during severe downturns.", "Hybrid funds save me from having to think about asset allocation. → They simplify allocation within one fund but don't eliminate the need to match the fund category to your risk tolerance."],
  },
  "ITR filing deadline": {
    simple: "For most individuals and salaried employees, the ITR filing deadline is July 31 of the assessment year. If you miss this, you can still file a belated return by December 31 with a late fee. Missing both means you can't file for that year at all.",
    normal: "ITR deadlines: July 31 (individuals and HUF not requiring audit), October 31 (businesses requiring tax audit). Belated return: December 31 with late fee (₹5,000 if income > ₹5 lakh; ₹1,000 if ₹2.5-5 lakh). Revised return: December 31 to correct errors in filed returns.",
    faq: ["What is the late fee for filing ITR after July 31? → ₹5,000 for income above ₹5 lakh; ₹1,000 for income between ₹2.5-5 lakh; no fee if income is below ₹2.5 lakh.", "Can I file ITR after December 31 if I missed the belated deadline? → Only with permission from the income tax authority for specific valid reasons — this is rare and complex."],
    myths: ["ITR deadline is the same every year on March 31. → March 31 is the end of the financial year; ITR deadline is July 31 of the following year.", "No penalty applies if I miss July 31 and file in August. → Late fee applies for any filing after July 31 — even one day late triggers the fee."],
  },
  "Income tax slabs in India": {
    simple: "India has two tax regime options. New regime (default): 0% up to ₹3 lakh, 5% for ₹3-7 lakh, 10% for ₹7-10 lakh, 15% for ₹10-12 lakh, 20% for ₹12-15 lakh, 30% above ₹15 lakh. Tax rebate makes income up to ₹7 lakh effectively tax-free under the new regime.",
    normal: "New tax regime (FY24-25): ₹0-3 lakh: 0%, ₹3-7 lakh: 5%, ₹7-10 lakh: 10%, ₹10-12 lakh: 15%, ₹12-15 lakh: 20%, above ₹15 lakh: 30%. Tax rebate under 87A makes tax liability zero up to ₹7 lakh income. Standard deduction ₹75,000 available. Old regime has higher rates but allows deductions (80C, HRA, home loan interest).",
    faq: ["Which tax regime is better — old or new? → New regime is simpler and better for those with few deductions; old regime is better for those maximising 80C, HRA, and home loan deductions.", "What is the standard deduction for salaried employees? → ₹75,000 under both old and new regime from FY24-25."],
    myths: ["The highest tax slab applies to my entire income. → Only income above the threshold enters the higher slab — each slab applies only to that slice of income.", "New tax regime always results in higher tax than old regime. → For many salaried employees without large deductions, the new regime can result in equal or lower tax."],
  },
  "Index funds explained": {
    simple: "An index fund copies a stock market index like Nifty 50 — it buys all 50 companies in the same proportions. It doesn't try to pick winners. Because it's passive, it charges very low fees. Over time, most actively managed funds fail to beat the index.",
    normal: "Index funds passively replicate an index (Nifty 50, Sensex, Nifty Next 50) by holding all constituents in index proportions. Expense ratios are 0.05-0.2% vs 1-2.5% for active funds. SEBI data consistently shows 70-80% of active equity funds underperform their benchmark over 10-year periods.",
    faq: ["Should I prefer an index fund or an active fund? → For large-cap exposure, index funds often outperform active funds net of fees. For mid and small-cap, active managers can sometimes add value.", "Which index fund should I start with? → Nifty 50 index fund from a reputed AMC (SBI, UTI, HDFC) with expense ratio below 0.1% is a solid starting point."],
    myths: ["Index funds are boring and can't make serious returns. → Nifty 50 has delivered ~12% CAGR over 20 years — more than sufficient for serious wealth building.", "Index funds only make money when the market is going up. → True — index funds fall with the market too. But over long periods, markets historically trend significantly upward."],
  },
  "Individual vs family floater plan": {
    simple: "Individual health insurance covers one person for the full sum insured. A family floater covers your entire family under a shared sum insured for a lower combined premium. Family floater is usually better value unless you have elderly parents — for them, separate senior citizen policies are advisable.",
    normal: "Individual plan: each person has their own sum insured — no sharing. Family floater: one shared sum insured for all covered members — cheaper but the entire sum can be exhausted by one member's claim. Best practice: family floater for spouse and young children; separate individual policies for parents above 60.",
    faq: ["Can I add parents to a family floater? → Most insurers allow it but premiums increase significantly with older parents — often a separate senior citizen policy is more cost-effective.", "What happens if two family members need hospitalisation at the same time? → Both claims draw from the same pool — if the sum insured is exhausted by one, the other has no coverage left."],
    myths: ["Family floater is always cheaper than individual plans. → When parents above 60 are included, family floater premiums can exceed the cost of separate individual plans.", "Any family member can be added to a floater anytime. → Most insurers have age and relationship restrictions; addition after policy start may trigger fresh waiting periods."],
  },
  "Inflation erodes savings": {
    simple: "Inflation means prices rise over time. Money sitting in a savings account earning 3-4% while inflation is 5-6% is actually losing real value. Your ₹1 lakh today buys less in 10 years even if the number in your account grew slightly. This is why investing, not just saving, is essential.",
    normal: "Inflation erodes the purchasing power of cash and low-yield savings. If inflation is 6% and your savings account earns 3.5%, your real return is -2.5%. Over 20 years at this difference, your money effectively loses half its real value. Investments that beat inflation (equity: ~12% CAGR historically in India) are necessary for long-term financial health.",
    faq: ["How much should I earn to beat inflation? → Your investments need to return at least CPI inflation (currently 4-6%) to preserve purchasing power; more to build real wealth.", "Does this mean I should not keep any money in savings accounts? → No — keep your emergency fund there for liquidity. But surplus money for long-term goals should be in inflation-beating instruments."],
    myths: ["If my bank balance is higher next year, I'm wealthier. → Nominal increase means nothing if inflation has grown faster — real purchasing power is what matters.", "Inflation only affects everyday items, not investments. → Inflation affects the value of all financial assets — bonds, savings, and fixed-income instruments all lose real value in high-inflation environments."],
  },
  "Input tax credit explained": {
    simple: "Input Tax Credit (ITC) allows GST-registered businesses to claim back the GST they paid on their purchases if those purchases were used for business. This prevents double taxation. You collect GST from customers, pay GST on purchases, and only remit the difference to the government.",
    normal: "Input Tax Credit allows GST-registered businesses to deduct GST paid on business inputs from GST collected on outputs. Net GST payable = Output tax (collected from customers) − Input tax credit (paid on purchases). ITC is not available for personal use items, food and beverages, or goods/services for exempt supplies.",
    faq: ["What proof do I need to claim ITC? → A valid GST invoice from a registered supplier — the supplier must have filed GSTR-1 for the ITC to appear in your GSTR-2B.", "Can I claim ITC on all business purchases? → No — ITC is blocked on certain items: vehicles for personal use, food and beverages, health club memberships."],
    myths: ["ITC means I don't pay any GST on purchases. → ITC offsets output GST — you still pay GST on purchases; the credit is applied against what you owe to the government.", "Any invoice qualifies for ITC. → The supplier must be GST-registered, the invoice must have their GSTIN, and they must have filed the return."],
  },
  "Investments that qualify under 80C": {
    simple: "Section 80C allows you to deduct up to ₹1.5 lakh from your taxable income. Qualifying investments include: ELSS mutual funds, PPF, EPF contributions, life insurance premiums, NSC, 5-year tax-saving FDs, Sukanya Samriddhi Yojana, and home loan principal repayment.",
    normal: "Section 80C qualifying investments (aggregate limit ₹1.5 lakh, old tax regime only): ELSS mutual funds, PPF contributions, EPF employee contributions, life insurance premiums, NSC, 5-year bank/post office FDs, Sukanya Samriddhi Yojana, NPS Tier 1 (additional ₹50,000 under 80CCD(1B)), tuition fees for children, and home loan principal repayment.",
    faq: ["Can I claim ₹1.5 lakh each for multiple 80C instruments? → No — ₹1.5 lakh is the combined maximum across all 80C investments.", "Is NPS under 80C or a different section? → NPS has dual benefit: ₹1.5 lakh under 80C plus additional ₹50,000 exclusively under 80CCD(1B)."],
    myths: ["I can claim ₹1.5 lakh separately for each 80C instrument. → All 80C investments combined are subject to a single ₹1.5 lakh ceiling.", "80C deductions are available in both new and old tax regimes. → 80C deductions are only claimable under the old tax regime."],
  },
  "LTCG on equity explained": {
    simple: "LTCG (Long Term Capital Gains) on equity means the profit you make when you sell equity investments held for more than one year. Gains up to ₹1.25 lakh per year are tax-free. Anything above ₹1.25 lakh is taxed at 12.5%.",
    normal: "LTCG on equity: Holding period over 12 months qualifies as long-term. Tax rate: 12.5% on gains above ₹1.25 lakh per financial year (updated budget 2024). Short-term (under 12 months) gains taxed at 20% (STCG). No indexation benefit for equity LTCG. Applicable to: listed equity shares, equity mutual funds, equity ETFs.",
    faq: ["How do I calculate my LTCG on mutual funds? → Gain = Redemption value − Purchase NAV × units sold. Compare purchase date with redemption date to confirm 12+ months holding.", "Can I offset LTCG with LTCL (Long Term Capital Loss)? → Yes — LTCG and LTCL on equity can be set off against each other; remaining loss can be carried forward for 8 years."],
    myths: ["All mutual fund gains are taxed the same way. → Debt funds have different tax treatment; equity funds have LTCG/STCG at different rates.", "LTCG applies to any investment held over one year. → LTCG rates vary by asset class — 12.5% for equity, slab rate for debt funds post-2023."],
  },
  "Lifestyle inflation and how to avoid it": {
    simple: "Lifestyle inflation means your spending automatically rises every time your income rises — you upgrade your phone, apartment, and car with every salary increase. To avoid it, save or invest most of any salary increase before adjusting your lifestyle.",
    normal: "Lifestyle inflation (lifestyle creep) occurs when discretionary spending increases proportionally with income, leaving the savings rate unchanged or declining. The antidote: automate investment increases whenever income rises — if salary goes up by ₹10,000, auto-increase SIP by ₹5,000-7,000 before the new salary hits your spending account.",
    faq: ["Is all lifestyle improvement bad? → No — targeted, intentional upgrades that genuinely improve quality of life are fine. The problem is automatic, thoughtless spending increases.", "How do I know if I'm experiencing lifestyle inflation? → If your savings rate as a percentage of income has stayed flat or declined despite income growth, lifestyle inflation is happening."],
    myths: ["I deserve to spend more when I earn more. → You also deserve financial security and early retirement — the question is how to balance present enjoyment with future security.", "Lifestyle inflation only affects high earners. → It affects everyone at every income level — the trap is proportional, not absolute."],
  },
  "Long term capital gains explained": {
    simple: "Long term capital gains (LTCG) is the profit from selling an investment you've held for a certain period — more than 1 year for stocks/equity funds, more than 2 years for property. Longer holding periods generally attract lower tax rates than short-term gains.",
    normal: "LTCG definition by asset class: Equity (shares, equity mutual funds): held 12+ months. Debt mutual funds (post April 2023): held 24+ months — taxed at slab rate. Property: held 24+ months. Gold: held 36+ months. LTCG on equity: 12.5% above ₹1.25 lakh exemption. Property LTCG: 12.5% without indexation.",
    faq: ["Why are long-term gains taxed at a lower rate than short-term? → LTCG preferential tax treatment encourages long-term investing, which benefits market stability and economic growth.", "Can I do tax harvesting to reduce LTCG? → Yes — booking gains within the ₹1.25 lakh annual exemption each year avoids future tax on accumulated gains."],
    myths: ["LTCG tax only applies when I withdraw from mutual funds. → LTCG applies to any sale/redemption of qualifying assets held long-term — including switching between mutual fund schemes.", "All LTCG is tax-free in India. → Only equity LTCG up to ₹1.25 lakh per year is exempt. LTCG above that and from other asset classes is taxable."],
  },
  "Market cycles explained": {
    simple: "Stock markets move in cycles: they rise (bull market), fall (bear market), recover, and rise again. No cycle lasts forever. Long-term investors who stay invested through bear markets capture the full gains of subsequent bull markets. Those who sell in fear miss the recovery.",
    normal: "Market cycles consist of four phases: accumulation (informed investors buy), markup (broad price rise), distribution (smart money sells), and markdown (prices fall). In India, bear markets (>20% fall) have occurred roughly every 4-7 years, followed by recoveries that typically exceed previous peaks within 2-4 years.",
    faq: ["How long do bear markets typically last in India? → Indian bear markets have historically lasted 6-18 months; recoveries typically take 2-4 years to reach new highs.", "Should I sell my investments when a bear market starts? → Identifying the start of a bear market in real-time is nearly impossible — staying invested consistently produces better outcomes than tactical exits."],
    myths: ["If markets are at an all-time high, they will definitely fall soon. → Markets spend significant time at or near all-time highs — all-time high is not a signal to avoid investing.", "Bear markets are catastrophes you must avoid. → For long-term investors with no immediate need for the money, bear markets are opportunities to accumulate more units at lower prices."],
  },
  "Market order vs limit order": {
    simple: "A market order buys or sells shares immediately at the current market price — fast but you accept whatever price is available. A limit order lets you set the exact price you want — it only executes if the market reaches your price. Use limit orders to avoid paying too much.",
    normal: "Market order: executes immediately at best available price; guaranteed execution but uncertain price — can result in slippage in volatile markets or for illiquid stocks. Limit order: executes only at the specified price or better; price certainty but no execution guarantee if market doesn't reach your price.",
    faq: ["Which order type should a beginner use? → Limit orders are generally better for beginners — they prevent paying significantly more than intended due to price spikes.", "What is slippage? → Slippage is the difference between expected and actual execution price — it occurs in market orders and increases with stock illiquidity."],
    myths: ["Market orders always execute at the price I saw before placing the order. → The displayed price is a snapshot — the actual execution price can differ, especially in fast-moving markets.", "Limit orders always get filled. → A limit order only executes if the market reaches your specified price — orders can expire unfilled."],
  },
  "Mistakes that damage credit score": {
    simple: "The biggest mistakes that damage your CIBIL score: missing or late payments on EMIs and credit cards (single most damaging), using more than 30-40% of your credit card limit, applying for multiple loans in a short period, and closing old credit accounts unnecessarily.",
    normal: "Credit score damaging behaviours: (1) Late or missed payments — even one 30-day late payment can drop score 50-100 points. (2) High credit utilisation — using 80%+ of limit signals distress. (3) Multiple hard inquiries — each loan application creates a hard inquiry. (4) Loan settlements ('settled' vs 'closed'). (5) Guaranteeing others' loans — if they default, your score suffers equally.",
    faq: ["How long does a negative mark stay on CIBIL? → Defaults and settlements stay for 7 years per RBI guidelines.", "Does being a loan guarantor affect my CIBIL? → Yes — if the primary borrower defaults, you're equally liable and your CIBIL score takes the same hit."],
    myths: ["Not using credit at all is the safest approach for my score. → No credit history means no CIBIL score — which makes it harder to get loans in the future.", "Closing a paid-off credit card improves my score. → It often lowers it — the card's credit limit and history both contributed positively to your score."],
  },
  "Mudra loan scheme India": {
    simple: "Mudra loans are government-backed loans for small businesses and self-employed individuals, available from banks and microfinance institutions. No collateral required. Three categories: Shishu (up to ₹50,000), Kishore (₹50,000-₹5 lakh), and Tarun (₹5-₹10 lakh).",
    normal: "MUDRA loans under PM Mudra Yojana are available from all scheduled commercial banks, MFIs, RRBs, and NBFCs. No collateral required. Interest rates vary by lender (typically 8.5-12%). MUDRA card (prepaid debit card linked to loan) provides working capital flexibility.",
    faq: ["Who is eligible for a Mudra loan? → Any Indian citizen running or planning a non-farming micro/small enterprise — including shopkeepers, hawkers, artisans, and service providers.", "How do I apply? → Visit any nationalised or private bank branch with business plan, identity proof, address proof, and business proof."],
    myths: ["Mudra loans are free money from the government. → They are loans that must be repaid with interest — the government subsidises the scheme but repayment is mandatory.", "Only new businesses can get Mudra loans. → Existing businesses can use Mudra loans for expansion or working capital under Kishore or Tarun category."],
  },
  "NPS tier 1 and tier 2": {
    simple: "NPS Tier 1 is the retirement account — your money is locked until age 60 with tax benefits on contributions. NPS Tier 2 is a voluntary savings account — you can withdraw money any time but get no tax benefits. Think of Tier 1 as retirement savings; Tier 2 as a flexible savings account.",
    normal: "NPS Tier 1: mandatory account, minimum ₹500/year, withdrawal restrictions, tax benefits under 80CCD. NPS Tier 2: optional, no minimum contribution, completely liquid (withdraw anytime), no tax deduction for non-government employees. Both accounts are linked to the same PRAN. Tier 2 requires an active Tier 1 account.",
    faq: ["Can I open a Tier 2 without Tier 1? → No — Tier 1 must be opened and active to open a Tier 2 account.", "Is Tier 2 a good option instead of a savings account? → Tier 2 invests in markets and can give better returns than savings accounts, but it's not capital-protected."],
    myths: ["NPS Tier 2 has the same tax benefits as Tier 1. → For most taxpayers, Tier 2 contributions have no tax deduction — only government employees get 80C benefit on Tier 2.", "I need to invest in both Tier 1 and Tier 2 for NPS. → Tier 1 alone gives the full tax benefit — Tier 2 is optional."],
  },
  "Old tax regime vs new tax regime": {
    simple: "India has two income tax regimes. The old regime has higher tax rates but lets you reduce taxable income through deductions (80C investments, HRA, home loan interest). The new regime has lower rates but almost no deductions. If you have large deductions (₹3+ lakh), old regime often saves more tax.",
    normal: "Old regime: higher tax slabs, allows all deductions (80C, HRA, 24B, 80D, LTA, standard deduction). New regime (default from FY24): lower slabs, standard deduction ₹75,000, employer NPS (80CCD2) allowed, no other deductions. Calculate tax under both regimes with your actual deductions to decide.",
    faq: ["Which is better if I have a home loan and ELSS investments? → Run the actual calculation — typically old regime is better if deductions exceed ₹3-4 lakh annually.", "Can I switch regimes every year? → Salaried employees can switch annually by informing their employer. Business owners choosing new regime must stick with it for multiple years."],
    myths: ["New regime is always simpler and therefore always better. → Simpler yes, but it may cost more tax if you have significant deductions.", "Old regime is always better because it offers more deductions. → Without significant deductions, old regime's higher base rates result in more tax paid."],
  },
  "PPF interest rate and tenure": {
    simple: "PPF currently earns 7.1% per year, set by the government quarterly. The account runs for 15 years, after which you can extend in 5-year blocks indefinitely. Money compounds over 15 years into a substantial, fully tax-free amount.",
    normal: "PPF details: Current interest rate 7.1% p.a. (government-declared quarterly). Tenure: 15 years, extendable in 5-year blocks. Annual investment: minimum ₹500, maximum ₹1.5 lakh. Interest compounded annually. Full EEE tax status. Partial withdrawals allowed from year 7; loans against balance from year 3-6.",
    faq: ["What happens after 15 years — must I close the account? → No — you can extend in 5-year blocks with or without further contributions; interest continues to compound.", "Can the PPF interest rate change after I invest? → Yes — PPF rate is reviewed quarterly by the government and can change."],
    myths: ["PPF interest rate has always been 8% or above. → The rate has declined from 12% in 1988 to the current 7.1% as India's overall interest rate environment has fallen.", "PPF is better than ELSS in all situations. → PPF is tax-free and safe; ELSS has higher potential returns over long periods. Both serve different purposes."],
  },
  "Power of compounding over time": {
    simple: "Compounding means earning returns on your previous returns. ₹1 lakh at 12% annual return becomes ₹1.12 lakh after year 1, then ₹1.25 lakh after year 2 — earning on the ₹1.12 lakh, not just the original ₹1 lakh. Over 30 years, that ₹1 lakh becomes ₹30 lakh without adding another rupee.",
    normal: "Compound growth formula: Future Value = P × (1 + r)^n. At 12% CAGR: ₹1 lakh grows to ₹3.1 lakh in 10 years, ₹9.6 lakh in 20 years, ₹30 lakh in 30 years. The compounding effect becomes most powerful in the final years — over 60% of the ₹30 lakh growth occurs in the last 10 years of a 30-year period.",
    faq: ["Why does starting early matter so much for compounding? → Starting at 25 vs 35 for the same goal: the 25-year-old accumulates 2.5-3× more at retirement due to the extra decade of compounding.", "Can compounding work against me? → Yes — on debt. Credit card debt at 36% compounds just as powerfully as equity investment, but against you."],
    myths: ["Compounding mainly helps people who invest large amounts. → Compounding is percentage-based — ₹5,000/month invested for 30 years at 12% creates the same wealth multiple as ₹50,000/month.", "Compounding is only relevant for long-term goals. → Even over 5 years, compounding creates meaningful difference vs simple interest."],
  },
  "SEBI mutual fund categories": {
    simple: "SEBI has standardised all mutual funds into defined categories — large-cap, mid-cap, small-cap, ELSS, debt, hybrid, etc. Each fund must stay true to its category. This makes comparison fair — you can compare any two large-cap funds knowing they invest in similar stocks.",
    normal: "SEBI's October 2017 categorisation: Equity (10 categories: large-cap, mid-cap, small-cap, flexi-cap, ELSS, sectoral/thematic, etc.), Debt (16 categories: liquid, overnight, short duration, credit risk, etc.), Hybrid (6 categories). Each AMC can have only one fund per category. This prevents AMC manipulation and enables valid peer comparison.",
    faq: ["Why did SEBI introduce fund categories? → Before 2017, AMCs had multiple similar funds that confused investors. Categorisation forced clarity and enabled proper benchmarking.", "Can a fund switch from large-cap to mid-cap category? → No — changing investment mandate requires SEBI approval and a mandatory exit window for investors."],
    myths: ["All equity mutual funds are the same regardless of category. → Large-cap, mid-cap, and small-cap funds have fundamentally different risk-return profiles.", "More fund categories mean more choices and better outcomes. → SEBI's categorisation reduced confusion by limiting each AMC to one fund per category — fewer, clearer choices benefit investors."],
  },
  "SIP vs lump sum comparison": {
    simple: "SIP invests a fixed amount monthly. Lump sum invests a large amount all at once. SIP reduces the risk of investing at the wrong time. Lump sum works better when markets are at historic lows. For most investors without timing expertise, SIP is the wiser choice.",
    normal: "SIP advantages: rupee cost averaging, habit formation, no need to time the market, suited for salaried investors. Lump sum advantages: maximises time in market — if invested during a low, compounding begins immediately on the full amount. In consistently rising markets, lump sum outperforms SIP. In volatile markets, SIP typically outperforms.",
    faq: ["What should I do if I receive a large bonus — SIP or lump sum? → If markets haven't risen significantly recently, lump sum is fine. If markets are near all-time highs, spread over 6-12 months via STP.", "Can I combine both approaches? → Yes — a base monthly SIP for regular savings, plus lump sum investments during significant market corrections."],
    myths: ["SIP always gives better returns than lump sum. → In consistently rising markets, lump sum outperforms SIP. SIP's advantage is risk reduction, not always return maximisation.", "Lump sum investing is too risky for average investors. → With a 10+ year horizon and a diversified fund, lump sum investing has historically been profitable even when made at market peaks."],
  },
  "Salary income explained": {
    simple: "Salary income is the money you receive from your employer in exchange for your work. It arrives on a predictable date each month. Your employer deducts TDS (income tax) before paying you, and may also deduct EPF contributions. Your take-home salary is the amount after all deductions.",
    normal: "Salary income comprises: Basic salary, HRA, special allowance, LTA, medical allowance. Employer deductions: TDS (income tax), EPF (12% of basic), professional tax. Net/take-home salary = Gross salary minus all deductions. Key tax benefits: standard deduction (₹75,000), HRA exemption, home loan interest, and 80C investments reduce taxable salary.",
    faq: ["Is HRA part of my salary? → HRA is a salary component — it's included in your CTC but partially exempt from tax if you pay rent.", "What is CTC and how is it different from take-home salary? → CTC includes all components including employer's EPF contribution and benefits; take-home is significantly lower after deductions."],
    myths: ["Higher CTC always means higher take-home salary. → A ₹12 lakh CTC might have ₹2-3 lakh in non-cash benefits, giving take-home well below what CTC suggests.", "All salary components are fully taxable. → Several components (HRA up to limits, LTA, reimbursements) have full or partial tax exemptions."],
  },
  "Too many funds problem": {
    simple: "Holding too many mutual funds (15-20) doesn't make you safer — it just adds complexity without benefit. Most large-cap funds hold similar stocks, so fund number 10 and fund number 15 are buying the same companies. 3-5 well-chosen funds covering different categories is all most investors need.",
    normal: "Portfolio over-diversification occurs when adding funds beyond 5-6 produces overlap without meaningful risk reduction. Large-cap funds hold similar Nifty 50 stocks. The optimal mutual fund portfolio: 1 large-cap/index fund, 1 mid-cap fund, 1 small-cap fund (optional), 1 international fund (optional), 1 debt fund — that's 3-5 funds.",
    faq: ["How do I know if my funds overlap? → Use Morningstar's portfolio overlap tool or Valueresearch's fund comparison to see how many stocks are common across your funds.", "What should I do if I already own 12 funds? → Review holdings for overlap and consolidate into fewer well-diversified funds without creating unnecessary tax events."],
    myths: ["More funds equals better risk management. → Correlation between similar-category funds is high — more funds of the same type don't reduce correlated risk.", "Having many funds shows sophisticated investing. → Simplicity and consistency create wealth — complexity is not sophistication."],
  },
  "Why early investing beats late investing": {
    simple: "Starting to invest 10 years earlier is more powerful than investing twice as much money starting later. ₹5,000/month from age 25 to 60 at 12% grows to approximately ₹3.2 crore. Starting at 35 instead, you'd need ₹17,000/month to reach the same amount.",
    normal: "The mathematics of early investing: ₹5,000/month at 12% CAGR from age 25 to 60 = ₹3.24 crore. Same from age 35 to 60 = ₹94 lakh — 3.4× less for the same monthly investment. Early investing works because more compounding periods means the final years, where most growth accumulates, are maximised.",
    faq: ["Is it too late to start investing at 40? → No — starting at 40 with higher contributions still builds meaningful retirement corpus. Late is always better than never.", "Should young investors take more risk? → Yes — longer time horizon allows recovery from market volatility, making higher equity allocation appropriate."],
    myths: ["I'll start investing after my income increases. → Investing ₹2,000/month for 30 years creates more wealth than ₹20,000/month for 10 years at the same return.", "The stock market is too volatile for long-term planning. → Volatility is the friend of long-term investors — more market cycles means more opportunities to accumulate at lower prices through SIP."],
  },
  "Why saving alone is not enough": {
    simple: "If inflation is 6% and your savings account earns 3.5%, your money is actually losing value in real terms every year. Saving is essential but keeping all savings in a bank account means slowly getting poorer in purchasing power. You must invest to beat inflation and grow real wealth.",
    normal: "Saving without investing fails because: (1) Inflation (5-6%) erodes the purchasing power of cash savings. (2) FD rates (6-7%) barely beat inflation and are fully taxable — real post-tax return for 30% bracket investors is often 0-1%. (3) Compounding requires investing in growth assets — equity has historically delivered 12-13% CAGR in India.",
    faq: ["How much of my savings should be invested vs kept in cash? → Emergency fund (3-6 months) in liquid savings; everything else should be invested based on goals and timeline.", "At what point does saving become insufficient? → When you have an emergency fund built and stable income — the next rupee saved should go into investments, not additional cash reserves."],
    myths: ["Saving safely is always better than the risk of investing. → Not investing carries its own risk — inflation risk. There is no truly 'safe' option when inflation is considered.", "I'll start investing after saving a large enough amount. → SIP investing from ₹500/month is more powerful than waiting to accumulate a large lump sum."],
  },
};

const CONTENT_PATCH = {
  "100 minus age rule": {
    simple: "Subtract your age from 100 to get the percentage of your savings to keep in stocks. If you're 25, keep 75% in equity mutual funds and 25% in safer options like FDs or bonds. As you get older, shift more money to safer places. This keeps your money growing when you're young but protects it when you need it most. It's a starting guide — not a strict law.",
    normal: "The 100-minus-age rule is a thumb rule for asset allocation: equity % = 100 minus your age. A 30-year-old holds 70% equity; a 60-year-old holds 40%. Younger investors have time to recover from market crashes; those near retirement cannot afford large losses. Many modern advisors use 110 or 120 minus age because people live longer and need their money to last 30+ years in retirement. Rebalance annually to maintain the target allocation as markets move.",
    faq: ["Is this rule always accurate? → It's a starting guide, not a law — adjust based on your risk tolerance, goals, and income stability.", "Should I rebalance every year? → Rebalancing once a year or when any asset class drifts more than 5% from target is a good practice.", "What if I started investing late? → If you're 45 but just starting, you may still need 60–70% equity to grow your corpus — adjust based on your retirement timeline, not just age.", "Does this rule apply to NPS and EPF too? → These are separate long-term instruments. The rule applies to your investable surplus beyond mandatory retirement contributions."],
    myths: ["This rule guarantees good returns. → It's only an allocation starting point — actual returns depend entirely on market performance and the specific funds chosen.", "Everyone the same age should have identical portfolios. → Age is just one factor. Income stability, dependants, existing assets, and specific goals all change the ideal allocation.", "Once set, you never need to change the allocation. → Markets move allocations away from targets — rebalancing annually is essential.", "100-minus-age means all non-equity money goes in FDs. → The 'safe' portion can include PPF, debt mutual funds, government bonds, and short-duration funds."],
    hi_simple: "अपनी उम्र को 100 में से घटाएं — उतना प्रतिशत शेयर बाज़ार में रखें। 25 साल के हैं तो 75% इक्विटी, 25% FD में। उम्र बढ़ने के साथ सुरक्षित जगह पैसे बढ़ाते जाएं।",
    hi_normal: "100 माइनस उम्र एक सरल निवेश मार्गदर्शक है: इक्विटी % = 100 - उम्र। 30 साल में 70% इक्विटी; 60 साल में 40%। आधुनिक सलाहकार 110 या 120 माइनस उम्र का उपयोग करते हैं। हर 1-2 साल में पुनर्संतुलन ज़रूरी।",
    hi_faq: ["क्या यह नियम हमेशा सही है? → यह केवल शुरुआती मार्गदर्शक है।", "पोर्टफोलियो कितनी बार समीक्षा करें? → साल में एक बार या 5% से ज़्यादा भटकाव पर।", "देर से निवेश शुरू किया हो तो? → रिटायरमेंट टाइमलाइन के आधार पर 60–70% इक्विटी रखें।", "क्या यह NPS और EPF पर लागू होता है? → नहीं, यह अनिवार्य निवेशों से अलग है।"],
    hi_myths: ["यह नियम अच्छे रिटर्न की गारंटी देता है। → यह केवल आवंटन का शुरुआती बिंदु है।", "एक उम्र के सभी लोगों का पोर्टफोलियो एक जैसा हो। → आय, आश्रित और लक्ष्य अलग-अलग होते हैं।", "एक बार तय करने के बाद बदलाव नहीं। → हर साल पुनर्संतुलन ज़रूरी।", "गैर-इक्विटी पैसा हमेशा FD में जाए। → PPF, डेट फंड भी अच्छे विकल्प हैं।"],
  },
  "25x rule for retirement": {
    simple: "Save 25 times your expected annual expenses to retire comfortably. If you spend ₹6 lakh per year, target ₹1.5 crore. With this much saved, you can safely withdraw 4% every year and the money will last 30+ years. Start saving early — compounding does the heavy lifting.",
    normal: "The 25x rule comes from the 4% safe withdrawal rate: historically, withdrawing 4% of a balanced equity-debt portfolio annually sustains it for 30+ years. Your target corpus = Annual expenses × 25. Adjust upward to 30x for early retirement (before 50), or higher healthcare exposure. Always use future inflation-adjusted annual expenses — not today's numbers — when calculating your target.",
    faq: ["Why 25 times specifically? → Because 1 ÷ 4% = 25. At 4% annual withdrawal from a growing corpus, historical data shows it lasts 30+ years.", "Does inflation change this? → Yes — use your projected annual expenses at retirement (inflation-adjusted). ₹6L/year today may be ₹15L/year in 20 years at 6% inflation.", "Should I include EPF and PPF in my 25x calculation? → Yes — calculate the annual income these generate and subtract from your need. Only the gap needs to come from your invested corpus.", "What if markets crash right when I retire? → Keep 2 years of expenses in liquid funds at retirement to avoid selling equity during a crash — this is called sequence-of-returns protection."],
    myths: ["25x is always enough for anyone. → Healthcare, longevity, and lifestyle changes may require 30x or more — especially for early retirees.", "This rule only works for large savings. → The ratio applies at any wealth level — it's about proportion, not absolute size.", "Once I hit 25x I can stop all investments. → Ensure at least 40–50% of the corpus stays in equity to continue growing against inflation during retirement.", "An FD corpus of 25x is sufficient. → FD returns barely exceed inflation after tax — a corpus entirely in FDs erodes in real terms over a 30-year retirement."],
    hi_simple: "आरामदायक रिटायरमेंट के लिए सालाना खर्च का 25 गुना बचाएं। ₹6 लाख/साल खर्च है तो ₹1.5 करोड़ का लक्ष्य। 4% सालाना निकालने पर 30+ साल चलेगा।",
    hi_normal: "25x नियम 4% सुरक्षित निकासी दर से आया है। लक्ष्य = सालाना खर्च × 25। जल्दी रिटायरमेंट पर 30x रखें। हमेशा भविष्य के महंगाई-समायोजित खर्चों का उपयोग करें।",
    hi_faq: ["25 गुना क्यों? → 1 ÷ 4% = 25। इस दर पर 30+ साल चलता है।", "महंगाई इसे बदलती है? → हाँ — भविष्य के खर्चों का उपयोग करें।", "EPF और PPF शामिल हैं? → हाँ — उनसे होने वाली आय घटाएं।", "रिटायरमेंट पर बाज़ार गिरे तो? → 2 साल का खर्च लिक्विड फंड में रखें।"],
    hi_myths: ["25x हर किसी के लिए पर्याप्त है। → स्वास्थ्य और लंबी उम्र के लिए 30x बेहतर।", "यह केवल बड़ी बचत के लिए है। → अनुपात किसी भी स्तर पर लागू।", "25x पर सब निवेश बंद करें। → 40–50% इक्विटी में रखते रहें।", "FD में 25x रखना पर्याप्त है। → मुद्रास्फीति के बाद FD असली मूल्य घटाती है।"],
  },
  "50-30-20 rule explained": {
    simple: "Take your monthly take-home salary and split it: 50% to needs like rent, groceries, electricity, and loan EMIs. 30% to wants like eating out, movies, clothes, and subscriptions. The last 20% straight to savings or paying off debt. This is the simplest budget you can start today without any app.",
    normal: "The 50-30-20 rule allocates after-tax income to three buckets: 50% needs (non-negotiable essentials), 30% wants (discretionary), and 20% savings and debt repayment. In high-cost Indian cities where rent alone consumes 30–40% of income, adjust to 60-20-20. The 'pay yourself first' method — transferring savings immediately when salary arrives — is far more reliable than saving 'whatever is left' at month end.",
    faq: ["What counts as a need vs a want? → Needs: rent, utilities, groceries, medicine, school fees, basic transport, minimum EMIs. Wants: streaming services, dining out, new clothes, travel.", "What if my needs exceed 50%? → Common in metros. Cut wants first. Many Mumbai/Delhi residents use 60-20-20 as a realistic starting point.", "Should the 20% savings go to one place? → Priority order: emergency fund first (until 6 months built), then high-interest debt, then retirement (EPF/NPS/PPF), then goal investments.", "Does this work for irregular income? → Base the percentages on your lowest expected monthly income. In high-income months, deploy extra via a priority waterfall."],
    myths: ["The percentages must be exact. → Adjust to your situation — the core principle is saving at least 20% consistently.", "This rule is only for high earners. → It scales to any income level. Proportions matter more than absolute amounts.", "Saving 20% is too ambitious. → Start with 5% and increase by 1% every two months. The habit matters more than the exact percentage.", "Wants at 30% means you must spend that much. → It's a ceiling, not a target. Spending less on wants and saving more accelerates wealth building."],
    hi_simple: "मासिक आय को तीन हिस्सों में बाँटें: 50% ज़रूरतें, 30% इच्छाएं, 20% बचत। यह सबसे सरल बजट है।",
    hi_normal: "महंगे शहरों में 60-20-20 से शुरुआत करना यथार्थवादी है। वेतन आते ही 20% बचत ट्रांसफर करें — 'पे योरसेल्फ फर्स्ट।'",
    hi_faq: ["ज़रूरत और इच्छा में फर्क? → किराया, दवाई ज़रूरतें; Netflix इच्छाएं।", "50% से ज़्यादा ज़रूरतों पर जाए तो? → 60-20-20 से शुरुआत करें।", "20% कहाँ लगाएं? → पहले आपातकालीन फंड, फिर कर्ज़, फिर निवेश।", "अनियमित आय पर? → सबसे कम मासिक आय के आधार पर बजट।"],
    hi_myths: ["प्रतिशत बिल्कुल सही होना चाहिए। → नियमितता प्रतिशत से ज़्यादा महत्वपूर्ण।", "केवल अमीरों के लिए। → किसी भी आय पर काम करता है।", "20% बहुत ज़्यादा है। → 5% से शुरू करें।", "30% इच्छाओं पर खर्च करना ज़रूरी है। → यह सीमा है, लक्ष्य नहीं।"],
  },
  "What is a fixed deposit": {
    simple: "A Fixed Deposit (FD) is when you keep a lump sum of money with a bank for a fixed period — like 6 months, 1 year, or 5 years — and the bank pays you a guaranteed interest rate. Your money is safe and grows at a known rate. You can't usually touch it until the period ends without a small penalty.",
    normal: "A Fixed Deposit locks money at a bank for a fixed tenure at a predetermined interest rate. FD rates currently range from 6.5–9% depending on the bank and tenure. Interest is taxed at your income slab rate, and TDS at 10% applies when annual interest exceeds ₹40,000. DICGC insures deposits up to ₹5 lakh per depositor per bank. FD laddering — splitting corpus across multiple tenures — balances liquidity and yield.",
    faq: ["Can I break an FD before maturity? → Yes, but a penalty of 0.5–1% on the interest rate applies. For emergencies, a loan against FD (up to 90% of value) is often cheaper than breaking it.", "Are small finance bank FDs safe for higher rates? → Only up to ₹5 lakh per bank is DICGC-insured. Above that, you carry credit risk — spread across banks for large amounts.", "What is FD laddering? → Split total FD amount across 1-year, 2-year, and 3-year FDs. As each matures, reinvest at the prevailing rate. This gives periodic liquidity and averages out interest rate risk.", "Are Post Office FDs better than bank FDs? → Post Office Time Deposits are backed by the Government of India — safer than bank FDs above ₹5L — and currently offer competitive rates."],
    myths: ["FDs are always the safest option for any amount. → DICGC covers only ₹5 lakh per depositor per bank. Above that, spread across multiple banks.", "FD interest is fully tax-free. → FD interest is fully taxable at your slab rate. For 30% bracket, 7.5% FD yields only 5.25% post-tax — often below inflation.", "Breaking an FD costs a lot. → Penalties are 0.5–1% on the applicable interest rate, not the principal.", "All banks offer the same FD rates. → Rates vary significantly — compare before investing."],
    hi_simple: "FD में एक तय समय के लिए बैंक में पैसे रखें और गारंटीड ब्याज पाएं।",
    hi_normal: "FD में ब्याज आपकी स्लैब दर पर कर योग्य है। DICGC ₹5 लाख प्रति बैंक तक बीमित करता है। FD लेडरिंग से तरलता और अच्छी दर दोनों मिलती है।",
    hi_faq: ["FD तोड़ सकते हैं? → हाँ, 0.5–1% जुर्माना लगता है।", "छोटे बैंक की FD सुरक्षित? → ₹5 लाख तक DICGC से बीमित।", "FD लेडरिंग क्या है? → अलग-अलग अवधियों में FD बनाएं।", "पोस्ट ऑफिस FD बेहतर? → सरकारी गारंटी — बड़े निवेश के लिए अच्छा।"],
    hi_myths: ["FD हमेशा सबसे सुरक्षित। → ₹5 लाख से ऊपर बैंक का क्रेडिट जोखिम।", "FD ब्याज टैक्स-मुक्त। → स्लैब दर पर कर योग्य।", "FD तोड़ना बहुत महंगा। → जुर्माना मूलधन पर नहीं लगता।", "सभी बैंकों की दरें एक जैसी। → दरें काफी अलग होती हैं।"],
  },
  "What is UPI": {
    simple: "UPI lets you send money from your bank account to anyone in seconds using just a mobile number or QR code. No need to know their account number. It's free, works 24 hours a day, and your money stays safely in your own bank — the UPI app is just the interface.",
    normal: "UPI is India's real-time payment infrastructure built by NPCI. It links bank accounts to VPAs (Virtual Payment Addresses like name@bank) and enables instant transfers up to ₹1 lakh per transaction. Over 10 billion transactions happen monthly in India via UPI. Two-factor authentication: device binding plus UPI PIN. UPI Lite enables offline payments below ₹500 without internet. Never share your UPI PIN — you only need it to send money, never to receive.",
    faq: ["Is UPI money stored in the app? → No — your money always stays in your actual bank account. The app is just an interface. If the app closes tomorrow, your money is safe in your bank.", "What is a UPI PIN and when do I use it? → A 4–6 digit code you set during registration. Enter it only when sending money. You never need a PIN to receive money.", "Can I use UPI internationally? → Yes — UPI is accepted in UAE, Singapore, Bhutan, Nepal, Sri Lanka, France, and Mauritius through bilateral agreements.", "What is the difference between UPI and IMPS? → UPI is built on IMPS infrastructure, adding VPA-based addressing, QR codes, and collect requests. Both settle in real time."],
    myths: ["Sharing your UPI ID means someone can take money. → Your UPI ID is safe to share — like sharing your email address. Money leaves only with your PIN.", "Receiving money requires entering your PIN. → You never need a PIN to receive money. Anyone asking you to enter a PIN to 'accept' payment is a fraudster.", "UPI payments can be cancelled after sending. → UPI transfers are instant and final. Always double-check recipient and amount before pressing pay.", "All UPI apps charge transaction fees. → Peer-to-peer UPI transfers are always free for users."],
    hi_simple: "UPI से मोबाइल नंबर या QR से तुरंत पैसे भेजें। पैसे हमेशा आपके बैंक में रहते हैं।",
    hi_normal: "UPI NPCI का रियल-टाइम भुगतान तंत्र है। VPA (name@bank) से तुरंत ट्रांसफर। UPI PIN केवल पैसे भेजने के लिए — कभी साझा न करें।",
    hi_faq: ["क्या UPI ऐप में पैसे रहते हैं? → नहीं — हमेशा बैंक में।", "UPI PIN कब चाहिए? → केवल पैसे भेजते समय।", "विदेश में UPI? → UAE, सिंगापुर, नेपाल आदि में।", "UPI और IMPS में फर्क? → UPI, IMPS पर बना है — VPA और QR के साथ।"],
    hi_myths: ["UPI ID शेयर करने से पैसे चोरी हो सकते हैं। → PIN के बिना पैसे नहीं जा सकते।", "पाने के लिए PIN डालना होता है। → पैसे पाने के लिए PIN नहीं चाहिए।", "गलत ट्रांसफर रद्द हो सकता है। → UPI तुरंत और अंतिम है।", "UPI ट्रांसफर पर शुल्क लगता है। → व्यक्तिगत ट्रांसफर हमेशा मुफ्त।"],
  },
  "Risk and return explained": {
    simple: "Risk and return always go together in investing. Higher potential returns always come with higher risk of loss. A savings account gives low returns but very low risk. Stocks give high potential returns but can fall sharply. Your job as an investor is to find the right balance for your goals and comfort level.",
    normal: "Risk and return are directly related — higher expected returns require accepting higher volatility and potential loss. Risk types: market risk (equity falls), credit risk (bond defaults), liquidity risk (can't sell easily), inflation risk (returns below inflation). Sharpe ratio measures risk-adjusted return: excess return per unit of risk — above 1 is good. Diversification reduces unsystematic (company-specific) risk but cannot eliminate systematic (market-wide) risk.",
    faq: ["How do I know how much risk I can take? → Consider three factors: capacity (financial ability to absorb losses), willingness (psychological comfort with volatility), and need (how much return you actually need).", "Is there such a thing as a risk-free investment? → Government bonds and PPF have near-zero credit risk but carry inflation risk. No investment is entirely risk-free.", "What is the Sharpe ratio? → (Fund return − Risk-free rate) ÷ Standard deviation. Tells you how much extra return per unit of risk. Compare funds in the same category using this.", "Why can't diversification eliminate all risk? → Systematic risks — global recession, interest rate changes, oil shocks — affect all investments simultaneously."],
    myths: ["Higher risk always means higher actual returns. → Higher risk increases the range of outcomes — it means higher potential returns AND higher potential losses.", "Conservative investments are always safer. → Conservative investments have inflation risk — money growing slower than prices destroys real purchasing power over decades.", "Risk can be eliminated through diversification. → Unsystematic risk can be reduced. Systematic risk persists regardless of diversification.", "Gold is risk-free because it always holds value. → Gold price in INR has swung 30–40% in both directions over 12-month periods."],
    hi_simple: "निवेश में जोखिम और रिटर्न हमेशा साथ होते हैं। ज़्यादा रिटर्न = ज़्यादा जोखिम।",
    hi_normal: "शार्प रेशियो जोखिम-समायोजित रिटर्न मापता है — 1 से ऊपर अच्छा। विविधीकरण असंगठित जोखिम घटाता है, बाज़ार जोखिम नहीं।",
    hi_faq: ["जोखिम क्षमता कैसे पता करें? → क्षमता, इच्छा और ज़रूरत — तीनों देखें।", "जोखिम-मुक्त निवेश है? → PPF और सरकारी बॉन्ड — लेकिन महंगाई जोखिम है।", "शार्प रेशियो क्या है? → प्रति जोखिम इकाई अतिरिक्त रिटर्न।", "विविधीकरण सब जोखिम क्यों नहीं हटाता? → बाज़ार जोखिम सब पर एक साथ असर करता है।"],
    hi_myths: ["ज़्यादा जोखिम हमेशा ज़्यादा रिटर्न। → यह संभावना बढ़ाता है, गारंटी नहीं।", "सुरक्षित निवेश हमेशा बेहतर। → महंगाई से कम रिटर्न मूल्य घटाता है।", "विविधीकरण से सब जोखिम खत्म। → बाज़ार जोखिम बना रहता है।", "सोना जोखिम-मुक्त है। → 12 महीनों में 30–40% बदलाव संभव।"],
  },
  "CIBIL score ranges explained": {
    simple: "CIBIL scores run from 300 to 900. Above 750 is excellent — banks offer best rates and approve quickly. 650–750 is good — most loans approved at standard rates. Below 650, getting loans becomes harder. Below 550, most banks reject applications. Paying EMIs and credit card bills on time is the single biggest factor.",
    normal: "CIBIL score bands: 750–900 (Excellent): best rates. 700–749 (Good): most products available. 650–699 (Fair): higher rates. 550–649 (Below Average): limited options. 300–549 (Poor): very few lenders. Five factors: payment history (35%), credit utilisation (30%), credit age (15%), credit mix (10%), new enquiries (10%). One 30-day missed payment can drop a good score by 50–100 points.",
    faq: ["How quickly can I improve a bad score? → Consistent on-time payments and reduced utilisation show meaningful improvement in 6–12 months.", "Does checking my own score hurt it? → No — self-checks are soft inquiries with zero impact. Only lender hard inquiries affect the score.", "What should my credit utilisation be? → Keep total credit card balances below 30% of total credit limit.", "Do all bureaus show the same score? → No — CIBIL, Experian, Equifax, and CRIF each have their own algorithms. Scores differ across bureaus."],
    myths: ["A 700 score gets you the best rates. → Most premium offers require 750+. The difference is significant on a ₹50 lakh home loan over 20 years.", "One missed payment permanently ruins your credit. → Impact fades over time — after 24 months of clean repayment it reduces significantly.", "Income and salary affect your CIBIL score. → Score is based entirely on borrowing and repayment behaviour — not income, job, or wealth.", "Multiple credit cards always hurt your score. → Multiple cards with low balances and on-time payments can actually help by improving utilisation ratio."],
    hi_simple: "CIBIL स्कोर 300 से 900। 750+ बेहतरीन। 650–750 ठीक। 550 से नीचे — कर्ज़ मिलना मुश्किल।",
    hi_normal: "पाँच कारक: भुगतान इतिहास (35%), उपयोग (30%), आयु (15%), मिश्रण (10%), नई जाँच (10%)। एक बार 30-दिन की चूक से स्कोर 50–100 अंक गिर सकता है।",
    hi_faq: ["खराब स्कोर कितनी जल्दी सुधरेगा? → 6–12 महीने नियमित भुगतान से।", "खुद स्कोर चेक करने से नुकसान? → नहीं।", "उपयोग क्या होना चाहिए? → 30% से कम।", "सभी ब्यूरो एक जैसे? → नहीं — अलग-अलग एल्गोरिदम।"],
    hi_myths: ["700 से बेस्ट दरें मिलती हैं। → 750+ चाहिए।", "एक चूक से स्कोर हमेशा खराब। → 24 महीने बाद प्रभाव कम होता है।", "आय स्कोर को प्रभावित करती है। → नहीं — केवल उधार व्यवहार।", "कई कार्ड हमेशा नुकसानदेह। → अच्छे प्रबंधन से स्कोर बेहतर होता है।"],
  },
  "How CIBIL score is calculated": {
    simple: "Your CIBIL score is based on five things: paying loans and credit card bills on time (35% — most important), how much of your credit limit you use (30%), how long you've had credit (15%), whether you have a mix of loan types (10%), and how often you apply for new loans (10%).",
    normal: "CIBIL's algorithm: payment history (35%) — missed payments have the highest impact. Credit utilisation (30%) — keep card balances below 30% of limit. Credit age (15%) — avoid closing old cards. Credit mix (10%) — healthy combination of secured and unsecured. New inquiries (10%) — each application creates a hard inquiry. Score updates monthly from all lenders.",
    faq: ["Fastest way to improve score by 50 points? → Reduce credit card utilisation from 80% to under 30% — this alone can add 50–80 points within two billing cycles.", "Does closing old credit cards help? → No — it reduces available credit (raising utilisation) and shortens average account age. Keep old cards active with small transactions.", "Why did my score drop with on-time payments? → Common causes: new loan application, credit limit reduction by bank, old account closed, or co-borrower account issues.", "How long does a missed payment stay on report? → 7 years from the date of the event, but its weight reduces significantly after 24 months of clean repayment."],
    myths: ["Paying off all debt gets me to 900. → CIBIL 900 requires a long history of diverse credit managed well. Having no active credit can temporarily reduce your score.", "My bank will fix report errors automatically. → Dispute directly at cibil.com. The bureau has 30 days to investigate.", "More credit cards = lower score. → Utilisation and payment history matter, not card count. Multiple cards with low balances and on-time payments can help.", "All bureaus calculate scores the same way. → CIBIL, Experian, Equifax, and CRIF each use their own scoring models."],
    hi_simple: "CIBIL स्कोर: समय पर EMI (35%), क्रेडिट उपयोग (30%), क्रेडिट आयु (15%), मिश्रण (10%), नई अर्जी (10%)।",
    hi_normal: "समय पर भुगतान सबसे महत्वपूर्ण। कार्ड बैलेंस 30% से कम। पुराने कार्ड बंद न करें। स्कोर हर महीने अपडेट होता है।",
    hi_faq: ["50 अंक जल्दी कैसे बढ़ाएं? → क्रेडिट उपयोग 30% से कम करें।", "पुराने कार्ड बंद करने से फायदा? → नहीं — स्कोर घट सकता है।", "समय पर भुगतान के बाद भी क्यों गिरा? → नई अर्जी या क्रेडिट लिमिट कम होना।", "चूक कितने समय रिपोर्ट में? → 7 साल, लेकिन 24 महीने बाद प्रभाव कम।"],
    hi_myths: ["सब कर्ज़ चुकाने से 900 मिलेगा। → अस्थायी रूप से स्कोर घट सकता है।", "बैंक अपने आप सुधार करेगा। → cibil.com पर खुद करना होगा।", "ज़्यादा कार्ड = कम स्कोर। → कम उपयोग और समय पर भुगतान से बेहतर।", "सभी ब्यूरो एक जैसे। → हर ब्यूरो का अपना मॉडल।"],
  },
  "Income tax slabs in India": {
    simple: "In India, income tax works in slabs. Under the new regime for 2024-25: income up to ₹3 lakh is tax-free. ₹3–7 lakh: 5%. ₹7–10 lakh: 10%. ₹10–12 lakh: 15%. ₹12–15 lakh: 20%. Above ₹15 lakh: 30%. If your total income is under ₹7 lakh, a rebate under Section 87A makes your tax zero.",
    normal: "India has two tax regimes. New regime (default): lower rates, standard deduction ₹75,000, employer NPS deduction — no other deductions. Old regime: higher rates but allows 80C (₹1.5L), HRA, home loan interest, 80D, NPS. Break-even: if total deductions exceed ~₹3.75 lakh, old regime usually saves more. A 4% health and education cess applies on tax for all assessees.",
    faq: ["Which regime should I choose? → Calculate tax under both with your actual deductions. Use the IT department's official calculator at incometaxindiaefiling.gov.in.", "What is Section 87A rebate? → Under new regime, if taxable income is ₹7 lakh or below, a rebate of up to ₹25,000 makes total tax zero.", "What is the surcharge above ₹50 lakh? → New regime: 10% on tax for ₹50L–₹1Cr; 15% for ₹1–₹2Cr; 25% above ₹2Cr — on top of basic tax plus 4% cess.", "Can I switch regimes every year? → Salaried individuals can switch at the start of each financial year. Business owners who opt out of new regime are locked in for that year."],
    myths: ["Higher income means proportionally much higher tax on everything. → India's progressive taxation means only income above each threshold is taxed at the higher rate — not the entire income.", "The new regime is always simpler and therefore better. → Simpler doesn't mean lower tax. For individuals with significant deductions, the old regime can save ₹50,000–₹1 lakh more annually.", "TDS deduction means I don't need to file ITR. → TDS doesn't replace ITR filing. ITR is mandatory for all individuals above the basic exemption limit.", "Crossing a tax slab boundary means all income is taxed at the higher rate. → Only income above the boundary attracts the higher rate — tax slabs are marginal, not total."],
    hi_simple: "नई व्यवस्था 2024-25: ₹3 लाख तक शून्य। ₹3–7 लाख: 5%। ₹7–10 लाख: 10%। ₹10–12 लाख: 15%। ₹12–15 लाख: 20%। ₹15 लाख+: 30%। ₹7 लाख तक 87A छूट से शून्य टैक्स।",
    hi_normal: "दो व्यवस्थाएं: नई (कम दरें, कम कटौती) और पुरानी (ज़्यादा कटौतियां)। ₹3.75 लाख से ज़्यादा कटौतियों पर पुरानी बेहतर। सभी पर 4% शिक्षा उपकर।",
    hi_faq: ["कौन सी व्यवस्था चुनें? → दोनों की गणना करें।", "87A छूट क्या है? → ₹7 लाख तक शून्य टैक्स नई व्यवस्था में।", "₹50 लाख पर सरचार्ज? → 10% से शुरू।", "हर साल व्यवस्था बदल सकते हैं? → वेतनभोगी हाँ।"],
    hi_myths: ["ज़्यादा आय पर पूरी आय पर ज़्यादा टैक्स। → केवल उस सीमा से ऊपर की आय पर।", "नई व्यवस्था हमेशा बेहतर। → ज़्यादा कटौतियों के साथ पुरानी बेहतर।", "TDS कटने से ITR ज़रूरी नहीं। → ITR भरना अनिवार्य।", "नई स्लैब पर पूरी आय पर ज़्यादा टैक्स। → केवल उस सीमा से ऊपर की राशि पर।"],
  },
  "Index funds explained": {
    simple: "An index fund automatically copies a market index like the Nifty 50. Instead of a fund manager picking stocks, it just buys all the companies in the index in the same proportion. Very low costs (0.1–0.2% per year), automatic diversification across 50 top companies, and returns that match the market. For most investors, this beats actively managed funds over 10+ years.",
    normal: "Index funds are passively managed mutual funds that replicate a benchmark index. SEBI data shows 70–80% of active large-cap funds underperform their benchmark over 10 years after fees. Index funds pass this advantage via lower expense ratios (0.04–0.2% for direct plans). Key metrics: tracking difference (fund return minus index return — lower is better), expense ratio, and AUM. Nifty 50 and Nifty Next 50 are the most popular index categories in India.",
    faq: ["What's the difference between an index fund and an ETF? → Both track an index. ETFs trade on exchanges like stocks throughout the day. Index funds are bought/sold at end-of-day NAV — simpler for SIP investors.", "What is tracking error? → How much the fund's return deviates from the index. Lower is better. Best Indian index funds maintain tracking difference below 0.1%.", "Nifty 50 or Nifty Next 50? → Nifty 50 is large-cap stability. Nifty Next 50 covers the next 50 — more mid-cap exposure and historically higher returns with more volatility. Many investors hold both in a 70:30 ratio.", "Can index funds lose money? → Yes — they fall when the market falls. During COVID 2020, Nifty 50 fell 38%. However, long-term (10+ year) investors have historically never lost money."],
    myths: ["Index funds are boring and for investors who don't care about returns. → Warren Buffett recommends index funds for most investors because low-cost consistent returns beat most active managers over decades.", "Low NAV index fund is cheaper and better. → NAV level is irrelevant — compare percentage returns and expense ratios, not absolute NAV.", "Index funds can never beat the market. → Correct — but net of fees, active funds don't beat the market either. Index fund delivers market minus ~0.1% fee vs active fund's market minus 1–2%.", "Index funds are only suitable for large investors. → Start SIP with ₹500/month. The low expense ratio advantage compounds significantly even on small amounts over 15–20 years."],
    hi_simple: "इंडेक्स फंड Nifty 50 जैसे सूचकांक की नकल करता है। बहुत कम खर्च (0.1–0.2%), स्वचालित विविधता। अधिकांश निवेशकों के लिए 10+ साल में सक्रिय फंड से बेहतर।",
    hi_normal: "70–80% सक्रिय लार्ज-कैप फंड 10 साल में बेंचमार्क से पीछे। ट्रैकिंग डिफरेंस जितना कम, उतना बेहतर।",
    hi_faq: ["इंडेक्स फंड और ETF में फर्क? → ETF शेयर बाज़ार पर; इंडेक्स फंड NAV पर।", "ट्रैकिंग एरर क्या है? → फंड का रिटर्न इंडेक्स से कितना अलग।", "Nifty 50 या Next 50? → 70:30 में दोनों रखना अच्छा।", "नुकसान हो सकता है? → हाँ, लेकिन 10+ साल में ऐतिहासिक रूप से हमेशा सुधरा।"],
    hi_myths: ["इंडेक्स फंड उबाऊ हैं। → वॉरेन बफेट अधिकांश निवेशकों को यही सुझाते हैं।", "कम NAV = सस्ता। → NAV स्तर अप्रासंगिक है।", "इंडेक्स फंड बाज़ार नहीं हरा सकते। → सही — लेकिन कम खर्च पर बाज़ार जितना रिटर्न ज़्यादातर सक्रिय फंडों से बेहतर।", "बड़े निवेशकों के लिए। → ₹500/माह SIP से शुरू कर सकते हैं।"],
  },
  "How mutual funds work": {
    simple: "A mutual fund collects money from thousands of investors and a professional fund manager invests it in stocks, bonds, or both. Your investment is split into units — each unit represents a tiny ownership of the entire pool. The value of each unit, called NAV (Net Asset Value), changes every day. You can invest a small amount and still own a slice of hundreds of companies.",
    normal: "Mutual funds operate under SEBI regulation. NAV = (Total portfolio market value − liabilities − expenses) ÷ units outstanding, calculated daily after market close. Expense ratio (TER) is deducted daily from the fund's value. Direct plans (no distributor) have 0.5–1% lower TER than regular plans. SEBI's 2021 'Skin in the Game' rule requires fund managers to invest 20% of their take-home salary in their own schemes.",
    faq: ["What happens to my money if the AMC shuts down? → Your money is held in a separate trust — the AMC cannot touch it. SEBI mandates merger with another AMC or redemption at fair value.", "What is the difference between Growth and IDCW options? → Growth: returns reinvested, NAV grows, no tax until redemption. IDCW: periodic payouts, each taxed at slab rate. Growth is more tax-efficient for long-term wealth.", "What is an exit load? → A small fee (typically 1%) charged when you redeem units within a specified period (usually 1 year for equity funds). Designed to discourage very short-term trading.", "What is a Fund of Funds (FoF)? → A FoF invests in other mutual funds. Useful for international fund exposure but has a double layer of expense ratios."],
    myths: ["Mutual funds are like gambling — you can lose everything. → Diversification across 50–100+ companies makes losing everything practically impossible for a well-diversified fund.", "Low NAV fund is cheap and will give better returns. → NAV level has no relationship to future performance. Compare performance history and expense ratio.", "SEBI star ratings guarantee future performance. → Ratings are backward-looking. Use them as a first filter, not the final decision.", "Money is locked in mutual funds. → Most open-ended funds allow redemption on any working day. Money is generally accessible within 2–3 working days."],
    hi_simple: "म्यूचुअल फंड में हज़ारों निवेशकों का पैसा मिलाकर विशेषज्ञ निवेश करता है। हर यूनिट की NAV हर दिन बदलती है।",
    hi_normal: "NAV = (पोर्टफोलियो मूल्य − देनदारियाँ − खर्च) ÷ यूनिट। डायरेक्ट प्लान में 0.5–1% कम TER। फंड मैनेजर अपनी सैलरी का 20% अपने फंड में लगाते हैं।",
    hi_faq: ["AMC बंद होने पर पैसे? → ट्रस्ट में सुरक्षित — SEBI सुनिश्चित करता है।", "Growth और IDCW में फर्क? → Growth में रिटर्न पुनर्निवेशित; IDCW में नियमित भुगतान।", "Exit load क्या है? → जल्दी रिडेम्पशन पर छोटा शुल्क।", "Fund of Funds? → अन्य म्यूचुअल फंड में निवेश — दोहरा खर्च।"],
    hi_myths: ["म्यूचुअल फंड जुआ है। → विविधता से एक साथ सब खोना असंभव।", "कम NAV = बेहतर। → भविष्य के रिटर्न से कोई संबंध नहीं।", "स्टार रेटिंग गारंटी है। → पिछले प्रदर्शन पर आधारित।", "पैसा फँस जाता है। → किसी भी कार्यदिवस पर रिडीम किया जा सकता है।"],
  },
  "EPF withdrawal rules": {
    simple: "Your EPF money can be fully withdrawn when you retire or are unemployed for over two months. Partial withdrawals are allowed for: buying or building a house, children's education or wedding, medical emergencies, or natural disasters. Withdrawals after 5 continuous years of service are completely tax-free.",
    normal: "EPF full withdrawal: at retirement (58 years) or after 2 months unemployment. Partial withdrawal: housing (5+ years service, up to 90% employee share), medical (any time, up to 6 months basic+DA), education/marriage (7+ years, up to 50% employee share). Tax: before 5 years — taxable as income plus 10% TDS. After 5 years: fully tax-free. Always transfer EPF when changing jobs — don't withdraw.",
    faq: ["What is the online EPF withdrawal process? → Log in to EPFO member portal with UAN. Ensure KYC (Aadhaar, PAN, bank account) is updated. Submit Form 31 (partial) or 19+10C (full) online. Claims settle in 5–10 working days.", "What should I do with EPF when I change jobs? → Submit Form 13 online to transfer your previous employer's EPF to the new account. This maintains service continuity and tax-free status. Never withdraw prematurely.", "Can I withdraw before 5 years tax-free? → No — withdrawals before 5 continuous years are fully taxable as income plus 10% TDS.", "What is EPS and can I withdraw it? → EPS holds the employer's 8.33% contribution. Below 10 years service: withdrawable. Above 10 years: you receive monthly pension from age 58 — cannot be withdrawn as lump sum."],
    myths: ["Withdrawing EPF when leaving a job is smart. → Almost always a mistake. EPF earns 8.25% tax-free. Withdrawing before 5 years is fully taxable and destroys years of compounding.", "EPF earns interest after I stop working. → Interest accrues for up to 3 years after last contribution. After 3 years of inactivity, the account becomes inoperative.", "EPF is only for retirement — can't touch it before. → Partial withdrawals for housing, medical, education, and marriage are permitted after specified service durations.", "My employer manages EPF — I don't need to check. → Always verify on the EPFO portal that your employer is depositing contributions monthly."],
    hi_simple: "EPF पूरी निकासी: रिटायरमेंट पर या 2 महीने बेरोज़गारी पर। 5 साल की सेवा के बाद निकासी पूरी तरह कर-मुक्त।",
    hi_normal: "नौकरी बदलते समय EPF ट्रांसफर करें — निकालें नहीं। 5 साल से पहले निकासी पर आयकर और 10% TDS। EPS: 10 साल से कम सेवा पर निकाल सकते हैं।",
    hi_faq: ["ऑनलाइन EPF कैसे निकालें? → EPFO पोर्टल पर UAN से।", "नौकरी बदलने पर? → Form 13 से ट्रांसफर करें।", "5 साल से पहले टैक्स-मुक्त? → नहीं।", "EPS क्या है? → 10 साल से कम पर निकाल सकते; बाद में पेंशन।"],
    hi_myths: ["EPF निकालना समझदारी है। → लगभग हमेशा गलत — ट्रांसफर करें।", "काम बंद होने पर भी ब्याज मिलता है। → 3 साल बाद बंद।", "रिटायरमेंट से पहले नहीं छू सकते। → आंशिक निकासी संभव है।", "नियोक्ता सब संभालता है। → EPFO पोर्टल पर नियमित जाँच करें।"],
  },
  "PPF interest rate and tenure": {
    simple: "PPF (Public Provident Fund) is a government savings scheme with a 15-year lock-in. Currently earns 7.1% per year — completely tax-free. No tax on money you put in, no tax on interest, no tax when you withdraw. You can invest ₹500 to ₹1.5 lakh per year. After 15 years you can extend in 5-year blocks.",
    normal: "PPF offers EEE (Exempt-Exempt-Exempt) tax treatment — 80C deduction on investment, tax-free interest, tax-free maturity. Interest rate reviewed quarterly by the Finance Ministry; has been at 7.1% since April 2020. Interest calculated on lowest balance between 5th and last day of each month — always invest before the 5th to maximise monthly interest. Partial withdrawals from 7th year; loans from 3rd year.",
    faq: ["Can I extend PPF beyond 15 years? → Yes — three options at maturity: (1) Close and withdraw fully tax-free. (2) Extend without deposits — balance earns interest tax-free. (3) Extend in 5-year blocks with continued contributions and 80C eligibility.", "Why invest before the 5th of each month? → PPF interest is calculated on the lowest balance between 5th and last day. Investing on the 1st ensures the full amount earns interest for the entire month.", "What happens to PPF if I become an NRI? → Existing accounts can be maintained until maturity but not extended after maturity. NRIs cannot open new PPF accounts.", "Can I open PPF in my child's name? → Yes, in the parent's name. Combined annual limit of ₹1.5 lakh applies across your PPF and child's PPF with you as guardian."],
    myths: ["PPF rate is fixed and guaranteed for 15 years. → Rate is reviewed quarterly — it has changed 22 times between 2011 and 2024. Plan with a conservative average of 6.5–7.5%.", "PPF must be closed after 15 years. → Extend indefinitely in 5-year blocks — many investors keep it running for 25–30 years.", "PPF is always better than ELSS because it's tax-free. → PPF returns 7.1% (tax-free). ELSS at 12% CAGR after LTCG tax still typically generates more wealth over 15 years.", "You can invest any amount anytime. → Minimum ₹500/year; maximum ₹1.5 lakh/year; maximum 12 deposits per year. Missing a year's minimum makes the account dormant."],
    hi_simple: "PPF 15 साल की सरकारी बचत योजना। 7.1% ब्याज — पूरी तरह कर-मुक्त। सालाना ₹500 से ₹1.5 लाख।",
    hi_normal: "PPF EEE कर लाभ देता है। ब्याज हर तिमाही समीक्षा। हर महीने 5 तारीख से पहले निवेश करें।",
    hi_faq: ["15 साल बाद बढ़ा सकते हैं? → हाँ, 5-5 साल के ब्लॉक में।", "5 तारीख से पहले क्यों? → पूरे महीने का ब्याज मिलता है।", "NRI का PPF? → मौजूदा खाता चला सकते हैं।", "बच्चे के नाम PPF? → हाँ, ₹1.5 लाख संयुक्त सीमा।"],
    hi_myths: ["PPF दर 15 साल के लिए तय। → हर तिमाही बदल सकती है।", "15 साल बाद बंद करना ज़रूरी। → 5-5 साल में बढ़ाते रहें।", "PPF ELSS से हमेशा बेहतर। → ELSS का उच्च रिटर्न दीर्घकाल में ज़्यादा बना सकता है।", "कभी भी जमा करें। → 12 किस्तें और ₹1.5 लाख की सीमा।"],
  },
  "How to start a SIP in India": {
    simple: "To start a SIP: complete KYC once using Aadhaar and PAN. Choose a mutual fund on a direct platform like Kuvera, Zerodha Coin, or MFCentral. Select the fund, monthly amount, and date. Give a bank auto-debit mandate. Your amount gets invested every month automatically. Start with even ₹500/month — the habit matters more than the amount.",
    normal: "SIP setup: (1) Complete KYC once — Aadhaar OTP-based e-KYC on any SEBI-registered platform. (2) Choose direct plan — 0.5–1% lower expense ratio compounds significantly over 15 years. (3) Set SIP date: 2–3 days after salary credit. (4) Enable NACH auto-debit mandate — first deduction may take 20–30 days. (5) Start step-up SIP: increase by 10% annually. A ₹5,000/month SIP stepped up 10% annually for 20 years creates ~3× more corpus than a flat ₹5,000 SIP.",
    faq: ["Can I start with just ₹500/month? → Yes — most equity and debt mutual funds allow ₹500/month minimum. Start small, stay consistent, increase as income grows.", "What if my account doesn't have enough on SIP date? → The instalment is simply skipped for that month with no penalty. Set SIP date 2–3 days after salary credit to ensure funds are always available.", "Which platform — Kuvera, Zerodha Coin, or AMC website? → All three offer direct plans at the same NAV. Kuvera and Coin provide a single dashboard for multiple AMCs — easier to manage.", "What is a step-up SIP? → Automatically increases your monthly amount by a fixed percentage annually. A ₹5,000 SIP stepped up 10% yearly for 20 years creates ~3× more corpus than a flat ₹5,000 SIP."],
    myths: ["Wait for the market to fall before starting SIP. → A SIP's purpose is to remove market timing. Every month you wait is compounding lost. Start today.", "SIP returns are guaranteed. → SIPs are market-linked — returns vary. However, Nifty 50 SIPs have historically delivered 12–14% CAGR over any 10-year period.", "Stop SIP when markets fall — smart risk management. → The opposite is true. Falling markets mean you buy the most units per rupee. Continue through market cycles.", "Need a demat account for SIP. → Only ETFs need demat. Regular mutual fund SIPs need only a bank account and completed KYC."],
    hi_simple: "SIP: KYC पूरा करें, Kuvera या Coin पर फंड चुनें, राशि और तारीख तय करें, बैंक ऑटो-डेबिट दें। हर महीने अपने आप निवेश।",
    hi_normal: "डायरेक्ट प्लान चुनें — 0.5–1% कम खर्च। वेतन के 2–3 दिन बाद SIP तारीख रखें। हर साल 10% SIP बढ़ाएं।",
    hi_faq: ["₹500/माह से SIP? → हाँ।", "बैलेंस न हो तो? → उस महीने की SIP छूट — कोई जुर्माना नहीं।", "Kuvera, Coin या AMC? → तीनों एक जैसे NAV — Kuvera/Coin बेहतर डैशबोर्ड।", "स्टेप-अप SIP क्या है? → हर साल तय प्रतिशत से SIP बढ़ाना।"],
    hi_myths: ["बाज़ार गिरने पर SIP शुरू करूँगा। → आज शुरू करें।", "SIP रिटर्न गारंटीड। → बाज़ार से जुड़े हैं।", "बाज़ार गिरने पर SIP रोकें। → यही सबसे सस्ते यूनिट खरीदने का समय।", "SIP के लिए डीमैट चाहिए। → म्यूचुअल फंड SIP के लिए ज़रूरी नहीं।"],
  },
  "How much you need to retire": {
  simple: "Estimate retirement by taking your current monthly expenses, adjusting for inflation, and multiplying by 25–30. Example: ₹50,000/month today may need ₹4–5 crore after 25 years.",
  normal: "Step 1: Calculate current monthly expenses (exclude EMIs). Step 2: Adjust for inflation (~6%). ₹50,000 today becomes ~₹1.6 lakh/month in 25 years. Step 3: Multiply annual expenses by 25–30 (safe withdrawal rule). Required corpus ≈ ₹4–5 crore. Starting early reduces required monthly investment.",
  faq: ["Is 1 crore enough to retire? → Usually no for long retirement.", "What inflation rate should I assume? → 5–7% for India.", "What is the 25x rule? → You need 25× annual expenses.", "Should I include rent? → Yes if applicable."],
  myths: ["Retirement expenses reduce drastically. → Often increase due to healthcare.", "FD returns are enough. → May not beat inflation.", "Children will support me. → Not reliable planning.", "I can plan later. → Delays increase burden."],
  hi_simple: "रिटायरमेंट के लिए खर्च × 25–30 करें। ₹50,000/माह = लगभग ₹4–5 करोड़।",
  hi_normal: "आज के खर्च पर 6% महंगाई जोड़ें और सालाना खर्च का 25–30 गुना कॉर्पस बनाएं।",
  hi_faq: ["1 करोड़ काफी है? → नहीं।", "इन्फ्लेशन कितना? → 5–7%।", "25x नियम क्या है? → सालाना खर्च × 25।", "किराया शामिल करें? → हाँ।"],
  hi_myths: ["खर्च कम हो जाएगा। → नहीं।", "FD काफी है। → नहीं।", "बच्चे संभालेंगे। → जोखिम भरा।", "बाद में प्लान करेंगे। → गलत।"]
},

"How to apply 50-30-20 to your salary": {
  simple: "Split salary into 50% needs (rent, food), 30% wants (lifestyle), and 20% savings (SIP, emergency fund). Adjust if rent is high.",
  normal: "50-30-20 rule: 50% essentials (rent, EMI, groceries), 30% wants (travel, eating out), 20% savings/investments. If rent is high, reduce wants but maintain at least 15–20% savings. Automate savings right after salary credit.",
  faq: ["What if rent is 60%? → Cut wants, maintain savings.", "Does EMI count in needs? → Yes.", "Where should 20% go? → SIP, EPF, emergency fund.", "Can I modify ratios? → Yes, it's flexible."],
  myths: ["Rule must be exact. → Flexible guideline.", "Savings can wait. → Always save first.", "Wants are unnecessary. → Balance matters.", "Only high earners can follow this. → Works for all incomes."],
  hi_simple: "50% जरूरत, 30% चाहत, 20% बचत रखें।",
  hi_normal: "जरूरी खर्च 50%, लाइफस्टाइल 30%, निवेश 20% रखें। पहले बचत करें।",
  hi_faq: ["किराया ज्यादा है? → चाहत कम करें।", "EMI कहाँ? → जरूरत में।", "20% कहाँ लगाएं? → SIP।", "रूल बदल सकते हैं? → हाँ।"],
  hi_myths: ["रूल फिक्स है। → नहीं।", "बाद में बचत करेंगे। → गलत।", "चाहत बेकार है। → नहीं।", "कम इनकम में नहीं होगा। → होगा।"]
},

"How to build a zero-based budget": {
  simple: "Give every rupee a job. Income minus expenses should equal zero by assigning money to needs, savings, and spending.",
  normal: "Zero-based budgeting means allocating your full income across categories: needs, savings, investments, and wants. Start with fixed expenses, then savings, then variable costs. Income – expenses = 0. Track monthly and adjust.",
  faq: ["Does zero mean no savings? → Savings are included.", "Is it hard? → Easy after setup.", "Best tools? → Excel, Walnut.", "What if income varies? → Use minimum expected income."],
  myths: ["Zero means spending everything. → It means planning everything.", "Only for strict people. → Anyone can use.", "Too complex. → Simple system.", "Not needed if income is high. → Still useful."],
  hi_simple: "हर रुपये को काम दें — आय - खर्च = 0।",
  hi_normal: "आय को जरूरत, बचत और खर्च में बाँटें और हर रुपये प्लान करें।",
  hi_faq: ["Zero मतलब बचत नहीं? → बचत शामिल है।", "मुश्किल है? → नहीं।", "कौन से ऐप? → Excel।", "इनकम बदलती है? → न्यूनतम लें।"],
  hi_myths: ["पैसा खत्म करना है। → नहीं।", "सिर्फ सख्त लोगों के लिए। → नहीं।", "बहुत कठिन है। → नहीं।", "जरूरत नहीं। → है।"]
},

"How to calculate retirement corpus": {
  simple: "Take your monthly expenses, adjust for inflation, and multiply by 25–30 to estimate required retirement corpus.",
  normal: "Step 1: Current expenses. Step 2: Adjust for inflation (~6%). Step 3: Multiply annual expenses by 25–30. Example: ₹50,000 today → ₹1.6 lakh future → corpus ~₹4–5 crore.",
  faq: ["Why 25–30 times? → Based on 4% withdrawal rule.", "Include healthcare? → Yes.", "Early retirement? → Use 30–35x.", "Include rent? → Yes."],
  myths: ["1 crore is enough. → Usually not.", "Inflation is negligible. → Major impact.", "FD is enough. → Not always.", "Late planning is fine. → Risky."],
  hi_simple: "खर्च × 25–30 = रिटायरमेंट कॉर्पस।",
  hi_normal: "महंगाई जोड़कर सालाना खर्च का 25–30 गुना रखें।",
  hi_faq: ["25–30 क्यों? → 4% नियम।", "मेडिकल शामिल करें? → हाँ।", "जल्दी रिटायर? → ज्यादा रखें।", "किराया? → हाँ।"],
  hi_myths: ["1 करोड़ काफी है। → नहीं।", "महंगाई कम है। → गलत।", "FD काफी है। → नहीं।", "बाद में प्लान करेंगे। → गलत।"]
},

"How to check EPF balance": {
  simple: "Check EPF via UMANG app, EPFO portal, SMS (7738299899), or missed call (9966044425) using your UAN.",
  normal: "Ways: (1) UMANG app login, (2) EPFO passbook portal, (3) SMS 'EPFOHO UAN' to 7738299899, (4) missed call 9966044425. Ensure UAN is active and Aadhaar linked.",
  faq: ["Is it real-time? → Updated monthly.", "UAN required? → Yes.", "Is SMS free? → Charges may apply.", "UAN inactive? → Activate online."],
  myths: ["Only employer can check. → You can anytime.", "Need office visit. → Fully online.", "Always real-time. → Slight delay.", "Multiple UAN ok. → Not allowed."],
  hi_simple: "UMANG, EPFO साइट या SMS से बैलेंस देखें।",
  hi_normal: "UAN से लॉगिन करें या SMS/मिस्ड कॉल से बैलेंस चेक करें।",
  hi_faq: ["रियल टाइम? → नहीं।", "UAN जरूरी? → हाँ।", "SMS फ्री? → नहीं हमेशा।", "UAN एक्टिव? → करें।"],
  hi_myths: ["सिर्फ कंपनी देखती है। → गलत।", "ऑफिस जाना पड़ेगा। → नहीं।", "हमेशा अपडेट। → नहीं।", "एक से ज्यादा UAN ठीक। → गलत।"]
},
"How to choose between asset classes": {
  simple: "Pick based on goal and time: equity for long-term growth, debt for stability, and gold for diversification.",
  normal: "Asset allocation depends on time horizon and risk. Equity (10+ years) for growth, debt (0–5 years) for stability, gold (5–10%) for diversification. Example: 25-year-old → 70% equity, 20% debt, 10% gold. Rebalance yearly.",
  faq: ["Is equity always best? → Only for long-term.", "Why include gold? → Hedge against uncertainty.", "What is rebalancing? → Adjust allocation yearly.", "Can I skip debt? → Risk increases."],
  myths: ["Put everything in equity. → Risky.", "Gold gives high returns. → Mainly hedge.", "Debt is useless. → Provides stability.", "Allocation never changes. → Should adjust."],
  hi_simple: "इक्विटी = ग्रोथ, डेट = सुरक्षा, गोल्ड = संतुलन।",
  hi_normal: "लक्ष्य के अनुसार इक्विटी, डेट और गोल्ड का मिश्रण रखें।",
  hi_faq: ["इक्विटी हमेशा सही? → लंबी अवधि में।", "गोल्ड क्यों? → सुरक्षा।", "रीबैलेंस क्या है? → सालाना।", "डेट छोड़ सकते हैं? → नहीं।"],
  hi_myths: ["सब इक्विटी में डालो। → गलत।", "गोल्ड ज्यादा देता है। → नहीं।", "डेट बेकार है। → नहीं।", "बदलना नहीं चाहिए। → चाहिए।"]
},

"How to claim TDS refund": {
  simple: "File your ITR on incometax.gov.in. If excess tax is deducted, it is refunded automatically to your bank account.",
  normal: "Steps: (1) Collect Form 16/26AS, (2) file ITR online, (3) verify using Aadhaar OTP. If TDS exceeds tax liability, refund is credited in 2–6 weeks to your bank account.",
  faq: ["Separate application needed? → No.", "Where is refund credited? → Linked bank account.", "How to track? → Income tax portal.", "Delay? → Raise grievance."],
  myths: ["Refund comes without filing. → No.", "CA required. → Not for simple cases.", "Instant refund. → Takes time.", "Wrong bank details ok. → Causes delay."],
  hi_simple: "ITR फाइल करें — ज्यादा टैक्स कटे तो रिफंड मिलेगा।",
  hi_normal: "Form 16 देखें, ITR फाइल करें, OTP से verify करें — रिफंड अपने आप आएगा।",
  hi_faq: ["अलग से अप्लाई? → नहीं।", "पैसा कहाँ? → बैंक में।", "स्टेटस? → पोर्टल पर।", "देरी? → शिकायत करें।"],
  hi_myths: ["बिना फाइलिंग रिफंड। → नहीं।", "CA जरूरी। → नहीं।", "तुरंत मिलेगा। → नहीं।", "गलत बैंक चलेगा। → नहीं।"]
},

"How to claim vehicle insurance": {
  simple: "Inform insurer immediately, take photos, file claim, and repair via cashless garage if available.",
  normal: "Steps: (1) Inform insurer within 24 hours, (2) take photos, (3) file claim, (4) surveyor inspects, (5) repair via network garage (cashless) or reimbursement. Submit RC, DL, policy.",
  faq: ["What is cashless claim? → Insurer pays garage directly.", "Repair before claim? → No.", "Documents needed? → RC, DL, policy.", "Time taken? → Few days to weeks."],
  myths: ["Small damages don’t need claim. → Depends.", "Any garage is cashless. → Only network.", "All benefits lost after claim. → Only NCB affected.", "Delay is fine. → Must inform quickly."],
  hi_simple: "इंश्योरर को तुरंत बताएं, फोटो लें, क्लेम करें।",
  hi_normal: "24 घंटे में सूचना दें, सर्वे करवाएं, कैशलेस गैराज से क्लेम लें।",
  hi_faq: ["कैशलेस क्या है? → कंपनी पेमेंट करती है।", "पहले रिपेयर? → नहीं।", "डॉक्यूमेंट? → RC, DL।", "समय? → कुछ दिन।"],
  hi_myths: ["छोटा नुकसान क्लेम नहीं। → निर्भर करता है।", "हर गैराज कैशलेस। → नहीं।", "सब बेनिफिट खत्म। → नहीं।", "देरी ठीक है। → नहीं।"]
},

"How to evaluate a mutual fund": {
  simple: "Check long-term returns, expense ratio, and consistency instead of short-term performance.",
  normal: "Look at 5–10 year returns vs benchmark, expense ratio (lower is better), consistency, fund size, and fund manager track record. Prefer direct plans to save 0.5–1% yearly.",
  faq: ["Is past performance important? → Yes long-term.", "Good expense ratio? → Below 1%.", "Top-ranked funds best? → Not always.", "NAV important? → No."],
  myths: ["Highest return fund is best. → Risky.", "Low NAV means cheap. → Wrong.", "New funds perform better. → Not proven.", "Switch frequently. → Hurts compounding."],
  hi_simple: "रिटर्न, खर्च और स्थिरता देखें।",
  hi_normal: "लंबी अवधि का रिटर्न और कम expense ratio देखें।",
  hi_faq: ["पुराना प्रदर्शन? → हाँ।", "अच्छा खर्च? → कम।", "टॉप फंड? → जरूरी नहीं।", "NAV जरूरी? → नहीं।"],
  hi_myths: ["सबसे ज्यादा रिटर्न सही। → गलत।", "कम NAV अच्छा। → गलत।", "नए फंड बेहतर। → नहीं।", "बार-बार बदलें। → गलत।"]
},

"How to file ITR online": {
  simple: "Login to incometax.gov.in, fill your details, submit the return, and verify using Aadhaar OTP.",
  normal: "Steps: (1) Login using PAN, (2) choose ITR form (ITR-1 for salaried), (3) verify pre-filled data, (4) add deductions, (5) submit and e-verify via Aadhaar OTP. Takes ~20–30 minutes.",
  faq: ["Which form to use? → ITR-1 for most salaried.", "Is CA needed? → Not for simple returns.", "What is e-verify? → OTP verification.", "Last date? → Usually July 31."],
  myths: ["Only rich file ITR. → Wrong.", "Filing is complex. → Simple.", "Refund without filing. → No.", "Mistakes cause penalty. → Can revise."],
  hi_simple: "लॉगिन करें, फॉर्म भरें, OTP से verify करें।",
  hi_normal: "ITR-1 चुनें, डेटा चेक करें, submit करें और verify करें।",
  hi_faq: ["कौन सा फॉर्म? → ITR-1।", "CA जरूरी? → नहीं।", "e-verify? → OTP।", "लास्ट डेट? → 31 जुलाई।"],
  hi_myths: ["सिर्फ अमीर लोग फाइल करते हैं। → गलत।", "मुश्किल है। → नहीं।", "बिना फाइलिंग रिफंड। → नहीं।", "गलती = जुर्माना। → नहीं।"]
},
"How to grow your income over time": {
  simple: "Increase income by upgrading skills, switching jobs strategically, and building side income instead of relying only on yearly increments.",
  normal: "Grow income by: (1) learning high-demand skills (tech, data, sales), (2) switching jobs every 2–3 years for 20–40% hikes, (3) building side income, (4) negotiating salary, and (5) investing. Income growth has bigger impact than cutting expenses.",
  faq: ["Is job switching necessary? → Often fastest way to grow income.", "Which skills pay more? → Tech, data, finance, sales.", "Is side income important? → Yes for stability.", "How often to switch? → 2–3 years."],
  myths: ["Loyalty gives highest salary. → Market pays more.", "Promotions are enough. → Switching is faster.", "Side income is risky. → Can be stable.", "Degrees matter most. → Skills matter more."],
  hi_simple: "स्किल बढ़ाओ, जॉब बदलो, साइड इनकम बनाओ।",
  hi_normal: "नई स्किल सीखें, हर 2–3 साल में जॉब बदलें और साइड इनकम बनाएं।",
  hi_faq: ["जॉब बदलना जरूरी? → हाँ।", "कौन सी स्किल? → टेक/डेटा।", "साइड इनकम? → हाँ।", "कितने साल? → 2–3।"],
  hi_myths: ["लॉयल्टी से सैलरी बढ़ती है। → नहीं।", "प्रमोशन काफी है। → नहीं।", "साइड इनकम risky है। → नहीं।", "डिग्री जरूरी है। → स्किल ज्यादा जरूरी।"]
},

"How to identify investment fraud": {
  simple: "If returns are guaranteed or unusually high, it is likely fraud. Always verify SEBI registration before investing.",
  normal: "Red flags: (1) guaranteed high returns, (2) urgency to invest, (3) unregistered advisors, (4) unclear business model, (5) referral commissions. Always verify SEBI registration and never share OTPs.",
  faq: ["Where to verify? → SEBI website.", "Are WhatsApp tips safe? → Mostly scams.", "What is Ponzi? → Old investors paid using new money.", "Trust friends blindly? → Verify independently."],
  myths: ["High returns mean good investment. → Often scam.", "If many people invested, it's safe. → Not true.", "Office presence means legit. → No.", "Quick profits are normal. → Rare."],
  hi_simple: "गारंटीड रिटर्न = फ्रॉड। SEBI चेक करें।",
  hi_normal: "ज्यादा रिटर्न, जल्दी निवेश दबाव, बिना रजिस्ट्रेशन = खतरा।",
  hi_faq: ["कहाँ चेक करें? → SEBI।", "WhatsApp टिप्स? → फ्रॉड।", "Ponzi क्या है? → नया पैसा पुरानों को।", "दोस्तों पर भरोसा? → जांचें।"],
  hi_myths: ["ज्यादा रिटर्न अच्छा। → नहीं।", "सब निवेश कर रहे हैं तो सुरक्षित। → नहीं।", "ऑफिस है तो सही। → नहीं।", "जल्दी पैसा बनता है। → नहीं।"]
},

"How to manage business cash flow": {
  simple: "Track money coming in and going out, keep a buffer, and ensure expenses are lower than inflows.",
  normal: "Manage cash flow by: (1) tracking inflows/outflows weekly, (2) maintaining 3–6 months buffer, (3) speeding up receivables, (4) delaying non-critical payments, and (5) separating personal and business accounts.",
  faq: ["What is cash flow? → Money movement in/out.", "Why buffer? → Handle delays.", "Receivables important? → Yes.", "Separate account needed? → Yes."],
  myths: ["Profit means good cash flow. → Not always.", "Cash flow doesn’t matter. → Critical.", "Growth solves cash issues. → Can worsen.", "One account is fine. → Causes confusion."],
  hi_simple: "आने-जाने वाला पैसा ट्रैक करें और बफर रखें।",
  hi_normal: "इनफ्लो-आउटफ्लो ट्रैक करें, 3–6 महीने का बफर रखें, पेमेंट मैनेज करें।",
  hi_faq: ["कैश फ्लो क्या है? → पैसा आना-जाना।", "बफर क्यों? → सुरक्षा।", "रिसीवेबल्स? → जरूरी।", "अलग अकाउंट? → हाँ।"],
  hi_myths: ["प्रॉफिट = अच्छा कैश फ्लो। → नहीं।", "जरूरी नहीं। → जरूरी है।", "ग्रोथ से ठीक होगा। → नहीं।", "एक अकाउंट ठीक है। → नहीं।"]
},

"How to manage variable income": {
  simple: "Base your budget on your lowest monthly income and save extra during high-income months.",
  normal: "Steps: (1) calculate average and minimum income, (2) budget using minimum, (3) build 6–12 month emergency fund, (4) save surplus during high months, (5) smooth expenses across months.",
  faq: ["Which income to budget on? → Minimum.", "Emergency fund size? → 6–12 months.", "What about good months? → Save more.", "Is SIP possible? → Yes with flexibility."],
  myths: ["Budgeting not possible. → It is.", "Spend more in high months. → Save more.", "No need for emergency fund. → Essential.", "Income must be fixed. → Not required."],
  hi_simple: "कम से कम इनकम पर बजट बनाएं और ज्यादा महीनों में बचत करें।",
  hi_normal: "मिनिमम इनकम पर खर्च तय करें, 6–12 महीने का फंड बनाएं।",
  hi_faq: ["किस पर बजट? → कम इनकम।", "फंड कितना? → 6–12 महीने।", "अच्छे महीने? → बचत करें।", "SIP? → हाँ।"],
  hi_myths: ["बजट नहीं हो सकता। → हो सकता है।", "ज्यादा महीने में खर्च करें। → बचत करें।", "फंड जरूरी नहीं। → जरूरी है।", "फिक्स इनकम चाहिए। → नहीं।"]
},

"How to maximise savings account interest": {
  simple: "Keep money in high-interest savings accounts and avoid idle cash in low-interest accounts.",
  normal: "Maximise interest by: (1) choosing banks with higher rates (3–7%), (2) maintaining required balance slabs, (3) using sweep FD facility, (4) avoiding idle funds in low-interest accounts.",
  faq: ["Typical interest rate? → 2.5–7%.", "What is sweep FD? → Auto FD for extra balance.", "Safe? → Yes for banks.", "Tax applicable? → Yes."],
  myths: ["All banks give same interest. → No.", "Savings interest is tax-free. → Taxable.", "No need to optimise. → Impacts returns.", "Cash is better. → No returns."],
  hi_simple: "ज्यादा ब्याज देने वाले बैंक चुनें और पैसा खाली न रखें।",
  hi_normal: "उच्च ब्याज खाते, sweep FD और बैलेंस मैनेजमेंट से रिटर्न बढ़ाएं।",
  hi_faq: ["रेट कितना? → 2.5–7%。", "Sweep FD? → ऑटो FD।", "सुरक्षित? → हाँ।", "टैक्स? → लगता है।"],
  hi_myths: ["सब बैंक समान हैं। → नहीं।", "टैक्स नहीं लगता। → लगता है।", "ऑप्टिमाइज जरूरी नहीं। → जरूरी है।", "कैश बेहतर है। → नहीं।"]
},

"How to protect from SIM swap": {
  simple: "Never share OTPs, avoid unknown links, and contact your telecom provider immediately if your SIM stops working suddenly.",
  normal: "Protection steps: (1) never share OTP or PIN, (2) enable SIM lock, (3) avoid suspicious links, (4) monitor sudden network loss, (5) immediately contact telecom operator if SIM stops working unexpectedly.",
  faq: ["What is SIM swap? → Fraudster takes control of your number.", "Signs? → No network suddenly.", "What to do? → Contact provider immediately.", "Can banks be affected? → Yes."],
  myths: ["OTP sharing is safe. → Never share.", "Only tech users targeted. → Anyone can be.", "Rare fraud. → Increasing.", "Delay is fine. → Immediate action needed."],
  hi_simple: "OTP शेयर न करें, SIM बंद हो तो तुरंत ऑपरेटर से संपर्क करें।",
  hi_normal: "OTP न दें, suspicious लिंक से बचें और नेटवर्क गायब हो तो तुरंत रिपोर्ट करें।",
  hi_faq: ["SIM swap क्या है? → नंबर चोरी।", "संकेत? → नेटवर्क गायब।", "क्या करें? → तुरंत संपर्क।", "बैंक खतरे में? → हाँ।"],
  hi_myths: ["OTP देना सुरक्षित। → नहीं।", "सिर्फ टेक लोगों को होता है। → नहीं।", "कम होता है। → बढ़ रहा है।", "देरी ठीक है। → नहीं।"]
},

"How to read annual report basics": {
  simple: "Focus on revenue, profit, debt, and management commentary to understand company performance.",
  normal: "Key sections: (1) financials (revenue, profit, margins), (2) balance sheet (assets, debt), (3) cash flow, (4) management discussion, (5) risks. Look for consistent growth and manageable debt.",
  faq: ["Most important section? → Financials + cash flow.", "What is red flag? → Rising debt, falling profit.", "Is long report needed fully? → Focus key parts.", "Why read it? → Better investment decisions."],
  myths: ["Only experts can read. → Anyone can learn.", "Profit alone matters. → Cash flow matters too.", "Long report useless. → Valuable insights.", "Numbers always tell full story. → Context matters."],
  hi_simple: "रेवेन्यू, प्रॉफिट, कर्ज और मैनेजमेंट नोट्स देखें।",
  hi_normal: "फाइनेंशियल, बैलेंस शीट, कैश फ्लो और रिस्क सेक्शन पर ध्यान दें।",
  hi_faq: ["सबसे जरूरी? → फाइनेंशियल।", "रेड फ्लैग? → कर्ज बढ़ना।", "पूरा पढ़ना जरूरी? → मुख्य भाग।", "क्यों पढ़ें? → बेहतर निवेश।"],
  hi_myths: ["सिर्फ एक्सपर्ट पढ़ सकते हैं। → नहीं।", "प्रॉफिट ही सब है। → नहीं।", "लंबा है बेकार। → नहीं।", "नंबर ही सब बताते हैं। → नहीं।"]
},

"How to read mutual fund factsheet": {
  simple: "Check returns, expense ratio, portfolio allocation, and risk level before investing.",
  normal: "Key metrics: (1) returns vs benchmark, (2) expense ratio, (3) asset allocation, (4) top holdings, (5) risk indicators. Look for consistency and alignment with your goals.",
  faq: ["Where to find? → AMC website.", "Expense ratio important? → Yes.", "Top holdings matter? → Yes.", "Risk level? → Must check."],
  myths: ["Only returns matter. → No.", "All funds similar. → No.", "Factsheet too complex. → Easy to learn.", "Ignore risk. → Dangerous."],
  hi_simple: "रिटर्न, खर्च और पोर्टफोलियो देखें।",
  hi_normal: "रिटर्न, expense ratio, holdings और risk level समझें।",
  hi_faq: ["कहाँ मिलेगा? → AMC साइट।", "खर्च जरूरी? → हाँ।", "होल्डिंग्स? → हाँ।", "रिस्क? → जरूरी।"],
  hi_myths: ["सिर्फ रिटर्न देखें। → गलत।", "सब फंड समान हैं। → नहीं।", "मुश्किल है। → नहीं।", "रिस्क नजरअंदाज करें। → गलत।"]
},

"How to report fraud to cybercrime": {
  simple: "Report fraud immediately on cybercrime.gov.in or call 1930 to block further loss.",
  normal: "Steps: (1) Call 1930 immediately for financial fraud, (2) report on cybercrime.gov.in, (3) provide transaction details, (4) inform your bank. Quick action increases chances of recovery.",
  faq: ["Helpline number? → 1930.", "Website? → cybercrime.gov.in.", "Time importance? → Immediate.", "Can money be recovered? → Possible if quick."],
  myths: ["Small fraud not worth reporting. → Always report.", "Recovery impossible. → Sometimes possible.", "Delay is fine. → Reduces chances.", "Bank alone handles it. → You must report."],
  hi_simple: "1930 पर कॉल करें या cybercrime.gov.in पर रिपोर्ट करें।",
  hi_normal: "तुरंत रिपोर्ट करें और बैंक को भी सूचित करें। जल्दी कार्रवाई जरूरी है।",
  hi_faq: ["नंबर? → 1930।", "वेबसाइट? → cybercrime.gov.in।", "समय जरूरी? → हाँ।", "पैसा मिलेगा? → हो सकता है।"],
  hi_myths: ["छोटा फ्रॉड छोड़ दें। → नहीं।", "पैसा नहीं मिलेगा। → मिल सकता है।", "देरी ठीक है। → नहीं।", "सिर्फ बैंक करेगा। → नहीं।"]
},

"How to stop borrowing more debt": {
  simple: "Stop using credit temporarily, focus on paying existing loans, and build a budget to avoid new borrowing.",
  normal: "Steps: (1) pause new loans/credit cards, (2) list all debts, (3) follow snowball or avalanche method, (4) create strict budget, (5) build emergency fund to avoid future borrowing.",
  faq: ["Snowball vs avalanche? → Snowball: smallest first, Avalanche: highest interest first.", "Should I close cards? → Control usage first.", "Emergency fund needed? → Yes.", "How long to be debt-free? → Depends on plan."],
  myths: ["Minimum payment is enough. → Keeps debt growing.", "More loans solve debt. → Worsens problem.", "Ignore small debts. → Adds up.", "Debt is normal always. → Should be controlled."],
  hi_simple: "नया कर्ज लेना बंद करें और पुराना चुकाएं।",
  hi_normal: "सभी कर्ज लिस्ट करें, प्लान बनाएं और बजट फॉलो करें।",
  hi_faq: ["Snowball क्या है? → छोटा पहले।", "कार्ड बंद करें? → पहले कंट्रोल करें।", "फंड जरूरी? → हाँ।", "समय? → प्लान पर निर्भर।"],
  hi_myths: ["मिनिमम पेमेंट काफी है। → नहीं।", "और कर्ज लो। → गलत।", "छोटा कर्ज छोड़ दें। → गलत।", "कर्ज सामान्य है। → कंट्रोल जरूरी।"]
},
"How to use net banking safely": {
  simple: "Use strong passwords, enable two-factor authentication, and avoid logging in on public Wi-Fi or unknown devices.",
  normal: "Stay safe by: (1) using strong unique passwords, (2) enabling 2FA/OTP, (3) avoiding public Wi-Fi, (4) logging out after use, (5) never clicking suspicious links, and (6) checking URL before login.",
  faq: ["Is public Wi-Fi safe? → No.", "What is 2FA? → Extra login security via OTP.", "Should I save passwords? → Avoid on shared devices.", "How to check genuine site? → Look for HTTPS."],
  myths: ["Banking apps are always safe. → Depends on usage.", "OTP sharing is safe. → Never share.", "Antivirus alone protects. → Not enough.", "Phishing is rare. → Very common."],
  hi_simple: "मजबूत पासवर्ड रखें और OTP शेयर न करें।",
  hi_normal: "2FA ऑन रखें, पब्लिक Wi-Fi से बचें और suspicious लिंक न खोलें।",
  hi_faq: ["पब्लिक Wi-Fi सुरक्षित? → नहीं।", "2FA क्या है? → OTP सुरक्षा।", "पासवर्ड सेव करें? → नहीं।", "साइट कैसे पहचानें? → HTTPS।"],
  hi_myths: ["ऐप हमेशा सुरक्षित है। → नहीं।", "OTP शेयर करना ठीक है। → नहीं।", "एंटीवायरस काफी है। → नहीं।", "फिशिंग कम होती है। → नहीं।"]
},

"How to use rule of 72": {
  simple: "Divide 72 by your return rate to estimate how many years it takes to double your money.",
  normal: "Rule of 72: Years to double = 72 ÷ interest rate. Example: at 12% return, money doubles in 6 years. Useful for quick estimation of investment growth or inflation impact.",
  faq: ["Is it exact? → Approximate.", "Works for all returns? → Best for 6–15%.", "Can it measure inflation? → Yes.", "Useful for FD? → Yes."],
  myths: ["Gives exact results. → Approximate only.", "Only for stocks. → Works for all returns.", "Not useful. → Very practical.", "Complex formula. → Very simple."],
  hi_simple: "72 ÷ ब्याज दर = पैसा दोगुना होने का समय।",
  hi_normal: "12% रिटर्न पर पैसा ~6 साल में दोगुना होता है (72 नियम)।",
  hi_faq: ["सटीक है? → नहीं।", "किस पर काम करता है? → 6–15%।", "इन्फ्लेशन? → हाँ।", "FD में? → हाँ।"],
  hi_myths: ["एकदम सही है। → नहीं।", "सिर्फ शेयर के लिए। → नहीं।", "बेकार है। → नहीं।", "मुश्किल है। → नहीं।"]
},

"Inflation impact on retirement planning": {
  simple: "Inflation reduces purchasing power, so your future expenses will be much higher than today.",
  normal: "At 6% inflation, expenses double in ~12 years. ₹50,000 today becomes ~₹1.6 lakh in 25 years. Ignoring inflation leads to underestimating retirement needs. Always factor inflation in planning.",
  faq: ["Typical inflation? → 5–7%.", "Does inflation affect all expenses? → Yes, especially healthcare.", "Can investments beat inflation? → Equity often does.", "Should I ignore it? → Never."],
  myths: ["Inflation is small. → Huge long-term impact.", "FD beats inflation. → Often not.", "Fixed corpus is enough. → Needs adjustment.", "Only food prices rise. → All costs rise."],
  hi_simple: "महंगाई से भविष्य के खर्च बहुत बढ़ जाते हैं।",
  hi_normal: "6% महंगाई पर खर्च ~12 साल में दोगुना हो जाता है।",
  hi_faq: ["महंगाई कितनी? → 5–7%。", "सब पर असर? → हाँ।", "इक्विटी मदद करती है? → हाँ।", "इग्नोर करें? → नहीं।"],
  hi_myths: ["महंगाई कम है। → नहीं।", "FD काफी है। → नहीं।", "फिक्स पैसा काफी। → नहीं।", "सिर्फ खाना महंगा होता है। → नहीं।"]
},

"Invoice management tips": {
  simple: "Track all invoices, follow up regularly, and ensure timely payments to maintain cash flow.",
  normal: "Best practices: (1) issue invoices promptly, (2) set clear payment terms, (3) track due dates, (4) follow up regularly, (5) use invoicing tools, (6) separate personal and business accounts.",
  faq: ["Why track invoices? → Ensures timely payments.", "Best tools? → Zoho, Excel.", "Late payments? → Follow up.", "Cash vs credit? → Prefer faster payments."],
  myths: ["Invoices are optional. → Mandatory.", "Follow-ups are rude. → Necessary.", "Manual tracking is fine. → Error-prone.", "Cash flow not affected. → Strong impact."],
  hi_simple: "इनवॉइस ट्रैक करें और समय पर फॉलोअप करें।",
  hi_normal: "समय पर इनवॉइस भेजें, ड्यू डेट ट्रैक करें और पेमेंट फॉलोअप करें।",
  hi_faq: ["क्यों ट्रैक करें? → समय पर पैसा।", "टूल्स? → Zoho।", "लेट पेमेंट? → फॉलोअप।", "कैश/क्रेडिट? → जल्दी पेमेंट बेहतर।"],
  hi_myths: ["इनवॉइस जरूरी नहीं। → जरूरी है।", "फॉलोअप गलत है। → नहीं।", "मैनुअल ठीक है। → नहीं।", "कैश फ्लो पर असर नहीं। → होता है।"]
},

"Long term equity returns in India": {
  simple: "Indian equity markets have historically given around 12–14% annual returns over long periods.",
  normal: "Nifty 50 has delivered ~12–14% CAGR over long-term periods (10–20 years). Short-term returns can be volatile, but long-term investing benefits from compounding and economic growth.",
  faq: ["Are returns guaranteed? → No.", "Minimum investment horizon? → 5–10 years.", "Best way to invest? → SIP.", "Can returns be negative? → Short-term yes."],
  myths: ["Stocks always give high returns. → Not short-term.", "Timing matters most. → Time matters more.", "Equity is risky always. → Long-term reduces risk.", "Only experts invest. → Anyone can."],
  hi_simple: "लंबी अवधि में इक्विटी ~12–14% रिटर्न दे सकती है।",
  hi_normal: "Nifty 50 ने 10–20 साल में ~12–14% CAGR दिया है।",
  hi_faq: ["गारंटी है? → नहीं।", "कितनी अवधि? → 5–10 साल।", "कैसे निवेश करें? → SIP।", "नुकसान? → शॉर्ट टर्म में।"],
  hi_myths: ["हमेशा हाई रिटर्न। → नहीं।", "टाइमिंग जरूरी। → समय ज्यादा जरूरी।", "हमेशा risky। → नहीं।", "सिर्फ एक्सपर्ट के लिए। → नहीं।"]
},

"NPS annuity on retirement": {
  simple: "On retirement, at least 40% of NPS corpus must be used to buy an annuity that provides regular pension income.",
  normal: "At retirement, 60% of NPS corpus can be withdrawn tax-free, and minimum 40% must be used to buy an annuity (pension plan). Annuity provides fixed monthly income but returns are typically lower (5–7%).",
  faq: ["Can I withdraw full amount? → No, 40% annuity required.", "Is annuity taxable? → Yes income is taxable.", "Can I choose provider? → Yes.", "Returns high? → Moderate."],
  myths: ["NPS gives full lump sum. → No.", "Annuity returns are high. → Moderate.", "No tax on annuity income. → Taxable.", "No choice in provider. → You can choose."],
  hi_simple: "NPS का 40% पेंशन (annuity) में लगाना जरूरी है।",
  hi_normal: "60% निकाल सकते हैं, 40% से पेंशन खरीदनी होती है।",
  hi_faq: ["पूरा निकाल सकते हैं? → नहीं।", "टैक्स? → लगता है।", "प्रोवाइडर चुन सकते हैं? → हाँ।", "रिटर्न? → कम।"],
  hi_myths: ["पूरा पैसा मिलेगा। → नहीं।", "रिटर्न ज्यादा है। → नहीं।", "टैक्स नहीं लगता। → लगता है।", "चॉइस नहीं है। → है।"]
},

"NPS tax deduction under 80CCD": {
  simple: "You can claim tax deduction under 80CCD(1) and extra ₹50,000 under 80CCD(1B) for NPS investments.",
  normal: "NPS tax benefits: (1) 80CCD(1) within ₹1.5 lakh (80C limit), (2) additional ₹50,000 under 80CCD(1B), (3) employer contribution under 80CCD(2). Total tax saving potential is higher than most instruments.",
  faq: ["Extra benefit? → ₹50,000 under 80CCD(1B).", "Included in 80C? → Partly.", "Employer benefit? → Separate deduction.", "Best for tax saving? → Yes."],
  myths: ["Only ₹1.5 lakh allowed. → Extra ₹50k available.", "NPS has no tax benefits. → Significant benefits.", "Only salaried can invest. → Anyone can.", "Complex rules. → Simple."],
  hi_simple: "NPS में ₹50,000 अतिरिक्त टैक्स छूट मिलती है।",
  hi_normal: "80C के अलावा 80CCD(1B) में ₹50,000 extra deduction मिलता है।",
  hi_faq: ["अतिरिक्त लाभ? → ₹50k।", "80C में शामिल? → आंशिक।", "Employer लाभ? → अलग।", "अच्छा विकल्प? → हाँ।"],
  hi_myths: ["सिर्फ ₹1.5 लाख। → नहीं।", "कोई लाभ नहीं। → है।", "सिर्फ नौकरी वालों के लिए। → नहीं।", "मुश्किल है। → नहीं।"]
},

"Needs versus wants revisited": {
  simple: "Needs are essential (rent, food), wants are lifestyle choices (shopping, travel). Prioritise needs first.",
  normal: "Needs = essentials (housing, food, utilities), Wants = lifestyle (dining out, gadgets). Controlling wants helps increase savings and financial stability.",
  faq: ["Is EMI a need? → Yes.", "Is eating out a need? → No.", "Can wants be reduced? → Yes.", "Why separate? → Better budgeting."],
  myths: ["Wants are useless. → Balance is important.", "Needs include everything. → Not true.", "High income removes need to budget. → No.", "Wants should be zero. → Not necessary."],
  hi_simple: "जरूरत और चाहत में फर्क समझें।",
  hi_normal: "जरूरत पहले, चाहत बाद में रखें।",
  hi_faq: ["EMI क्या है? → जरूरत।", "बाहर खाना? → चाहत।", "कम कर सकते हैं? → हाँ।", "क्यों अलग करें? → बजट बेहतर।"],
  hi_myths: ["चाहत बेकार है। → नहीं।", "सब जरूरत है। → नहीं।", "ज्यादा इनकम में जरूरत नहीं। → है।", "चाहत खत्म करें। → जरूरी नहीं।"]
},

"Needs wants savings split": {
  simple: "Divide income into needs, wants, and savings — commonly 50-30-20 ratio.",
  normal: "Use a structured split: 50% needs, 30% wants, 20% savings. Adjust based on income and city cost. Ensure savings are prioritised before spending.",
  faq: ["Is 50-30-20 fixed? → No.", "Minimum savings? → 15–20%.", "Can needs exceed 50%? → Sometimes.", "Why savings first? → Builds wealth."],
  myths: ["Exact split required. → Flexible.", "Savings can wait. → Should be first.", "Wants unnecessary. → Balance needed.", "Only high earners can save. → Anyone can."],
  hi_simple: "आय को जरूरत, चाहत और बचत में बाँटें।",
  hi_normal: "50-30-20 नियम अपनाएं और पहले बचत करें।",
  hi_faq: ["फिक्स है? → नहीं।", "बचत कितनी? → 15–20%。", "जरूरत ज्यादा? → हो सकता है।", "पहले बचत क्यों? → जरूरी।"],
  hi_myths: ["रूल फिक्स है। → नहीं।", "बाद में बचत। → नहीं।", "चाहत बेकार। → नहीं।", "कम इनकम में नहीं। → होता है।"]
},

"Negotiating your salary": {
  simple: "Research market salary, highlight your value, and confidently ask for higher compensation.",
  normal: "Steps: (1) research market range, (2) highlight achievements, (3) justify expected salary, (4) negotiate benefits if salary is fixed, (5) don’t accept first offer immediately.",
  faq: ["Is negotiation expected? → Yes.", "How much to ask? → 20–30% hike.", "Can freshers negotiate? → Limited but possible.", "What if rejected? → Negotiate other benefits."],
  myths: ["Negotiation is rude. → Normal.", "First offer is final. → Often negotiable.", "Only experienced can negotiate. → Anyone can.", "Asking more risks job. → Rare."],
  hi_simple: "मार्केट सैलरी जानें और आत्मविश्वास से बात करें।",
  hi_normal: "अपने काम दिखाएं, सही सैलरी मांगें और ऑफर नेगोशिएट करें।",
  hi_faq: ["नेगोशिएशन जरूरी? → हाँ।", "कितना मांगें? → 20–30%。", "फ्रेशर? → थोड़ा।", "रिजेक्ट? → फायदे मांगें।"],
  hi_myths: ["नेगोशिएशन गलत है। → नहीं।", "पहला ऑफर फाइनल। → नहीं।", "सिर्फ एक्सपीरियंस वालों के लिए। → नहीं।", "जॉब खो देंगे। → नहीं।"]
},
"Owner's salary vs profit": {
  simple: "Owner salary is fixed pay for your work, while profit is leftover money after all business expenses.",
  normal: "Owner’s salary is a fixed expense paid to yourself for managing the business. Profit is what remains after all costs (including salary). Mixing both leads to poor financial clarity. Always separate salary from profit.",
  faq: ["Should I take salary from my business? → Yes.", "Is profit same as income? → No.", "Why separate them? → Better tracking.", "Can I take all profit? → Not always advisable."],
  myths: ["Profit is owner salary. → Different.", "No need to take salary. → Important for discipline.", "All profit can be spent. → Should reinvest.", "Small business doesn't need structure. → It does."],
  hi_simple: "सैलरी अलग है, प्रॉफिट अलग है।",
  hi_normal: "खुद को सैलरी दें और प्रॉफिट अलग रखें।",
  hi_faq: ["सैलरी लें? → हाँ।", "प्रॉफिट = इनकम? → नहीं।", "अलग क्यों? → ट्रैकिंग।", "सब निकाल सकते हैं? → नहीं।"],
  hi_myths: ["प्रॉफिट = सैलरी। → गलत।", "सैलरी जरूरी नहीं। → जरूरी।", "सब खर्च करें। → नहीं।", "स्ट्रक्चर जरूरी नहीं। → है।"]
},

"P&L statement basics": {
  simple: "A P&L statement shows revenue, expenses, and profit over a period.",
  normal: "P&L (Profit & Loss) includes: revenue (income), expenses (costs), and net profit. It helps understand business performance and profitability over time.",
  faq: ["What is revenue? → Total income.", "What is net profit? → Revenue minus expenses.", "Why important? → Tracks performance.", "Who uses it? → Businesses and investors."],
  myths: ["Revenue = profit. → Wrong.", "Not needed for small business. → Needed.", "Only accountants use it. → Everyone should understand.", "Profit alone matters. → Expenses matter too."],
  hi_simple: "P&L में आय, खर्च और मुनाफा दिखता है।",
  hi_normal: "रेवेन्यू, खर्च और नेट प्रॉफिट से बिजनेस की स्थिति समझते हैं।",
  hi_faq: ["रेवेन्यू क्या है? → कुल आय।", "नेट प्रॉफिट? → खर्च के बाद।", "क्यों जरूरी? → ट्रैकिंग।", "कौन देखता है? → सभी।"],
  hi_myths: ["रेवेन्यू = प्रॉफिट। → नहीं।", "छोटे बिजनेस को जरूरत नहीं। → है।", "सिर्फ CA के लिए। → नहीं।", "सिर्फ प्रॉफिट जरूरी। → नहीं।"]
},

"PPF tax benefits": {
  simple: "PPF offers EEE benefit — investment, interest, and maturity are all tax-free.",
  normal: "PPF has EEE status: (1) investment up to ₹1.5 lakh under 80C, (2) interest is tax-free, (3) maturity amount is tax-free. It is one of the safest long-term tax-saving options.",
  faq: ["Max investment? → ₹1.5 lakh/year.", "Interest taxable? → No.", "Lock-in? → 15 years.", "Safe? → Government-backed."],
  myths: ["PPF interest is taxable. → No.", "Short-term product. → Long-term.", "Returns very high. → Moderate.", "Risky investment. → Very safe."],
  hi_simple: "PPF में निवेश, ब्याज और मैच्योरिटी — सब टैक्स फ्री।",
  hi_normal: "EEE लाभ — 80C में छूट, ब्याज और मैच्योरिटी टैक्स फ्री।",
  hi_faq: ["सीमा? → ₹1.5 लाख।", "टैक्स? → नहीं।", "लॉक-इन? → 15 साल।", "सुरक्षित? → हाँ।"],
  hi_myths: ["ब्याज टैक्सेबल है। → नहीं।", "शॉर्ट टर्म है। → नहीं।", "रिटर्न बहुत ज्यादा। → नहीं।", "रिस्की है। → नहीं।"]
},

"PPF withdrawal and loan rules": {
  simple: "Partial withdrawal allowed after 5 years, and loans can be taken from year 3 to 6.",
  normal: "PPF rules: (1) loan allowed from year 3–6, (2) partial withdrawal allowed after 5 years, (3) full withdrawal at maturity (15 years). Premature closure allowed in special cases.",
  faq: ["Can I withdraw early? → Partial after 5 years.", "Loan interest? → Lower than market.", "Full withdrawal? → After 15 years.", "Premature closure? → Limited cases."],
  myths: ["Money locked completely. → Partial access available.", "Loan not allowed. → Allowed.", "Flexible anytime withdrawal. → No.", "Only one withdrawal. → Multiple allowed."],
  hi_simple: "5 साल बाद आंशिक निकासी और 3–6 साल में लोन ले सकते हैं।",
  hi_normal: "3–6 साल में लोन, 5 साल बाद निकासी और 15 साल में पूरा पैसा मिलता है।",
  hi_faq: ["जल्दी निकाल सकते हैं? → आंशिक।", "लोन? → हाँ।", "पूरा पैसा? → 15 साल बाद।", "पहले बंद? → सीमित।"],
  hi_myths: ["पूरी तरह लॉक है। → नहीं।", "लोन नहीं मिलता। → मिलता है।", "कभी भी निकाल सकते हैं। → नहीं।", "एक बार ही निकाल सकते हैं। → नहीं।"]
},

"Passive income explained": {
  simple: "Passive income is money earned with minimal active effort, like rent, dividends, or interest.",
  normal: "Passive income includes earnings from investments such as rental income, dividends, interest, or digital assets. It requires initial effort or capital but generates ongoing income with limited involvement.",
  faq: ["Is it completely passive? → Not always.", "Examples? → Rent, dividends.", "Need capital? → Usually yes.", "Reliable? → Depends on source."],
  myths: ["No effort needed. → Initial effort required.", "Quick money. → Takes time.", "Always stable. → Varies.", "Only rich can earn. → Anyone can start."],
  hi_simple: "कम मेहनत से मिलने वाली आय = passive income।",
  hi_normal: "निवेश या संपत्ति से मिलने वाली नियमित आय passive income है।",
  hi_faq: ["पूरी तरह passive? → नहीं।", "उदाहरण? → किराया।", "पैसा चाहिए? → हाँ।", "स्थिर? → निर्भर।"],
  hi_myths: ["मेहनत नहीं चाहिए। → चाहिए।", "जल्दी पैसा। → नहीं।", "हमेशा स्थिर। → नहीं।", "सिर्फ अमीर के लिए। → नहीं।"]
},

"Past performance and what it means": {
  simple: "Past performance shows how an investment performed earlier but does not guarantee future returns.",
  normal: "Past performance helps assess consistency but cannot predict future returns. Use it along with fundamentals, risk, and market conditions before investing.",
  faq: ["Is past return reliable? → Only as a guide.", "Should I ignore it? → No.", "Guarantee future? → No.", "Best timeframe? → Long-term."],
  myths: ["Past returns guarantee future. → No.", "Ignore history. → Not wise.", "Recent returns matter most. → Long-term matters.", "Highest return = best. → Not always."],
  hi_simple: "पुराना प्रदर्शन भविष्य की गारंटी नहीं है।",
  hi_normal: "पिछला प्रदर्शन देखें, लेकिन उसी पर भरोसा न करें।",
  hi_faq: ["विश्वसनीय? → आंशिक।", "इग्नोर करें? → नहीं।", "गारंटी? → नहीं।", "कितनी अवधि? → लंबी।"],
  hi_myths: ["भविष्य तय करता है। → नहीं।", "इग्नोर करें। → नहीं।", "हाल का प्रदर्शन जरूरी। → नहीं।", "सबसे ज्यादा रिटर्न सही। → नहीं।"]
},

"Personal loan interest rates in India": {
  simple: "Personal loan interest rates typically range from 10% to 24% depending on credit score and lender.",
  normal: "Interest rates depend on credit score, income, and lender. Typically range from 10–24% per year. Higher CIBIL score (750+) gets lower rates. Compare lenders before taking a loan.",
  faq: ["What affects rate? → Credit score, income.", "Good CIBIL score? → 750+.", "Fixed or floating? → Usually fixed.", "Can I negotiate? → Sometimes."],
  myths: ["All rates same. → No.", "Low EMI means cheap loan. → Not always.", "CIBIL not important. → Very important.", "Instant loans are best. → Often expensive."],
  hi_simple: "पर्सनल लोन दर ~10–24% होती है।",
  hi_normal: "CIBIL स्कोर के आधार पर ब्याज तय होता है — 750+ पर कम दर मिलती है।",
  hi_faq: ["किस पर निर्भर? → स्कोर।", "अच्छा स्कोर? → 750+।", "फिक्स्ड? → हाँ।", "नेगोशिएट? → कभी-कभी।"],
  hi_myths: ["सब दर समान। → नहीं।", "कम EMI सस्ता है। → नहीं।", "स्कोर जरूरी नहीं। → है।", "इंस्टेंट लोन अच्छे। → महंगे होते हैं।"]
},

"Phishing explained": {
  simple: "Phishing is a scam where attackers trick you into sharing personal or banking details using fake messages or websites.",
  normal: "Phishing involves fake emails, SMS, or websites that look real to steal your login credentials, OTPs, or financial data. Always verify links and never share sensitive information.",
  faq: ["How to identify phishing? → Suspicious links, urgency.", "Is SMS phishing common? → Yes.", "What to do if clicked? → Change passwords.", "Can banks ask OTP? → No."],
  myths: ["Only emails are phishing. → SMS/calls too.", "Looks real so safe. → Not always.", "Small mistake harmless. → Risky.", "Antivirus stops all phishing. → No."],
  hi_simple: "फिशिंग = नकली लिंक से जानकारी चोरी।",
  hi_normal: "फर्जी मैसेज या वेबसाइट से OTP और पासवर्ड चुराना फिशिंग है।",
  hi_faq: ["कैसे पहचानें? → संदिग्ध लिंक।", "SMS भी? → हाँ।", "क्लिक हो गया? → पासवर्ड बदलें।", "बैंक OTP मांगता है? → नहीं।"],
  hi_myths: ["सिर्फ ईमेल में होता है। → नहीं।", "रियल लगता है तो सही। → नहीं।", "छोटी गलती ठीक। → नहीं।", "एंटीवायरस काफी। → नहीं।"]
},

"Ponzi scheme explained": {
  simple: "A Ponzi scheme pays old investors using money from new investors instead of real profits.",
  normal: "Ponzi schemes promise high returns and use new investors’ money to pay earlier ones. They collapse when new investments stop. Always avoid guaranteed high-return schemes.",
  faq: ["Is it legal? → No.", "How to identify? → Guaranteed returns.", "Why do people invest? → Greed or trust.", "Can money be recovered? → Rare."],
  myths: ["Early investors always profit. → Risky.", "High return means legit. → Often fraud.", "Referral schemes are safe. → Not always.", "Regulated schemes do this. → No."],
  hi_simple: "नया पैसा पुराने निवेशकों को देना = Ponzi।",
  hi_normal: "नए निवेश से पुराने को भुगतान करना Ponzi स्कीम है।",
  hi_faq: ["कानूनी है? → नहीं।", "पहचान? → गारंटीड रिटर्न।", "लोग क्यों फंसते हैं? → लालच।", "पैसा वापस? → मुश्किल।"],
  hi_myths: ["शुरुआती लोग सुरक्षित। → नहीं।", "ज्यादा रिटर्न सही। → नहीं।", "रेफरल सुरक्षित। → नहीं।", "रेगुलेटेड है। → नहीं।"]
},

"Premature FD withdrawal penalties": {
  simple: "Withdrawing FD before maturity reduces interest and may include a penalty.",
  normal: "Premature FD withdrawal leads to lower interest (applicable rate for actual tenure) and a penalty (0.5–1%). Always check bank terms before breaking FD.",
  faq: ["Penalty amount? → 0.5–1%.", "Interest loss? → Yes.", "Partial withdrawal allowed? → Depends on bank.", "Best alternative? → Use emergency fund."],
  myths: ["No penalty for early withdrawal. → There is.", "Full interest applies. → Reduced.", "All banks same. → Varies.", "FD is fully liquid. → Not ideal."],
  hi_simple: "FD जल्दी तोड़ने पर ब्याज कम और पेनल्टी लगती है।",
  hi_normal: "अवधि से पहले निकालने पर कम ब्याज और 0.5–1% पेनल्टी लगती है।",
  hi_faq: ["पेनल्टी? → 0.5–1%。", "ब्याज कम? → हाँ।", "आंशिक निकासी? → बैंक पर निर्भर।", "बेहतर विकल्प? → इमरजेंसी फंड।"],
  hi_myths: ["पेनल्टी नहीं। → होती है।", "पूरा ब्याज मिलेगा। → नहीं।", "सब बैंक समान। → नहीं।", "FD लिक्विड है। → नहीं।"]
},
"Pyramid scheme explained": {
  simple: "A pyramid scheme earns money by recruiting people instead of selling real products or services.",
  normal: "In a pyramid scheme, income comes mainly from recruiting new members rather than actual business activity. It collapses when new recruitment slows down. These schemes are illegal and risky.",
  faq: ["Is it legal? → No.", "How to identify? → Focus on recruitment.", "Difference from MLM? → MLM sells real products.", "Can you profit? → Rare and risky."],
  myths: ["Early joiners always win. → Not guaranteed.", "Looks like business so safe. → Often scam.", "Friends invite so safe. → Verify independently.", "High returns are normal. → Not sustainable."],
  hi_simple: "लोग जोड़कर पैसा कमाना = pyramid scheme।",
  hi_normal: "नए लोगों से पैसा कमाना, असली बिजनेस नहीं — यही pyramid scheme है।",
  hi_faq: ["कानूनी है? → नहीं।", "पहचान? → भर्ती पर फोकस।", "MLM से अलग? → हाँ।", "फायदा? → जोखिम।"],
  hi_myths: ["पहले लोग जीतते हैं। → जरूरी नहीं।", "बिजनेस जैसा दिखता है। → नहीं।", "दोस्त बुलाए तो सुरक्षित। → नहीं।", "ज्यादा रिटर्न सही। → नहीं।"]
},

"RBI banking ombudsman explained": {
  simple: "The RBI Banking Ombudsman helps resolve complaints against banks if your issue is not solved by the bank.",
  normal: "If a bank fails to resolve your complaint within 30 days, you can escalate it to RBI Ombudsman via cms.rbi.org.in. It handles issues like failed transactions, unfair charges, and service delays.",
  faq: ["When to approach? → After bank fails.", "Cost? → Free.", "How to file? → Online CMS portal.", "Time taken? → Few weeks."],
  myths: ["Need lawyer. → Not required.", "Only big cases accepted. → All valid complaints.", "Bank decision final. → Can escalate.", "Process is complex. → Simple online."],
  hi_simple: "बैंक समस्या हल न करे तो RBI Ombudsman से शिकायत करें।",
  hi_normal: "30 दिन बाद RBI CMS पोर्टल पर शिकायत दर्ज कर सकते हैं।",
  hi_faq: ["कब जाएं? → बैंक के बाद।", "फीस? → नहीं।", "कैसे? → ऑनलाइन।", "समय? → कुछ हफ्ते।"],
  hi_myths: ["वकील चाहिए। → नहीं।", "सिर्फ बड़े केस। → नहीं।", "बैंक अंतिम है। → नहीं।", "मुश्किल प्रक्रिया। → नहीं।"]
},

"RBI role in banking": {
  simple: "RBI regulates banks, controls money supply, and ensures financial stability in India.",
  normal: "The Reserve Bank of India (RBI) acts as the central bank. It regulates banks, controls inflation through monetary policy, manages currency, and protects consumers.",
  faq: ["What is RBI? → Central bank of India.", "Does RBI control interest rates? → Yes.", "Does RBI manage banks? → Yes.", "Does RBI print money? → Yes."],
  myths: ["RBI is a commercial bank. → No.", "RBI handles personal accounts. → No.", "RBI only prints money. → Multiple roles.", "RBI controls stock market. → SEBI does."],
  hi_simple: "RBI बैंकिंग सिस्टम को नियंत्रित करता है।",
  hi_normal: "RBI बैंक, मुद्रा और महंगाई को नियंत्रित करता है।",
  hi_faq: ["RBI क्या है? → सेंट्रल बैंक।", "रेट तय करता है? → हाँ।", "बैंक नियंत्रित? → हाँ।", "पैसा छापता है? → हाँ।"],
  hi_myths: ["RBI बैंक है। → नहीं।", "पर्सनल अकाउंट संभालता है। → नहीं।", "सिर्फ पैसा छापता है। → नहीं।", "स्टॉक कंट्रोल करता है। → नहीं।"]
},

"Revenue vs profit difference": {
  simple: "Revenue is total income, while profit is what remains after expenses.",
  normal: "Revenue is the total money earned from sales. Profit is revenue minus expenses. A company can have high revenue but low or negative profit.",
  faq: ["Is revenue same as profit? → No.", "Why important? → Shows business health.", "Which is better? → Profit matters more.", "Can profit be negative? → Yes."],
  myths: ["High revenue means success. → Not always.", "Profit always high if sales high. → Not true.", "Revenue is cash. → Not always.", "Profit doesn't matter. → Critical."],
  hi_simple: "रेवेन्यू = कुल आय, प्रॉफिट = खर्च के बाद बचा पैसा।",
  hi_normal: "रेवेन्यू ज्यादा हो सकता है, लेकिन प्रॉफिट कम भी हो सकता है।",
  hi_faq: ["एक ही है? → नहीं।", "क्यों जरूरी? → बिजनेस समझने के लिए।", "कौन बेहतर? → प्रॉफिट।", "नेगेटिव हो सकता है? → हाँ।"],
  hi_myths: ["रेवेन्यू ज्यादा = अच्छा। → नहीं।", "प्रॉफिट हमेशा ज्यादा। → नहीं।", "रेवेन्यू = कैश। → नहीं।", "प्रॉफिट जरूरी नहीं। → जरूरी है।"]
},

"Risk pooling concept explained": {
  simple: "Risk pooling means many people share risk so that losses are manageable for everyone, like in insurance.",
  normal: "In risk pooling, individuals contribute small amounts (premiums) to a common pool. When someone faces loss, compensation is paid from the pool. This spreads risk across many people.",
  faq: ["Where used? → Insurance.", "Why useful? → Reduces individual burden.", "Who manages pool? → Insurers.", "Is it guaranteed? → Based on policy."],
  myths: ["Everyone gets payout. → Only affected individuals.", "No risk involved. → Risk shared.", "Free money. → Paid via premiums.", "Only for big risks. → All types."],
  hi_simple: "सभी लोग मिलकर जोखिम साझा करते हैं।",
  hi_normal: "बीमा में लोग मिलकर फंड बनाते हैं और नुकसान होने पर भुगतान होता है।",
  hi_faq: ["कहाँ उपयोग? → बीमा।", "क्यों? → जोखिम कम।", "कौन संभालता है? → कंपनी।", "गारंटी? → पॉलिसी पर।"],
  hi_myths: ["सबको पैसा मिलता है। → नहीं।", "कोई जोखिम नहीं। → होता है।", "फ्री पैसा। → नहीं।", "सिर्फ बड़े जोखिम। → नहीं।"]
},

"Risk return tradeoff explained": {
  simple: "Higher returns usually come with higher risk, and lower risk investments give lower returns.",
  normal: "The risk-return tradeoff means you must take more risk to achieve higher returns. Equity has higher risk and returns, while FD has lower risk and returns. Balance is key.",
  faq: ["Is high return safe? → Usually not.", "Is low risk best? → Depends on goal.", "Can risk be avoided? → No.", "Best strategy? → Diversify."],
  myths: ["High return without risk exists. → Rare.", "Low risk gives high returns. → No.", "Risk is bad always. → Necessary.", "Avoid all risk. → Impossible."],
  hi_simple: "ज्यादा रिटर्न = ज्यादा जोखिम।",
  hi_normal: "इक्विटी में ज्यादा जोखिम और रिटर्न, FD में कम। संतुलन जरूरी है।",
  hi_faq: ["हाई रिटर्न सुरक्षित? → नहीं।", "लो रिस्क बेहतर? → निर्भर।", "रिस्क हट सकता है? → नहीं।", "क्या करें? → विविधता।"],
  hi_myths: ["बिना रिस्क रिटर्न। → नहीं।", "लो रिस्क हाई रिटर्न। → नहीं।", "रिस्क बुरा है। → नहीं।", "रिस्क से बचें। → नहीं।"]
},

"Rule of 72 explained": {
  simple: "Divide 72 by the interest rate to estimate how long it takes for money to double.",
  normal: "Rule of 72: Years = 72 ÷ interest rate. At 12%, money doubles in 6 years. Useful for quick financial planning and comparing investments.",
  faq: ["Exact formula? → Approximation.", "Works for inflation? → Yes.", "Applicable range? → 6–15%.", "Useful? → Very."],
  myths: ["Gives exact answer. → Approximate.", "Only for stocks. → All investments.", "Not useful. → Very useful.", "Complex math. → Simple."],
  hi_simple: "72 ÷ ब्याज = पैसा दोगुना होने का समय।",
  hi_normal: "12% पर पैसा ~6 साल में दोगुना होता है।",
  hi_faq: ["सटीक है? → नहीं।", "इन्फ्लेशन में? → हाँ।", "कहाँ काम करता है? → 6–15%。", "उपयोगी? → हाँ।"],
  hi_myths: ["सही उत्तर देता है। → नहीं।", "सिर्फ शेयर के लिए। → नहीं।", "बेकार है। → नहीं।", "मुश्किल है। → नहीं।"]
},

"SEBI registration check": {
  simple: "Always verify if an advisor or company is registered with SEBI before investing.",
  normal: "Check SEBI registration on sebi.gov.in using registration number. Only invest with SEBI-registered advisors or entities to avoid fraud.",
  faq: ["Where to check? → SEBI website.", "What to verify? → Registration number.", "Is it mandatory? → Yes for advisors.", "Safe if registered? → Safer, not risk-free."],
  myths: ["Registration guarantees profit. → No.", "Unregistered advisors are fine. → Risky.", "Friends’ advice enough. → Verify.", "Registration not important. → Critical."],
  hi_simple: "SEBI रजिस्ट्रेशन चेक करें।",
  hi_normal: "sebi.gov.in पर रजिस्ट्रेशन नंबर से जांच करें।",
  hi_faq: ["कहाँ चेक करें? → SEBI।", "क्या देखें? → नंबर।", "जरूरी? → हाँ।", "सुरक्षित? → ज्यादा सुरक्षित।"],
  hi_myths: ["गारंटी देता है। → नहीं।", "बिना रजिस्ट्रेशन ठीक है। → नहीं।", "दोस्त काफी हैं। → नहीं।", "जरूरी नहीं। → जरूरी।"]
},

"Safe internet banking practices": {
  simple: "Use secure devices, strong passwords, and never share OTP or login details.",
  normal: "Best practices: (1) strong passwords, (2) 2FA enabled, (3) avoid public Wi-Fi, (4) check website URL, (5) logout after use, (6) update apps regularly.",
  faq: ["OTP share? → Never.", "Public Wi-Fi? → Avoid.", "Password reuse? → No.", "Update apps? → Yes."],
  myths: ["Bank apps always safe. → Depends on usage.", "OTP sharing is fine. → No.", "Antivirus is enough. → Not enough.", "Phishing rare. → Common."],
  hi_simple: "OTP शेयर न करें और सुरक्षित डिवाइस इस्तेमाल करें।",
  hi_normal: "मजबूत पासवर्ड रखें, 2FA ऑन करें और पब्लिक Wi-Fi से बचें।",
  hi_faq: ["OTP? → नहीं।", "Wi-Fi? → नहीं।", "पासवर्ड reuse? → नहीं।", "अपडेट? → हाँ।"],
  hi_myths: ["ऐप हमेशा सुरक्षित। → नहीं।", "OTP देना ठीक। → नहीं।", "एंटीवायरस काफी। → नहीं।", "फिशिंग कम है। → नहीं।"]
},

"Safe withdrawal rate explained": {
  simple: "Safe withdrawal rate is the percentage you can withdraw yearly from your savings without running out of money — usually around 4%.",
  normal: "The 4% rule suggests you can withdraw 4% of your retirement corpus annually, adjusted for inflation, without depleting funds for ~25–30 years. Example: ₹1 crore → ₹4 lakh/year.",
  faq: ["Is 4% fixed? → General guideline.", "Works in India? → Depends on inflation.", "Includes inflation? → Yes.", "Can I withdraw more? → Risk increases."],
  myths: ["Higher withdrawal is safe. → Risky.", "4% works always. → Depends.", "No need to adjust. → Must adjust.", "Applies to all portfolios. → Depends on allocation."],
  hi_simple: "हर साल ~4% निकालना सुरक्षित माना जाता है।",
  hi_normal: "₹1 करोड़ पर ~₹4 लाख सालाना निकालना सुरक्षित माना जाता है।",
  hi_faq: ["फिक्स है? → नहीं।", "भारत में? → निर्भर।", "इन्फ्लेशन शामिल? → हाँ।", "ज्यादा निकालें? → जोखिम।"],
  hi_myths: ["ज्यादा निकाल सकते हैं। → जोखिम।", "हमेशा काम करता है। → नहीं।", "एडजस्ट जरूरी नहीं। → है।", "सब पर लागू। → नहीं।"]
},
"Salary account explained": {
  simple: "A salary account is a bank account opened by your employer to credit your salary with zero minimum balance.",
  normal: "Salary accounts are opened through employers for salary credit. They usually have zero balance requirement, free ATM usage, and additional benefits like offers and insurance. If salary stops, it may convert to a regular savings account.",
  faq: ["Minimum balance? → Usually zero.", "Can I use it like savings? → Yes.", "What if I change jobs? → Account continues.", "Charges apply later? → Yes if converted."],
  myths: ["Only for salary credit. → Can be used normally.", "Always zero balance. → Depends after conversion.", "No charges ever. → Charges may apply later.", "Cannot convert. → It converts automatically."],
  hi_simple: "सैलरी अकाउंट में मिनिमम बैलेंस नहीं होता।",
  hi_normal: "नौकरी के दौरान जीरो बैलेंस रहता है, बाद में सेविंग अकाउंट बन सकता है।",
  hi_faq: ["मिनिमम बैलेंस? → नहीं।", "यूज़ कर सकते हैं? → हाँ।", "जॉब बदलें? → चलता रहेगा।", "चार्ज लगेंगे? → बाद में।"],
  hi_myths: ["सिर्फ सैलरी के लिए। → नहीं।", "हमेशा फ्री। → नहीं।", "चार्ज नहीं लगते। → लग सकते हैं।", "कन्वर्ट नहीं होता। → होता है।"]
},

"Savings account explained": {
  simple: "A savings account is a bank account used to store money safely while earning small interest.",
  normal: "Savings accounts allow you to deposit, withdraw, and earn interest (2.5–7%). They provide liquidity, safety, and easy access for daily financial needs.",
  faq: ["Interest rate? → 2.5–7%.", "Is it safe? → Yes.", "Minimum balance? → Depends on bank.", "Tax on interest? → Yes."],
  myths: ["Savings accounts give high returns. → Low returns.", "No tax on interest. → Taxable.", "Cash is better. → No interest.", "All banks same. → Rates differ."],
  hi_simple: "सेविंग अकाउंट में पैसा सुरक्षित रहता है और थोड़ा ब्याज मिलता है।",
  hi_normal: "2.5–7% ब्याज मिलता है और पैसा कभी भी निकाल सकते हैं।",
  hi_faq: ["ब्याज कितना? → 2.5–7%。", "सुरक्षित? → हाँ।", "मिनिमम बैलेंस? → बैंक पर निर्भर।", "टैक्स? → लगता है।"],
  hi_myths: ["ज्यादा रिटर्न मिलता है। → नहीं।", "टैक्स नहीं लगता। → लगता है।", "कैश बेहतर है। → नहीं।", "सब बैंक समान। → नहीं।"]
},

"Section 24 home loan deduction": {
  simple: "You can claim up to ₹2 lakh tax deduction on home loan interest under Section 24.",
  normal: "Section 24 allows deduction of up to ₹2 lakh per year on home loan interest for self-occupied property. For rented property, full interest may be claimed subject to limits.",
  faq: ["Principal covered? → No, interest only.", "Max deduction? → ₹2 lakh.", "Applicable for rented? → Yes.", "Under which regime? → Old tax regime."],
  myths: ["Covers principal. → No.", "Unlimited deduction. → Limited.", "Available in new regime. → Not usually.", "Only one property allowed. → Depends."],
  hi_simple: "होम लोन ब्याज पर ₹2 लाख तक टैक्स छूट मिलती है।",
  hi_normal: "Section 24 में ब्याज पर ₹2 लाख तक डिडक्शन मिलता है।",
  hi_faq: ["प्रिंसिपल शामिल? → नहीं।", "सीमा? → ₹2 लाख।", "किराए पर? → हाँ।", "नई टैक्स व्यवस्था? → नहीं।"],
  hi_myths: ["प्रिंसिपल भी शामिल। → नहीं।", "अनलिमिटेड है। → नहीं।", "नई व्यवस्था में है। → नहीं।", "एक ही घर पर। → नहीं।"]
},

"Section 80CCD NPS deduction": {
  simple: "NPS investments give tax benefits under 80CCD, including an extra ₹50,000 deduction.",
  normal: "NPS offers tax benefits: (1) within ₹1.5 lakh under 80CCD(1), (2) extra ₹50,000 under 80CCD(1B), and (3) employer contribution under 80CCD(2).",
  faq: ["Extra benefit? → ₹50,000.", "Included in 80C? → Partly.", "Employer benefit? → Separate.", "Applicable to all? → Yes."],
  myths: ["Only ₹1.5 lakh allowed. → Extra ₹50k exists.", "No tax benefit. → Significant.", "Only salaried eligible. → Anyone can invest.", "Complex rules. → Simple."],
  hi_simple: "NPS में ₹50,000 अतिरिक्त टैक्स छूट मिलती है।",
  hi_normal: "80CCD(1B) के तहत ₹50,000 extra deduction मिलता है।",
  hi_faq: ["अतिरिक्त लाभ? → ₹50k।", "80C में शामिल? → आंशिक।", "Employer लाभ? → अलग।", "कौन ले सकता है? → सभी।"],
  hi_myths: ["सिर्फ ₹1.5 लाख। → नहीं।", "कोई लाभ नहीं। → है।", "सिर्फ नौकरी वालों के लिए। → नहीं।", "मुश्किल है। → नहीं।"]
},

"Section 80D health insurance deduction": {
  simple: "You can claim tax deduction on health insurance premiums under Section 80D.",
  normal: "Section 80D allows deduction: ₹25,000 for self/family, ₹25,000 for parents (₹50,000 if senior citizens). Preventive health checkups also covered within limits.",
  faq: ["Max deduction? → ₹25k–₹1 lakh.", "Parents included? → Yes.", "Senior citizens? → Higher limit.", "Cash payment allowed? → No."],
  myths: ["Only self covered. → Family included.", "Unlimited deduction. → Limits apply.", "Cash payment allowed. → No.", "No benefit for parents. → Yes."],
  hi_simple: "हेल्थ इंश्योरेंस प्रीमियम पर टैक्स छूट मिलती है।",
  hi_normal: "Section 80D में परिवार और माता-पिता दोनों पर छूट मिलती है।",
  hi_faq: ["सीमा? → ₹25k–₹1 लाख।", "माता-पिता? → हाँ।", "सीनियर? → ज्यादा।", "कैश? → नहीं।"],
  hi_myths: ["सिर्फ खुद के लिए। → नहीं।", "अनलिमिटेड। → नहीं।", "कैश चलेगा। → नहीं।", "माता-पिता नहीं। → शामिल।"]
},

"Setting up banking alerts": {
  simple: "Enable SMS/email alerts for transactions to monitor your account and detect fraud quickly.",
  normal: "Activate alerts for debit/credit transactions, login attempts, and balance thresholds via bank app or net banking. Helps detect fraud instantly.",
  faq: ["Are alerts free? → Usually yes.", "Which alerts? → Transactions, login.", "Why important? → Fraud detection.", "Can I customise? → Yes."],
  myths: ["Alerts not needed. → Important.", "Only large transactions matter. → All matter.", "Emails enough. → Use SMS too.", "Too many alerts annoying. → Useful."],
  hi_simple: "ट्रांजैक्शन अलर्ट चालू करें।",
  hi_normal: "SMS और ईमेल अलर्ट से तुरंत जानकारी मिलती है।",
  hi_faq: ["फ्री हैं? → हाँ।", "कौन से अलर्ट? → ट्रांजैक्शन।", "क्यों जरूरी? → सुरक्षा।", "कस्टमाइज? → हाँ।"],
  hi_myths: ["जरूरी नहीं। → जरूरी।", "सिर्फ बड़े ट्रांजैक्शन। → नहीं।", "ईमेल काफी है। → नहीं।", "बहुत ज्यादा हैं। → उपयोगी।"]
},

"Shifting from growth to income in retirement": {
  simple: "In retirement, move from growth investments (equity) to stable income sources (FD, bonds).",
  normal: "As retirement approaches, gradually shift from equity to debt and income-generating assets. This reduces risk and provides steady cash flow.",
  faq: ["When to shift? → 5–10 years before retirement.", "Fully exit equity? → Not always.", "Best options? → Debt, annuity.", "Why shift? → Reduce volatility."],
  myths: ["Stay fully in equity. → Risky.", "Shift completely to FD. → Not ideal.", "No need to adjust. → Must adjust.", "Income not needed. → Essential."],
  hi_simple: "रिटायरमेंट में स्थिर आय वाले निवेश चुनें।",
  hi_normal: "धीरे-धीरे इक्विटी से डेट और इनकम स्रोतों में जाएं।",
  hi_faq: ["कब बदलें? → 5–10 साल पहले।", "पूरी इक्विटी छोड़ें? → नहीं।", "कौन से विकल्प? → डेट।", "क्यों? → जोखिम कम।"],
  hi_myths: ["पूरा इक्विटी रखें। → नहीं।", "सिर्फ FD करें। → नहीं।", "बदलाव जरूरी नहीं। → है।", "आय जरूरी नहीं। → है।"]
},

"Short term capital gains explained": {
  simple: "Short-term capital gains are profits from selling assets within a short period and are taxed at higher rates.",
  normal: "For equities: gains within 1 year taxed at 15%. For debt: taxed as per income slab. Short-term gains are higher taxed than long-term.",
  faq: ["Equity tax rate? → 15%.", "Debt tax? → Slab rate.", "Holding period? → <1 year.", "Can I avoid tax? → Limited options."],
  myths: ["No tax on gains. → Tax applies.", "Same as long-term. → Higher tax.", "All assets same. → Different rules.", "Small gains ignored. → Taxable."],
  hi_simple: "कम समय में बेचने पर ज्यादा टैक्स लगता है।",
  hi_normal: "इक्विटी पर 1 साल से पहले बेचने पर 15% टैक्स लगता है।",
  hi_faq: ["रेट? → 15%。", "डेट? → स्लैब।", "अवधि? → <1 साल।", "टैक्स बचा सकते हैं? → सीमित।"],
  hi_myths: ["टैक्स नहीं लगता। → लगता है।", "लॉन्ग टर्म जैसा। → नहीं।", "सब समान। → नहीं।", "छोटा लाभ नहीं गिना जाता। → गिना जाता है।"]
},

"Side income ideas for India": {
  simple: "Earn extra income through freelancing, tutoring, online selling, or part-time gigs.",
  normal: "Popular side incomes: freelancing (writing, design), tutoring, content creation, affiliate marketing, reselling, and online businesses. Choose based on skills and time availability.",
  faq: ["Best option? → Skill-based work.", "Needs investment? → Sometimes.", "Time required? → Flexible.", "Taxable? → Yes."],
  myths: ["Only online works. → Offline too.", "Quick money. → Takes time.", "Needs high investment. → Not always.", "Not for beginners. → Anyone can start."],
  hi_simple: "फ्रीलांस, ट्यूशन या ऑनलाइन काम से साइड इनकम करें।",
  hi_normal: "स्किल के अनुसार पार्ट-टाइम या ऑनलाइन काम से अतिरिक्त आय कमाएं।",
  hi_faq: ["क्या बेहतर? → स्किल आधारित।", "पैसा चाहिए? → कभी-कभी।", "समय? → लचीला।", "टैक्स? → लगता है।"],
  hi_myths: ["सिर्फ ऑनलाइन। → नहीं।", "जल्दी पैसा। → नहीं।", "ज्यादा पैसा चाहिए। → नहीं।", "शुरुआती नहीं कर सकते। → कर सकते हैं।"]
},

"Skills that increase income": {
  simple: "High-demand skills like tech, data, communication, and sales can significantly increase your income.",
  normal: "Top income-boosting skills: coding, data analysis, digital marketing, sales, communication, and problem-solving. Continuous learning is key to income growth.",
  faq: ["Best skills? → Tech and business skills.", "Time to learn? → Months.", "Degree required? → Not always.", "Free resources? → Many online."],
  myths: ["Only degrees matter. → Skills matter more.", "Learning ends after college. → Continuous.", "Skills not needed. → Essential.", "Too late to learn. → Never."],
  hi_simple: "नई स्किल सीखकर आय बढ़ाएं।",
  hi_normal: "टेक, डेटा और कम्युनिकेशन स्किल से आय तेजी से बढ़ती है।",
  hi_faq: ["कौन सी स्किल? → टेक।", "समय? → कुछ महीने।", "डिग्री? → जरूरी नहीं।", "फ्री सीख सकते हैं? → हाँ।"],
  hi_myths: ["डिग्री ही सब है। → नहीं।", "सीखना खत्म। → नहीं।", "स्किल जरूरी नहीं। → जरूरी।", "देर हो गई। → नहीं।"]
},
"Steps to take after bank fraud": {
  simple: "Immediately inform your bank, call 1930, block cards/accounts, and report on cybercrime.gov.in.",
  normal: "Act fast: (1) call your bank to block card/account, (2) call 1930 for financial fraud, (3) file complaint on cybercrime.gov.in, (4) change passwords/PINs, (5) keep transaction details. Quick action improves recovery chances.",
  faq: ["First step? → Inform bank immediately.", "Helpline? → 1930.", "Can money be recovered? → Sometimes if quick.", "Need FIR? → For larger frauds."],
  myths: ["Wait and see. → Act immediately.", "Small fraud not important. → Report anyway.", "Bank will handle everything. → You must report.", "Recovery impossible. → Possible if quick."],
  hi_simple: "तुरंत बैंक और 1930 पर संपर्क करें।",
  hi_normal: "बैंक को बताएं, 1930 पर कॉल करें और cybercrime पर रिपोर्ट करें।",
  hi_faq: ["पहला कदम? → बैंक।", "नंबर? → 1930।", "पैसा मिलेगा? → संभव।", "FIR? → बड़े केस में।"],
  hi_myths: ["रुको। → नहीं।", "छोटा है। → रिपोर्ट करें।", "बैंक संभालेगा। → आप भी करें।", "पैसा नहीं मिलेगा। → मिल सकता है।"]
},

"Stopping SIP during market crash": {
  simple: "Do not stop SIP during a market crash — it helps you buy more units at lower prices.",
  normal: "Stopping SIP during a crash reduces long-term returns. SIP works best in volatility by averaging cost. Continuing SIP during downturns helps accumulate more units cheaply.",
  faq: ["Should I pause SIP? → No.", "Is market risky? → Short-term yes.", "Best action? → Stay invested.", "Can I increase SIP? → Yes if possible."],
  myths: ["Stop SIP to avoid loss. → Opposite is true.", "Wait for market recovery. → Timing fails.", "SIP only for rising markets. → Works best in volatility.", "Loss is permanent. → Often temporary."],
  hi_simple: "मार्केट गिरने पर SIP बंद न करें।",
  hi_normal: "गिरावट में SIP जारी रखें — ज्यादा यूनिट्स मिलती हैं।",
  hi_faq: ["रोकें? → नहीं।", "रिस्क? → शॉर्ट टर्म।", "क्या करें? → जारी रखें।", "बढ़ा सकते हैं? → हाँ।"],
  hi_myths: ["रोकना सही है। → नहीं।", "रिकवरी का इंतजार करें। → नहीं।", "सिर्फ बढ़ते बाजार में। → नहीं।", "नुकसान स्थायी है। → नहीं।"]
},

"Strong password tips": {
  simple: "Use long, unique passwords with a mix of letters, numbers, and symbols.",
  normal: "Create strong passwords by: (1) using 12–16 characters, (2) mixing uppercase, lowercase, numbers, symbols, (3) avoiding personal info, (4) using different passwords for each account, (5) using a password manager.",
  faq: ["Ideal length? → 12–16 characters.", "Reuse passwords? → No.", "Password manager safe? → Yes.", "Change frequency? → Periodically."],
  myths: ["Short passwords are fine. → Weak.", "Same password everywhere. → Risky.", "Saving in browser is safe. → Not always.", "Hard to remember = bad. → Use manager."],
  hi_simple: "लंबा और यूनिक पासवर्ड रखें।",
  hi_normal: "12–16 अक्षर, नंबर और सिंबल मिलाकर मजबूत पासवर्ड बनाएं।",
  hi_faq: ["लंबाई? → 12–16।", "रीयूज? → नहीं।", "मैनेजर? → हाँ।", "कब बदलें? → समय-समय पर।"],
  hi_myths: ["छोटा ठीक है। → नहीं।", "एक ही पासवर्ड। → नहीं।", "ब्राउज़र सुरक्षित है। → नहीं।", "मुश्किल पासवर्ड खराब। → नहीं।"]
},

"Tax on FD interest": {
  simple: "Interest earned on FD is fully taxable as per your income tax slab.",
  normal: "FD interest is added to your total income and taxed as per slab. Banks deduct TDS if interest exceeds ₹40,000/year (₹50,000 for seniors).",
  faq: ["Tax rate? → As per slab.", "TDS limit? → ₹40k/₹50k.", "Can I avoid TDS? → Submit Form 15G/15H.", "Is interest tax-free? → No."],
  myths: ["FD interest is tax-free. → Taxable.", "TDS is final tax. → Adjust in ITR.", "No need to report. → Must report.", "Small interest ignored. → Taxable."],
  hi_simple: "FD का ब्याज टैक्सेबल होता है।",
  hi_normal: "ब्याज आपकी आय में जुड़ता है और स्लैब के अनुसार टैक्स लगता है।",
  hi_faq: ["रेट? → स्लैब।", "TDS? → ₹40k।", "बचा सकते हैं? → Form 15G।", "टैक्स फ्री? → नहीं।"],
  hi_myths: ["टैक्स नहीं लगता। → लगता है।", "TDS ही अंतिम है। → नहीं।", "रिपोर्ट नहीं करना। → करना है।", "छोटा ब्याज नहीं गिना जाता। → गिना जाता है।"]
},

"Tax on dividends in India": {
  simple: "Dividends are taxed as per your income tax slab in India.",
  normal: "Dividend income is added to your total income and taxed as per slab rate. TDS may apply if dividend exceeds ₹5,000 from a company.",
  faq: ["Tax rate? → As per slab.", "TDS limit? → ₹5,000.", "Tax-free earlier? → Yes, not now.", "Report in ITR? → Yes."],
  myths: ["Dividends are tax-free. → Not anymore.", "Only large dividends taxed. → All taxed.", "TDS is final tax. → Adjust in ITR.", "Ignore small dividends. → Report all."],
  hi_simple: "डिविडेंड पर स्लैब के अनुसार टैक्स लगता है।",
  hi_normal: "डिविडेंड आय में जुड़ता है और उसी अनुसार टैक्स लगता है।",
  hi_faq: ["रेट? → स्लैब।", "TDS? → ₹5k।", "पहले टैक्स फ्री? → हाँ।", "रिपोर्ट? → हाँ।"],
  hi_myths: ["टैक्स नहीं लगता। → लगता है।", "सिर्फ बड़ा टैक्स। → नहीं।", "TDS अंतिम है। → नहीं।", "छोटा छोड़ दें। → नहीं।"]
},

"The retirement corpus calculation": {
  simple: "Estimate your future expenses and multiply by 25–30 to calculate your retirement corpus.",
  normal: "Steps: calculate current expenses, adjust for inflation (~6%), then multiply annual expenses by 25–30. Example: ₹60,000 today → ~₹2 lakh future → corpus ~₹6 crore.",
  faq: ["Why 25–30? → Safe withdrawal rule.", "Include inflation? → Yes.", "Early retirement? → Higher multiple.", "Exact amount? → Estimate."],
  myths: ["1 crore is enough. → Usually not.", "Inflation negligible. → Major impact.", "Fixed number works. → Needs update.", "Late planning ok. → Risky."],
  hi_simple: "खर्च × 25–30 = रिटायरमेंट फंड।",
  hi_normal: "महंगाई जोड़कर सालाना खर्च का 25–30 गुना रखें।",
  hi_faq: ["क्यों? → 4% नियम।", "इन्फ्लेशन? → हाँ।", "जल्दी रिटायर? → ज्यादा।", "सटीक? → अनुमान।"],
  hi_myths: ["1 करोड़ काफी। → नहीं।", "महंगाई कम। → नहीं।", "फिक्स है। → नहीं।", "बाद में करेंगे। → नहीं।"]
},

"Third party vs comprehensive insurance": {
  simple: "Third-party insurance covers damage to others, while comprehensive covers your vehicle and third-party damage.",
  normal: "Third-party insurance is mandatory and covers damage to others. Comprehensive insurance covers own vehicle damage + third-party + theft + disasters. Comprehensive offers better protection.",
  faq: ["Is third-party enough? → Minimal coverage.", "Comprehensive cost? → Higher.", "Mandatory? → Third-party only.", "Best option? → Comprehensive."],
  myths: ["Third-party covers everything. → No.", "Comprehensive is waste. → Better protection.", "Insurance not needed. → Mandatory.", "Cheap is best. → Not always."],
  hi_simple: "थर्ड पार्टी = दूसरों का नुकसान, कॉम्प्रिहेंसिव = अपना + दूसरों का।",
  hi_normal: "कॉम्प्रिहेंसिव इंश्योरेंस ज्यादा सुरक्षा देता है।",
  hi_faq: ["थर्ड पार्टी काफी? → नहीं।", "महंगा? → हाँ।", "जरूरी? → थर्ड पार्टी।", "बेहतर? → कॉम्प्रिहेंसिव।"],
  hi_myths: ["सब कवर करता है। → नहीं।", "कॉम्प्रिहेंसिव बेकार। → नहीं।", "इंश्योरेंस जरूरी नहीं। → जरूरी।", "सस्ता बेहतर। → नहीं।"]
},

"Tools to track expenses in India": {
  simple: "Use apps like Walnut, Money Manager, or Excel to track your daily expenses.",
  normal: "Popular tools: Walnut, ET Money, Money Manager, Excel sheets. Tracking expenses helps control spending and improve savings.",
  faq: ["Best app? → Walnut/ET Money.", "Manual tracking? → Excel.", "Why track? → Control spending.", "Frequency? → Daily/weekly."],
  myths: ["Tracking not needed. → Important.", "Memory is enough. → Not accurate.", "Apps unsafe. → Most are safe.", "Too time-consuming. → Quick habit."],
  hi_simple: "खर्च ट्रैक करने के लिए ऐप या Excel इस्तेमाल करें।",
  hi_normal: "Walnut, ET Money या Excel से खर्च ट्रैक करें।",
  hi_faq: ["कौन सा ऐप? → Walnut।", "Excel? → हाँ।", "क्यों? → खर्च कंट्रोल।", "कितनी बार? → रोज़।"],
  hi_myths: ["जरूरी नहीं। → है।", "याद रहेगा। → नहीं।", "ऐप unsafe हैं। → नहीं।", "समय लगता है। → कम।"]
},

"Transfer limits and timings": {
  simple: "Different transfer methods like UPI, NEFT, RTGS, and IMPS have different limits and timings.",
  normal: "UPI: instant, up to ₹1–5 lakh. IMPS: instant, up to ₹5 lakh. NEFT: batch/24x7, no fixed limit. RTGS: high-value transfers (₹2 lakh+). Choose based on amount and urgency.",
  faq: ["Fastest method? → UPI/IMPS.", "High-value? → RTGS.", "Any time transfer? → Yes (UPI/IMPS/NEFT).", "Charges? → Usually free."],
  myths: ["All transfers same. → Different.", "RTGS fastest always. → Depends.", "UPI has no limit. → Has limits.", "NEFT slow always. → Now faster."],
  hi_simple: "UPI, NEFT, RTGS के अलग लिमिट और समय होते हैं।",
  hi_normal: "छोटे ट्रांसफर के लिए UPI, बड़े के लिए RTGS इस्तेमाल करें।",
  hi_faq: ["सबसे तेज? → UPI।", "बड़ा ट्रांसफर? → RTGS।", "कभी भी? → हाँ।", "चार्ज? → कम।"],
  hi_myths: ["सब एक जैसे। → नहीं।", "RTGS हमेशा तेज। → नहीं।", "UPI लिमिट नहीं। → है।", "NEFT धीमा। → नहीं।"]
},

"Two-factor authentication explained": {
  simple: "Two-factor authentication (2FA) adds an extra layer of security using OTP or app verification.",
  normal: "2FA requires two steps to log in: password + OTP/app code. It significantly reduces risk of account hacking even if password is compromised.",
  faq: ["Why use 2FA? → Extra security.", "Types? → OTP, authenticator apps.", "Mandatory? → Recommended.", "Can it be hacked? → Very difficult."],
  myths: ["Password is enough. → Not safe.", "2FA is annoying. → Worth it.", "OTP sharing safe. → Never.", "Only for banks. → All accounts."],
  hi_simple: "2FA = पासवर्ड + OTP सुरक्षा।",
  hi_normal: "पासवर्ड के साथ OTP जोड़कर सुरक्षा बढ़ाई जाती है।",
  hi_faq: ["क्यों जरूरी? → सुरक्षा।", "टाइप? → OTP।", "जरूरी? → हाँ।", "हैक हो सकता है? → मुश्किल।"],
  hi_myths: ["पासवर्ड काफी है। → नहीं।", "झंझट है। → जरूरी।", "OTP शेयर करें। → नहीं।", "सिर्फ बैंक के लिए। → नहीं।"]
},
"Types of income sources": {
  simple: "Income can come from salary, business, investments, or passive sources like rent and dividends.",
  normal: "Main income types: (1) active income (salary, business), (2) passive income (rent, dividends), (3) portfolio income (capital gains). Multiple sources improve financial stability.",
  faq: ["Best type? → Diversified income.", "Passive income easy? → Takes time.", "Salary enough? → Risky alone.", "Can I have multiple? → Yes."],
  myths: ["Only salary is enough. → Risky.", "Passive income is instant. → Takes effort.", "Business always better. → Depends.", "One source is safe. → No."],
  hi_simple: "इनकम सैलरी, बिजनेस या निवेश से आती है।",
  hi_normal: "सैलरी, बिजनेस और निवेश से अलग-अलग आय होती है।",
  hi_faq: ["सबसे अच्छा? → विविधता।", "पैसिव आसान? → नहीं।", "सैलरी काफी? → नहीं।", "कई स्रोत? → हाँ।"],
  hi_myths: ["सिर्फ सैलरी काफी। → नहीं।", "पैसिव तुरंत। → नहीं।", "बिजनेस हमेशा बेहतर। → नहीं।", "एक स्रोत सुरक्षित। → नहीं।"]
},

"Types of investment risk": {
  simple: "Investment risks include market risk, inflation risk, credit risk, and liquidity risk.",
  normal: "Common risks: (1) market risk (price fluctuation), (2) inflation risk (loss of purchasing power), (3) credit risk (default), (4) liquidity risk (difficulty selling), (5) interest rate risk. Understanding risks helps better decisions.",
  faq: ["Can risk be avoided? → No.", "Which is biggest? → Depends.", "Safe investments risk-free? → No.", "How to reduce? → Diversify."],
  myths: ["FD has no risk. → Inflation risk exists.", "Equity always risky. → Long-term reduces risk.", "Risk means loss. → Not always.", "Avoid all risk. → Impossible."],
  hi_simple: "निवेश में कई तरह के जोखिम होते हैं।",
  hi_normal: "मार्केट, महंगाई, क्रेडिट और लिक्विडिटी रिस्क होते हैं।",
  hi_faq: ["रिस्क खत्म? → नहीं।", "सबसे बड़ा? → निर्भर।", "FD सुरक्षित? → पूरी तरह नहीं।", "कम कैसे करें? → विविधता।"],
  hi_myths: ["FD में रिस्क नहीं। → है।", "इक्विटी हमेशा risky। → नहीं।", "रिस्क = नुकसान। → नहीं।", "रिस्क से बचें। → नहीं।"]
},

"UPI fraud types": {
  simple: "Common UPI frauds include fake payment requests, QR scams, and OTP scams.",
  normal: "UPI fraud types: (1) collect request scams, (2) fake QR codes, (3) screen-sharing apps, (4) OTP fraud. Never approve unknown requests or share OTP.",
  faq: ["Can money be reversed? → Sometimes if quick.", "Is QR safe? → Verify source.", "OTP needed for receiving? → No.", "What to do? → Report immediately."],
  myths: ["You need OTP to receive money. → False.", "QR scan always safe. → No.", "UPI apps unsafe. → Safe if used properly.", "Small fraud okay. → Report."],
  hi_simple: "UPI में फर्जी रिक्वेस्ट और QR स्कैम होते हैं।",
  hi_normal: "OTP और collect request से जुड़े फ्रॉड से बचें।",
  hi_faq: ["पैसा वापस? → जल्दी करें तो।", "QR सुरक्षित? → जांचें।", "OTP चाहिए? → नहीं।", "क्या करें? → रिपोर्ट करें।"],
  hi_myths: ["OTP देना जरूरी। → नहीं।", "QR हमेशा सुरक्षित। → नहीं।", "UPI unsafe है। → नहीं।", "छोटा फ्रॉड ठीक। → नहीं।"]
},

"UPI safety tips": {
  simple: "Never share OTP, verify payment requests, and avoid unknown QR codes.",
  normal: "Safety tips: (1) never share OTP, (2) verify collect requests, (3) avoid unknown QR codes, (4) don’t install screen-sharing apps, (5) use official apps only.",
  faq: ["OTP needed to receive money? → No.", "Safe apps? → Official apps.", "QR safe? → Only trusted.", "What if scammed? → Report immediately."],
  myths: ["OTP sharing is safe. → Never.", "All QR codes safe. → No.", "UPI needs PIN for receiving. → No.", "Small apps are fine. → Risky."],
  hi_simple: "OTP शेयर न करें और फर्जी QR से बचें।",
  hi_normal: "सिर्फ भरोसेमंद QR और ऐप का इस्तेमाल करें।",
  hi_faq: ["OTP चाहिए? → नहीं।", "कौन सा ऐप? → ऑफिशियल।", "QR सुरक्षित? → भरोसेमंद।", "फ्रॉड? → रिपोर्ट करें।"],
  hi_myths: ["OTP देना ठीक। → नहीं।", "QR सुरक्षित। → नहीं।", "PIN चाहिए। → नहीं।", "कोई भी ऐप चलेगा। → नहीं।"]
},

"Variable income explained": {
  simple: "Variable income means your earnings change every month instead of being fixed.",
  normal: "Variable income includes freelancing, business, commissions. Income fluctuates, so budgeting should be based on minimum expected income and savings should cover low months.",
  faq: ["Stable? → No.", "How to budget? → Minimum income.", "Emergency fund? → Essential.", "Can invest? → Yes."],
  myths: ["Unstable means bad. → Not necessarily.", "Budgeting impossible. → Possible.", "No savings possible. → Possible.", "Only fixed income works. → No."],
  hi_simple: "हर महीने अलग आय = variable income।",
  hi_normal: "फ्रीलांस या बिजनेस आय हर महीने बदलती है।",
  hi_faq: ["स्थिर? → नहीं।", "बजट? → कम आय पर।", "फंड? → जरूरी।", "निवेश? → हाँ।"],
  hi_myths: ["खराब है। → नहीं।", "बजट नहीं हो सकता। → हो सकता है।", "बचत नहीं। → हो सकती है।", "फिक्स जरूरी। → नहीं।"]
},

"Waiting period in health insurance": {
  simple: "Waiting period is the time after buying a policy during which certain claims are not allowed.",
  normal: "Health insurance has waiting periods: initial (30 days), specific diseases (1–2 years), and pre-existing diseases (2–4 years). Claims are not allowed during this period.",
  faq: ["Initial waiting? → 30 days.", "Pre-existing? → 2–4 years.", "Emergency covered? → Yes.", "Can reduce waiting? → Sometimes."],
  myths: ["All claims allowed immediately. → No.", "Waiting period same for all. → Varies.", "No cover during waiting. → Limited cover.", "Can skip waiting. → No."],
  hi_simple: "कुछ समय तक कुछ बीमारियों का क्लेम नहीं मिलता।",
  hi_normal: "पॉलिसी के बाद कुछ बीमारियों पर 2–4 साल का इंतजार होता है।",
  hi_faq: ["कितना समय? → 30 दिन+।", "पुरानी बीमारी? → 2–4 साल।", "इमरजेंसी? → कवर।", "कम कर सकते हैं? → कभी-कभी।"],
  hi_myths: ["तुरंत सब कवर। → नहीं।", "सबमें समान। → नहीं।", "कवर नहीं मिलता। → मिलता है सीमित।", "इसे छोड़ सकते हैं। → नहीं।"]
},

"What are asset classes": {
  simple: "Asset classes are categories of investments like equity, debt, gold, and real estate.",
  normal: "Major asset classes include equity (stocks), debt (bonds/FD), gold, and real estate. Each has different risk and return characteristics. Diversification across them reduces risk.",
  faq: ["Best asset class? → Depends on goals.", "Why diversify? → Reduce risk.", "Can I choose one? → Not advisable.", "Gold needed? → Small allocation."],
  myths: ["Equity is best always. → Depends.", "Debt useless. → Stability.", "Gold gives high returns. → Hedge.", "One asset enough. → No."],
  hi_simple: "निवेश के अलग प्रकार = asset classes।",
  hi_normal: "इक्विटी, डेट, गोल्ड और रियल एस्टेट अलग asset classes हैं।",
  hi_faq: ["सबसे अच्छा? → लक्ष्य पर।", "विविधता क्यों? → जोखिम कम।", "एक चुनें? → नहीं।", "गोल्ड? → थोड़ा।"],
  hi_myths: ["इक्विटी हमेशा बेहतर। → नहीं।", "डेट बेकार। → नहीं।", "गोल्ड ज्यादा देता है। → नहीं।", "एक ही काफी। → नहीं।"]
},

"What are deductions from salary": {
  simple: "Deductions from salary include taxes, EPF contributions, and professional tax.",
  normal: "Common deductions: income tax (TDS), EPF contribution, professional tax, and other benefits like insurance premiums. These reduce your take-home salary.",
  faq: ["Main deduction? → TDS.", "EPF mandatory? → Yes for eligible.", "Can reduce deductions? → Through tax planning.", "Net salary? → After deductions."],
  myths: ["Salary = take-home. → Not true.", "All deductions bad. → Some are savings.", "Cannot reduce tax. → Can plan.", "EPF optional. → Mandatory in many cases."],
  hi_simple: "सैलरी से टैक्स और EPF कटता है।",
  hi_normal: "TDS, EPF और अन्य कटौतियां सैलरी से घटती हैं।",
  hi_faq: ["मुख्य कटौती? → TDS।", "EPF जरूरी? → हाँ।", "कम कर सकते हैं? → हाँ।", "नेट सैलरी? → कटौती के बाद।"],
  hi_myths: ["पूरी सैलरी मिलती है। → नहीं।", "कटौती खराब है। → नहीं।", "टैक्स कम नहीं हो सकता। → हो सकता है।", "EPF वैकल्पिक। → नहीं।"]
},

"What happens if you outlive term policy": {
  simple: "If you outlive a term insurance policy, no payout is given — it only covers death risk.",
  normal: "Term insurance provides payout only if the insured dies during the policy period. If you survive, no maturity benefit is paid. It is pure risk protection.",
  faq: ["Money back? → No.", "Is it waste? → No, protection.", "Can extend policy? → Some options.", "Cheapest insurance? → Yes."],
  myths: ["Money is lost. → You got protection.", "Should avoid term plans. → Essential.", "Endowment better. → Costlier.", "Only for old people. → Start early."],
  hi_simple: "टर्म प्लान में जीवित रहने पर पैसा नहीं मिलता।",
  hi_normal: "टर्म इंश्योरेंस केवल मृत्यु पर भुगतान करता है।",
  hi_faq: ["पैसा वापस? → नहीं।", "बेकार है? → नहीं।", "बढ़ा सकते हैं? → हाँ।", "सस्ता है? → हाँ।"],
  hi_myths: ["पैसा खो गया। → सुरक्षा मिली।", "टर्म प्लान नहीं लेना चाहिए। → लेना चाहिए।", "एंडोमेंट बेहतर। → नहीं।", "सिर्फ बुजुर्ग के लिए। → नहीं।"]
},

"What health insurance covers": {
  simple: "Health insurance covers hospitalisation, treatment costs, and sometimes pre- and post-hospital expenses.",
  normal: "Health insurance typically covers hospitalisation, surgeries, doctor fees, medicines, and pre/post-hospitalisation expenses. Coverage depends on policy terms.",
  faq: ["Does it cover OPD? → Usually not.", "Includes medicines? → Yes.", "Pre-existing covered? → After waiting.", "Room rent covered? → Yes."],
  myths: ["Covers everything. → Depends.", "No need when young. → Important.", "Corporate cover enough. → Not always.", "Claims always rejected. → If valid, approved."],
  hi_simple: "हेल्थ इंश्योरेंस अस्पताल खर्च कवर करता है।",
  hi_normal: "हॉस्पिटल, दवाइयाँ और इलाज का खर्च कवर होता है।",
  hi_faq: ["OPD कवर? → नहीं।", "दवाइयाँ? → हाँ।", "पुरानी बीमारी? → बाद में।", "रूम? → हाँ।"],
  hi_myths: ["सब कवर करता है। → नहीं।", "युवा को जरूरत नहीं। → है।", "कॉर्पोरेट काफी। → नहीं।", "क्लेम नहीं मिलता। → मिलता है।"]
},

"What health insurance does not cover": {
  simple: "Health insurance does not cover pre-existing diseases during waiting period, cosmetic treatments, and non-medical expenses.",
  normal: "Common exclusions: (1) pre-existing diseases during waiting period, (2) cosmetic surgeries, (3) dental/OPD (in most plans), (4) self-inflicted injuries, (5) non-prescribed treatments. Always read policy details.",
  faq: ["Pre-existing covered? → After waiting period.", "Cosmetic covered? → No.", "OPD included? → Usually not.", "Emergency covered? → Yes."],
  myths: ["Everything is covered. → No.", "Claims always rejected. → Only invalid ones.", "No need to read policy. → Must read.", "Cheap plans same. → Coverage differs."],
  hi_simple: "कुछ इलाज जैसे कॉस्मेटिक और पुरानी बीमारी शुरू में कवर नहीं होती।",
  hi_normal: "वेटिंग पीरियड, कॉस्मेटिक ट्रीटमेंट और कुछ खर्च कवर नहीं होते।",
  hi_faq: ["पुरानी बीमारी? → बाद में।", "कॉस्मेटिक? → नहीं।", "OPD? → नहीं।", "इमरजेंसी? → हाँ।"],
  hi_myths: ["सब कवर होता है। → नहीं।", "क्लेम नहीं मिलता। → मिलता है।", "पॉलिसी पढ़ना जरूरी नहीं। → जरूरी है।", "सस्ते प्लान समान। → नहीं।"]
},

"What index funds track": {
  simple: "Index funds track a market index like Nifty 50 or Sensex.",
  normal: "Index funds replicate the performance of a market index (e.g., Nifty 50). They invest in the same stocks in the same proportion, offering low-cost passive investing.",
  faq: ["Active or passive? → Passive.", "Low cost? → Yes.", "Good for beginners? → Yes.", "Returns? → Similar to index."],
  myths: ["Can beat market always. → Track market.", "High returns guaranteed. → Market-linked.", "Complex product. → Simple.", "Not good for long-term. → Ideal."],
  hi_simple: "इंडेक्स फंड Nifty या Sensex को फॉलो करते हैं।",
  hi_normal: "ये मार्केट इंडेक्स जैसा ही प्रदर्शन करते हैं।",
  hi_faq: ["एक्टिव? → नहीं।", "सस्ता? → हाँ।", "शुरुआती के लिए? → हाँ।", "रिटर्न? → इंडेक्स जैसा।"],
  hi_myths: ["हमेशा outperform करते हैं। → नहीं।", "गारंटीड रिटर्न। → नहीं।", "मुश्किल है। → नहीं।", "लॉन्ग टर्म अच्छा नहीं। → अच्छा है।"]
},

"What is CIBIL score": {
  simple: "CIBIL score is a number (300–900) that shows your creditworthiness.",
  normal: "CIBIL score reflects your credit history. Higher score (750+) improves chances of loan approval and lower interest rates. Based on repayment behavior and credit usage.",
  faq: ["Good score? → 750+.", "Range? → 300–900.", "Check free? → Yes.", "Improve? → Pay on time."],
  myths: ["No loans = high score. → No history.", "Checking score reduces it. → No.", "Only banks decide score. → Bureau does.", "Score not important. → Very important."],
  hi_simple: "CIBIL स्कोर आपकी क्रेडिट हिस्ट्री दिखाता है।",
  hi_normal: "750+ स्कोर अच्छा माना जाता है।",
  hi_faq: ["अच्छा स्कोर? → 750+।", "रेंज? → 300–900।", "फ्री चेक? → हाँ।", "कैसे बढ़ाएं? → समय पर भुगतान।"],
  hi_myths: ["लोन नहीं = अच्छा स्कोर। → नहीं।", "चेक करने से घटता है। → नहीं।", "बैंक तय करते हैं। → नहीं।", "जरूरी नहीं। → जरूरी।"]
},

"What is ELSS": {
  simple: "ELSS is a tax-saving mutual fund with a 3-year lock-in under Section 80C.",
  normal: "Equity Linked Savings Scheme (ELSS) invests in equities and offers tax deduction up to ₹1.5 lakh under 80C. It has the shortest lock-in (3 years) among tax-saving options.",
  faq: ["Lock-in? → 3 years.", "Risk? → Equity risk.", "Tax benefit? → 80C.", "Returns? → Market-linked."],
  myths: ["Guaranteed returns. → No.", "Short-term safe. → No.", "Better than all options. → Depends.", "No risk. → Equity risk."],
  hi_simple: "ELSS = टैक्स बचाने वाला इक्विटी फंड।",
  hi_normal: "3 साल लॉक-इन और 80C में छूट देता है।",
  hi_faq: ["लॉक-इन? → 3 साल।", "रिस्क? → इक्विटी।", "छूट? → 80C।", "रिटर्न? → मार्केट।"],
  hi_myths: ["गारंटीड रिटर्न। → नहीं।", "सुरक्षित। → नहीं।", "सबसे अच्छा। → निर्भर।", "रिस्क नहीं। → है।"]
},

"What is EPF": {
  simple: "EPF is a retirement savings scheme where both employee and employer contribute monthly.",
  normal: "Employees’ Provident Fund (EPF) is a mandatory retirement scheme. 12% of salary is contributed by employee and employer each month. It earns interest (~8%+).",
  faq: ["Mandatory? → Yes for eligible.", "Interest? → ~8%+", "Withdrawal? → Rules apply.", "Tax benefit? → Yes."],
  myths: ["Only employee contributes. → Employer also.", "Can withdraw anytime. → Limited.", "Low returns. → Competitive.", "Not useful. → Important."],
  hi_simple: "EPF में कर्मचारी और कंपनी दोनों पैसा जमा करते हैं।",
  hi_normal: "हर महीने सैलरी का हिस्सा जमा होता है और ब्याज मिलता है।",
  hi_faq: ["जरूरी? → हाँ।", "ब्याज? → ~8%。", "निकासी? → नियम अनुसार।", "टैक्स लाभ? → हाँ।"],
  hi_myths: ["सिर्फ कर्मचारी देता है। → नहीं।", "कभी भी निकाल सकते हैं। → नहीं।", "कम रिटर्न। → नहीं।", "बेकार है। → नहीं।"]
},

"What is EPS": {
  simple: "EPS is the pension part of EPF that provides monthly pension after retirement.",
  normal: "Employees’ Pension Scheme (EPS) is funded from employer’s EPF contribution. It provides pension after retirement if eligibility conditions are met.",
  faq: ["Who contributes? → Employer.", "Pension age? → 58 years.", "Minimum service? → 10 years.", "Withdraw early? → Limited."],
  myths: ["Employee contributes. → Employer part.", "Huge pension. → Modest.", "Optional scheme. → Linked to EPF.", "No benefit. → Provides pension."],
  hi_simple: "EPS से रिटायरमेंट पर पेंशन मिलती है।",
  hi_normal: "यह EPF का पेंशन हिस्सा है।",
  hi_faq: ["कौन देता है? → कंपनी।", "उम्र? → 58।", "सेवा? → 10 साल।", "निकासी? → सीमित।"],
  hi_myths: ["कर्मचारी देता है। → नहीं।", "ज्यादा पेंशन। → नहीं।", "वैकल्पिक। → नहीं।", "फायदा नहीं। → है।"]
},

"What is GST": {
  simple: "GST is a tax on goods and services in India, replacing multiple indirect taxes.",
  normal: "Goods and Services Tax (GST) is a unified tax system applied on supply of goods and services. Rates vary (5%, 12%, 18%, 28%). It simplifies taxation.",
  faq: ["Who pays GST? → Consumers/businesses.", "Rates? → 5–28%.", "Replaced taxes? → Yes.", "Mandatory registration? → Above threshold."],
  myths: ["GST is one rate. → Multiple rates.", "Only businesses pay. → Consumers indirectly.", "Optional. → Mandatory for eligible.", "Complicated. → Simplified system."],
  hi_simple: "GST सामान और सेवाओं पर टैक्स है।",
  hi_normal: "यह कई टैक्स को मिलाकर एक सिस्टम बनाता है।",
  hi_faq: ["कौन देता है? → सभी।", "रेट? → 5–28%。", "पुराने टैक्स हटे? → हाँ।", "रजिस्ट्रेशन? → जरूरी।"],
  hi_myths: ["एक ही रेट है। → नहीं।", "सिर्फ बिजनेस देता है। → नहीं।", "वैकल्पिक। → नहीं।", "मुश्किल है। → नहीं।"]
},

"What is ITR": {
  simple: "ITR is a form used to report your income and pay taxes to the government.",
  normal: "Income Tax Return (ITR) is filed annually to declare income, deductions, and taxes paid. It helps in refunds, loans, and compliance.",
  faq: ["Who files? → Eligible taxpayers.", "Why file? → Legal compliance.", "Last date? → July 31 (usually).", "Online? → Yes."],
  myths: ["Only rich file ITR. → Not true.", "Not needed if TDS deducted. → Still required.", "Complex process. → Simple.", "No benefit. → Many benefits."],
  hi_simple: "ITR आय और टैक्स की जानकारी देने का फॉर्म है।",
  hi_normal: "हर साल इनकम और टैक्स दिखाने के लिए ITR फाइल करते हैं।",
  hi_faq: ["कौन फाइल करता है? → योग्य लोग।", "क्यों? → कानून।", "लास्ट डेट? → 31 जुलाई।", "ऑनलाइन? → हाँ।"],
  hi_myths: ["सिर्फ अमीर लोग। → नहीं।", "TDS काफी है। → नहीं।", "मुश्किल है। → नहीं।", "कोई फायदा नहीं। → है।"]
},

"What is NAV": {
  simple: "NAV is the per-unit price of a mutual fund.",
  normal: "Net Asset Value (NAV) is calculated as total fund value divided by number of units. It changes daily based on market value of underlying assets.",
  faq: ["Low NAV better? → No.", "Changes daily? → Yes.", "Used for buying? → Yes.", "Indicates cheap? → No."],
  myths: ["Low NAV = cheap fund. → Wrong.", "High NAV expensive. → Wrong.", "NAV predicts returns. → No.", "Important factor. → Not primary."],
  hi_simple: "NAV म्यूचुअल फंड की यूनिट कीमत है।",
  hi_normal: "यह रोज बदलती है और फंड की वैल्यू दिखाती है।",
  hi_faq: ["कम NAV अच्छा? → नहीं।", "रोज बदलता है? → हाँ।", "खरीदने में? → हाँ।", "सस्ता दिखाता है? → नहीं।"],
  hi_myths: ["कम NAV बेहतर। → नहीं।", "ज्यादा NAV महंगा। → नहीं।", "रिटर्न बताता है। → नहीं।", "मुख्य फैक्टर। → नहीं।"]
},

"What is NPS": {
  simple: "NPS is a government-backed retirement scheme that invests in equity and debt.",
  normal: "National Pension System (NPS) is a long-term retirement scheme offering tax benefits and market-linked returns. It includes equity and debt allocation with partial withdrawal restrictions.",
  faq: ["Tax benefits? → Yes.", "Lock-in? → Till retirement.", "Risk? → Moderate.", "Returns? → Market-linked."],
  myths: ["Guaranteed returns. → No.", "Fully equity. → Mixed.", "No tax benefit. → Yes.", "Flexible withdrawal anytime. → Restricted."],
  hi_simple: "NPS रिटायरमेंट के लिए निवेश योजना है।",
  hi_normal: "यह इक्विटी और डेट में निवेश करता है और टैक्स लाभ देता है।",
  hi_faq: ["टैक्स लाभ? → हाँ।", "लॉक-इन? → रिटायरमेंट तक।", "रिस्क? → मध्यम।", "रिटर्न? → मार्केट।"],
  hi_myths: ["गारंटीड रिटर्न। → नहीं।", "सिर्फ इक्विटी। → नहीं।", "टैक्स लाभ नहीं। → है।", "कभी भी निकाल सकते हैं। → नहीं।"]
},

"What is Nifty 50": {
  simple: "Nifty 50 is an index of the top 50 companies listed on the NSE.",
  normal: "Nifty 50 represents the performance of 50 large-cap companies across sectors on the National Stock Exchange. It is widely used as a benchmark for the Indian stock market.",
  faq: ["What does it track? → Top 50 companies.", "Used for? → Benchmarking.", "Can I invest? → Via index funds/ETFs.", "Changes over time? → Yes."],
  myths: ["Only 50 stocks matter. → Represents broader market.", "Cannot invest in it. → Can via funds.", "Always goes up. → Market-linked.", "Same as Sensex. → Different index."],
  hi_simple: "Nifty 50 भारत की 50 बड़ी कंपनियों का इंडेक्स है।",
  hi_normal: "यह NSE की 50 बड़ी कंपनियों का प्रदर्शन दिखाता है।",
  hi_faq: ["क्या ट्रैक करता है? → 50 कंपनियां।", "क्यों उपयोग? → बेंचमार्क।", "निवेश? → हाँ।", "बदलता है? → हाँ।"],
  hi_myths: ["सिर्फ 50 ही मायने रखते हैं। → नहीं।", "निवेश नहीं कर सकते। → कर सकते हैं।", "हमेशा बढ़ता है। → नहीं।", "Sensex जैसा। → नहीं।"]
},

"What is OTP fraud": {
  simple: "OTP fraud is when scammers trick you into sharing your one-time password to steal money.",
  normal: "Fraudsters call or message pretending to be bank officials and ask for OTP. Once shared, they complete unauthorized transactions. Never share OTP with anyone.",
  faq: ["Should I share OTP? → Never.", "Do banks ask OTP? → No.", "What if shared? → Inform bank immediately.", "Can it be prevented? → Yes."],
  myths: ["OTP needed to receive money. → False.", "Sharing OTP is safe. → No.", "Only online fraud. → Calls too.", "Small leak harmless. → Risky."],
  hi_simple: "OTP शेयर करने से धोखाधड़ी होती है।",
  hi_normal: "फर्जी कॉल या मैसेज से OTP लेकर पैसा चोरी किया जाता है।",
  hi_faq: ["OTP दें? → नहीं।", "बैंक मांगता है? → नहीं।", "शेयर हो गया? → तुरंत बताएं।", "बचाव? → हाँ।"],
  hi_myths: ["OTP जरूरी है। → नहीं।", "शेयर सुरक्षित। → नहीं।", "सिर्फ ऑनलाइन। → नहीं।", "छोटी गलती ठीक। → नहीं।"]
},

"What is P/E ratio": {
  simple: "P/E ratio shows how much investors are willing to pay for a company’s earnings.",
  normal: "Price-to-Earnings (P/E) ratio = stock price ÷ earnings per share. A high P/E suggests higher expectations, while low P/E may indicate undervaluation or risk.",
  faq: ["High P/E good? → Not always.", "Low P/E better? → Not always.", "Used for? → Valuation.", "Same across sectors? → No."],
  myths: ["Low P/E always best. → Not always.", "High P/E always bad. → Not always.", "Only metric needed. → No.", "Same meaning everywhere. → Context matters."],
  hi_simple: "P/E बताता है कि कंपनी की कमाई के मुकाबले शेयर कितना महंगा है।",
  hi_normal: "P/E = शेयर कीमत ÷ कमाई। इससे वैल्यू समझते हैं।",
  hi_faq: ["हाई P/E अच्छा? → नहीं।", "लो P/E अच्छा? → नहीं।", "क्यों उपयोग? → वैल्यू।", "सबमें समान? → नहीं।"],
  hi_myths: ["लो P/E हमेशा अच्छा। → नहीं।", "हाई P/E खराब। → नहीं।", "सिर्फ यही जरूरी। → नहीं।", "हर जगह समान। → नहीं।"]
},

"What is PPF": {
  simple: "PPF is a government-backed long-term savings scheme with tax-free returns.",
  normal: "Public Provident Fund (PPF) is a 15-year investment scheme offering tax benefits (EEE) and safe returns (~7–8%). Ideal for long-term savings.",
  faq: ["Lock-in? → 15 years.", "Tax benefit? → Yes.", "Safe? → Very.", "Interest? → ~7–8%."],
  myths: ["Short-term option. → Long-term.", "Taxable returns. → Tax-free.", "High risk. → Very safe.", "Low value. → Strong compounding."],
  hi_simple: "PPF सुरक्षित और टैक्स-फ्री निवेश है।",
  hi_normal: "15 साल का सुरक्षित निवेश जिसमें ब्याज और मैच्योरिटी टैक्स फ्री है।",
  hi_faq: ["लॉक-इन? → 15 साल।", "टैक्स लाभ? → हाँ।", "सुरक्षित? → हाँ।", "ब्याज? → ~7–8%。"],
  hi_myths: ["शॉर्ट टर्म। → नहीं।", "टैक्स लगता है। → नहीं।", "रिस्की है। → नहीं।", "कम फायदा। → नहीं।"]
},

"What is SIM swap fraud": {
  simple: "SIM swap fraud is when someone takes control of your mobile number to access your bank accounts.",
  normal: "Fraudsters duplicate your SIM card and receive OTPs meant for you, enabling them to access bank accounts. Sudden loss of network is a warning sign.",
  faq: ["Sign? → No network suddenly.", "What to do? → Contact telecom immediately.", "Bank risk? → Yes.", "Prevent? → Avoid sharing details."],
  myths: ["Rare fraud. → Increasing.", "Only tech users affected. → Anyone.", "OTP safe even after swap. → No.", "Delay ok. → Act fast."],
  hi_simple: "SIM बदलकर आपका नंबर चुरा लिया जाता है।",
  hi_normal: "फ्रॉड में आपका SIM कॉपी करके OTP लिया जाता है।",
  hi_faq: ["संकेत? → नेटवर्क गायब।", "क्या करें? → तुरंत कॉल।", "बैंक खतरा? → हाँ।", "बचाव? → जानकारी न दें।"],
  hi_myths: ["कम होता है। → बढ़ रहा है।", "सिर्फ टेक यूजर। → नहीं।", "OTP सुरक्षित। → नहीं।", "देरी ठीक है। → नहीं।"]
},

"What is Section 80C": {
  simple: "Section 80C allows tax deductions up to ₹1.5 lakh on certain investments.",
  normal: "Section 80C includes investments like PPF, EPF, ELSS, life insurance, and principal repayment of home loan. Maximum deduction allowed is ₹1.5 lakh per year.",
  faq: ["Limit? → ₹1.5 lakh.", "Includes ELSS? → Yes.", "Includes PPF? → Yes.", "Applicable in new regime? → No."],
  myths: ["Unlimited deduction. → Limited.", "Only one investment allowed. → Multiple.", "Applies in all regimes. → Old regime only.", "Compulsory. → Optional."],
  hi_simple: "80C में ₹1.5 लाख तक टैक्स छूट मिलती है।",
  hi_normal: "PPF, ELSS, EPF आदि में निवेश पर ₹1.5 लाख तक छूट मिलती है।",
  hi_faq: ["सीमा? → ₹1.5 लाख।", "ELSS शामिल? → हाँ।", "PPF शामिल? → हाँ।", "नई व्यवस्था? → नहीं।"],
  hi_myths: ["अनलिमिटेड। → नहीं।", "एक ही निवेश। → नहीं।", "हर जगह लागू। → नहीं।", "जरूरी। → नहीं।"]
},

"What is Sensex": {
  simple: "Sensex is an index of 30 major companies listed on the BSE.",
  normal: "Sensex tracks 30 large, financially strong companies listed on the Bombay Stock Exchange. It reflects overall market sentiment.",
  faq: ["Companies? → 30.", "Exchange? → BSE.", "Used for? → Benchmark.", "Same as Nifty? → No."],
  myths: ["Same as Nifty. → Different.", "Cannot invest. → Via funds.", "Always rising. → Market-linked.", "Represents whole market. → Partial."],
  hi_simple: "Sensex BSE की 30 बड़ी कंपनियों का इंडेक्स है।",
  hi_normal: "यह 30 कंपनियों के प्रदर्शन से बाजार की स्थिति दिखाता है।",
  hi_faq: ["कंपनियां? → 30।", "एक्सचेंज? → BSE।", "क्यों उपयोग? → बेंचमार्क।", "Nifty जैसा? → नहीं।"],
  hi_myths: ["Nifty जैसा। → नहीं।", "निवेश नहीं कर सकते। → कर सकते हैं।", "हमेशा बढ़ता है। → नहीं।", "पूरा बाजार दिखाता है। → नहीं।"]
},

"What is TDS": {
  simple: "TDS is tax deducted at source before you receive income.",
  normal: "Tax Deducted at Source (TDS) is deducted by payer (employer, bank) before paying income like salary, interest. It is adjusted while filing ITR.",
  faq: ["Why deducted? → Advance tax collection.", "Refund possible? → Yes.", "Rate? → Depends.", "Shown where? → Form 26AS."],
  myths: ["TDS is extra tax. → Part of tax.", "Cannot recover. → Can claim refund.", "Only salary. → Many incomes.", "Avoidable. → Not always."],
  hi_simple: "TDS आय मिलने से पहले काटा गया टैक्स है।",
  hi_normal: "यह टैक्स पहले ही काट लिया जाता है और ITR में एडजस्ट होता है।",
  hi_faq: ["क्यों काटते हैं? → एडवांस टैक्स।", "रिफंड? → हाँ।", "रेट? → अलग-अलग।", "कहाँ दिखता है? → 26AS।"],
  hi_myths: ["अलग टैक्स है। → नहीं।", "वापस नहीं मिलता। → मिलता है।", "सिर्फ सैलरी। → नहीं।", "बच सकते हैं। → नहीं।"]
},

"What is a bear market": {
  simple: "A bear market is when stock prices fall significantly over time.",
  normal: "A bear market is defined by a decline of 20% or more from recent highs. It reflects negative sentiment and economic slowdown.",
  faq: ["How long? → Months/years.", "What to do? → Stay invested.", "Is it bad? → Temporary phase.", "Can profit? → Yes (advanced strategies)."],
  myths: ["Market will not recover. → It does.", "Sell everything. → Not always.", "Only losses happen. → Opportunities exist.", "Rare event. → Occurs periodically."],
  hi_simple: "जब बाजार गिरता है उसे bear market कहते हैं।",
  hi_normal: "20% या ज्यादा गिरावट को bear market कहते हैं।",
  hi_faq: ["कितने समय? → महीनों/साल।", "क्या करें? → निवेश जारी रखें।", "खराब है? → अस्थायी।", "फायदा? → संभव।"],
  hi_myths: ["बाजार नहीं सुधरेगा। → सुधरता है।", "सब बेच दें। → नहीं।", "सिर्फ नुकसान। → नहीं।", "कम होता है। → होता है।"]
},

"What is a bull market": {
  simple: "A bull market is when stock prices rise over a sustained period.",
  normal: "A bull market is marked by rising prices, strong investor confidence, and economic growth. It often follows a bear market.",
  faq: ["How long? → Months/years.", "What to do? → Stay invested.", "Risk? → Overvaluation.", "Always rising? → Cyclical."],
  myths: ["Market always rises. → Cycles exist.", "No risk. → Risk exists.", "Easy profits. → Requires discipline.", "Lasts forever. → Temporary."],
  hi_simple: "जब बाजार बढ़ता है उसे bull market कहते हैं।",
  hi_normal: "लंबे समय तक बढ़ता बाजार bull market होता है।",
  hi_faq: ["कितना समय? → महीनों/साल।", "क्या करें? → निवेश जारी रखें।", "रिस्क? → ज्यादा वैल्यू।", "हमेशा बढ़ेगा? → नहीं।"],
  hi_myths: ["हमेशा बढ़ता है। → नहीं।", "रिस्क नहीं। → है।", "आसान पैसा। → नहीं।", "हमेशा रहता है। → नहीं।"]
},

"What is a business loan": {
  simple: "A business loan is money borrowed to start or grow a business, which must be repaid with interest.",
  normal: "Business loans are offered by banks/NBFCs to fund operations, expansion, or working capital. Interest rates depend on credit profile, business stability, and collateral.",
  faq: ["Collateral required? → Sometimes.", "Interest rate? → Varies.", "Who can apply? → Businesses/self-employed.", "Tax benefit? → Interest is deductible."],
  myths: ["Only large businesses get loans. → Small businesses too.", "Always need collateral. → Not always.", "Loans are bad. → Useful if managed well.", "Approval is easy. → Requires eligibility."],
  hi_simple: "बिजनेस के लिए लिया गया लोन business loan कहलाता है।",
  hi_normal: "बिजनेस शुरू या बढ़ाने के लिए बैंक से लिया गया पैसा business loan है।",
  hi_faq: ["गारंटी? → कभी-कभी।", "ब्याज? → अलग-अलग।", "कौन ले सकता है? → बिजनेस।", "टैक्स लाभ? → ब्याज पर।"],
  hi_myths: ["सिर्फ बड़े बिजनेस। → नहीं।", "हमेशा गारंटी। → नहीं।", "लोन खराब है। → नहीं।", "आसानी से मिलता है। → नहीं।"]
},

"What is a demat account": {
  simple: "A demat account stores your shares electronically instead of physical certificates.",
  normal: "Demat (dematerialized) account holds stocks, ETFs, and securities digitally. It is required for investing in the stock market in India.",
  faq: ["Is it mandatory? → Yes for stocks.", "Charges? → AMC/transaction fees.", "Can hold mutual funds? → Yes.", "Safe? → Yes."],
  myths: ["Only traders need it. → Investors too.", "Physical shares common. → Mostly digital now.", "Free always. → Charges apply.", "Complicated. → Easy."],
  hi_simple: "डिमैट अकाउंट में शेयर डिजिटल रूप में रखे जाते हैं।",
  hi_normal: "स्टॉक मार्केट में निवेश के लिए डिमैट अकाउंट जरूरी है।",
  hi_faq: ["जरूरी? → हाँ।", "चार्ज? → होते हैं।", "MF रख सकते हैं? → हाँ।", "सुरक्षित? → हाँ।"],
  hi_myths: ["सिर्फ ट्रेडर के लिए। → नहीं।", "फिजिकल शेयर चलते हैं। → नहीं।", "फ्री है। → नहीं।", "मुश्किल है। → नहीं।"]
},

"What is a personal loan": {
  simple: "A personal loan is an unsecured loan taken for personal needs without collateral.",
  normal: "Personal loans are unsecured loans with higher interest rates (10–24%). They are used for emergencies, travel, or expenses and depend on credit score.",
  faq: ["Collateral needed? → No.", "Interest rate? → High.", "Approval time? → Quick.", "Best use? → Emergency."],
  myths: ["Cheap loan. → Expensive.", "Good for all needs. → Use carefully.", "No impact on credit. → Affects score.", "Easy repayment. → Can be heavy."],
  hi_simple: "बिना गारंटी का लोन personal loan होता है।",
  hi_normal: "यह बिना संपत्ति के लिया गया लोन है और ब्याज ज्यादा होता है।",
  hi_faq: ["गारंटी? → नहीं।", "ब्याज? → ज्यादा।", "समय? → जल्दी।", "कब लें? → जरूरत में।"],
  hi_myths: ["सस्ता है। → नहीं।", "हर काम के लिए। → नहीं।", "स्कोर पर असर नहीं। → पड़ता है।", "आसान है। → मुश्किल हो सकता है।"]
},

"What is a stock market": {
  simple: "The stock market is a place where shares of companies are bought and sold.",
  normal: "Stock market allows investors to buy/sell shares of listed companies. It helps companies raise capital and investors earn returns.",
  faq: ["Where in India? → NSE/BSE.", "Who can invest? → Anyone.", "Risk? → Yes.", "Returns? → Market-based."],
  myths: ["Only experts invest. → Anyone can.", "Gambling. → Investment tool.", "Always risky. → Depends on time horizon.", "Quick money. → Not guaranteed."],
  hi_simple: "स्टॉक मार्केट में कंपनियों के शेयर खरीदे-बेचे जाते हैं।",
  hi_normal: "यह निवेश का प्लेटफॉर्म है जहां शेयर ट्रेड होते हैं।",
  hi_faq: ["कहाँ? → NSE/BSE।", "कौन? → सभी।", "रिस्क? → हाँ।", "रिटर्न? → मार्केट।"],
  hi_myths: ["सिर्फ एक्सपर्ट। → नहीं।", "जुआ है। → नहीं।", "हमेशा risky। → नहीं।", "जल्दी पैसा। → नहीं।"]
},

"What is a trading account": {
  simple: "A trading account is used to buy and sell shares in the stock market.",
  normal: "Trading account connects your demat account to stock exchanges. It is used to place buy/sell orders for stocks and other securities.",
  faq: ["Different from demat? → Yes.", "Required? → Yes.", "Charges? → Brokerage.", "Used for? → Trading."],
  myths: ["Same as demat. → Different.", "Not needed. → Required.", "Free always. → Charges apply.", "Only traders need it. → Investors too."],
  hi_simple: "ट्रेडिंग अकाउंट से शेयर खरीदे-बेचे जाते हैं।",
  hi_normal: "यह डिमैट को मार्केट से जोड़ता है।",
  hi_faq: ["डिमैट जैसा? → नहीं।", "जरूरी? → हाँ।", "चार्ज? → होता है।", "क्यों? → ट्रेडिंग।"],
  hi_myths: ["डिमैट ही है। → नहीं।", "जरूरी नहीं। → है।", "फ्री है। → नहीं।", "सिर्फ ट्रेडर के लिए। → नहीं।"]
},

"What is capital gains tax": {
  simple: "Capital gains tax is tax on profit earned from selling investments.",
  normal: "Capital gains tax applies when you sell assets like stocks, mutual funds, or property at a profit. Rates depend on asset type and holding period (short vs long term).",
  faq: ["Short-term tax? → Higher.", "Long-term tax? → Lower.", "Applies to all assets? → Yes.", "Avoidable? → Limited options."],
  myths: ["No tax on investments. → Tax applies.", "Same rate for all. → Varies.", "Only stocks taxed. → All assets.", "Ignore small gains. → Taxable."],
  hi_simple: "निवेश बेचने पर मुनाफे पर टैक्स लगता है।",
  hi_normal: "लाभ पर टैक्स लगता है और दर अवधि पर निर्भर होती है।",
  hi_faq: ["शॉर्ट टर्म? → ज्यादा।", "लॉन्ग टर्म? → कम।", "सब पर लागू? → हाँ।", "बच सकते हैं? → सीमित।"],
  hi_myths: ["टैक्स नहीं। → लगता है।", "समान दर। → नहीं।", "सिर्फ शेयर। → नहीं।", "छोटा छोड़ दें। → नहीं।"]
},

"What is cash flow": {
  simple: "Cash flow is the movement of money coming in and going out.",
  normal: "Cash flow tracks inflows (income) and outflows (expenses). Positive cash flow means more money coming in than going out.",
  faq: ["Important? → Yes.", "Positive cash flow? → Good.", "Negative? → Risky.", "Who tracks? → Individuals/businesses."],
  myths: ["Profit = cash flow. → Different.", "Not important. → Critical.", "Only for business. → Personal too.", "Ignore it. → Risky."],
  hi_simple: "कैश फ्लो = पैसा आना और जाना।",
  hi_normal: "इनकम और खर्च का ट्रैक कैश फ्लो कहलाता है।",
  hi_faq: ["जरूरी? → हाँ।", "पॉजिटिव? → अच्छा।", "नेगेटिव? → खराब।", "कौन देखता है? → सभी।"],
  hi_myths: ["प्रॉफिट = कैश फ्लो। → नहीं।", "जरूरी नहीं। → जरूरी।", "सिर्फ बिजनेस। → नहीं।", "इग्नोर करें। → नहीं।"]
},

"What is credit": {
  simple: "Credit is the ability to borrow money with the promise to repay later.",
  normal: "Credit allows you to borrow funds (loans, credit cards) and repay later with interest. It is based on your creditworthiness (CIBIL score).",
  faq: ["Good credit? → High score.", "Types? → Loans, cards.", "Cost? → Interest.", "Build credit? → Timely repayment."],
  myths: ["Credit is bad. → Useful if managed.", "Free money. → Interest applies.", "No need to repay fast. → Wrong.", "Score not important. → Important."],
  hi_simple: "क्रेडिट = उधार लेने की क्षमता।",
  hi_normal: "लोन या कार्ड से पैसा लेकर बाद में चुकाना क्रेडिट है।",
  hi_faq: ["अच्छा क्रेडिट? → हाई स्कोर।", "प्रकार? → लोन।", "खर्च? → ब्याज।", "कैसे बनाएं? → समय पर भुगतान।"],
  hi_myths: ["क्रेडिट खराब है। → नहीं।", "फ्री पैसा। → नहीं।", "जल्दी चुकाना जरूरी नहीं। → जरूरी।", "स्कोर जरूरी नहीं। → है।"]
},

"What is dividend": {
  simple: "A dividend is a portion of a company’s profit paid to shareholders.",
  normal: "Companies distribute part of their profits to shareholders as dividends. It can be paid quarterly or annually.",
  faq: ["Guaranteed? → No.", "Taxable? → Yes.", "Paid by all companies? → No.", "Frequency? → Varies."],
  myths: ["All companies pay dividend. → No.", "Fixed income. → Not guaranteed.", "Tax-free. → Taxable.", "High dividend = best. → Not always."],
  hi_simple: "कंपनी का मुनाफा शेयरधारकों को देना = dividend।",
  hi_normal: "कंपनी लाभ का हिस्सा निवेशकों को देती है।",
  hi_faq: ["गारंटी? → नहीं।", "टैक्स? → लगता है।", "सब देते हैं? → नहीं।", "कब मिलता है? → अलग-अलग।"],
  hi_myths: ["सब कंपनी देती है। → नहीं।", "फिक्स है। → नहीं।", "टैक्स नहीं। → लगता है।", "ज्यादा बेहतर। → नहीं।"]
},

"What is exit load": {
  simple: "Exit load is a fee charged when you withdraw from a mutual fund early.",
  normal: "Exit load is a percentage charged if you redeem mutual fund units before a specified period (e.g., 1% if withdrawn within 1 year).",
  faq: ["Always charged? → Only early exit.", "Rate? → ~1%.", "Applicable to all funds? → Mostly equity.", "Avoidable? → Wait period."],
  myths: ["Always applies. → Only early exit.", "Very high charges. → Usually low.", "All funds same. → Varies.", "Hidden fee. → Disclosed."],
  hi_simple: "जल्दी निकालने पर लगने वाला शुल्क = exit load।",
  hi_normal: "समय से पहले निवेश निकालने पर 1% तक चार्ज लगता है।",
  hi_faq: ["हमेशा लगता है? → नहीं।", "रेट? → ~1%。", "सब फंड? → नहीं।", "बच सकते हैं? → इंतजार करें।"],
  hi_myths: ["हमेशा लगता है। → नहीं।", "बहुत ज्यादा। → नहीं।", "सब समान। → नहीं।", "छुपा हुआ। → नहीं।"]
},

"What is expense ratio": {
  simple: "Expense ratio is the annual fee charged by a mutual fund to manage your investment.",
  normal: "Expense ratio is the percentage of your investment charged yearly by the fund house. Lower expense ratios improve long-term returns, especially in direct plans.",
  faq: ["Typical range? → 0.1%–2%.", "Direct vs regular? → Direct is cheaper.", "Charged separately? → Adjusted in NAV.", "Important? → Yes."],
  myths: ["Higher expense means better returns. → Not necessarily.", "No impact on returns. → Significant impact long-term.", "Same for all funds. → Varies.", "Not important. → Very important."],
  hi_simple: "फंड मैनेज करने का सालाना शुल्क = expense ratio।",
  hi_normal: "कम expense ratio से लंबे समय में ज्यादा रिटर्न मिलता है।",
  hi_faq: ["रेट? → 0.1–2%。", "डायरेक्ट? → सस्ता।", "अलग से कटता है? → NAV में।", "जरूरी? → हाँ।"],
  hi_myths: ["ज्यादा खर्च = बेहतर। → नहीं।", "असर नहीं। → होता है।", "सब समान। → नहीं।", "जरूरी नहीं। → जरूरी।"]
},

"What is gross income": {
  simple: "Gross income is your total income before any deductions or taxes.",
  normal: "Gross income includes salary, bonuses, rental income, and other earnings before taxes or deductions are applied.",
  faq: ["Includes bonus? → Yes.", "Same as net income? → No.", "Used for? → Tax calculation.", "Higher than net? → Yes."],
  myths: ["Same as take-home salary. → No.", "Includes deductions. → No.", "Not important. → Important.", "Always fixed. → Can vary."],
  hi_simple: "कटौती से पहले कुल आय = gross income।",
  hi_normal: "सैलरी, बोनस आदि मिलाकर कुल आय gross income होती है।",
  hi_faq: ["बोनस शामिल? → हाँ।", "नेट जैसा? → नहीं।", "क्यों उपयोग? → टैक्स।", "ज्यादा होता है? → हाँ।"],
  hi_myths: ["टेक-होम जैसा। → नहीं।", "कटौती शामिल। → नहीं।", "जरूरी नहीं। → जरूरी।", "फिक्स है। → नहीं।"]
},

"What is health insurance": {
  simple: "Health insurance covers medical and hospital expenses during illness or injury.",
  normal: "Health insurance provides financial protection against medical costs like hospitalisation, surgery, medicines, and treatments.",
  faq: ["Mandatory? → Not legally but important.", "Covers family? → Yes.", "Premium? → Based on age/health.", "Tax benefit? → Yes."],
  myths: ["Only for old people. → For everyone.", "Corporate cover enough. → Not always.", "Expensive. → Affordable plans exist.", "Never needed. → Unpredictable risks."],
  hi_simple: "बीमारी के खर्च को कवर करने वाला बीमा = health insurance।",
  hi_normal: "इलाज, अस्पताल और दवाइयों का खर्च कवर करता है।",
  hi_faq: ["जरूरी? → हाँ।", "परिवार कवर? → हाँ।", "प्रीमियम? → उम्र पर।", "टैक्स लाभ? → हाँ।"],
  hi_myths: ["सिर्फ बुजुर्ग के लिए। → नहीं।", "कॉर्पोरेट काफी। → नहीं।", "महंगा है। → नहीं।", "जरूरत नहीं। → है।"]
},

"What is income": {
  simple: "Income is the money you earn from work, business, or investments.",
  normal: "Income includes salary, business profits, interest, dividends, and rental earnings. It is the primary source for expenses and savings.",
  faq: ["Types? → Salary, business, investment.", "Taxable? → Mostly yes.", "Stable? → Depends.", "Multiple sources? → Recommended."],
  myths: ["Only salary is income. → Multiple sources.", "All income is fixed. → Not always.", "No need to track. → Important.", "Higher income = wealth. → Depends on savings."],
  hi_simple: "कमाया गया पैसा = income।",
  hi_normal: "सैलरी, बिजनेस या निवेश से मिलने वाला पैसा income है।",
  hi_faq: ["प्रकार? → कई।", "टैक्स? → हाँ।", "स्थिर? → निर्भर।", "कई स्रोत? → अच्छा।"],
  hi_myths: ["सिर्फ सैलरी। → नहीं।", "फिक्स है। → नहीं।", "ट्रैक जरूरी नहीं। → है।", "ज्यादा इनकम = अमीर। → नहीं।"]
},

"What is income tax in India": {
  simple: "Income tax is a tax you pay to the government on your earnings.",
  normal: "Income tax in India is calculated based on income slabs. Individuals pay tax annually on their earnings after deductions.",
  faq: ["Who pays? → Eligible taxpayers.", "Slabs? → Different rates.", "Filed yearly? → Yes.", "Online? → Yes."],
  myths: ["Only rich pay tax. → Not true.", "TDS is final tax. → Adjusted later.", "No need to file. → Required.", "Complicated. → Simple."],
  hi_simple: "आय पर सरकार को दिया जाने वाला टैक्स = income tax।",
  hi_normal: "स्लैब के अनुसार आय पर टैक्स लगता है।",
  hi_faq: ["कौन देता है? → योग्य लोग।", "रेट? → अलग-अलग।", "हर साल? → हाँ।", "ऑनलाइन? → हाँ।"],
  hi_myths: ["सिर्फ अमीर। → नहीं।", "TDS ही अंतिम। → नहीं।", "फाइल जरूरी नहीं। → जरूरी।", "मुश्किल। → नहीं।"]
},

"What is insurance": {
  simple: "Insurance is a financial product that protects you from unexpected losses.",
  normal: "Insurance transfers risk to an insurer. You pay a premium, and in case of loss (health, life, vehicle), the insurer compensates as per policy.",
  faq: ["Types? → Life, health, vehicle.", "Premium? → Regular payment.", "Claim? → When event occurs.", "Mandatory? → Some types."],
  myths: ["Insurance is investment. → Protection tool.", "Never needed. → Essential.", "All policies same. → Different.", "Claims always rejected. → Valid claims paid."],
  hi_simple: "बीमा जोखिम से सुरक्षा देता है।",
  hi_normal: "प्रीमियम देकर नुकसान होने पर कंपनी भुगतान करती है।",
  hi_faq: ["प्रकार? → कई।", "प्रीमियम? → देना पड़ता है।", "क्लेम? → घटना पर।", "जरूरी? → कुछ।"],
  hi_myths: ["निवेश है। → नहीं।", "जरूरत नहीं। → है।", "सब समान। → नहीं।", "क्लेम नहीं मिलता। → मिलता है।"]
},

"What is net income": {
  simple: "Net income is the amount you take home after taxes and deductions.",
  normal: "Net income = gross income minus taxes and deductions. It is the actual money available for spending and saving.",
  faq: ["Same as salary? → Take-home salary.", "Includes tax? → After tax.", "Lower than gross? → Yes.", "Used for budgeting? → Yes."],
  myths: ["Same as gross. → No.", "Higher than gross. → No.", "Not important. → Important.", "Fixed always. → Can vary."],
  hi_simple: "कटौती के बाद बचा पैसा = net income।",
  hi_normal: "टैक्स और कटौती के बाद मिलने वाला पैसा net income है।",
  hi_faq: ["ग्रॉस जैसा? → नहीं।", "टैक्स शामिल? → बाद में।", "कम होता है? → हाँ।", "बजट? → हाँ।"],
  hi_myths: ["ग्रॉस जैसा। → नहीं।", "ज्यादा है। → नहीं।", "जरूरी नहीं। → जरूरी।", "फिक्स है। → नहीं।"]
},

"What is term insurance": {
  simple: "Term insurance provides financial protection to your family in case of your death.",
  normal: "Term insurance is a pure life cover. If the insured dies during the policy period, the nominee gets the sum assured. It is low-cost and high-coverage.",
  faq: ["Cheap? → Yes.", "Maturity benefit? → No.", "Who needs it? → Earners.", "Coverage amount? → 10–15x income."],
  myths: ["Waste if no claim. → Provides protection.", "Expensive. → Affordable.", "Only for old people. → Start early.", "Not needed. → Essential."],
  hi_simple: "मृत्यु पर परिवार को पैसा देने वाला बीमा = term insurance।",
  hi_normal: "कम प्रीमियम में ज्यादा कवर देता है।",
  hi_faq: ["सस्ता? → हाँ।", "मैच्योरिटी? → नहीं।", "किसे चाहिए? → कमाने वालों को।", "कवर कितना? → 10–15x।"],
  hi_myths: ["बेकार है। → नहीं।", "महंगा है। → नहीं।", "सिर्फ बुजुर्ग। → नहीं।", "जरूरी नहीं। → जरूरी।"]
},

"What is time value of money": {
  simple: "Money today is worth more than the same amount in the future due to earning potential.",
  normal: "Time value of money means money can grow over time through interest or investment. ₹1 lakh today is worth more than ₹1 lakh in future due to compounding.",
  faq: ["Why important? → Investment planning.", "Linked to inflation? → Yes.", "Used where? → Finance decisions.", "Example? → SIP growth."],
  myths: ["₹1 lakh today = future value. → No.", "Time doesn’t matter. → Critical.", "Only for experts. → Useful for all.", "Not practical. → Very practical."],
  hi_simple: "आज का पैसा भविष्य से ज्यादा मूल्यवान है।",
  hi_normal: "समय के साथ पैसा बढ़ता है, इसलिए आज का पैसा ज्यादा कीमती है।",
  hi_faq: ["क्यों जरूरी? → निवेश।", "इन्फ्लेशन? → हाँ।", "कहाँ उपयोग? → निर्णय।", "उदाहरण? → SIP।"],
  hi_myths: ["आज = भविष्य। → नहीं।", "समय जरूरी नहीं। → जरूरी।", "सिर्फ एक्सपर्ट। → नहीं।", "काम का नहीं। → है।"]
},

"What is zero-based budgeting": {
  simple: "Zero-based budgeting means assigning every rupee a purpose so income minus expenses equals zero.",
  normal: "In zero-based budgeting, you allocate your entire income to expenses, savings, and investments. Every rupee is planned so nothing is left unassigned.",
  faq: ["Zero means no savings? → No.", "Who should use? → Anyone.", "Difficult? → Easy after setup.", "Tools? → Excel/apps."],
  myths: ["Zero means spending all. → Planning all.", "Only strict people use it. → Anyone.", "Too complex. → Simple.", "Not needed. → Useful."],
  hi_simple: "हर रुपये को काम देना = zero-based budgeting।",
  hi_normal: "आय को पूरी तरह प्लान करके खर्च और बचत में बाँटते हैं।",
  hi_faq: ["बचत नहीं? → है।", "कौन उपयोग? → सभी।", "मुश्किल? → नहीं।", "टूल? → Excel।"],
  hi_myths: ["सब खर्च करना। → नहीं।", "सिर्फ सख्त लोग। → नहीं।", "मुश्किल। → नहीं।", "जरूरी नहीं। → जरूरी।"]
},

"What to do if account is hacked": {
  simple: "Immediately block your account, change passwords, and inform your bank.",
  normal: "Steps: (1) block account/card, (2) change passwords & PINs, (3) call 1930, (4) report on cybercrime.gov.in, (5) enable alerts. Act fast to reduce loss.",
  faq: ["First step? → Block access.", "Helpline? → 1930.", "Recover money? → Possible if quick.", "Need FIR? → Sometimes."],
  myths: ["Wait and monitor. → Act immediately.", "Bank will handle everything. → You must act.", "Small hack okay. → Always report.", "Too late to fix. → Not always."],
  hi_simple: "तुरंत अकाउंट ब्लॉक करें और बैंक को बताएं।",
  hi_normal: "पासवर्ड बदलें, 1930 पर कॉल करें और रिपोर्ट दर्ज करें।",
  hi_faq: ["पहला कदम? → ब्लॉक करें।", "नंबर? → 1930।", "पैसा मिलेगा? → संभव।", "FIR? → कभी-कभी।"],
  hi_myths: ["रुको। → नहीं।", "बैंक संभालेगा। → आप करें।", "छोटा है। → रिपोर्ट करें।", "देर हो गई। → नहीं।"]
},

"When not to use a credit card": {
  simple: "Avoid using a credit card when you cannot repay the full amount on time.",
  normal: "Do not use credit cards for impulse purchases, cash withdrawals, or when you lack repayment capacity. High interest (30–40% annually) makes debt expensive.",
  faq: ["Cash withdrawal? → Avoid.", "Minimum payment ok? → Risky.", "When safe? → Full repayment.", "Interest rate? → Very high."],
  myths: ["Minimum payment is enough. → Leads to debt.", "Credit cards are free money. → Costly if misused.", "Rewards justify spending. → No.", "Safe for all situations. → No."],
  hi_simple: "अगर पूरा भुगतान नहीं कर सकते तो कार्ड इस्तेमाल न करें।",
  hi_normal: "कैश निकालने या अनावश्यक खर्च के लिए कार्ड से बचें।",
  hi_faq: ["कैश? → नहीं।", "मिनिमम पेमेंट? → नहीं।", "कब उपयोग? → पूरा चुकाएं।", "ब्याज? → ज्यादा।"],
  hi_myths: ["मिनिमम काफी। → नहीं।", "फ्री पैसा। → नहीं।", "रिवॉर्ड सही। → नहीं।", "हर जगह सुरक्षित। → नहीं।"]
},

"When personal loan makes sense": {
  simple: "A personal loan makes sense for emergencies or urgent needs when no cheaper option is available.",
  normal: "Use personal loans for medical emergencies, essential expenses, or debt consolidation if interest is manageable. Avoid for lifestyle spending.",
  faq: ["Best use? → Emergency.", "Interest? → High.", "Alternatives? → Savings/low-interest loans.", "Impact on credit? → Yes."],
  myths: ["Good for shopping. → No.", "Always bad. → Useful if needed.", "Cheap option. → Expensive.", "No planning needed. → Plan repayment."],
  hi_simple: "जरूरत या इमरजेंसी में personal loan लें।",
  hi_normal: "जरूरी खर्च के लिए ही लें, शौक के लिए नहीं।",
  hi_faq: ["कब लें? → इमरजेंसी।", "ब्याज? → ज्यादा।", "विकल्प? → बचत।", "क्रेडिट असर? → हाँ।"],
  hi_myths: ["शॉपिंग के लिए। → नहीं।", "हमेशा खराब। → नहीं।", "सस्ता। → नहीं।", "प्लान नहीं चाहिए। → चाहिए।"]
},

"When to use which transfer method": {
  simple: "Use UPI/IMPS for quick small transfers, NEFT for regular transfers, and RTGS for large amounts.",
  normal: "UPI/IMPS: instant small transfers. NEFT: flexible, 24x7. RTGS: high-value (₹2 lakh+). Choose based on urgency and amount.",
  faq: ["Fastest? → UPI/IMPS.", "Large transfer? → RTGS.", "Anytime? → Yes.", "Charges? → Usually none."],
  myths: ["All methods same. → Different.", "RTGS always best. → Depends.", "UPI unlimited. → Has limits.", "NEFT slow. → Now fast."],
  hi_simple: "छोटे के लिए UPI, बड़े के लिए RTGS।",
  hi_normal: "जरूरत और राशि के अनुसार तरीका चुनें।",
  hi_faq: ["सबसे तेज? → UPI।", "बड़ा ट्रांसफर? → RTGS।", "कभी भी? → हाँ।", "चार्ज? → कम।"],
  hi_myths: ["सब समान। → नहीं।", "RTGS सबसे अच्छा। → नहीं।", "UPI लिमिट नहीं। → है।", "NEFT धीमा। → नहीं।"]
},

"Where to keep your emergency fund": {
  simple: "Keep your emergency fund in a savings account or liquid fund for easy access.",
  normal: "Emergency funds should be stored in high-liquidity options like savings accounts, sweep FDs, or liquid mutual funds. Avoid risky investments.",
  faq: ["Amount? → 3–6 months expenses.", "Safe? → Yes.", "Invest in stocks? → No.", "Access? → Immediate."],
  myths: ["Invest in stocks. → Risky.", "Keep cash only. → Not ideal.", "FD only. → Mix options.", "No need for emergency fund. → Essential."],
  hi_simple: "इमरजेंसी फंड सेविंग या लिक्विड फंड में रखें।",
  hi_normal: "3–6 महीने का खर्च सुरक्षित और आसानी से निकालने योग्य रखें।",
  hi_faq: ["कितना? → 3–6 महीने।", "सुरक्षित? → हाँ।", "स्टॉक? → नहीं।", "निकाल सकते हैं? → तुरंत।"],
  hi_myths: ["स्टॉक में रखें। → नहीं।", "सिर्फ कैश। → नहीं।", "FD ही सही। → मिश्रण।", "जरूरी नहीं। → जरूरी।"]
},

"Which ITR form to use": {
  simple: "Choose ITR form based on your income type — ITR-1 for salary, ITR-2/3 for other income.",
  normal: "ITR-1: salary income. ITR-2: capital gains. ITR-3: business income. Selecting correct form ensures proper filing and avoids errors.",
  faq: ["Most common? → ITR-1.", "Capital gains? → ITR-2.", "Business? → ITR-3.", "Wrong form? → Revise return."],
  myths: ["One form fits all. → No.", "Doesn’t matter. → Important.", "Complex selection. → Simple.", "Cannot correct. → Can revise."],
  hi_simple: "आय के अनुसार ITR फॉर्म चुनें।",
  hi_normal: "सैलरी के लिए ITR-1, अन्य के लिए अलग फॉर्म।",
  hi_faq: ["कौन सा? → ITR-1।", "कैपिटल गेन? → ITR-2।", "बिजनेस? → ITR-3।", "गलत? → सुधारें।"],
  hi_myths: ["एक ही फॉर्म। → नहीं।", "फर्क नहीं पड़ता। → पड़ता है।", "मुश्किल है। → नहीं।", "सुधार नहीं सकते। → कर सकते हैं।"]
},

"Who manages mutual funds": {
  simple: "Mutual funds are managed by professional fund managers.",
  normal: "Fund managers and their teams decide where to invest based on fund objectives. They are employed by asset management companies (AMCs).",
  faq: ["Who decides investments? → Fund manager.", "Experience matters? → Yes.", "Can I choose manager? → Indirectly.", "Change possible? → Yes."],
  myths: ["Automated only. → Managed by experts.", "Manager doesn’t matter. → Matters.", "All funds same. → Different.", "No human role. → Human-driven."],
  hi_simple: "म्यूचुअल फंड विशेषज्ञ मैनेज करते हैं।",
  hi_normal: "फंड मैनेजर निवेश निर्णय लेते हैं।",
  hi_faq: ["कौन मैनेज करता है? → मैनेजर।", "अनुभव जरूरी? → हाँ।", "चुन सकते हैं? → अप्रत्यक्ष।", "बदल सकता है? → हाँ।"],
  hi_myths: ["ऑटोमैटिक है। → नहीं।", "मैनेजर मायने नहीं रखता। → रखता है।", "सब समान। → नहीं।", "कोई भूमिका नहीं। → है।"]
},

"Why ULIPs are poor investments": {
  simple: "ULIPs mix insurance and investment, often leading to high costs and lower returns.",
  normal: "ULIPs combine life cover and investment but have high charges, lock-ins, and lower transparency. Separating insurance and investment (term + mutual funds) is usually better.",
  faq: ["Lock-in? → 5 years.", "Charges? → High.", "Better alternative? → Term + MF.", "Returns? → Lower than pure equity."],
  myths: ["Best of both worlds. → Not efficient.", "Tax-free = best. → Not enough.", "Guaranteed returns. → Market-linked.", "Low cost. → Often high."],
  hi_simple: "ULIP में ज्यादा खर्च और कम रिटर्न होता है।",
  hi_normal: "इंश्योरेंस और निवेश अलग रखना बेहतर है।",
  hi_faq: ["लॉक-इन? → 5 साल।", "खर्च? → ज्यादा।", "विकल्प? → term + MF।", "रिटर्न? → कम।"],
  hi_myths: ["सबसे अच्छा। → नहीं।", "टैक्स फ्री काफी। → नहीं।", "गारंटीड। → नहीं।", "सस्ता। → नहीं।"]
},

"Why budgeting is essential": {
  simple: "Budgeting helps you control spending, save money, and achieve financial goals.",
  normal: "Budgeting ensures your income is allocated efficiently across expenses, savings, and investments. It prevents overspending and builds financial discipline.",
  faq: ["Who needs it? → Everyone.", "Difficult? → Simple.", "Benefits? → Control & savings.", "Tools? → Apps/Excel."],
  myths: ["Only for low income. → For all.", "Too restrictive. → Flexible.", "Not needed. → Essential.", "Time-consuming. → Quick habit."],
  hi_simple: "बजट से खर्च कंट्रोल होता है।",
  hi_normal: "आय को सही तरीके से खर्च और बचत में बांटने में मदद करता है।",
  hi_faq: ["किसे चाहिए? → सभी।", "मुश्किल? → नहीं।", "फायदा? → बचत।", "टूल? → ऐप।"],
  hi_myths: ["सिर्फ गरीब के लिए। → नहीं।", "बहुत सख्त। → नहीं।", "जरूरी नहीं। → जरूरी।", "समय लगता है। → कम।"]
},

"Why business income is variable": {
  simple: "Business income varies because sales and demand change over time.",
  normal: "Business income fluctuates due to market demand, seasonality, competition, and operational factors. Unlike salary, it is not fixed.",
  faq: ["Stable? → No.", "Predictable? → Partly.", "Risky? → Yes.", "Can manage? → With planning."],
  myths: ["Always high. → Not always.", "Same every month. → No.", "Easy income. → Challenging.", "Better than salary always. → Depends."],
  hi_simple: "बिजनेस में आय हर महीने बदलती है।",
  hi_normal: "डिमांड और मार्केट के कारण आय स्थिर नहीं रहती।",
  hi_faq: ["स्थिर? → नहीं।", "अनुमान? → आंशिक।", "रिस्क? → हाँ।", "मैनेज? → हाँ।"],
  hi_myths: ["हमेशा ज्यादा। → नहीं।", "हर महीने समान। → नहीं।", "आसान है। → नहीं।", "हमेशा बेहतर। → नहीं।"]
},

"Why corporate health insurance is not enough": {
  simple: "Corporate health insurance may not fully cover your needs and ends if you leave the job.",
  normal: "Employer-provided insurance has limited coverage, may not include family, and ends when you switch jobs. A personal policy ensures continuous protection.",
  faq: ["Enough coverage? → Often limited.", "Family included? → Not always.", "After job? → Ends.", "Need personal plan? → Yes."],
  myths: ["Corporate cover is enough. → Not always.", "No need for personal insurance. → Needed.", "Unlimited coverage. → Limited.", "Permanent. → Ends."],
  hi_simple: "कंपनी का इंश्योरेंस पर्याप्त नहीं होता।",
  hi_normal: "नौकरी बदलने पर यह खत्म हो जाता है।",
  hi_faq: ["काफी है? → नहीं।", "परिवार? → हमेशा नहीं।", "जॉब बाद? → खत्म।", "पर्सनल चाहिए? → हाँ।"],
  hi_myths: ["काफी है। → नहीं।", "पर्सनल नहीं चाहिए। → चाहिए।", "अनलिमिटेड। → नहीं।", "हमेशा रहता है। → नहीं।"]
},

"Why credit matters": {
  simple: "Good credit helps you get loans easily and at lower interest rates.",
  normal: "Credit score affects your ability to borrow, interest rates, and approval chances. A good score saves money and improves financial flexibility.",
  faq: ["Good score? → 750+.", "Improvement? → Timely payments.", "Impact? → Loans & cards.", "Check often? → Yes."],
  myths: ["Credit not important. → Very important.", "Only for loans. → Many uses.", "Score fixed. → Can improve.", "Late payment ok. → Damages score."],
  hi_simple: "अच्छा क्रेडिट स्कोर लोन आसान बनाता है।",
  hi_normal: "उच्च स्कोर से कम ब्याज और आसान लोन मिलता है।",
  hi_faq: ["अच्छा स्कोर? → 750+।", "कैसे बढ़ाएं? → समय पर भुगतान।", "असर? → लोन।", "चेक करें? → हाँ।"],
  hi_myths: ["जरूरी नहीं। → जरूरी।", "सिर्फ लोन के लिए। → नहीं।", "फिक्स है। → नहीं।", "लेट ठीक। → नहीं।"]
},

"Why diversification matters": {
  simple: "Diversification reduces risk by spreading investments across different assets.",
  normal: "By investing in multiple asset classes, sectors, and instruments, diversification reduces the impact of losses in any one area.",
  faq: ["Why important? → Risk reduction.", "How to diversify? → Multiple assets.", "Guarantee safety? → No.", "Best mix? → Depends."],
  myths: ["One good stock enough. → Risky.", "Diversification reduces returns. → Balanced.", "No need. → Important.", "Too complex. → Simple."],
  hi_simple: "विविधता से जोखिम कम होता है।",
  hi_normal: "अलग-अलग निवेश से नुकसान कम होता है।",
  hi_faq: ["क्यों? → जोखिम कम।", "कैसे? → कई निवेश।", "गारंटी? → नहीं।", "मिक्स? → निर्भर।"],
  hi_myths: ["एक काफी। → नहीं।", "रिटर्न कम। → नहीं।", "जरूरी नहीं। → जरूरी।", "मुश्किल। → नहीं।"]
},

"Why financial records matter for business": {
  simple: "Financial records help track income, expenses, and business performance.",
  normal: "Maintaining records like invoices, expenses, and statements ensures accurate tracking, tax compliance, and better decision-making.",
  faq: ["Why keep records? → Tracking & compliance.", "Who needs? → All businesses.", "Digital or manual? → Both.", "Tax benefit? → Yes."],
  myths: ["Not needed for small business. → Needed.", "Memory enough. → Not reliable.", "Only for tax. → Also for decisions.", "Too complex. → Simple tools exist."],
  hi_simple: "बिजनेस रिकॉर्ड जरूरी हैं।",
  hi_normal: "आय और खर्च ट्रैक करने के लिए रिकॉर्ड रखें।",
  hi_faq: ["क्यों? → ट्रैकिंग।", "कौन? → सभी।", "डिजिटल? → हाँ।", "टैक्स? → मदद करता है।"],
  hi_myths: ["छोटे को जरूरत नहीं। → है।", "याद रखना काफी। → नहीं।", "सिर्फ टैक्स। → नहीं।", "मुश्किल। → नहीं।"]
},

"Why insurance is not an investment": {
  simple: "Insurance protects you from risk, while investments grow your money — both serve different purposes.",
  normal: "Insurance provides financial protection, while investments generate returns. Mixing both leads to lower returns and poor coverage. Keep them separate.",
  faq: ["Can insurance grow money? → Limited.", "Best approach? → Separate.", "Why important? → Clarity.", "Examples? → Term + MF."],
  myths: ["Insurance is investment. → No.", "Best for returns. → Not ideal.", "Combine is efficient. → Not usually.", "Only one needed. → Both needed."],
  hi_simple: "बीमा सुरक्षा है, निवेश नहीं।",
  hi_normal: "बीमा और निवेश अलग रखें।",
  hi_faq: ["रिटर्न देता है? → कम।", "क्या करें? → अलग रखें।", "क्यों? → स्पष्टता।", "उदाहरण? → term + MF।"],
  hi_myths: ["निवेश है। → नहीं।", "सबसे अच्छा। → नहीं।", "मिलाना सही। → नहीं।", "एक ही काफी। → नहीं।"]
},

"Why markets are volatile": {
  simple: "Markets are volatile because prices change due to news, economy, and investor sentiment.",
  normal: "Market volatility is caused by economic data, interest rates, global events, and investor behavior. It is a normal part of investing.",
  faq: ["Is volatility bad? → Not always.", "Can avoid? → No.", "Long-term impact? → Smoothens.", "Opportunity? → Yes."],
  myths: ["Volatility = loss. → Not always.", "Markets should be stable. → Naturally volatile.", "Avoid investing. → Not needed.", "Short-term matters most. → Long-term matters."],
  hi_simple: "बाजार बदलता रहता है — इसे volatility कहते हैं।",
  hi_normal: "समाचार और अर्थव्यवस्था के कारण कीमतें बदलती हैं।",
  hi_faq: ["खराब? → नहीं।", "बच सकते हैं? → नहीं।", "लॉन्ग टर्म? → स्थिर।", "मौका? → हाँ।"],
  hi_myths: ["नुकसान ही होता है। → नहीं।", "स्थिर होना चाहिए। → नहीं।", "निवेश न करें। → नहीं।", "शॉर्ट टर्म जरूरी। → नहीं।"]
},

"Why most traders lose money": {
  simple: "Most traders lose money due to lack of discipline, knowledge, and emotional decisions.",
  normal: "Common reasons: overtrading, lack of strategy, emotional decisions, high costs, and poor risk management. Long-term investing is generally safer.",
  faq: ["Can trading be profitable? → Yes with skill.", "Main issue? → Discipline.", "Better alternative? → Investing.", "Quick money? → Risky."],
  myths: ["Easy money. → Difficult.", "Shortcuts exist. → No.", "Everyone profits. → Most don’t.", "Skill not needed. → Required."],
  hi_simple: "ज्यादातर ट्रेडर अनुशासन की कमी से नुकसान करते हैं।",
  hi_normal: "भावनात्मक निर्णय और रणनीति की कमी नुकसान का कारण है।",
  hi_faq: ["फायदा? → संभव।", "समस्या? → अनुशासन।", "विकल्प? → निवेश।", "जल्दी पैसा? → जोखिम।"],
  hi_myths: ["आसान पैसा। → नहीं।", "शॉर्टकट है। → नहीं।", "सब कमाते हैं। → नहीं।", "स्किल नहीं चाहिए। → चाहिए।"]
},

"Why multiple income streams matter": {
  simple: "Multiple income streams provide financial security and reduce dependence on one source.",
  normal: "Having multiple income sources (salary, business, investments) reduces risk and increases financial stability.",
  faq: ["Why important? → Stability.", "How many? → As possible.", "Start small? → Yes.", "Examples? → Freelance, rent."],
  myths: ["One income enough. → Risky.", "Too hard. → Start small.", "Only rich need it. → Everyone.", "No time. → Can manage."],
  hi_simple: "कई आय स्रोत सुरक्षा देते हैं।",
  hi_normal: "एक से ज्यादा इनकम से जोखिम कम होता है।",
  hi_faq: ["क्यों? → स्थिरता।", "कितने? → जितने संभव।", "शुरुआत? → छोटी।", "उदाहरण? → फ्रीलांस।"],
  hi_myths: ["एक काफी। → नहीं।", "मुश्किल। → नहीं।", "सिर्फ अमीर। → नहीं।", "समय नहीं। → संभव।"]
},

"Why paying minimum amount is dangerous": {
  simple: "Paying only the minimum on credit cards leads to high interest and long-term debt.",
  normal: "Minimum payments keep debt alive and attract high interest (30–40%). Always pay full amount to avoid debt traps.",
  faq: ["Interest rate? → Very high.", "Safe to pay minimum? → No.", "Best practice? → Full payment.", "Debt risk? → High."],
  myths: ["Minimum is enough. → Dangerous.", "Low EMI safe. → Costly.", "Debt manageable. → Can grow fast.", "Interest small. → Very high."],
  hi_simple: "मिनिमम पेमेंट से कर्ज बढ़ता है।",
  hi_normal: "पूरा भुगतान न करने पर ज्यादा ब्याज लगता है।",
  hi_faq: ["ब्याज? → ज्यादा।", "सुरक्षित? → नहीं।", "क्या करें? → पूरा चुकाएं।", "कर्ज? → बढ़ता है।"],
  hi_myths: ["काफी है। → नहीं।", "कम EMI सुरक्षित। → नहीं।", "कर्ज छोटा है। → बढ़ेगा।", "ब्याज कम। → ज्यादा।"]
},

"Why retirement planning is essential": {
  simple: "Retirement planning ensures you have enough money when you stop working.",
  normal: "Planning early helps build a large corpus through compounding and ensures financial independence after retirement.",
  faq: ["When to start? → Early.", "Why important? → No income later.", "How much? → Based on expenses.", "Tools? → SIP, NPS."],
  myths: ["Too early to plan. → Start early.", "Government will support. → Limited.", "Small savings enough. → Need planning.", "Late start ok. → Risky."],
  hi_simple: "रिटायरमेंट के लिए पहले से योजना बनाएं।",
  hi_normal: "जल्दी शुरू करने से बड़ा फंड बनता है।",
  hi_faq: ["कब शुरू? → जल्दी।", "क्यों? → आय नहीं होगी।", "कितना? → खर्च पर।", "टूल? → SIP।"],
  hi_myths: ["जल्दी है। → नहीं।", "सरकार करेगी। → नहीं।", "कम बचत काफी। → नहीं।", "देर ठीक। → नहीं।"]
},

"Why separate business bank account matters": {
  simple: "A separate business account helps track finances clearly and manage taxes better.",
  normal: "Separating personal and business accounts improves financial clarity, simplifies bookkeeping, and ensures better compliance.",
  faq: ["Mandatory? → Recommended.", "Benefit? → Clarity.", "Tax easier? → Yes.", "Mixing allowed? → Not advisable."],
  myths: ["One account enough. → Confusing.", "Small business no need. → Needed.", "Complicated. → Simple.", "No benefit. → Many benefits."],
  hi_simple: "बिजनेस और पर्सनल अकाउंट अलग रखें।",
  hi_normal: "अलग रखने से ट्रैकिंग और टैक्स आसान होता है।",
  hi_faq: ["जरूरी? → हाँ।", "फायदा? → स्पष्टता।", "टैक्स? → आसान।", "मिक्स करें? → नहीं।"],
  hi_myths: ["एक ही काफी। → नहीं।", "छोटे को जरूरत नहीं। → है।", "मुश्किल। → नहीं।", "फायदा नहीं। → है।"]
},

"Why term insurance is cheap": {
  simple: "Term insurance is cheap because it only provides protection without any investment component.",
  normal: "Term plans have low premiums because they offer pure risk cover without savings or returns, making them cost-effective.",
  faq: ["Cheap? → Yes.", "Why? → No maturity benefit.", "Best coverage? → High.", "Ideal for? → Earners."],
  myths: ["Cheap means low value. → High value.", "No benefit. → Protection benefit.", "Better options exist. → Not always.", "Only for old. → Start young."],
  hi_simple: "टर्म इंश्योरेंस सस्ता है क्योंकि इसमें सिर्फ सुरक्षा मिलती है।",
  hi_normal: "इसमें निवेश नहीं होता इसलिए प्रीमियम कम होता है।",
  hi_faq: ["सस्ता? → हाँ।", "क्यों? → मैच्योरिटी नहीं।", "कवर? → ज्यादा।", "किसके लिए? → कमाने वालों के लिए।"],
  hi_myths: ["सस्ता = खराब। → नहीं।", "फायदा नहीं। → है।", "बेहतर विकल्प। → नहीं।", "सिर्फ बुजुर्ग। → नहीं।"]
},

"Why third party insurance is mandatory": {
  simple: "Third-party vehicle insurance is mandatory to cover damage caused to others.",
  normal: "Indian law requires third-party insurance to protect victims of accidents. It covers injury, death, or property damage to others.",
  faq: ["Mandatory? → Yes.", "What it covers? → Others’ damage.", "Own damage? → No.", "Penalty if not? → Fine/legal action."],
  myths: ["Optional. → Mandatory.", "Covers everything. → Only third-party.", "Not needed if careful. → Required by law.", "Cheap so enough. → Limited cover."],
  hi_simple: "दूसरों के नुकसान के लिए यह बीमा जरूरी है।",
  hi_normal: "कानून के अनुसार थर्ड पार्टी इंश्योरेंस अनिवार्य है।",
  hi_faq: ["जरूरी? → हाँ।", "क्या कवर? → दूसरों का।", "अपना? → नहीं।", "नहीं लिया? → जुर्माना।"],
  hi_myths: ["वैकल्पिक। → नहीं।", "सब कवर। → नहीं।", "जरूरत नहीं। → है।", "सस्ता काफी। → नहीं।"]
},

"Why timing the market fails": {
  simple: "Timing the market is difficult and often leads to missed opportunities.",
  normal: "Most investors fail to predict market highs/lows consistently. Missing a few best days can significantly reduce returns. Staying invested is better.",
  faq: ["Possible? → Very hard.", "Better strategy? → SIP.", "Risk? → Missing gains.", "Who can time? → Rare experts."],
  myths: ["Easy to time. → No.", "Wait for perfect time. → Impossible.", "Sell high always. → Hard.", "Timing beats investing. → Not usually."],
  hi_simple: "मार्केट टाइम करना मुश्किल है।",
  hi_normal: "सही समय पकड़ना मुश्किल होता है, इसलिए निवेश जारी रखें।",
  hi_faq: ["संभव? → मुश्किल।", "क्या करें? → SIP।", "रिस्क? → मौका छूटना।", "कौन कर सकता है? → बहुत कम।"],
  hi_myths: ["आसान है। → नहीं।", "परफेक्ट समय मिलेगा। → नहीं।", "हमेशा सही बेचेंगे। → नहीं।", "बेहतर है। → नहीं।"]
},

"Why to avoid insurance-investment combos": {
  simple: "Combining insurance and investment often results in poor returns and low coverage.",
  normal: "Products like ULIPs mix insurance and investment, leading to high costs and inefficiency. Separating them gives better returns and coverage.",
  faq: ["Better option? → Term + MF.", "Returns? → Higher separately.", "Costs? → Lower.", "Flexibility? → Better."],
  myths: ["Combination is best. → Not efficient.", "High returns. → Not always.", "Simpler. → Complex.", "Cheaper. → Often costly."],
  hi_simple: "बीमा और निवेश अलग रखना बेहतर है।",
  hi_normal: "मिश्रित योजनाएं महंगी और कम प्रभावी होती हैं।",
  hi_faq: ["बेहतर? → अलग।", "रिटर्न? → ज्यादा।", "खर्च? → कम।", "लचीलापन? → ज्यादा।"],
  hi_myths: ["सबसे अच्छा। → नहीं।", "ज्यादा रिटर्न। → नहीं।", "सरल। → नहीं।", "सस्ता। → नहीं।"]
},

"Why tracking expenses matters": {
  simple: "Tracking expenses helps you understand spending and improve savings.",
  normal: "Expense tracking identifies unnecessary spending, improves budgeting, and helps achieve financial goals faster.",
  faq: ["How often? → Daily/weekly.", "Tools? → Apps/Excel.", "Benefits? → Control.", "Necessary? → Yes."],
  myths: ["Not needed. → Important.", "Memory enough. → Not accurate.", "Time-consuming. → Quick habit.", "Only for strict people. → For all."],
  hi_simple: "खर्च ट्रैक करने से बचत बढ़ती है।",
  hi_normal: "खर्च समझकर पैसे बचाना आसान होता है।",
  hi_faq: ["कितनी बार? → रोज़।", "टूल? → ऐप।", "फायदा? → नियंत्रण।", "जरूरी? → हाँ।"],
  hi_myths: ["जरूरी नहीं। → है।", "याद रहेगा। → नहीं।", "समय लगता है। → कम।", "सिर्फ सख्त लोग। → नहीं।"]
},

"Zero balance account explained": {
  simple: "A zero balance account is a bank account that does not require maintaining a minimum balance.",
  normal: "Zero balance accounts allow you to operate without maintaining a minimum balance. Common in salary accounts and basic savings accounts (BSBDA).",
  faq: ["Charges? → Limited.", "Who can open? → Anyone.", "Limits? → Some restrictions.", "Same as savings? → Slightly different."],
  myths: ["No restrictions. → Some limits exist.", "Fully free. → Limited services.", "Not useful. → Useful for beginners.", "All banks same. → Varies."],
  hi_simple: "जीरो बैलेंस अकाउंट में न्यूनतम राशि की जरूरत नहीं होती।",
  hi_normal: "इसमें बिना बैलेंस के भी अकाउंट चलाया जा सकता है।",
  hi_faq: ["चार्ज? → कम।", "कौन खोल सकता है? → सभी।", "सीमाएं? → कुछ।", "सेविंग जैसा? → थोड़ा अलग।"],
  hi_myths: ["कोई सीमा नहीं। → है।", "पूरी तरह फ्री। → नहीं।", "बेकार। → उपयोगी।", "सब समान। → नहीं।"]
},
};
 
export default CONTENT;
 
// Merge patch into CONTENT at module load time
Object.assign(CONTENT, CONTENT_PATCH);
 
export function getContent(topic, mode = "normal", lang = "en") {
  const d = CONTENT[topic];
  if (!d) return null;
 
  if (lang === "hi") {
    const text =
      mode === "advanced" ? (d.hi_advanced || d.advanced || d.hi_normal || d.normal) :
      mode === "beginner" ? (d.hi_simple   || d.simple) :
                            (d.hi_normal   || d.normal);
    return {
      text,
      normal: d.hi_normal || d.normal,
      faq:    d.hi_faq    || d.faq    || [],
      myths:  d.hi_myths  || d.myths  || [],
    };
  }
 
  // English (and all other languages — caller translates from English)
  const text =
    mode === "advanced" ? (d.advanced || d.normal) :
    mode === "beginner" ? d.simple :
                          d.normal;
 
  return {
    text,
    normal: d.normal,
    faq:    d.faq   || [],
    myths:  d.myths || [],
  };
}
 
export function matchTopic(question) {
  const q = question.toLowerCase();
  let best = null, top = 0;
  Object.keys(CONTENT).forEach(topic => {
    const words = topic.toLowerCase().split(" ");
    let score = words.filter(w => w.length > 3 && q.includes(w)).length;
    if (q.includes(topic.toLowerCase())) score += 5;
    if (score > top) { top = score; best = topic; }
  });
  return top > 0 ? best : null;
}
 
export function arthikaReply(question, mode, lang = "en") {
  const topic = matchTopic(question);
 
  if (!topic) {
    return {
      text: lang === "hi"
        ? "मैं केवल बचत, कर्ज़, ब्याज, महंगाई, बैंकिंग और निवेश जैसे वित्तीय विषयों में मदद कर सकती हूँ। कोई सवाल पूछें! 💡"
        : "I can only help with financial topics — savings, loans, interest, inflation, banking, and investments. Try asking about one of those!",
      topic: null,
      faq: null,
    };
  }
 
  const c = getContent(topic, mode, lang);
  if (!c) {
    return {
      text: lang === "hi"
        ? `${topic} हमारे पाठों में शामिल है। संबंधित मॉड्यूल पूरा करें!`
        : `Great question about ${topic}! Complete the relevant module to explore it fully.`,
      topic,
      faq: null,
    };
  }
 
  return {
    text: c.text,
    topic,
    faq: c.faq,
  };
}
 