import React from 'react';
import {Grid, Segment, Table, Icon, Header, Divider} from 'semantic-ui-react'
import corgiPuppy from '../images/corgi_puppy.jpg'
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'

export function PetCard(props) {

    const dispatch = useDispatch()

    return (
        
        <div style={{ "maxWidth": "1000px", margin: "auto"}}>
            <Grid columns='equal'>
                <Grid.Row stretched>
                    <Grid.Column width={5}>
                        <Segment><img src={corgiPuppy} alt="pet" style={{width: '100%', height: '100%'}}/></Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Table definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width={4}>Name</Table.Cell>
                                    <Table.Cell>{props.pet.name}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Date of Birth</Table.Cell>
                                    <Table.Cell>{props.pet.date_of_birth}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Gender</Table.Cell>
                                    <Table.Cell>{props.pet.gender}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Breed</Table.Cell>
                                    <Table.Cell>{props.pet.breed}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Color</Table.Cell>
                                    <Table.Cell>{props.pet.color}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider horizontal>
                <Header as='h4'>
                    <Link to='/makeappt' onClick={()=> dispatch({ type: 'CURRENT_PET', payload: props.pet})}><Icon name="calendar plus outline"/>{`Make an appointment for ${props.pet.name}`}</Link>
                </Header>
            </Divider>
        </div>
    )
}