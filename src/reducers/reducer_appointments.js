export default function(currentState = null, action) {
	let initialState =  [{
			"time": "09:00am"
		}, {
			"time": "10:00am"
		}, {
			"time": "11:00am",
			"name": 'Jason',
			phoneNumber: '(617) 448-4444'
		}, {
			"time": "12:00pm"
		}, {
			"time": "01:00pm"
		}, {
			"time": "02:00pm"
		}, {
			"time": "03:00pm"
		}, {
			"time": "04:00pm"
		}, {
			"time": "05:00pm"
		}
	]

	switch(action.type){
		case 'UPDATE_APPOINTMENT':
			let newAppointmentCollection = currentState.slice();
			let elementIndex = newAppointmentCollection.findIndex(appointment => appointment.time === action.data.time)
			newAppointmentCollection[elementIndex].name = action.data.name;
			newAppointmentCollection[elementIndex].phoneNumber = action.data.phoneNumber;
			return newAppointmentCollection;
		break;
		case '@@redux/INIT':
			return initialState;
		break;
	}

	return currentState;
}