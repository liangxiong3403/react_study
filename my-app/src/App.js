import React, { Component } from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";

class App extends Component {

  state = {
    contactForm: [
      { name: "花木兰", age: "26", sex: "female", id: 1 },
      { name: "不良帅", age: "20", sex: "female", id: 2 },
      { name: "李时珍", age: "58", sex: "male", id: 3 },
      { name: "杜甫", age: "36", sex: "male", id: 4 },
    ]
  }

  addContact = contact => {
    contact.id = Math.random();
    let contactFormCopy = [...this.state.contactForm, contact];
    this.setState({
      contactForm: contactFormCopy
    })
  }

  deleteContact = id => {
    let contactFormCopy = this.state.contactForm.filter(contact => contact.id !== id);
    this.setState({
      contactForm: contactFormCopy
    })
  }

  componentDidMount() {
    console.log('挂载完成');
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log(prevProps, prevStates);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>这是第一个React应用程序</h1>
        </header>
        <Contact contactForm={this.state.contactForm} deleteContact={this.deleteContact} />
        <AddContact addContact={this.addContact} />
      </div>
    );
  }
}

export default App;