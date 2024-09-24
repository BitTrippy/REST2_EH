import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Add from "./Add";
import Search from "./Search";

function App() {
  return (
    // Lisätään navigointi sovellukseen.
    // Tämä oli yksinkertaisin tapa mikä itselläni tuli mieleen routing toteutukselle ja minkä olin nähnyt aiemmin.
    // Path ohjaa sivun osoitteeseen ja element määrittää sivulla renderöidyn komponentin.
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
