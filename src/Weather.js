import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=3o03ae1d8at693bf40d8fb4c10733055&units=metric`;
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, [city]);

  if (!weather) {
    return <p>Loading weather for {city}...</p>;
  }

  return (
    <div>
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p>Temperature: {Math.round(weather.temperature.current)}°C</p>
      <p>Description: {weather.condition.description}</p>
      <p>Humidity: {weather.temperature.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
      <img
        src={weather.condition.icon_url}
        alt={weather.condition.description}
      />
    </div>
  );
}
