let today = new Date()
let futureDay = new Date(1706698800000)
let vacayDays = futureDay - today
let days = (vacayDays = Math.round(vacayDays / 1000 / 60 / 60 / 24))
let now = new Date()
let sixAM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0)

// If it's already past 6am, calculate for 6am the next day
if (now > sixAM) {
    sixAM.setDate(sixAM.getDate() + 1)
}

let diffMs = sixAM - now // difference in milliseconds
let diffHrs = diffMs / (1000 * 60 * 60) // convert milliseconds to hours

let ow = new Date()
let inutes = now.getMinutes()
let minutesUntilNextHour = 60 - inutes

document.getElementById('minutes').innerHTML = minutesUntilNextHour
document.getElementById('hours').innerHTML = Math.trunc(diffHrs)
if (diffHrs === 12 || diffHrs > 12) {
    document.getElementById('days').innerHTML = days - 1
} else {
    document.getElementById('days').innerHTML = days
}

document.getElementById('departDate').innerHTML = futureDay.toLocaleDateString(
    'en-US',
    {
        // weekday: "long",
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }
)

setTimeout(function () {
    location.reload()
}, 60000)

// Change colors based on odd or even day
const bgColor = $('#bgColor')
const sep = $('#seperator')
const h3 = $('#h3')
const depart = $('#departDate')
const main = $('#mainBg')

if (now.getDate() % 2 === 0) {
    bgColor.removeClass('bg-my-yellow/75 text-white')
    bgColor.addClass('bg-my-purple/75 text-my-yellow')
    sep.removeClass('border-my-purple opacity-25')
    sep.addClass('border-my-yellow opacity-100')
    h3.removeClass('text-my-purple/50')
    h3.addClass('text-my-yellow')
    depart.removeClass('text-my-purple/50')
    depart.addClass('text-my-yellow')

    $('#div_1, #div_2, #div_3').each(function () {
        $(this).removeClass('bg-my-purple/50')
        $(this).addClass('bg-white/25')
    })

    main.css('background-image', 'url("/assets/caribbeanIsland.jpg")')
}

let day = now.getDay()

if (day === 6 || day === 7) {
    main.css('background-image', 'url("/assets/cruiseShip.jpg")')
    bgColor.addClass('bg-sky-700/75')
    sep.removeClass('border-my-purple opacity-25')
    sep.addClass('border-white/75 opacity-100')
    h3.removeClass('text-my-purple/50')
    h3.addClass('text-white/75')
    depart.removeClass('text-my-purple/50')
    depart.addClass('text-white/75')

    $('#div_1, #div_2, #div_3').each(function () {
        $(this).removeClass('bg-my-purple/50')
        $(this).addClass('bg-white/25')
    })
}
