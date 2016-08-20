var chartCombo = c3.generate({
    bindto: '#chartCombo',
    data: {
        x : 'x',
        columns: [
            ['x', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89'],
            ['M', 1088, 5509, 2812, 884, 297, 62, 10, 2],
            ['F', 160, 1369, 788, 306, 130, 21, 3],
            ['Other', 16, 74, 33, 11, 1, 2],
/*            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150],
            ['data6', 90, 70, 20, 50, 60, 120],*/
        ],

        type: 'bar',
        types: {
            data3: 'spline',
            data4: 'line',
            data5: 'spline',
            data6: 'area',
        },
/*        groups: [
            ['data1','data2']
        ]*/
    },
    axis: {
        x: {
          type: 'categorized' // this is needed to load string x value
        }
    },
    size: {
      width: 1200,
      height: 200
    }
});

/*window.onload = function() {
    chartCombo;
};*/