import React from "react";
import { Segment } from "semantic-ui-react";
import { BACKEND_HOST } from "./ip";

export function PetAppointmentCard(props) {
	const userConfirmed = appointment => {
		fetch(`http://${BACKEND_HOST}/appointments/${appointment.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran userConfirmed"));
	};

	return (
		<Segment className='baseline-space-between'>
			<div>
				{props.appointment.date} at {props.appointment.start_time}
			</div>
			{props.appointment.user_confirmed === true && props.appointment.employee_confirmed === true ? (
				<button className='mini ui green icon button'>
					<i className='check icon'></i>
				</button>
			) : (
				<button className='mini ui icon button' onClick={() => userConfirmed(props.appointment)}>
					<i className='check icon'></i>
				</button>
			)}
		</Segment>
	);
}
