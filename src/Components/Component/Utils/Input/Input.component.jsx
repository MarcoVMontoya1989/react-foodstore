import React from 'react';

const InputComponent = ({label, input}) => {
  return (
    <div className={'input'}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input}/>
    </div>
  );
};

export default InputComponent;