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
const weatherSection = `<h3 class="addressField">Address</h3>
                        <div>
                            <img class="weatherImgField" src="https://cdn-icons-png.flaticon.com/512/1163/1163739.png" alt="">
                            <p class="weatherField">Unknown</p>
                            <p><span class="temperatureField">0</span>°c</p>
                            <p>Wind: <span class="windField">0</span>mph</p>
                            <p>Humidity: <span class="humidityField">0</span>%</p>
                        </div>`


function displayWeather() {
    document.getElementById('fillerMessage').innerText = 'Fetching Weather'
    const weather = fetchWeather().then(setWeather);
};

async function fetchWeather() {
    const location = document.getElementById('input').value;
    let distance = document.getElementById('distance').value;

    if (isNaN(distance) || distance == '') {
        distance = 10;
    };

    const url = `https://temp-weatherapp-166ed950d1b1.herokuapp.com/${location}/${distance}`;
    // const url = `http://172.17.123.169:5000/${location}/${distance}`;

    try {
        response = await fetch(url);
    } catch (error) {
        return false;
    }

    return await response.json();
};

function setWeather(weather) {
    if (weather === false) {
        document.getElementById('fillerMessage').innerText = 'Server Offline';
        return;
    };
    if (weather[0][0] == 'BAD_ADDRESS') {
        document.getElementById('fillerMessage').innerText = 'Address Not Found';
        return;
    };

    const addressList = document.getElementsByClassName('addressField');
    const weatherList = document.getElementsByClassName('weatherField');
    const weatherImgList = document.getElementsByClassName('weatherImgField');
    const temperatureList = document.getElementsByClassName('temperatureField');
    const windList = document.getElementsByClassName('windField');
    const humidityList = document.getElementsByClassName('humidityField');

    const nearby = document.getElementById('nearby')
    nearby.innerHTML = ''
    for (let i = 0; i < weather[1][0].length; i++) {
        if (i !== 0) {
            const node = document.createElement('div');
            node.classList.add(`glass-background`);
            node.innerHTML = weatherSection;
            nearby.appendChild(node)
        }

        addressList[i].innerText = weather[0][i];
        weatherList[i].innerText = weatherCode[weather[1][0][i]];
        weatherImgList[i].src = weatherImg[weather[1][0][i]];
        temperatureList[i].innerText = weather[1][1][i];
        windList[i].innerText = weather[1][2][i];
        humidityList[i].innerText = weather[1][3][i];
    };

    document.getElementById('filler').style.display = 'none';
    document.getElementById('report').style.display = 'inline';
};