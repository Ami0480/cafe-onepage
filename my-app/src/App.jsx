import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
