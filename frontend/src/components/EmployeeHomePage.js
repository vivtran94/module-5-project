import React, { useEffect } from "react";
import { EmployeeNavBar } from "./EmployeeNavBar";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import { EmployeeTaskContainer } from "./EmployeeTaskContainer";
import { EmployeeApptContainer } from "./EmployeeApptContainer";
import { BACKEND_HOST } from "./ip";

export function EmployeeHomePage() {
	const dispatch = useDispatch();
	const employee = useSelector(state => state.currentEmployee);
	console.log(employee);

	useEffect(() => {
		if (localStorage.token != null) {
			fetch(`http://${BACKEND_HOST}/get_employee`, {
				headers: {
					Authorization: `Bearer ${localStorage.token}`
				}
			})
				.then(response => response.json())
				.then(response => dispatch({ type: "STORE_CURRENT_EMPLOYEE", payload: response }));
		} else {
			console.log("cannot find token");
		}
	}, [dispatch]);

	if (employee === null) return <h1>Loading</h1>;
	return (
		<div className='background'>
			<EmployeeNavBar />
			<div style={{ maxWidth: "1000px", margin: "auto", padding: "40px" }}>
				<Grid stretched>
					<Grid.Column width={10}>
						<EmployeeTaskContainer />
					</Grid.Column>
					<Grid.Column width={6}>
						<EmployeeApptContainer />
					</Grid.Column>
				</Grid>
			</div>
		</div>
	);
}
