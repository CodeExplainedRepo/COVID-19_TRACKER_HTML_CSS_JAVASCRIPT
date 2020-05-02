// SELECT ELEMENTS 
const country_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const recovered_element = document.querySelector(".recovered .value");
const deaths_element = document.querySelector(".deaths .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const new_deaths_element = document.querySelector(".deaths .new-value");

// SELECT CANVAS FOR CHART
const ctx = document.getElementById("line-chart").getContext("2d");

// SOME VARIABLES
let app_data = []; // ALL DATA FROM API ARE SAVED HERE
let cases_list = [], recovered_list = [], deaths_list = [], dates = [];
let formatedDates = [];

// GET USER'S COUNTRY NAME USING THEIR IP ADDRESS
let countryCode = geoplugin_countryCode();
let country;
country_list.forEach( cntry => {
	if( cntry.code == countryCode ){
		country = cntry.name;
	}
})

// FETCH DATA FROM API
function fetchData(country){
    // BEFORE FETCHING DATA, WE RESET ALL OUR VARIABLE ARRAYS.
	app_data = [];
	cases_list = [], recovered_list = [], deaths_list = [], dates = [], formatedDates = [];
    
	// FETCH FOR DATA BY COUNTRY
	fetch(`https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_days_by_country.php?country=${country}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
			"x-rapidapi-key": "7e269ec140msh8a5df9cfc21b4b4p1c1e3ejsn9aba26afc6e0"
		}
	})
    .then( response => {
		return response.json();
	})
	.then( data => {
		console.log(data)
		dates = Object.keys(data);

		dates.forEach( date => {
			formatedDates.push(formatDate(date));
			let DATA = data[date]
			app_data.push(DATA);
			cases_list.push(parseInt(DATA.total_cases.replace(/,/g,"")));         
			recovered_list.push(parseInt(DATA.total_recovered.replace(/,/g,"")));
			deaths_list.push(parseInt(DATA.total_deaths.replace(/,/g,"")));
		});

    })
    // AFTER SAVING DATA, WE THEN UPDATE THE UI
    .then( updateUI )
    
    // IF THERE WAS AN ERROR DURING ANY OF THE STEPS ABOVE WE SHOW THE ERROR TO THE USER
	.catch( error => {
		alert(error);
	});
}
fetchData(country);


function updateUI(){
	updateStats();
	lineChart(); 
}

function updateStats(){
	let last_entry = app_data[app_data.length - 1];
	let before_last_entry = app_data[app_data.length - 2];

    country_element.innerHTML = last_entry.country_name;
    total_cases_element.innerHTML = last_entry.total_cases || 0;

    recovered_element.innerHTML = last_entry.total_recovered || 0;
	deaths_element.innerHTML = last_entry.total_deaths || 0;
	new_cases_element.innerHTML = "+" + (last_entry.new_cases || 0);
	new_recovered_element.innerHTML = `+${parseInt(last_entry.total_recovered.replace(",","")) - parseInt(before_last_entry.total_recovered.replace(",",""))}` || 0;
	new_deaths_element.innerHTML = "+" + (last_entry.new_deaths || 0);
}

let axes_line_chart;
function lineChart(){

	if(axes_line_chart){
		axes_line_chart.destroy();
	}
	
	axes_line_chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: formatedDates, // dates,
			datasets: [{
				label: 'Cases', // Name the series
				data: cases_list, // Specify the data values array
				fill: false,
				borderColor: '#FFFFFF', // Add custom color border (Line)
				backgroundColor: '#FFFFFF', // Add custom color background (Points and Fill)
				borderWidth: 1 // Specify bar border width
			},{
				label: 'Recovered', // Name the series
				data: recovered_list, // Specify the data values array
				fill: false,
				borderColor: '#009688', // Add custom color border (Line)
				backgroundColor: '#009688', // Add custom color background (Points and Fill)
				borderWidth: 1 // Specify bar border width
			},{
				label: 'Deaths', // Name the series
				data: deaths_list, // Specify the data values array
				fill: false,
				borderColor: '#f44336', // Add custom color border (Line)
				backgroundColor: '#f44336', // Add custom color background (Points and Fill)
				borderWidth: 1 // Specify bar border width
			}]},
		options: {
		  responsive: true, // Instruct chart js to respond nicely.
		  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
		}
	});
}

// MONTHS NAMES
const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(dateString){
	let date = new Date(dateString);
	
	return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
}
