import React, { useEffect } from "react";
import { EmployeeNavBar } from "./EmployeeNavBar";
import { useSelector, useDispatch } from "react-redux";
import { Input, Segment, Grid, Divider, Icon, Modal } from "semantic-ui-react";
import corgiPuppy from "../images/corgi_puppy.jpg";
import { AddNoteForm } from "./AddNoteForm";
import { NoteCard } from "./NoteCard";

export function SearchPage() {
	const dispatch = useDispatch();
	const allUsers = useSelector(state => state.allUsers);
	const searchResult = useSelector(state => state.searchResult);
	const selectedUser = useSelector(state => state.selectedUser);
	const modal = useSelector(state => state.modal);

	const search = value => {
		dispatch({ type: "STORE_SEARCH_VALUE", payload: value });
		dispatch({ type: "FILTER_ALL_USERS" });
	};
	const makeNoteVisible = note => {
		fetch(`http://localhost:3000/notes/${note.id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				"Content-Type": "application/json"
			}
		}).then(console.log("ran employeeConfirmed"));
	};

	const showNote = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "note" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	const addNote = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "addnote" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
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
	}, []);

	if (allUsers === null) return <h1>Loading</h1>;
	return (
		<div>
			<EmployeeNavBar />
			<Grid>
				<Grid.Column width={3}>
					<Input
						fluid
						icon='search'
						placeholder='Search...'
						onChange={e => search(e.target.value)}
					/>
					<Divider horizontal></Divider>
					<div>
						{searchResult.length > 0 ? (
							<div>
								{searchResult.map(result => (
									<Segment
										onClick={() => dispatch({ type: "STORE_SELECTED_USER", payload: result })}
									>{`${result.first_name} ${result.last_name}`}</Segment>
								))}
							</div>
						) : null}
					</div>
				</Grid.Column>
				<Grid.Column width={12}>
					{selectedUser === null ? null : (
						<div>
							<Segment>
								<Grid.Row>
									<Segment>
										<div
											style={{
												display: "flex",
												alignItems: "baseline"
											}}
										>
											<span className='mini ui button'>{selectedUser.id}</span>
											<span>{`${selectedUser.last_name.toUpperCase()}, ${selectedUser.first_name.toUpperCase()}`}</span>
										</div>
									</Segment>
								</Grid.Row>
								<Grid.Row>
									<Segment.Group horizontal>
										<Segment>
											<span>PHONE NUMBER: {selectedUser.phone_number}</span>
										</Segment>
										<Segment>
											<span>E-MAIL: {selectedUser.email}</span>
										</Segment>
										<Segment>
											<span>DRIVER LICENSE: {selectedUser.driver_license}</span>
										</Segment>
									</Segment.Group>
								</Grid.Row>
								<Grid.Row>
									<Segment.Group horizontal>
										<Segment>
											<span>
												{`ADDRESS: ${selectedUser.street_address}, ${selectedUser.street_city}, ${selectedUser.street_state} ${selectedUser.street_zipcode}`}
											</span>
										</Segment>
									</Segment.Group>
								</Grid.Row>
							</Segment>
							{selectedUser.pets.map(pet => (
								<Segment>
									<Grid.Row>
										<Segment.Group horizontal>
											<Segment>
												<div
													style={{
														display: "flex",
														alignItems: "baseline"
													}}
												>
													<span>
														{pet.gender === "M" ? (
															<Icon circular name='mars' />
														) : (
															<Icon circular name='venus' />
														)}{" "}
													</span>
													<span>
														{`${selectedUser.last_name.toUpperCase()}, ${pet.name.toUpperCase()} (${
															pet.date_of_birth
														})`}
													</span>
												</div>
											</Segment>
											<Segment>
												<span>BREED: {pet.breed}</span>
											</Segment>
											<Segment>
												<span>COLOR: {pet.color}</span>
											</Segment>
										</Segment.Group>
									</Grid.Row>
									<Grid columns={2} stretched>
										<Grid.Column width={5}>
											<Segment>
												<img src={corgiPuppy} className='ui large image' alt='pet' />
											</Segment>
										</Grid.Column>
										<Grid.Column width={11}>
											<Segment>
												<h3>Medical Notes</h3>
												<Divider
													horizontal
													onClick={() => {
														addNote("large");
														dispatch({ type: "CURRENT_PET", payload: pet });
													}}
												>{`Create Note`}</Divider>
												{pet.notes.map(note => (
													<Segment
														style={{
															display: "flex",
															alignItems: "baseline",
															justifyContent: "space-between"
														}}
													>
														<h5
															onClick={() => {
																showNote("large");
																dispatch({ type: "STORE_SELECTED_NOTE", payload: note });
															}}
														>
															{note.note_title}
														</h5>
														{note.visible_to_user === true ? (
															<button className='mini ui green icon button'>Visible</button>
														) : (
															<button
																className='mini ui icon button'
																onClick={() => makeNoteVisible(note)}
															>
																Visible
															</button>
														)}
													</Segment>
												))}
											</Segment>
										</Grid.Column>
									</Grid>
								</Segment>
							))}
						</div>
					)}
				</Grid.Column>
			</Grid>

			<Modal size={modal.size} open={modal.open} onClose={() => closeModal()}>
				<Modal.Header>{modal.display === "addnote" ? "Add a Note" : "Medical Note"}</Modal.Header>
				<Modal.Content>
					{modal.display === "addnote" ? <AddNoteForm /> : <NoteCard />}
				</Modal.Content>
			</Modal>
		</div>
	);
}
