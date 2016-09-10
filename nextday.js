function next(date, increment) {
	// DEBUG:  console.log("next(" + date + ", " + increment + ")");
	var today = new Date(date);
	var newDate;

	if (increment === undefined) {
		increment = 0;
	}

	if (increment) {
		increment -= 1;
	}

	// check to see if today is Saturday or Sunday
	if ((date.getDay() === 6) || (date.getDay() === 0)) {
		increment += 1;
	}

	// first find out how many business days are left in the week
	var daysLeft = (function () {
		if ((date.getDay() === 6) || (date.getDay() === 0)) {
			return 5;
		} else {
			return (6 - date.getDay()) - 1;
		}
	})();
	console.log("daysLeft: " + daysLeft);

	// then check to see if the increment is greater than the number of business days left
	if (increment > daysLeft) {
		// if the increment is greater than the number of business days left, begin counting week-ends starting at 1
		var numWeekEnds = 1;
		// count the number of weeks the increment spans
		var numWeeks = Math.floor(((increment) / 5));
		console.log("numWeeks: " + numWeeks);
		// if the increment spans more than 1 week
		if (numWeeks > 1) {
			// add the number of weeks to numWeekEnds
			numWeekEnds += numWeeks;
		}

		console.log("increment before adding week-ends: " + increment);
		// add the number of week-end days to the increment
		increment += numWeekEnds * 2;
		console.log("increment after adding week-ends: " + increment);
	}

	// if the increment is less than or equal to the number of business days left, then just proceed to get our date

	newDate = incrementDate(date, increment);
	newDate = nextWeekDay(newDate);

	return newDate;
}

function nextWeekDay(date) {
	console.log("nextWeekDay(" + date + ")");
	var calculatedDay = date.getDate();
	var dateString;

	if (date.getDay() === 6) {
		// it's Saturday, so add 2 days to get Monday
		calculatedDay += 2;
	} else if (date.getDay() === 5) {
		// it's Friday, so add 3 days to get Monday
		console.log("it's friday");
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
		console.log("our final date string: " + dateString);
		return new Date(dateString);
	}
}

function adjustForMonth(calculatedDay, date) {
	console.log("adjustForMonth(" + calculatedDay + ", " + date + ")");
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
		console.log("no month adjustment");
		// if the date was valid then return false to indicate nothing was adjusted
		return false;
	}
}

function incrementDate(date, increment) {
	console.log("incrementDate(" + date + ", " + increment + ")");
	var newDate = parseInt(date.getDate(), 10) + increment;
	console.log("newDate "+ newDate);
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

	console.log("newFullDateString " + newFullDateString);
	return new Date(newFullDateString);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}