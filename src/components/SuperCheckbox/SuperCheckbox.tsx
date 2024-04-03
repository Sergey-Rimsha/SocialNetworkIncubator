import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import s from './SuperCheckbox.module.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.currentTarget;

    // eslint-disable-next-line no-unused-expressions
    onChangeChecked && onChangeChecked(checked);

    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    // сделайте так чтоб работал onChange и onChangeChecked
  };

  // const finalInputClassName = `${s.checkbox} ${className ? className : ''}`;
  const finalInputClassName = `${className || s.label}`;
  const descriptionClassName = `${spanClassName || ''}`;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={finalInputClassName}>
      <input type="checkbox" onChange={onChangeCallback} {...restProps} />
      <span />
      {children && <div className={descriptionClassName}>{children}</div>}
    </label>
  );
};

export default SuperCheckbox;
