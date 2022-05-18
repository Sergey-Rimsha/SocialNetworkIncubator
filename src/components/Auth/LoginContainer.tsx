import React, {useEffect} from "react";
import s from "./LoginContainer.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {LoginReduxForm} from "./loginForm";
import {authLoginTC, authLogout} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/store";
import {useNavigate, useParams} from "react-router-dom";

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


export const LoginContainer = () => {

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	const navigate = useNavigate()

	const dispatch = useDispatch()

	const onClickLogout = () => {
		dispatch(authLogout())
	}

	// useEffect(() => {
	// 	if (isAuth === true) {
	// 		navigate('/profile')
	// 	}
	//
	// }, [isAuth, navigate])

	const onSubmit = (formData: FormDataType) => {
		dispatch(authLoginTC(formData))
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
