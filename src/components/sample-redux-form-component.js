import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { updateAppointment } from '../actions/index';
import DatePicker from './datepicker';

class SampleReduxForm extends Component {
	/*
	constructor(props){
		super(props);
	}
	*/
	
	render () {
		const { handleSubmit } = this.props;
	    return (
	    	<div> Form
			      <form onSubmit={handleSubmit}>
			        <div>
			          <label htmlFor="firstName">First Name</label>
			          <Field name="firstName" component="input" type="text"/>
			        </div>
			        <div>
			          <label htmlFor="lastName">Last Name</label>
			          <Field name="lastName" component="input" type="text"/>
			        </div>
			        <div>
			          <label htmlFor="email">Email</label>
			          <Field name="email" component="input" type="email"/>
			        </div>
			        <div>
			          <label htmlFor="date">Date</label>
			          <Field name="date" component={DatePicker} />
			        </div>
			        <button type="submit">Submit</button>
			      </form>
	      </div>
    	);
	}
}

SampleReduxForm = reduxForm({
	form: 'contact'
})(SampleReduxForm);

export default SampleReduxForm;