import React, { useEffect } from "react";
import { EmployeeNavBar } from "./EmployeeNavBar";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Grid, Segment } from "semantic-ui-react";

export function EmployeeHomePage() {
	const dispatch = useDispatch();
	const employee = useSelector(state => state.currentEmployee);

	const employeeConfirmed = appointment => {
		fetch(`http://localhost:3000/employee/appointments/${appointment.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran employeeConfirmed"));
	};

	const taskCompleted = task => {
		fetch(`http://localhost:3000/tasks/${task.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran taskCompleted"));
	};

	let tasks_for_employee = employee.tasks.filter(
		task => task.user_sent === true
	);

	useEffect(() => {
		// console.log("I am from useeffect!");
		if (localStorage.token != null) {
			fetch("http://localhost:3000/get_user", {
				headers: {
					Authorization: `Bearer ${localStorage.token}`
				}
			})
				.then(response => response.json())
				.then(response =>
					dispatch({ type: "STORE_CURRENT_USER", payload: response })
				);
		} else {
			console.log("cannot find token");
		}
	}, []);

	if (employee === null || employee.tasks === null) return <h1>Loading</h1>;

	return (
		<div>
			<EmployeeNavBar />
			<div style={{ maxWidth: "1000px", margin: "auto" }}>
				<Grid stretched>
					<Grid.Column width={8}>
						<Segment>
							<h3>To Do List</h3>
							<Divider horizontal></Divider>
							{tasks_for_employee.map(task => (
								<Segment
									style={{
										display: "flex",
										alignItems: "baseline",
										justifyContent: "space-between"
									}}
								>
									<div>
										<div
											style={{
												display: "flex",
												alignItems: "baseline"
											}}
										>
											<span className='mini ui button'>{task.user.id}</span>
											<span>{`${task.user.first_name} ${task.user.last_name}: ${task.task_title}`}</span>
										</div>
										<p>{task.task_body}</p>
									</div>
									{task.task_completed === true ? (
										<button className='mini ui green button'>Complete</button>
									) : (
										<button
											className='mini ui button'
											onClick={() => taskCompleted(task)}
										>
											Complete
										</button>
									)}
								</Segment>
							))}
						</Segment>
					</Grid.Column>
					<Grid.Column width={6}>
						<Segment>
							<h3>Appointments</h3>
							<Divider></Divider>
							<div>
								{employee.appointments.map(appointment => (
									<Segment
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "baseline"
										}}
									>
										<div>
											{appointment.date} at {appointment.start_time} with{" "}
											{appointment.pet.name}
										</div>
										{appointment.user_confirmed === true &&
										appointment.employee_confirmed === true ? (
											<button className='mini ui green icon button'>
												<i className='check icon'></i>
											</button>
										) : (
											<button
												className='mini ui icon button'
												onClick={() => employeeConfirmed(appointment)}
											>
												<i className='check icon'></i>
											</button>
										)}
									</Segment>
								))}
							</div>
						</Segment>
					</Grid.Column>
				</Grid>
			</div>
		</div>
	);
}
