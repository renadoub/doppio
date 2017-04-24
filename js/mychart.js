function mychart(){
  var dateFormat = d3.timeParse('%m/%d/%Y');
  d3.csv("/data/ndx.csv", function(data) {
    var myChart = new Chart($("#myChart"), {
      type: 'line',
      data: {
        datasets: [{
          label: 'Performance',
          data: data.map(function(x){
            return {x:dateFormat(x.date),y:+x.high};
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
