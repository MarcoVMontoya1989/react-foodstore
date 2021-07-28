import React from 'react';
import mealImage from '../../../../assets/meals.jpg';

const HeaderComponent = () => {
  return (
    <>
      <header className={'header'}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={mealImage} alt="image"/>
      </div>
    </>
  );
};

export default HeaderComponent;