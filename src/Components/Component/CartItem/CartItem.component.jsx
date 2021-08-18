const CartItem = ({id, price, amount, name, onAddItem, onRemoveItem}) => {
  const priceFin = `$${price}`;

  const addToCartHandler = (id, name, price) => {
    onAddItem({
      id: id,
      name: name,
      amount: 1,
      price: price
    });
  };

  return (
    <li className={'cart-item'}>
      <div>
        <h2>{name}</h2>
        <div className={'summary-item'}>
          <span className={'price'}>{priceFin}</span>
          <span className={'amount'}>x {amount}</span>
        </div>
      </div>
      <div className={'actions'}>
        <button onClick={() => onRemoveItem(id)}>−</button>
        <button onClick={() => addToCartHandler(id,name,price)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
