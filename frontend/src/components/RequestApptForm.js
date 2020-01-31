import React from 'react';
import {history} from '../history';
import {PetPortalNavBar} from './PetPortalNavBar'


export class RequestApptForm extends React.Component {
    
    state = {
        name: "",
        dateOfBirth: "",
        gender: "",
        breed: "",
        color: "",
    }
    


    handleSubmit = (event) => {
        if(localStorage.token){
            event.preventDefault()
            fetch('http://localhost:3000/pets', {
                method: 'POST',
                headers: { 
                    Authorization: `Bearer ${localStorage.token}`,
                    'Content-Type' : 'application/json'
                }, 
                body: JSON.stringify({
                    name: this.state.name,
                    dateOfBirth: this.state.dateOfBirth,
                    gender: this.state.gender,
                    breed: this.state.breed,
                    color: this.state.color
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

    render () {
        return (
            <div>
                <PetPortalNavBar/>
                <div style={{ "maxWidth": "400px", margin: "auto"}}>
                    <h1>Add Pet Form</h1>
                    <form className="ui form" >
                        <div className="two fields">
                            <div className="twelve wide field">
                                <label>First Name</label>
                                <input type="text" placeholder="Name"
                                onChange={event => this.setState({ name: event.target.value })}
                                value={this.state.name}/>
                            </div>
                            <div className="four wide field">
                                <label>Gender</label>
                                <select className="ui fluid dropdown"
                                onChange={event => this.setState({ gender: event.target.value })}
                                value={this.state.gender}>
                                    <option value="">Gender</option>
                                    <option value="F">Female</option>
                                    <option value="M">Male</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                            <label>Date of Birth</label>
                            <input type="text" placeholder="MM-DD-YYYY"
                            onChange={event => this.setState({ dateOfBirth: event.target.value })}
                            value={this.state.dateOfBirth}/>
                        </div>
                        <div className="field">
                            <label>Breed</label>
                            <input type="text" placeholder="Breed"
                            onChange={event => this.setState({ breed: event.target.value })}
                            value={this.state.breed}/>
                        </div>
                        <div className="field">
                            <label>Color</label>
                            <input type="text" placeholder="Color"
                            onChange={event => this.setState({ color: event.target.value })}
                            value={this.state.color}/>
                        </div>
                        <div className="ui blue button" onClick={(event) => this.handleSubmit(event)}>Add</div>
                    </form>
                </div>
            </div>
        )
    }
    

}