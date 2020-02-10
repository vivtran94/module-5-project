import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserInfoContainer } from "./UserInfoContainer";
import { PetContainer } from "./PetContainer";
import { Divider, Header, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AddTaskForm } from "./AddTaskForm";
import { AddApptForm } from "./AddApptForm";

export function UserHomePage() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);
	const modal = useSelector(state => state.modal);

	const closeModal = () => {
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: false });
	};

	useEffect(() => {
		if (localStorage.token != null) {
			fetch("http://localhost:3000/get_user", {
				headers: {
					Authorization: `Bearer ${localStorage.token}`
				}
			})
				.then(response => response.json())
				.then(response => dispatch({ type: "STORE_CURRENT_USER", payload: response }));
		} else {
			console.log("cannot find token");
		}
	}, [dispatch]);

	if (user === null) return <h1>Loading</h1>;
	return (
		<div>
			<UserInfoContainer />
			<Divider horizontal>
				<Header as='h4'>
					<Link to='/user/addpet'>
						<Icon name='plus' />
						Add Pet
					</Link>
				</Header>
			</Divider>
			{user.user.pets.map(pet => (
				<PetContainer pet={pet} />
			))}

			<Modal size={modal.size} open={modal.open} onClose={() => closeModal()}>
				<Modal.Header>{modal.display === "apptform" ? "Request an Appointment" : "Send a Task"}</Modal.Header>
				<Modal.Content>{modal.display === "apptform" ? <AddApptForm /> : <AddTaskForm />}</Modal.Content>
			</Modal>
		</div>
	);
}
