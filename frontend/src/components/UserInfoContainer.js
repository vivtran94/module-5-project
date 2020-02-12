import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { UserInfoCard } from "./UserInfoCard";
import { UserTaskContainer } from "./UserTaskContainer";

export function UserInfoContainer() {
	const user = useSelector(state => state.currentUser);

	console.log(user);

	if (user === null) return <h1>Loading</h1>;
	return (
		<div style={{ maxWidth: "1000px", margin: "auto" }}>
			<Grid columns={2} stretched>
				<Grid.Column width={5}>
					<UserInfoCard />
				</Grid.Column>
				<Grid.Column width={11}>
					<UserTaskContainer />
				</Grid.Column>
			</Grid>
		</div>
	);
}
