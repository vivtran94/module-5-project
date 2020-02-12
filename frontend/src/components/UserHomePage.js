import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserInfoContainer } from "./UserInfoContainer";
import { PetContainer } from "./PetContainer";
import { Divider, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AddTaskForm } from "./AddTaskForm";
import { AddApptForm } from "./AddApptForm";
import background from "../images/blue_background.jpg";
import { AddPetForm } from "./AddPetForm";
import { BACKEND_HOST } from "./ip";

export function UserHomePage() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);
	const modal = useSelector(state => state.modal);

	const showAddPetForm = size => {
		dispatch({ type: "CHANGE_MODAL", key: "display", payload: "addpetform" });
		dispatch({ type: "CHANGE_MODAL", key: "size", payload: size });
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: true });
	};

	const closeModal = () => {
		dispatch({ type: "CHANGE_MODAL", key: "open", payload: false });
	};

	useEffect(() => {
		if (localStorage.token != null) {
			fetch(`http://${BACKEND_HOST}/get_user`, {
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
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: "100% 100%",
				height: "100%",
				width: "100%",
				position: "absolute",
				zIndex: "0"
			}}>
			<Link className='ui right floated button' style={{ margin: "10px" }} to='/' onClick={() => localStorage.clear()}>
				Log Out
			</Link>
			<div style={{ margin: "auto", marginTop: "5vh" }}>
				<UserInfoContainer />
				<Divider horizontal>
					<div className='ui button' style={{ backgroundColor: "#FF7A75", color: "white" }} onClick={() => showAddPetForm("mini")}>
						<Icon name='plus' />
						<span>ADD PET</span>
					</div>
				</Divider>
				{user.user.pets.map(pet => (
					<PetContainer pet={pet} />
				))}
			</div>

			<Modal size={modal.size} open={modal.open} onClose={() => closeModal()}>
				{modal.display === "apptform" || modal.display === "taskform" ? (
					<Modal.Header>{modal.display === "apptform" ? "Request an Appointment" : "Send a Message"}</Modal.Header>
				) : (
					<Modal.Header>Add a pet</Modal.Header>
				)}

				{modal.display === "apptform" || modal.display === "taskform" ? (
					<Modal.Content>{modal.display === "apptform" ? <AddApptForm /> : <AddTaskForm />}</Modal.Content>
				) : (
					<Modal.Content>
						<AddPetForm />
					</Modal.Content>
				)}
			</Modal>
		</div>
	);
}
