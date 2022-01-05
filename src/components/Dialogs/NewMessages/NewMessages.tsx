import React from "react";
import UserImg from "../../../img/ava_default.jpg";

export function NewMessages() {

	return (
		<div className="new-messages">
			<img src={UserImg} alt="user_img"/>
			<div className="dialogs__box">
				<div className="dialogs__user-name">
					Sergey Rimsha
				</div>
				<textarea name="dialogs-message" placeholder="your message..." />
				<div className="dialogs__btn">
					<button>Send</button>
				</div>
			</div>
		</div>
	)
}