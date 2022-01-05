import React from "react";
import UserImg from "../../../img/ava_default.jpg";
import {Link} from "react-router-dom";

export function ChatUsers(props:any) {
	console.log(props)
	return (
		<>
			<Link to={`$/${props.userId}`}>
				<div className="chat-users">
					<img src={UserImg} alt="user_img"/>
					<div className="user-name">{props.userName}</div>
				</div>
			</Link>
		</>
	)
}
