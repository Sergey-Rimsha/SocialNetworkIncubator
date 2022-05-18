import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './LoginContainer.module.scss'
import {FormDataType} from "./LoginContainer";


type PropsType = {
	onClickLogout: () => void
}

type PropsFormType = InjectedFormProps<FormDataType, PropsType> & PropsType

// InjectedFormProps<FormDataType, any>
const LoginForm = (props: PropsFormType ) => {

	return (
		<>
			<form className={s.auth__form} onSubmit={props.handleSubmit} >
				<Field
					className={s.auth__input}
					name='email'
					component='input'
					type='email' />
				<Field
					className={s.auth__input}
					name='password'
					component='input'
					type='password' />
				<div className={s.auth__checkbox}>
					<Field
						name='rememberMe'
						component='input'
						type='checkbox' />
					<span>
						rememberMe
					</span>
				</div>
				<div className={s.auth__btnWrap}>
					<button type="submit" className={s.auth__btn}>login</button>
					<button type="button" className={s.auth__btn} onClick={props.onClickLogout}>logout</button>
				</div>
			</form>
		</>
	)
}

export const LoginReduxForm = reduxForm<FormDataType, PropsType>({
	// a unique name for the form
	form: 'login'
})(LoginForm)

