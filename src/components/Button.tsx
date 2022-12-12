import {ButtonHTMLAttributes, FC, ReactNode} from 'react';

    type ButtonProps={
        className: string;
        children: ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> =({className, children, ...rest}) =>{
  return (
    <button {...rest} className={'bg-white px-3 py-2 rounded-md font-semibold mt-8 ' + " "+ className}>
      {children}
    </button>
  )
}

export default Button;