import React from "react";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { connect } from "react-redux";
function App({ user }) {
  return (
    <div className="App">
      <Router>
        {!user ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/room/">
                  <h1>welcome im other one</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}
const mapstatetoprops = state => {
  return {
    user: state.user,
  };
};

export default connect(mapstatetoprops, {})(App);
