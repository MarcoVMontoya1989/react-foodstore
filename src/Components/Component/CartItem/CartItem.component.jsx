const CartItem = ({price, amount, name}) => {
  const priceFin = `$${price.toFixed(2)}`;

  return (
    <li className={'cart-item'}>
      <div>
        <h2>{name}</h2>
        <div className={'summary'}>
          <span className={'price'}>{priceFin}</span>
          <span className={'amount'}>x {amount}</span>
        </div>
      </div>
      <div className={'actions'}>
        <button onClick={() => {}}>−</button>
        <button onClick={() => {}}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
