import React, { useState } from 'react';

interface IButtonCounterProps extends React {
  name: string;
}

export const ButtonCounter = ({ name }: IButtonCounterProps) => {
  const [count, setCount] = useState<number>(0);

  console.log('rerender ButtonCounter');

  const handleClick = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      {name} - You clicked me {count} times
    </button>
  );
};

// How many times will console log 'rerender ButtonCounter' after clicked?
// How much will the counter increase after each click?
