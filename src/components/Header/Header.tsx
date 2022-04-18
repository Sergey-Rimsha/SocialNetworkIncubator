import React from "react";
import logo from "../../img/logo.svg";
import {AuthInitialStateType} from "../../redux/authReducer";


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
					<div>
						{props.auth.isAuth ? props.auth.login : 'login'}
					</div>
				</div>
			</div>
		</header>
	)
}