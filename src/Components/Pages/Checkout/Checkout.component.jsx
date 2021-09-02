import React, {useRef, useState} from 'react';

const CheckoutComponent = ({toClose}) => {

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputs, setFormInputs] = useState({
    name: '',
    street: '',
    postalCode: '',
    city: '',
  });

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    setFormInputs({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    })
  }

  return (
    <form className={'form'} onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}/>
      </div>
      <div className="control">
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" ref={streetInputRef}/>
      </div>
      <div className="control">
        <label htmlFor="postalCode">Your Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef}/>
      </div>
      <div className="control">
        <label htmlFor="City">Your City</label>
        <input type="text" id="City" ref={cityInputRef}/>
      </div>

      <button type='button' onClick={toClose}>Confirm</button>
    </form>
  );
};

export default CheckoutComponent;