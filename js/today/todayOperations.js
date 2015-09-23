
function processTodayData(weatherData) {
	var weatherJsonData = JSON.parse(weatherData);
	var todayChartsData = {};

	var seriesData = processTodayTempData(weatherJsonData);
	var paramsDataSeries = processTodayParamsData(weatherJsonData);
	var weatherSummary = processTodayWeatherSummaryData(weatherJsonData);

	$('.weatherSummarySection').html(weatherSummary);

	todayChartsData["seriesData"] = seriesData;
	todayChartsData["paramsDataSeries"] = paramsDataSeries;

	return todayChartsData;
};


function processTodayTempData(weatherJsonData) {

	var seriesData = [
		{"name": 'Temperature' ,"data": [weatherJsonData["main"]["temp"]]},
		{"name": 'Max' ,"data": [weatherJsonData["main"]["temp_max"]]},
		{"name": 'Min' ,"data": [weatherJsonData["main"]["temp_min"]]},
	]

	return seriesData;
}


function processTodayParamsData(weatherJsonData) {

	var paramsDataSeries = [
		{"name": 'Pressure' ,"data": [weatherJsonData["main"]["pressure"]]},
		{"name": 'Humidity' ,"data": [weatherJsonData["main"]["humidity"]]},
		{"name": 'Wind Speed' ,"data": [weatherJsonData["wind"]["speed"]]}
	]

	return paramsDataSeries;
}


function processTodayWeatherSummaryData(weatherJsonData) {

	var weatherSummary = "<h1>Weather Description:</h1>\
		<article class='weatherSummary'>\
			<p>"+ weatherJsonData["weather"][0]["description"] +"</p>\
			<p>clouds: "+ weatherJsonData["clouds"]["all"] +"%</p>\
			<p>Temp max: "+ weatherJsonData["rain"]["1h"] +"m3</p>\
		</article>\
	";

	return weatherSummary;
}