import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './LoginContainer.module.scss'
import {FormDataType} from "./LoginContainer";


const LoginForm = (props: InjectedFormProps<FormDataType>) => {

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
				<button type="submit" className={s.auth__btn}>login</button>
			</form>
		</>
	)
}

export const LoginReduxForm = reduxForm<FormDataType>({
	// a unique name for the form
	form: 'login'
})(LoginForm)

