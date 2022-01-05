import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {

	return (
		<section className="profile">
			<div className="user">
				<div className="user__img">
					<img src={UserImg} alt="user-img"/>
				</div>
				<ProfileInfo />
			</div>
			<Post />
		</section>
	)
}


