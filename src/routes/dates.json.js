export async function get() {
	const url =
		'https://www.googleapis.com/calendar/v3/calendars/en.usa%23holiday%40group.v.calendar.google.com/events?key=AIzaSyB5xuIbDJ9zWAgQyToXV22LPstt9UYGtZs';
	const response = await fetch(url);
	const data = await response.json();
	const holidays = data.items;
	const year = new Date().getFullYear();
	let dayOfLent = 0;

	const easter = holidays
		.filter((holiday) => {
			if (holiday.summary === 'Easter Sunday') {
				return holiday;
			}
		})
		.filter((easterHoliday) => {
			if (easterHoliday.start.date.slice(0, 4) === year.toString()) {
				return easterHoliday;
			}
		});

	const date = new Date(easter[0].start.date);
	date.setDate(date.getDate() - 46);
	const startOfLent = new Date(date);

	if (Date.now() > startOfLent.getTime()) {
		dayOfLent = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
	}

	return {
		status: response.status,
		body: {
			startOfLent,
			dayOfLent
		}
	};
}
