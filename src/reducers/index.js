import { combineReducers } from 'redux';
import AppointmentsReducer from './reducer_appointments'; 
import SelectedAppointmentReducer from './reducer_selected_appointment'

const rootReducer = combineReducers({
	appointments: AppointmentsReducer,
	selectedAppointment: SelectedAppointmentReducer
});

export default rootReducer;