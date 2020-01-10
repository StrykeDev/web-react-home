import React, { createContext, useState, useEffect, useReducer } from "react";
import Axios from "axios";
import XMLParser from "react-xml-parser";

export const RSSContext = createContext();

const RSSReducer = (state, action) => {
  switch (action.type) {
    case "SET_FEED":
      return action.url
        ? action.url
        : "https://www.nasa.gov/rss/dyn/breaking_news.rss";

    case "RESET_FEED":
      return "https://www.nasa.gov/rss/dyn/breaking_news.rss";

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const RSSContextProvider = props => {
  const [lastUpdate, setLastUpdate] = useState(Date());
  const [feed, setFeed] = useState();
  const [provider, setProvider] = useState();
  const [feedUrl, dispatch] = useReducer(RSSReducer, [], () => {
    const local = localStorage.getItem("RSS");
    return local
      ? JSON.parse(local)
      : "https://www.nasa.gov/rss/dyn/breaking_news.rss";
  });

  useEffect(() => {
    localStorage.setItem("RSS", JSON.stringify(feedUrl));
  }, [feedUrl]);

  useEffect(() => {
    setProvider();
    setFeed();

    Axios.get(`https://cors-anywhere.herokuapp.com/${feedUrl}`).then(res => {
      if (res.status === 200) {
        const xml = new XMLParser().parseFromString(res.data);

        setProvider({
          title: xml.getElementsByTagName("title")[0].value,
          link: xml.getElementsByTagName("link")[0].value,
          desc: xml.getElementsByTagName("description")[0].value
        });
        setFeed(xml.getElementsByTagName("item").slice(0, 5));

        console.log("RSS data updated.");
      }
    });
  }, [lastUpdate, feedUrl]);

  window.setTimeout(() => setLastUpdate(Date()), 10 * 60 * 1000);

  return (
    <RSSContext.Provider value={{ feed, provider, feedUrl, dispatch }}>
      {props.children}
    </RSSContext.Provider>
  );
};

export default RSSContextProvider;
