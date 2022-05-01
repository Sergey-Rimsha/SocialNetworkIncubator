import React, {useState} from "react";
import {UserType} from "../../../redux/profileReducer";

type ProfileInfoPropsType = {
	status: string
	user: UserType
}

export function ProfileInfo(props: ProfileInfoPropsType) {

	const [editMode, setEditMode] = useState<boolean>(false);

	const showContacts = () => {
		return (
			Object.keys(props.user.contacts).map(key => {
				if (props.user.contacts[key]) {
					return (
						<div key={key} className="user__web-site">
							<a href={`https://${props.user.contacts[key]}`}>{key}</a>
						</div>
					)
				}
			})
		)
	}

	const onActiveEditMode = () => {
		setEditMode(true)
	}

	const onBlurEditMode = () => {
		setEditMode(false)
	}

	const showStatus = () => {

		return (
			<>
				{!editMode ?
					<span onDoubleClick={onActiveEditMode}>{props.status}</span>
					: <input autoFocus={true} onBlur={onBlurEditMode} value={props.status}/>
				}
			</>
		)
	}

	return (
		<div className="user__info">
			<div className="user__name">
				{props.user.fullName || 'Sergey Rimsha'}
			</div>
			<div className="user__status">
				status: {showStatus()}
			</div>
			<div className="user__aboutMe">
				{props.user.aboutMe || ''}
			</div>
			{props.user.lookingForAJob}
			{props.user.lookingForAJobDescription}
			<div className="user__lookingForAJob">
				{props.user.lookingForAJob ? props.user.lookingForAJobDescription : ''}
			</div>
			{/*<div className="user__education">*/}
			{/*	БГПК*/}
			{/*</div>*/}
			{/*<div className="user__web-site">*/}
			{/*	<a href="https://github.com/Sergey-Rimsha">https://github.com/Sergey-Rimsha</a>*/}
			{/*</div>*/}
			{showContacts()}
		</div>
	)
}