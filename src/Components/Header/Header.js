import React from "react";

import HeaderCartButton from "../UI/HeaderCartButton";

import mealsImage from "../../Assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
