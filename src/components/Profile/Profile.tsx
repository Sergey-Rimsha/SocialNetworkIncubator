import React from "react";
import UserImg from "../../img/ava_default.jpg";
import Post from "./Post";

const Profile = () => {

	return (
		<section className="profile">
			<div className="user">
				<div className="user__img">
					<img src={UserImg} alt="user-img"/>
				</div>
				<div className="user__info">
					<div className="user__name">
						Sergey Rimsha
					</div>
					<div className="user__date-birth">
						07.08.1994
					</div>
					<div className="user__city">
						City: Borysaw
					</div>
					<div className="user__education">
						БГПК
					</div>
					<div className="user__web-site">
						<a href="https://github.com/Sergey-Rimsha">https://github.com/Sergey-Rimsha</a>
					</div>
				</div>
			</div>
			<Post />
		</section>
	)
}

export default Profile