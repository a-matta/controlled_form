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

  render() {
    return (
      <div>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={this.inputHandler}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={this.inputHandler}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={this.inputHandler}
        />

        <label htmlFor="role">Role:</label>
        <select name="role" id="role" onChange={this.inputHandler}>
          <option value="">Choose role</option>
          <option value="teacher">Teacher</option>
          <option value="developer">Developer</option>
          <option value="scrumaster">Scrum Master</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          placeholder="Add message here.."
          onChange={this.inputHandler}
        ></textarea>

        <View {...this.state} />
      </div>
    );
  }
}
