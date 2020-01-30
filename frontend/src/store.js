import {createStore} from 'redux'

const initialState = {
    usernameInput: "",
    passwordInput: "",
    currentUser: []
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'STORE_USERNAME_INPUT' :
            return {
                ...currentState,
                usernameInput: action.payload
            }
        break;
        case 'STORE_PASSWORD_INPUT' :
            return {
                ...currentState,
                passwordInput: action.payload
            }
        break;
        case 'STORE_CURRENT_USER' :
            return {
                ...currentState,
                currentUser: action.payload
            }
        break;

    }
    return currentState  
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.store = store