import React from "react"
import MediaQuery from "react-responsive"

import beach1 from "./images/beach1.jpg"
import beach2 from "./images/beach2.jpg"
import beach3 from "./images/beach3.jpg"
import beach4 from "./images/beach4.jpg"
import beach5 from "./images/beach5.jpg"
import beach6 from "./images/beach6.jpg"
import beach7 from "./images/beach7.jpg"
import beach8 from "./images/beach8.jpg"

import "./App.css"

function App() {
  return (
    <div className="fadingBackgrounds">
      <img src={beach1} className="f1" />
      <img src={beach2} className="f2" />
      <img src={beach3} className="f3" />
      <img src={beach4} className="f4" />
      <img src={beach5} className="f5" />
      <img src={beach6} className="f6" />
      <img src={beach7} className="f7" />
      <img src={beach8} className="f8" />
    </div>
  );
}

export default App;
