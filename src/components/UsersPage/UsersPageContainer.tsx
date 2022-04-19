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
import {AxiosResponse} from "axios";

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
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${userPageSize}`, {
			withCredentials: true
		})
			.then((response: axios.AxiosResponse) => {
				dispatchWrap(response);
			});
	}, []);

	const onPageChanged = (pageNumber: number, countUsers = 10) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(pageNumber));

		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${countUsers}`, {
			withCredentials: true
		})
			.then((response: axios.AxiosResponse) => {
				dispatchWrap(response);
			});
	}

	const onFollowUsers = (userId: number) => {
		const axios = require('axios');
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{}, {
			withCredentials: true,
			headers:     {
				"API-KEY": "31e5f258-a64c-4753-8a60-acee980643ae"
			}

		})
			.then((response: axios.AxiosResponse) => {
				if (response.data.resultCode === 0) {
					console.log(response.data)
				}
			})
	}

	const unFollowUsers = (userId: number) => {
		const axios = require('axios');
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
			withCredentials: true,
			headers:     {
				"API-KEY": "31e5f258-a64c-4753-8a60-acee980643ae"
			}

		})
			.then((response: axios.AxiosResponse) => {
				console.log(response)
			})
	}

	// const onClickHandler = (userId: number) => {
	// 	// dispatch(followedUser(userId));
	// 	onFollowUsers(userId)
	// }

	return (
		<>
			{isFetching ? <Preloader/> : null}
			<UsersPage
				users={users}
				totalCount={totalCount}
				userPageSize={userPageSize}
				currentPage={currentPage}
				onFollowUsers={onFollowUsers}
				onPageChanged={onPageChanged}
				unFollowUsers={unFollowUsers}
			/>
		</>
	)

}


