import React from 'react';
import {history} from '../history';
import {PublicNavBar} from './PublicNavBar'


export class SignUpForm extends React.Component {

    state = {
        firstNameInput: "",
        lastNameInput: "",
        dateOfBirthInput: "",
        streetAddressInput: "",
        stateInput: "",
        zipCodeInput: "",
        phoneNumberInput: "",
        phoneNumberTypeInput: "",
        emailInput: "",
        driverLicenseInput: "",
        usernameInput: "",
        passwordInput: "",
        errorMessage: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                firstName: this.state.firstNameInput,
                lastName: this.state.lastNameInput,
                dateOfBirth: this.state.dateOfBirthInput,
                streetAddress: this.state.streetAddressInput,
                state: this.state.stateInput,
                zipCode: this.state.zipCodeInput,
                phoneNumber: this.state.phoneNumberInput,
                phoneNumberType: this.state.phoneNumberTypeInput,
                email: this.state.emailInput,
                driverLicense: this.state.driverLicenseInput,
                username: this.state.usernameInput,
                password: this.state.passwordInput
            })
        })
            .then(res => res.json())
            .then(signup => {

                if (signup.failed) {
                    this.setState({ errorMessage: signup.message})
                } else {
                    history.push('/')
                }
            })
    }

    render() {
        return (
            <div>
                <PublicNavBar />
                <div style={{ "maxWidth": "700px", margin: "auto"}}>
                    <h1>Sign Up Form</h1>
                    <form className="ui form" >
                        <div className="two fields">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name"
                                onChange={event => this.setState({ firstNameInput: event.target.value })}
                                value={this.state.firstNameInput}/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name"
                                onChange={event => this.setState({ lastNameInput: event.target.value })}
                                value={this.state.lastNameInput}/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Date of Birth  (MM-DD-YYYY)</label>
                            <input type="text" placeholder="Date of Birth"
                            onChange={event => this.setState({ dateOfBirthInput: event.target.value })}
                            value={this.state.dateOfBirthInput}/>
                        </div>
                        <div className="field">
                            <label>Street Address</label>
                            <input type="text" placeholder="Street Address"
                            onChange={event => this.setState({ streetAddressInput: event.target.value })}
                            value={this.state.streetAddressInput}/>
                        </div>
                        <div className="fields">
                            <div className="twelve wide field">
                                    <label>State</label>
                                    <select className="ui fluid dropdown"
                                    onChange={event => this.setState({ stateInput: event.target.value })}
                                    value={this.state.stateInput}>
                                        <option value="">State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>ZIP Code</label>
                                <input type="text" placeholder="ZIP Code"
                                onChange={event => this.setState({ zipCodeInput: event.target.value })}
                                value={this.state.zipCodeInput}/>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="twelve wide field">
                                <label>Primary Phone Number</label>
                                <input type="text" placeholder="Primary Phone Number"
                                onChange={event => this.setState({ phoneNumberInput: event.target.value })}
                                value={this.state.phoneNumberInput}/>
                            </div>
                            <div className="five wide field">
                                    <label>Type</label>
                                    <select className="ui fluid dropdown"
                                    onChange={event => this.setState({ phoneNumberTypeInput: event.target.value })}
                                    value={this.state.phoneNumberTypeInput}>
                                        <option value="">Type</option>
                                        <option value="Cell">Cell</option>
                                        <option value="Home">Home</option>
                                        <option value="Work">Work</option>
                                    </select>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>E-mail Address</label>
                                <input type="text" placeholder="E-mail Address"
                                onChange={event => this.setState({ emailInput: event.target.value })}
                                value={this.state.emailInput}/>
                            </div>
                            <div className="field">
                                <label>Driver License</label>
                                <input type="text" placeholder="Driver License"
                                onChange={event => this.setState({ driverLicenseInput: event.target.value })}
                                value={this.state.driverLicenseInput}/>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Username</label>
                                <input type="text" placeholder="Username"
                                onChange={event => this.setState({ usernameInput: event.target.value })}
                                value={this.state.usernameInput}/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="text" placeholder="Password"
                                onChange={event => this.setState({ passwordInput: event.target.value })}
                                value={this.state.passwordInput}/>
                            </div>                               
                        </div>
                        <div className="ui teal button" onClick={(event) => this.handleSubmit(event)}>Submit</div>
                    </form>
                </div>
            </div>  
        )
    }
} 
