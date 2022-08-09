import s from "../EditeProfile.module.scss";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";
import {ContactsType, UserType} from "../../../../store/reducers/profileReducer";
import {useFormik} from "formik";

export type FormikErrorType = {}


export const EditeProfileForm = () => {


	const contacts = useSelector<AppRootStateType, ContactsType>(state => state.profilePage.user.contacts);

	const user = useSelector<AppRootStateType, UserType>(state => state.profilePage.user);

	const formik = useFormik({
		initialValues: {
			fullName: user.fullName,
			lookingForAJob: user.lookingForAJob,
			lookingForAJobDescription: user.lookingForAJobDescription,
			contacts: {
				"github": '',
				"vk": '',
				"facebook": '',
				"instagram": '',
				"twitter": '',
				"website": '',
				"youtube": '',
				"mainLink": '',
				// ...contacts
			},
		},
		validate: (values) => {
			const errors: FormikErrorType = {};
			// if (!values.email) {
			// 	errors.email = 'Required';
			// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			// 	errors.email = 'Invalid email address';
			// }

			// if (!values.password) {
			// 	errors.password = 'Пароль обязателен';
			// } else if (values.password.length < 3) {
			// 	errors.password = 'Пароль должен быть больше 3 символов';
			// }

			return errors;
		},
		onSubmit: values => {
			// props.onHandlerSubmit(values)
			console.log(values)
			formik.resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>

			<div className={s.editeProfile__subTitle}>
				Profile:
				<>
					<div>
						<span className={s.editeProfile__contact}>
							fullName:
						</span>

						<input
							type={"checkbox"}
							placeholder={'fullName'}
							{...formik.getFieldProps(`fullName`)}
						/>
					</div>

					<div>
						<span className={s.editeProfile__contact}>
							lookingForAJob:
						</span>
						<input
							placeholder={'lookingForAJob'}
							{...formik.getFieldProps(`lookingForAJob`)}
						/>
					</div>

					<div>
						<span className={s.editeProfile__contact}>
							lookingForAJobDescription:
						</span>
						<input
							placeholder={'lookingForAJobDescription'}
							{...formik.getFieldProps(`lookingForAJobDescription`)}
						/>
					</div>
				</>
			</div>


			<div className={s.editeProfile__subTitle}>
				Contacts:
				<div>
					{
						Object.keys(formik.values.contacts).map((key, i) => {
							return (
								<div key={i}>
									<span className={s.editeProfile__contact}>
										{key}:
									</span>
									<input
										id={key}
										name={key}
										type="text"
										placeholder={key}
										onChange={formik.handleChange}
										value={formik.values.contacts[key]}
									/>
								</div>
							)
						})
					}
				</div>
			</div>


			<button type='submit'>save</button>
		</form>
	)
}