import { useContext } from "react";
import { GoLightBulb } from "react-icons/go";
import { AppContext } from "../../context/AppContext";

const ThemeButton = () => {
  const { switch_theme, theme } = useContext(AppContext);

  return (
    <div className={`theme_button ${theme}`} onClick={switch_theme}>
      <GoLightBulb />
    </div>
  );
};

export default ThemeButton;
