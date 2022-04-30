import React from "react";
import s from "./AuthContainer.module.scss";


export const AuthContainer = () => {
	return (
		<div className={s.auth}>
			<h3>Login form</h3>
			<form className={s.auth__form}>
				<input className={s.auth__input} type='email'/>
				<input className={s.auth__input} type='password'/>
				<div className={s.auth__btnWrap}>
					<button className={s.auth__btn} type="submit">login</button>
					<button className={s.auth__btn} type="submit">logout</button>
				</div>
			</form>
		</div>
	)
}