import React, {ComponentType, useEffect} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {useNavigate} from "react-router-dom";

export const withAuthRedirect = (Component: ComponentType) => {

	 const RedirectComponent = () => {
		const navigate = useNavigate();

		const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

		const redirect = '/auth';

		useEffect(() => {
			if (!isAuth) navigate(redirect)

		}, [isAuth, navigate]);

		return <Component/>
	}

	return RedirectComponent
}