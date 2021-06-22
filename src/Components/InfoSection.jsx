import React from "react";
import Introduction from "./Introduction";
import WhatYouShouldKnow from "./WhatYouShouldKnow";
import JSandJava from "./JSandJava";
import HelloaWorld from "./HelloaWorld";
import Variables from "./Variables";
import { Route, Switch } from "react-router-dom";

class InfoSection extends React.Component {
  render() {
    return (
      /* jslint ignore: start */
      <>
        <section className="info-section" style={{ flex: "1 1 70%" }}>
          <Introduction />
          <WhatYouShouldKnow />
          <JSandJava />
          <HelloaWorld />
          <Variables />
        </section>
        {/* <Switch>
          <Route path="/introduction">
            <Introduction />
          </Route>
          <Route path="/what-you-should-know">
            <WhatYouShouldKnow />
          </Route>
          <Route path="/js-and-java">
            <JSandJava />
          </Route>
          <Route path="/hello-world">
            <HelloaWorld />
          </Route>
          <Route path="/variables">
            <Variables />
          </Route>
        </Switch> */}
      </>
      /* jslint ignore: end */
    );
  }
}

export default InfoSection;
