import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./Component/MainNavbar";
import React, { useState, useEffect, useRef } from "react";

import MainBox from "./Component/MainBox";
import HamburgerNavigation from "./Component/HamburgerNavigation";
function App() {
  const [text, setText] = useState("");
  const words = [
    "Hello !",
    "Nice to see you",
    "Im Tanasin Yodsomboon",
  ];
  let i = 0;
  let offset = 20;
  let len = words.length;
  let forwards = true;
  let skip_count = 0;
  let skip_delay = 15;
  let speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      const part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setText(part);
    }, speed);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <header>
        <HamburgerNavigation pagename="homePage" />
      </header>
      <article>
        <h1
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            paddingTop: 40,
            marginBottom:40
          }}
        >
          My Portfolio
        </h1>
      </article>
      <article >
        <img 
          src="https://sv1.picz.in.th/images/2023/05/09/yGkAnn.png"
          alt="รูปภาพ"
          className="imgcon"
          style={{ height: 210, width: 220, borderRadius: "50%" }}
        />
      </article>
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          paddingTop: 80,
          paddingBottom:"100%"
        }}
      >
        <div className="typing-text">{text}</div>
      </h2>
    </div>
  );
}

export default App;
