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
  const [channel, setChannel] = useState();
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
    setChannel();
    setFeed();

    Axios.get(`https://cors-anywhere.herokuapp.com/${feedUrl}`).then(res => {
      if (res.status === 200) {
        const xml = new XMLParser().parseFromString(res.data);
        const xmlChannel = xml.getElementsByTagName("channel")[0];
        const xmlItems = xml.getElementsByTagName("item");

        // Get channel info
        const parsedChannel = () => {
          const title = xmlChannel.children.find(
            child => child.name === "title"
          );
          const link = xmlChannel.children.find(child => child.name === "link");
          const description = xmlChannel.children.find(
            child => child.name === "description"
          );
          const language = xmlChannel.children.find(
            child => child.name === "language"
          );
          const image = xmlChannel.children.find(
            child => child.name === "image"
          );
          const imageUrl = image
            ? image.children.find(imgChild => imgChild.name === "url")
            : "";

          return {
            title: title && title.value !== "<![CDATA[" ? title.value : "",
            link: link && link.value !== "<![CDATA[" ? link.value : "",
            description:
              description && description.value !== "<![CDATA["
                ? description.value
                : "",
            language:
              language && language.value !== "<![CDATA[" ? language.value : "",
            image:
              imageUrl && imageUrl.value !== "<![CDATA[" ? imageUrl.value : ""
          };
        };

        setChannel(parsedChannel());

        // Get items
        const parsedFeed = xmlItems.map(item => {
          const title = item.children.find(child => child.name === "title");
          const link = item.children.find(child => child.name === "link");
          const description = item.children.find(
            child => child.name === "description"
          );
          const pubDate = item.children.find(child => child.name === "pubDate");
          return {
            title: title && title.value !== "<![CDATA[" ? title.value : "",
            link: link && link.value !== "<![CDATA[" ? link.value : "",
            description:
              description && description.value !== "<![CDATA["
                ? description.value
                : "",
            pubDate:
              pubDate && pubDate.value !== "<![CDATA[" ? pubDate.value : ""
          };
        });

        setFeed(parsedFeed);

        console.log("RSS data updated.");
      }
    });
  }, [lastUpdate, feedUrl]);

  window.setTimeout(() => setLastUpdate(Date()), 10 * 60 * 1000);

  return (
    <RSSContext.Provider value={{ feed, channel, feedUrl, dispatch }}>
      {props.children}
    </RSSContext.Provider>
  );
};

export default RSSContextProvider;
