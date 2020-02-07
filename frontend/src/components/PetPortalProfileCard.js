import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Divider, Grid, Segment, Modal } from "semantic-ui-react";
import corgiPuppy from "../images/corgi_puppy.jpg";
import { AddTaskForm } from "./AddTaskForm";
import { MakeApptForm } from "./MakeApptForm";

export function PetPortalProfileCard() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);
	const modal = useSelector(state => state.modal);
	console.log(user);

	const showTaskForm = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "taskform" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	const closeModal = () => {
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: false });
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

	if (user === null) return <h1>Loading</h1>;
	return (
		<div style={{ maxWidth: "1000px", margin: "auto" }}>
			<Grid columns={3} stretched>
				<Grid.Column width={5}>
					<Segment>
						<img src={corgiPuppy} alt='profile' className='ui large image' />
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment>
						<h3>
							{user.user.first_name} {user.user.last_name}
						</h3>
						<div>
							<div>{user.user.street_address}</div>
							<div>{`${user.user.street_city}, ${user.user.street_state} ${user.user.street_zipcode}`}</div>
						</div>
						<Divider></Divider>
						<div>
							<div>
								<Icon name='user' />
								{user.user.phone_number}
							</div>
							<div>
								<Icon name='user' />
								{user.user.email}
							</div>
						</div>
					</Segment>
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment>
						<h3>To Do List</h3>
						<Divider horizontal>
							<h5 onClick={() => showTaskForm("mini")}>
								<Icon name='plus' />
								Create Task
							</h5>
						</Divider>
						<div>
							{user.user.tasks ? (
								<div>
									{user.user.tasks
										.filter(task => task.employee_sent === true)
										.map(task => (
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
														<span className='mini ui button'>{task.user.user.id}</span>
														<span>{`${task.user.user.first_name} ${task.user.user.last_name}: ${task.task_title}`}</span>
													</div>
													<p>{task.task_body}</p>
												</div>
												{task.task_completed === true ? (
													<button className='mini ui green button'>Complete</button>
												) : (
													<button className='mini ui button' onClick={() => taskCompleted(task)}>
														Complete
													</button>
												)}
											</Segment>
										))}
								</div>
							) : (
								""
							)}
						</div>
					</Segment>
				</Grid.Column>
			</Grid>

			<Modal size={modal.size} open={modal.open} onClose={() => closeModal()}>
				<Modal.Header>
					{modal.display === "apptform" ? "Request an Appointment" : "Send a Task"}
				</Modal.Header>
				<Modal.Content>
					{modal.display === "apptform" ? <MakeApptForm /> : <AddTaskForm />}
				</Modal.Content>
			</Modal>
		</div>
	);
}
