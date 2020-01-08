import React, { Component } from "react";
import Axios from "axios";
import { Jumbotron } from "react-bootstrap";

import icoHumidity from "./assats/drop-silhouette.png";
import icoWind from "./assats/weather.png";

class WeatherWidget extends Component {
  state = {
    appid: "eacfa3060655612bc2d28b3da22f78b6",
    url: "https://api.openweathermap.org/data/2.5/weather",
    iconUrl: "http://openweathermap.org/img/wn/",
    params: {
      q: "haifa,il",
      units: "metric"
    },
    weather: {
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
    },
    gradients: [
      {
        from: "#9AB4C2",
        to: "#6AB4C2"
      },
      {
        from: "#8CD9FF",
        to: "#005D8A"
      },
      {
        from: "#32ACFF",
        to: "#195BBF"
      },
      {
        from: "#FFCEA1",
        to: "#0092B8"
      },
      {
        from: "#C29271",
        to: "#C2583F"
      }
    ]
  };

  componentDidMount() {
    Axios.get(
      this.state.url +
        "?q=" +
        this.state.params.q +
        "&units=" +
        this.state.params.units +
        "&appid=" +
        this.state.appid
    ).then(res => {
      if (res.data) {
        this.setState({ weather: res.data });
      }
    });
  }

  gradientStyle = () => {
    let tempIndex = this.state.weather.main.temp;
    tempIndex = Math.floor(tempIndex / 10);
    tempIndex = Math.max(0, Math.min(tempIndex, 4));
    return (
      "linear-gradient(10deg, " +
      this.state.gradients[tempIndex].from +
      ", " +
      this.state.gradients[tempIndex].to +
      ")"
    );
  };

  render() {
    return (
      <Jumbotron
        className="p-3 text-white d-flex flex-column w-100 h-100"
        style={{
          background: this.gradientStyle(),
          height: "250px"
        }}
      >
        <div className="d-flex flex-row my-auto">
          <h1 className="display-2">
            {Math.round(this.state.weather.main.temp)}
          </h1>

          <h5 className="mt-3 mx-2">°C</h5>

          <h3 className="text-capitalize mt-auto my-4 mx-2">
            {this.state.weather.weather[0].description}
          </h3>
        </div>

        <ul className="list-unstyled d-flex flex-row mt-auto align-items-center">
          <li>
            <img
              src={
                this.state.iconUrl +
                this.state.weather.weather[0].icon +
                "@2x.png"
              }
              alt={this.state.weather.weather[0].main}
              height="32"
              className="mx-2"
              style={{ filter: "grayscale(1)" }}
            />
            {this.state.weather.name}, {this.state.weather.sys.country}
          </li>
          <li className="mx-3"></li>
          <li>
            <img
              src={icoHumidity}
              alt="Humidity"
              height="20"
              className="mx-2"
            />
            {this.state.weather.main.humidity}%
          </li>
          <li className="mx-3"></li>
          <li>
            <img src={icoWind} alt="Wind speed" height="20" className="mx-2" />
            {this.state.weather.wind.speed} m/s
          </li>
        </ul>
      </Jumbotron>
    );
  }
}

export default WeatherWidget;
