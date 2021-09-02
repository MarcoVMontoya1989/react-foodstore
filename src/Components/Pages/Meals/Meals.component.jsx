import React, {useEffect, useState} from 'react';
import MealsAvailableComponent from "../../Component/Meals/MealsAvailable/MealsAvailable.component";
import MealsSummaryComponent from "../../Component/Meals/MealsSummary/MealsSummary.component";

const MealsComponent = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [mealMenu, setMealMenu] = useState([]);
  const [error, setError] = useState({
    error: false,
    message: null
  });

  useEffect( () => {


      const fetchDataMeals = async () => {

        setIsLoading(true);

        const response = await fetch('https://dummymoviesreact-default-rtdb.firebaseio.com/meals.json');
        const data = await response.json();

        if (data === null || !response.ok) {
          setError({
            error: true,
            message: "No data available",
          });
        }

        let loadMeals = [];

        for (const dataKey in data) {
          loadMeals.push({
            id: dataKey,
            name: data[dataKey].name,
            description: data[dataKey].description,
            price: data[dataKey].price
          });
        }

        setMealMenu(loadMeals);

        setIsLoading(false);
      }

    try{
      fetchDataMeals();
    } catch(e){
      setError({
        error: true,
        message: e.message,
      });
      setIsLoading(false);
    }
  }, []);

  const LoadingContainer = (
    isLoading ? <p className="meals-loading">Loading...</p> :  <MealsAvailableComponent data={mealMenu}/>
  );
  
  return (
    <>
      <MealsSummaryComponent/>
      { error.error ? (<p className="meals-error">Something went wrong...</p>) : LoadingContainer}
    </>
  );
};

export default MealsComponent;
