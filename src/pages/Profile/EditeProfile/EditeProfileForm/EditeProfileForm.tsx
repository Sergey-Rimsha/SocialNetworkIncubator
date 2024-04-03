import { FC } from 'react';

import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import s from '../EditeProfile.module.scss';

import { ContactsType, UserType } from '@/store/reducers/profileReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

export type FormikErrorType = {};

type EditeProfileFormPropsType = {
  onClickHandlerEditeMode: (edite: boolean) => void;
};

export const EditeProfileForm: FC<EditeProfileFormPropsType> = ({ onClickHandlerEditeMode }) => {
  const contacts = useSelector<AppRootStateType, ContactsType>(state => state.profilePage.user.contacts);

  const user = useSelector<AppRootStateType, UserType>(state => state.profilePage.user);

  const refContacts = {
    ...contacts,
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const key in refContacts) {
    if (refContacts[key] === null) {
      refContacts[key] = '';
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: user.fullName,
      aboutMe: user.aboutMe,
      lookingForAJob: user.lookingForAJob,
      lookingForAJobDescription: user.lookingForAJobDescription,
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
      ...refContacts,
    },
    validate: () => {
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
    onSubmit: () => {
      /* TODO need to fix type AppDispatch */
      // dispatch(
      //   putProfileTC({
      //     userId: `${userId}`,
      //     fullName: values.fullName,
      //     aboutMe: values.aboutMe || '',
      //     lookingForAJob: values.lookingForAJob,
      //     lookingForAJobDescription: values.lookingForAJobDescription,
      //     contacts: {
      //       github: values.github,
      //       vk: values.vk,
      //       facebook: values.facebook,
      //       instagram: values.instagram,
      //       twitter: values.twitter,
      //       website: values.website,
      //       youtube: values.youtube,
      //       mainLink: values.mainLink,
      //     },
      //   }),
      // );
      formik.resetForm();
      onClickHandlerEditeMode(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.editeProfile__subTitle}>
        Contacts:
        <div>
          {Object.keys(formik.values).map((key, i) => {
            let typeInput = 'text';

            if (key === 'lookingForAJob') {
              typeInput = 'checkbox';
            }

            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i}>
                <span className={s.editeProfile__contact}>{key}:</span>
                <input type={typeInput} placeholder={key} {...formik.getFieldProps(`${key}`)} />
              </div>
            );
          })}
        </div>
      </div>

      <button type="submit">save</button>
    </form>
  );
};
