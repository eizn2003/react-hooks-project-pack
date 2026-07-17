import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Details } from "./pages/Details";
import { NavBar } from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="font-montserrat min-h-screen bg-white text-gray-400 text-lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
