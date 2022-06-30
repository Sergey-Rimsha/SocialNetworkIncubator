import {Outlet} from 'react-router-dom';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {initializeApp} from "../store/reducers/utilsReducer";
import {HeaderContainer} from "./Header/HeaderContainer";
import {Preloader} from "./Preloader/Preloader";
import {Sidebar} from "./Sidebar/Sidebar";
import {Routing} from "./Routing/Routing";


export const Layout = () => {

	const dispatch = useDispatch();

	const isFetching = useSelector<AppRootStateType, boolean>(state => state.utils.isFetching);

	useEffect(() => {
		dispatch(initializeApp())
	},[dispatch])

	return (
		<>
			<HeaderContainer />
			{isFetching && <Preloader />}
			<div className="page">
				<div className="container">
					<Sidebar />
					<main className="content">
						<Outlet />
					</main>
				</div>
			</div>
		</>
	)
};