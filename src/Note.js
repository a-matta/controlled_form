import React from "react";
export function Note({ id, firstName, lastName, phoneNumber, role, message }) {
  return (
    <div className="note">
      <p>Name-{firstName}</p>
      <p>Last Name-{lastName}</p>
      <p>Phone Number-{phoneNumber}</p>
      <p>Role-{role}</p>
      <h1>Message- {message}</h1>
    </div>
  );
}
