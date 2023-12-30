import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import NoPage from "./pages/nopage";
import Result from "./pages/anime/result";
import Anime from "./pages/anime";
import Login from "./pages/login";
import Genres from "./pages/anime/genres";
import Airing from "./pages/anime/airing";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Top from "./pages/anime/top";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* search */}
        <Route path="search/q?" element={<Result />} />

        {/* anime */}
        <Route path="anime/airing" element={<Airing />} />
        <Route path="anime/top" element={<Top />} />
        <Route path="anime/:id" element={<Anime />} />
        <Route path="anime/genres?" element={<Genres />} />

        {/* no page */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
