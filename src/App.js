import React, {useState} from 'react';
import './App.css';
import HeaderComponent from "./Components/Pages/Layout/Header/Header.component";
import MealsComponent from "./Components/Pages/Meals/Meals.component";
import CartComponent from "./Components/Pages/Cart/Cart.component";
import CartProvider from "./Store/Cart/Cart.provider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    if (cartIsShown === false) {
      setCartIsShown(true);
    } else {
      setCartIsShown(false);
    }
  }

  return (
    <CartProvider>
      {cartIsShown && <CartComponent onClose={showCartHandler}/>}
      <HeaderComponent onShowCart={showCartHandler}/>
      <main>
        <MealsComponent/>
      </main>
    </CartProvider>
  );
}

export default App;
