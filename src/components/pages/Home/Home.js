import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import WeatherWidget from "../../widgets/WeatherWidget";
import RssWidget from "../../widgets/RssWidget";
import TodoWidget from "../../widgets/TodoWidget";

import HomeHeader from "./HomeHeader";

const Home = props => {
  return (
    <>
      <HomeHeader />

      <Container className="d-flex flex-wrap">
        <div className="col-12 col-lg-8 p-2">
          <WeatherWidget />
        </div>

        <div className="col-12 col-lg-4 p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100">
            <TodoWidget />
          </Jumbotron>
        </div>

        <div className="col-12 p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100">
            <RssWidget />
          </Jumbotron>
        </div>
      </Container>
    </>
  );
};

export default Home;
