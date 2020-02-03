import React, {useEffect} from 'react';
import {history} from '../history';
import {PetPortalNavBar} from './PetPortalNavBar'
import {useDispatch, useSelector} from 'react-redux'


export function MakeApptForm() {

    const dispatch = useDispatch()
    const apptForm = useSelector(state => state.apptForm)
    const allEmployees = useSelector(state => state.allEmployees )
    const currentPet = useSelector(state => state.currentPet)
    console.log(currentPet)

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/appointments', {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                pet_id: currentPet.id,
                employee_id: apptForm.employee_id,
                date: apptForm.date,
                start_time: apptForm.start_time,
                end_time: apptForm.end_time
            })
        })
            .then(response => response.json())
            .then(history.push('/myprofile'))
    }

    useEffect(() => {
        fetch('http://localhost:3000/employees', {
          headers: {
              Authorization: `Bearer ${localStorage.token}`
          }
        })
          .then(response => response.json())
          .then(response => 
            dispatch({ type: 'STORE_ALL_EMPLOYEES', payload: response}))
      }, [])

    if (allEmployees === null ) return <h1>Loading</h1>
    return (
        <div>
            <PetPortalNavBar/>
            <div style={{ "maxWidth": "400px", margin: "auto"}}>
                <h1>Make Appointment Form</h1>
                <form className="ui form" >
                    <div className="field">
                        <label>Who do you want to make an appointment with?</label>
                        <select className="ui fluid dropdown"
                        onChange={event => dispatch({ type: 'STORE_APPT_FORM', key: "employee_id", payload: event.target.value})}>
                            <option value="">Employee</option>
                            {allEmployees.map( employee =>  <option value={employee.id}>{employee.first_name}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Appointment Date</label>
                        <input type="text" placeholder="MM-DD-YYYY"
                        onChange={event => dispatch({ type: 'STORE_APPT_FORM', key: "date", payload: event.target.value})}/>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Start Time</label>
                            <select className="ui fluid dropdown"
                            onChange={event => dispatch({ type: 'STORE_APPT_FORM', key: "start_time", payload: event.target.value})}>
                                <option value="">Time</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>End Time</label>
                            <select className="ui fluid dropdown"
                            onChange={event => dispatch({ type: 'STORE_APPT_FORM', key: "end_time", payload: event.target.value})}>
                                <option value="">Time</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="ui blue button" onClick={(event) => handleSubmit(event)}>Request Appointment</div>
                </form>
            </div>
        </div>
    )


}