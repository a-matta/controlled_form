import React from "react";
export function Note({ id, firstName, lastName, phoneNumber, role, message }) {
  return (
    <div className="note">
      <h1>Message- {message}</h1>
      <p>Name-{firstName}</p>
      <h3>Last Name-{lastName}</h3>
      <h3>Phone Number-{phoneNumber}</h3>
      <h3>Role-{role}</h3>
    </div>
  );
}
