import React from "react";
export function Notes({ id, firstName, lastName, phoneNumber, role, message }) {
  return (
    <div key={id}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{phoneNumber}</p>
      <p>{role}</p>
      <p>{message}</p>
    </div>
  );
}
