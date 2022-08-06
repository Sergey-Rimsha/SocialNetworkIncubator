import {Button} from "../../../../components/Button/Button";
import React, {ChangeEvent, useState} from "react";
import s from "../../Profile.module.scss";

type LoadingPhotoPropsType = {
	saveSettings: (photo: File) => void
}

export const LoadingPhoto = React.memo((props: LoadingPhotoPropsType) => {

	console.log('render LoadingPhoto')

	const [photo, setPhoto] = useState<File>();
	const [editMode, setEditMode] = useState<boolean>(false);

	const savePhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files) {
			setPhoto(e.currentTarget.files[0])
		}
	}

	const onSaveSettings =(photo: File) => {
		props.saveSettings(photo);
	}

	const onHandleClickSaveSettings =() => {
		if (photo) {
			onSaveSettings(photo);
			setEditMode(false);
			setPhoto(undefined);
		}
	}

	const onHandlerEditeMode = () => {
		setEditMode(true);
	}
	return (
		<>
			{
				!editMode ?
					<Button
						onClick={onHandlerEditeMode}
						color={'primary'}
						value={'Edit'}/> :
					<div className={s.user__editeBlock}>
						<input
							id='photo'
							name={'photo'}
							type={"file"}
							accept='image/png, image/jpeg'
							onChange={savePhoto}
						/>
						<Button
							onClick={onHandleClickSaveSettings}
							color={'secondary'}
							value={'save'}/>
					</div>
			}
		</>
	)
})