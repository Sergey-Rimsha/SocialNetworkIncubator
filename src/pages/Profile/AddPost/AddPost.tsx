import React from "react";

import s from './AddPost.module.scss';
import {Button} from "../../../components/Button/Button";

type PropsType = {
	changeMessage: string
	addNewPost: () => void
	oChangeHandlerPostText: (text: string) => void
}


export function AddPost(props: PropsType) {

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
		<div className={s.addPost}>
			<div className={s.addPost__title}>New post</div>
			<div className={s.addPost__txt}>
				<textarea
					name="new-post"
					placeholder="your news..."
					onChange={onChangeText}
					value={props.changeMessage}
				/>
			</div>
			<div className={s.addPost__btn}>
				<Button color={'primary'} onClick={onClickHandler} type={"button"} value={'Send'} />
				{/*<button onClick={onClickHandler} >Send</button>*/}
			</div>
		</div>
	)
}