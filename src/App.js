import "./assets/styles/App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
