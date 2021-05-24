import { GrSearchAdvanced } from "react-icons/gr";

const AdvancedButton = ({ advanced_search_event, active }) => {
  return (
    <div
      className={`advanced_button ${active ? "active" : ""}`}
      onClick={advanced_search_event}
    >
      <GrSearchAdvanced />
    </div>
  );
};

export default AdvancedButton;
