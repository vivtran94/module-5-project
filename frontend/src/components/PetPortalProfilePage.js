import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PetPortalProfileCard } from "./PetPortalProfileCard";
import { PetContainer } from "./PetContainer";
import { Divider, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export function PetPortalProfilePage() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);

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

	if (user === null) {
		return <h1>Loading</h1>;
	} else {
		return (
			<div>
				<PetPortalProfileCard />
				<Divider horizontal>
					<Header as='h4'>
						<Link to='/addpet'>
							<Icon name='plus' />
							Add Pet
						</Link>
					</Header>
				</Divider>
				{user.user.pets.map(pet => (
					<PetContainer pet={pet} />
				))}
			</div>
		);
	}
}
