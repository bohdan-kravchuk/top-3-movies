import React from "react";
import classes from "./Header.module.css";
import logo from "../../images/logo.svg";

export default () => {
  return (
    <header className={classes.Header}>
      <img alt="imdb logo" src={logo} width="60" height="60"/>
      <h1>3 popular movies from the MovieDB</h1>
    </header>
  )
}
