import React from 'react';

const MealsAvailableComponent = ({data}) => {

  const mealsData = data.map(meals => {
    return (
      <>
        <li>{meals.name}</li>
        <li>{meals.description}</li>
        <li>{meals.price}</li>
      </>
    )
  });

  return (
    <section>
      <ul>
        {mealsData}
      </ul>
    </section>
  );
};

export default MealsAvailableComponent;