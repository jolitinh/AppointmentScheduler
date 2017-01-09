import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AppointmentsReducer from './reducer_appointments'; 
import SelectedAppointmentReducer from './reducer_selected_appointment'

const rootReducer = combineReducers({
	appointments: AppointmentsReducer,
	selectedAppointment: SelectedAppointmentReducer,
	form: formReducer
});

export default rootReducer;