import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="row">
        <div class="col-5  ">
          <FormattedDate date={props.data.date} />

          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li className="col-6 ">Humidity: {props.data.humidity}%</li>
            <li className="col-6 ">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>

        <div class="col-4">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div class="col-3  ">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-icon"
          />
        </div>
      </div>
    </div>
  );
}
