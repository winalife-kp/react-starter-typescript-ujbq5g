import React, { useEffect, useState } from 'react';

interface IButtonCounterProps extends React {
  name: string;
}

export const ButtonEffectCounter = ({ name }: IButtonCounterProps) => {
  const [count, setCount] = useState<number>(0);
  const [trigger, setTrigger] = useState<boolean>();

  console.log(`rerender ButtonEffectCounter`);

  useEffect(() => {
    if (trigger !== undefined) setCount((c) => c + 1);
  }, [trigger]);

  useEffect(() => {
    if (trigger !== undefined) setCount((c) => c + 2);
  }, [trigger]);

  const handleClick = () => {
    setTrigger((t) => !t);
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      {name} - You clicked me {count} times
    </button>
  );
};

// How many times will console log 'rerender ButtonEffectCounter' after clicked?
// How much will the counter increase after each click?
