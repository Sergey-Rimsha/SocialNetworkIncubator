import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewPost} from "./NewPost/NewPost";
import {ProfileStateType} from "../../redux/reducerProfile";


type StateType = {
	profilePage: ProfileStateType
	addNewPost: () => void
	onChangeHandlerPostText: (text: string) => void
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
		<section className="profile">
			<div className="user">
				<div className="user__img">
					<img src={userPhoto || UserImg} alt="user-img"/>
				</div>
				<ProfileInfo user={props.profilePage.user} />
			</div>

			<NewPost
				changeMessage={props.profilePage.changeMessage}
				addNewPost={props.addNewPost}
				oChangeHandlerPostText={props.onChangeHandlerPostText}/>
			{posts}
		</section>
	)
}


