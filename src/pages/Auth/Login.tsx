import {useFormik} from "formik";
import React from "react";

import s from './LoginForm.module.scss';


type FormikErrorType = {
	email?: string
	password?: string
	rememberMe?: boolean
}

type FormikStateType = {
	email: string
	password: string
	rememberMe: boolean
}

type PropsLoginType = {
	onClickLogout: () => void
	onHandlerSubmit: (data: FormikStateType) => void
}


export const Login = (props: PropsLoginType) => {


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
			} else if (values.password.length < 7) {
				errors.password = 'Пароль должен быть больше 7 символов';
			}

			return errors;
		},
		onSubmit: values => {
			props.onHandlerSubmit(values)
			// formik.resetForm();
		},

	});

	return (
		<>
			<form className={s.auth__form} onSubmit={formik.handleSubmit} >
				<input
					className={s.auth__input}
					id='email'
					type='email'
					{...formik.getFieldProps('email')}
				/>
				<input
					className={s.auth__input}
					id='password'
					type='password'
					{...formik.getFieldProps('password')}
				/>
				<div className={s.auth__checkbox}>
					<input
						id='rememberMe'
						type='checkbox'
						{...formik.getFieldProps('rememberMe')}
					/>
					<span>
						rememberMe
					</span>
				</div>
				<div className={s.auth__btnWrap}>
					<button type='submit' className={s.auth__btn}>login</button>
					<button type="button" className={s.auth__btn} onClick={props.onClickLogout}>logout</button>
				</div>
			</form>
		</>
	)

}