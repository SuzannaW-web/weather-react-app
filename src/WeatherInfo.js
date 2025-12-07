import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {/* Header */}
      <div className="text-center weather-header">
        <FormattedDate date={props.data.date} />
        <h1>{props.data.city}</h1>
      </div>

      <div className="row g-4 weather-cards">
        <div className="col-12 col-md-4">
          <div className="weather-card details-card">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="weather-card temp-card text-center">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="weather-card icon-card text-center">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
