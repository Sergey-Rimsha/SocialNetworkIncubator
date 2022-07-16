import React from "react";

import s from './Post.module.scss';

import UserImg from "../../../assets/img/ava_default.jpg";

type InPost = {
	id: number
	message: string
	likesCount: number
}

export function Post(props: InPost) {

	return (
		<div className={s.posts}>
			<div className={s.post}>
				<div className={s.post__user}>
					<img src={UserImg} alt="user_img"/>
				</div>
				<div className={s.post__text}>
					{props.message}
				</div>
				<div className={s.post__like}>
					{`likes: ${props.likesCount}`}
				</div>
			</div>
		</div>
	)
}




