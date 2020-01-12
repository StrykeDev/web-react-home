import React, { useContext } from "react";
import { Media, Card, ListGroup } from "react-bootstrap";

import Loading from "../../common/Loading";

import { RSSContext } from "../../../contexts/RSSContext";

import { timespan } from "../../../helpers/DateFunc";

import iconRss from "./assats/icon_rss.svg";

const RssWidget = props => {
  const { feed, channel } = useContext(RSSContext);

  const title = () => (
    <>
      <span className="d-flex flex-row align-items-center">
        <span className="flex-fill">
          <Card.Title>
            <small className="text-capitalize">{channel.title}</small>
          </Card.Title>
          <Card.Subtitle className="text-dark">
            {channel.description}
          </Card.Subtitle>
        </span>

        <img
          src={channel.image ? channel.image : iconRss}
          alt=""
          height="32"
          className="m-3"
          style={{
            filter: "grayscale(1) invert()",
            mixBlendMode: "screen"
          }}
        />
      </span>

      <hr />
    </>
  );

  const list = () => (
    <ListGroup variant="flush">
      {feed.slice(0, props.amount ? props.amount : 8).map((item, i) => (
        <ListGroup.Item
          key={i}
          action
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-light"
        >
          <Media className="mt-2 px-2">
            <Media.Body>
              <h6 className="text-primary">
                {item.title}
                <small className="d-block text-dark">
                  {timespan(item.pubDate)}
                </small>
              </h6>

              <p>{item.description}</p>
            </Media.Body>
          </Media>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <Card className="h-100 w-100">
      <Card.Body
        dir={channel ? (channel.language === "he" ? "rtl" : "ltr") : "ltr"}
        style={{ textAlign: "start" }}
      >
        {channel ? title() : ""}
        {feed ? list() : <Loading />}
      </Card.Body>
    </Card>
  );
};

export default RssWidget;
