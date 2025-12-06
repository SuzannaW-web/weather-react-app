import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="scattered-clouds-day" size={40} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19°C </span>
            <span className="WeatherForecast-temperature-min"> 10°C</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="scattered-clouds-day" size={40} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19°C </span>
            <span className="WeatherForecast-temperature-min"> 10°C</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="scattered-clouds-day" size={40} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19°C </span>
            <span className="WeatherForecast-temperature-min"> 10°C</span>
          </div>
        </div>
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
