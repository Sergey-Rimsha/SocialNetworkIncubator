import React from "react";

type PropsType = {
	changeMessage: string
	addNewPost: () => void
	oChangeHandlerPostText: (text: string) => void
}


export function NewPost(props: PropsType) {

	const onClickHandler = () => {
		if (props.changeMessage) {
			props.addNewPost()
		}
	}

	const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		let text = event.currentTarget.value;
		props.oChangeHandlerPostText(text)
	}

	return (
		<div className="new-post">
			<div className="new-post__title">New post</div>
			<div className="new-post__txt">
				<textarea onChange={onChangeText} value={props.changeMessage} name="new-post" placeholder="your news..." />
			</div>
			<div className="new-post__btn">
				<button onClick={onClickHandler} >Send</button>
			</div>
		</div>
	)
}