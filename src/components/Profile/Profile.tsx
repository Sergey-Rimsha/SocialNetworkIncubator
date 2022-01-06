import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewPost} from "./NewPost/NewPost";

type StateType = {
	profilePage: PostType
	addPost: object
}

type PostType = {
	posts: Array<InPost>
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

			<NewPost addPost={props.addPost} />

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


