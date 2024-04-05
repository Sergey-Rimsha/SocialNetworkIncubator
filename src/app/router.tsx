import { lazy } from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AuthLayout } from '@/app/layouts/auth-layout/auth-layout.tsx';
import { MainLayout } from '@/app/layouts/main-layout/main-layout.tsx';
import { LoginContainer } from '@/pages/Auth/LoginContainer.tsx';

const ProfileContainer = lazy(() =>
  import('@/pages/Profile/ProfileContainer').then(({ ProfileContainer }) => ({ default: ProfileContainer })),
);

const DialogsContainer = lazy(() =>
  import('@/pages/Dialogs/DialogsContainer').then(({ DialogsContainer }) => ({ default: DialogsContainer })),
);

const UsersPageContainer = lazy(() =>
  import('@/pages/UsersPage/UsersPageContainer').then(({ UsersPageContainer }) => ({
    default: UsersPageContainer,
  })),
);

const ChatContainer = lazy(() =>
  import('@/pages/Chat/ChatContainer').then(({ ChatContainer }) => ({ default: ChatContainer })),
);

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/profile" /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/profile', element: <ProfileContainer /> },
      { path: '/profile/:userId', element: <ProfileContainer /> },
      { path: '/dialogs', element: <DialogsContainer /> },
      { path: '/users', element: <UsersPageContainer /> },
      { path: '/chat', element: <ChatContainer /> },
      { path: '/chat/:userChat', element: <ChatContainer /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ path: '/auth/login', element: <LoginContainer /> }],
  },
  { path: '*', element: <div>page not found</div> },
]);
