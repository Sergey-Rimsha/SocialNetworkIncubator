import React from "react";

import {AddPostType} from "../../../index";
import {OnChangeMessagePostType} from "../../../App";

type PropsType = {
	addPost: AddPostType
	changeMessage: string
	onChangeMessagePost: OnChangeMessagePostType
}


export function NewPost(props: PropsType) {

	const addNewPost = () => {
		props.addPost();
	}

	const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeMessagePost(event.target.value)
	}

	return (
		<div className="new-post">
			<div className="new-post__title">New post</div>
			<div className="new-post__txt">
				<textarea onChange={onChangeText} value={props.changeMessage} name="new-post" placeholder="your news..." />
			</div>
			<div className="new-post__btn">
				<button onClick={addNewPost} >Send</button>
			</div>
		</div>
	)
}