import React from "react";
import {UserType} from "../../store/reducers/usersReducer";
import {User} from "./User";
import {Pagination} from "../../components/Pagination/Pagination";

type UsersPagePropsType = {
    users: Array<UserType>,
    totalCount: number
    userPageSize: number
    currentPage: number
    toggleUserId: number
    toggleButton: boolean
    onFollowUsers: (userId: number) => void
    unFollowUsers: (userId: number) => void
    onPageChanged: (pageNumber:number, countUsers?: number) => void
}

export const UsersPage = (props: UsersPagePropsType) => {
    return (
        <div>
            <div>
                <Pagination
                    totalCount={props.totalCount}
                    userPageSize={props.userPageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
            </div>

            {
                props.users.map((u) => {
                    return (
                       <User
                           key={u.id}
                           id={u.id}
                           toggleUserId={props.toggleUserId}
                           toggleButton={props.toggleButton}
                           name={u.name}
                           status={u.status}
                           userPhoto={u.photos.small}
                           // country={u.country}
                           // city={u.city}
                           followed={u.followed}
                           onFollowUsers={props.onFollowUsers}
                           unFollowUsers={props.unFollowUsers}
                       />
                    )
                })
            }
        </div>
    )
}