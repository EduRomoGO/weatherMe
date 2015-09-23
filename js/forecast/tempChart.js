function tempChart (seriesData) {
    $('#tempContainer').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Five Days Temperature Forecast'
        },
        subtitle: {
            text: 'Source: openweathermap'
        },
        xAxis: {
            categories: ['Morning', 'Day', 'Evening', 'Night']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: seriesData
    });
};