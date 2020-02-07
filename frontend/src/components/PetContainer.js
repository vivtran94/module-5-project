import React from "react";
import { Grid, Segment, Icon, Divider } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { PetCard } from "./PetCard";
import { PetAppointmentCard } from "./PetAppointmentCard";
import { PetNoteCard } from "./PetNoteCard";

export function PetContainer(props) {
	const dispatch = useDispatch();

	const showMakeApptForm = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "apptform" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	return (
		<div style={{ maxWidth: "1000px", margin: "auto" }}>
			<Grid columns={2} stretched>
				<Grid.Column width={5}>
					<Segment>
						<PetCard pet={props.pet} />
						<h4
							onClick={() => {
								showMakeApptForm("mini");
								dispatch({ type: "CURRENT_PET", payload: props.pet });
							}}>
							<Icon circular name='calendar plus outline' />
							{`Make an appointment for ${props.pet.name}`}
						</h4>
						<div>
							{props.pet.appointments.map(appointment => (
								<PetAppointmentCard appointment={appointment} />
							))}
						</div>
					</Segment>
				</Grid.Column>
				<Grid.Column width={10}>
					<Segment>
						<h3>Medical Notes</h3>
						<Divider></Divider>
						<div>
							{props.pet.notes
								.filter(note => note.visible_to_user === true)
								.map(note => (
									<PetNoteCard note={note} />
								))}
						</div>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}
