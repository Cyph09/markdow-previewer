import React from "react";
import "./Pane.css";

const Pane = ({ children, title }) => (
  <div className="Pane">
    <div className="Pane-header">
      <span className="Pane-header-title">{title}</span>
    </div>
    <div className="Pane-content">{children}</div>
  </div>
);

export default Pane;
