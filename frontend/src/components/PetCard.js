import React from 'react';
import {useSelector} from 'react-redux'
import {Grid, Segment, Table} from 'semantic-ui-react'
import corgiPuppy from '../images/corgi_puppy.jpg'

export function PetCard() {

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
                                    <Table.Cell width={4}>NAME</Table.Cell>
                                    <Table.Cell>NAME HERE</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>DATE OF BIRTH</Table.Cell>
                                    <Table.Cell>DATE OF BIRTH HERE</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>GENDER</Table.Cell>
                                    <Table.Cell>GENDER HERE</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>BREED</Table.Cell>
                                    <Table.Cell>BREED HERE</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>COLOR</Table.Cell>
                                    <Table.Cell>COLOR HERE</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}