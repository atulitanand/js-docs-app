import React from "react";
class WhatYouShouldKnow extends React.Component {
  render() {
    return (
      /* jslint ignore: start */
      <>
        <div id="what-you-should-already-know">
          <h1 className="main-heading">What you should already know</h1>
          <div className="content">
            <p>This guide assumes you have the following basic background:</p>
            <ul>
              <li>
                A general understanding of the Internet and the World Wide Web
                (WWW).
              </li>
              <li>
                Good working knowledge of HyperText Markup Language (HTML).
              </li>
              <li>
                Some programming experience. If you are new to programming, try
                one of the tutorials linked on the main page about JavaScript.
              </li>
            </ul>
          </div>
        </div>
      </>
      /* jslint ignore: end */
    );
  }
}

export default WhatYouShouldKnow;
