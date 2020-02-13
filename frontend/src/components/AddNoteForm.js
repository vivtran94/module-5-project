import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BACKEND_HOST } from "./ip";

export function AddNoteForm() {
	const dispatch = useDispatch();
	const noteForm = useSelector(state => state.noteForm);
	const currentPet = useSelector(state => state.currentPet);

	const handleSubmit = () => {
		fetch(`http://${BACKEND_HOST}/notes`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				pet_id: currentPet.id,
				note_title: noteForm.title,
				note_body: noteForm.body
			})
		})
			.then(response => response.json())
			.then(() => dispatch({ type: "CHANGE_MODAL", key: "open", payload: false }));
	};

	return (
		<div>
			<form className='ui form'>
				<div className='field'>
					<label>Title</label>
					<input
						type='text'
						placeholder='Title'
						onChange={event => dispatch({ type: "STORE_NOTE_FORM", key: "title", payload: event.target.value })}
					/>
				</div>
				<div className='field'>
					<textarea
						rows='10'
						placeholder='Enter your note here...'
						onChange={event => dispatch({ type: "STORE_NOTE_FORM", key: "body", payload: event.target.value })}></textarea>
				</div>
				<div className='ui blue button' onClick={event => handleSubmit(event)}>
					Add
				</div>
			</form>
		</div>
	);
}
