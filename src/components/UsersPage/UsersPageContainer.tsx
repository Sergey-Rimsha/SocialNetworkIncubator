import {useDispatch, useSelector} from "react-redux";

import {StateType} from "../../redux/store";
import {
	ActionUsersType,
	addUsers,
	followedUser,
	setCurrentPage,
	setIsFetching,
	setTotalCount,
	StateUsersType
} from "../../redux/reducerUsers";
import React, {useEffect} from "react";
import * as axios from "axios";
import {UsersPage} from "./UsersPage";
import {Preloader} from "../Preloader/Preloader";
import {Dispatch} from "redux";

export const UsersPageContainer = () => {

	const {
		users,
		currentPage,
		userPageSize,
		isFetching,
		totalCount,
	} = useSelector<StateType, StateUsersType>((state) => state.usersPage);

	const dispatch = useDispatch<Dispatch<ActionUsersType>>();

	const dispatchWrap = (response: any) => {
		dispatch(addUsers(response.data.items));
		dispatch(setTotalCount(response.data.totalCount));
		dispatch(setIsFetching(false));
	}

	useEffect(() => {
		dispatch(setIsFetching(true));

		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${userPageSize}`)
			.then((response: axios.AxiosResponse) => {
				dispatchWrap(response);
			});
	}, []);

	const onPageChanged = (pageNumber: number, countUsers = 10) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(pageNumber));

		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${countUsers}`)
			.then((response: axios.AxiosResponse) => {
				dispatchWrap(response);
			});
	}

	const onClickHandler = (userId: number) => {
		dispatch(followedUser(userId));
	}

	return (
		<>
			{isFetching ? <Preloader/> : null}
			<UsersPage
				users={users}
				totalCount={totalCount}
				userPageSize={userPageSize}
				currentPage={currentPage}
				onClickHandler={onClickHandler}
				onPageChanged={onPageChanged}
			/>
		</>
	)

}


