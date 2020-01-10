import React, { useContext, useState, useEffect } from "react";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";

import { AuthContext } from "../../../contexts/AuthContext";
import { RSSContext } from "../../../contexts/RSSContext";

import Popup from "./../../../helpers/Popup";

import defaultProfileImage from "./assats/profile-image.png";

const Profile = props => {
  const { auth } = useContext(AuthContext);
  const { provider, feedUrl, dispatch } = useContext(RSSContext);
  const user = auth.users.find(user => user.username === auth.current);
  const [formRSSFeed, setFormRSSFeed] = useState(feedUrl);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setFormRSSFeed(feedUrl);
  }, [feedUrl]);

  const handleSubmitRSS = e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      dispatch({ type: "SET_FEED", url: formRSSFeed });
    }
  };

  const handleRestRSS = () => {
    const popup = new Popup();
    popup.showModal(
      "Reset RSS Feed?",
      "Are you sure that you want to reset the RSS feed to default?",
      [
        {
          text: "Rest",
          variant: "danger",
          onClick: () => dispatch({ type: "RESET_FEED" })
        },
        {
          text: "Cancel",
          variant: "secondary",
          onClick: () => {}
        }
      ]
    );
  };

  return (
    <>
      <Container className="mt-5 d-flex flex-wrap">
        <div className="col-12 p-2">
          <Jumbotron className="d-flex align-items-center flex-md-row flex-column p-3 pb-0 w-100 h-100">
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

        {/* <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100">
            <p>Todo list settings</p>
          </Jumbotron>
        </div> */}
        {/* <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100">
            <p>Weather settings</p>
          </Jumbotron>
        </div> */}
        <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100">
            <p>RSS Options</p>
            <p>Current feed: {provider ? provider.title : "None"}</p>
            <Form noValidate validated={validated} onSubmit={handleSubmitRSS}>
              <Form.Group controlId="feedUrl" className="m-1 mb-2">
                <Form.Control
                  name="rssFeed"
                  type="text"
                  value={formRSSFeed}
                  onChange={e => setFormRSSFeed(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid RSS feed.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                controlId="formButton"
                className="mx-1 my-4 d-flex flex-row"
              >
                <Button
                  variant="secondary"
                  type="submit"
                  className="flex-fill mr-2"
                >
                  Save
                </Button>
                <Button variant="secondary" onClick={handleRestRSS}>
                  Reset
                </Button>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
        {/* <div className="col-12 col-lg-6 p-2">
          <Jumbotron className="p-3 pb-4 w-100 h-100">
            <p>profile settings</p>
          </Jumbotron>
        </div> */}
      </Container>
    </>
  );
};

export default Profile;
