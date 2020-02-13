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
			<Segment color='blue' style={{ paddingBottom: "0px" }}>
				<Grid.Row>
					<Segment>
						<div className='baseline-space-between'>
							<div className='ai-baseline'>
								<b className='mini ui basic button'>{selectedUser.id}</b>
								<b style={{ paddingLeft: "10px", fontSize: "18px" }}>{`${selectedUser.last_name.toUpperCase()}  ,`}</b>
								<b style={{ paddingLeft: "5px", fontSize: "18px" }}>{selectedUser.first_name.toUpperCase()}</b>
							</div>
							<button className='ui blue button' onClick={() => employeeCreateTask("mini")}>
								Create Task
							</button>
						</div>
					</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment.Group horizontal>
						<Segment style={{ display: "flex", alignItems: "baseline" }}>
							<b style={{ paddingRight: "10px" }}>PHONE NUMBER:</b>
							<span>{selectedUser.phone_number}</span>
						</Segment>
						<Segment>
							<b style={{ paddingRight: "10px" }}>E-MAIL:</b>
							<span>{selectedUser.email}</span>
						</Segment>
						<Segment>
							<b style={{ paddingRight: "10px" }}>DRIVER LICENSE:</b>
							<span>{selectedUser.driver_license}</span>
						</Segment>
					</Segment.Group>
				</Grid.Row>
				<Grid.Row>
					<Segment.Group horizontal>
						<Segment>
							<b style={{ paddingRight: "10px" }}>ADDRESS:</b>
							<span>
								{`${selectedUser.street_address}, ${selectedUser.street_city}, ${selectedUser.street_state} ${selectedUser.street_zipcode}`}
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
