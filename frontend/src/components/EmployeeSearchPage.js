import React, { useEffect } from "react";
import { EmployeeNavBar } from "./EmployeeNavBar";
import { useSelector, useDispatch } from "react-redux";
import { Input, Grid, Divider, Modal } from "semantic-ui-react";

import { AddNoteForm } from "./AddNoteForm";
import { NoteCard } from "./NoteCard";
import { EmployeeCreateApptForm } from "./EmployeeCreateApptForm";
import { EmployeeCreateTaskForm } from "./EmployeeCreateTaskForm";
import { SearchResultContainer } from "./SearchResultContainer";
import { ChartContainer } from "./ChartContainer";

export function EmployeeSearchPage() {
	const dispatch = useDispatch();
	const allUsers = useSelector(state => state.allUsers);

	const selectedUser = useSelector(state => state.selectedUser);
	const modal = useSelector(state => state.modal);

	const search = value => {
		dispatch({ type: "STORE_SEARCH_VALUE", payload: value });
		dispatch({ type: "FILTER_ALL_USERS" });
	};

	const closeModal = () => {
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: false });
	};

	useEffect(() => {
		fetch("http://localhost:3000/users", {
			headers: {
				Authorization: `Bearer ${localStorage.token}`
			}
		})
			.then(response => response.json())
			.then(response => dispatch({ type: "ALL_USERS", payload: response }));
	}, [dispatch]);

	if (allUsers === null) return <h1>Loading</h1>;
	return (
		<div>
			<EmployeeNavBar />
			<Grid>
				<Grid.Column width={3}>
					<Input fluid icon='search' placeholder='Search...' onChange={e => search(e.target.value)} />
					<Divider horizontal></Divider>
					<SearchResultContainer />
				</Grid.Column>
				<Grid.Column width={12}>{selectedUser === null ? null : <ChartContainer />}</Grid.Column>
			</Grid>

			<Modal size={modal.size} open={modal.open} onClose={() => closeModal()}>
				{modal.display === "addnote" || modal.display === "note" ? (
					<Modal.Header>{modal.display === "addnote" ? "Add a Note" : "Medical Note"}</Modal.Header>
				) : (
					<Modal.Header>{modal.display === "employeetask" ? "Add a Task" : "Add an Appointment"}</Modal.Header>
				)}

				{modal.display === "addnote" || modal.display === "note" ? (
					<Modal.Content>{modal.display === "addnote" ? <AddNoteForm /> : <NoteCard />}</Modal.Content>
				) : (
					<Modal.Content>{modal.display === "employeetask" ? <EmployeeCreateTaskForm /> : <EmployeeCreateApptForm />}</Modal.Content>
				)}
			</Modal>
		</div>
	);
}
