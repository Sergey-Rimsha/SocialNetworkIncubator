import React from "react";

import s from './EditeProfile.module.scss';
import {EditeProfileForm} from "./EditeProfileForm/EditeProfileForm";
import {Button} from "../../../components/Button/Button";


export const EditeProfile = () => {

	return (
		<div className={s.editeProfile}>
			<div className={s.editeProfile__title}>
				Edite Mode
			</div>
			<div className={s.editeProfile__block}>
				<div className={s.editeProfile__contacts}>

					<EditeProfileForm/>
				</div>
			</div>
		</div>
	)
}

// userId: required(integer)
// lookingForAJob: required(boolean)
// lookingForAJobDescription: required(string)
// fullName: required(string)
// contacts: required(object)
// github: required(string)
// vk: required(string)
// facebook: required(string)
// instagram: required(string)
// twitter: required(string)
// website: required(string)
// youtube: required(string)
// mainLink: required(string)