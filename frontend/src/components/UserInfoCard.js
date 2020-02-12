import React from "react";
import { Segment, Divider, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

export function UserInfoCard() {
	const user = useSelector(state => state.currentUser);
	return (
		<Segment color='teal'>
			<h3>
				{user.user.first_name} {user.user.last_name}
			</h3>
			<div>
				<div>{user.user.street_address}</div>
				<div>{`${user.user.street_city}, ${user.user.street_state} ${user.user.street_zipcode}`}</div>
			</div>
			<Divider></Divider>
			<div>
				<div>
					<Icon name='phone' />
					<span style={{ paddingLeft: "5px" }}>{user.user.phone_number}</span>
				</div>
				<div>
					<Icon name='envelope' />
					<span style={{ paddingLeft: "5px" }}>{user.user.email}</span>
				</div>
			</div>
		</Segment>
	);
}
