import React, { useContext } from "react";
import { Spinner, Media } from "react-bootstrap";

import { RSSContext } from "../../../../contexts/RSSConext";

const RssWidget = () => {
  const { feed, provider } = useContext(RSSContext);

  return (
    <div className="h-100 d-flex flex-column">
      {feed ? (
        <>
          {provider ? <p className="text-capitalize">{provider.title}</p> : ""}

          <ul className="list-unstyled m-0">
            {feed.map((item, i) => (
              <Media as="li" key={i} className="mt-2 px-2">
                <img
                  src=""
                  alt=""
                  height="50"
                  className=""
                  style={{
                    filter: "grayscale(1)"
                  }}
                />
                <Media.Body>
                  <a
                    href={item.children[1].value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.children[0].value}
                  </a>
                  <small className="d-block d-lg-inline">
                    <span className="d-none d-lg-inline"> | </span>
                    {item.children[5].value}
                  </small>
                  <p>{item.children[2].value}</p>
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
