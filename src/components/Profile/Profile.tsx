import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewPost} from "./NewPost/NewPost";

import {ActionType, PostType} from "../../redux/state";

type StateType = {
	profilePage: PostType
	dispatch: (action: ActionType) => void
}

export function Profile(props: StateType) {

	return (
		<section className="profile">
			<div className="user">
				<div className="user__img">
					<img src={UserImg} alt="user-img"/>
				</div>
				<ProfileInfo />
			</div>

			<NewPost
				changeMessage={props.profilePage.changeMessage}
				dispatch={props.dispatch}
			/>

			{
				props.profilePage.posts.map((post) => {
					return (
						<Post
							id={post.id}
							message={post.message}
							likesCount={post.likesCount}
						/>
					)
				})
			}
		</section>
	)
}


