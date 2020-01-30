import {createStore} from 'redux'

const initialState = {
    data: []
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'NAME_OF_ACTION' :
            return {
                ...currentState
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