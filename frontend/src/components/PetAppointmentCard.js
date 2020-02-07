import React from "react";
import { Segment } from "semantic-ui-react";

export function PetAppointmentCard(props) {
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
		<Segment
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center"
			}}>
			<div>
				{props.appointment.date} at {props.appointment.start_time}
			</div>
			{props.appointment.user_confirmed === true &&
			props.appointment.employee_confirmed === true ? (
				<button className='ui green icon button'>
					<i className='check icon'></i>
				</button>
			) : (
				<button className='ui icon button' onClick={() => userConfirmed(props.appointment)}>
					<i className='check icon'></i>
				</button>
			)}
		</Segment>
	);
}
