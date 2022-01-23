import React from "react";
import UserImg from "../../../img/ava_default.jpg";
import {ActionType} from "../../../redux/store";
import {addMessageChatAC, onChangeMessChatAC} from "../../../redux/reducerDialogs";

type NewMessagesPropsType = {
	changeMessChat: string
	dispatch: (action: ActionType) => void
}


export function NewMessages(props: NewMessagesPropsType) {

	const addNewMessage = () => {
		props.dispatch(addMessageChatAC())
	}

	const onChangeMess = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		let text: string = event.currentTarget.value;
		if (text) {
			props.dispatch(onChangeMessChatAC(text))
		}

	}

	return (
		<div className="new-messages">
			<img src={UserImg} alt="user_img"/>
			<div className="dialogs__box">
				<div className="dialogs__user-name">
					Sergey Rimsha
				</div>
				<textarea value={props.changeMessChat} onChange={onChangeMess} name="dialogs-message" placeholder="your message..." />
				<div className="dialogs__btn">
					<button onClick={addNewMessage} >Send</button>
				</div>
			</div>
		</div>
	)
}