import React, { useState } from 'react';

function trackerApp() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?lat=${latitude}&lon=${longitude}&appid=<YOUR_API_KEY>&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div>
      {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default trackerApp;

https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

    {
      "homeMobileCountryCode": 310,
      "homeMobileNetworkCode": 410,
      "radioType": "gsm",
      "carrier": "Vodafone",
      "considerIp": true,
      "cellTowers": [
        // See the Cell Tower Objects section below.
      ],
      "wifiAccessPoints": [
        // See the WiFi Access Point Objects section below.
      ]
    }
  
