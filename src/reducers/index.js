import { combineReducers } from 'redux';
import CitiesReducer from './reducer_cities'; 

const rootReducer = combineReducers({
	appointments: CitiesReducer
});

export default rootReducer;