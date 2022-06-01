import React, {useEffect} from 'react';

import './scss/style.scss';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Preloader} from "./components/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {Main} from "./components/Main";
import {initializeApp} from "./redux/utilsReducer";

const App = () => {

	const dispatch = useDispatch();

	const isFetching = useSelector<AppRootStateType, boolean>(state => state.utils.isFetching);

	useEffect(() => {
		dispatch(initializeApp())
	},[dispatch])

	return (
		<div className="App">
			<HeaderContainer />
			{isFetching && <Preloader />}
			<div className="page">
				<div className="container">
					<Sidebar />
					<Main/>
				</div>
			</div>
		</div>

	);
}

export default App;