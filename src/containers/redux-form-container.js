import React, {Component} from 'react';
import SampleReduxForm from '../components/sample-redux-form-component';

class ReduxFormContainer extends React.Component {

	handleSubmit = values => {
		console.log("Form Values:", values);
		//convert date from moment to whatever activate uses
	}

	render(){
		return (
			<SampleReduxForm onSubmit={this.handleSubmit} />
		)
	}
}

export default ReduxFormContainer;