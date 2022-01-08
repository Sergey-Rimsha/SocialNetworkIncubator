import React, {RefObject} from "react";

import {AddPostType} from "../../../render";

type PropsType = {
	addPost: AddPostType
}


export function NewPost(props: PropsType) {

	let textValue: RefObject<HTMLTextAreaElement> = React.createRef();

	let addNewPost = () => {
		if (textValue.current) {
			let txt: string = textValue.current.value;
			props.addPost(txt);
			textValue.current.value = '';
		}
	}

	let onChangeText = () => {
		if (textValue.current) {
			let txt: string = textValue.current.value;

		}

	}

	return (
		<div className="new-post">
			<div className="new-post__title">New post</div>
			<div className="new-post__txt">
				<textarea onChange={onChangeText} ref={textValue} name="new-post" placeholder="your news..." />
			</div>
			<div className="new-post__btn">
				<button onClick={addNewPost} >Send</button>
			</div>
		</div>
	)
}