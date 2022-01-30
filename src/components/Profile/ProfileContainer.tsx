import React from "react";

import {StoreType} from "../../redux/store";
import {Profile} from "./Profile";
import {addPostAC, onChangeMessPostAC} from "../../redux/reducerProfile";

type StateType = {
	store: StoreType
}

export function ProfileContainer(props: StateType) {

	const addNewPost = () => {
		props.store.dispatch(addPostAC());
	}

	const onChangeHandlerPostText = (text:string) => {
		props.store.dispatch(onChangeMessPostAC(text))
	}

	return (
		<Profile
			addNewPost={addNewPost}
			onChangeHandlerPostText={onChangeHandlerPostText}
			profilePage={props.store.getState().profilePage}
		/>
	)
}


