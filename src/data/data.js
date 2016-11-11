let Appointments =  [{
		"time": "09:00am",
		"name": "Jorge Hassan",
		"phoneNumber": "(617) 517-4850"
	}, {
		"time": "10:00am"
	}, {
		"time": "11:00am"
	}, {
		"time": "12:00pm"
	}, {
		"time": "01:00pm"
	}, {
		"time": "02:00pm",
		"name": "Jorge Hassan",
		"phoneNumber": "(770) 448-7704"
	}, {
		"time": "03:00pm"
	}, {
		"time": "04:00pm"
	}, {
		"time": "05:00pm"
	}
]

export function getAppointments() {
	  let p = new Promise( (resolve, reject) => {
            window.setTimeout(() => {resolve(Appointments)}, 1000);
      });

	return p;
}