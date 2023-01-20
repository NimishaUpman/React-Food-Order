import React from "react";

import MealDetails from "./MealDetails";
import MealList from "./MealList";

const DisplayFoodItems = () => {
  return (
    <React.Fragment>
      <MealDetails />
      <MealList />
    </React.Fragment>
  );
};

export default DisplayFoodItems;
