import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Tuesday 23:00",
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
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
        <ul>
          <li>{weatherData.date}</li>
          <h1>{weatherData.city}</h1>
        </ul>

        <div class="row">
          <div class="col-auto mx-auto  ">
            <div className="row align-items-center text-center">
              <div className="col-auto">
                {" "}
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
              <div className="col-auto ">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="weather-icon"
                />
                <li className="text-capitalize">{weatherData.description}</li>
              </div>
            </div>
          </div>
        </div>
        <div className="row conditions">
          <div className="col-6 ">Humidity: {weatherData.humidity}%</div>
          <div className="col-6 ">Wind: {weatherData.wind} km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3o03ae1d8at693bf40d8fb4c10733055";

    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
