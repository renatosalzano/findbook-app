import { memo } from "react";

import Book from "./Book";

const BookList = ({ book_list }) => {
  return (
    <div className="book_list">
      {book_list &&
        book_list.map((book) => (
          <Book key={book.id} volume_info={book.volumeInfo} book_id={book.id} />
        ))}
    </div>
  );
};

export default memo(BookList);
