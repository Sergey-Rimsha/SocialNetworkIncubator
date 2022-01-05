import React from "react";
import UserImg from "../../img/ava_default.jpg";
import exp from "constants";

const Post = () => {

	return (
		<div className="posts">
			<div className="new-post">
				<textarea name="new-post" placeholder="your news..." >
				</textarea>
				<div className="new-post__btn">
					<button>Send</button>
				</div>
			</div>
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

export default Post;



