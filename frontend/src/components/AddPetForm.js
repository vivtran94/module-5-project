import React from 'react';
import {history} from '../history';
import {PetPortalNavBar} from './PetPortalNavBar'
import {useDispatch, useSelector} from 'react-redux'


export function AddPetForm() {

    const dispatch = useDispatch()
    const petForm = useSelector(state => state.petForm)
    console.log(petForm.name)
    

    function handleSubmit(event) {
        if(localStorage.token){
            event.preventDefault()
            fetch('http://localhost:3000/pets', {
                method: 'POST',
                headers: { 
                    Authorization: `Bearer ${localStorage.token}`,
                    'Content-Type' : 'application/json'
                }, 
                body: JSON.stringify({
                    name: petForm.name,
                    dateOfBirth: petForm.dateOfBirth,
                    gender: petForm.gender,
                    breed: petForm.breed,
                    color: petForm.color
                })
            })
                .then(response => response.json())
                .then(signup => {
                    if (signup.failed) {
                        console.log("failed login")
                    } else {
                        history.push('/myprofile')

                    }
                })
        } else {
            history.push('/')
        }
    }

    
    return (
        <div>
            <PetPortalNavBar/>
            <div style={{ "maxWidth": "400px", margin: "auto"}}>
                <h1>Add Pet Form</h1>
                <form className="ui form" >
                    <div className="two fields">
                        <div className="twelve wide field">
                            <label>Name</label>
                            <input type="text" placeholder="Name"
                            onChange={event => dispatch({ type: 'STORE_PET_FORM', key: "name", payload: event.target.value})}/>
                        </div>
                        <div className="four wide field">
                            <label>Gender</label>
                            <select className="ui fluid dropdown"
                            onChange={event => dispatch({ type: 'STORE_PET_FORM', key: "gender", payload: event.target.value})}>
                                <option value="">Gender</option>
                                <option value="F">Female</option>
                                <option value="M">Male</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <label>Date of Birth</label>
                        <input type="text" placeholder="MM-DD-YYYY"
                        onChange={event => dispatch({ type: 'STORE_PET_FORM', key: "dateOfBirth", payload: event.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Breed</label>
                        <input type="text" placeholder="Breed"
                        onChange={event => dispatch({ type: 'STORE_PET_FORM', key: "breed", payload: event.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Color</label>
                        <input type="text" placeholder="Color"
                        onChange={event => dispatch({ type: 'STORE_PET_FORM', key: "color", payload: event.target.value})}/>
                    </div>
                    <div className="ui blue button" onClick={(event) => handleSubmit(event)}>Add</div>
                </form>
            </div>
        </div>
    )


}