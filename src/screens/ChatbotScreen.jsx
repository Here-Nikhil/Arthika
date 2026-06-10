import { useState, useRef, useEffect } from "react";
import { C, F, R } from "../styles/theme.js";
import { saveChatMessage } from "../lib/db.js";
import { t } from "../data/strings.js";
import { translateText, needsTranslation, LANGUAGE_NAMES } from "../lib/translate.js";
import { useTTS } from "../hooks/useTTS.js";

// ── Gemini helper ─────────────────────────────────────────────
const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

async function gemini(prompt) {
  if (!GEMINI_KEY) return null;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    );
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
  } catch {
    return null;
  }
}

// ── Knowledge base ────────────────────────────────────────────
const KB = [
  {
    text: "saving money savings bachat paisa income spending aside automatic transfer pay yourself first 20 percent monthly",
    simple_en: "Saving means keeping some money aside instead of spending it all. Even ₹50/day = ₹18,000/year. Start small, stay consistent.",
    normal_en: "Saving is setting aside a portion of income before spending. Pay yourself first — automate a transfer to savings the moment salary arrives. Aim for at least 20% of income.",
    advanced_en: "Optimise your savings rate by tracking marginal propensity to consume (MPC). Automate savings via salary-split mandates into dedicated sub-accounts: emergency, goals, investment. Every ₹1L idle in a 3.5% savings account vs a 7% liquid fund costs ₹3,500/year in forgone yield.",
    simple_hi: "बचत मतलब कुछ पैसे खर्च न करके अलग रखना। रोज़ ₹50 बचाएं तो साल में ₹18,000!",
    normal_hi: "बचत मतलब खर्च से पहले आय का हिस्सा अलग रखना। 'पे योरसेल्फ फर्स्ट' — वेतन आते ही बचत खाते में ट्रांसफर करें। कम से कम 20% लक्ष्य रखें।",
  },
  {
    text: "budget budgeting kharcha plan money 50 30 20 zero based spending categories needs wants income allocation",
    simple_en: "A budget is a plan for your money. Write down income, subtract needs (50%), wants (30%), and save the rest (20%).",
    normal_en: "50-30-20 rule: 50% needs, 30% wants, 20% savings/investments. Zero-based budgeting assigns every rupee a job so nothing is wasted.",
    advanced_en: "Zero-based budgeting (ZBB) justifies every rupee from scratch each month. For irregular income: build your budget on your floor income (worst 3 months average) and deploy surplus via a waterfall — emergency top-up → debt → goals → discretionary.",
    simple_hi: "बजट आपके पैसों की योजना है। आय लिखें, ज़रूरतें (50%), इच्छाएं (30%), बाकी बचाएं (20%)।",
    normal_hi: "50-30-20 नियम: 50% ज़रूरतें, 30% इच्छाएं, 20% बचत/निवेश। ज़ीरो-बेस्ड बजट में हर रुपए का काम तय होता है।",
  },
  {
    text: "emergency fund aapat reserve backup 3 months 6 months liquid savings job loss medical crisis",
    simple_en: "An emergency fund = 3–6 months of expenses in a savings account. Use it only for real emergencies: job loss, medical, urgent repairs.",
    normal_en: "Emergency fund = 3–6 months living expenses, liquid in a savings account. Build this before investing anywhere else. Without it, any crisis forces expensive debt.",
    advanced_en: "Size by fixed monthly obligations × coverage months. Self-employed need 9–12 months; salaried dual-income need 3. Deploy in tiers: 1 month in savings (instant), 2–3 months in liquid fund (next-day), remainder in ultra-short debt fund. Never use equity or ELSS for this.",
    simple_hi: "आपातकालीन फंड = 3–6 महीने का खर्च बचत खाते में। केवल असली मुसीबत के लिए।",
    normal_hi: "आपातकालीन फंड 3–6 महीने का खर्च बचत खाते में। कहीं और निवेश करने से पहले यह बनाएं।",
  },
  {
    text: "upi gpay phonepe paytm digital payment qr code transfer bhim npci real time bank",
    simple_en: "UPI lets you send money in seconds using your phone. Just enter a number or scan QR. Free, instant, works 24/7.",
    normal_en: "UPI (Unified Payments Interface) enables real-time bank-to-bank transfers via mobile. Your money stays in your bank — the app is an interface. India does 10 billion+ UPI transactions monthly. Never share OTP or PIN.",
    advanced_en: "UPI runs on NPCI's IMPS infrastructure using VPA (Virtual Payment Address). UPI 2.0 added overdraft linking and signed collect. UPI Lite handles offline sub-₹500 payments. Beware SIM-swap fraud — fraudsters get a duplicate SIM to intercept your OTPs.",
    simple_hi: "UPI से फोन से तुरंत पैसे भेजें। नंबर डालें या QR स्कैन करें। मुफ्त, तुरंत, 24/7।",
    normal_hi: "UPI से रियल-टाइम बैंक ट्रांसफर। पैसे हमेशा बैंक में रहते हैं। OTP या PIN कभी किसी को न दें।",
  },
  {
    text: "interest byaj compound simple rule of 72 doubling compounding annual rate fixed deposit returns",
    simple_en: "Interest is extra money earned on savings or paid on loans. Compound interest is magical — your interest earns more interest. At 9%, money doubles in 8 years (Rule of 72).",
    normal_en: "Simple interest = P×R×T. Compound interest = P(1+r)^n. Rule of 72: years to double = 72÷rate. The earlier you start investing, the more compounding works in your favour.",
    advanced_en: "Effective Annual Rate (EAR) = (1+r/n)^n − 1 captures the true cost of compounding frequency. APR must include processing fees for accurate loan comparison. Reducing-balance home loans are cheaper than flat-rate personal loans at the same stated rate.",
    simple_hi: "ब्याज वो अतिरिक्त पैसा है जो बचत पर मिलता है। 9% पर 8 साल में पैसे दोगुने (72 का नियम)।",
    normal_hi: "साधारण ब्याज: P×R×T। चक्रवृद्धि: P(1+r)^n। 72 का नियम: दोगुना होने के साल = 72÷दर।",
  },
  {
    text: "inflation mehangai price rise purchasing power cpi rbi repo rate cost of living rupee value",
    simple_en: "Inflation means prices rise over time — ₹100 today becomes ₹106 next year at 6% inflation. Keeping savings in cash means slowly losing value.",
    normal_en: "India's RBI targets 4% CPI inflation. If your savings earn less than inflation, you're losing real purchasing power. Equity investments historically beat inflation over the long term.",
    advanced_en: "Real return = (1 + nominal rate) ÷ (1 + inflation) − 1. An FD at 7% for a 30% bracket taxpayer yields 4.9% post-tax — below 6% inflation, that's −1% real return. Use 8–10% for healthcare/education inflation in goal planning.",
    simple_hi: "महंगाई मतलब समय के साथ कीमतें बढ़ना। सिर्फ नकद रखने से पैसों का मूल्य घटता है।",
    normal_hi: "RBI का महंगाई लक्ष्य 4% है। बचत पर महंगाई से कम रिटर्न मिले तो वास्तविक मूल्य घटता है।",
  },
  {
    text: "loan borrow karza personal home emi equated monthly installment repay debt principal tenure prepay",
    simple_en: "A loan is money you borrow and must repay with interest. EMI is your fixed monthly repayment. Good debt (education, home) builds value. Bad debt (luxury shopping) destroys it.",
    normal_en: "EMI = [P×r×(1+r)^n]/[(1+r)^n−1]. In early EMIs, most payment is interest (amortization). Prepaying a loan early saves significant interest. CIBIL score above 750 gets you better loan rates.",
    advanced_en: "Debt-to-income (DTI) ratio should stay below 40–45%. Compare after-tax loan cost vs post-tax investment returns to decide prepayment vs investing. On a ₹50L loan at 8.5%, ₹5L prepayment at year 5 saves ~₹14–16L in total interest.",
    simple_hi: "कर्ज़ वो पैसा है जो उधार लेकर ब्याज सहित वापस करना होता है। EMI हर महीने की निश्चित किस्त है।",
    normal_hi: "शुरुआती EMIs में ज़्यादातर ब्याज होता है। जल्दी प्री-पेमेंट से ब्याज बचता है। CIBIL 750+ से बेहतर दर मिलती है।",
  },
  {
    text: "cibil credit score history rating 300 900 payment missed default bureau experian equifax",
    simple_en: "CIBIL score (300–900) shows how trustworthy you are with debt. Above 750 = excellent. Pay all EMIs on time, keep credit card usage below 30%, don't take too many loans.",
    normal_en: "CIBIL score factors: payment history (35%), credit utilization (30%), credit age (15%), credit mix (10%), new enquiries (10%). Even one missed EMI can drop your score for years.",
    advanced_en: "High-leverage actions: reduce card utilisation from 80% to 30% (50–80 point gain), set auto-pay on all obligations, request credit limit increases without spending more. Dispute errors at cibil.com — ~10–15% of reports have inaccuracies that suppress scores by 20–50 points.",
    simple_hi: "CIBIL स्कोर (300–900) आपकी साख दिखाता है। 750+ बेहतरीन। EMI और बिल समय पर चुकाएं।",
    normal_hi: "CIBIL में भुगतान इतिहास (35%), उपयोग (30%), उम्र (15%), मिश्रण (10%), नई जांच (10%)।",
  },
  {
    text: "insurance bima term health life cover premium claim irdai hospital policy",
    simple_en: "Term insurance pays your family if you die — very cheap, covers ₹1 crore+. Health insurance covers hospital bills. Both are must-haves. Never mix insurance with investment.",
    normal_en: "Term insurance: high cover, low premium (~₹1,000–2,000/month for ₹1 crore). Health insurance: get at least ₹5 lakh cover, check waiting periods and exclusions. ULIPs/endowment plans = poor returns + high charges. Avoid them.",
    advanced_en: "Human Life Value (HLV) = PV of future income streams — target 10–15× annual income as term cover. Compare insurers on claim settlement ratio (98%+ preferred). IRDAI mandates IRR disclosure on all non-term products — endowment plans typically return 4–6% IRR, far below PPF.",
    simple_hi: "टर्म बीमा: परिवार को ₹1 करोड़+ बहुत कम प्रीमियम पर। स्वास्थ्य बीमा: अस्पताल बिल। बीमा और निवेश को मिलाएं नहीं।",
    normal_hi: "टर्म बीमा: ₹1 करोड़ के लिए ~₹1,000–2,000/माह। स्वास्थ्य: ₹5 लाख+ कवर लें। ULIP/एंडोमेंट से बचें।",
  },
  {
    text: "tax income 80c tds itr return gst deduction slab old new regime ppf elss nps save",
    simple_en: "Income tax is charged on your annual income. Save tax by investing in 80C options (PPF, ELSS, EPF) up to ₹1.5 lakh. File your ITR every year before July 31.",
    normal_en: "80C: ₹1.5L deduction via PPF/ELSS/EPF/NPS. 80D: ₹25,000 health insurance deduction. Section 24: ₹2L home loan interest deduction. New vs Old regime: new regime has lower rates but fewer deductions.",
    advanced_en: "Break-even between old and new regime is ~₹3.75L total deductions for most income levels. 80CCD(1B) provides ₹50,000 extra NPS deduction beyond the ₹1.5L 80C cap — available under old regime only. LTCG on equity: 12.5% above ₹1.25L after 12 months (Budget 2024).",
    simple_hi: "आयकर सालाना कमाई पर लगता है। 80C में निवेश (PPF, ELSS) से ₹1.5 लाख तक बचत। ITR 31 जुलाई तक भरें।",
    normal_hi: "80C: ₹1.5 लाख PPF/ELSS/EPF। 80D: ₹25,000 स्वास्थ्य बीमा। धारा 24: ₹2 लाख होम लोन ब्याज।",
  },
  {
    text: "mutual fund mf sip systematic investment nifty index equity debt hybrid aum nav expense ratio direct regular",
    simple_en: "A mutual fund pools money from many people. A professional invests it. SIP = invest a fixed amount monthly (even ₹500). Use index funds for simplicity and low cost.",
    normal_en: "Equity MFs: for goals 5+ years away. Debt MFs: for 1–3 year goals. Index funds track Nifty/Sensex with low 0.1–0.2% expense ratio. SIP leverages rupee-cost averaging. ₹5,000/month at 12% CAGR for 20 years ≈ ₹49 lakh.",
    advanced_en: "NAV = (portfolio value − liabilities − expenses) ÷ units. SEBI caps TER at 2.25% for equity. A 1% TER difference over 20 years reduces corpus by ~20%. Direct plans have 0.5–1% lower TER — on ₹10L over 20 years that's ₹15–16L more. SEBI's Skin-in-the-Game rule requires fund managers to invest 20% of take-home in their own schemes.",
    simple_hi: "म्यूचुअल फंड में कई लोगों का पैसा मिलकर निवेश होता है। SIP = हर महीने ₹500+ निवेश।",
    normal_hi: "इक्विटी MF 5+ साल के लक्ष्यों के लिए। इंडेक्स फंड: कम खर्च (0.1–0.2%), सरल। ₹5,000/माह SIP 20 साल में ≈ ₹49 लाख।",
  },
  {
    text: "ppf public provident fund epf provident fund nps retirement pension 15 year long term government scheme",
    simple_en: "PPF: 15-year government scheme, ~7.1% tax-free interest, ₹1.5L/year limit. EPF: employer+employee contribute 12% of salary each. NPS: flexible retirement account with great tax benefits.",
    normal_en: "PPF: EEE tax treatment (invest+interest+withdrawal all exempt). EPF: 12% salary from you + 12% from employer. NPS: 80CCD(1B) gives extra ₹50,000 deduction beyond 80C. All three are excellent long-term tools.",
    advanced_en: "PPF rate is reviewed quarterly — plan with 6.5–7.5% average over 15 years, not current rate. EPF interest above ₹2.5L/year contribution is taxable post FY2021-22. NPS at maturity: minimum 40% must be annuitised; lump sum withdrawal is tax-free; annuity income is taxable at slab rate.",
    simple_hi: "PPF: 15 साल, ~7.1% कर-मुक्त, ₹1.5 लाख/साल। EPF: आप 12% + नियोक्ता 12%। NPS: लचीला रिटायरमेंट खाता।",
    normal_hi: "PPF: EEE कर लाभ। EPF: दोनों से 12% वेतन। NPS: 80CCD(1B) में ₹50,000 अतिरिक्त छूट।",
  },
  {
    text: "stock share equity sensex nifty demat trading bse nse pe ratio market cap intraday",
    simple_en: "Stocks are small ownership pieces of companies. Buy via a demat account (Zerodha, Groww). Stock prices go up and down — invest for the long term (5+ years) to reduce risk.",
    normal_en: "Sensex = top 30 BSE companies. Nifty 50 = top 50 NSE companies. P/E ratio tells if a stock is cheap or expensive. For most people, index funds beat stock-picking. Avoid intraday trading — 90%+ traders lose money.",
    advanced_en: "Price discovery via continuous double-auction matching. CAPM: Expected Return = Risk-free rate + Beta × Market premium. Sharpe Ratio = (Return − Risk-free rate) ÷ Standard deviation — above 1 is good. SEBI's 2023 study: 93% of F&O traders lost money over FY19–FY23, average loss ₹1.1L/year.",
    simple_hi: "शेयर कंपनी की छोटी हिस्सेदारी है। डीमैट खाते से खरीदें। लंबे समय (5+ साल) के लिए निवेश करें।",
    normal_hi: "Sensex = BSE शीर्ष 30। Nifty 50 = NSE शीर्ष 50। P/E बताता है शेयर सस्ता है या महंगा। इंट्राडे ट्रेडिंग से बचें।",
  },
  {
    text: "fraud scam fake cheat phishing ponzi pyramid upi fraud cybercrime otp pin sebi verify",
    simple_en: "Red flags: guaranteed high returns, pressure to invest fast, unregistered agents. Never share OTP/PIN. Check SEBI registration at sebi.gov.in before investing.",
    normal_en: "Common frauds: Ponzi schemes (returns from new investors), UPI collect request scams, fake investment apps. Verify on SEBI SCORES portal. Report fraud to cybercrime.gov.in or call 1930.",
    advanced_en: "UPI fraud taxonomy: social engineering (vishing), QR code manipulation, remote access via AnyDesk, UPI handle spoofing. RBI Zero Liability Framework: report within 3 working days for full refund, 4–7 days for partial. Call 1930 immediately — banks can sometimes freeze funds before withdrawal.",
    simple_hi: "खतरे के संकेत: गारंटीड रिटर्न, जल्दी का दबाव, OTP मांगना। SEBI पंजीकरण जांचें।",
    normal_hi: "पोंज़ी, UPI कलेक्ट स्कैम, नकली ऐप। cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।",
  },
  {
    text: "start begin first step how to kaise shuru beginner new to finance financial plan invest money",
    simple_en: "Start here: 1) Open a bank account. 2) Build 3-month emergency fund. 3) Get term + health insurance. 4) Start ₹500/month SIP in an index fund. 5) Learn as you go!",
    normal_en: "Order: Emergency fund → Term insurance → Health insurance → Pay off high-interest debt → 80C investments → SIP in equity index fund → NPS for retirement. Don't invest before you have emergency fund and insurance.",
    advanced_en: "Priority waterfall for any surplus: (1) Emergency fund to 6 months, (2) High-interest debt (credit card 36%+ first), (3) Term + health insurance, (4) 80C to ₹1.5L, (5) NPS 80CCD(1B) ₹50K, (6) Index fund SIP, (7) Step-up SIP annually by 10%.",
    simple_hi: "यहाँ से शुरू: 1) बैंक खाता। 2) 3 महीने का आपातकालीन फंड। 3) टर्म + स्वास्थ्य बीमा। 4) ₹500/माह SIP।",
    normal_hi: "क्रम: आपातकालीन फंड → बीमा → कर्ज़ चुकाएं → 80C → इंडेक्स फंड SIP → NPS।",
  },
  {
    text: "credit card cashback rewards points billing cycle interest grace period minimum due utilization",
    simple_en: "Credit cards are useful if you pay the full bill every month. Never pay just the minimum — the interest rate is 36–48% per year. Keep usage below 30% of your credit limit.",
    normal_en: "Credit card grace period: 45–52 days interest-free if you pay the full statement balance. The moment you carry any balance, interest accrues on everything. Best strategy: use card for all planned spend, set auto-pay for full statement amount.",
    advanced_en: "Interchange fee (1–2.5% from merchant's bank) funds your rewards. Reward maximisation: identify top 3 spend categories, match highest-reward cards to those. Utilisation above 30% is reported to CIBIL on statement date — even if you pay in full on due date. Pay partial before statement to reduce reported utilisation.",
    simple_hi: "क्रेडिट कार्ड का पूरा बिल हर महीने चुकाएं। न्यूनतम राशि भरने पर 36–48% ब्याज लगता है।",
    normal_hi: "पूरा स्टेटमेंट बैलेंस भरने पर 45–52 दिन ब्याज-मुक्त। आटो-पे लगाएं। उपयोग 30% से कम रखें।",
  },
  {
    text: "fixed deposit fd bank interest rate tenure deposit lock in premature tds dicgc",
    simple_en: "A Fixed Deposit (FD) is a safe way to keep money in the bank for a fixed period and earn guaranteed interest. The longer the period, the higher the interest rate.",
    normal_en: "FD interest is taxed at your income slab rate. TDS at 10% applies when annual interest exceeds ₹40,000. Use FD laddering: split across 6-month, 1-year, 2-year maturities for liquidity + yield optimisation. DICGC insures ₹5L per depositor per bank.",
    advanced_en: "Post-tax FD yield for 30% bracket at 7.5%: 5.25% effective — below inflation. Compare with liquid mutual funds (7–7.5%, same liquidity, taxed at slab but only gains taxed). Lock in longer FD tenures when RBI is near the peak of a hiking cycle.",
    simple_hi: "FD में पैसे तय समय के लिए बैंक में रखें और सुरक्षित ब्याज कमाएं।",
    normal_hi: "FD ब्याज पर स्लैब दर से टैक्स। ₹40,000+ ब्याज पर TDS। लेडरिंग: अलग-अलग अवधि में FD बनाएं।",
  },
  {
    text: "gold jewellery sovereign bond etf commodity hedge inflation store value asset",
    simple_en: "Gold is a traditional store of value in India. It protects somewhat against inflation. But it pays no rent or dividend. Keep it to 5–10% of your portfolio.",
    normal_en: "Gold's INR return: ~8–10% CAGR over 20 years — broadly tracks inflation. Sovereign Gold Bonds (SGBs) pay 2.5% interest + gold price gains, with LTCG tax-free if held to maturity. Digital/ETF gold is better than physical for investment purposes.",
    advanced_en: "Gold-Nifty correlation ≈ 0.1–0.3 (low) — makes gold an effective portfolio diversifier. During the 2020 COVID crash, gold rose while equity fell. But over 20 years, Nifty outperformed gold by 3–5% CAGR. Optimal allocation: 10–15% gold for an equity-heavy portfolio.",
    simple_hi: "सोना पारंपरिक मूल्य संग्रह है। महंगाई से कुछ सुरक्षा देता है। पोर्टफोलियो में 5–10% रखें।",
    normal_hi: "सोने की INR रिटर्न ~8–10% CAGR। सॉवरेन गोल्ड बॉन्ड: 2.5% ब्याज + परिपक्वता पर LTCG-मुक्त।",
  },
  {
    text: "home loan property real estate emi mortgage registration stamp duty rera builder apartment",
    simple_en: "A home loan lets you buy a house by paying in EMIs over 20–30 years. The bank owns the property until the loan is repaid. Get a CIBIL score above 750 for the best rates.",
    normal_en: "Home loan interest deduction: up to ₹2L/year under Section 24B (self-occupied). Principal repayment qualifies for 80C up to ₹1.5L. Floating rates (EBLR-linked) now pass on RBI rate changes within 3 months. LTV ratio: banks lend up to 75–90% of property value.",
    advanced_en: "EMI amortisation: in month 1 of a ₹50L loan at 8.5% for 20 years, ₹35,417 is interest and ₹7,974 is principal. Total interest paid over 20 years: ₹54.1L. ₹5L prepayment at year 5 saves ~₹14–16L. Balance transfer if you can save 0.5%+ in rate with 5+ years remaining.",
    simple_hi: "होम लोन से घर खरीदें और EMI में चुकाएं। CIBIL 750+ से बेहतर ब्याज दर मिलती है।",
    normal_hi: "धारा 24B: ₹2 लाख ब्याज कटौती। 80C में मूलधन। EBLR से जुड़े फ्लोटिंग रेट में RBI बदलाव 3 महीने में आता है।",
  },
];

// ── Scoring ───────────────────────────────────────────────────
function scoreEntry(query, entry) {
  const q     = query.toLowerCase();
  const words = q.split(/\s+/).filter(w => w.length > 2);
  const text  = entry.text.toLowerCase();
  let score = 0;
  for (const word of words) {
    if (text.includes(word)) score += word.length;
    for (const kw of text.split(" ")) {
      if (kw.includes(word) || word.includes(kw)) score += Math.min(word.length, kw.length) * 0.5;
    }
  }
  for (const kw of text.split(" ")) {
    if (kw.length >= 4 && q.includes(kw)) score += kw.length * 1.5;
  }
  return score;
}

async function toEnglish(query, lang) {
  if (lang === "en") return query;
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    if (!res.ok) return query;
    const data = await res.json();
    return data[0]?.map(chunk => chunk[0]).filter(Boolean).join("") ?? query;
  } catch {
    return query;
  }
}

async function findAnswer(query, mode, lang) {
  const englishQuery = await toEnglish(query, lang);
  const q = englishQuery.toLowerCase().trim();
  let best = null, topScore = 0;
  for (const entry of KB) {
    const s = scoreEntry(q, entry);
    if (s > topScore) { topScore = s; best = entry; }
  }
  if (!best || topScore < 3) return null;
  const key = mode === "advanced" ? "advanced_en" : mode === "beginner" ? "simple_en" : "normal_en";
  if (lang === "hi") return mode === "beginner" ? best.simple_hi : best.normal_hi;
  return best[key] ?? best.normal_en;
}

// ── LLM polish via Gemini ─────────────────────────────────────
const LANG_NAMES = {
  en:"English", hi:"Hindi", bn:"Bengali", te:"Telugu", mr:"Marathi",
  ta:"Tamil", gu:"Gujarati", kn:"Kannada", ml:"Malayalam", pa:"Punjabi",
  or:"Odia", as:"Assamese", ur:"Urdu", ne:"Nepali",
};

async function polishWithGemini(rawAnswer, userQuestion, lang) {
  const langName = LANG_NAMES[lang] ?? "English";
  const result = await gemini(
    `You are Arthika, a friendly Indian financial assistant.\n` +
    `The user asked: "${userQuestion}".\n` +
    `Rephrase the following answer naturally and conversationally in ${langName}.\n` +
    `RULES: Do NOT add new facts. Do NOT remove facts. Do NOT change numbers, percentages, or names.\n` +
    `Keep it 2-4 sentences. Output ONLY the rephrased answer.\n\n` +
    `Answer: ${rawAnswer}`
  );
  return result && result.length > 20 ? result : rawAnswer;
}

// ── TTS text normaliser via Gemini ────────────────────────────
function basicStrip(t) {
  return t
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~#]/g, "")
    .replace(/—|→/g, ", ")
    .trim();
}

async function normaliseForSpeech(text, lang) {
  const langName = LANG_NAMES[lang] ?? "English";
  const result = await gemini(
    `You are a text-to-speech preprocessor. Convert this text into clean spoken ${langName}.\n` +
    `Rules:\n` +
    `1. Write ALL numbers and percentages as words in ${langName} (e.g. in Bengali: "80%" becomes "আশি শতাংশ", "300" becomes "তিনশো").\n` +
    `2. Remove markdown: turn [label](url) into just the label, remove *, _, #.\n` +
    `3. Remove or replace symbols: drop ~, turn — and → into a comma pause.\n` +
    `4. Keep full meaning. Output ONLY the final spoken text, nothing else.\n\n` +
    `Text: ${text}`
  );
  return result && result.length > 5 ? result : basicStrip(text);
}

// ── Chips ─────────────────────────────────────────────────────
const CHIPS_EN = ["How to save?", "What is SIP?", "UPI safety?", "Tax saving?", "Credit score?", "Term insurance?", "Emergency fund?", "Start investing?"];
const CHIPS_HI = ["कैसे बचाएं?", "SIP क्या है?", "UPI सुरक्षा?", "टैक्स बचत?", "क्रेडिट स्कोर?", "टर्म बीमा?", "आपातकालीन फंड?", "निवेश शुरू करें?"];

// ── Speaker button ────────────────────────────────────────────
function BotMessage({ text, onSpeak, onStop, isActive }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ maxWidth: "86%", position: "relative" }}>
        <div style={{
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: "18px 18px 18px 4px",
          padding: "12px 42px 12px 16px",
          fontFamily: F.family, fontSize: 14,
          color: C.ink, lineHeight: 1.65,
        }}>
          {text}
        </div>
        <button
          onClick={() => isActive ? onStop() : onSpeak(text)}
          title={isActive ? "Stop" : "Listen"}
          style={{
            position: "absolute", right: 8, bottom: 8,
            background: isActive ? C.neon : C.cardAlt,
            border: `1px solid ${isActive ? C.neon : C.border}`,
            borderRadius: "50%", width: 26, height: 26,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 12, transition: "all .15s",
          }}
        >{isActive ? "⏹" : "🔊"}</button>
      </div>
    </div>
  );
}

export default function ChatbotScreen({ uid, mode = "beginner", lang = "en", chatSeed }) {
  const isHindi = lang === "hi";
  const CHIPS   = isHindi ? CHIPS_HI : CHIPS_EN;

  const [msgs,      setMsgs]      = useState(chatSeed?.length > 0 ? chatSeed : [{ role: "bot", text: t(lang, "chat_welcome") }]);
  const [input,     setInput]     = useState("");
  const [typing,    setTyping]    = useState(false);
  const [activeTTS, setActiveTTS] = useState(null);
  const endRef = useRef(null);

  const { speaking, speakText, stopSpeaking } = useTTS();

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);
  useEffect(() => { if (!speaking) setActiveTTS(null); }, [speaking]);

  function handleSpeak(text, idx) {
    if (activeTTS === idx) { stopSpeaking(); setActiveTTS(null); return; }
    stopSpeaking();
    setActiveTTS(idx);
    speakText(text, lang);
  }

  async function send(text) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput("");
    stopSpeaking(); setActiveTTS(null);
    setMsgs(p => [...p, { role: "user", text: msg }]);
    setTyping(true);
    if (uid) saveChatMessage({ userId: uid, role: "user", message: msg, mode, language: lang }).catch(() => {});
    await new Promise(r => setTimeout(r, 500));

    const rawAnswer = (await findAnswer(msg, mode, lang)) ?? t(lang, "chat_no_answer");
    let botText = rawAnswer;
    const isKbAnswer = rawAnswer !== t(lang, "chat_no_answer");

    if (isKbAnswer) {
      if (needsTranslation(lang)) {
        const polished = await polishWithGemini(rawAnswer, msg, "en");
        botText = await translateText(polished, lang);
      } else {
        botText = await polishWithGemini(rawAnswer, msg, lang);
      }
    }

    setMsgs(p => [...p, { role: "bot", text: botText }]);
    setTyping(false);
    if (uid) saveChatMessage({ userId: uid, role: "bot", message: botText, mode, language: lang }).catch(() => {});
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "100dvh", background: C.bg }}>

      {/* Header */}
      <div style={{ padding: "20px 20px 14px", background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 46, height: 46, borderRadius: 13, background: "#F0FDF4", border: `1.5px solid ${C.neon}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🤖</div>
          <div>
            <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 16, color: C.ink }}>{t(lang, "chat_title")}</div>
            <div style={{ fontFamily: F.family, fontSize: 11, color: C.neon }}>{t(lang, "chat_expert")} · {LANGUAGE_NAMES[lang] ?? "English"}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 12, overflowX: "auto", scrollbarWidth: "none" }}>
          {CHIPS.slice(0, 4).map(chip => (
            <button key={chip} onClick={() => send(chip)} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: "6px 14px", fontFamily: F.family, fontSize: 11, color: C.grey, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" }}>
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "18px 20px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {msgs.map((msg, i) =>
          msg.role === "bot" ? (
            <BotMessage
              key={i}
              text={msg.text}
              lang={lang}
              isActive={activeTTS === i}
              onSpeak={(text) => handleSpeak(text, i)}
              onStop={() => { stopSpeaking(); setActiveTTS(null); }}
            />
          ) : (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{
                maxWidth: "86%",
                background: C.neon, border: `1px solid ${C.neon}`,
                borderRadius: "18px 18px 4px 18px",
                padding: "12px 16px",
                fontFamily: F.family, fontSize: 14,
                color: C.white, lineHeight: 1.65,
              }}>
                {msg.text}
              </div>
            </div>
          )
        )}
        {typing && (
          <div style={{ display: "flex", gap: 5, padding: "10px 14px", background: C.card, borderRadius: "18px 18px 18px 4px", maxWidth: 70, border: `1px solid ${C.border}` }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: C.grey, animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
            ))}
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* More chips */}
      <div style={{ padding: "10px 20px 6px" }}>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none" }}>
          {CHIPS.slice(4).map(chip => (
            <button key={chip} onClick={() => send(chip)} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: "6px 14px", fontFamily: F.family, fontSize: 11, color: C.grey, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" }}>
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: "10px 20px 20px", background: C.bg, borderTop: `1px solid ${C.border}`, display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder={t(lang, "chat_placeholder")}
          style={{ flex: 1, background: C.card, color: C.ink, border: `1.5px solid ${C.border}`, borderRadius: 50, padding: "13px 18px", fontFamily: F.family, fontSize: 14, outline: "none" }}
        />
        <button onClick={() => send()} style={{ width: 48, height: 48, background: C.neon, border: "none", borderRadius: "50%", cursor: "pointer", fontSize: 18, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>↑</button>
      </div>

      <style>{`@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }`}</style>
    </div>
  );
}