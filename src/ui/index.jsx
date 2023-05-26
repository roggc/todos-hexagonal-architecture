import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "ui/components/root";

const UI = (applicationAdapter) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Root applicationAdapter={applicationAdapter} />
    </React.StrictMode>
  );
};

export default UI;
