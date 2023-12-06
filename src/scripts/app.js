let today = new Date();
let futureDay = new Date(1706698800000);
let vacayDays = futureDay - today;
let days = (vacayDays = Math.round(vacayDays / 1000 / 60 / 60 / 24));
let now = new Date();
let sixAM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);

// If it's already past 6am, calculate for 6am the next day
if (now > sixAM) {
  sixAM.setDate(sixAM.getDate() + 1);
}

let diffMs = sixAM - now; // difference in milliseconds
let diffHrs = diffMs / (1000 * 60 * 60); // convert milliseconds to hours

let ow = new Date();
let inutes = now.getMinutes();
let minutesUntilNextHour = 60 - inutes;

document.getElementById("minutes").innerHTML = minutesUntilNextHour;
document.getElementById("hours").innerHTML = Math.round(diffHrs);
document.getElementById("days").innerHTML = days;
document.getElementById("departDate").innerHTML = futureDay.toLocaleDateString(
  "en-US",
  {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }
);

setTimeout(function () {
  location.reload();
}, 60000);
