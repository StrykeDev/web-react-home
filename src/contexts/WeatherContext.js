import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const WeatherContext = createContext();

const WeatherContextProvider = props => {
  const [lastUpdate, setLastUpdate] = useState(Date());
  const [weather, setWeather] = useState();
  const appid = "eacfa3060655612bc2d28b3da22f78b6";

  const fetchWeather = location => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${appid}`
    ).then(res => {
      if (res.status === 200) {
        setWeather(res.data);
        console.log("Weather data updated.");
      } else {
        console.error("Failed to fetch weather data.", res);
      }
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          fetchWeather(location);
        },
        () => {
          const location = {
            lat: 0,
            lon: 0
          };
          fetchWeather(location);
        }
      );
    }
  }, [lastUpdate]);

  window.setTimeout(() => setLastUpdate(Date()), 10 * 60 * 1000);

  return (
    <WeatherContext.Provider value={{ weather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
