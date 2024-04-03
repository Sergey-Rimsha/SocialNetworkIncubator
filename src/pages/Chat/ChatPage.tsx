import { FC } from 'react';

import { AllChat } from './AllChat/AllChat';
import s from './ChatPage.module.scss';
import { Dialogs } from './Dialogs/Dialogs';

export type ChatPropsType = {
  onChangeHandler: (text: string) => void;
  sendMessage: (userChat: string, text: string) => void;
};

export const ChatPage: FC<ChatPropsType> = ({ onChangeHandler, sendMessage }) => {
  return (
    <div className={s.chatPage}>
      <AllChat />
      <Dialogs onChangeHandler={onChangeHandler} sendMessage={sendMessage} />
    </div>
  );
};
