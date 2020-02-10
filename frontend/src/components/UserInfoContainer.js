import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Divider, Grid, Segment } from "semantic-ui-react";
import corgiPuppy from "../images/corgi_puppy.jpg";
import { UserInfoCard } from "./UserInfoCard";
import { UserTaskContainer } from "./UserTaskContainer";

export function UserInfoContainer() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);

	console.log(user);

	const showTaskForm = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "taskform" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
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
					<UserInfoCard />
				</Grid.Column>
				<Grid.Column width={5}>
					<Segment>
						<h3>To Do List</h3>
						<Divider horizontal>
							<h5 onClick={() => showTaskForm("mini")}>
								<Icon name='plus' /> Create Task
							</h5>
						</Divider>
						<UserTaskContainer />
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}
