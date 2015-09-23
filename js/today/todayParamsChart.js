
function todayParamsChart (seriesData) {
  $('#todayParamsContainer').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Today Weather Params'
      },
      subtitle: {
          text: 'Source: openweathermap'
      },
      xAxis: {
          categories: ['Today'],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Weather data'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: seriesData
  });
};