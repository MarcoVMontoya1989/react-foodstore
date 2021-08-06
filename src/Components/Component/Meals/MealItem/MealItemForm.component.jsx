import React, {useRef, useState} from 'react';
import InputComponent from "../../Utils/Input/Input.component";

const MealItemFormComponent = ({id, onAddToCart}) => {

  const amountInputRef = useRef();
  const [validAmount, setValidAmount] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const amountEntered = parseInt(amountInputRef.current.value);
    const enteredAmountNumber = +amountEntered;

    if (enteredAmountNumber < 1 || enteredAmountNumber > 10) {
      setValidAmount(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={'form-meal'} onSubmit={submitHandler}>
      <InputComponent
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: "number",
          min: 0,
          max: 10,
          step: 1,
          defaultValue: 1
        }}/>
      <button>+ Add</button>
      {!validAmount ? (<p>Please enter a valid amount</p>) : null}
    </form>
  );
};

export default MealItemFormComponent;