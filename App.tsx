import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';
import { ButtonEffectCounter } from './components/ButtonEffectCounter';

export const App = () => {
  return (
    <div className="p-2">
      <ButtonCounter name={'ButtonCounter'} />
      <div className="p-2">------------------------------------</div>
      <ButtonEffectCounter name={'ButtonEffectCounter'} />
    </div>
  );
};
