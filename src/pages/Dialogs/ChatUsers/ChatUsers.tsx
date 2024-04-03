import { FC } from 'react';

import { Link } from 'react-router-dom';

import UserImg from '@/shared/assets/img/ava_default.jpg';

type InUser = {
  userId: number;
  userName: string;
};

export const ChatUsers: FC<InUser> = ({ userId, userName }) => {
  return (
    <Link to={`/${userId}`}>
      <div className="chat-users">
        <img src={UserImg} alt="user_img" />
        <div className="user-name">{userName}</div>
      </div>
    </Link>
  );
};
