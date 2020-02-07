import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function AddTaskForm() {
	const dispatch = useDispatch();
	const taskForm = useSelector(state => state.taskForm);
	const allEmployees = useSelector(state => state.allEmployees);

	const handleSubmit = event => {
		event.preventDefault();
		fetch("http://localhost:3000/tasks", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				employee_id: taskForm.employee_id,
				task_title: taskForm.title,
				task_body: taskForm.body
			})
		})
			.then(response => response.json())
			.then(() =>
				dispatch({ type: "CHANGE_MODAL", key: "open", payload: false })
			);
	};

	useEffect(() => {
		fetch("http://localhost:3000/employees", {
			headers: {
				Authorization: `Bearer ${localStorage.token}`
			}
		})
			.then(response => response.json())
			.then(response =>
				dispatch({ type: "STORE_ALL_EMPLOYEES", payload: response })
			);
	}, []);

	if (allEmployees === null) return <h1>Loading</h1>;
	return (
		<div>
			<form className='ui form'>
				<div className='field'>
					<label>Who do you want to send the task to?</label>
					<select
						className='ui fluid dropdown'
						onChange={event =>
							dispatch({
								type: "STORE_TASK_FORM",
								key: "employee_id",
								payload: event.target.value
							})
						}
					>
						<option value=''>Employee</option>
						{allEmployees.map(employee => (
							<option value={employee.id}>{employee.first_name}</option>
						))}
					</select>
				</div>
				<div className='field'>
					<label>Title</label>
					<input
						type='text'
						placeholder='Title'
						onChange={event =>
							dispatch({
								type: "STORE_TASK_FORM",
								key: "title",
								payload: event.target.value
							})
						}
					/>
				</div>
				<div className='field'>
					<label>Message</label>
					<textarea
						rows='5'
						placeholder='Enter your message here...'
						onChange={event =>
							dispatch({
								type: "STORE_TASK_FORM",
								key: "body",
								payload: event.target.value
							})
						}
					></textarea>
				</div>
				<div className='ui blue button' onClick={event => handleSubmit(event)}>
					Send
				</div>
			</form>
		</div>
	);
}
