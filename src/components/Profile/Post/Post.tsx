import React from "react";
import UserImg from "../../../img/ava_default.jpg";
import {NewPost} from "../NewPost/NewPost";

export function Post() {

	return (
		<div className="posts">
			<NewPost />
			<div className="user-post">
				<div className="user-post__user-img">
					<img src={UserImg} alt="user_img"/>
				</div>
				<div className="user-post__text">
					Hello world!!!
				</div>
			</div>
		</div>
	)
}




