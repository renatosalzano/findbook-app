import { useContext, useEffect, useRef } from "react";
import { GiEvilBook, GiWhiteBook } from "react-icons/gi";
import { AppContext } from "../context/AppContext";

const NotFound = () => {
  const { theme } = useContext(AppContext);
  return theme === "light_mode" ? <GoodBook /> : <EvilBook />;
};

export default NotFound;

const EvilBook = () => {
  return (
    <div className="not_found">
      <strong>404 RUUN!</strong>
      <GiEvilBook className="evil_book" />
      <RandomQuotes />
    </div>
  );
};

const GoodBook = () => {
  return (
    <div className="not_found">
      <strong>404 OOPS!</strong>
      <GiWhiteBook className="good_book" />
      <span className="random_quotes">{"Nessun risultato"}</span>
    </div>
  );
};

const quotes = [
  "HaHaHaHa",
  "Qui non c'é niente...",
  "Ti sei perso?",
  "Khandar Estrada khandos thrus...",
  "Mi hai trovato!",
];

const RandomQuotes = () => {
  let num = useRef(0);
  useEffect(() => {
    num.current = Math.floor(Math.random() * 5);
  }, [num]);

  return (
    <span className="random_quotes">{'"' + quotes[num.current] + '"'}</span>
  );
};
