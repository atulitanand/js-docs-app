import React from "react";
import { Link } from "react-router-dom";

class IndexBar extends React.Component {
  render() {
    return (
      /* jslint ignore: start */
      <>
        <div
          className="md:w-5 
        md:pt-8 
        p-1 
        sticky 
        left-0 
        top-0 
        "
          style={{
            flex: "1 1 20rem",
          }}
        >
          <ul>
            <li className="topics">
              <Link to="/introduction">Introduction</Link>
            </li>
            <li className="topics">
              <Link to="/what-you-should-already-know">
                What you should already know
              </Link>
            </li>
            <li className="topics">
              <Link to="/js-and-java">JavaScript and Java</Link>
            </li>
            <li className="topics">
              <Link to="/hello-world">Hello World</Link>
            </li>
            <li className="topics">
              <Link to="/variables">Variables</Link>
            </li>
          </ul>
        </div>
      </>
      /* jslint ignore: end */
    );
  }
}

export default IndexBar;
