function next(date, increment) {
	var months_string = '{"0":"January","1":"February","2":"March","3":"April","4":"May","5":"June","6":"July","7":"August","8":"September","9":"October","10":"November","11":"December"}';
	var months = JSON.parse(months_string);
	var today = new Date(date);

	// wrapping the anonymous function in () and then adding () at the end means that the function will execute
	var nextDate = (function() {
		// get the next weekday incremented by 1
		// nextWeekDay could give us a number that isn't valid (i.e. day 33 when there are only 30 days in the month)
		var proposedDay = nextWeekDay(today, increment);
		// getting a new date in the next month if proposedDay exceeded the current month
		var adjustedDay = adjustForMonth(proposedDay, today);

		var dateString;
		
		// if they are the same then we didn't have to move into the next month
		if (proposedDay === adjustedDay) {
			dateString = today.getMonth() + 1 + "/" + proposedDay + "/" + today.getFullYear();
			return new Date(dateString);
		} else {
			var newDate;
			// we did move to the next month, so let's make sure our adjustedDay is a weekday
			// first we have to check to see if we are moving into a new year
			if (today.getMonth() === 11) {
				dateString =  "1/" + adjustedDay + "/" + (parseInt(today.getFullYear(),10) + 1);
				newDate = new Date(dateString);
				// is it Sunday or Saturday?
				if ((newDate.getDay() === 0) || (newDate.getDay() === 6)) {
					// it is so get the next week day
					dateString = "1/" + nextWeekDay(newDate, 0) + "/" + (parseInt(today.getFullYear(),10) + 1);	
				}
			} else {
				dateString = today.getMonth() + 2 + "/" + adjustedDay + "/" + today.getFullYear();
				newDate = new Date(dateString);
				// is it Sunday or Saturday?
				if ((newDate.getDay() === 0) || (newDate.getDay() === 6)) {
					// it is so get the next week day
					dateString = today.getMonth() + 2 + "/" + nextWeekDay(newDate, 0) + "/" + today.getFullYear();	
				}
			}
			return new Date(dateString);
		}
	})();

	var finalValue = months[nextDate.getMonth()] + " " + nextDate.getDate();
	return finalValue;
}

function nextWeekDay(date, increment) {
	if (!increment) {
		increment = 0;
	}

	var returnVal;

	// the below logic doesn't account for increments larger than 1
	// so if someone put in 3 for example, the logic could very easily return Saturday or Sunday
	if (date.getDay() === 6) {
		returnVal = date.getDate() + 2 + increment;
	} else if (date.getDay() === 5) {
		returnVal = date.getDate() + 3 + increment;
	} else if (date.getDay() === 4) {
		if (increment > 0) {
			returnVal = date.getDate() + 3 + increment;	
		} else {
			returnVal = date.getDate() + 1 + increment;
		}
	} else {
		returnVal = date.getDate() + 1 + increment;
	}


	return returnVal;
}

function adjustForMonth(calculatedDay, date) {
	if (calculatedDay > daysInMonth(date.getMonth(), date.getFullYear())) {
		return 1;
	} else {
		return calculatedDay;
	}
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}