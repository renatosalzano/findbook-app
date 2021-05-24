import { memo } from "react";
import { useInputSearch } from "../../hooks/useInputSearch";
import SearchButton from "../button/SearchButton";
import InputText from "./InputText";
import LoadingBar from "../LoadingBar";

const AdvancedSearch = ({
  submit_search,
  extend,
  toggle_extend,
  toggle_focus,
  isFocus,
  advanced,
}) => {
  const { input, query, input_handler } = useInputSearch({
    intitle: "",
    inauthor: "",
    inpublisher: "",
  });

  const submit_handler = (evt) => {
    evt.preventDefault();
    if (query) return submit_search(query);
  };

  let expand = extend ? "expand" : "";

  return (
    <form
      className={`src_container ${expand} ${advanced} ${isFocus}`}
      onSubmit={submit_handler}
      onMouseEnter={toggle_extend}
      onMouseLeave={toggle_extend}
    >
      <div className="grid">
        <InputText
          target_name="intitle"
          placeholder="Titolo"
          class_name="input_title"
          value={input.intitle}
          onChange={input_handler}
          onFocus={toggle_focus}
          onBlur={toggle_focus}
        />
        <InputText
          target_name="inauthor"
          placeholder="Autore"
          class_name="input_author"
          value={input.inauthor}
          onChange={input_handler}
          onFocus={toggle_focus}
          onBlur={toggle_focus}
        />
        <InputText
          target_name="inpublisher"
          placeholder="Editore"
          class_name="input_publisher"
          value={input.inpublisher}
          onChange={input_handler}
          onFocus={toggle_focus}
          onBlur={toggle_focus}
        />
      </div>
      <SearchButton />
      <LoadingBar />
    </form>
  );
};

export default memo(AdvancedSearch);
