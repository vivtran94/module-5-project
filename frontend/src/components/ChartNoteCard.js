import React from "react";
import { Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";

export function ChartNoteCard(props) {
	const dispatch = useDispatch();

	const showNote = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "note" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	const makeNoteVisible = note => {
		fetch(`http://localhost:3000/notes/${note.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		});
	};

	return (
		<Segment className='baseline-space-between' style={{ paddingBottom: "0px" }}>
			<b
				onClick={() => {
					showNote("large");
					dispatch({ type: "STORE_SELECTED_NOTE", payload: props.note });
				}}>
				{props.note.note_title}
			</b>
			{props.note.visible_to_user === true ? (
				<button className='mini ui green icon button'>Visible</button>
			) : (
				<button className='mini ui icon button' onClick={() => makeNoteVisible(props.note)}>
					Visible
				</button>
			)}
		</Segment>
	);
}
