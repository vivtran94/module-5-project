import React from "react";
import { Segment } from "semantic-ui-react";

export function UserTaskCard(props) {
	console.log(props);
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
		<Segment>
			<div className='baseline-space-between'>
				<b>{props.task.task_title}</b>
				{props.task.task_completed === true ? (
					<button className='mini ui green button'>Complete</button>
				) : (
					<button className='mini ui button' onClick={() => taskCompleted(props.task)}>
						Complete
					</button>
				)}
			</div>
			<p>{props.task.task_body}</p>
		</Segment>
	);
}
