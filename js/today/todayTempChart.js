function todayTempChart (seriesData) {
    $('#todayTempContainer').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Today´s Temperature'
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