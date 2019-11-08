import React from "react";
import Nasa from "./components/Nasa";
import NasaBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NasaBar />
      <Nasa />
    </div>
  );
}

export default App;
