import React from "react";
import { history } from "../history";
import { useDispatch, useSelector } from "react-redux";

export function AddPetForm() {
	const dispatch = useDispatch();
	const petForm = useSelector(state => state.petForm);
	console.log(petForm.name);

	function handleSubmit(event) {
		if (localStorage.token) {
			event.preventDefault();
			fetch("http://localhost:3000/pets", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.token}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: petForm.name,
					dateOfBirth: petForm.dateOfBirth,
					gender: petForm.gender,
					breed: petForm.breed,
					color: petForm.color,
					profile_pic: petForm.profile_pic
				})
			})
				.then(response => response.json())
				.then(signup => {
					if (signup.failed) {
						console.log("failed login");
					} else {
						history.push("/user/home");
					}
				});
		} else {
			history.push("/");
		}
	}

	return (
		<div>
			<div style={{ maxWidth: "400px", margin: "auto" }}>
				<form className='ui form'>
					<div className='two fields'>
						<div className='eleven wide field'>
							<label>Name</label>
							<input
								type='text'
								placeholder='Name'
								onChange={event => dispatch({ type: "STORE_PET_FORM", key: "name", payload: event.target.value })}
							/>
						</div>
						<div className='five wide field'>
							<label>Gender</label>
							<select
								className='ui fluid dropdown'
								onChange={event => dispatch({ type: "STORE_PET_FORM", key: "gender", payload: event.target.value })}>
								<option value=''>Gender</option>
								<option value='F'>Female</option>
								<option value='M'>Male</option>
							</select>
						</div>
					</div>
					<div className='field'>
						<label>Date of Birth</label>
						<input
							type='text'
							placeholder='MM-DD-YYYY'
							onChange={event => dispatch({ type: "STORE_PET_FORM", key: "dateOfBirth", payload: event.target.value })}
						/>
					</div>
					<div className='field'>
						<label>Breed</label>
						<input
							type='text'
							placeholder='Breed'
							onChange={event => dispatch({ type: "STORE_PET_FORM", key: "breed", payload: event.target.value })}
						/>
					</div>
					<div className='field'>
						<label>Color</label>
						<input
							type='text'
							placeholder='Color'
							onChange={event => dispatch({ type: "STORE_PET_FORM", key: "color", payload: event.target.value })}
						/>
					</div>
					<button className='ui button' style={{ backgroundColor: "#FF7A75", color: "white" }} onClick={event => handleSubmit(event)}>
						Add
					</button>
				</form>
			</div>
		</div>
	);
}
