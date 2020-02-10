// Import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {
    let filteredData = tableData;
  // Save the element, value, and id of the filter that was changed
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#tcity").property("value");
    let state = d3.select("#tstate").property("value");
    let country = d3.select("#tcountry").property("value");
    let shape = d3.select("#tshape").property("value");
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
//      filters.append( {datetime: date}); 
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (city) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.city === city);
    }
    if (state) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.state === state);
    }
    if (country) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.country === country);
    }
    if (shape) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.shape === shape);
    }
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object

    // Call function to apply all filters and rebuild the table
    // filterTable();
    buildTable(filteredData);
}

// function filterTable() {
//     // Set the filteredData to the tableData
//     let filteredData = tableData;  
//     // Loop through all of the filters and keep any data that
//     // matches the filter values
//     for let i = 0; i < filters.lenght; i++) {
//         if (filters.datetime) {
//             filteredData = filteredData.filter(row => row.datetime === date);
//         }
//     }
  
  
//     // Finally, rebuild the table using the filtered Data
//     buildTable(filteredData);
//   }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", updateFilters);
  // Build the table when the page loads
  buildTable(tableData);