import {useFormik} from "formik";
import React from "react";

import s from './Login.module.scss';
import {Button} from "../../components/Button/Button";


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
			} else if (values.password.length < 3) {
				errors.password = 'Пароль должен быть больше 3 символов';
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
			<div className={s.auth}>
				<h3>Login form</h3>
				<div>
					Тестовые Email и Password
					<div>
						Email: free@samuraijs.com
					</div>
					<div>
						Password: free
					</div>
				</div>

				<form className={s.auth__form} onSubmit={formik.handleSubmit}>
					<input
						className={s.auth__input}
						id='email'
						placeholder='Email'
						type='email'
						{...formik.getFieldProps('email')}
					/>
					{
						formik.touched.email &&
						formik.errors.email	&&
						<span className={s.auth__error}>
						{formik.errors.email}
					</span>
					}
					<input
						className={s.auth__input}
						id='password'
						placeholder='Password'
						type='password'
						{...formik.getFieldProps('password')}
					/>
					{
						formik.touched.email &&
						formik.errors.password	&&
						<span className={s.auth__error}>
						{formik.errors.password}
					</span>
					}
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
						<Button
							color={'primary'}
							type={'submit'}
							value={'login'}
							disabled={false}
						/>
						<Button
							color={'secondary'}
							type={'submit'}
							value={'logout'}
							disabled={false}
							onClick={props.onClickLogout}
						/>
						{/*<button type='submit' className={s.auth__btn}>login</button>*/}
						{/*<button type="button" className={s.auth__btn} onClick={props.onClickLogout}>logout</button>*/}
					</div>
				</form>
			</div>
		</>
	)

}