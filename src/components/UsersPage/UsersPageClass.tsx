import React from "react";
import * as axios from "axios";
import {StateUsersType} from "../../redux/reducerUsers";
import {User} from "./User";
import {Pagination} from "../Pagination/Pagination";

type UsersPagePropsType = {
    usersPage: StateUsersType
    followedUser: (userId: number) => void
    addUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
}

export class UsersPageClass extends React.Component<UsersPagePropsType> {


    // users?page=3600&count=5

    componentDidMount() {
        const axios = require('axios');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response: axios.AxiosResponse) => {
                this.props.addUsers(response.data);
                console.log(response.data);
            });
        console.log(this.props.usersPage)
    }

    onPageChanged = (pageNumber:number, countUsers = 10) => {
        this.props.setCurrentPage(pageNumber);
        const axios = require('axios');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${countUsers}`)
            .then((response: axios.AxiosResponse) => {
                this.props.addUsers(response.data);
                console.log(response.data);
            })
    }

    onClickHandler = (userId: number) => {
        this.props.followedUser(userId);
    }


    render() {

        return (
            <div>
                <div>
                    <Pagination
                        totalCount={this.props.usersPage.totalCount}
                        userPageSize={this.props.usersPage.page.userPageSize}
                        currentPage={this.props.usersPage.page.currentPage}
                        onPageChanged={this.onPageChanged}
                    />
                </div>
                {
                    this.props.usersPage.items.map((u,) => {
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
                                onClickHandler={this.onClickHandler}
                            />
                        )
                    })
                }
            </div>
        )
    }
}