import { FC } from 'react';

import s from './Post.module.scss';

import UserImg from '@/shared/assets/img/ava_default.jpg';

type InPost = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  message: string;
  likesCount: number;
};

export const Post: FC<InPost> = ({ message, likesCount }) => {
  return (
    <div className={s.posts}>
      <div className={s.post}>
        <div className={s.post__user}>
          <img src={UserImg} alt="user_img" />
        </div>
        <div className={s.post__text}>{message}</div>
        <div className={s.post__like}>{`likes: ${likesCount}`}</div>
      </div>
    </div>
  );
};
