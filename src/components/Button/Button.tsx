
import s from './Button.module.scss';
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
	color: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonPropsType> = React.memo(({color, value, ...restProps}) => {


	const styleBtn = color === 'primary' ?
		`${s.button__item_primary}` : `${s.button__item_secondary}`;

	return (
		<div className={s.button}>
			<button
				className={`${s.button__item} ${styleBtn}`}
				{...restProps}
			>
				{value}
			</button>
		</div>
	)
});