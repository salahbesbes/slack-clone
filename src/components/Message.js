import React from "react";
import "../Css/message.css";
const Message = ({ message }) => {
  const { text, timestamp, user, userimages } = message;

  return (
    <div className="message">
      <img src={userimages} alt="" />
      <div className="message__info">
        <h4>
          {user} <span> {new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Message;
