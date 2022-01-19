import React from "react";

import {ActionType} from "../../../redux/state";

type PropsType = {
	changeMessage: string
	dispatch: (action: ActionType) => void
}


export function NewPost(props: PropsType) {

	const addNewPost = () => {
		props.dispatch({type: 'ADD-POST'});
	}

	const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		let text = event.currentTarget.value;
		props.dispatch({type: 'ON-CHANGE-MESS-POST', text: text})
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