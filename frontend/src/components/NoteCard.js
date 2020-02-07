import React from "react";
import { useSelector } from "react-redux";

export function NoteCard() {
	const selectedNote = useSelector(state => state.selectedNote);
	return <div>{selectedNote.note_body}</div>;
}
