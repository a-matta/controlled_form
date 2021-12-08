import { Form } from "./Form";
import { View } from "./View";
import React, { Component } from "react";
import { PopUp } from "./PopUp";

export default class App extends Component {
  state = {
    input: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
    },

    showPopUp: false,
  };

  inputHandler = (e) => {
    this.setState({
      input: { ...this.state.input, [e.target.name]: e.target.value },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopUp: true });
  };

  render() {
    return (
      <div>
        <Form
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
        />
        <View {...this.state.input} />
        {this.state.showPopUp && <PopUp {...this.state.input} />}
      </div>
    );
  }
}
