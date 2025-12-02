import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import "./Weather.css";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (query.trim().length > 0) {
      setCity(query);
      setWeather(null); // resets old data while fetching new
    } else {
      alert("Enter a city");
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    if (!city) return;

    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=3o03ae1d8at693bf40d8fb4c10733055&units=metric`;

    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, [city]);

  return (
    <div className="Weather">
      <h1>My React Weather App</h1>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              onChange={updateQuery}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      {/* Weather Display */}
      {city && !weather && <p>Loading weather for {city}...</p>}

      {weather && (
        <div className="row">
          <h2>
            {weather.city}, {weather.country}
          </h2>
          <div className="row">
            <div className="col-3">
              <img
                src={weather.condition.icon_url}
                alt={weather.condition.description}
              />{" "}
            </div>
            <div className="col-3">
              <span className="temperature">
                {Math.round(weather.temperature.current)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li></li>
                <li>Description: {weather.condition.description}</li>
                <li>Humidity: {weather.temperature.humidity}%</li>
                <li>Wind: {weather.wind.speed} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
