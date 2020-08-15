// 1.  DEFINE ORIGINAL DATA OBJECT
var tableData = data;
console.log(tableData);
// Get a reference to the table body
var tbody = d3.select("tbody");

// 1. to Create a Table by looping though an array of data-----------------
function createTable(data){
  data.map( item =>{
    // Use d3 to append one table row `tr` for each object
        var newRow= tbody.append('tr');
    // Use `Object.values` to put each new row in table
        Object.values(item).forEach(value=> newRow.append('td').text(value));
    });
};

createTable(tableData)

// RESPONSIVE PART OF CODE:
// Get a reference to the button on the page
var button = d3.select("#filter-btn");

// Get a reference to the input element on the page
var inputElem = d3.select('#datetime');

// get a reference to the form
var form = d3.select('form')

// // Create event handlers 
button.on("click", runEnter);
// TODO:  pressing enter not working to capture inputvalue
form.on("submit", runEnter);


// ----------DEFINE FUNCTION UPON ENTERING FILTERED DATA
// Complete the event handler function for the form
function runEnter() {
  d3.event.preventDefault();
  console.log(tableData[0])

   //  Get the value property of the input element
  var inputVal= inputElem.property('value');
  console.log(`inputVal:${inputVal}`);
  console.log("input was changed");
  console.log(d3.event.target);

  //   clear all rows  and data on the table:
  data.map(item =>{
      var delRow= d3.select('tbody>tr').remove();
      }); 
    
  //   Loop Through filtered data and append tr for results
  
  // filter data and store new array as selectedData
  selectedData= tableData.filter(item=>item.datetime===inputVal);
  console.log(`selected data: ${selectedData}`)
  
  // create a new row for each dictionsary in selectedData and add a td for each data value.

  createTable(selectedData);

};   
