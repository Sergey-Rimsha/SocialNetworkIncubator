import React from "react";
import UserImg from "../../assets/img/ava_default.jpg";
import {NavLink} from "react-router-dom";

import s from './User.module.scss';

type UserPropsType = {
	id: number
	name: string
	status: string | null
	followed: boolean
	userPhoto: string | null
	onFollowUsers: (userId: number) => void
	unFollowUsers: (userId: number) => void

	toggleUserId: number
	toggleButton: boolean
}



export function User(props: UserPropsType) {

	const onClickHandlerFollow = () => {
		props.onFollowUsers(props.id)
	}
	const onClickHandlerUnFollow = () => {
		props.unFollowUsers(props.id)
	}

	const userPhotoSrc = props.userPhoto || UserImg;

	const btnActive = props.id === props.toggleUserId ? props.toggleButton : false;

	return (
		<div className={s.userBox}>

			<NavLink to={`/profile/${props.id}`}>
				<div className={s.userImg}>
					<img src={userPhotoSrc} alt="userPhoto"/>
				</div>
			</NavLink>

			<div className={s.userInfo}>
				<div className={s.userInfo__name}>{props.name}</div>
				<div>status: {props.status}</div>
			</div>
			{/*<div className="user-info">*/}
			{/*	<div>country: {"props.country"}</div>*/}
			{/*	<div>city: {"props.city"}</div>*/}
			{/*</div>*/}
			{
				!props.followed ?
					<button disabled={btnActive} onClick={onClickHandlerFollow}>follow</button> :
					<button disabled={btnActive} onClick={onClickHandlerUnFollow}>unfollow</button>
			}

		</div>
	)
}