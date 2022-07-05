import React, {useEffect} from "react";
// @ts-ignore
import s from "./LoginForm.module.scss";
import {useSelector} from "react-redux";
import {LoginReduxForm} from "./loginForm";
import {authLoginTC, authLogout} from "../../store/reducers/authReducer";
import {AppDispatch, AppRootStateType} from "../../store/store";
import {useNavigate} from "react-router-dom";

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


export const LoginContainer = () => {

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	const navigate = useNavigate()

	const dispatch = AppDispatch();

	const onClickLogout = () => {
		dispatch(authLogout())

	}

	// useEffect(() => {
	// 	if (isAuth) {
	// 		navigate('/profile')
	// 	}
	//
	// }, [isAuth, navigate])

	const onSubmit = (formData: FormDataType) => {
		const result = dispatch(authLoginTC(formData));

		// if (result === 'login') navigate('/profile');
	}

	return (
		<div className={s.auth}>
			<h3>Login form</h3>

			<LoginReduxForm
				onSubmit={onSubmit}
				onClickLogout={onClickLogout}
			/>
		</div>
	)
}
