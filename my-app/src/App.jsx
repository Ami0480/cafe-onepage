import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
