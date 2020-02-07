import React from "react";
import { useSelector } from "react-redux";
import { UserTaskCard } from "./UserTaskCard";

export function UserTaskContainer() {
	const user = useSelector(state => state.currentUser);

	return (
		<div>
			{user.user.tasks ? (
				<div>
					{user.user.tasks
						.filter(task => task.employee_sent === true)
						.map(task => (
							<UserTaskCard task={task} />
						))}
				</div>
			) : null}
		</div>
	);
}
