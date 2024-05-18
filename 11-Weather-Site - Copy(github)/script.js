const getWeather = async (city) => {
  try {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "YOUR_API_KEY",
        "X-RapidAPI-Host": "YOUR_API_HOST",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    // CloudPct.innerHTML = result.cloud_pct; // Capitalized CloudPct
    FeelsLike.innerHTML = result.feels_like;
    Humidity.innerHTML = result.humidity;
    Humidity2.innerHTML = result.humidity;
    MaxTemp.innerHTML = result.max_temp; // Capitalized MaxTemp
    MinTemp.innerHTML = result.min_temp; // Capitalized MinTemp
    Sunrise.innerHTML = result.sunrise;
    Sunset.innerHTML = result.sunset;
    Temp.innerHTML = result.temp;
    Temp2.innerHTML = result.temp;
    WindDegrees.innerHTML = result.wind_degrees; // Capitalized WindDegrees
    WindSpeed.innerHTML = result.wind_speed; // Capitalized WindSpeed
    WindSpeed2.innerHTML = result.wind_speed; // Capitalized WindSpeed

    // console.log(result.cloud_pct);
  } catch (error) {
    console.error(error);
  }
};

// Call the async function using search button
submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value);
  topHeader.innerHTML = `Weather for ${city.value}`
});


getWeather('delhi')