import { ChangeEvent, FC } from 'react';

import UserImg from '../../../assets/img/ava_default.jpg';

type NewMessagesPropsType = {
  changeMessChat: string;
  sendMessage: () => void;
  onChangeHandler: (text: string) => void;
};

export const SendMessage: FC<NewMessagesPropsType> = ({ changeMessChat, sendMessage, onChangeHandler }) => {
  const onClickHandler = (): void => {
    if (changeMessChat) {
      sendMessage();
    }
  };

  const onChangeHandlerMess = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const text: string = e.currentTarget.value;

    onChangeHandler(text);
  };

  return (
    <div className="new-messages">
      <img className="new-messages__img" src={UserImg} alt="user_img" />
      <div className="new-messages__dialogs">
        <div className="new-messages__dialogs_name">Sergey Rimsha</div>
        <div className="form">
          <textarea
            className="form__textArea"
            value={changeMessChat}
            onChange={onChangeHandlerMess}
            name="dialogs-message"
            placeholder="your message..."
          />
          <button type="button" className="form__btn" onClick={onClickHandler}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
