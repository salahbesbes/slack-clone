import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import "../Css/header.css";
import { connect } from "react-redux";
const Header = ({ avatar }) => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" src={avatar} />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search clever Programmer" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    avatar: state.user.photoURL,
  };
};

export default connect(mapstatetoprops, {})(Header);
