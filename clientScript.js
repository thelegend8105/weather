const updateDocument = (headingText, descriptionText, iconSource = "", className) => {
    const heading = document.getElementById("weathermain");
    const description = document.getElementById("weatherdescription");
    const iconElement = document.getElementById("weathericon");
    heading.innerText = headingText;
    description.innerText = descriptionText;
    if (iconSource.length <= 0) {
        iconElement.style.display = "none";
    }
    else {
        iconElement.style.display = "revert";
        iconElement.src = iconSource;
    }
    document.body.className = className;
}

const parseWeather = data => {
    const weatherCode = data.weather[0].id;
    switch (true) {
        case weatherCode >= 200 && weatherCode < 300:
            {
                updateDocument("Thunderstorms", "Final Boss", "/assets/icons/thunderstorms.svg", "thunderstorms");
                break;
            }
        case weatherCode >= 300 && weatherCode < 400:
            {
                updateDocument("Drizzle", "\"Just the beginning.\"", "/assets/icons/rainy-1.svg", "drizzle");
                break;
            }
        case weatherCode >= 500 && weatherCode < 600:
            {
                updateDocument("Rain", "\"The Boss' Domain\"", "/assets/icons/rainy-2.svg", "rain");
                break;
            }
        case weatherCode >= 600 && weatherCode < 700:
            {
                updateDocument("Snow", "\"The Aftermath\"", "/assets/icons/snowy-1-day.svg", "Snow");
                break;
            }
        case weatherCode >= 700 && weatherCode < 800:
            {
                if (weatherCode === 701) {
                    updateDocument("Mist", "\"The Lost Temple\"", "/assets/icons/fog-day.svg", "mist");
                    break;
                }
                if (weatherCode === 711) {
                    updateDocument("Smoke", "\"Ambush\"", "/assets/icons/haze-day.svg", "smoke");
                    break;
                }
                if (weatherCode === 721) {
                    updateDocument("Haze", "\"The Endless Desert\"", "/assets/icons/haze.svg", "haze");
                    break;
                }
                if (weatherCode === 731) {
                    updateDocument("Dust", "\"The Mirage\"", "/assets/icons/dust.svg", "dust");
                    break;
                }
                if (weatherCode === 741) {
                    updateDocument("Fog", "\"Unclear Path\"", "/assets/icons/fog.svg", "fog");
                    break;
                }
                if (weatherCode === 751) {
                    updateDocument("Sand", "\"The Return\"", "/assets/icons/haze-night.svg", "sand");
                    break;
                }
                if (weatherCode === 762) {
                    updateDocument("Ash", "\"Loss\"", "/assets/icons/dust.svg", "ash");
                    break;
                }
                if (weatherCode === 771) {
                    updateDocument("Squall", "\"The Trail\"", "/assets/icons/frost-day.svg", "squall");
                    break;
                }
                if (weatherCode === 781) {
                    updateDocument("Tornado", "\"Intruders\"", "/assets/icons/tornado.svg", "tornado");
                    break;
                }
            }
        case weatherCode === 800:
            {
                updateDocument("Clear", "\"The Journey Begins!\"", "/assets/icons/clear-day.svg", "clear");
                break;
            }
        case weatherCode >= 801 && weatherCode < 900:
            {
                updateDocument("Clouds", "\"Misfortune\"", "/assets/icons/cloudy-1-day.svg", "clouds");
                break;
            }
        default:
            {
                updateDocument("Weather unavailable :(", "No quests available.", "", "unavailable");
                break;
            }
    }
}

const updateWeather = () => fetch("/weather", { method: "get" }).then(response => response.json()).then(data => parseWeather(data));

window.addEventListener("load", () => {
    updateWeather();
    setInterval(updateWeather, 15 * 1000);
});