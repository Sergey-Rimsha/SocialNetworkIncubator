import React from "react";


export const AuthContainer = () => {
	return (
		<div>
			<h2>Login form</h2>
			<form>
				<input type='email'/>
				<input type='password'/>
				<button type="submit">login</button>
			</form>
		</div>
	)
}