import React from "react";
import {UserType} from "../../redux/reducerUsers";
import {User} from "./User";
import {Pagination} from "../Pagination/Pagination";

type UsersPagePropsType = {
    users: Array<UserType>,
    totalCount: number
    userPageSize: number
    currentPage: number
    onClickHandler: (userId: number) => void
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
                            name={u.name}
                            status={u.status}
                            userPhoto={u.photos.small}
                            // country={u.country}
                            // city={u.city}
                            followed={u.followed}
                            onClickHandler={props.onClickHandler}
                        />
                    )
                })
            }
        </div>
    )
}