import React from "react";
export function Form({ inputHandler, formSubmitHandler }) {
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={inputHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={inputHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={inputHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select name="role" id="role" onChange={inputHandler} required>
          <option value="">Choose role</option>
          <option value="teacher">Teacher</option>
          <option value="developer">Developer</option>
          <option value="scrumaster">Scrum Master</option>
        </select>
      </div>
      <div className="text-area">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          placeholder="Add message here.."
          onChange={inputHandler}
          required
        />
      </div>
      <div className="submit-button">
        <button className="form-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
