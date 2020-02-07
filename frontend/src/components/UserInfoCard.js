import React from "react";
import { Segment, Divider, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

export function UserInfoCard() {
	const user = useSelector(state => state.currentUser);
	return (
		<Segment>
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
					<Icon name='user' />
					{user.user.phone_number}
				</div>
				<div>
					<Icon name='user' />
					{user.user.email}
				</div>
			</div>
		</Segment>
	);
}
