import { C, F } from "../styles/theme.js";
import { t } from "../data/strings.js";

const TABS = [
  { id: "home",        labelKey: "nav_home",    icon: HomeIcon },
  { id: "modules",     labelKey: "nav_path",    icon: PathIcon },
  { id: "chatbot",     labelKey: "nav_chat",    icon: ChatIcon },
  { id: "leaderboard", labelKey: "nav_ranks",   icon: RankIcon },
  { id: "profile",     labelKey: "nav_profile", icon: ProfileIcon },
];

export default function BottomNav({ screen, onNavigate, lang = "en" }) {
  return (
    <div style={{
      position: "sticky",
      bottom: 0,
      left: 0, right: 0,
      background: C.bg,
      borderTop: `1px solid ${C.border}`,
      display: "flex",
      padding: "10px 0 16px",
      zIndex: 100,
    }}>
      {TABS.map(tab => {
        const active = screen === tab.id;
        const Icon   = tab.icon;
        const label  = t(lang, tab.labelKey);
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "4px 0",
            }}
          >
            {tab.id === "chatbot" ? (
              <div style={{
                width: 48, height: 48,
                borderRadius: "50%",
                background: active ? C.neon : C.card,
                border: `2px solid ${active ? C.neon : C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginTop: -20,
                boxShadow: active ? `0 0 20px ${C.neon}55` : "none",
                transition: "all .2s",
              }}>
                <Icon color={active ? C.bg : C.grey} size={22} />
              </div>
            ) : (
              <Icon color={active ? C.neon : C.greyDark} size={20} />
            )}
            <span style={{
              fontFamily: F.family,
              fontSize: 9,
              fontWeight: F.bold,
              letterSpacing: lang === "hi" ? 0 : 1,
              color: active ? C.neon : C.greyDark,
            }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function HomeIcon({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 21V12h6v9" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
function PathIcon({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="9" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="14" y="3" width="7" height="5" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="14" y="12" width="7" height="9" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="3" y="16" width="7" height="5" rx="1" stroke={color} strokeWidth="2"/>
    </svg>
  );
}
function ChatIcon({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
function RankIcon({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
function ProfileIcon({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="2"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
