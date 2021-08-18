import React, {useContext} from 'react';
import MealItemFormComponent from "./MealItemForm.component";
import CartContext from "../../../../Store/Cart/cart.context";

const MealItemComponent = (props) => {

  const {name, price, description, id} = props;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItems({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  };

  return (
    <li>
      <div className="meal">
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{price}</div>
        <MealItemFormComponent id={id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItemComponent;