import {useSelector} from "react-redux";

import {AppDispatch, AppRootStateType} from "../../store/store";
import {followUsersTC, StateUsersType, thunkOnPageChanged, unFollowUsersTC} from "../../store/reducers/usersReducer";
import React, {useEffect} from "react";
import {UsersPage} from "./UsersPage";


export const UsersPageContainer = () => {

	const {
		users,
		currentPage,
		userPageSize,
		totalCount,
	} = useSelector<AppRootStateType, StateUsersType>((state) => state.usersPage);
	const toggleUserId = useSelector<AppRootStateType, number>((state) => state.usersPage.toggleIsButtons.userId);
	const toggleButton = useSelector<AppRootStateType, boolean>((state) => state.usersPage.toggleIsButtons.disableButton);

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	const dispatch = AppDispatch();

	useEffect(() => {
		if (isAuth) {
			dispatch(thunkOnPageChanged(currentPage, userPageSize));
		}
	}, []);

	const onPageChanged = (pageNumber: number, countUsers = 10) => {
		dispatch(thunkOnPageChanged(pageNumber, countUsers));
	}

	const onFollowUsers = (userId: number) => {
		dispatch(followUsersTC(userId, currentPage, userPageSize))
	}

	const unFollowUsers = (userId: number) => {
		dispatch(unFollowUsersTC(userId, currentPage, userPageSize))
	}

	return (
		<>
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

