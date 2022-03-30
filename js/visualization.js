//This is filler -- delete it and start coding your visualization tool here
// d3.select("#vis-container")
//   .append("text")
//   .attr("x", 20)
//   .attr("y", 20)
//   .text("Hello World!");

const margin = { top: 50, right: 50, bottom: 50, left: 200 };
const width = 900; //- margin.left - margin.right;
const height = 650; //- margin.top - margin.bottom;

const bar_svg = d3.select("#vis-container")
                .append("svg")
                .attr("width", width - margin.left - margin.right)
                .attr("height", height - margin.top - margin.bottom)
                .attr("viewBox", [0, 0, width, height]);


const scatter_svg = d3.select("#vis-container")
                        .append("svg")
                        .attr("width", width - margin.left - margin.right)
                        .attr("height", height - margin.top - margin.bottom)
                        .attr("viewBox", [0, 0, width, height]);


//append svg object to the body of the page to house Scatterplot2
const svg2 = d3.select("#vis-container")
                .append("svg")
                .attr("width", width - margin.left - margin.right)
                .attr("height", height - margin.top - margin.bottom)
                .attr("viewBox", [0, 0, width, height]);


// //append svg object to the body of the page to house Scatterplot2
// const svg2 = d3.select("#vis-holder")
//                 .append("svg")
//                 .attr("width", width - margin.left - margin.right)
//                 .attr("height", height - margin.top - margin.bottom)
//                 .attr("viewBox", [0, 0, width, height]);

const pos_color = d3.scaleOrdinal()
                .domain(["G", "F", "C"])
                .range(["#FF7F50", "#21908dff", "#fde725ff"]);

d3.csv("data/nba_total.csv").then((data) => {

  // We will need scales for all of the following charts to be global
  let x1, y1, x2, y2, x3, y3;  

  // We will need keys to be global
  let xKey1, yKey1, xKey2, yKey2, xKey3, yKey3;


  for (let i = 0; i < 10; i++) {
    console.log(data[i]);
  }

  // first scatter plot
  {

    xKey1 = "PPG";
    yKey1 = "Salary";

    // Find max x
    let maxX1 = d3.max(data, (d) => { return Number(d[xKey1]); });
    let minX1 = d3.min(data, (d) => { return Number(d[xKey1]); });

    console.log("max" + maxX1)
    console.log("min" + minX1)

    // Create X scale
    x1 = d3.scaleLinear()
                .domain([minX1,maxX1])
                .range([margin.left, width-margin.right]);
   
    // Add x axis
    scatter_svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x1))  
        .attr("font-size", '20px')
        .call((g) => g.append("text")
                      .attr("x", width - margin.right)
                      .attr("y", margin.bottom - 4)
                      .attr("fill", "black")
                      .attr("text-anchor", "end")
                      .text(xKey1)
      );

    // Find max y
    let maxY1 = d3.max(data, (d) => { return Number(d[yKey1]); });
    let minY1 = d3.min(data, (d) => { return Number(d[yKey1]); });
    console.log("max" + maxY1)
    console.log("min" + minY1)

    // Create Y scale
    y1 = d3.scaleLinear()
                .domain([minY1, maxY1])
                .range([height - margin.bottom, margin.top]);

    // Add y axis
    scatter_svg.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y1))
        .attr("font-size", '20px')
        .call((g) => g.append("text")
                      .attr("x", 0)
                      .attr("y", margin.top - 10)
                      .attr("fill", "black")
                      .attr("text-anchor", "end")
                      .text(yKey1)
      );

    // Add points
    myCircles1 = scatter_svg.selectAll("circle")
                            .data(data)
                            .enter()
                              .append("circle")
                              .attr("id", (d) => d.id)
                              .attr("cx", (d) => x1(d[xKey1]))
                              .attr("cy", (d) => y1(d[yKey1]))
                              .attr("r", 5)
                              .style("fill", (d) => pos_color(d.POS))
                              .style("opacity", 1);   
  }


  // bar plot

  {
    xKey3 = "POS";
    yKey3 = "Number of Players";
 

    counts = {}
    data.forEach(row => {
      counts[row[xKey3]] = counts[row[xKey3]] ? counts[row[xKey3]] + 1: 1
    });
    // console.log("Before map counts")
    // console.log(counts)

    listCounts = []
    for (let key in counts) {
      if (key == '') continue;
      listCounts.push({"POS":key, "count":counts[key]});
    }

    //console.log(typeof(counts));
    // console.log("After map counts")
    console.log(listCounts);
      
    maxY3 = 0
    for (let key in counts){
      if (counts[key] > maxY3) maxY3 = counts[key];
    }
    console.log(maxY3)

    console.log(d3.count(data, d => d.Species));

    let y3 = d3.scaleLinear()  // linear scale for linear data on the y axis
    .domain([0,maxY3])  // sets the range of the data from 0 to the max
    .range([height-margin.bottom,margin.top]);

  let x3 = d3.scaleBand()  // scale for the different "categories"
    .domain(d3.range(listCounts.length))  // sets the number of parts on the x axis to the number of data points
    .range([margin.left, width - margin.right])
    .padding(0.1); // sets a spacing between each item on the axis

    bar_svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x3))  
    .attr("font-size", '25px')
    .call(d3.axisBottom(x3)
          .tickFormat(i => listCounts[i].POS))
    .call((g) => g.append("text")
                  .attr("x", width - margin.right)
                  .attr("y", margin.bottom - 4)
                  .attr("fill", "black")
                  .attr("text-anchor", "end")
                  .text(xKey3));

// add y axis to the svg
bar_svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y3))
    .attr("font-size", '20px')
    .call((g) => g.append("text")
                  .attr("x", 0)
                  .attr("y", margin.top - 10)
                  .attr("fill", "black")
                  .attr("text-anchor", "end")
                  .text(yKey3));



    bar_svg.selectAll(".bar")
    .data(listCounts)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => x3(i))
    .attr("y", (d) => y3(d.count))
    .attr("height", (d) => (height - margin.bottom)-y3(d.count))
    .attr("width", x3.bandwidth())
    .style("fill", (d) => pos_color(d.POS))



  }


// brushing
let brush1;

brush1 = d3.brush()                 // Add the brush feature using the d3.brush function
            .extent( [ [0,0], [width,height] ] ) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
            .on("brush", updateChart2)     // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
            .on("start", clear)


//TODO: Add brush1 to svg1
scatter_svg.call(brush1);

// Call when Scatterplot2 is brushed
  function clear() {
      svg1.call(brush1.move, null);
      
      //TODO: add code to clear existing brush from svg2
      svg1.call(brush2.move, null);
  }

  function updateChart2(brushEvent) {

    //Find coordinates of brushed region
    let extent = brushEvent.selection;
    //TODO: Start an empty set that you can store names of selected species in
    let selectPosition = new Set();
    //Give bold outline to all points within the brush region in Scatterplot2 & collected names of brushed species
    myCircles1.classed("selected", function(d){
      if (isBrushed(extent, x2(d.xKey1), y2(d.yKey1)))
      {
        selectPosition.add(d.xKey3)
      }
       return isBrushed(extent, x2(d.xKey1), y2(d.yKey1))  } );
    // Give bold outline to all points in Scatterplot1 corresponding to points within the brush region in Scatterplot2
    myCircles1.classed("selected", function(d){ return isBrushed(extent, x2(d.xKey1), y2(d.yKey1) ) } );
    // Give bold outline to all bars in bar chart with corresponding to species selected by Scatterplot2 brush
    mybars.classed("selected", function(d){return selectPosition.has(d.xKey3)});
  }

  //Finds dots within the brushed region
    function isBrushed(brush_coords, cx, cy) {
      if (brush_coords === null) return;

      var x0 = brush_coords[0][0],
        x1 = brush_coords[1][0],
        y0 = brush_coords[0][1],
        y1 = brush_coords[1][1];
      return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1; // This return TRUE or FALSE depending on if the points is in the selected area
    }

  // define the x scale of the bar chart
//    x3 = d3.scaleBand()
//                 .domain(d3.range(data.length))
//                 .range([margin.left, width-margin.right])
//                 .padding(0.1);

//   // define the y sclae of the bar chart
//    y3 = d3.scaleLinear()
//               .domain([0, maxY3])
//               .range([height - margin.bottom, margin.top]);

//   // add x axis to the svg            
//     bar_svg.append("g")
//         .attr("transform", `translate(0,${height - margin.bottom})`)
//         .call(d3.axisBottom(x3))  
//         .attr("font-size", '25px')
//         .call(d3.axisBottom(x3)
//                 .tickFormat(i => data[i].Species))
//         .call((g) => g.append("text")
//                       .attr("x", width - margin.right)
//                       .attr("y", margin.bottom - 4)
//                       .attr("fill", "black")
//                       .attr("text-anchor", "end")
//                       .text(xKey3));

// // add y axis to the svg
//     bar_svg.append("g")
//         .attr("transform", `translate(${margin.left}, 0)`)
//         .call(d3.axisLeft(y3))
//         .attr("font-size", '20px')
//         .call((g) => g.append("text")
//                       .attr("x", 0)
//                       .attr("y", margin.top - 10)
//                       .attr("fill", "black")
//                       .attr("text-anchor", "end")
//                       .text(yKey3));

//     // add bars to the svg
//     mybars = bar_svg.selectAll(".bar")
//                   .data(data)
//                   .enter()  
//                   .append("rect")
//                   .attr("class", "bar")
//                   .attr("x", (d,i) => x3(i))
//                   .attr("y", (d) => y3(d.count))
//                   .attr("height", (d) => (height - margin.bottom) - y3(d.count))
//                   .attr("width", x3.bandwidth())
//                   .style("fill",(d)=>color(d.Species));
//   }






});