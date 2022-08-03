import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ContactsType} from "../../../store/reducers/profileReducer";

import s from './EditeProfile.module.scss';


export const EditeProfile = () => {

	const contacts = useSelector<AppRootStateType, ContactsType>(state => state.profilePage.user.contacts);


	return (
		<div className={s.editeProfile}>
			<div className={s.editeProfile__title}>
				Edite Mode
			</div>
			<div className={s.editeProfile__block}>
				<div className={s.editeProfile__contacts}>
					<div className={s.editeProfile__subTitle}>
						Contacts:
					</div>
					{
						Object.keys(contacts).map((key, i) => {
							return (
								<>
									<div className={s.editeProfile__contact}>
										{key}:
									</div>
									<input name={key} placeholder={key} />
								</>
							)
						})
					}

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