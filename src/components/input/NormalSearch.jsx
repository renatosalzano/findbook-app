import { memo, useEffect } from "react";
import { useInputSearch } from "../../hooks/useInputSearch";
import SearchButton from "../button/SearchButton";
import LoadingBar from "../LoadingBar";
import InputText from "./InputText";

const NormalSearch = ({
  submit_search,
  extend,
  isFocus,
  toggle_extend,
  toggle_focus,
  value,
}) => {
  const { input, setInput, query, input_handler } = useInputSearch({
    query: value,
  });
  const submit_handler = (evt) => {
    evt.preventDefault();
    return submit_search(query, input.query);
  };
  useEffect(() => {
    setInput({ query: value });
  }, [value, setInput]);

  return (
    <form
      className={`src_container ${extend} ${isFocus}`}
      onSubmit={submit_handler}
      onMouseEnter={toggle_extend}
      onMouseLeave={toggle_extend}
    >
      <InputText
        target_name="query"
        placeholder="FindBook..."
        value={input.query}
        onChange={input_handler}
        onFocus={toggle_focus}
        onBlur={toggle_focus}
      />
      <SearchButton />
      <LoadingBar />
    </form>
  );
};

export default memo(NormalSearch);
