import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SelectedAppointment extends Component {
	constructor(props){
		super(props);

		this.state = {
			time: '',
			name: '',
			phoneNumber: ''

		};

		this.onNameChange = this.onNameChange.bind(this);
		this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
	}

	onNameChange(event){
		this.setState({
			name: event.target.value
		})
	}

	onPhoneNumberChange(event){
		this.setState({
			phoneNumber: event.target.value
		})
	}

	render () {
		if (!this.props.appointment) {
			return <div>Select an appointment to get started.</div>;
		}

		return (
			<div>
				<div className="modal fade" id="appointmentModal" tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				      	{this.props.appointment.time} {this.state.phoneNumber} | {this.state.name}
				        <button type="button" className="close" data-dismiss="modal"></button>
				        <h4 className="modal-title" id="myModalLabel"></h4>
				      </div>
				      <div className="modal-body">
				        <form>
				          <div className="form-group">
				            <label htmlFor="appointment-name" className="control-label">Name:</label>
				            <input type="text" className="form-control" id="appointment-name" value={this.state.name} onChange={this.onNameChange}/>
				          </div>
				          <div className="form-group">
				          	<div className="form-group">
					            <label htmlFor="appointment-phone" className="control-label">Phone Number:</label>
					            <input type="text" className="form-control" id="appointment-phone" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange}/>
				          </div>
				          </div>
				        </form>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
				<div>
					<div className="panel panel-default center-block">
						<div className="panel-heading">
							<h3 className="panel-title">Selected Appointment</h3>
						</div>
						<div>Time: {this.props.appointment.time}</div>
						<div>Name: {this.props.appointment.name}</div>
						<div>Phone Number: {this.props.appointment.phoneNumber}</div>
					</div>
				</div>
			</div>
		);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.appointment.phoneNumber !== this.state.phoneNumber) {
			this.setState({ phoneNumber: nextProps.appointment.phoneNumber });
		}

		if (nextProps.appointment.name !== this.state.name) {
			this.setState({ name: nextProps.appointment.name });
		}
	}

}


function mapStateToProps(state){
	return {
		appointment: state.selectedAppointment
	}
}

export default connect(mapStateToProps)(SelectedAppointment);