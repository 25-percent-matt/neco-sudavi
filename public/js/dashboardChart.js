 var degreeChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#degreeChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var majorChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#majorChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var hasStudentDebtChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#hasStudentDebtChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var employmentFieldChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#employmentFieldChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var currentIncomeChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#currentIncomeChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var hasChildrenChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#hasChildrenChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var numOfChildrenChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#numOfChildrenChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var hasMortgageChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#hasMortgageChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var jobPreferenceChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.population; });

   var svg = d3.select("#jobPreferenceChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("myData03a.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.age); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.age; });
   });

   function type(d) {
     d.population = +d.population;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

window.onload = function() {
    degreeChart();
    majorChart();
    hasStudentDebtChart();
    employmentFieldChart();
    currentIncomeChart();
    hasChildrenChart();
    numOfChildrenChart();
    hasMortgageChart();
    jobPreferenceChart();
};