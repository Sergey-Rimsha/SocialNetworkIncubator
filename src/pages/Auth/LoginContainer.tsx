import React, {useEffect} from "react";
import s from "./LoginForm.module.scss";
import {useSelector} from "react-redux";
import {authLoginTC, authLogout} from "../../store/reducers/authReducer";
import {AppDispatch, AppRootStateType} from "../../store/store";
import {useNavigate} from "react-router-dom";
import {Login} from "./Login";

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

	const onHandlerSubmit = (formData: FormDataType) => {
		dispatch(authLoginTC(formData));
	}

	return (
		<div className={s.auth}>
			<h3>Login form</h3>

			{/*<LoginReduxForm*/}
			{/*	onSubmit={onSubmit}*/}
			{/*	onClickLogout={onClickLogout}*/}
			{/*/>*/}

			<Login
				onClickLogout={onClickLogout}
				onHandlerSubmit={onHandlerSubmit}
			/>
		</div>
	)
}
