import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./PrimaryButton.css";

type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: "search" | "arrow" | "none";
};

export default function PrimaryButton({
  text,
  onClick,
  icon = "search",
}: PrimaryButtonProps) {
  const renderIcon = () => {
    switch (icon) {
      case "search":
        return <FontAwesomeIcon icon={faSearch} />;
      case "arrow":
        return <FontAwesomeIcon icon={faArrowRight} />;
      default:
        return null;
    }
  };

  return (
    <button className="primary-button" onClick={onClick}>
      <span>{text}</span>
      {icon !== "none" && <span className="icon">{renderIcon()}</span>}
    </button>
  );
}