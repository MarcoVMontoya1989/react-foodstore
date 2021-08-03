import React from 'react';
import MealItemFormComponent from "./MealItemForm.component";

const MealItemComponent = ({name, price, description, id}) => {

  return (
    <li>
      <div className="meal">
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{price}</div>
        <MealItemFormComponent id={id}/>
      </div>
      {/*<div>*/}

      {/*</div>*/}
    </li>
  );
};

export default MealItemComponent;