// App.js
import "./styles.css";
import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Suzanna's React Weather App</h1>
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
