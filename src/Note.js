import React from "react";
export function Note({ id, firstName, lastName, phoneNumber, role, message }) {
  return (
    <div key={id} className="note">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{phoneNumber}</p>
      <p>{role}</p>
      <p>{message}</p>
    </div>
  );
}
