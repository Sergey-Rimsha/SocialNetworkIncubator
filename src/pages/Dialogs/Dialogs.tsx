import { FC } from 'react';

import { ChatUsers } from './ChatUsers/ChatUsers';
import { SendMessage } from './SendMessage/SendMessage';

import UserImg from '@/shared/assets/img/ava_default.jpg';
import { DialogsType, InMessage, InUser } from '@/store/reducers/dialogsReducer.ts';

type PropsType = {
  dialogsPage: DialogsType;
  sendMessage: () => void;
  onChangeHandler: (text: string) => void;
};

export const Dialogs: FC<PropsType> = ({ dialogsPage, onChangeHandler, sendMessage }) => {
  const message = dialogsPage.messages.map((mess: InMessage, i) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={i} className="message">
        <div className="imgWrap">
          <img className="messageImg" src={UserImg} alt="user_img" />
        </div>
        <div className="messageWrap">
          <div className="userName">{mess.name}</div>
          <div className="userTxt">{mess.message}</div>
          <div className="messageTime">props.time</div>
        </div>
      </div>
    );
  });

  return (
    <div className="dialogs-wrap">
      <div className="user-chat-wrap">
        {dialogsPage.chatUsers.map((user: InUser, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <ChatUsers key={i} userId={user.id} userName={user.name} />;
        })}
      </div>
      <div className="dialogs">
        {message}
        <SendMessage
          changeMessChat={dialogsPage.changeMessChat}
          sendMessage={sendMessage}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
};
