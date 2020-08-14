import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "../firebase/config";
import Message from "./Message";
import "../Css/chat.css";
import ChatInput from "./ChatInput";

const Chat = () => {
  // get the params from the uri/url
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);
  console.log("roomMessages", roomMessages);
  useEffect(() => {
    roomId &&
      db
        .collection("Rooms")
        .doc(roomId)
        .onSnapshot(snapshot => setRoomDetails(snapshot.data()));
    db.collection("Rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        let messages = snapshot.docs.map(doc => ({
          text: doc.data().message,
          timestamp: doc.data().timestamp,
          user: doc.data().user,
          userimages: doc.data().userimages,
        }));
        setroomMessages(messages);
      });
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4>
            <strong className="chat__channelName">
              # {roomDetails ? roomDetails?.name : roomId}
            </strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map((el, i) => (
          <Message message={el} key={i} />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};

export default Chat;
