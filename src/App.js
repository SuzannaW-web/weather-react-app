// App.js
import "./styles.css";
import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Southampton" />
      </div>
      <Footer />
    </div>
  );
}
