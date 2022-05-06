import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './AuthContainer.module.scss'

type LoginFormPropsType = {
	onSubmit: (formData: any) => void
}

const LoginForm = (props: any) => {

	return (
		<>
			<form className={s.auth__form} onSubmit={props.handleSubmit} >
				<Field className={s.auth__input} name='email' component='input' type='email'/>
				<Field className={s.auth__input} name='password' component='input' type='password'/>
				<div className={s.auth__checkbox}>
					<Field name='rememberMe' component='input' type='checkbox'/>
					<span>
						rememberMe
					</span>
				</div>

				{/*	<div className={s.auth__btnWrap}>*/}
				{/*		<button className={s.auth__btn} type="submit">login</button>*/}
				{/*		<button className={s.auth__btn} type="submit">logout</button>*/}
				{/*	</div>*/}
				<button type="submit" className={s.auth__btn}>login</button>
			</form>
		</>
	)
}

export const LoginReduxForm = reduxForm<FormData, any, any>({
	// a unique name for the form
	form: 'login'
})(LoginForm)

