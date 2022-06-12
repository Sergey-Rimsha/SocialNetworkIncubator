import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Profile} from "./Profile";
import {
	addPost,
	onChangeMessPost,
	ProfileStateType,
	putStatusUserTC,
	setChangeStatus,
	setUserProfileTC
} from "../../redux/profileReducer";
import {AppDispatch, AppRootStateType} from "../../redux/store";
import {useParams} from "react-router-dom";


export const ProfileContainer = () => {

	const profilePage = useSelector<AppRootStateType, ProfileStateType>((state) => state.profilePage);
	const status = useSelector<AppRootStateType, string>(state => state.profilePage.status);
	const changeStatus = useSelector<AppRootStateType, string>(state => state.profilePage.changeStatus);

	const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);
	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);


	const dispatch = AppDispatch();


	const params = useParams();

	useEffect(() => {
		if (loginId) {
			const userId = params.userId || loginId;
			if (isAuth) {
				dispatch(setUserProfileTC(userId.toString()));
			}
		}
	}, []);

	const addNewPost = () => {
		dispatch(addPost());
	};

	const onChangeHandlerPostText = (text: string) => {
		dispatch(onChangeMessPost(text))
	};

	const onChangeStatusText = (text: string) => {
		dispatch(setChangeStatus(text))
	}

	const addStatus = () => {
		if (changeStatus !== status) {
			if (loginId) {
				dispatch(putStatusUserTC(changeStatus, loginId));
			}
		}
	}


	return (
		<>
			<Profile
				status={status}
				changeStatus={changeStatus}
				profilePage={profilePage}
				addNewPost={addNewPost}
				addStatus={addStatus}
				onChangeStatusText={onChangeStatusText}
				onChangeHandlerPostText={onChangeHandlerPostText}
			/>
		</>
	)
}
