import { Cover, Thumbnail } from "./detail/Cover";
import { Authors, Publisher } from "./detail/BookLink";
import { BookDate, Isbn, PageCount } from "./detail/BookInfo";
import Description from "./detail/Description";

const BookDetail = ({ volume_info }) => {
  const {
    title,
    authors,
    imageLinks,
    description,
    publisher,
    printedPageCount,
    publishedDate,
    industryIdentifiers,
  } = volume_info;
  return (
    <div className="book_detail book">
      <div className="head">
        {title && <strong className="title">{title}</strong>}
        {authors && <Authors authors={authors} />}
      </div>
      <div className="book_body">
        {imageLinks ? (
          <Thumbnail thumbnail={imageLinks.thumbnail} title={title} />
        ) : (
          <Cover title={title} />
        )}

        <div className="book_info">
          {publisher && <Publisher publisher={publisher} />}
          {industryIdentifiers && <Isbn isbn={industryIdentifiers} />}
          {printedPageCount && <PageCount num={printedPageCount} />}
          {publishedDate && <BookDate date={publishedDate} />}
        </div>
      </div>
      {description && <Description text={description} />}
    </div>
  );
};

export default BookDetail;
