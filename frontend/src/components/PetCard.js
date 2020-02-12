import React from "react";
import corgiPuppy from "../images/corgi_puppy.jpg";

export function PetCard(props) {
	return (
		<div>
			<div style={{ paddingBottom: "10px" }}>
				<b style={{ paddingLeft: "5px", fontSize: "18px" }}>{props.pet.name}</b>
			</div>
			<img src={corgiPuppy} className='ui large image' alt='pet' />
		</div>
	);
}
