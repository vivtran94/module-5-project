import React from 'react';
import {Link} from 'react-router-dom';
import {Modal, Dropdown, Menu} from 'semantic-ui-react'
import {LoginPage} from './LoginPage'
import {SignUpForm} from './SignUpForm'

export class PublicNavBar extends React.Component {
    state = { 
        open: false,
        whichModal: ""
    }

    showSignUp = (size) => () => this.setState({ size, open: true, whichModal:"signup"})
    showPetOwnerLogin = (size) => () => this.setState({ size, open: true, whichModal:"petownerlogin"})
    showEmployeeLogin = (size) => () => this.setState({ size, open: true, whichModal:"employeelogin"})
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state
        return (
            <div>
                <div class="ui menu">
                    <Link className="item" to="/">Home</Link>
                    <Link className="item" to="/services">Services</Link>
                    <Link className="item" to="/meetourstaff">Meet Our Staff</Link>
                    <div class="right menu">
                        <div className="item" onClick={this.showSignUp('small')}>Sign Up</div>
                        <div>
                        <Dropdown text='Login' pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Pet Owner</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Employee</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Sign Up</Modal.Header>
                    <Modal.Content>
                        <SignUpForm close={this.close}/>
                    </Modal.Content>
                </Modal>


            </div>
        )
    }
}