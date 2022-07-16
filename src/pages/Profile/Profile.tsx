import React from "react";
import UserImg from "../../assets/img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPost} from "./AddPost/AddPost";
import {ProfileStateType} from "../../store/reducers/profileReducer";

import s from './Profile.module.scss';


type StateType = {
	profilePage: ProfileStateType
	status: string
	changeStatus: string
	addNewPost: () => void
	addStatus: () => void
	onChangeHandlerPostText: (text: string) => void
	onChangeStatusText: (text: string) => void
}

export function Profile(props: StateType) {
	let posts = props.profilePage.posts.map((post, i) => {
		return (
			<Post
				key={i}
				id={post.id}
				message={post.message}
				likesCount={post.likesCount}
			/>
		)
	})

	const userPhoto: string = props.profilePage.user.photos.large;

	return (
		<section className={s.profile}>
			<div className={s.user}>
				<div className={s.user__img}>
					<img src={userPhoto || UserImg} alt="user-img"/>
				</div>
				<ProfileInfo
					status={props.status}
					changeStatus={props.changeStatus}
					addStatus={props.addStatus}
					user={props.profilePage.user}
					onChangeStatusText={props.onChangeStatusText}
				/>
			</div>

			<AddPost
				changeMessage={props.profilePage.changeMessage}
				addNewPost={props.addNewPost}
				oChangeHandlerPostText={props.onChangeHandlerPostText}/>
			{posts}
		</section>
	)
}


