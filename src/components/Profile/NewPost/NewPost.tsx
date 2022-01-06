import React from "react";

type PropsType = {
	addPost: any
}


export function NewPost(props: PropsType) {

	let textValue: any = React.createRef();

	let addNewPost = () => {
		let txt: string = textValue.current.value;
		props.addPost(txt);
	}

	return (
		<div className="new-post">
			<div className="new-post__title">New post</div>
			<div className="new-post__txt">
				<textarea ref={textValue} name="new-post" placeholder="your news..." />
			</div>
			<div className="new-post__btn">
				<button onClick={addNewPost} >Send</button>
			</div>
		</div>
	)
}