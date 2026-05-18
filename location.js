const button = document.getElementById("click-button");

async function getData(lati, long) {

    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=7a6a7ea1777149a991671250261605&q=${lati},${long}&aqi=yes`
    );

    const data = await promise.json();

    return data;
}

async function getlocation(position) {

    const result = await getData(
        position.coords.latitude,
        position.coords.longitude
    );

    console.log(result);
}

function failedtoget() {
    console.log("There was something wrong");
}

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
        getlocation,
        failedtoget
    );
});