import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BACKEND_HOST } from "./ip";

export function EmployeeCreateTaskForm() {
	const dispatch = useDispatch();
	const taskForm = useSelector(state => state.taskForm);
	const selectedUser = useSelector(state => state.selectedUser);

	const handleSubmit = event => {
		event.preventDefault();
		fetch(`http://${BACKEND_HOST}/employee/create_task`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: selectedUser.id,
				task_title: taskForm.title,
				task_body: taskForm.body
			})
		})
			.then(response => response.json())
			.then(() => dispatch({ type: "CHANGE_MODAL", key: "open", payload: false }));
	};

	return (
		<div>
			<form className='ui form'>
				<div className='field'>
					<label>Title</label>
					<input
						type='text'
						placeholder='Title'
						onChange={event => dispatch({ type: "STORE_TASK_FORM", key: "title", payload: event.target.value })}
					/>
				</div>
				<div className='field'>
					<label>Message</label>
					<textarea
						rows='5'
						placeholder='Enter your message here...'
						onChange={event => dispatch({ type: "STORE_TASK_FORM", key: "body", payload: event.target.value })}></textarea>
				</div>
				<div className='ui blue button' onClick={event => handleSubmit(event)}>
					Send
				</div>
			</form>
		</div>
	);
}
