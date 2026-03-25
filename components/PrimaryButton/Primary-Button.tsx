import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./PrimaryButton.css";

type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
};

export default function PrimaryButton({
  text,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button className="primary-button" onClick={onClick}>
      <span>{text}</span>
      <span className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </button>
  );
}