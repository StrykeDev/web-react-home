import React from "react";
import { Container } from "react-bootstrap";

import WeatherWidget from "../../widgets/WeatherWidget";
import RssWidget from "../../widgets/RssWidget";
import TodoWidget from "../../widgets/TodoWidget";

import HomeHeader from "./HomeHeader";

const Home = props => {
  return (
    <>
      <HomeHeader />

      <Container className="d-flex flex-wrap">
        <div className="p-2 col-12 col-lg-8">
          <WeatherWidget />
        </div>

        <div className="p-2 col-12 col-lg-4">
          <TodoWidget />
        </div>

        <div className="p-2 col-12">
          <RssWidget />
        </div>
      </Container>
    </>
  );
};

export default Home;
