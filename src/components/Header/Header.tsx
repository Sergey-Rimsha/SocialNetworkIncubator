import React from "react";
import logo from '../../assets/img/logo.svg';
import {AuthInitialStateType} from "../../store/reducers/authReducer";
import {NavLink} from "react-router-dom";

import s from './Header.module.scss';


export type HeaderPropsType = {
	auth: AuthInitialStateType
}

export const Header = (props: HeaderPropsType) => {


	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__block}>
					<div className={s.header__logo}>
						<img src={logo} alt="logo"/>
					</div>
					<div className={s.header__login}>
						<NavLink to={`/auth`}>
							{props.auth.isAuth ? props.auth.login : 'login'}
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}