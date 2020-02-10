import React from "react";
import { Segment, Grid, Icon, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import corgiPuppy from "../images/corgi_puppy.jpg";
import { ChartNoteCard } from "./ChartNoteCard";

export function ChartPetContainer(props) {
	const dispatch = useDispatch();
	const selectedUser = useSelector(state => state.selectedUser);

	const addNote = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "addnote" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	const employeeCreateAppt = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "employeeappt" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	return (
		<Segment>
			<Grid.Row>
				<Segment.Group horizontal>
					<Segment className='ai-center'>
						<div>
							<span>{props.pet.gender === "M" ? <Icon circular name='mars' /> : <Icon circular name='venus' />} </span>
							<span>{`${selectedUser.last_name.toUpperCase()}, ${props.pet.name.toUpperCase()} (${props.pet.date_of_birth})`}</span>
							<button
								onClick={() => {
									employeeCreateAppt("mini");
									dispatch({ type: "CURRENT_PET", payload: props.pet });
								}}>
								Create Appointment
							</button>
						</div>
					</Segment>
					<Segment>
						<span>BREED: {props.pet.breed}</span>
					</Segment>
					<Segment>
						<span>COLOR: {props.pet.color}</span>
					</Segment>
				</Segment.Group>
			</Grid.Row>
			<Grid columns={2} stretched>
				<Grid.Column width={5}>
					<Segment>
						<img src={corgiPuppy} className='ui large image' alt='pet' />
					</Segment>
				</Grid.Column>
				<Grid.Column width={11}>
					<Segment>
						<h3>Medical Notes</h3>
						<Divider
							horizontal
							onClick={() => {
								addNote("large");
								dispatch({ type: "CURRENT_PET", payload: props.pet });
							}}>{`Create Note`}</Divider>
						{props.pet.notes.map(note => (
							<ChartNoteCard note={note} />
						))}
					</Segment>
				</Grid.Column>
			</Grid>
		</Segment>
	);
}
