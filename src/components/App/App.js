import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import PageNotFound from "../pages/PageNotFound";

import { PagesContext } from "../../contexts/PagesContext";

const App = () => {
  const { pages } = useContext(PagesContext);
  document.title = "HomePage.io";

  return (
    <main className="pt-5 d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navigation />

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
