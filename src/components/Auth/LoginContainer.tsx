import React from "react";
import s from "./LoginContainer.module.scss";
import {useDispatch} from "react-redux";
import {LoginReduxForm} from "./loginForm";
import {Dispatch} from "redux";
import {authLoginTC, authLogout} from "../../redux/authReducer";

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


export const LoginContainer = () => {

	const dispatch = useDispatch<Dispatch<any>>()

	const onClickLogout = () => {
		dispatch(authLogout())
	}



	const onSubmit = (formData: FormDataType) => {

		dispatch(authLoginTC(formData))

		console.log(formData)
	}

	return (
		<div className={s.auth}>
			<h3>Login form</h3>

			<LoginReduxForm
				onSubmit={onSubmit}
				// onClickLogout={onClickLogout}
			/>
		</div>
	)
}
