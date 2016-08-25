function makeGraphPrimary(searchParam, chartBindTo) {
  fillChartDegree(searchParam, chartBindTo);
  function fillChartDegree(searchParam, chartBindTo) {
    var oReq = new XMLHttpRequest();
    var queryData;
    oReq.open("GET", "http://localhost:4000/chartQuery/" + searchParam);
    oReq.onload = function (data) {
      if (oReq.readyState === 4) {
        if (oReq.status === 200) {
          var dataReduced = dataReducer(data.target.response);
          chartDegreeBig = c3.generate(makeDegreeObj(dataReduced, chartBindTo));
          return chartDegreeBig;
      }
    }
  };
    oReq.send();
  }

  function makeDegreeObj(queryData, chartBindTo) {
    console.log(chartBindTo)
    return {
      bindto: chartBindTo,
      data : {
        columns: queryData,
        type : 'pie',
          onmouseover: function (d, i) {  },
          onmouseout: function (d, i) { }
      },
      legend: {
        position: 'right'
      },
      size: {
        height: 500
      }
    };
  }
}

function dataReducer(dataToBeReduced) {
  var x = JSON.parse(dataToBeReduced);
  var y = [];
  if (dataToBeReduced.length > 21) {
    for (var i = 0; i < 36; i++) {
      if (x[i] !== undefined) {
        y.push(x[i]);
      }
    }
  }
  return y;
}

var chartDegreeBig = makeGraphPrimary('SchoolDegree', '#chartDegreeBig');
var chartMajorBig = makeGraphPrimary('SchoolMajor', '#chartMajorBig');
var chartHasDebtBig = makeGraphPrimary('HasDebt', '#chartHasDebtBig');
var chartEmploymentFieldBig = makeGraphPrimary('EmploymentField', '#chartEmploymentFieldBig');
var chartCurrentIncomeBig = makeGraphPrimary('Income', '#chartCurrentIncomeBig');
var chartNumChildrenBig = makeGraphPrimary('ChildrenNumber', '#chartNumChildrenBig');
var chartJobPrefBig = makeGraphPrimary('JobPref', '#chartJobPrefBig');