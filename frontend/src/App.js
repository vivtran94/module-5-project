import React, {useEffect} from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import {history} from './history.js';
import {PrivateRoute} from './PrivateRoute'
import {useDispatch} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import {PublicHomePage} from './components/PublicHomePage'
import {PublicServicesPage} from './components/PublicServicesPage'
import {PublicMeetOurStaffPage} from './components/PublicMeetOurStaffPage'
import {SignUpForm} from './components/SignUpForm'
import {PetPortalProfilePage} from './components/PetPortalProfilePage'
import {EmployeeHomePage} from './components/EmployeeHomePage'
import {AddPetForm} from './components/AddPetForm'
import {MakeApptForm} from './components/MakeApptForm';
import {AppointmentList} from './components/AppointmentList';
import {TaskList} from './components/TaskList';

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/get_user', {
      headers: {
          Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(response => 
        dispatch({ type: 'STORE_CURRENT_USER', payload: response}))
}, [])

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={PublicHomePage}/>
          <Route exact path='/services' component={PublicServicesPage}/>
          <Route exact path='/meetourstaff' component={PublicMeetOurStaffPage}/>
          <Route exact path='/signup' component={SignUpForm}/>
          <Route exact path='/myprofile' component={PetPortalProfilePage}/>
          <Route exact path='/employee/home' component={EmployeeHomePage}/>
          <Route exact path='/addpet' component={AddPetForm}/>
          <Route exact path='/myappointments' component={AppointmentList}/>
          <Route exact path='/makeappt' component={MakeApptForm}/>
          <Route exact path='/mytasks' component={TaskList}/>
        </Switch>
      </Router>
    </div>
  );
}

