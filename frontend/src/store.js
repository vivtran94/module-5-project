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
	searchValue: "",
	searchResult: [],
	selectedNote: null,

	petForm: {
		name: "",
		dateOfBirth: "",
		gender: "",
		breed: "",
		color: "",
		profile_pic: ""
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

	sidebar: {
		animation: "",
		direction: "",
		dimmed: false,
		visible: false
	},

	taskForm: {
		employee_id: "",
		title: "",
		body: ""
	},

	noteForm: {
		title: "",
		body: ""
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
		case "CHANGE_SIDEBAR":
			return {
				...currentState,
				sidebar: {
					...currentState.sidebar,
					[action.key]: action.payload
				}
			};
		case "ALL_USERS":
			return {
				...currentState,
				allUsers: action.payload
			};
		case "STORE_SEARCH_VALUE":
			return {
				...currentState,
				searchValue: action.payload.toLowerCase()
			};
		case "FILTER_ALL_USERS":
			if (currentState.searchValue === "") {
				return {
					...currentState,
					searchResult: []
				};
			}
			return {
				...currentState,
				searchResult: currentState.allUsers.filter(
					user => user.first_name.toLowerCase().includes(currentState.searchValue) || user.last_name.toLowerCase().includes(currentState.searchValue)
				)
			};
		case "STORE_SELECTED_USER":
			return {
				...currentState,
				selectedUser: action.payload
			};
		case "STORE_SELECTED_NOTE":
			return {
				...currentState,
				selectedNote: action.payload
			};
		case "STORE_NOTE_FORM":
			return {
				...currentState,
				noteForm: {
					...currentState.noteForm,
					[action.key]: action.payload
				}
			};
	}
	return currentState;
};

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;
