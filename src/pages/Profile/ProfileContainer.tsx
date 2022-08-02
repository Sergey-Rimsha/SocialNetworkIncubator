import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Profile} from "./Profile";
import {
	addPost,
	onChangeMessPost,
	ProfileStateType, putPhotoProfileTC,
	putStatusUserTC,
	setChangeStatus,
	setUserProfileTC
} from "../../store/reducers/profileReducer";
import {AppDispatch, AppRootStateType} from "../../store/store";
import {useNavigate, useParams} from "react-router-dom";


export const ProfileContainer = () => {

	const profilePage = useSelector<AppRootStateType, ProfileStateType>((state) => state.profilePage);
	const status = useSelector<AppRootStateType, string>(state => state.profilePage.status);
	const changeStatus = useSelector<AppRootStateType, string>(state => state.profilePage.changeStatus);

	const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

	const dispatch = AppDispatch();

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!params.userId) {
			navigate(`/profile/${loginId}`)
		}
	}, [params.userId, navigate, loginId])

	useEffect(() => {
		if (params.userId) {
			dispatch(setUserProfileTC(params.userId));
		}
	}, [params.userId, dispatch]);

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

	const addPhoto = (filePhoto: File) => {
		dispatch(putPhotoProfileTC(filePhoto))
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
				addPhoto={addPhoto}
			/>
		</>
	)
}
