import React from "react";
import { Segment, Divider } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { EmployeeTaskCard } from "./EmployeeTaskCard";

export function EmployeeTaskContainer() {
	const employee = useSelector(state => state.currentEmployee);

	return (
		<Segment color='blue'>
			<h3>To Do List</h3>
			<Divider></Divider>
			{employee.employee.tasks
				.filter(task => task.user_sent === true)
				.map(task => (
					<EmployeeTaskCard task={task} />
				))}
		</Segment>
	);
}
