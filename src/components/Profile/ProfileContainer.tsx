import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as axios from "axios";
import {Profile} from "./Profile";
import {
	ActionProfileType,
	addPost,
	onChangeMessPost,
	ProfileStateType,
	setUserProfile
} from "../../redux/reducerProfile";
import {StateType} from "../../redux/store";
import {useParams} from "react-router-dom";
import {Dispatch} from "redux";

export const ProfileContainer = () => {

	const profilePage = useSelector((state: StateType): ProfileStateType => state.profilePage);

	const dispatch = useDispatch<Dispatch<ActionProfileType>>();

	const params = useParams();

	useEffect(() => {
		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId || 2}`)
		.then((response: axios.AxiosResponse) => {
			dispatch(setUserProfile(response.data))
			// console.log(response.data);
		})
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

