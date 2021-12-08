import React from "react";

const closeHandler = () => {
  window.location.reload();
};

export function PopUp({
  firstName,
  lastName,
  phoneNumber,
  role,
  message,
  popUpConfirmationHandler,
}) {
  return (
    <div>
      <h1>Firstname={firstName}</h1>
      <h1>LastName={lastName}</h1>
      <h1>PhoneNumber={phoneNumber}</h1>
      <h1>Role={role}</h1>
      <h1>Message={message}</h1>
      <button onClick={popUpConfirmationHandler}>Yes, I am sure</button>
      <button onClick={closeHandler}>No, I don't want</button>
    </div>
  );
}
