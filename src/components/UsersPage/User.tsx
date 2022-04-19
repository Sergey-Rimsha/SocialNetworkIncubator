import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {NavLink} from "react-router-dom";

type UserPropsType = {
	id: number
	name: string
	status: string | null
	followed: boolean
	userPhoto: string | null
	onFollowUsers: (userId: number) => void
	unFollowUsers: (userId: number) => void
}



export function User(props: UserPropsType) {

	const onClickHandlerFollow = () => {
		props.onFollowUsers(props.id)
	}
	const onClickHandlerUnFollow = () => {
		props.unFollowUsers(props.id)
	}

	const userPhotoSrc = props.userPhoto || UserImg;

	return (
		<div className="user-box">

			<NavLink to={`/profile/${props.id}`}>
				<div className="user-img">
					<img src={userPhotoSrc} alt="userPhoto"/>
				</div>
			</NavLink>

			<div className="user-info">
				<div className="user-info__name">{props.name}</div>
				<div>status: {props.status}</div>
			</div>
			{/*<div className="user-info">*/}
			{/*	<div>country: {"props.country"}</div>*/}
			{/*	<div>city: {"props.city"}</div>*/}
			{/*</div>*/}
			{
				!props.followed ?
					<button onClick={onClickHandlerFollow}>follow</button> :
					<button onClick={onClickHandlerUnFollow}>unfollow</button>
			}

		</div>
	)
}