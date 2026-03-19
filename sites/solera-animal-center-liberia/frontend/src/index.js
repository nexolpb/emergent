import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// Hide Emergent badge/links in local/dev and production builds (injected outside of React).
const hideEmergentBadge = () => {
  const badge = document.getElementById("emergent-badge");
  if (badge) badge.style.display = "none";

  document
    .querySelectorAll('a[href*="app.emergent"], a[href*="emergent-badge"], a[href*="utm_source=emergent-badge"]')
    .forEach((el) => {
      el.style.display = "none";
    });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

hideEmergentBadge();
const t = setInterval(hideEmergentBadge, 250);
setTimeout(() => clearInterval(t), 5000);
