import React from 'react';
import {Link} from 'react-router-dom';


export function EmployeeNavBar() {
    return (
        <div className="ui violet three item inverted menu">
            <Link className="item" to='/search'>Search</Link>
            <Link className="item" to='/myappointments'>Appointments</Link>
            <Link className="item" to='/mytasks'>Task</Link>
        </div>
    )
}