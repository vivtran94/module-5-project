import React from 'react';
import {PetPortalNavBar} from './PetPortalNavBar'
import {useSelector} from 'react-redux'
import {PetPortalProfileCard} from './PetPortalProfileCard'
import {PetCard} from './PetCard'
import {Divider, Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export function PetPortalProfilePage() {

    const user = useSelector(state => state.currentUser)
    console.log(user)
    

    return (
        
        <div>
            <PetPortalNavBar/>
            <PetPortalProfileCard/>
            <Divider horizontal>
                <Header as='h4'>
                    <Link to='/addpet'><Icon name='plus'/>  Add Pet  </Link>
                </Header>
           </Divider>
            <PetCard/>
        </div>
    )
}