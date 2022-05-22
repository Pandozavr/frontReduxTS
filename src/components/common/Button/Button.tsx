import { FC } from 'react';
import "./Button.css";

export enum btnVariant {
  blue = 'blue',
  red = 'red',
  green = 'green'
}
export enum btnSize {
  small = "small"
}

interface btnProps {
  type: btnVariant
  name: string
  size?: btnSize
  click?: () => void
}

export const Button: FC<btnProps> = ({ type, name, click, size }) => {
  const btnClasses = ['btn', type, size];

  return (
      <div>
        <button onClick={click} className={btnClasses.join(' ')}>
          {name}
        </button>
      </div>
  );
};
