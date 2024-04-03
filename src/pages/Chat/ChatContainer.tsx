import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ChatPage } from './ChatPage';

import { ChatStateType, setMessageChat } from '@/store/reducers/chatReducer.ts';
import { onChangeMessChatAC } from '@/store/reducers/dialogsReducer.ts';
import { AppDispatch, AppRootStateType } from '@/store/store.ts';

export const ChatContainer: FC = () => {
  const chat = useSelector<AppRootStateType, ChatStateType>(state => state.chat);
  const chatUsers = Object.keys(chat);

  const navigate = useNavigate();

  const dispatch = AppDispatch();

  const onChangeHandler = (text: string): void => {
    // @ts-ignore
    dispatch(onChangeMessChatAC(text));
  };

  const sendMessage = (userChat: string, text: string): void => {
    // test my id
    // eslint-disable-next-line camelcase
    const user_id = 'my';

    if (setMessageChat) {
      dispatch(setMessageChat(userChat, text, user_id));
    }
    dispatch(onChangeMessChatAC(''));
  };

  useEffect(() => {
    if (chatUsers[0]) {
      navigate(`/chat/${chatUsers[0]}`);
    }
  }, [chatUsers, navigate]);

  return <ChatPage onChangeHandler={onChangeHandler} sendMessage={sendMessage} />;
};
