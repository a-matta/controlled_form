import { Note } from "./Note";
import { Form } from "./Form";
import { View } from "./View";
import React, { Component } from "react";
import { PopUp } from "./PopUp";
import axios from "axios";

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
    results: [],
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
    this.setState({ showPopUp: false });
    axios.post("http://localhost:3001/notes", this.state.input).then((res) => {
      this.setState({ showPopUp: false });
    });
    window.location.reload();
  };

  componentDidMount() {
    axios.get("http://localhost:3001/notes").then((res) => {
      this.setState({ results: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="form-wrapper">
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
        <div className="notes-wrapper">
          {this.state.results.map((item) => (
            <Note key={item.id} {...item} />
          ))}
        </div>
      </>
    );
  }
}
