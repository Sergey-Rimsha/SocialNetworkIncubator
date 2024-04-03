import { FC } from 'react';

import { useFormik } from 'formik';

import s from './Login.module.scss';

import { Button } from '@/components/Button/Button.tsx';
import SuperCheckbox from '@/components/SuperCheckbox/SuperCheckbox.tsx';

type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

type FormikStateType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type PropsLoginType = {
  onClickLogout: () => void;
  onHandlerSubmit: (data: FormikStateType) => void;
};

export const Login: FC<PropsLoginType> = ({ onHandlerSubmit, onClickLogout }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Пароль обязателен';
        // eslint-disable-next-line no-magic-numbers
      } else if (values.password.length < 3) {
        errors.password = 'Пароль должен быть больше 3 символов';
      }

      return errors;
    },
    onSubmit: values => {
      onHandlerSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <section className={s.auth}>
      <div className={s.auth__wrap}>
        <h3>Login form</h3>
        <div className={s.auth__description}>
          Тестовые Email и Password
          <div>Email: free@samuraijs.com</div>
          <div>Password: free</div>
        </div>

        <form className={s.auth__form} onSubmit={formik.handleSubmit}>
          <input
            className={s.auth__input}
            id="email"
            placeholder="Email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && <span className={s.auth__error}>{formik.errors.email}</span>}
          <input
            className={s.auth__input}
            id="password"
            placeholder="Password"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <span className={s.auth__error}>{formik.errors.password}</span>
          )}
          <div className={s.auth__checkbox}>
            <SuperCheckbox
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            >
              remember me
            </SuperCheckbox>
          </div>
          <div className={s.auth__btnWrap}>
            <Button variant="primary" type="submit" value="login" disabled={false} />
            <Button variant="secondary" type="button" value="logout" disabled={false} onClick={onClickLogout} />
          </div>
        </form>
      </div>
    </section>
  );
};
