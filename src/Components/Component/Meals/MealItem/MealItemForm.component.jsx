import React from 'react';
import InputComponent from "../../Utils/Input/Input.component";

const MealItemFormComponent = ({id}) => {
  return (
    <form className={'form-meal'}>
      <InputComponent label="Amount" input={{
        id: `amount_${id}`,
        type: "number",
        min: 0,
        max: 10,
        step: 1,
        defaultValue: 1
      }} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemFormComponent;