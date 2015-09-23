
function searchTodayData() {
	$('.forecast-charts').hide();
	var lastDaysWeatherData = {};
	var URL = 
	"http://api.openweathermap.org/data/2.5/weather?id=2885679&units=metric&mode=json";
	var lastDaysWeather = $.ajax({
	    url: URL,
	    context: document.body,
	    success: function(){
	    	lastDaysWeatherData = lastDaysWeather.responseText;
	      console.log("data retrieved OK");
	      //var chartsData = processData(lastDaysWeatherData);
	      //tempChart(chartsData["seriesData"]);
	      //paramsChart(chartsData["paramsDataSeries"], chartsData["categories"]);
	      console.log(lastDaysWeatherData);
	    }
	});
};


$('.today').on('click', searchTodayData);