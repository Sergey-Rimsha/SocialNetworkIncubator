import React from "react";
import logo from "../../img/logo.svg";
import {AuthInitialStateType, authLogout} from "../../redux/authReducer";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";


export type HeaderPropsType = {
	auth: AuthInitialStateType
}

export const Header = (props: HeaderPropsType) => {


	return (
		<header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo">
						<img src={logo} alt="logo"/>
					</div>
					<div className="header__login">
						<NavLink to={`/auth`}>
							{props.auth.isAuth ? props.auth.login : 'login'}
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}