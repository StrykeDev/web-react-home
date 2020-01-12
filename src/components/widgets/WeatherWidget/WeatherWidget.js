import React, { useContext } from "react";
import { Card } from "react-bootstrap";

import { WeatherContext } from "../../../contexts/WeatherContext";

import Loading from "../../common/Loading";

import icoHumidity from "./assats/icon_humidity.svg";
import icoWind from "./assats/icon_wind.svg";
import backgroundLightClouds from "./assats/background_light_clouds.png";
import backgroundCoulds from "./assats/background_clouds.png";
import backgroundRain from "./assats/background_rain.png";
import backgroundThunderstorm from "./assats/background_thunderstorm.png";
import backgroundSnow from "./assats/background_snow.png";
import backgroundMist from "./assats/background_mist.png";

const WeatherWidget = () => {
  const { weather } = useContext(WeatherContext);

  const getIcon = code => {
    return "http://openweathermap.org/img/wn/" + code + "@2x.png";
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

  const getBackground = code => {
    switch (code.match(/\d+/)[0]) {
      case "02":
      case "03":
        return backgroundLightClouds;
      case "04":
      case "09":
        return backgroundCoulds;
      case "10":
        return backgroundRain;
      case "11":
        return backgroundThunderstorm;
      case "13":
        return backgroundSnow;
      case "50":
        return backgroundMist;
      default:
        return "";
    }
  };

  const weatherInfo = () => (
    <div className="d-flex flex-column flex-fill">
      <Card.Title className="d-flex flex-row my-auto">
        <h1>{Math.round(weather.temp)}</h1>

        <h5 className="mt-2 mx-1">°C</h5>

        <h4 className="text-capitalize mt-auto mb-3 mx-2">
          {weather.description}
        </h4>
      </Card.Title>

      <ul className="list-unstyled d-flex flex-row mt-auto align-items-center">
        <li>
          <img
            src={getIcon(weather.icon)}
            alt={weather.main}
            height="32"
            className="mx-s1"
            style={{ filter: "grayscale(1)" }}
          />
          {weather.city} {weather.country}
        </li>
        <li className="mx-2"></li>
        <li>
          <img src={icoHumidity} alt="Humidity" height="16" className="mx-1" />
          {weather.humidity}%
        </li>
        <li className="mx-2"></li>
        <li>
          <img src={icoWind} alt="Wind speed" height="16" className="mx-1" />
          {weather.wind} m/s
        </li>
      </ul>
    </div>
  );

  return (
    <Card
      className="h-100 w-100 text-white"
      style={{
        background: getGradient(weather ? weather.temp : 0),
        border: "none",
        overflow: "hidden"
      }}
    >
      <Card.Body
        className="d-flex"
        style={{
          backgroundImage: `url(${getBackground(
            weather ? weather.icon : "0"
          )})`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          minHeight: "200px"
        }}
      >
        {weather ? weatherInfo() : <Loading />}
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;
