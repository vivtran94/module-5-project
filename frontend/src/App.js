import React from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './history.js';
import 'semantic-ui-css/semantic.min.css'

import {PublicHomePage} from './components/PublicHomePage'
import {PublicServicesPage} from './components/PublicServicesPage'
import {PublicMeetOurStaffPage} from './components/PublicMeetOurStaffPage'
import {SignUpForm} from './components/SignUpForm'
import {PetPortalProfilePage} from './components/PetPortalProfilePage'

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={PublicHomePage} />
        <Route exact path='/services' component={PublicServicesPage} />
        <Route exact path='/meetourstaff' component={PublicMeetOurStaffPage} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/myprofile' component={PetPortalProfilePage}/>
      </div>
    </Router>
  );
}

