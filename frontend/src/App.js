import React from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './history.js';
import 'semantic-ui-css/semantic.min.css'

import {PublicHomePage} from './components/PublicHomePage'
import {LoginPage} from './components/LoginPage'
import {ServicesPage} from './components/ServicesPage'
import {MeetOurStaffPage} from './components/MeetOurStaffPage'

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={PublicHomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/meetourstaff' component={MeetOurStaffPage} />
      </div>
    </Router>
  );
}

