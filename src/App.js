import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="wrapper">
        <h1>Register to start recieving funds.</h1>
        <input type="nmae" id="name" />
        <br />
        <input type="email" id="email" />
        <br />
        <input type="tel" id="tel" />
      </div>
    );
  }
}

export default App;
