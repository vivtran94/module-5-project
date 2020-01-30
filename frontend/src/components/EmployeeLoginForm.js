import React from 'react';
import {history} from '../history';

export class EmployeeLoginForm extends React.Component {

    state = ({
        usernameInput: "",
        passwordInput: "",
        errorMessage: "",
    })

    render() {
        return (
            <div>
                <form className="ui form" >
                    <div className="field">
                        <label>Username</label>
                        <input type="text" placeholder="Username"
                        onChange={event => this.setState({ usernameInput: event.target.value })}
                        value={this.state.usernameInput}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" placeholder="Password" 
                        onChange={event => this.setState({ passwordInput: event.target.value })}
                        value={this.state.passwordInput}/>
                    </div>
                    <div >
                        {this.state.errorMessage.length > 1 ? 
                        <p className="ui pointing red basic label">{this.state.errorMessage}</p>
                        :
                        null
                        }
                        </div>
                    <div className="ui pink button" onClick={this.handleSubmit}>Log In</div>

                </form>
            </div>

        )
    }
}