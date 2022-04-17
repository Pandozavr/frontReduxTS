import React, { FC } from 'react';
import './Button.css';

export enum btnVariant {
  primary = 'primary',
  red = 'red',
}

interface btnProps {
  type: btnVariant;
  name: string;
  click: () => void;
}

export const Button: FC<btnProps> = ({ type, name, click }) => {
  const btnClasses = ['btn', type];

  return (
      <div>
        <button onClick={click} className={btnClasses.join(' ')}>
          {name}
        </button>
      </div>
  );
};
