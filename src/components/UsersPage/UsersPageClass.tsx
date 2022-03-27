import React from "react";
import {User} from "./User";
import * as axios from "axios";
import {StateUsersType} from "../../redux/reducerUsers";

type UsersPagePropsType = {
    usersPage: StateUsersType
    followedUser: (userId: number) => void
    addUsers: (users: any) => void
}

export class UsersPageClass extends React.Component<UsersPagePropsType> {


    // users?page=3600&count=5

    componentDidMount() {
        const axios = require('axios');
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: axios.AxiosResponse)=> {
                this.props.addUsers(response.data.items);
            })
    }


    onClickHandler = (userId: number) => {

        this.props.followedUser(userId);
    }

    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map((u, ) => {
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