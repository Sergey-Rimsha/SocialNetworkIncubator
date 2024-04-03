import { FC } from 'react';

import { User } from './User';

import { Pagination } from '@/shared/ui';
import { UserType } from '@/store/reducers/usersReducer.ts';

type UsersPagePropsType = {
  users: Array<UserType>;
  totalCount: number;
  userPageSize: number;
  currentPage: number;
  toggleUserId: number;
  toggleButton: boolean;
  onFollowUsers: (userId: number) => void;
  unFollowUsers: (userId: number) => void;
  onPageChanged: (pageNumber: number, countUsers?: number) => void;
};

export const UsersPage: FC<UsersPagePropsType> = ({
  users,
  userPageSize,
  onPageChanged,
  onFollowUsers,
  unFollowUsers,
  toggleUserId,
  currentPage,
  toggleButton,
  totalCount,
}) => {
  return (
    <div>
      <div>
        <Pagination
          totalCount={totalCount}
          userPageSize={userPageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
      </div>

      {users.map(u => {
        return (
          <User
            key={u.id}
            id={u.id}
            toggleUserId={toggleUserId}
            toggleButton={toggleButton}
            name={u.name}
            status={u.status}
            userPhoto={u.photos.small}
            // country={u.country}
            // city={u.city}
            followed={u.followed}
            onFollowUsers={onFollowUsers}
            unFollowUsers={unFollowUsers}
          />
        );
      })}
    </div>
  );
};
