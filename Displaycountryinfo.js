async function fetchMyCountryData(countryName) {
  try {
    let countryData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!countryData.ok) throw new Error("Country not found");
    let data = await countryData.json();
    
    let country = data[0];
    let name = country.name.common;
    let capital = country.capital[0];
    let [lat, lon] = country.capitalInfo.latlng;
    let weatherData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    if (!weatherData.ok) throw new Error("Weather data not available");
    let wdata = await weatherData.json();
let weather = wdata.current_weather.temperature;
    console.log(`Country:${name}`);
    console.log(`Capital:${capital}`);
    console.log(`Temperature:${weather}`);
  } catch (error) {
    console.log(error);
  }
}

fetchMyCountryData('Zimbabwe');





// async function fetchCountryInfo(countryName){
//     try {
//         let countryData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//         if (!countryData.ok) throw new Error('Country not found')
//             let data = await countryData.json();

//         let country = countryData[0];
//         let countryName = country.name.common;
//         let [lat,lng] = country.capitalInfo.latlng;
//         let weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
//         if (!weatherData.ok) throw new Error('Weather data is not available')
//             let wdata = await countryData.json();
//         console.log(wdata);
//     }catch(error){
//         console.log(error)
//     }
//     }

// fetchCountryInfo('Burundi');