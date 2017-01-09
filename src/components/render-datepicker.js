import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'

const RenderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error}}) => {


	return (
  <span>
        <DatePicker 
        	dateForm="MM/DD/YYYY" 
        	selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </span>
)};

export default RenderDatePicker;