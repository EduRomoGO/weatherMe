
function processData(weatherData) {
	var weatherJsonData = JSON.parse(weatherData);
	var chartsData = {};

	var categoriesAndSeriesData = processTempData(weatherJsonData);
	var paramsDataSeries = processParamsData(weatherJsonData);
	var weatherSummary = processWeatherSummaryData(weatherJsonData);


	$('.weatherSummarySection').html(weatherSummary);

	chartsData["seriesData"] = categoriesAndSeriesData["seriesData"];
	chartsData["paramsDataSeries"] = paramsDataSeries;
	chartsData["categories"] = categoriesAndSeriesData["categories"];

	return chartsData;
}



function processTempData(weatherJsonData) {
	var categoriesAndSeriesData = {"categories": [], "seriesData": []};

	for(var i = 0; i < 5; i++) {
		var dayData = weatherJsonData["list"][i];
		var processingDay = calculateWeekDay(i);
		categoriesAndSeriesData["categories"].push(processingDay);
		addTempToNewDay(dayData["temp"], 
										processingDay, 
										categoriesAndSeriesData["seriesData"]);
	}

	return categoriesAndSeriesData;
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

function processParamsData(weatherJsonData) {
	var weatherParams = {"pressure": [], 
											 "humidity": [], 
											 "windSpeed": [],
											 "windDirection": []};

	for(var i = 0; i < 5; i++) {
		var dayData = weatherJsonData["list"][i];
		addOtherParamsToNewDay(dayData, weatherParams);
	}

	var paramsDataSeries = [
		{"name": 'Pressure' ,"data": weatherParams["pressure"]},
		{"name": 'Humidity' ,"data": weatherParams["humidity"]},
		{"name": 'Wind Speed' ,"data": weatherParams["windSpeed"]},
		{"name": 'Wind Direction' ,"data": weatherParams["windDirection"]}
	]

	return paramsDataSeries;
}


function addOtherParamsToNewDay(dayData, weatherParams) {
	weatherParams["pressure"].push(dayData["pressure"]);
	weatherParams["humidity"].push(dayData["humidity"]);
	weatherParams["windSpeed"].push(dayData["speed"]);
	weatherParams["windDirection"].push(dayData["deg"]);
}


function processWeatherSummaryData(weatherJsonData) {
	var weatherSummary = "<h1>Weather Description:</h1>";

	for(var i = 0; i < 5; i++) {
		var dayData = weatherJsonData["list"][i];
		var processingDay = calculateWeekDay(i);
		weatherSummary = 
		addweatherSummaryToNewDay(dayData, processingDay, weatherSummary);
	}

	return weatherSummary;
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




