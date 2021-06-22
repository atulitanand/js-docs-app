import React from "react";

class HelloaWorld extends React.Component {
  render() {
    return (
      /* jslint ignore: start */
      <>
        <div id="hello-world">
          <h1 className="main-heading">Hello World</h1>
          <div className="content">
            <p>
              {`To get started with writing JavaScript, open the Scratchpad and
              write your first "Hello world" JavaScript code:`}
            </p>
            <p className="code">
              <code>
                {`function greetMe(yourName) { alert("Hello " + yourName); }
greetMe("World");`}
              </code>
            </p>
            <p>
              Select the code in the pad and hit Ctrl+R to watch it unfold in
              your browser!
            </p>
          </div>
        </div>
      </>
      /* jslint ignore: end */
    );
  }
}

export default HelloaWorld;
