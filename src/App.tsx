import React from "react";
import "./cross-only.css";
import "./hamburger-only.css";

function App() {
  const [hamburger, setHamburger] = React.useState(-1);
  const a = 1;
  return (
    <div className="App">
        <div
          onClick={() => {
            setHamburger(0);
            setTimeout(() => {setHamburger(1)}, 450);
            setTimeout(() => {setHamburger(2)}, 455);
          }}
          className={`scale-container${
            hamburger === 0? " move" : hamburger > 0 ? " reset" : ""
          }`}
        >
          <div
            className={`hamburger-white-bar top${
              hamburger === 0? " move" : hamburger > 0 ? " reset" : ""
            }`}
          />
          <div
            className={`hamburger-white-bar center${
              hamburger === 0? " move" : hamburger > 0 ? " reset" : ""
            }`}
          />
          <div
            className={`hamburger-white-bar bottom${
              hamburger === 0? " move" : hamburger > 0 ? " reset" : ""
            }`}
          />
        </div>
        <div
          onClick={() => {
            setHamburger(0);
            setTimeout(() => {setHamburger(1)}, 450);
          }}
          className={`icon-container${hamburger === 2 ? ' show': hamburger === 1 ? ' reset':''}`}
        >
          <div
            className={`white-bar left${
              hamburger === 2 ? " show" : hamburger === 1 ? " reset" : ""
            }`}
          />
          <div className="inverted-container-right">
            <div
              className={`white-bar right${
                hamburger === 2 ? " show" : hamburger > 1 ? " reset" : ""
              }`}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
