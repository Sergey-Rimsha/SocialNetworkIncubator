import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import s from "./AuthContainer.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";


export const AuthContainer = () => {

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth){
			navigate(`/profile`)
		}
	}, [isAuth, navigate])

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
