import React from "react";
import "./cross-only.css";
import "./hamburger-only.css";

function App() {
  const [hamburger, setHamburger] = React.useState(-1);
  const a = -1;
  return (
    <div>
      {a > 0 ? 
        <div className="App">
          <div
            onClick={() => {
              if (hamburger === 2) {
                return;
              }
              setHamburger(0);
              setTimeout(() => {setHamburger(1)}, 290);
              setTimeout(() => {setHamburger(2)}, 300);
            }}
            className={`scale-container${
              hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
            }`}
          >
            <div
              className={`hamburger-white-bar top${
                hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
              }`}
            />
            <div
              className={`hamburger-white-bar center${
                hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
              }`}
            />
            <div
              className={`hamburger-white-bar bottom${
                hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
              }`}
            />
          </div>
          <div
            onClick={() => {
              if (hamburger === 2) {
                setHamburger(3)
                setTimeout(() => {
                  setHamburger(4);
                },450);
                return;
              }
            }}
            className={`icon-container${hamburger === 2 ? ' show': hamburger === 3 ? ' reset':''}`}
          >
            <div
              className={`white-bar left${
                hamburger === 2 ? " show" : hamburger === 3 ? " reset" : ""
              }`}
            />
            <div className="inverted-container-right">
              <div
                className={`white-bar right${
                  hamburger === 2 ? " show" : hamburger === 3 ? " reset" : ""
                }`}
              />
            </div>
          </div>
      </div>
      : <div className="App">
          <div
            className={`hamburger-white-bar center${
              hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
            }`}
          />
          <div
            onClick={() => {
              if (hamburger === 2) {
                return;
              }
              setHamburger(0);
              setTimeout(() => {setHamburger(1)}, 290);
              setTimeout(() => {setHamburger(2)}, 300);
            }}
            className={`scale-container${
              hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
            }`}
          >
            <div
              className={`hamburger-white-bar top${
                hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
              }`}
            />
            <div
              className={`hamburger-white-bar bottom${
                hamburger === 0? " move" : hamburger === 4? ' reverse' : hamburger > 0 ? " reset" :  ''
              }`}
            />
          </div>
          <div
            onClick={() => {
              if (hamburger === 2) {
                setHamburger(3)
                setTimeout(() => {
                  setHamburger(4);
                },450);
                return;
              }
            }}
            className={`icon-container${hamburger === 2 ? ' show': hamburger === 3 ? ' reset':''}`}
          >
            <div
              className={`white-bar left${
                hamburger === 2 ? " show" : hamburger === 3 ? " reset" : ""
              }`}
            />
            <div className="inverted-container-right">
              <div
                className={`white-bar right${
                  hamburger === 2 ? " show" : hamburger === 3 ? " reset" : ""
                }`}
              />
            </div>
          </div>
      </div>
      }
    </div>
  );
}

export default App;
