import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  bg?: string;
}

const Button: FC<IButtonProps> = ({ children, bg, width, ...rest }) => {
  return (
    <button
      className={` ${bg ? `${bg} text-white` : ''} ${
        width ? width : ''
      } py-[13px] px-[30px] rounded-full border-1 border-solid  border-black `}
      {...rest}
      style={{
        border: '1px solid black',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
