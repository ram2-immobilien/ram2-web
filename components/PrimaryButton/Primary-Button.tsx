import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./Primary-Button.css";

type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
  icon: IconDefinition
};

export default function PrimaryButton({
  text,
  onClick,
  icon,
}: PrimaryButtonProps) {
  return (
    <button className="primary-button" onClick={onClick}>
      <span>{text}</span>
      <span className="icon">
       <FontAwesomeIcon icon={icon} /> 
      </span>
    </button>
  );
}