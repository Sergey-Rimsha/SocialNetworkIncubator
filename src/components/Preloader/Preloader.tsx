import './Preloader.scss';
import { FC } from 'react';

export const Preloader: FC = () => {
  return (
    <div className="preloader">
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  );
};
