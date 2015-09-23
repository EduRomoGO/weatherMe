
function searchTodayData() {
	$('.forecast-charts').hide();
	$('.today-charts').show();
	var lastDaysWeatherData = {};
	var URL = 
	"http://api.openweathermap.org/data/2.5/weather?id=2885679&units=metric&mode=json";
	var lastDaysWeather = $.ajax({
	    url: URL,
	    context: document.body,
	    success: function(){
	    	lastDaysWeatherData = lastDaysWeather.responseText;
	      console.log("data retrieved OK");
	      var todayChartsData = processTodayData(lastDaysWeatherData);
	      todayTempChart(todayChartsData["seriesData"]);
	      todayParamsChart(todayChartsData["paramsDataSeries"]);
	    }
	});
};


$('.today').on('click', searchTodayData);