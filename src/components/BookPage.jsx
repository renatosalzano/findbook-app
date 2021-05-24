import { memo, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import BookDetail from "./book/BookDetail";

const BookPage = ({ match }) => {
  const id = match.params.id;
  const title = match.params.title;
  const { book, search_one_book } = useContext(AppContext);
  useEffect(() => {
    search_one_book(id, title);
  }, [id, title, search_one_book]);

  return (
    <div className="book_page">
      {book && <BookDetail volume_info={book.volumeInfo} />}
    </div>
  );
};

export default memo(BookPage);
