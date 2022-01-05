import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {ChatUsers} from "./ChatUsers/ChatUsers";
import {NewMessages} from "./NewMessages/NewMessages";

export function Dialogs(props: any ) {

	console.log(props)


	return (
		<div className="dialogs-wrap">
			<div className="user-chat-wrap">
				{
					props.dialogs.chatUsers.map((user:any) => {
						return (
							<ChatUsers userId={user.id} userName={user.name} />
						)
					})
				}
			</div>
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
				<NewMessages />
			</div>
		</div>
	)
}


