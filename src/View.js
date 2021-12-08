import React from "react";

export function View({ firstName, lastName, phoneNumber, role, message }) {
  return (
    <div>
      <h1>Firstname={firstName}</h1>
      <h1>LastName={lastName}</h1>
      <h1>PhoneNumber={phoneNumber}</h1>
      <h1>Role={role}</h1>
      <h1>Message={message}</h1>
    </div>
  );
}
