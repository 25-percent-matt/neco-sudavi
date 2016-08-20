function fillChartDegree() {
  var oReq = new XMLHttpRequest();
  var queryData;
  var searchParam = "SchoolDegree";
  oReq.open("GET", "http://localhost:4000/chartQuery/" + searchParam);
  oReq.onload = function (data) {
    if (oReq.readyState === 4) {
      if (oReq.status === 200) {
        chartDegreeBig = c3.generate(makeDegreeObj(JSON.parse(data.target.response)));

    }
  }
};
  oReq.send();
}

function makeDegreeObj(queryData) {
  return {
    bindto: '#chartDegreeBig',
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

function fillChartMajor() {
  var oReq = new XMLHttpRequest();
  var queryData;
  var searchParam = "SchoolMajor";
  oReq.open("GET", "http://localhost:4000/chartQuery/" + searchParam);
  oReq.onload = function (data) {
    if (oReq.readyState === 4) {
      if (oReq.status === 200) {
        chartDegreeBig = c3.generate(makeMajorObj(JSON.parse(data.target.response)));

    }
  }
};
  oReq.send();
}

function makeMajorObj(queryData) {
  return {
    bindto: '#chartMajorBig',
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

function fillChartHasDebt() {
  var oReq = new XMLHttpRequest();
  var queryData;
  var searchParam = "HasDebt";
  oReq.open("GET", "http://localhost:4000/chartQuery/" + searchParam);
  oReq.onload = function (data) {
    if (oReq.readyState === 4) {
      if (oReq.status === 200) {
        chartDegreeBig = c3.generate(makeHasDebtObj(JSON.parse(data.target.response)));

    }
  }
};
  oReq.send();
}

function makeHasDebtObj(queryData) {
  return {
    bindto: '#chartHasDebtBig',
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

var chartDegreeBig = fillChartDegree();
var chartMajorBig = fillChartMajor();
var chartHasDebtBig = fillChartHasDebt();