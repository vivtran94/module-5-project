import React from "react";
import { Segment } from "semantic-ui-react";

export function UserTaskCard(props) {
	const taskCompleted = task => {
		fetch(`http://localhost:3000/tasks/${task.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran taskCompleted"));
	};

	return (
		<Segment className='baseline-space-between'>
			<div>
				<div className='baseline'>
					<span className='mini ui button'>{props.task.user.user.id}</span>
					<span>{`${props.task.user.user.first_name} ${props.task.user.user.last_name}: ${props.task.task_title}`}</span>
				</div>
				<p>{props.task.task_body}</p>
			</div>
			{props.task.task_completed === true ? (
				<button className='mini ui green button'>Complete</button>
			) : (
				<button className='mini ui button' onClick={() => taskCompleted(props.task)}>
					Complete
				</button>
			)}
		</Segment>
	);
}
