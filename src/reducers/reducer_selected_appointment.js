  export default function(currentState = null , action ) {
  	switch(action.type){
  		case 'APPOINTMENT_SELECTED':
  			return action.data
  	}

  	return currentState;
  }