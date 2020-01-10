import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";

import { PagesContext } from "../../contexts/PagesContext";

const App = () => {
  const { pages } = useContext(PagesContext);
  document.title = "Useless Website.io";

  return (
    <main className="pt-5 d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavBar />

      <section className="flex-fill">
        <Switch>
          {pages.map(page => (
            <Route
              exact
              path={page.url}
              key={page.page}
              component={page.content}
            />
          ))}

          {/* 404 page*/}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </section>

      <Footer className="align-self-end" />
    </main>
  );
};

export default App;
