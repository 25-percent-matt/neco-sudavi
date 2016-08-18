function fillChartEdu() {
  var oReq = new XMLHttpRequest();
  var queryData;
  oReq.open("GET", "http://localhost:4000/testQuery");
  oReq.onload = function (data) {
    if (oReq.readyState === 4) {
      if (oReq.status === 200) {
        chart = c3.generate(makeEduObj(JSON.parse(data.target.response)));

    }
  }
};
  oReq.send();
}

function makeEduObj(queryData) {
  return {
    data : {
      columns: queryData,
      type : 'pie',
      onclick:
        function () {chart.resize({height:700, width:700});},
        onmouseover: function (d, i) {  },
        onmouseout: function (d, i) { }
    },
    legend: {
      position: 'right'
    }
  };
}

var chart = fillChartEdu();