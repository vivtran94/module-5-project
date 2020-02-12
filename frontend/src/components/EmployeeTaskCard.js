import React from "react";
import { Segment } from "semantic-ui-react";

export function EmployeeTaskCard(props) {
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
		<Segment className='baseline-space-between' style={{ backgroundColor: "white" }}>
			<div style={{ alignContent: "space-evenly" }}>
				<div className='ai-baseline'>
					<span className='mini ui button'>{props.task.user.id}</span>

					<b style={{ paddingLeft: "10px" }}>{`${props.task.user.first_name} ${props.task.user.last_name}: ${props.task.task_title}`}</b>
				</div>
				<p></p>
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
