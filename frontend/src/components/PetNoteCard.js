import React from "react";
import { Segment } from "semantic-ui-react";

export function PetNoteCard(props) {
	return (
		<Segment>
			<h5>{props.note.note_title}</h5>
			<p>{props.note.note_body}</p>
		</Segment>
	);
}
