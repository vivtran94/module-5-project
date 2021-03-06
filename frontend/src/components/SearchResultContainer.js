import React from "react";
import { Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

export function SearchResultContainer() {
	const dispatch = useDispatch();
	const searchResult = useSelector(state => state.searchResult);

	return (
		<div>
			{searchResult.length > 0 ? (
				<div style={{ height: "75vh" }}>
					<Segment.Group>
						{searchResult.map(result => (
							<Segment
								onClick={() => dispatch({ type: "STORE_SELECTED_USER", payload: result })}>{`${result.first_name} ${result.last_name}`}</Segment>
						))}
					</Segment.Group>
				</div>
			) : null}
		</div>
	);
}
