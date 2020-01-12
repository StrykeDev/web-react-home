import React, { useContext } from "react";
import { Spinner, Media } from "react-bootstrap";

import { RSSContext } from "../../../contexts/RSSContext";

const RssWidget = () => {
  const { feed, channel } = useContext(RSSContext);

  return (
    <div
      className="h-100 d-flex flex-column"
      dir={channel ? (channel.language === "he" ? "rtl" : "ltr") : "ltr"}
      style={{ textAlign: "start" }}
    >
      {feed ? (
        <>
          {channel ? (
            <Media>
              {channel.image ? (
                <img
                  src={channel.image}
                  alt=""
                  width="64"
                  className="mx-3"
                  style={{
                    filter: "grayscale(1) invert()",
                    mixBlendMode: "screen"
                  }}
                />
              ) : (
                ""
              )}

              <Media.Body className="my-auto">
                <a href={channel.link} className="text-capitalize">
                  <h6 className="m-0">{channel.title}</h6>
                </a>
              </Media.Body>
            </Media>
          ) : (
            ""
          )}

          <ul className="list-unstyled m-0 p-0">
            {feed.slice(0, 8).map((item, i) => (
              <Media as="li" key={i} className="mt-2 px-2">
                <Media.Body>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <small className="d-block d-lg-inline">
                    <span className="d-none d-lg-inline"> | </span>
                    {item.pubDate}
                  </small>
                  <p>{item.description}</p>
                </Media.Body>
              </Media>
            ))}
          </ul>
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center flex-fill">
          <Spinner animation="grow" className="m-2" />
          <Spinner animation="grow" className="m-2" />
          <Spinner animation="grow" className="m-2" />
        </div>
      )}
    </div>
  );
};

export default RssWidget;
