import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />

      <h1>{props.data.city}</h1>

      <div class="row">
        <div class="col-auto mx-auto  ">
          <div className="row align-items-center text-center">
            <div className="col-auto">
              {" "}
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-auto ">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="weather-icon"
              />
              <li className="text-capitalize">{props.data.description}</li>
            </div>
          </div>
        </div>
      </div>
      <div className="row conditions">
        <div className="col-6 ">Humidity: {props.data.humidity}%</div>
        <div className="col-6 ">Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
