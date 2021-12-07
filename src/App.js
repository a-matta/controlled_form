import { Form } from "./Form";
import { View } from "./View";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  render() {
    return (
      <div>
        <Form
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
        />
        <View {...this.state} />
      </div>
    );
  }
}
