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

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopUp: true });
  };

  popUpConfirmationHandler = (e) => {
    console.log("Popup was submitted");
    this.setState({ showPopUp: false });
    window.location.reload();
  };
  render() {
    return (
      <div>
        <Form
          inputHandler={this.inputHandler}
          formSubmitHandler={this.formSubmitHandler}
        />
        <View {...this.state.input} />
        {this.state.showPopUp && (
          <PopUp
            {...this.state.input}
            popUpConfirmationHandler={this.popUpConfirmationHandler}
          />
        )}
      </div>
    );
  }
}
