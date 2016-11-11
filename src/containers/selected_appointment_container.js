import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SelectedAppointment extends Component {
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
				      	{this.props.appointment.time}
				        <button type="button" className="close" data-dismiss="modal"></button>
				        <h4 className="modal-title" id="myModalLabel"></h4>
				      </div>
				      <div className="modal-body">
				        <form>
				          <div className="form-group">
				            <label htmlFor="appointment-name" className="control-label">Name:</label>
				            <input type="text" className="form-control" id="appointment-name" value={this.props.appointment.name}/>
				          </div>
				          <div className="form-group">
				          	<div className="form-group">
					            <label htmlFor="appointment-phone" className="control-label">Phone Number:</label>
					            <input type="text" className="form-control" id="appointment-phone" value={this.props.appointment.phoneNumber}/>
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
}


function mapStateToProps(state){
	return {
		appointment: state.selectedAppointment
	}
}

export default connect(mapStateToProps)(SelectedAppointment);