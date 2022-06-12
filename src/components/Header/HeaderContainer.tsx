import React, {useEffect} from "react";
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {AuthInitialStateType, setAuthLoginTC} from "../../redux/authReducer";
import {AppDispatch, AppRootStateType} from "../../redux/store";


export const HeaderContainer = () => {

	const dispatch = AppDispatch();

	const auth = useSelector<AppRootStateType, AuthInitialStateType>(state => state.auth);

	useEffect(() => {
		dispatch(setAuthLoginTC());
	}, []);

	return (
		<>
			<Header auth={auth}/>
		</>
	)
}