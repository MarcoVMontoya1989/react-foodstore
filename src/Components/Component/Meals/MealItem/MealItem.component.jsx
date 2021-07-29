import React from 'react';

const MealItemComponent = ({meal}) => {

  const {name, price, description} = meal;

  return (
    <li>
      <div className="meal">
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{price}</div>
      </div>
    </li>
  );
};

export default MealItemComponent;