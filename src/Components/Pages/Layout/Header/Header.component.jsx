import React from 'react';
import mealImage from '../../../../assets/meals.jpg';
import CartButtonComponent from "../../../Component/CartButton/CartButton.component";

const HeaderComponent = () => {
  return (
    <>
      <header className={'header'}>
        <h1>React Meals</h1>
        <CartButtonComponent />
      </header>
      <div className="main-image">
        <img src={mealImage} alt="food buffet"/>
      </div>
    </>
  );
};

export default HeaderComponent;