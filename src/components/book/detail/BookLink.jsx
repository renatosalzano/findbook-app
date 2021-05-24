import { Link } from "react-router-dom";

export const Authors = ({ authors }) => {
  return (
    <div className="authors">
      {authors.map((author) => (
        <Author key={author} author={author} />
      ))}
    </div>
  );
};

const Author = ({ author }) => {
  let string = author.replace(/ /g, "+");
  return (
    <Link className="link" to={`/search/inauthor:${string}`}>
      {author}
    </Link>
  );
};

export const Publisher = ({ publisher }) => {
  let string = publisher.replace(/ /g, "+");
  return (
    <div className="publisher">
      <strong>{`Editore:`}</strong>
      <Link className="link" to={`/search/inpublisher:${string}`}>
        {publisher}
      </Link>
    </div>
  );
};
