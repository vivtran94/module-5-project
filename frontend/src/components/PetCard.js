import React from "react";
import { Icon } from "semantic-ui-react";
import corgiPuppy from "../images/corgi_puppy.jpg";

export function PetCard(props) {
	return (
		<div>
			<h4>
				{props.pet.gender === "M" ? <Icon circular name='mars' /> : <Icon circular name='venus' />}
				{`${props.pet.name} (${props.pet.date_of_birth})`}
			</h4>
			<img src={corgiPuppy} className='ui large image' alt='pet' />
		</div>
	);
}
