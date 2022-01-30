import React from "react";
import UserImg from "../../../img/ava_default.jpg";


type NewMessagesPropsType = {
	changeMessChat: string
	sendMessage: () => void
	onChangeHandler: (text: string) => void
}


export function SendMessage (props: NewMessagesPropsType) {

	const onClickHandler = () => {
		props.sendMessage()
	}

	const onChangeHandlerMess = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
		let text: string = e.currentTarget.value;
		if (text) {
			props.onChangeHandler(text)
		}

	}

	return (
		<div className="new-messages">
			<img src={UserImg} alt="user_img"/>
			<div className="dialogs__box">
				<div className="dialogs__user-name">
					Sergey Rimsha
				</div>
				<textarea value={props.changeMessChat} onChange={onChangeHandlerMess} name="dialogs-message" placeholder="your message..." />
				<div className="dialogs__btn">
					<button onClick={onClickHandler} >Send</button>
				</div>
			</div>
		</div>
	)
}