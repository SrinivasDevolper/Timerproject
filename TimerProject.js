const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
let giveawayID = document.getElementById("giveawayID");
let futureDate = new Date(2024, 0, 1, 12, 0, 0);
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let months = month[futureDate.getMonth()];
let date = futureDate.getDate();
let weekday = weeks[futureDate.getDay()];
giveawayID.textContent = `Giveaway Ends On ${weekday} ${date} ${months} ${year} ${hours}:${minutes}0am`;
const futureTime = futureDate.getTime();
let itemsID = document.getElementById("itemsID");
let daysID = document.getElementById("daysID");
let hoursID = document.getElementById("hoursID");
let minsID = document.getElementById("minsID");
let secID = document.getElementById("secID");

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    daysID.textContent = days;
    hoursID.textContent = hours;
    minsID.textContent = minutes;
    secID.textContent = seconds;
    if (days < 10) {
        daysID.textContent = `0${days}`;
    }
    if (hours < 10) {
        hoursID.textContent = `0${hours}`;
    }
    if (minutes < 10) {
        minsID.textContent = `0${minutes}`;
    }
    if (seconds < 10) {
        secID.textContent = `0${seconds}`;
    }
    if (t < 0) {
        clearInterval(countdown);
        itemsID.innerHTML = `<h4 class="Experied">Sorry, this giveaway has expired</h4>`
    }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();