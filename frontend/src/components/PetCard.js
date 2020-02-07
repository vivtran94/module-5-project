import React from "react";
import { Grid, Segment, Icon, Divider } from "semantic-ui-react";
import corgiPuppy from "../images/corgi_puppy.jpg";
import { useDispatch } from "react-redux";

export function PetCard(props) {
	const dispatch = useDispatch();

	const showMakeApptForm = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "apptform" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	const userConfirmed = appointment => {
		fetch(`http://localhost:3000/appointments/${appointment.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran userConfirmed"));
	};

	return (
		<div style={{ maxWidth: "1000px", margin: "auto" }}>
			<Grid columns={2} stretched>
				<Grid.Column width={5}>
					<Segment>
						<h4>
							{props.pet.gender === "M" ? (
								<Icon circular name='mars' />
							) : (
								<Icon circular name='venus' />
							)}{" "}
							{`${props.pet.name} (${props.pet.date_of_birth})`}
						</h4>
						<img src={corgiPuppy} className='ui large image' alt='pet' />
						<h4
							onClick={() => {
								showMakeApptForm("mini");
								dispatch({ type: "CURRENT_PET", payload: props.pet });
							}}
						>
							<Icon circular name='calendar plus outline' />
							{`Make an appointment for ${props.pet.name}`}
						</h4>
						<div>
							{props.pet.appointments.map(appointment => (
								<Segment
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center"
									}}
								>
									<div>
										{appointment.date} at {appointment.start_time}
									</div>
									{appointment.user_confirmed === true &&
									appointment.employee_confirmed === true ? (
										<button className='ui green icon button'>
											<i className='check icon'></i>
										</button>
									) : (
										<button
											className='ui icon button'
											onClick={() => userConfirmed(appointment)}
										>
											<i className='check icon'></i>
										</button>
									)}
								</Segment>
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
									<Segment>
										<h5>{note.note_title}</h5>
										<p>{note.note_body}</p>
									</Segment>
								))}
						</div>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}
