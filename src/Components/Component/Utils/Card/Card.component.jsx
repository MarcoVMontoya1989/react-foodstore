import React from 'react';

const CardComponent = (props) => {
  return (
    <div className={'card'}>
      {props.children}
    </div>
  );
};

export default CardComponent;