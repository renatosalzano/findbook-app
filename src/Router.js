import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import BookPage from "./components/BookPage";
import SearchPage from "./components/SearchPage";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

const Router = () => {
  const { theme, transition } = useContext(AppContext);
  const style = {
    transition: transition ? "0.4s" : "none",
  };
  return (
    <HashRouter>
      <div className={`layout ${theme}`} style={style}>
        <div className="pages">
          <SearchBar />
          <Switch>
            <Redirect from="/search/" to="/" exact />
            <Route path={"/search/:src"} component={SearchPage} />
            <Redirect from="/book/" to="/" exact />
            <Route path={"/book/:id/:title"} component={BookPage} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

export default Router;
