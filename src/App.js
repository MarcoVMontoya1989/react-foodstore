import './App.css';
import HeaderComponent from "./Components/Pages/Layout/Header/Header.component";
import MealsComponent from "./Components/Pages/Meals/Meals.component";

function App() {
  return (
    <>
     <HeaderComponent />
      <main>
        <MealsComponent/>
      </main>
    </>
  );
}

export default App;
