import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export function EmployeeNavBar() {
	return (
		<Menu className='ui blue inverted menu' style={{ borderRadius: "0px" }}>
			<Link className='item' to='/employee/home'>
				Home
			</Link>
			<Link className='item' to='/search'>
				Search
			</Link>
			<Link className='float right item' to='/' onClick={() => localStorage.clear()}>
				Log Out
			</Link>
		</Menu>
	);
}
