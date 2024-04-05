import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  aboutMe: string | null;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  userId: number;
  contacts: Contacts;
  photos: Photos;
};
export type Photos = {
  large: string;
  small: string;
};
export type Contacts = {
  [key: string]: string;
};
export type Post = {
  id: number;
  message: string;
  likesCount: number;
};

const initialState = {
  status: '' as string,
  user: {
    aboutMe: '',
    fullName: '',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    userId: 2,
    photos: {
      large: '',
      small: '',
    },
    contacts: {
      key: '',
    },
  } as User,
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Hello', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ] as Post[],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfilePost(state, action: PayloadAction<{ message: string }>) {
      const id: number = state.posts.length + 1;

      state.posts.push({ id, message: action.payload.message, likesCount: 0 });
    },
    setProfileUser(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user;
    },
    setProfileStatus(state, action: PayloadAction<{ status: string }>) {
      state.status = action.payload.status;
    },
  },
});
