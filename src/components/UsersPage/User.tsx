import React from "react";
import {UserType} from "../../redux/reducerUsers";
import UserImg from "../../img/ava_default.jpg";

type UserPropsType = {
	onClickHandler: (userId: number, follow: boolean) => void
}

export function User(props: UserType & UserPropsType) {

	const onClickHandlerFollow = () => {
		props.onClickHandler(props.id, props.follow)
	}

	return (
		<div className="user-box">
			<div className="user-img">
				<img src={UserImg} alt=""/>
			</div>
			<div className="user-info">
				<div>{props.name}</div>
				<div>status: {props.status}</div>
			</div>
			<div className="user-info">
				<div>country: {props.country}</div>
				<div>city: {props.city}</div>
			</div>

			<button onClick={onClickHandlerFollow}>{!props.follow ? 'follow' : 'unfollow' }</button>

		</div>
	)
}