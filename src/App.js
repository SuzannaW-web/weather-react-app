// App.js
import "./styles.css";
import React, { useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  const [city, setCity] = useState("");

  function handleSearch(newCity) {
    setCity(newCity);
  }

  return (
    <div className="App">
      <h1>Suzanna's React Weather App</h1>
      <Search onSearch={handleSearch} />
      {city && <Weather city={city} />}
      <Footer />
    </div>
  );
}
