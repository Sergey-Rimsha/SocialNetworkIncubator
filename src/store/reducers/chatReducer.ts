export type ChatStateType = {
  [userChat: string]: Array<MessageChatType>;
};

export type MessageChatType = {
  id: string;
  message: string;
  user_id: string;
};

export type ActionChatType = ReturnType<typeof setMessageChat>;

const initialState: ChatStateType = {
  'Nika Jerrardo': [
    { id: '1', message: 'Hey', user_id: 'Nika Jerrardo' },
    { id: '2', message: 'How are you?', user_id: 'Nika Jerrardo' },
    { id: '3', message: 'What is your name?', user_id: 'Nika Jerrardo' },
    { id: '4', message: 'How old are you?', user_id: 'Nika Jerrardo' },
    { id: '5', message: 'Where is my offer?', user_id: 'Nika Jerrardo' },
    {
      id: '6',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis',
      user_id: 'my',
    },
  ],
  'Luy Robin': [
    { id: '1', message: 'Hey', user_id: 'Luy Robin' },
    { id: '2', message: 'How are you?', user_id: 'Luy Robin' },
    { id: '3', message: 'How old are you?', user_id: 'Luy Robin' },
    { id: '4', message: 'What is your name?', user_id: 'Luy Robin' },
    { id: '5', message: 'Where is my offer?', user_id: 'Luy Robin' },
    {
      id: '6',
      message: 'Lorem ipsum dolor sit amet',
      user_id: 'my',
    },
  ],
};

// eslint-disable-next-line default-param-last
export const chatReducer = (state = initialState, action: ActionChatType): ChatStateType => {
  switch (action.type) {
    case 'CHAT/SET-MESSAGE': {
      const newId = state[action.userChat].length + 1;
      const newMassage: MessageChatType = { id: `${newId}`, message: action.text, user_id: action.user_id };

      return {
        ...state,
        [action.userChat]: [...state[action.userChat], newMassage],
      };
    }

    default:
      return state;
  }
};

// eslint-disable-next-line camelcase,@typescript-eslint/explicit-function-return-type
export const setMessageChat = (userChat: string, text: string, user_id: string) => {
  return {
    type: 'CHAT/SET-MESSAGE',
    userChat,
    text,
    // eslint-disable-next-line camelcase
    user_id,
  };
};
