import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CharactersList from "./components/CharactersList/CharactersList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <CharactersList />
  </React.StrictMode>
);
