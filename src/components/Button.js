import React from "react";
import "./Button.css";

const Button = ({ label, onClick, btnColor }) => {
  return (
    <div>
      <button
        className="btn_style"
        style={{ backgroundColor: btnColor }}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
