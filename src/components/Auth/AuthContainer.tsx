import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import s from "./AuthContainer.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, AppThunkType} from "../../redux/store";
import {LoginReduxForm} from "./loginForm";
import {Dispatch} from "redux";
import {authLoginTC} from "../../redux/authReducer";

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


export const AuthContainer = () => {

	// const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (isAuth){
	// 		navigate(`/profile`)
	// 	}
	// }, [isAuth, navigate])

	const dispatch = useDispatch<Dispatch<any>>()



	const onSubmit = (formData: FormDataType) => {
		// dispatch(authLoginTC(formData))
	}

	return (
		<div className={s.auth}>
			<h3>Login form</h3>

			<LoginReduxForm
				onSubmit={onSubmit}
			/>
			{/*<LoginForm/>*/}
			{/*<Asd/>*/}
			{/*<form className={s.auth__form}>*/}
			{/*	<input className={s.auth__input} type='email'/>*/}
			{/*	<input className={s.auth__input} type='password'/>*/}
			{/*	<div className={s.auth__btnWrap}>*/}
			{/*		<button className={s.auth__btn} type="submit">login</button>*/}
			{/*		<button className={s.auth__btn} type="submit">logout</button>*/}
			{/*	</div>*/}
			{/*</form>*/}
		</div>
	)
}
