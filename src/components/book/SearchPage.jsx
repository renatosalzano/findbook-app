import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import NotFound from "../NotFound";
import BookList from "./BookList";

const SearchPage = ({ match }) => {
  const src = match.params.src;
  const { books, search_books, error } = useContext(AppContext);
  useEffect(() => {
    search_books({ query: src });
  }, [search_books, src]);

  return (
    <div className="search_page">
      {books.length > 0 && <BookList book_list={books} />}
      {error && <NotFound />}
    </div>
  );
};

export default SearchPage;
