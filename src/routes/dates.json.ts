/** @type {import('./index').RequestHandler} */

export async function get(): Promise<{
	body: { startOfLent: Date; dayOfLent: number; today: string };
	status: number;
}> {
	// get list of holidays from google calendar API
	const url_with_secret = `https://www.googleapis.com/calendar/v3/calendars/en.usa%23holiday%40group.v.calendar.google.com/events?key=${
		import.meta.env.VITE_GOOGLE_API_KEY
	}`;
	const response = await fetch(url_with_secret);

	// define variables with defaults to override if we're in lent
	const startOfLent = new Date();
	const today: string = new Date(Date.now()).toLocaleString();
	let dayOfLent = 0;

	if (response.status == 200) {
		// parse response from google calendar API
		const data = await response.json();
		const holidays = data.items;
		const year = new Date().getFullYear();

		// API returns several years worth of holidays, so get just easter of this year
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

		// Convert API response to JS date object
		const easterDate = new Date(easter[0].start.date);
		// find the start of lent based of the day of easter
		const startOfLent = new Date(easter[0].start.date);
		startOfLent.setDate(startOfLent.getDate() - 46);
		// If we're in Lent, find which day of Lent we're in
		if (Date.now() > startOfLent.getTime() && Date.now() < easterDate.getTime()) {
			dayOfLent = Math.floor((Date.now() - startOfLent.getTime()) / (1000 * 60 * 60 * 24));
		}
	}

	return {
		status: response.status,
		body: {
			startOfLent,
			dayOfLent,
			today
		}
	};
}
