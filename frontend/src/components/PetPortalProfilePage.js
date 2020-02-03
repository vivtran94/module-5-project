import React, {useEffect} from 'react';
import {PetPortalNavBar} from './PetPortalNavBar'
import {useDispatch, useSelector} from 'react-redux'
import {PetPortalProfileCard} from './PetPortalProfileCard'
import {PetCard} from './PetCard'
import {Divider, Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export function PetPortalProfilePage() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.currentUser)

    // useEffect(() => {
    //     fetch('http://localhost:3000/get_user', {
    //       headers: {
    //           Authorization: `Bearer ${localStorage.token}`
    //       }
    //     })
    //       .then(response => response.json())
    //       .then(response => 
    //         dispatch({ type: 'STORE_CURRENT_USER', payload: response}))
    // }, [])


    if(user  === null) return <h1>Loading</h1>
    return (
        
        <div>
            <PetPortalNavBar/>
            <PetPortalProfileCard/>
            <Divider horizontal>
                <Header as='h4'>
                    <Link to='/addpet'><Icon name='plus'/>Add Pet</Link>
                </Header>
           </Divider>
           {user.pets.map( pet => <PetCard pet={pet}/>)}
            
        </div>
    )
}