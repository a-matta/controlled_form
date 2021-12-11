import React from "react";

export function View({ firstName, lastName, phoneNumber, role, message }) {
  return (
    <div className="view">
      <div className="notepad">
        <p>
          Firstname:<span className="view-text">{firstName}</span>
        </p>
        <p>
          LastName:<span className="view-text">{lastName}</span>
        </p>
        <p>
          PhoneNumber:<span className="view-text">{phoneNumber}</span>
        </p>
        <p>
          Role:<span className="view-text">{role}</span>
        </p>
        <p>
          Message:<span className="view-text">{message}</span>
        </p>
      </div>
    </div>
  );
}
