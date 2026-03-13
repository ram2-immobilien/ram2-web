import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      <span className="button-text">{text}</span>
      <FaSearch className="button-icon" />
    </button>
  );
};

export default PrimaryButton;