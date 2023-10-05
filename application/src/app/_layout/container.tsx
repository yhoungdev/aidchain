import React, { FC, ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }: IContainerProps) => {
  return <div>{children}</div>;
};

export default Container;
