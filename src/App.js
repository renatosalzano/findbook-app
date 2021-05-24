import { AppProvider } from "./context/AppContext";
import Router from "./Router";
import "./style/layout.scss";
import "./style/search_bar.scss";
import "./style/book.scss";
import "./style/media_query.scss";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
