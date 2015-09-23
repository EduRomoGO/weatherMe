
function calculateWeekDay(i) {
	var day = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var dayToReturn = day.getDay() + (i+1);
	if (dayToReturn >= 7){
		dayToReturn = dayToReturn - 7;
	}
	return weekday[dayToReturn];
}