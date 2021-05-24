import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const LoadingBar = () => {
  const { loading } = useContext(AppContext);

  const box_style = {
    position: "absolute",
    left: "0",
    bottom: "-2px",
    display: "flex",
    width: "100%",
    height: "2px",
  };
  const bar_style = {
    display: "flex",
    width: `${loading}%`,
    height: "100%",
    transition: "width 0.5s",
  };

  return (
    <div className="loading_bar" style={box_style}>
      <div className="bar" style={bar_style}></div>
    </div>
  );
};

export default LoadingBar;
