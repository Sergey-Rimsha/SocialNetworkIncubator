import React, {ComponentType, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Profile} from "./Profile";
import {
	ActionProfileType,
	addPost,
	onChangeMessPost,
	ProfileStateType,
	putStatusUserTC,
	setChangeStatus,
	setUserProfileTC
} from "../../redux/profileReducer";
import {AppRootStateType} from "../../redux/store";
import {useParams} from "react-router-dom";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type DispatchType = Dispatch<ActionProfileType | any>

const ProfileContainer = () => {

	const profilePage = useSelector<AppRootStateType, ProfileStateType>((state) => state.profilePage);
	const status = useSelector<AppRootStateType, string>(state => state.profilePage.status);
	const loginId = useSelector<AppRootStateType, number>(state => state.auth.id);
	const changeStatus = useSelector<AppRootStateType, string>(state => state.profilePage.changeStatus)

	const dispatch = useDispatch<DispatchType>();

	const params = useParams();

	useEffect(() => {
		const userId = params.userId || loginId.toString();
		dispatch(setUserProfileTC(userId))
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
			dispatch(putStatusUserTC(changeStatus,loginId));
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


export default compose<ComponentType>(withAuthRedirect)(ProfileContainer)

