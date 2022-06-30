import React, {useEffect} from "react";
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {AuthInitialStateType, setAuthLoginTC} from "../../store/reducers/authReducer";
import {AppDispatch, AppRootStateType} from "../../store/store";


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