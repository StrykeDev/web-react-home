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
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const appid = "eacfa3060655612bc2d28b3da22f78b6";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${appid}`;

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    Axios.get(url).then(res => {
      if (res.status === 200) {
        setWeather(res.data);
        console.log("Weather data updated.");
      } else {
        console.error("Failed to fetch weather data.", res);
      }
      getCurrentLocation();
    });
  }, [url, lastUpdate]);

  window.setTimeout(() => setLastUpdate(Date()), 10 * 60 * 1000);

  return (
    <WeatherContext.Provider value={{ weather, location, setLocation }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
