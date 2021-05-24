import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import AdvancedButton from "./button/AdvancedButton";
import ThemeButton from "./button/ThemeButton";

// components
import AdvancedSearch from "./input/AdvancedSearch";
import NormalSearch from "./input/NormalSearch";

const SearchBar = () => {
  const history = useHistory();
  const { value, books, book, error, transition } = useContext(AppContext);
  const [fristSrc, setFristSrc] = useState("middle");
  const [isFocus, setIsFocus] = useState("");
  const [advanced, setAdvanced] = useState("");
  const [extend, setExtend] = useState("");

  const submit_search = async (query) => {
    if (query) {
      setFristSrc("");
      return history.push(`/search/${query}`); // => OK
    }
  };

  useEffect(() => {
    if (books.length > 0 || book || error) {
      return setFristSrc("");
    }
  }, [books, book, error]);

  // style function

  const toggle_focus = () => {
    if (isFocus) return setIsFocus("");
    return setIsFocus("focus");
  };

  const toggle_extend = () => {
    if (extend) return setExtend("");
    return setExtend("extend");
  };

  const toggle_advanced_search = () => {
    if (advanced) return setAdvanced("");
    return setAdvanced("advanced");
  };

  const style = {
    transition: transition ? "0.4s" : "none",
  };

  return (
    <div className="fixed_container">
      <div className="margin" style={style}></div>
      <div className={`search_bar_container ${fristSrc}`}>
        {advanced ? (
          <AdvancedSearch
            submit_search={submit_search}
            extend={extend}
            isFocus={isFocus}
            toggle_extend={toggle_extend}
            toggle_focus={toggle_focus}
            advanced={advanced}
          />
        ) : (
          <NormalSearch
            submit_search={submit_search}
            extend={extend}
            isFocus={isFocus}
            toggle_extend={toggle_extend}
            toggle_focus={toggle_focus}
            value={value}
          />
        )}
        <div className={`button_container ${extend ? "hidden" : ""}`}>
          <AdvancedButton
            advanced_search_event={toggle_advanced_search}
            active={advanced}
          />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
