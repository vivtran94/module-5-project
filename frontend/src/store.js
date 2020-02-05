import { createStore } from "redux";

const initialState = {
	usernameInput: "",
	passwordInput: "",
	currentUser: null,
	currentEmployee: null,
	allEmployees: null,
	allUsers: null,
	currentPet: null,
	selectedUser: null,

	petForm: {
		name: "",
		dateOfBirth: "",
		gender: "",
		breed: "",
		color: ""
	},

	apptForm: {
		employee_id: "",
		date: "",
		start_time: ""
	},

	modal: {
		display: "",
		size: "",
		open: false
	},

	taskForm: {
		employee_id: "",
		title: "",
		body: ""
	},

	search: {
		value: "",
		result: []
	}
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case "STORE_USERNAME_INPUT":
			return {
				...currentState,
				usernameInput: action.payload
			};
		case "STORE_PASSWORD_INPUT":
			return {
				...currentState,
				passwordInput: action.payload
			};
		case "STORE_CURRENT_USER":
			return {
				...currentState,
				currentUser: action.payload
			};
		case "STORE_CURRENT_EMPLOYEE":
			return {
				...currentState,
				currentEmployee: action.payload
			};
		case "STORE_PET_FORM":
			return {
				...currentState,
				petForm: {
					...currentState.petForm,
					[action.key]: action.payload
				}
			};
		case "STORE_APPT_FORM":
			return {
				...currentState,
				apptForm: {
					...currentState.apptForm,
					[action.key]: action.payload
				}
			};
		case "STORE_TASK_FORM":
			return {
				...currentState,
				taskForm: {
					...currentState.taskForm,
					[action.key]: action.payload
				}
			};
		case "STORE_ALL_EMPLOYEES":
			return {
				...currentState,
				allEmployees: action.payload
			};
		case "CURRENT_PET":
			return {
				...currentState,
				currentPet: action.payload
			};
		case "CHANGE_MODAL":
			return {
				...currentState,
				modal: {
					...currentState.modal,
					[action.key]: action.payload
				}
			};
		case "ALL_USERS":
			return {
				...currentState,
				allUsers: action.payload
			};
		case "CHANGE_SEARCH":
			return {
				...currentState,
				search: {
					...currentState.search,
					[action.key]: action.payload
				}
			};
		case "SELECTED_USER":
			return {
				...currentState,
				selectedUser: action.payload
			};
	}
	return currentState;
};

export const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
