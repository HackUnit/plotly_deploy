// Bellybutton Bacteria plot.js code

function init() {

    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];

    Plotly.newPlot("plot", data);

};


d3.selectAll("#dropdownMenu").on("change", updatePlotly);

function updatePlotly() {

    var dropdownMenu = d3.select("#dropdownMenu");
    
    var dataset = dropdownMenu.property("value");


    var xData = [1, 2, 3, 4, 5];

    var yData = [];


    if (dataset === 'dataset1') {

        yData = [1, 2, 4, 8, 16];
    };

    if (dataset === 'dataset2') {

        yData = [1, 10, 100, 1000, 10000];
    };


    var trace = {

        x: [xData],

        y: [yData],
    };

    Plotly.restyle("plot", trace);

};


init();


// 12.4.3 JS code block that creates a dropdown menu of ID #s dynamically

function init() {

    var selector = d3.select("#selDataset");


    d3.json("samples.json").then((data) => {

        console.log(data);

        var sampleNames = data.names;

        sampleNames.forEach((sample) => {

            selector

                .append("option")

                .text(sample)
                
                .property("value", sample);
        });
})}

function optionChanged(newSample) {

    buildMetadata(newSample);

    buildCharts(newSample);

}

function buildMetadata(sample) {

    d3.json("samples.json").then((data) => {

        var metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        // Use d3 to select the panel with the id of '#sample-metadata'
        var PANEL = d3.select("#sample-metadata");

        // Use '.html("") to clear any existing metadata
        PANEL.html("");


        Object.entries(result).forEach(([key, value]) => {

            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}


init();


// d3 function from module 12

//d3.json("samples.json").then(function(data){
//    firstPerson = data.metadata[0];
//    Object.entries(firstPerson).forEach(([key, value]) =>
//        {console.log(key + ': ' + value);
//        });
//    wfreq = data.metadata.map(person =>
//        person.wfreq).sort((a,b) => b - a);
//    filteredWfreq = wfreq.filter(element =>
//        element != null);
//    //console.log(data);
//});


// All plot.js-esqe files from Module 12 in the same file to help with Challenge

//

// Line charts
//
///*Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]); */
//
//
///*Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]); */
//
//
// Bar chart for Luncheon Survey
//var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//};
//
//var layout = {
//    title: "Luncheon Survey",
//    xaxis: {title: "Food Option"},
//    yaxis: {title: "Number of Respondents"}
//};
//
//Plotly.newPlot("plotArea", [trace], layout);


// Functional JavaScript Practice

// map() Method

//var numbers = [1,2,3,4,5];
//var doubled = numbers.map(function(num){
//    return num * 2;
//});
//console.log(doubled);
//
//// Adding five instead of muliplying by 2
//
//var numbers = [0,2,4,6,8];
//var byFives = numbers.map(function(add){
//    return add + 5;
//});
//console.log(byFives);
//
//// Using map to extract properties from each object
//
//var cities = [
//    {
//        "Rank": 1,
//        "City": "San Antonio",
//        "State": "Texas",
//        "Increase_from_2016": "24208",
//        "population": "1511946"
//    },
//    {
//        "Rank": 2,
//        "City": "Phoenix",
//        "State": "Arizona",
//        "Increase_from_2016": "24036",
//        "population": "1626078"
//    },
//    {
//        "Rank": 3,
//        "City": "Dallas",
//        "State": "Texas",
//        "Increase_from_2016": "18925",
//        "population": "1341075"
//    }
//];
//
//var cityPopulation = populations.map(function(pop){
//    return pop.population;
//});
//console.log(cityPopulation);
//
//
//// filter() Method
//
//var numbers = [1,2,3,4,5];
//
//var larger = numbers.filter(function(num){
//	return num > 1;
//});
//
//console.log(larger);
//
//
//var familyAge = [2,3,39,37,9];
//
//var olderThanFive = familyAge.filter(function(age){
//	return age > 5;
//});
//console.log(olderThanFive);
//
//// Drill Skill to only have words that start with "s"
//var words = ['seal','dog','scorpion','orangutan','salamander'];
//
//var startsWithS = words.filter((word) => word.startsWith("s"));
//
//console.log(startsWithS);


// Arrow Funcitons

//var numbers = [1,2,3,4,5];

//var doubled = numbers.map(num => num * 2);
//console.log(doubled);


//var familyAge = [3,2,39,37,9];

//var sortedAge = familyAge.sort((a,b) => a - b);
//console.log(sortedAge);


// The slice() Method

//var integers = [0,1,2,3,4,5];

//var slice1 = integers.slice(0,2);
//console.log(slice1);

//var words = ['seal','dog','scorpion','orangutan','salamander'];

//var slice2 = words.slice(3, );
//console.log(slice2);


// City growth exercise js

//console.log(cityGrowths);

//var sortedCities = cityGrowths.sort((a,b) =>
//a.Increase_from_2016 - b.Increase_from_2016).reverse();

//var topFiveCities = sortedCities.slice(0,5);
//
//var topFiveCityNames = cityGrowths.map(city => city.City);
//
//var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,5);
//
//var trace = {
//
//    x: topFiveCityNames,
//    y: topFiveCityGrowths,
//    type: "bar"
//};
//var data = [trace];
//var layout = {
//    title: "Most Rapidly Growing Cities",
//    xaxis: {title: "City" },
//    yaxis: {title: "Population Growth, 2016-2017"}
//};
//
//Plotly.newPlot("bar-plot", data, layout)

// SpaceX exercise js

//const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => 
//console.log(receivedData));

//d3.json(url).then(spaceXResults =>
//    console.log(spaceXResults[0].full_name));

//d3.json(url).then(spaceXResults =>
//    console.log(spaceXResults[0].location.latitude));


    // Trying to use map() to print only the latitude and longitude
// coor of each SpaceX launch station.

//d3.json(url).then(spaceXResults => 
//    console.log(map(spaceXResults[].location.latitude)));













