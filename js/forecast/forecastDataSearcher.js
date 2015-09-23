
function searchForecastData() {
	$('.today-charts').hide();
	var lastDaysWeatherData = {};
	var URL = 
	"http://api.openweathermap.org/data/2.5/forecast/daily?id=2643743&units=metric&cnt=5";
	var lastDaysWeather = $.ajax({
	    url: URL,
	    context: document.body,
	    success: function(){
	    	lastDaysWeatherData = lastDaysWeather.responseText;
	      console.log("data retrieved OK");
	      var chartsData = processData(lastDaysWeatherData);
	      tempChart(chartsData["seriesData"]);
	      paramsChart(chartsData["paramsDataSeries"], chartsData["categories"]);
	    }
	});
};


$('.forecast').on('click', searchForecastData);