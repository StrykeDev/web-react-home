import React, { useState, useEffect } from "react";
import Axios from "axios";
import XMLParser from "react-xml-parser";
import { Spinner, Media } from "react-bootstrap";

const RssWidget = props => {
  const [lastUpdate, setLastUpdate] = useState(Date());
  const [feed, setFeed] = useState();
  const [provider, setProvider] = useState();
  //const feedUrl = "http://www.ynet.co.il/Integration/StoryRss544.xml";
  const feedUrl = "https://www.nasa.gov/rss/dyn/breaking_news.rss";

  useEffect(() => {
    Axios.get(`https://cors-anywhere.herokuapp.com/${feedUrl}`).then(res => {
      if (res.status === 200) {
        const xml = new XMLParser().parseFromString(res.data);
        setFeed(xml.getElementsByTagName("item").slice(0, 5));

        setProvider({
          title: xml.getElementsByTagName("title")[0].value,
          link: xml.getElementsByTagName("link")[0].value,
          desc: xml.getElementsByTagName("description")[0].value
        });
        console.log("RSS data updated.");
      }
    });
  }, [lastUpdate]);

  window.setTimeout(() => setLastUpdate(Date()), 10 * 60 * 1000);

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
                  <a href={item.children[1].value}>{item.children[0].value}</a>
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
