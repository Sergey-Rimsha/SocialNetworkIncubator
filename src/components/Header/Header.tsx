import React from "react";
import logo from "../../img/logo.svg";
import {AuthInitialStateType, authLogout} from "../../redux/authReducer";
import {useDispatch} from "react-redux";


export type HeaderPropsType = {
	auth: AuthInitialStateType
}

export const Header = (props: HeaderPropsType) => {

	const dispatch = useDispatch()

	const onClickLogout = () => {
		dispatch(authLogout())
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo">
						<img src={logo} alt="logo"/>
					</div>
					<div>
						{props.auth.isAuth ? props.auth.login : 'login'}
						<button onClick={onClickLogout}>logout</button>
					</div>
				</div>
			</div>
		</header>
	)
}