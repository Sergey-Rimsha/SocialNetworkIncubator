import {useDispatch, useSelector} from "react-redux";

import {AppRootStateType, AppThunkType} from "../../redux/store";
import {
	ActionUsersType,
	followUsersTC,
	StateUsersType,
	thunkOnPageChanged,
	unFollowUsersTC
} from "../../redux/usersReducer";
import React, {ComponentType, useEffect} from "react";
import {UsersPage} from "./UsersPage";
import {Preloader} from "../Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type DispatchType = (arg: AppThunkType) => ActionUsersType

const UsersPageContainer = () => {

	const {
		users,
		currentPage,
		userPageSize,
		totalCount,
	} = useSelector<AppRootStateType, StateUsersType>((state) => state.usersPage);
	const toggleUserId = useSelector<AppRootStateType, number>((state) => state.usersPage.toggleIsButtons.userId);
	const toggleButton = useSelector<AppRootStateType, boolean>((state) => state.usersPage.toggleIsButtons.disableButton);

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

	const dispatch = useDispatch<DispatchType>();

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


export default compose<ComponentType>(withAuthRedirect)(UsersPageContainer)


