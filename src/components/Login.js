import React from "react";
import "../Css/login.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { SignIn } from "../R-Action";

const Login = ({ SignIn }) => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1> Sign in to my App </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse.{" "}
        </p>
        <Button onClick={() => SignIn()}> Sign In With Google </Button>
      </div>
    </div>
  );
};

const mapstatetoprops = state => {};

export default connect(mapstatetoprops, { SignIn })(Login);
