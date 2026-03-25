import React from "react";
import "./PrimaryButton.css";

type PrimaryButtonProps = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: "search" | "arrow" | "none";
};

export default function PrimaryButton({
  text = "Action",
  onClick,
  disabled = false,
  type = "button",
  icon = "search",
}: PrimaryButtonProps) {
  const renderIcon = () => {
    switch (icon) {
      case "search":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        );
      case "arrow":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      className="primary-button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span>{text}</span>
      {icon !== "none" && <span className="icon">{renderIcon()}</span>}
    </button>
  );
}