import React, { useState } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOptions from "./SideBarOptions";
import AddIcon from "@material-ui/icons/Add";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import "../Css/sidebar.css";
import { useEffect } from "react";
import db from "../firebase/config";
import { connect } from "react-redux";
const SideBar = ({ userName }) => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    // snapshot will take a copy of the database rooms and when ever it changes it gives a new one
    db.collection("Rooms").onSnapshot(snapshot => {
      let rooms = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setChannels(rooms);
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Programmer</h2>
          <h3>
            <FiberManualRecordIcon /> {userName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SideBarOptions Icon={FastfoodIcon} title="fast food" />
      <SideBarOptions Icon={FolderSpecialIcon} title="folder description" />
      <SideBarOptions Icon={FilterDramaIcon} title="drama" />
      <SideBarOptions Icon={SportsKabaddiIcon} title="winter sports" />
      <SideBarOptions Icon={FreeBreakfastIcon} title="break fast food" />
      <SideBarOptions Icon={AcUnitIcon} title="weather" />
      <hr />
      {channels.map(el => (
        <SideBarOptions
          addChannelOption={false}
          id={el.id}
          Icon={null}
          title={el.name}
        />
      ))}
      <hr />
      <SideBarOptions
        addChannelOption={true}
        Icon={AddIcon}
        title="add Channel"
      />
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    userName: state.user.displayName,
  };
};

export default connect(mapstatetoprops, {})(SideBar);
