import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const WeatherContext = createContext();

const WeatherContextProvider = props => {
  const [lastUpdate, setLastUpdate] = useState(Date());
  const [weather, setWeather] = useState({
    weather: [
      {
        main: "",
        description: ". . .",
        icon: "03n"
      }
    ],
    main: {
      temp: 0,
      humidity: 0
    },
    wind: {
      speed: 0
    },
    name: "",
    sys: {
      country: ""
    }
  });
  const [location, setLocation] = useState("Haifa,IL");
  const appid = "&appid=eacfa3060655612bc2d28b3da22f78b6";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
    location +
    appid;

  useEffect(() => {
    Axios.get(url).then(res => {
      if (res.data) {
        setWeather(res.data);
      }
    });
  }, [location, url, lastUpdate]);

  window.setTimeout(() => setLastUpdate(Date()), 10 * 60 * 1000);

  return (
    <WeatherContext.Provider value={{ weather, location, setLocation }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
