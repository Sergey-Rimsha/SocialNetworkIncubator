import {useFormik} from "formik";
import {Field} from "redux-form";
import React from "react";

import s from './LoginForm.module.scss';


type FormikErrorType = {
	email?: string
	password?: string
	rememberMe?: boolean
}


export const LoginFormik = () => {


	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false
		},
		validate: (values) => {
			const errors: FormikErrorType = {};
			if (!values.email) {
				errors.email = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}

			if (!values.password) {
				errors.password = 'Пароль обязателен';
			} else if (+values.password < 3) {
				errors.password = 'Пароль должен быть больше 3 символов';
			}

			return errors;
		},
		onSubmit: values => {
			// alert(JSON.stringify(values));
			// dispatch(loginTC(values));
			formik.resetForm();
		},

	});

	return (
		<>
			<form className={s.auth__form} onSubmit={formik.handleSubmit} >
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