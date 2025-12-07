import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "3o03ae1d8at693bf40d8fb4c10733055";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <h2>Forecast</h2>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="scattered-clouds-day" size={40} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19°C </span>
            <span className="WeatherForecast-temperature-min"> 10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
