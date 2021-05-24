import { createContext, useCallback, useEffect, useState } from "react";
import { useFinder } from "../hooks/useFinder";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { find } = useFinder();
  const { switch_theme, transition, theme } = useThemeSwitcher();
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState("0");

  const check_error = (res) => {
    switch (res.status) {
      case 200:
        if (res.data.totalItems === 0) {
          setLoading("100");
          setError("NOT FOUND");
          return true;
        }
        return false;
      case 404:
        setError("404");
        setLoading("100");
        return true;
      case 500:
        setError("500");
        setLoading("100");
        return true;
      default:
        setError("ERROR");
        setLoading("100");
        return true;
    }
  };

  const update_value = useCallback((src_params) => {
    let string = src_params.replace(/[+]/g, " ");
    setValue((value) => (value = string));
  }, []);

  const search_books = useCallback(
    async ({ query, max_res = 5 }) => {
      setError("");
      setLoading("20");
      const res = await find({
        type: "SRC_BOOKS",
        query: query,
        max_res: max_res,
      });
      setLoading("60");
      console.log(res);
      if (check_error(res)) return setBooks([]); // error
      setBooks((books) => (books = res.data.items));
      update_value(query);
      setLoading("100");
      return true; // => Books founded
    },
    [find, update_value]
  );

  const search_one_book = useCallback(
    async (volume_id, title = "") => {
      setError("");
      setLoading("20");
      const res = await find({
        type: "SRC_BOOK_ID",
        volume_id: volume_id,
      });
      setLoading("60");
      if (check_error(res)) return setBook(null); // error
      setBook((book) => (book = res.data));
      update_value(title);
      setLoading("100");
      return true; // => Book founded
    },
    [find, update_value]
  );

  const select_book = (id) => {
    // books.filter => book
    const book_filtered = books.filter((book) => book.id === id)[0];
    setBook((book) => (book = book_filtered));
  };

  useEffect(() => {
    if (loading === "100") {
      setTimeout(() => {
        setLoading("0");
      }, 500);
    }
  }, [loading]);

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        books,
        book,
        loading,
        search_books,
        search_one_book,
        select_book,
        value,
        setValue,
        update_value,
        error,
        switch_theme,
        transition,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
