var dynamicChartSave = [['x', 'Current Jobs', 'Projected Jobs', 'Amount Changed', 'Percent Changed (*100)', 'Average Annual Openings']];
// var testDynamicBind = makeObjectDynamic(["Texas","48410","51040","2630","540","1910"]);

var testDynamicBind;

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
        height: 700
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

function fillChartDynamic(a, b) {
  if (a !== undefined) {
    fillChartDynamic(a);
  }
  if (b !== undefined) {
    fillChartDynamic(b);
  }
  function fillChartDynamic(searchDynamic){
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "http://localhost:4000/blsProjections/" + searchDynamic);
    oReq.onload = function (data) {
      if (oReq.readyState === 4) {
        if (oReq.status === 200) {
          var requestReceivedData = JSON.parse(data.target.response);
          c3.generate(makeObjectDynamic(requestReceivedData));
        }
      }
    };
    oReq.send();
  }
}
//  add a clear button and check if item enetered = stateName, combat flicker
function makeObjectDynamic(requestReceivedData){
  if(requestReceivedData[0] !== undefined){
    dynamicChartSave.push(requestReceivedData);
    testDynamicBind = dynamicChartSave;
    console.log(dynamicChartSave);
    return {
      bindto: "#testDynamicBind",
      data: {
        x : 'x',
        columns: dynamicChartSave,
        //put a function here to add , to compared cities
        type: 'bar',
      },
      axis: {
        x: {
            type: 'categorized'
        },
      },
      grid: {
        y: {
            lines: [{value:0}]
        }
      },
      size: {
        height: 700,
        width: 1100
      }
    };
  }
}

var chartDegreeBig = makeGraphPrimary('SchoolDegree', '#chartDegreeBig');
var chartMajorBig = makeGraphPrimary('SchoolMajor', '#chartMajorBig');
var chartHasDebtBig = makeGraphPrimary('HasDebt', '#chartHasDebtBig');