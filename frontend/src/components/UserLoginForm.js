import React from "react";
import { history } from "../history";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_HOST } from "./ip";

export function UserLoginForm() {
	const dispatch = useDispatch();
	const usernameInput = useSelector(state => state.usernameInput);
	const passwordInput = useSelector(state => state.passwordInput);

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`http://${BACKEND_HOST}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: usernameInput,
				password: passwordInput
			})
		})
			.then(response => response.json())
			.then(response => {
				if (response.failed) {
					console.log(response.message);
				} else {
					dispatch({ type: "STORE_CURRENT_USER", payload: response });
					localStorage.setItem("token", response.token);
					history.push("/user/home");
				}
			});
	}

	return (
		<div>
			<form className='ui form'>
				<div className='field'>
					<label>Username</label>
					<input type='text' placeholder='Username' onChange={event => dispatch({ type: "STORE_USERNAME_INPUT", payload: event.target.value })} />
				</div>
				<div className='field'>
					<label>Password</label>
					<input type='password' placeholder='Password' onChange={event => dispatch({ type: "STORE_PASSWORD_INPUT", payload: event.target.value })} />
				</div>
				<div className='ui teal button' onClick={event => handleSubmit(event)}>
					Log In
				</div>
			</form>
		</div>
	);
}
