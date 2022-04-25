import React, {useEffect} from "react";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AuthInitialStateType, setAuthLoginTC} from "../../redux/authReducer";
import {AppRootStateType, AppThunkType} from "../../redux/store";

type DispatchType = (arg: AppThunkType) => void

export const HeaderContainer = () => {

	const dispatch = useDispatch<DispatchType>();

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