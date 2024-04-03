import { FC, lazy, Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginContainer } from '../../pages/Auth/LoginContainer';
import { Layout } from '../Layout';

import { WithAuthRedirect } from '@/shared/utils/hoc/WithAuthRedirect';

const ProfileContainer = lazy(() =>
  import('../../pages/Profile/ProfileContainer').then(({ ProfileContainer }) => ({ default: ProfileContainer })),
);

const DialogsContainer = lazy(() =>
  import('../../pages/Dialogs/DialogsContainer').then(({ DialogsContainer }) => ({ default: DialogsContainer })),
);

const UsersPageContainer = lazy(() =>
  import('../../pages/UsersPage/UsersPageContainer').then(({ UsersPageContainer }) => ({
    default: UsersPageContainer,
  })),
);

const ChatContainer = lazy(() =>
  import('../../pages/Chat/ChatContainer').then(({ ChatContainer }) => ({ default: ChatContainer })),
);

export const PathURL = {
  profile: 'profile',
  dialogs: 'dialogs',
  users: 'users',
  auth: 'auth',
  chat: 'chat',
};

export const Routing: FC = () => {
  return (
    <Suspense fallback={<>loading....</>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={PathURL.profile} />} />
          <Route
            path={PathURL.profile}
            element={
              <WithAuthRedirect>
                <ProfileContainer />
              </WithAuthRedirect>
            }
          >
            <Route
              path=":userId"
              element={
                <WithAuthRedirect>
                  <ProfileContainer />
                </WithAuthRedirect>
              }
            />
          </Route>
          <Route
            path={PathURL.dialogs}
            element={
              <WithAuthRedirect>
                <DialogsContainer />
              </WithAuthRedirect>
            }
          />
          <Route
            path={PathURL.users}
            element={
              <WithAuthRedirect>
                <UsersPageContainer />
              </WithAuthRedirect>
            }
          />
          <Route
            path={PathURL.chat}
            element={
              <WithAuthRedirect>
                <ChatContainer />
              </WithAuthRedirect>
            }
          >
            <Route
              path=":userChat"
              element={
                <WithAuthRedirect>
                  <ChatContainer />
                </WithAuthRedirect>
              }
            />
          </Route>
          <Route path={PathURL.auth} element={<LoginContainer />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
