import React from 'react';
import {Link} from 'react-router-dom';


export function EmployeeNavBar() {
    return (
        <div className="ui menu">
            <Link className="item" to='/search'>Search</Link>
            <div className="item">Appointments</div>
            <div className="item">Task</div>
            <div className="right menu">
                <div className="ui pink button">Log Out</div>
            </div>
        </div>
    )
}