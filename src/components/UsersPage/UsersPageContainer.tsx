import {useDispatch, useSelector} from "react-redux";

import {StateType} from "../../redux/store";
import {
	ActionUsersType,
	addUsers,
	setCurrentPage,
	setIsFetching,
	setTotalCount,
	StateUsersType, toggleIsButtons
} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import * as axios from "axios";
import {UsersPage} from "./UsersPage";
import {Preloader} from "../Preloader/Preloader";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api";

export const UsersPageContainer = () => {

	const {
		users,
		currentPage,
		userPageSize,
		isFetching,
		totalCount,
	} = useSelector<StateType, StateUsersType>((state) => state.usersPage);
	const toggleUserId = useSelector<StateType, number>((state) => state.usersPage.toggleIsButtons.userId);
	const toggleButton = useSelector<StateType, boolean>((state) => state.usersPage.toggleIsButtons.disableButton);

	const dispatch = useDispatch<Dispatch<ActionUsersType>>();

	const dispatchWrap = (response: axios.AxiosResponse) => {
		dispatch(addUsers(response.data.items));
		dispatch(setTotalCount(response.data.totalCount));
		dispatch(setIsFetching(false));
	}

	useEffect(() => {
		dispatch(setIsFetching(true));
		usersApi.usersPage(currentPage, userPageSize).then((response) => {
			dispatchWrap(response);
		})
	}, []);

	const onPageChanged = (pageNumber: number, countUsers = 10) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(pageNumber));

		usersApi.usersPage(pageNumber, countUsers).then((response) => {
			dispatchWrap(response);
		})
	}

	const onFollowUsers = (userId: number) => {
		dispatch(toggleIsButtons(userId, true));
		usersApi.followUser(userId)
			.then(() => {
				onPageChanged(currentPage);
				dispatch(toggleIsButtons(userId, false));
			})
	}

	const unFollowUsers = (userId: number) => {
		dispatch(toggleIsButtons(userId, true));
		usersApi.unFollowUser(userId)
			.then(() => {
				onPageChanged(currentPage);
				dispatch(toggleIsButtons(userId, false));
			})
	}

	// const onClickHandler = (userId: number) => {
		// dispatch(followedUser(userId));
		// onFollowUsers(userId);
	// }

	return (
		<>
			{isFetching ? <Preloader/> : null}
			<UsersPage
				users={users}
				totalCount={totalCount}
				userPageSize={userPageSize}
				currentPage={currentPage}
				toggleUserId={toggleUserId}
				toggleButton={toggleButton}
				onFollowUsers={onFollowUsers}
				onPageChanged={onPageChanged}
				unFollowUsers={unFollowUsers}
			/>
		</>
	)

}


