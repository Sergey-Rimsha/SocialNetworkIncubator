import React from "react";
import s from "./LoginContainer.module.scss";
import {useDispatch} from "react-redux";
import {LoginReduxForm} from "./loginForm";
import {Dispatch} from "redux";
import {authLoginTC} from "../../redux/authReducer";
import {AppThunkType} from "../../redux/store";

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


export const LoginContainer = () => {

	// const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (isAuth){
	// 		navigate(`/profile`)
	// 	}
	// }, [isAuth, navigate])

	const dispatch = useDispatch<Dispatch<any>>()



	const onSubmit = (formData: FormDataType) => {
		// const email = formData.email;
		// const password = formData.password;
		// const rememberMe = formData.rememberMe || false;
		dispatch(authLoginTC(formData))

		console.log(formData)
	}

	return (
		<div className={s.auth}>
			<h3>Login form</h3>

			<LoginReduxForm
				onSubmit={onSubmit}
			/>
		</div>
	)
}
