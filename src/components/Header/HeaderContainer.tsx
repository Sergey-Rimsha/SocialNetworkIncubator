import React, {useEffect} from "react";
import {Header} from "./Header";
import * as axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ActionAuthType, AuthInitialStateType, setAuth, setIsAuthLogin} from "../../redux/authReducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/store";


export const HeaderContainer = () => {

	const dispatch = useDispatch<Dispatch<ActionAuthType>>();

	const auth = useSelector<StateType, AuthInitialStateType>(state => state.auth);

	console.log(auth)

	useEffect(() => {
		dispatch(setIsAuthLogin(false));
		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
			withCredentials: true
		})
			.then((response: axios.AxiosResponse) => {
				dispatch(setIsAuthLogin(true));
				if (response.data.resultCode === 0) {
					dispatch(setIsAuthLogin(true));
					dispatch(setAuth(response.data.data));
				}
			})
			.catch(() => {
				dispatch(setIsAuthLogin(false));
			})
	}, []);

	return (
		<>
			<Header auth={auth} />
		</>
	)
}