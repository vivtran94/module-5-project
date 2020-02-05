import React, { useEffect } from "react";
import { EmployeeNavBar } from "./EmployeeNavBar";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "semantic-ui-react";

export function SearchPage() {
	const dispatch = useDispatch();
	const allUsers = useSelector(state => state.allUsers);

	const search = value => {
		dispatch({ type: "CHANGE_SEARCH", key: "value", payload: value });
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
			<Input
				icon='search'
				placeholder='Search...'
				onChange={e => search(e.target.value)}
			/>
		</div>
	);
}
