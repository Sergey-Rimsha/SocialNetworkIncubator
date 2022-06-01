import React from "react";
// @ts-ignore
import UserImg from "../../../img/ava_default.jpg";


type NewMessagesPropsType = {
	changeMessChat: string
	sendMessage: () => void
	onChangeHandler: (text: string) => void
}


export function SendMessage (props: NewMessagesPropsType) {

	const onClickHandler = () => {
		if (props.changeMessChat) {
			props.sendMessage()
		}
	}

	const onChangeHandlerMess = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
		let text: string = e.currentTarget.value;
		props.onChangeHandler(text)
	}

	return (
		<div className="new-messages">
			<img src={UserImg} alt="user_img"/>
			<div className="new-messages__dialogs">
				<div className="new-messages__dialogs_name">
					Sergey Rimsha
				</div>
				<div className={"form"}>
					<textarea
						className={"form__textArea"}
						value={props.changeMessChat}
						onChange={onChangeHandlerMess}
						name="dialogs-message"
						placeholder="your message..." />
					<button className="form__btn" onClick={onClickHandler}>Send</button>
				</div>
			</div>
		</div>
	)
}