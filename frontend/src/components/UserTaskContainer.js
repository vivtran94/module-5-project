import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserTaskCard } from "./UserTaskCard";
import { Segment, Divider, Icon } from "semantic-ui-react";

export function UserTaskContainer() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);

	const showTaskForm = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "taskform" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	return (
		<Segment color='teal'>
			<h3 style={{ marginBottom: "0px" }}>To Do List</h3>
			<Divider horizontal style={{ marginTop: "0px" }} onClick={() => showTaskForm("mini")}>
				<Icon name='plus' /> Create Message
			</Divider>
			{user.user.tasks ? (
				<div>
					{user.user.tasks
						.filter(task => task.employee_sent === true)
						.map(task => (
							<UserTaskCard task={task} />
						))}
				</div>
			) : null}
		</Segment>
	);
}
