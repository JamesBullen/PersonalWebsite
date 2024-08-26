const weatherCode = {0:'Clear Skies', 1:'Mainly Clear', 2:'Partly Cloudy', 3:'Overcast', 45:'Fog', 48:'Depositing Rime Fog',51:'Light Drizzle', 53:'Moderate Drizzle',
    56:'Freezing Light Drizzle', 57:'Freezing Heavy Drizzle', 61:'Light Rain', 63:'Heavy Rain', 65:'Heavy Rain', 66:'Freazing Light Rain', 67:'Freezing Heavy Rain',
    71:'Light Snowfall', 73:'Moderadte Snowfall', 75:'Heavy Snowfall', 77:'Snow Grains', 80:'Light Showers', 81:'Moderate Showers', 82:'Heavy Showers',
    85:'Light Snow Showers', 86:'Heavy Snow Showers', 95:'Thunderstorm', 96:'Thunderstorm with Slight Hail', 99:'Thunderstorm with Heavy Hail'};
const weatherImg = {0:'https://cdn-icons-png.flaticon.com/512/1163/1163764.png', 1:'https://cdn-icons-png.flaticon.com/512/1163/1163763.png',
        2:'https://cdn-icons-png.flaticon.com/512/1163/1163763.png', 3:'https://cdn-icons-png.flaticon.com/512/1163/1163736.png', 45:'https://cdn-icons-png.flaticon.com/512/1163/1163742.png',
        48:'https://cdn-icons-png.flaticon.com/512/1163/1163742.png', 51:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 53:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png',
        56:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 57:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 61:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png',
        63:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 65:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 66:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png',
        67:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 71:'https://cdn-icons-png.flaticon.com/512/1163/1163731.png', 73:'https://cdn-icons-png.flaticon.com/512/1163/1163731.png',
        75:'https://cdn-icons-png.flaticon.com/512/1163/1163731.png', 77:'https://cdn-icons-png.flaticon.com/512/1163/1163731.png', 80:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png',
        81:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 82:'https://cdn-icons-png.flaticon.com/512/1163/1163728.png', 85:'https://cdn-icons-png.flaticon.com/512/1163/1163731.png',
        86:'https://cdn-icons-png.flaticon.com/512/1163/1163731.png', 95:'https://cdn-icons-png.flaticon.com/512/1163/1163738.png', 96:'https://cdn-icons-png.flaticon.com/512/1163/1163733.png',
        99:'https://cdn-icons-png.flaticon.com/512/1163/1163733.png'};

function displayWeather() {
    const weather = fetchWeather().then(setWeather);
};

async function fetchWeather() {
    const location = document.getElementById('input').value;
    //const distance = document.getElementById('distance').value;
    // const url = `http://192.168.1.165:5000/${location}/${distance}`;
    const url = `http://172.17.123.169:5000/${location}/20`;

    response = await fetch(url);

    return await response.json();
};

function setWeather(weather) {
    const addressList = document.getElementsByClassName('addressField');
    const weatherList = document.getElementsByClassName('weatherField');
    const weatherImgList = document.getElementsByClassName('weatherImgField');
    const temperatureList = document.getElementsByClassName('temperatureField');
    const windList = document.getElementsByClassName('windField');
    const humidityList = document.getElementsByClassName('humidityField');

    for (let i = 0; i < weather[1][0].length; i++) {
        addressList[i].innerText = weather[0][i];
        weatherList[i].innerText = weatherCode[weather[1][0][i]];
        weatherImgList[i].src = weatherImg[weather[1][0][i]];
        temperatureList[i].innerText = weather[1][1][i];
        windList[i].innerText = weather[1][2][i];
        humidityList[i].innerText = weather[1][3][i];
    };
};