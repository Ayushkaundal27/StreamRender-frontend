import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app-shell">
      <section className="welcome-card" aria-labelledby="welcome-title">
        <div className="mark" aria-hidden="true">
          R
        </div>
        <p className="eyebrow">React starter</p>
        <h1 id="welcome-title">Your blank canvas is ready.</h1>
        <p className="intro">
          Start building here. This Vite-powered React app is configured for
          Replit Preview and ready for your next idea.
        </p>
        <div className="details">
          <span>React 19</span>
          <span>Vite</span>
          <span>TypeScript</span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);