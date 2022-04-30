import React, {ComponentType, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Profile} from "./Profile";
import {
	ActionProfileType,
	addPost,
	onChangeMessPost,
	ProfileStateType,
	setUserProfileTC
} from "../../redux/profileReducer";
import {AppRootStateType} from "../../redux/store";
import {useNavigate, useParams} from "react-router-dom";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type DispatchType = Dispatch<ActionProfileType | any>

const ProfileContainer = () => {

	const profilePage = useSelector((state: AppRootStateType): ProfileStateType => state.profilePage);

	const dispatch = useDispatch<DispatchType>();

	const params = useParams();

	useEffect(() => {
		const userId = params.userId || '16778';
		dispatch(setUserProfileTC(userId))
	}, []);

	const addNewPost = () => {
		dispatch(addPost());
	};

	const onChangeHandlerPostText = (text: string) => {
		dispatch(onChangeMessPost(text))
	};


	return (
		<>
			<Profile
				profilePage={profilePage}
				addNewPost={addNewPost}
				onChangeHandlerPostText={onChangeHandlerPostText}
			/>
		</>
	)
}


export default compose<ComponentType>(withAuthRedirect)(ProfileContainer)

