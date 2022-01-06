import React from "react";
import UserImg from "../../../img/ava_default.jpg";
import {NewPost} from "../NewPost/NewPost";

type InPost = {
	id: number
	message: string
	likesCount: number
}

export function Post(props: InPost) {

	return (
		<div className="posts">
			<div className="user-post">
				<div className="user-post__user-img">
					<img src={UserImg} alt="user_img"/>
				</div>
				<div className="user-post__text">
					{props.message}
				</div>
				<div className="user-post__like">
					{`likes: ${props.likesCount}`}
				</div>
			</div>
		</div>
	)
}




