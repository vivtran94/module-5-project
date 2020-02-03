import {createStore} from 'redux'

const initialState = {
    usernameInput: '',
    passwordInput: '',
    currentUser: null,
    currentEmployee: null,
    allEmployees: null,
    currentPet: null,
    
    petForm: {
        name: '',
        dateOfBirth: '',
        gender: '',
        breed: '',
        color: '',
    },

    apptForm: {
        employee_id: '',
        date: '',
        start_time: '',
        end_time: ''
    }
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'STORE_USERNAME_INPUT' :
            return {
                ...currentState,
                usernameInput: action.payload
            }
        case 'STORE_PASSWORD_INPUT' :
            return {
                ...currentState,
                passwordInput: action.payload
            }
        case 'STORE_CURRENT_USER' :
            return {
                ...currentState,
                currentUser: action.payload
            }
        case 'STORE_CURRENT_EMPLOYEE' :
            return {
                ...currentState,
                currentEmployee: action.payload
            }
        case 'STORE_PET_FORM' :
            return {
                ...currentState,
                petForm: {
                    ...currentState.petForm, 
                    [action.key]: action.payload
                }
            }
        case 'STORE_APPT_FORM' :
            return {
                ...currentState,
                apptForm: {
                    ...currentState.apptForm, 
                    [action.key]: action.payload
                }
            }
        case 'STORE_ALL_EMPLOYEES' :
            return {
                ...currentState,
                allEmployees: action.payload
            }
        case 'CURRENT_PET' :
            return {
                ...currentState,
                currentPet: action.payload
            }

    }
    return currentState  
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.store = store