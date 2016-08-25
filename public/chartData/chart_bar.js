var salaryChart = c3.generate({
    bindto: '#salaryChart',
    data: {
      x: 'x',
        columns: [
            ['x', '$0-19k', '$20-39k', '$40-59k', '$60-79k', '$80-99k', '$100-119k', '$120-139k', '$140k+'],
            ['data1', 30, 200, 200, 400, 150, 250, 55, 75],
            ['data2', 130, 100, 100, 200, 150, 50, 65, 86],
            ['data3', 230, 200, 200, 300, 250, 250, 150, 175]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },
    axis: {
        x: {
          type: 'categorized' // this is needed to load string x value
        }
    },
    size: {
      width: 1000,
      height: 400
    }
});

/*setTimeout(function () {
    chart.groups([['data1', 'data2', 'data3']])
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [['data4', 100, -50, 150, 200, -300, -100]]
    });
}, 1500);

setTimeout(function () {
    chart.groups([['data1', 'data2', 'data3', 'data4']])
}, 2000);*/