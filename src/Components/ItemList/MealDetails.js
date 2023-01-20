import React from "react";

import classes from "./MealDetails.module.css";

const MealDetails = () => {
  return (
    <section className={classes.summary}>
      <h2>Delecious Food, Delievered To You</h2>
      <p>
        choose your Favourite mail from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are cooked with high-quality ingredients, just in time
        and of course by expert chefs!
      </p>
    </section>
  );
};

export default MealDetails;
