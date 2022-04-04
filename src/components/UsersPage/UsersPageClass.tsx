import React from "react";
import * as axios from "axios";
import {StateUsersType} from "../../redux/reducerUsers";
import {User} from "./User";

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

    onPageChanged = (pageNumber:number, countUsers: number) => {
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

        const userPageSize = this.props.usersPage.page.userPageSize;
        const pageUsersCount = Math.ceil(this.props.usersPage.totalCount / userPageSize);
        const currentPage = this.props.usersPage.page.currentPage;


        console.log(currentPage);
        console.log(this.props.usersPage)
        let page = [];

        for (let i = 1; i < pageUsersCount; i++) {
            page.push(i);
        }

        return (
            <div>
                <div>
                    {page.map(p => {
                        if (currentPage + 5 > p) {
                            return (
                                <span>
                                    ..
                                    <span onClick={() => this.onPageChanged(p, userPageSize)}>{p}</span>
                                </span>
                            )
                        } else {
                            return ''
                        }
                    })}
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