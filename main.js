
const apiKey = 'bfdda0d6f4de953410f42fd2a061f7c1';
const weatherContainer = document.getElementById('weather-container');
var cityName;

const currentDate = new Date();
const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
const formattedDate = currentDate.toLocaleString('en-GB', options);

console.log(formattedDate); 


function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}



function getValue(){
    var city = document.getElementById('city');
    cityName = capitalizeString(city.value);
    
    if(cityName != undefined){
      
        let clima = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.status);
        }
        })
        .then(data => { 
            console.log(data);
            let kelvinNumber = 273.15;
            let climate = capitalizeString(data.weather[0].main);
            let higtClimate = (data.main.temp_max - kelvinNumber).toFixed();
            let lowClimate = (data.main.temp_min - kelvinNumber).toFixed();
            let tempCelcius = (data.main.temp-kelvinNumber).toFixed();
            console.log(climate);
            console.log(tempCelcius);


        
        
            weatherContainer.innerHTML = `
            <h1>${cityName}</h1>
            <h2>${tempCelcius}°C</h2>
            <p>${climate}</p>
            <p>H:${higtClimate}° - L:${lowClimate}°</p>
            <p>${formattedDate}</p>
            
            `;

            // Do something with the retrieved data
        })
        .catch(error => {
            weatherContainer.innerHTML = `
            <p>Sory your city is incorrect, please try again </p>
            `;
            console.error('Error:', error);
        });

    }
    document.getElementById('city').value = '';
}




// ---------------------------------------------------------------------------------------------

// const apiKey = 'bfdda0d6f4de953410f42fd2a061f7c1';
// const searchInput = document.getElementById('city');
// searchInput.addEventListener('input', fetchData);

// function fetchData() {
//   const cityName = searchInput.value;
//   console.log(cityName);
//   console.log(apiKey);
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Error: ' + response.status);
//       }
//     })
//     .then(data => {
//       // Process the retrieved data
//       const filteredCities = filterCities(data, cityName);
//       displayCities(filteredCities);
//     })
//     .catch(error => {
//       // Handle any errors
//       console.error('Error:', error);
//     });
// }

// function filterCities(data, cityName) {
//   const allCities = data.list; // Assuming the API response provides a list of cities
//   const filteredCities = allCities.filter(city => city.name.toLowerCase().startsWith(cityName.toLowerCase()));

//   console.log(filterCities);
//   die();
  
//   return filteredCities;
// }

// function displayCities(cities) {
//   // Clear previous results
//   weatherContainer.innerHTML = '';

//   // Display the filtered cities in the UI
//   cities.forEach(city => {
//     const cityName = city.name;
//     const temperature = city.main.temp;
//     const weather = city.weather[0].description;

//     const cityElement = document.createElement('div');
//     cityElement.innerHTML = `<p>${cityName} - Temperature: ${temperature} - Weather: ${weather}</p>`;

//     weatherContainer.appendChild(cityElement);
//   });
// }


// ----------------------------------------------------

// const searchInput = document.getElementById('city');
// const data = ['apple','hola','amarillo', 'banana', 'orange', 'grape', 'pineapple', 'kiwi'];
// const resultsContainer = document.getElementById('weather-container');

// searchInput.addEventListener('input', search);

// function search() {
//   const searchTerm = searchInput.value.toLowerCase();
//   console.log(searchTerm);
//   const filteredData = data.filter(item => item.toLowerCase().startsWith(searchTerm));
//   console.log(filteredData);
//   displayResults(filteredData);
// }

// function displayResults(filteredData) {
//   resultsContainer.innerHTML = '';

//   filteredData.forEach(item => {
//     const resultItem = document.createElement('div');
//     resultItem.textContent = item;
//     resultsContainer.appendChild(resultItem);
//   });
// }
