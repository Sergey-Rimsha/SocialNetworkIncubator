import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewPost} from "./NewPost/NewPost";

import {AddPostType} from "../../render";
import {OnChangeMessagePostType} from "../../App";

type StateType = {
	profilePage: PostType
	addPost: AddPostType
	onChangeMessagePost: OnChangeMessagePostType
}
type PostType = {
	posts: Array<InPost>
	changeMessage: string
}
type InPost = {
	id: number
	message: string
	likesCount: number
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
				addPost={props.addPost}
				onChangeMessagePost={props.onChangeMessagePost}/>

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


