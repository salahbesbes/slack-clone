import React, { useState } from "react";
import "../Css/chat.css";
import { connect } from "react-redux";
import { sendMessage } from "../R-Action";

const ChatInput = ({
  channelName,
  channelId,
  userName,
  avatar,
  sendMessage,
}) => {
  const [inputValue, setInutValue] = useState("");
  return (
    <div className="chatInput">
      <form>
        <input
          onChange={e => setInutValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder={`message#  ${channelName}`}
        />
        <button
          type="submit"
          onClick={e => {
            sendMessage(e, userName, avatar, inputValue, channelId);
            setInutValue("");
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    avatar: state.user.photoURL,
    userName: state.user.displayName,
  };
};

export default connect(mapstatetoprops, { sendMessage })(ChatInput);
