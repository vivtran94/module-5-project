import React from 'react';
import {useSelector} from 'react-redux'
import {Grid, Segment, Table} from 'semantic-ui-react'
import corgiPuppy from '../images/corgi_puppy.jpg'

export function PetPortalProfileCard() {

    const user = useSelector(state => state.currentUser)
    console.log(user)
    
    if(user  === null) return <h1>Loading</h1>

    return (
        
        <div style={{ "maxWidth": "1000px", margin: "auto"}}>
            <Grid columns='equal'>
                <Grid.Row stretched>
                    <Grid.Column width={5}>
                        <Segment><img src={corgiPuppy} alt="profile" style={{width: '100%', height: '100%'}}/></Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Table definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width={4}>Name</Table.Cell>
                                    <Table.Cell>{user.first_name} {user.last_name}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Date of Birth</Table.Cell>
                                    <Table.Cell>{user.date_of_birth}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Phone Number</Table.Cell>
                                    <Table.Cell>{user.phone_number}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>E-Mail</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Driver License</Table.Cell>
                                    <Table.Cell>{user.driver_license}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Address</Table.Cell>
                                    <Table.Cell>{`${user.street_address}, ${user.street_city}, ${user.street_state} ${user.street_zipcode}`}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )


}