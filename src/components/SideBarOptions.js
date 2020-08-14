import React from "react";
import "../Css/sidebaroption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase/config";
const SideBarOptions = ({ title, Icon, addChannelOption, id }) => {

  const history = useHistory();
  const selectChannel = id => {
    id ? history.push(`/room/${id}`) : history.push(title);
  };
  const addChannel = () => {
    const channelName = prompt("pls enter channel name");
    channelName &&
      db.collection("Rooms").add({
        name: channelName,
      });
  };
  return (
    <div
      className="sidebarOption"
      onClick={
        addChannelOption
          ? addChannel
          : () => {
              selectChannel(id);
            }
      }
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3> {title} </h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}{" "}
        </h3>
      )}
    </div>
  );
};

export default SideBarOptions;
