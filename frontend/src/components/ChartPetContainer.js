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
		<Segment color='blue' style={{ paddingTop: "0px" }}>
			<Grid.Row>
				<Segment.Group horizontal>
					<Segment>
						<div className='baseline-space-between'>
							<div>
								<span>{props.pet.gender === "M" ? <Icon circular name='mars' /> : <Icon circular name='venus' />} </span>
								<b style={{ paddingLeft: "5px", fontSize: "18px" }}>{`${selectedUser.last_name.toUpperCase()}  ,`}</b>
								<b style={{ paddingLeft: "5px", fontSize: "18px" }}>{props.pet.name.toUpperCase()}</b>
							</div>
							<button
								className='ui blue button'
								onClick={() => {
									employeeCreateAppt("mini");
									dispatch({ type: "CURRENT_PET", payload: props.pet });
								}}>
								Create Appointment
							</button>
						</div>
					</Segment>
				</Segment.Group>
			</Grid.Row>
			<Grid columns={2} stretched>
				<Grid.Column width={5}>
					<Segment.Group>
						<Segment>
							<b style={{ paddingRight: "10px" }}>DOB:</b>
							<span>{props.pet.date_of_birth}</span>
						</Segment>
						<Segment>
							<b style={{ paddingRight: "10px" }}>BREED:</b>
							<span>{props.pet.breed}</span>
						</Segment>
						<Segment>
							<b style={{ paddingRight: "10px" }}>COLOR:</b>
							<span>{props.pet.color}</span>
						</Segment>
						<Segment>
							<img src={corgiPuppy} className='ui large image' alt='pet' />
						</Segment>
					</Segment.Group>
				</Grid.Column>
				<Grid.Column width={11}>
					<Segment>
						<b style={{ marginBottom: "0px", fontSize: "18px" }}>Medical Notes</b>
						<Divider
							horizontal
							style={{ marginTop: "0px" }}
							onClick={() => {
								addNote("large");
								dispatch({ type: "CURRENT_PET", payload: props.pet });
							}}>
							<Icon name='file alternate outline' />
							Create Note
						</Divider>
						<Segment.Group>
							{props.pet.notes.map(note => (
								<ChartNoteCard note={note} />
							))}
						</Segment.Group>
					</Segment>
				</Grid.Column>
			</Grid>
		</Segment>
	);
}
