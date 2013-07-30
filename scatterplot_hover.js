(function() {

    // Randomly generate a scatterplot, with random colors.

    var n = 300,
        width = 1000,
        height = 600;

    // Generate a n random coordinates within the bounds of the canvas
    var generateDataset = function() {
        var dataset = [];
        for (var i = 0; i < n; i++){
            var temp = [];
            temp.push(Math.floor(Math.random() * width));
            temp.push(Math.floor(Math.random() * height));
            dataset.push(temp);
        }
        
        console.log("new dataset = ", dataset);
        return dataset;
    };

    var getRandomColor = function() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    };

    var dataset = generateDataset();

    // create the svg "canvas"
    var svg =   d3.select("body")
                .append("svg")
                .attr({
                    width: width,
                    height: height,
                    id: "viz"
                });

    
    // begin to iterate over each new circle element
    var dataEnter = svg.selectAll("circle").data(dataset).enter();

    dataEnter.append("circle")
        .attr({
            cx: function(d) {
                return d[0];
            },
            cy: function(d) {
                return d[1];
            },
            r: function() {
                return Math.floor(Math.random() * 50);
            },
            // from paul irish: http://www.paulirish.com/2009/random-hex-color-code-snippets/
            fill: function() {
                return getRandomColor();
            },
            stroke: function() {
                return getRandomColor();
            },
            'stroke-width': function() {
                return Math.floor(Math.random() * 10);
            },
            opacity: function() {
                return (Math.floor(Math.random() * 50 + 50)/100);
            }
        })
        .on("mouseover", function() {
            d3.select(this)
                .transition()
                .delay(0)            
                .duration(1000)
                .attr({
                    r: function() {
                        return Math.floor(Math.random() * 80);
                    },
                    fill: function() {
                        return getRandomColor();
                    }
                });
        });

    



})();