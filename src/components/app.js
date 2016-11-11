import React, {Component} from 'react';
import AppointmentList from '../containers/appointments_list_container';
import SelectedAppointment from '../containers/selected_appointment_container';

export default class AppointmentsContainer extends Component {

	render() {
		return (
			<div>
				<div className="panel panel-default center-block">
					<div className="panel-heading">
						<h3 className="panel-title">Appointments</h3>
					</div>
					<AppointmentList />
				</div>
				<SelectedAppointment />
			</div>
		);
	}
}
