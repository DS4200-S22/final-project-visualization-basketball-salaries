const margin = { top: 50, right: 50, bottom: 50, left: 200 };
const width = 900; //- margin.left - margin.right;
const height = 650; //- margin.top - margin.bottom;

const margin1 = { top: 50, right: 50, bottom: 50, left: 200 };
const width1 = 600; //- margin.left - margin.right;
const height1 = 450; //- margin.top - margin.bottom;

const margin2 = { top: 50, right: 50, bottom: 50, left: 200 };
const width2 = 600; //- margin.left - margin.right;
const height2 = 450; //- margin.top - margin.bottom;


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


const scatter1 = d3.select(".container").select("#item-1")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);

const scatter2 = d3.select(".container").select("#item-2")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);

const scatter3 = d3.select(".container").select("#item-3")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);

const scatter4 = d3.select(".container").select("#item-4")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);

const scatter5 = d3.select(".container").select("#item-5")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);

const scatter6 = d3.select(".container").select("#item-6")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);

const scatter7 = d3.select(".container").select("#item-7")
                    .append("svg")
                    .attr("width", width1 - margin1.left - margin1.right)
                    .attr("height", height1 - margin1.top - margin1.bottom)
                    .attr("viewBox", [0, 0, width1, height1]);
                    
const scatter8 = d3.select(".container").select("#item-8")
                    .append("svg")
                    .attr("width", width - margin.left - margin.right)
                    .attr("height", height - margin.top - margin.bottom)
                    .attr("viewBox", [0, 0, width, height]);

const scatter9 = d3.select(".container").select("#item-9")
                    .append("svg")
                    .attr("width", width - margin.left - margin.right)
                    .attr("height", height - margin.top - margin.bottom)
                    .attr("viewBox", [0, 0, width, height]);

const bar1 = d3.select(".container1").select("#item-1-1")
                    .append("svg")
                    .attr("width", width2 - margin2.left - margin2.right)
                    .attr("height", height2 - margin2.top - margin2.bottom)
                    .attr("viewBox", [0, 0, width2, height2]);

const bar2 = d3.select(".container1").select("#item-1-2")
                    .append("svg")
                    .attr("width", width2 - margin2.left - margin2.right)
                    .attr("height", height2 - margin2.top - margin2.bottom)
                    .attr("viewBox", [0, 0, width2, height2]);

const bar3 = d3.select(".container1").select("#item-1-3")
                    .append("svg")
                    .attr("width", width2 - margin2.left - margin2.right)
                    .attr("height", height2 - margin2.top - margin2.bottom)
                    .attr("viewBox", [0, 0, width2, height2]);

const bar4 = d3.select(".container1").select("#item-1-4")
                    .append("svg")
                    .attr("width", width2 - margin2.left - margin2.right)
                    .attr("height", height2 - margin2.top - margin2.bottom)
                    .attr("viewBox", [0, 0, width2, height2]);


const pos_color = d3.scaleOrdinal()
                .domain(["G", "F", "C"])
                .range(["#FF7F50", "#21908dff", "#fde725ff"]);


document.getElementById("item-1").addEventListener("click", updateScatterPlot1);
document.getElementById("item-2").addEventListener("click", updateScatterPlot2);
document.getElementById("item-3").addEventListener("click", updateScatterPlot3);
document.getElementById("item-4").addEventListener("click", updateScatterPlot4);
document.getElementById("item-5").addEventListener("click", updateScatterPlot5);
document.getElementById("item-6").addEventListener("click", updateScatterPlot6);
document.getElementById("item-7").addEventListener("click", updateScatterPlot7);

// function testfunction() {
//   alert("Hello!")
// }

function updateScatterPlot1() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("APG");
}
function updateScatterPlot2() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("PPG");
}
function updateScatterPlot3() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("AGE");
}
function updateScatterPlot4() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("MPG");
}
function updateScatterPlot5() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("BPG");
}
function updateScatterPlot6() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("SPG");
}
function updateScatterPlot7() {
  scatter_svg.selectAll('*').remove();
  bar_svg.selectAll('*').remove();
  updateScatter("RPG");
}


// function updateScatter(xKey) {

//   d3.csv("data/nba_total.csv").then((data) => {
//       xKey1 = xKey;
//       yKey1 = "Salary";
  
//       // Find max x
//       let maxX1 = d3.max(data, (d) => { return Number(d[xKey1]); });
//       let minX1 = d3.min(data, (d) => { return Number(d[xKey1]); });
  
  
//       // Create X scale
//       x1 = d3.scaleLinear()
//                   .domain([minX1,maxX1])
//                   .range([margin.left, width-margin.right]);
     
//       // Add x axis
//       scatter_svg.append("g")
//           .attr("transform", `translate(0,${height - margin.bottom})`)
//           .call(d3.axisBottom(x1))  
//           .attr("font-size", '20px')
//           .call((g) => g.append("text")
//                         .attr("x", width - margin.right)
//                         .attr("y", margin.bottom - 4)
//                         .attr("fill", "black")
//                         .attr("text-anchor", "end")
//                         .text(xKey1)
//         );
  
//       // Find max y
//       let maxY1 = d3.max(data, (d) => { return Number(d[yKey1]); });
//       let minY1 = d3.min(data, (d) => { return Number(d[yKey1]); });
  
  
//       // Create Y scale
//       y1 = d3.scaleLinear()
//                   .domain([minY1, maxY1])
//                   .range([height - margin.bottom, margin.top]);
  
//       // Add y axis
//       scatter_svg.append("g")
//           .attr("transform", `translate(${margin.left}, 0)`)
//           .call(d3.axisLeft(y1))
//           .attr("font-size", '20px')
//           .call((g) => g.append("text")
//                         .attr("x", 0)
//                         .attr("y", margin.top - 10)
//                         .attr("fill", "black")
//                         .attr("text-anchor", "end")
//                         .text(yKey1)
//         );
  
//       // Add points
//       myCircles1 = scatter_svg.selectAll("circle")
//                               .data(data)
//                               .enter()
//                                 .append("circle")
//                                 .attr("id", (d) => d.id)
//                                 .attr("cx", (d) => x1(d[xKey1]))
//                                 .attr("cy", (d) => y1(d[yKey1]))
//                                 .attr("r", 5)
//                                 .style("fill", (d) => pos_color(d.POS))
//                                 .style("opacity", 1);   


//   });
//   scatter_svg.call(brush1);

// };


d3.csv("data/nba_total.csv").then((data) => {  
    // grid of scatter plots 
    let plots = [scatter1, scatter2,scatter3,scatter4,scatter5,scatter6,scatter7]
    let yKey = "Salary"
    let xKeys = ["APG", "PPG","AGE","MPG","BPG", "SPG","RPG"]

    for (let i = 0; i < plots.length; i++) {
        xKey = xKeys[i]
        plot = plots[i]
    
        // Find max x
        let maxX = d3.max(data, (d) => { return Number(d[xKey]); });
        let minX = d3.min(data, (d) => { return Number(d[xKey]); });
    
        // Create X scale
        x1 = d3.scaleLinear()
                    .domain([minX,maxX])
                    .range([margin1.left, width1 - margin1.right]);
       
        // Add x axis
        plot.append("g")
            .attr("transform", `translate(0,${height1 - margin1.bottom})`)
            .call(d3.axisBottom(x1))  
            .attr("font-size", '20px')
            .call((g) => g.append("text")
                          .attr("x", width1 - margin1.right)
                          .attr("y", margin1.bottom - 4)
                          .attr("fill", "black")
                          .attr("text-anchor", "end")
                          .text(xKey));
    
        // Find max y
        let maxY1 = d3.max(data, (d) => { return Number(d[yKey]); });
        let minY1 = d3.min(data, (d) => { return Number(d[yKey]); });

        // Create Y scale
        y1 = d3.scaleLinear()
                    .domain([minY1, maxY1])
                    .range([height1 - margin1.bottom, margin1.top]);
    
        // Add y axis
        plot.append("g")
            .attr("transform", `translate(${margin1.left}, 0)`)
            .call(d3.axisLeft(y1))
            .attr("font-size", '20px')
            .call((g) => g.append("text")
                          .attr("x", 0)
                          .attr("y", margin1.top - 10)
                          .attr("fill", "black")
                          .attr("text-anchor", "end")
                          .text(yKey));
    
        // Add points
        myCircles = plot.selectAll("circle")
                                .data(data)
                                .enter()
                                  .append("circle")
                                  .attr("id", (d) => d.id)
                                  .attr("cx", (d) => x1(d[xKey]))
                                  .attr("cy", (d) => y1(d[yKey]))
                                  .attr("r", 5)
                                  .style("fill", (d) => pos_color(d.POS))
                                  .style("opacity", 1); 
    }
});


function updateScatter(xkeypassedin) {
  d3.csv("data/nba_total.csv").then((data) => {

  // We will need scales for all of the following charts to be global
  let x1, y1, x2, y2, x3, y3;  

  // We will need keys to be global
  let xKey1, yKey1, xKey2, yKey2, xKey3, yKey3;

  // second scatter plot
  {

    xKey1 = xkeypassedin;
    yKey1 = "Salary";

    // Find max x
    let maxX1 = d3.max(data, (d) => { return Number(d[xKey1]); });
    let minX1 = d3.min(data, (d) => { return Number(d[xKey1]); });


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


  {  // bar plots
    xKey3 = "POS";
    yKey3 = "Number of Players";
 

    counts = {}
    data.forEach(row => {
      counts[row[xKey3]] = counts[row[xKey3]] ? counts[row[xKey3]] + 1: 1
    });
  

    listCounts = []
    for (let key in counts) {
      if (key == '') continue;
      listCounts.push({"POS":key, "count":counts[key]});
    }

  
      
    maxY3 = 0
    for (let key in counts){
      if (counts[key] > maxY3) maxY3 = counts[key];
    }
    
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

    // event handlers 
    const mouseover = function (event, d) {
      let bar = d3.select(this); 
      bar.classed("unselected", false);
      bar.classed("selected", true);

      myCircles1.classed("hovered", function(d1) {return d1.POS == d.POS});
      myCircles1.classed("not-hovered", function(d1) {return (!(d1.POS == d.POS))});
    }

    const mouseout = function (event, d) {
      console.log('out')
      let bar = d3.select(this); 
      bar.classed("unselected", true);
      bar.classed("selected", false);
      myCircles1.classed("hovered", false);
      myCircles1.classed("not-hovered", false);
    }

    let clicked_bar = new Set();
    const mouseclick = function (event, d) {
      let bar = d3.select(this);

      if (this.classList.contains("selected")) { // unclicking a bar
          clicked_bar.delete(d.POS);
          bar.classed("selected", false);
          bar.classed("unselected", true);
          if (clicked_bar.size == 0) {
            console.log('g');
            myCircles1.classed("clicked", false);
            myCircles1.classed("not-clicked", false);
          } else {
            myCircles1.classed("clicked", function(d1) {return clicked_bar.has(d1.POS)});
            myCircles1.classed("not-clicked", function(d1) {return !(clicked_bar.has(d1.POS))});
          }
      } else { // clicking a bar
          clicked_bar.add(d.POS);
          bar.classed("unselected", false);
          bar.classed("selected", true);
          myCircles1.classed("clicked", function(d1) {return clicked_bar.has(d1.POS)});
          myCircles1.classed("not-clicked", function(d1) {return !(clicked_bar.has(d1.POS))});
      }
    }

    mybars = bar_svg.selectAll(".bar")
                      .data(listCounts)
                      .enter()
                      .append("rect")
                      .attr("class", "bar")
                      .attr("x", (d, i) => x3(i))
                      .attr("y", (d) => y3(d.count))
                      .attr("height", (d) => (height - margin.bottom)-y3(d.count))
                    .attr("width", x3.bandwidth())
                      .style("fill", (d) => pos_color(d.POS))
                      //.on("mouseover", mouseover) // mouseover listener
                      //.on("mouseout", mouseout) // mouseout listener
                      .on("click", mouseclick);
  }


// brushing
  let brush1;

  brush1 = d3.brush()                 // Add the brush feature using the d3.brush function
              .extent( [ [0,0], [width,height] ] ) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
              .on("brush", updateChart1)     // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
              .on("start", clear)


  // Add brush1 to svg1
  scatter_svg.call(brush1);

  // Call when Scatterplot is brushed
    function clear() {
        scatter_svg.call(brush1.move, null);
        
    
    }

    function updateChart1(brushEvent) {

      //Find coordinates of brushed region
      let extent = brushEvent.selection;
      //Start an empty set that you can store names of selected species in
      let selectPosition = new Set();
      //Give bold outline to all points within the brush region in Scatterplot2 & collected names of brushed species
      myCircles1.classed("selected", function(d){
        if (isBrushed(extent, x1(d[xkeypassedin]), y1(d.Salary)))
        {
          selectPosition.add(d.POS)
        }
        return isBrushed(extent, x1(d[xkeypassedin]), y1(d.Salary))  } );
      // Give bold outline to all points in Scatterplot1 corresponding to points within the brush region in Scatterplot2
      myCircles1.classed("selected", function(d){ return isBrushed(extent, x1(d[xkeypassedin]), y1(d.Salary) ) } );
      //myCircles1.classed("unselected", function(d){ return !(isBrushed(extent, x1(d.PPG), y1(d.Salary) )) } );
      // Give bold outline to all bars in bar chart with corresponding to species selected by Scatterplot2 brush
      mybars.classed("selected", function(d){return selectPosition.has(d.POS)});
      //mybars.classed("unselected", function(d){return !(selectPosition.has(d.POS))});
      //console.log(selectPosition)
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

  
  });

};

updateScatter("PPG");


{
let myDiv = document.getElementById("myDiv");

//Create array of options to be added
let array = ["player 1","Bismack Biyombo"];

//Create and append select list
let selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
}
{
let myDiv = document.getElementById("myDiv1");

//Create array of options to be added
let array = ["player 2", "Patrick Patterson"];

//Create and append select list
let selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
}

d3.csv("data/nba_total.csv").then((data) => {
  {  // four bar plots at the bottom of the page

    let plots = [bar1, bar2, bar3, bar4];
    let features = ['Salary', 'PPG','SPG', 'APG'];
    let player1 = "Bismack Biyombo";
    let player2 = "Patrick Patterson";
    let subgroups = [player1, player2];
    let groups = ["2017-2018", "2018-2019", "2019-2020"];
    for (let i = 0; i < plots.length; i++) {
          plot = plots[i]
          xKey = features[i];
          yKey = "Value";
    
          let d = []
    
          // THIS IS IMPORTANT. STARTER CODE FOR FINAL IMPLEMENTATION
          for (let i = 0; i < groups.length; i++) {
            year = groups[i]
            data.forEach(row => {
              if (row['FULL NAME'] === player1 && row["season"] === year) {
                let value1 = row[xKey];
                data.forEach(row => {
                  if (row['FULL NAME'] ===  player2 && row["season"] === year) {
                    let value2 = row[xKey]
                    d.push({"Year":year, [player1]:parseFloat(value1), [player2]:parseFloat(value2)})
                  }
                });
              }
              //console.log(row);
              // counts[row[xKey3]] = counts[row[xKey3]] ? counts[row[xKey3]] + 1: 1
            });
          }
          console.log(xKey);
          console.log(d);
    
          var x = d3.scaleBand()
          .domain(groups)
          .range([0, width2])
          .padding([0.2]);
    
          // Add X axis
          plot.append("g")
            .attr("transform", "translate(0," + height2 + ")")
            .call(d3.axisBottom(x).tickSize(0))
            .attr("font-size", '25px');
    
            maxY = 0
            for (let i = 0; i < d.length; i++){
              console.log(subgroups[0])
              if (d[i][subgroups[0]] > maxY) maxY = d[i][subgroups[0]];
              if (d[i][subgroups[1]] > maxY) maxY = d[i][subgroups[1]];      
            }
        
            // Add Y axis
        console.log(maxY)
        var y = d3.scaleLinear()
          .domain([0, parseFloat(maxY)])
          .range([ height2, 0 ]);
        
        
        plot.append("g")
          .attr("transform", `translate(40, 0)`)
          .call(d3.axisLeft(y))
          .attr("font-size", '20px')
          .call((g) => g.append("text")
                        .attr("x", 0)
                        .attr("y", margin2.top - 10)
                        .attr("fill", "black")
                        .attr("text-anchor", "end")
                        .text(xKey));
    
    
        // plot.append("g")
        //   .call(d3.axisLeft(y));
    
      // Another scale for subgroup position?
      let xSubgroup = d3.scaleBand()
        .domain(subgroups)
        .range([0, x.bandwidth()])
        .padding([0.05])
    
      // color palette = one color per subgroup
      let color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8'])
    
      plot.append("g")
        .selectAll("g")
        // Enter in data = loop group per group
        .data(d)
        .enter()
        .append("g")
          .attr("transform", function(d) { return "translate(" + x(d.Year) + ",0)"; })
        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
        .enter().append("rect")
          .attr("x", function(d) { return xSubgroup(d.key); })
          .attr("y", function(d) { return y(d.value); })
          .attr("width", xSubgroup.bandwidth())
          .attr("height", function(d) { return height2 - y(d.value); })
    
      }
    
    }


});