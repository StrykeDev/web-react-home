import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import WeatherWidget from "./WeatherWidget";
import RssWidget from "./RssWidget";
import TodoWidget from "./TodoWidget";

import HomeHeader from "./HomeHeader";

const Home = props => {
  return (
    <>
      <HomeHeader bg="url(https://i.picsum.photos/id/575/960/540.jpg?grayscale)" />

      <Container className="d-flex flex-wrap">
        <div className="col-12 col-lg-8 p-0 d-flex p-2">
          <WeatherWidget className="flex-fill" />
        </div>

        <div className="col-12 col-lg-4 p-0 d-flex p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100 d-flex">
            <TodoWidget className="flex-fill" />
          </Jumbotron>
        </div>

        <div className="col-12 p-0">
          <Jumbotron className="m-2 p-3 pb-4">
            <RssWidget />
          </Jumbotron>
        </div>
      </Container>
    </>
  );
};

export default Home;
