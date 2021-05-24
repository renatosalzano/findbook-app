import { Authors } from "./detail/BookLink";
import { Cover, Thumbnail } from "./detail/Cover";
import Description from "./detail/Description";

const Book = ({ volume_info, book_id }) => {
  const { title, authors, imageLinks, description } = volume_info;
  return (
    <div className="book">
      {title && <strong className="title">{title}</strong>}
      <div className="book_body">
        {imageLinks ? (
          <Thumbnail
            thumbnail={imageLinks.thumbnail}
            id={book_id}
            title={title}
            is_link={true}
          />
        ) : (
          <Cover id={book_id} title={title} is_link={true} />
        )}
        <div className="book_info">
          {authors && <Authors authors={authors} />}
          {description && <Description text={description} max_length={250} />}
        </div>
      </div>
    </div>
  );
};

export default Book;
