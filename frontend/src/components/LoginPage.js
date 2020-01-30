import React from 'react';
import {PetOwnerLoginForm} from './PetOwnerLoginForm'
import {EmployeeLoginForm} from './EmployeeLoginForm'

export function LoginPage() {
    return (
        <div style={{display: "flex", "justify-content": "space-evenly"}}>
            <PetOwnerLoginForm />
            <EmployeeLoginForm />
        </div>
    )
} 