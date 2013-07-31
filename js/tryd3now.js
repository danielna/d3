(function() {

// var sampleSVG = d3.select("#viz")
//     .append("svg")
//     .attr("width", 100)
//     .attr("height", 100);    
    
// sampleSVG.append("circle")
//     .style("stroke", "gray")
//     .style("fill", "white")
//     .attr("r", 40)
//     .attr("cx", 50)
//     .attr("cy", 50)
//     .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
//     .on("mouseout", function(){d3.select(this).style("fill", "white");})
//     .on("mousedown", animateFirstStep);

// function animateFirstStep(){
//     d3.select(this)
//       .transition()            
//         .delay(0)            
//         .duration(1000)
//         .attr("r", 10)
//         .each("end", animateSecondStep);
// }

// function animateSecondStep(){
//     d3.select(this)
//       .transition()
//         .duration(1000)
//         .attr("r", 40)
//         .each("end", animateFirstStep);
// }

var dataset = [],
tmpDataset = [],
i, j;

for (i = 0; i < 5; i++) {
    for (j = 0, tmpDataset = []; j < 3; j++) {
        tmpDataset.push("Row:"+i+",Col:"+j);
    }
    dataset.push(tmpDataset);
}

console.log('dataset:', dataset);
    
d3.select("#viz")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")
    
    .selectAll("tr")
    .data(dataset)
    .enter().append("tr")
    
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "10px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue");}) 
    .on("mouseout", function(){d3.select(this).style("background-color", "white");}) 
    .text(function(d){return d;})
    .style("font-size", "12px");

})();