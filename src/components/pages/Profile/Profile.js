import React, { useContext } from "react";
import { Container, Jumbotron } from "react-bootstrap";

import { AuthContext } from "../../../contexts/AuthContext";

import defaultProfileImage from "./assats/profile-image.png";
import HomeHeader from "../Home/HomeHeader";

const Profile = props => {
  const { auth } = useContext(AuthContext);
  const user = auth.users.find(user => user.username === auth.current);
  console.log(user);

  return (
    <>
      <HomeHeader />

      <Container className="d-flex flex-wrap">
        <div className="col-12 p-2">
          <Jumbotron className="d-flex align-items-center flex-md-row flex-column m-2 p-3 pb-4 w-100 h-100">
            <img
              src={defaultProfileImage}
              alt=""
              style={{ borderRadius: "100%" }}
              height="200"
              width="200"
              className=" p-4"
            />
            <span className="text-center text-md-left">
              <h3>
                {user.firstname} {user.lastname}
              </h3>
              <p className="lead">{user.username}</p>
            </span>
          </Jumbotron>
        </div>

        <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="m-2 p-3 pb-4 w-100 h-100">
            <p>Todo list settings</p>
          </Jumbotron>
        </div>
        <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="m-2 p-3 pb-4 w-100 h-100">
            <p>Weather settings</p>
          </Jumbotron>
        </div>
        <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="m-2 p-3 pb-4 w-100 h-100">
            <p>RSS settings</p>
          </Jumbotron>
        </div>
        <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="m-2 p-3 pb-4 w-100 h-100">
            <p>profile settings</p>
          </Jumbotron>
        </div>
      </Container>
    </>
  );
};

export default Profile;
