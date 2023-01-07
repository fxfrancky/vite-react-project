import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
