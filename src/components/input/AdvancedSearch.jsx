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

  return (
    <form
      className={`src_container ${extend} ${isFocus}`}
      onSubmit={submit_handler}
      onMouseEnter={toggle_extend}
      onMouseLeave={toggle_extend}
    >
      <InputText
        target_name="intitle"
        value={input.intitle}
        onChange={input_handler}
        onFocus={toggle_focus}
        onBlur={toggle_focus}
      />
      <InputText
        target_name="inauthor"
        value={input.inauthor}
        onChange={input_handler}
        onFocus={toggle_focus}
        onBlur={toggle_focus}
      />
      <InputText
        target_name="inpublisher"
        value={input.inpublisher}
        onChange={input_handler}
        onFocus={toggle_focus}
        onBlur={toggle_focus}
      />
      <SearchButton />
      <LoadingBar />
    </form>
  );
};

export default memo(AdvancedSearch);
