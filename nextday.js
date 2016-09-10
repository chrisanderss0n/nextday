function next(date, increment) {
	var today = new Date(date);
	var newDate;

	// initializing increment to zero if not passed in
	if (increment === undefined) {
		increment = 0;
	}

	// adjusting passed in increment by 1 because we are zero based
	if (increment) {
		increment -= 1;
	}

	var i = 0;
	var dayOfWeek = parseInt(today.getDay(), 10);
	if ((dayOfWeek === 6) || (dayOfWeek === 0)) {
		// when starting on a weekend we increase the loop by 1
		i++;
	}

	// starting today increment the date by 1 for each business day
	do {
		var day = parseInt(today.getDay(), 10);
		if (!((day === 6) || (day === 0))) {
			i++;
		}

		today = incrementDate(today, 1);
	} while (i <= increment);

	dayOfWeek = parseInt(today.getDay(), 10);
	if ((dayOfWeek === 6) || (dayOfWeek === 0)) {
		today = nextWeekDay(today);
	}

	return today;
}

function nextWeekDay(date) {
	var calculatedDay = date.getDate();
	var dateString;

	if (date.getDay() === 6) {
		// it's Saturday, so add 2 days to get Monday
		calculatedDay += 2;
	} else if (date.getDay() === 5) {
		// it's Friday, so add 3 days to get Monday
		calculatedDay += 3;
	} else {
		// any other day of the week we just add 1 to get the next week day
		calculatedDay += 1;
	}

	var checkDate = adjustForMonth(calculatedDay, date);

	if (checkDate) {
		nextWeekDay(checkDate);
	} else {
		dateString = (date.getMonth() + 1) + "/" + calculatedDay + "/" + date.getFullYear();	
		return new Date(dateString);
	}
}

function adjustForMonth(calculatedDay, date) {
	var newDate;
	var newDay = calculatedDay - daysInMonth(date.getMonth(), date.getFullYear());

	if (newDay > 0) {
		if (date.getMonth() === 11) {
			newDate = "1/" + newDay + "/" + (parseInt(date.getFullYear(), 10) + 1);
		} else {
			newDate = (parseInt(date.getMonth(), 10) + 1) + "/" + newDay + "/" + date.getFullYear();
		}
		return new Date(newDate);
	} else {
		// if the date was valid then return false to indicate nothing was adjusted
		return false;
	}
}

function incrementDate(date, increment) {
	var newDate = parseInt(date.getDate(), 10) + increment;
	var newFullDateString;

	// do we have to move into a new month?
	if (adjustForMonth(newDate, date)) {
		// did we start in December?
		if (date.getMonth() === 11) {
			newFullDateString = "1/1/" + (parseInt(date.getFullYear(), 10) + 1);
		} else {
			// we have to add 2 because months are 0 based
			newFullDateString = (parseInt(date.getMonth(), 10) + 2) + "/1/" + date.getFullYear();
		}
	} else {
		newFullDateString = (parseInt(date.getMonth(), 10) + 1) + "/" + newDate + "/" + date.getFullYear();
	}

	return new Date(newFullDateString);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}