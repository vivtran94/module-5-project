import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function EmployeeCreateApptForm() {
	const dispatch = useDispatch();
	const apptForm = useSelector(state => state.apptForm);
	const currentPet = useSelector(state => state.currentPet);

	const handleSubmit = event => {
		event.preventDefault();
		fetch("http://localhost:3000/employee/create_appt", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				pet_id: currentPet.id,
				date: apptForm.date,
				start_time: apptForm.start_time
			})
		})
			.then(response => response.json())
			.then(dispatch({ type: "CHANGE_MODAL", key: "open", payload: false }));
	};

	return (
		<div>
			<form className='ui form'>
				<div className='field'>
					<label>Appointment Date</label>
					<input
						type='text'
						placeholder='MM-DD-YYYY'
						onChange={event =>
							dispatch({ type: "STORE_APPT_FORM", key: "date", payload: event.target.value })
						}
					/>
				</div>
				<div>
					<div className='field'>
						<label>Start Time</label>
						<select
							className='ui fluid dropdown'
							onChange={event =>
								dispatch({
									type: "STORE_APPT_FORM",
									key: "start_time",
									payload: event.target.value
								})
							}
						>
							<option value=''>Time</option>
							<option value='9:00 AM'>9:00 AM</option>
							<option value='10:00 AM'>10:00 AM</option>
							<option value='11:00 AM'>11:00 AM</option>
							<option value='12:00 PM'>12:00 PM</option>
							<option value='1:00 PM'>1:00 PM</option>
							<option value='2:00 PM'>2:00 PM</option>
							<option value='3:00 PM'>3:00 PM</option>
							<option value='4:00 PM'>4:00 PM</option>
							<option value='5:00 PM'>5:00 PM</option>
						</select>
					</div>
				</div>
				<br></br>
				<div className='ui blue button' onClick={event => handleSubmit(event)}>
					Request Appointment
				</div>
			</form>
		</div>
	);
}
