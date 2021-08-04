import React, {useState} from 'react';
import './App.css';
import HeaderComponent from "./Components/Pages/Layout/Header/Header.component";
import MealsComponent from "./Components/Pages/Meals/Meals.component";
import CartComponent from "./Components/Pages/Cart/Cart.component";

function App() {

  const [cartIsShown, setCartIsShown] = useState(true);

  const showCartHandler = () => {
    if (cartIsShown === false) {
      setCartIsShown(true);
    } else {
      setCartIsShown(false);
    }
  }

  return (
    <>
      {cartIsShown && <CartComponent onClose={showCartHandler}/>}
      <HeaderComponent onShowCart={showCartHandler}/>
      <main>
        <MealsComponent/>
      </main>
    </>
  );
}

export default App;
