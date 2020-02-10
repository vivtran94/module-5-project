import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import { ChartPetContainer } from "./ChartPetContainer";

export function ChartContainer() {
	const dispatch = useDispatch();

	const selectedUser = useSelector(state => state.selectedUser);

	const employeeCreateTask = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "employeetask" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	return (
		<div>
			<Segment>
				<Grid.Row>
					<Segment>
						<div className='ai-baseline'>
							<span className='mini ui button'>{selectedUser.id}</span>
							<span>{`${selectedUser.last_name.toUpperCase()}, ${selectedUser.first_name.toUpperCase()}`}</span>
							<button onClick={() => employeeCreateTask("mini")}>Create Task</button>
						</div>
					</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment.Group horizontal>
						<Segment>
							<span>PHONE NUMBER: {selectedUser.phone_number}</span>
						</Segment>
						<Segment>
							<span>E-MAIL: {selectedUser.email}</span>
						</Segment>
						<Segment>
							<span>DRIVER LICENSE: {selectedUser.driver_license}</span>
						</Segment>
					</Segment.Group>
				</Grid.Row>
				<Grid.Row>
					<Segment.Group horizontal>
						<Segment>
							<span>
								{`ADDRESS: ${selectedUser.street_address}, ${selectedUser.street_city}, ${selectedUser.street_state} ${selectedUser.street_zipcode}`}
							</span>
						</Segment>
					</Segment.Group>
				</Grid.Row>
			</Segment>
			{selectedUser.pets.map(pet => (
				<ChartPetContainer pet={pet} />
			))}
		</div>
	);
}
