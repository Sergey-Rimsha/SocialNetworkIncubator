import React, {DetailedHTMLProps, HTMLAttributes, useEffect} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {useNavigate} from "react-router-dom";

import { Navigate } from "react-router-dom";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const WithAuthRedirect = (props: DivPropsType) => {

	const {children} = props;

	const navigate = useNavigate();

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	const redirect = '/auth';
	//
	useEffect(() => {
		if (!isAuth) navigate(redirect)
	}, [isAuth, navigate]);

	if (!isAuth) return <Navigate to={redirect}/>

	return (
		<>
			{children}
		</>
	);
}