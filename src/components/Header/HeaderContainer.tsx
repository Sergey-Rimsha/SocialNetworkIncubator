import React from "react";
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {AuthInitialStateType} from "../../store/reducers/authReducer";
import {AppRootStateType} from "../../store/store";


export const HeaderContainer = () => {

	const auth = useSelector<AppRootStateType, AuthInitialStateType>(state => state.auth);

	return (
		<>
			<Header auth={auth}/>
		</>
	)
}