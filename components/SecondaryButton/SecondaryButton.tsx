import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./Secondary-Button.css";

type SecondaryButtonProps = {
  text: string;
  onClick: () => void;
  icon: IconDefinition;
};

export default function SecondaryButton({
  text,
  onClick,
  icon,
}: SecondaryButtonProps) {
  return (
    <button className="secondary-button" onClick={onClick}>
      <span>{text}</span>
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
    </button>
  );
}