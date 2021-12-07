import React from "react";
export function Form({ inputHandler }) {
  return (
    <>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={inputHandler}
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={inputHandler}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        onChange={inputHandler}
      />

      <label htmlFor="role">Role:</label>
      <select name="role" id="role" onChange={inputHandler}>
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
        onChange={inputHandler}
      ></textarea>
    </>
  );
}
