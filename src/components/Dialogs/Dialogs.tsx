import React from "react";
import UserImg from "../../img/ava_default.jpg";

export function Dialogs() {
	return (
		<div className="dialogs">
			<div className="message" >
				<div className="imgWrap">
					<img className="messageImg" src={UserImg} alt="user_img"/>
				</div>
				<div className="messageWrap">
					<div className="userName">
						{`props.name`}
					</div>
					<div className="userTxt">
						{`props.message`}
					</div>
					<div className="messageTime">
						{`props.time`}
					</div>
				</div>
			</div>
			<div className="new-messages">
				<img src={UserImg} alt="user_img"/>
				<div className="dialogs__box">
					<div className="dialogs__user-name">
						Sergey Rimsha
					</div>
					<textarea name="dialogs-message" placeholder="your message..." >
				</textarea>
					<div className="dialogs__btn">
						<button>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}