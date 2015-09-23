
var pressure = [];
var humidity = [];
var windSpeed = [];
var windDirection = [];


function processData(weatherData) {
	var categories = [];
	var weatherSummary = "<h1>Weather Description:</h1>";
	var seriesData = [];
	var chartsData = {};
	var paramsData = [];
	var paramsDataSeries = [];
	weatherJsonData = JSON.parse(weatherData);

	for(var i = 0; i < 5; i++) {
		var dayData = weatherJsonData["list"][i];
		processingDay = weekDay(i);
		categories.push(processingDay);
		addTempToNewDay(dayData["temp"], processingDay, seriesData);
		weatherSummary = addweatherSummaryToNewDay(dayData, processingDay, weatherSummary);
		addOtherParamsToNewDay(dayData);
	}

	$('.weatherSummarySection').html(weatherSummary);

	paramsDataSeries.push({"name": 'Pressure' ,"data": pressure});
	paramsDataSeries.push({"name": 'Humidity' ,"data": humidity});
	paramsDataSeries.push({"name": 'Wind Speed' ,"data": windSpeed});
	paramsDataSeries.push({"name": 'Wind Direction' ,"data": windDirection});

	chartsData["seriesData"] = seriesData;
	chartsData["paramsDataSeries"] = paramsDataSeries;
	chartsData["categories"] = categories;
	return chartsData;
}


function addTempToNewDay(temp, processingDay, seriesData) {
	var tempChart = [];
	tempChart[0] = temp["morn"];
	tempChart[1] = temp["day"];
	tempChart[2] = temp["eve"];
	tempChart[3] = temp["night"];
	//processedData["temp"] = tempChart;
	//seriesData.push(processedData);
	seriesData.push({"name": processingDay ,"data":tempChart});	
}


function addweatherSummaryToNewDay(dayData, processingDay, weatherSummary) {
	weatherSummary = 	weatherSummary.concat("\
		<article class='weatherSummary'>\
			<h1>"+ processingDay +"</h1>\
			<p>"+ dayData["weather"][0]["description"] +"</p>\
			<p>clouds: "+ dayData["clouds"] +"%</p>\
			<p>Temp max: "+ dayData["temp"]["max"] +"°C</p>\
			<p>Temp min: "+ dayData["temp"]["min"] +"°C</p>\
		</article>\
	");
	return weatherSummary;
	//console.log(weatherSummary);
}


function addOtherParamsToNewDay(dayData) {
	pressure.push(dayData["pressure"]);
	humidity.push(dayData["humidity"]);
	windSpeed.push(dayData["speed"]);
	windDirection.push(dayData["deg"]);
}


function weekDay(i) {
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

