import { ComponentPropsWithoutRef, FC, memo } from 'react';

import s from './button.module.scss';

type ButtonPropsType = ComponentPropsWithoutRef<'button'> & {
  variant: 'primary' | 'secondary';
};

// eslint-disable-next-line react/prop-types
export const Button: FC<ButtonPropsType> = memo(({ variant, children, ...restProps }) => {
  const styleBtn = variant === 'primary' ? `${s.button__item_primary}` : `${s.button__item_secondary}`;

  return (
    <div className={s.button}>
      <button className={`${s.button__item} ${styleBtn}`} type="button" {...restProps}>
        {children}
      </button>
    </div>
  );
});
