import { useHistory } from "react-router-dom";

export const Thumbnail = ({ thumbnail, id, title, is_link }) => {
  const history = useHistory();
  const select_event = () => {
    if (is_link) {
      let string = title.replace(/ /g, "+");
      return history.push(`/book/${id}${title ? "/" + string : ""}`);
    }
  };

  const style = {
    cursor: is_link ? "pointer" : "default",
  };

  return (
    <div onClick={select_event} className="cover" style={style}>
      <img src={thumbnail} alt="book_cover" />
    </div>
  );
};

// cover miss

export const Cover = ({ title, is_link, id }) => {
  const history = useHistory();
  const select_event = () => {
    if (is_link) {
      let string = title.replace(/ /g, "+");
      return history.push(`/book/${id}${title ? "/" + string : ""}`);
    }
  };
  const style = {
    cursor: is_link ? "pointer" : "default",
  };

  return (
    <div onClick={select_event} className="cover cover_miss" style={style}>
      <span>Immagine non disponibile</span>
    </div>
  );
};
