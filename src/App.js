import './App.css';
import HeaderComponent from "./Components/Pages/Layout/Header/Header.component";
import MealsComponent from "./Components/Pages/Meals/Meals.component";
import CartComponent from "./Components/Pages/Cart/Cart.component";

function App() {
  return (
    <>
      <CartComponent/>
      <HeaderComponent/>
      <main>
        <MealsComponent/>
      </main>
    </>
  );
}

export default App;
