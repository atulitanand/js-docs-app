import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      /* jslint ignore: start */
      <>
        <header className="bg-gray-600 text-white md:p-4 p-2 text-6xl">
          <h1 className="">
            <Link to="/">Javascript Docs</Link>
          </h1>
        </header>
      </>
      /* jslint ignore: end */
    );
  }
}

export default Header;
