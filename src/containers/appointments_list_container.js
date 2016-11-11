import React, {Component} from 'react';
import AppointmentDetails from '../components/appointment_details';
import { connect } from 'react-redux';
import { selectAppointment } from '../actions/index';
import { bindActionCreators } from 'redux';


class AppointmentList extends Component {
	renderList() {
		return this.props.appointments.map(appointment => 
			<AppointmentDetails 
				key={appointment.time} 
				selectAppointment={this.props.selectAppointment}
				appointment={appointment}/>);
	}

	render() {
		return (
			<ul className="list-group">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		appointments: state.appointments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectAppointment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);