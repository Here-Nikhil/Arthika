import { C } from "../styles/theme.js";

export default function PhoneShell({ children }) {
  return (
    <>
      <style>{`
        html, body { background: #E8EAF0; height: 100%; }

        @media (min-width: 600px) {
          .a-shell {
            position: fixed;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 390px;
            height: 844px;
            border-radius: 50px;
            overflow: hidden;
            background: ${C.bg};
          }
          .a-bg {
            position: fixed; inset: 0; z-index: -1;
            background: #E8EAF0;
          }
        }

        @media (max-width: 599px) {
          .a-shell {
            width: 100%;
            height: 100dvh;
            background: ${C.bg};
            position: relative;
          }
          .a-bg { display: none; }
        }

        .a-inner {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          scrollbar-width: none;
        }
        .a-inner::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="a-bg" />
      <div className="a-shell">
        <div className="a-inner">
          {children}
        </div>
      </div>
    </>
  );
}
