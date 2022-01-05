import React from "react";


export function NewPost() {

	return (
		<div className="new-post">
			<div className="new-post__title">New post</div>
			<div className="new-post__txt">
				<textarea name="new-post" placeholder="your news..." />
			</div>
			<div className="new-post__btn">
				<button>Send</button>
			</div>
		</div>
	)
}