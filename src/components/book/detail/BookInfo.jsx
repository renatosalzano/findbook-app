export const Isbn = ({ isbn }) => {
  return (
    <div className="ISBN_container">
      <strong>{"ISBN:"}</strong>
      {isbn.type !== "OTHER" &&
        isbn.map((x, i) => [
          i > 0 && ", ",
          <span key={x.identifier}>{x.identifier}</span>,
        ])}
    </div>
  );
};

export const PageCount = ({ num }) => {
  return (
    <div className="page_count">
      <strong>{"Numero di pagine:"}</strong>
      <span>{num}</span>
    </div>
  );
};

export const BookDate = ({ date }) => {
  return (
    <div className="book_date">
      <strong>{"Pubblicazione:"}</strong>
      <span>{date.split("-")[0]}</span>
    </div>
  );
};
