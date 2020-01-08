import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const HomeHeader = props => {
  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const bg = props.bg
    ? props.bg
    : "url(https://picsum.photos/960/540?grayscale)";

  return (
    <Jumbotron
      fluid
      className="px-3 text-white"
      style={{
        background: bg,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textShadow: "2px 2px 5px #00000077"
      }}
    >
      <Container>
        <h1 className="display-3">{days[d.getDay()]}</h1>
        <p className="lead">
          {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}
        </p>
      </Container>
    </Jumbotron>
  );
};

export default HomeHeader;
