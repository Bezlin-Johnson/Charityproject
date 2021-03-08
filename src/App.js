import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="wrapper">
        <h1 class="heading">Register to start recieving funds.</h1>
        <input
          placeholder="Your Name."
          class="inputboxes"
          type="nmae"
          id="name"
        />
        <br />
        <input
          placeholder="Your Email Address."
          class="inputboxes"
          type="email"
          id="email"
        />
        <br />
        <input
          placeholder="Your Phone Number."
          class="inputboxes"
          type="tel"
          id="tel"
        />
        <br />
        <button class="button">Join</button>
      </div>
    );
  }
}

export default App;
