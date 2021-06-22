import React from "react";
import IndexBar from "./IndexBar";
import InfoSection from "./InfoSection";
// ----------------------------------------
import Introduction from "./Introduction";
import WhatYouShouldKnow from "./WhatYouShouldKnow";
import JSandJava from "./JSandJava";
import HelloaWorld from "./HelloaWorld";
import Variables from "./Variables";
import { Route, Switch } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      /* jslint ignore: start */
      <>
        <main>
          <IndexBar />
          <Switch>
            <Route path="/introduction" exact>
              <Introduction />
            </Route>
            <Route path="/what-you-should-already-know" exact>
              <WhatYouShouldKnow />
            </Route>
            <Route path="/js-and-java" exact>
              <JSandJava />
            </Route>
            <Route path="/hello-world" exact>
              <HelloaWorld />
            </Route>
            <Route path="/variables" exact>
              <Variables />
            </Route>
            <Route path="/" exact>
              <InfoSection />
            </Route>
          </Switch>
        </main>
      </>
      /* jslint ignore: end */
    );
  }
}

export default Main;
