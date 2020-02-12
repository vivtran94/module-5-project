import React from "react";
import { Segment, Divider } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { BACKEND_HOST } from "./ip";

export function EmployeeApptContainer() {
	const employee = useSelector(state => state.currentEmployee);

	const employeeConfirmed = appointment => {
		fetch(`http://${BACKEND_HOST}/employee/appointments/${appointment.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran employeeConfirmed"));
	};

	return (
		<Segment color='blue'>
			<h3>Appointments</h3>
			<Divider></Divider>
			<div>
				{employee.employee.appointments.map(appointment => (
					<Segment className='baseline-space-between'>
						<div>
							{appointment.date} at {appointment.start_time} with {appointment.pet.name}
						</div>
						{appointment.user_confirmed === true && appointment.employee_confirmed === true ? (
							<button className='mini ui green icon button'>
								<i className='check icon'></i>
							</button>
						) : (
							<button className='mini ui icon button' onClick={() => employeeConfirmed(appointment)}>
								<i className='check icon'></i>
							</button>
						)}
					</Segment>
				))}
			</div>
		</Segment>
	);
}
