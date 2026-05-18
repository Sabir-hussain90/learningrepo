const button=document.getElementById("click-button");

function showtime() {
    const currenttime = new Date();
    const time = `${currenttime.getHours()}:${currenttime.getMinutes()}:${currenttime.getSeconds()}`;
    document.getElementById("time").innerText = time;
}

//it show the current time and after the one second they will show the name of my name
showtime();

// after one second it will show the this code
//settime out fucntion i am gout to hide in commust 
//setTimeout
// now i am doing the second will properly continue as on stop wactch in figrues
// setInterval(showtime, 1000);
// store interval properly
const interval = setInterval(showtime, 1000);

// clear interval on button click
button.addEventListener("click", () => {
    clearInterval(interval);
});