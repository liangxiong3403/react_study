import React, { Component } from "react";
import Contact from "./Contact";

class App extends Component {

  state = {
    contactForm: [
      { name: "花木兰", age: "26", sex: "female", id: 1 },
      { name: "不良帅", age: "320", sex: "female", id: 2 },
      { name: "李时珍", age: "58", sex: "male", id: 3 },
      { name: "杜甫", age: "36", sex: "male", id: 4 },
    ]
  }

  render() {
    console.log('contactFormxxx');

    return (
      <div className="App">
        <header className="App-header">
          <h1>这是第一个React应用程序</h1>
        </header>
        <Contact contactForm={this.state.contactForm} />
      </div>
    );
  }
}

export default App;
