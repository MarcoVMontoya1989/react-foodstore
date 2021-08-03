import React from 'react';
import CardComponent from "../../Utils/Card/Card.component";
import MealItemComponent from "../MealItem/MealItem.component";

const MealsAvailableComponent = ({data}) => {

  const mealsData = data.map(meals => {
    return <MealItemComponent key={meals.id} {...meals}/>
  });

  return (
    <section className={"meals"}>
      <CardComponent>
        <ul>
          {mealsData}
        </ul>
      </CardComponent>
    </section>
  );
};

export default MealsAvailableComponent;