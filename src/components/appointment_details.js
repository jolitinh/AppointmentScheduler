import React from 'react';

const AppointmentDetails = ({appointment, selectAppointment}) => {
	return (
		<a href="#" className={"list-group-item " + (appointment.name  ?  'list-group-item-danger' : '')} onClick={() => {
			$('#appointmentModal').modal('toggle');
			selectAppointment(appointment);
		} }>
			<div className="media">
			  <div className="media-left">
			    <span className="time-slot">{appointment.time}</span>
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading"> {appointment.name}&nbsp;</h4>
			    {appointment.phoneNumber}
			  </div>
			</div>
		</a>
	);
};

export default AppointmentDetails;