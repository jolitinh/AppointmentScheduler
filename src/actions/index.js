export const selectAppointment =  appointment => ({
	type: 'APPOINTMENT_SELECTED',
	data: appointment
});

export const updateAppointment = updatedAppointment => ({
    type: 'UPDATE_APPOINTMENT',
    data: updatedAppointment
})