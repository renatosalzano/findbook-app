import { useCallback, useEffect, useState } from "react";

export const useInputSearch = (init) => {
  /* init = { name : value, ...  } */
  const [input, setInput] = useState(init);
  const [query, setQuery] = useState("");

  const input_handler = (evt) => {
    evt.preventDefault();

    const name = evt.target.name;
    const value = evt.target.value;
    setInput((input) => (input = { ...input, [name]: value }));
  };

  const input_to_google_query = useCallback(
    (input_obj) => {
      /* input_obj = { input } */
      let name = Object.keys(input_obj);
      let string;
      let value = (key) => {
        return input[key].trim().replace(/ /g, "+");
      };

      if (name.length === 1) {
        // normal search
        string = value(name);
        // string = "input_value"
      } else {
        // advanced search
        string = name
          .map((key) => (input[key] !== "" ? `${key}:${value(key)}` : ""))
          .filter(Boolean)
          .join("+");
        // string = "target_name:input_value+..."
      }
      return setQuery((query) => (query = string));
    },
    [input, setQuery]
  );

  useEffect(() => {
    input_to_google_query(input);
  }, [input, input_to_google_query]);

  return { input, setInput, query, input_handler };
};
