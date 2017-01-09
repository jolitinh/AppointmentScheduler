import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAppointment } from '../actions/index';

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
		this.onSaveChanges = this.onSaveChanges.bind(this);
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

	onSaveChanges(event){
		let editedAppointment = {
			time: this.state.time,
			name: this.state.name,
			phoneNumber: this.state.phoneNumber
		};
		
		this.props.updateAppointment(editedAppointment)
	}

	render () {
		return (
			<div>
				<div className="modal fade" id="appointmentModal" tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				      	{(this.props.appointment ? this.props.appointment.time : '')}
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
				        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onSaveChanges}>Save changes</button>
				      </div>
				    </div>
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

		this.setState({ time: nextProps.appointment.time });
	}

}

function mapStateToProps(state){
	debugger;
	return {
		appointment: state.selectedAppointment
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({updateAppointment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedAppointment);