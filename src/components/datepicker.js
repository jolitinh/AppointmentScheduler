import React, {Component} from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ input: { value, onChange } }) => {
	return (
		<ReactDatePicker
			selected={value ? value : null}
			onChange={newDate => onChange(newDate)}
			placeholderText="mm/dd/yyyy"
			peekNextMonth 
			showMonthDropdown 
			showYearDropdown 
			dropdownMode="select" />
	)
}

export default DatePicker;