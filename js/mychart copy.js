function mychart(){
  var dateFormat = d3.timeParse('%d/%m/%Y');
  d3.csv("/data/chartDoppio.csv", function(data) {
    var myChart = new Chart($("#myChart"), {
      type: 'line',
      data: {
        datasets: [{
          label: 'Performance',
          data: data.map(function(x){
            return {x:dateFormat(x.date),y:+x.close};
          }),
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type:'time',
            time: {
              unit:'day'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero:false
            }
          }]
        }
      }
    });

  });
}
mychart();
