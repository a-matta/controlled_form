import React from "react";

export function PopUp({ firstName, lastName, phoneNumber, role, message }) {
  return (
    <>
      <h1>Firstname={firstName}</h1>
      <h1>LastName={lastName}</h1>
      <h1>PhoneNumber={phoneNumber}</h1>
      <h1>Role={role}</h1>
      <h1>Message={message}</h1>
      <button>Yes,I am sure</button>
      <button>No, I don't want</button>
    </>
  );
}
