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
    <div className="overlay">
      <div className="popup">
        <p>Your Note is here</p>
        <p>
          Firstname=<span>{firstName}</span>
        </p>
        <p>
          LastName=<span>{lastName}</span>
        </p>
        <p>
          PhoneNumber=<span>{phoneNumber}</span>
        </p>
        <p>
          Role=<span>{role}</span>
        </p>
        <p>
          Message=<span>{message} </span>
        </p>
        <div className="popup-close-button">&times;</div>
        <button
          className="popup-confirm-button"
          onClick={popUpConfirmationHandler}
        >
          Yes, I am sure
        </button>
        <button className="popup-deny-button" onClick={closeHandler}>
          No, I don't want
        </button>
      </div>
    </div>
  );
}
