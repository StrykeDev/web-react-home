import React, { useContext } from "react";
import { Jumbotron, Spinner } from "react-bootstrap";

import { WeatherContext } from "../../../../contexts/WeatherContext";

import icoHumidity from "./assats/drop-silhouette.png";
import icoWind from "./assats/weather.png";

const WeatherWidget = props => {
  const { weather } = useContext(WeatherContext);
  const getIcon = id => {
    return "http://openweathermap.org/img/wn/" + id + "@2x.png";
  };

  const getGradient = temp => {
    const tempIndex = Math.floor(temp / 10);

    switch (tempIndex) {
      case 0:
        return "linear-gradient(10deg, #9AB4C2, #6AB4C2)";

      case 1:
        return "linear-gradient(10deg, #8CD9FF, #005D8A)";

      case 2:
        return "linear-gradient(10deg, #32ACFF, #195BBF)";

      case 3:
        return "linear-gradient(10deg, #FFCEA1, #0092B8)";

      default:
        return "linear-gradient(10deg, #C29271, #C2583F)";
    }
  };

  const weatherInfo = weather ? (
    <>
      <div className="d-flex flex-row my-auto">
        <h1>{Math.round(weather.main.temp)}</h1>

        <h5 className="mt-2 mx-1">°C</h5>

        <h4 className="text-capitalize mt-auto mb-3 mx-2">
          {weather.weather[0].description}
        </h4>
      </div>

      <ul className="list-unstyled d-flex flex-row mt-auto align-items-center">
        <li>
          <img
            src={getIcon(weather.weather[0].icon)}
            alt={weather.weather[0].main}
            height="32"
            className="mx-1"
            style={{ filter: "grayscale(1)" }}
          />
          {weather.name} {weather.sys.country}
        </li>
        <li className="mx-2"></li>
        <li>
          <img src={icoHumidity} alt="Humidity" height="16" className="mx-1" />
          {weather.main.humidity}%
        </li>
        <li className="mx-2"></li>
        <li>
          <img src={icoWind} alt="Wind speed" height="16" className="mx-1" />
          {weather.wind.speed} m/s
        </li>
      </ul>
    </>
  ) : (
    <div className="d-flex align-items-center justify-content-center flex-fill">
      <Spinner animation="grow" className="m-2" />
      <Spinner animation="grow" className="m-2" />
      <Spinner animation="grow" className="m-2" />
    </div>
  );

  return (
    <Jumbotron
      className="p-3 text-white d-flex flex-column w-100 h-100"
      style={{
        background: getGradient(weather ? weather.main.temp : 20),
        height: "250px"
      }}
    >
      {weatherInfo}
    </Jumbotron>
  );
};

export default WeatherWidget;
