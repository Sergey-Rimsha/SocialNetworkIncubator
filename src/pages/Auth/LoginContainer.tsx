import React from "react";
import {authLoginTC, authLogout} from "../../store/reducers/authReducer";
import {AppDispatch} from "../../store/store";
import {Login} from "./Login";

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


export const LoginContainer = () => {

	const dispatch = AppDispatch();

	const onClickLogout = () => {
		dispatch(authLogout())
	}

	const onHandlerSubmit = (formData: FormDataType) => {
		dispatch(authLoginTC(formData));
	}

	return (
		<>
			<Login
				onClickLogout={onClickLogout}
				onHandlerSubmit={onHandlerSubmit}
			/>
		</>
	)
}
