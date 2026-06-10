// ─────────────────────────────────────────────────────────────
// Arthika Knowledge Graph — NTK (Need-To-Know) Framework
//
// Three tiers:
//   TIER 1 — Foundational  (modules 01–04): income, budgeting, banking, credit
//   TIER 2 — Protective    (modules 05–07): insurance, tax, digital safety
//   TIER 3 — Growth        (modules 08–12): investing, mutual funds, real estate,
//                                           retirement, entrepreneurship
//
// 12 modules · 63 lessons · progressive unlock
// ─────────────────────────────────────────────────────────────

export const MODULES = [

  // ── TIER 1 · FOUNDATIONAL ─────────────────────────────────

  {
    id: "income", title: "Understanding Income", tier: 1,
    subtitle: "Know what you earn and why it matters",
    icon: "💵", tag: "MODULE 01",
    lessons: [
      { id: "inc1", title: "What Is Income?",          xp: 10, topics: ["What is income", "Types of income sources"] },
      { id: "inc2", title: "Salary vs Business Income",xp: 10, topics: ["Salary income explained", "Business income explained", "Difference between salary and business income"] },
      { id: "inc3", title: "Fixed vs Variable Income", xp: 15, topics: ["Fixed income explained", "Variable income explained", "How to manage variable income"] },
      { id: "inc4", title: "Gross vs Net Income",      xp: 15, topics: ["What is gross income", "What is net income", "What are deductions from salary"] },
      { id: "inc5", title: "Multiple Income Streams",  xp: 20, topics: ["Why multiple income streams matter", "Passive income explained", "Side income ideas for India"] },
      { id: "inc6", title: "Income Growth Mindset",    xp: 15, topics: ["How to grow your income over time", "Skills that increase income", "Negotiating your salary"] },
    ],
  },

  {
    id: "budgeting", title: "Budgeting Mastery", tier: 1,
    subtitle: "Control where every rupee goes",
    icon: "📊", tag: "MODULE 02",
    lessons: [
      { id: "bud1", title: "Why Budget?",               xp: 10, topics: ["Why budgeting is essential", "Common money mistakes without a budget"] },
      { id: "bud2", title: "The 50-30-20 Rule",         xp: 10, topics: ["50-30-20 rule explained", "Needs wants savings split", "How to apply 50-30-20 to your salary"] },
      { id: "bud3", title: "Zero-Based Budgeting",      xp: 15, topics: ["What is zero-based budgeting", "How to build a zero-based budget", "Advantages of zero-based budgeting"] },
      { id: "bud4", title: "Tracking Expenses",         xp: 15, topics: ["Why tracking expenses matters", "How to track daily expenses", "Tools to track expenses in India"] },
      { id: "bud5", title: "Cutting Expenses Smartly",  xp: 15, topics: ["How to reduce unnecessary expenses", "Needs versus wants revisited", "Lifestyle inflation and how to avoid it"] },
      { id: "bud6", title: "Emergency Fund",            xp: 20, topics: ["What is an emergency fund", "How much to keep in emergency fund", "Where to keep your emergency fund"] },
      { id: "bud7", title: "Budget for Irregular Life", xp: 20, topics: ["How to budget with irregular income", "Budgeting for festivals and events", "Annual expense planning"] },
    ],
  },

  {
    id: "banking", title: "Banking & Payments", tier: 1,
    subtitle: "Use the banking system to your advantage",
    icon: "🏦", tag: "MODULE 03",
    lessons: [
      { id: "bnk1", title: "How Banks Work",            xp: 10, topics: ["How banks make money", "How deposits are protected in India", "RBI role in banking"] },
      { id: "bnk2", title: "Types of Bank Accounts",    xp: 10, topics: ["Savings account explained", "Current account explained", "Salary account explained", "Zero balance account explained"] },
      { id: "bnk3", title: "Interest on Savings",       xp: 15, topics: ["How savings account interest works", "How to maximise savings account interest", "High-yield savings options in India"] },
      { id: "bnk4", title: "Fixed Deposits Deep Dive",  xp: 15, topics: ["What is a fixed deposit", "FD interest rates in India", "Tax on FD interest", "Premature FD withdrawal penalties"] },
      { id: "bnk5", title: "UPI & Digital Payments",    xp: 15, topics: ["How UPI works", "UPI safety tips", "Common UPI frauds and how to avoid them"] },
      { id: "bnk6", title: "Net Banking & Mobile Apps", xp: 10, topics: ["How to use net banking safely", "Setting up banking alerts", "What to do if account is hacked"] },
      { id: "bnk7", title: "NEFT RTGS IMPS Explained",  xp: 15, topics: ["Difference between NEFT RTGS IMPS", "When to use which transfer method", "Transfer limits and timings"] },
    ],
  },

  {
    id: "credit", title: "Credit & Debt", tier: 1,
    subtitle: "Borrow smart, stay in control",
    icon: "💳", tag: "MODULE 04",
    lessons: [
      { id: "crd1", title: "What Is Credit?",           xp: 10, topics: ["What is credit", "Why credit matters", "Good credit versus bad credit"] },
      { id: "crd2", title: "CIBIL Score Explained",     xp: 15, topics: ["What is CIBIL score", "CIBIL score ranges explained", "How CIBIL score is calculated"] },
      { id: "crd3", title: "Build a Good Credit Score", xp: 15, topics: ["How to improve CIBIL score", "How long it takes to build credit", "Mistakes that damage credit score"] },
      { id: "crd4", title: "Credit Cards 101",          xp: 15, topics: ["How credit cards work", "Credit card billing cycle", "Why paying minimum amount is dangerous"] },
      { id: "crd5", title: "Smart Credit Card Use",     xp: 20, topics: ["How to use credit card without debt", "Credit card rewards and cashback", "When not to use a credit card"] },
      { id: "crd6", title: "Personal Loans",            xp: 15, topics: ["What is a personal loan", "Personal loan interest rates in India", "When personal loan makes sense"] },
      { id: "crd7", title: "Home Loans",                xp: 20, topics: ["How home loans work", "Home loan EMI calculation", "Fixed vs floating home loan rate", "Home loan tax benefits under Section 24"] },
      { id: "crd8", title: "Getting Out of Debt",       xp: 20, topics: ["Debt avalanche method explained", "Debt snowball method explained", "How to stop borrowing more debt"] },
    ],
  },

  // ── TIER 2 · PROTECTIVE ────────────────────────────────────

  {
    id: "insurance", title: "Insurance Fundamentals", tier: 2,
    subtitle: "Protect what you've built",
    icon: "🛡️", tag: "MODULE 05",
    lessons: [
      { id: "ins1", title: "Why Insurance?",            xp: 10, topics: ["What is insurance", "Why insurance is not an investment", "Risk pooling concept explained"] },
      { id: "ins2", title: "Term Life Insurance",       xp: 20, topics: ["What is term insurance", "How much term cover do you need", "Why term insurance is cheap", "What happens if you outlive term policy"] },
      { id: "ins3", title: "Health Insurance",          xp: 20, topics: ["What is health insurance", "Individual vs family floater plan", "What health insurance covers", "Cashless hospitalisation explained"] },
      { id: "ins4", title: "Health Insurance Pitfalls", xp: 15, topics: ["What health insurance does not cover", "Waiting period in health insurance", "Co-pay in health insurance explained", "Why corporate health insurance is not enough"] },
      { id: "ins5", title: "Vehicle Insurance",         xp: 10, topics: ["Third party vs comprehensive insurance", "Why third party insurance is mandatory", "How to claim vehicle insurance"] },
      { id: "ins6", title: "Avoid Bad Insurance",       xp: 15, topics: ["Why ULIPs are poor investments", "Endowment plans vs term plans", "Why to avoid insurance-investment combos"] },
    ],
  },

  {
    id: "tax", title: "Tax Simplified", tier: 2,
    subtitle: "Pay less legally, understand your obligations",
    icon: "🧾", tag: "MODULE 06",
    lessons: [
      { id: "tax1", title: "Income Tax Basics",         xp: 10, topics: ["What is income tax in India", "Income tax slabs in India", "Old tax regime vs new tax regime"] },
      { id: "tax2", title: "TDS Explained",             xp: 15, topics: ["What is TDS", "How TDS is deducted from salary", "How to claim TDS refund"] },
      { id: "tax3", title: "Save Tax Under 80C",        xp: 20, topics: ["What is Section 80C", "Investments that qualify under 80C", "ELSS vs PPF vs NSC tax comparison"] },
      { id: "tax4", title: "Other Tax Deductions",      xp: 15, topics: ["Section 80D health insurance deduction", "Section 24 home loan deduction", "Section 80CCD NPS deduction", "HRA exemption explained"] },
      { id: "tax5", title: "Filing Your ITR",           xp: 20, topics: ["What is ITR", "How to file ITR online", "Which ITR form to use", "ITR filing deadline"] },
      { id: "tax6", title: "Capital Gains Tax",         xp: 20, topics: ["What is capital gains tax", "Short term capital gains explained", "Long term capital gains explained", "LTCG on equity explained"] },
    ],
  },

  {
    id: "digital_safety", title: "Financial Safety Online", tier: 2,
    subtitle: "Protect yourself from fraud and scams",
    icon: "🔐", tag: "MODULE 07",
    lessons: [
      { id: "ds1", title: "Common Financial Frauds",   xp: 10, topics: ["Common banking frauds in India", "UPI fraud types", "Phishing explained"] },
      { id: "ds2", title: "OTP & SIM Swap Fraud",      xp: 15, topics: ["What is OTP fraud", "What is SIM swap fraud", "How to protect from SIM swap"] },
      { id: "ds3", title: "Investment Scams",          xp: 15, topics: ["Ponzi scheme explained", "Pyramid scheme explained", "How to identify investment fraud", "SEBI registration check"] },
      { id: "ds4", title: "Safe Digital Banking",      xp: 10, topics: ["Safe internet banking practices", "Strong password tips", "Two-factor authentication explained"] },
      { id: "ds5", title: "What To Do If Scammed",     xp: 10, topics: ["Steps to take after bank fraud", "How to report fraud to cybercrime", "RBI banking ombudsman explained"] },
    ],
  },

  // ── TIER 3 · GROWTH ────────────────────────────────────────

  {
    id: "investing_basics", title: "Investing Foundations", tier: 3,
    subtitle: "Put your money to work",
    icon: "📈", tag: "MODULE 08",
    lessons: [
      { id: "iv1", title: "Why Invest?",                xp: 10, topics: ["Why saving alone is not enough", "Inflation erodes savings", "Power of compounding over time"] },
      { id: "iv2", title: "Risk & Return",              xp: 15, topics: ["Risk return tradeoff explained", "Types of investment risk", "How time horizon affects risk"] },
      { id: "iv3", title: "Asset Classes Overview",     xp: 15, topics: ["What are asset classes", "Equity vs debt vs gold vs real estate", "How to choose between asset classes"] },
      { id: "iv4", title: "Rule of 72",                 xp: 10, topics: ["Rule of 72 explained", "How to use rule of 72", "Doubling time at different interest rates"] },
      { id: "iv5", title: "Time Value of Money",        xp: 20, topics: ["What is time value of money", "Why early investing beats late investing", "Compounding frequency explained"] },
      { id: "iv6", title: "Diversification",            xp: 20, topics: ["Why diversification matters", "How to diversify investments", "Correlation between assets explained"] },
    ],
  },

  {
    id: "mutual_funds", title: "Mutual Funds & SIP", tier: 3,
    subtitle: "The easiest way to invest in markets",
    icon: "🏗️", tag: "MODULE 09",
    lessons: [
      { id: "mf1", title: "What Are Mutual Funds?",    xp: 10, topics: ["What is a mutual fund", "How mutual funds work", "Who manages mutual funds"] },
      { id: "mf2", title: "Types of Mutual Funds",     xp: 15, topics: ["Equity mutual funds explained", "Debt mutual funds explained", "Hybrid mutual funds explained", "Index funds explained"] },
      { id: "mf3", title: "How to Read a Fund",        xp: 20, topics: ["What is NAV", "What is expense ratio", "What is exit load", "How to read mutual fund factsheet"] },
      { id: "mf4", title: "SIP Strategy",              xp: 15, topics: ["What is SIP", "How rupee cost averaging works", "SIP vs lump sum comparison", "How to start a SIP in India"] },
      { id: "mf5", title: "ELSS Funds",                xp: 15, topics: ["What is ELSS", "ELSS lock-in period", "ELSS tax benefit under 80C", "ELSS vs PPF comparison"] },
      { id: "mf6", title: "Choosing the Right Fund",   xp: 20, topics: ["How to evaluate a mutual fund", "Past performance and what it means", "Fund rating agencies in India", "SEBI mutual fund categories"] },
      { id: "mf7", title: "Mutual Fund Mistakes",      xp: 15, topics: ["Common mutual fund mistakes", "Why timing the market fails", "Too many funds problem", "Stopping SIP during market crash"] },
    ],
  },

  {
    id: "stock_market", title: "Stock Market Basics", tier: 3,
    subtitle: "Understand how equity markets work",
    icon: "📉", tag: "MODULE 10",
    lessons: [
      { id: "sm1", title: "What Is the Stock Market?", xp: 10, topics: ["What is a stock market", "BSE and NSE explained", "How stock prices are determined"] },
      { id: "sm2", title: "Buying & Selling Shares",   xp: 15, topics: ["What is a demat account", "What is a trading account", "How to buy shares in India", "Market order vs limit order"] },
      { id: "sm3", title: "Market Indices",            xp: 15, topics: ["What is Sensex", "What is Nifty 50", "How indices are calculated", "What index funds track"] },
      { id: "sm4", title: "Reading a Company",         xp: 20, topics: ["What is P/E ratio", "What is EPS", "How to read annual report basics", "Revenue vs profit difference"] },
      { id: "sm5", title: "Dividends",                 xp: 15, topics: ["What is dividend", "Dividend yield explained", "Dividend reinvestment explained", "Tax on dividends in India"] },
      { id: "sm6", title: "Market Behaviour",          xp: 20, topics: ["What is a bull market", "What is a bear market", "Market cycles explained", "Why markets are volatile"] },
      { id: "sm7", title: "Investing vs Trading",      xp: 20, topics: ["Difference between investing and trading", "Why most traders lose money", "Long term equity returns in India"] },
    ],
  },

  {
    id: "retirement", title: "Retirement Planning", tier: 3,
    subtitle: "Build the life you want after work",
    icon: "🌅", tag: "MODULE 11",
    lessons: [
      { id: "ret1", title: "Why Plan for Retirement?", xp: 10, topics: ["Why retirement planning is essential", "How much you need to retire", "The retirement corpus calculation"] },
      { id: "ret2", title: "EPF Explained",            xp: 15, topics: ["What is EPF", "How EPF contributions work", "EPF interest rate", "How to check EPF balance", "EPF withdrawal rules"] },
      { id: "ret3", title: "PPF Deep Dive",            xp: 15, topics: ["What is PPF", "PPF interest rate and tenure", "PPF tax benefits", "PPF withdrawal and loan rules"] },
      { id: "ret4", title: "NPS Explained",            xp: 20, topics: ["What is NPS", "NPS tier 1 and tier 2", "NPS tax deduction under 80CCD", "NPS annuity on retirement"] },
      { id: "ret5", title: "Retirement Corpus Goal",   xp: 20, topics: ["How to calculate retirement corpus", "25x rule for retirement", "Inflation impact on retirement planning", "Safe withdrawal rate explained"] },
      { id: "ret6", title: "Retirement Investment Mix",xp: 20, topics: ["Asset allocation by age", "100 minus age rule", "Glide path investing explained", "Shifting from growth to income in retirement"] },
    ],
  },

  {
    id: "entrepreneurship", title: "Money for Entrepreneurs", tier: 3,
    subtitle: "Financial literacy for business owners",
    icon: "🚀", tag: "MODULE 12",
    lessons: [
      { id: "ent1", title: "Business vs Job Income",   xp: 10, topics: ["Differences between business and salaried income", "Why business income is variable", "Owner's salary vs profit"] },
      { id: "ent2", title: "Business Banking",         xp: 15, topics: ["Why separate business bank account matters", "Current account for business", "Business credit card benefits"] },
      { id: "ent3", title: "GST Basics",               xp: 15, topics: ["What is GST", "GST registration threshold", "Input tax credit explained", "GST return filing basics"] },
      { id: "ent4", title: "Business Funding",         xp: 20, topics: ["Bootstrapping explained", "What is a business loan", "Mudra loan scheme India", "Angel investors vs venture capital basics"] },
      { id: "ent5", title: "Cash Flow Management",     xp: 20, topics: ["What is cash flow", "Difference between profit and cash flow", "How to manage business cash flow", "Invoice management tips"] },
      { id: "ent6", title: "Financial Records",        xp: 15, topics: ["Why financial records matter for business", "Basic bookkeeping concepts", "P&L statement basics", "Balance sheet basics"] },
    ],
  },
];

export const ALL_TOPICS   = MODULES.flatMap(m => m.lessons.flatMap(l => l.topics));
export const TOTAL_LESSONS = MODULES.reduce((a, m) => a + m.lessons.length, 0);

// XP thresholds — more generous for the bigger curriculum
export const LVL_XP = [0, 60, 150, 280, 450, 680, 980, 1350, 1800, 2400, 3100, 4000];

export function calcLevel(xp) {
  let l = 1;
  for (let i = 1; i < LVL_XP.length; i++) {
    if (xp >= LVL_XP[i]) l = i + 1; else break;
  }
  return Math.min(l, LVL_XP.length);
}

export function levelMeta(xp) {
  const l    = calcLevel(xp);
  const from = LVL_XP[l - 1] ?? 0;
  const to   = LVL_XP[l]     ?? LVL_XP[LVL_XP.length - 1];
  return { lvl: l, pct: Math.min(100, ((xp - from) / (to - from)) * 100), from, to };
}
