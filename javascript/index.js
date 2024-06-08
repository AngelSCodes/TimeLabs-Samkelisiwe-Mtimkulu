
function displayTime() {
    //london
let londonElement = document.querySelector("#london");
if (londonElement) {
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = moment().format("D MMMM YYYY");
londonTimeElement.innerHTML = londonTime.format("HH:mm:ss [<small>]A[</small>]");
}

    //bangkok

let bangkokElement = document.querySelector("#bangkok");
if(bangkokElement){
let bangkokDateElement = bangkokElement.querySelector(".date");
let bangkokTimeElement = bangkokElement.querySelector(".time");
let bangkokTime = moment().tz("Asia/Bangkok");
bangkokDateElement.innerHTML = moment().format("D MMMM YYYY");
bangkokTimeElement.innerHTML = bangkokTime.format("HH:mm:ss [<small>]A[</small>]");
}

   //cape-town
let capeTownElement = document.querySelector("#cape-town");
if(capeTownElement) {
let capeTownDateElement = capeTownElement.querySelector(".date");
let capeTownTimeElement = capeTownElement.querySelector(".time");
let capeTownTime = moment().tz("Africa/Johannesburg");
capeTownDateElement.innerHTML = moment().format("D MMMM YYYY");
capeTownTimeElement.innerHTML = capeTownTime.format("HH:mm:ss [<small>]A[</small>]");
}

    //london
let parisElement = document.querySelector("#paris");
if(parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = moment().format("D MMMM YYYY");
parisTimeElement.innerHTML = parisTime.format("HH:mm:ss [<small>]A[</small>]");
}
}

let currentTime = document.querySelector("#city");
setInterval(displayTime, 1000);


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =`
<div class="city">
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("D MMMM YYYY")}</div>
</div>
<div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>
    <a href="/">All cities</a>
`
}

let citiesSelectElement = document.querySelector("#select-cities");
citiesSelectElement.addEventListener("change", updateCity);
