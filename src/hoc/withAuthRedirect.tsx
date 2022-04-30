import React, {ComponentType, useEffect} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

export const withAuthRedirect = (Component: ComponentType) => {

	 const RedirectComponent = () => {
		const navigate = useNavigate();
		const q = useParams();
		const w = useSearchParams();

		console.log(w)

		const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

		const redirect = '/auth';

		useEffect(() => {
			if (!isAuth) navigate(redirect)



		}, [isAuth, navigate]);

		return <Component/>
	}

	return RedirectComponent
}