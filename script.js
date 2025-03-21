const days = document.querySelector(".days");
const time = document.querySelector(".time");


const currentDate = new Date();
const olymDate = new Date("2028-07-14T00:00:00");
const remDate = olymDate-currentDate;



function timing() {
    const currentDate = new Date(); // Get the current time each second
    const remDate = olymDate - currentDate; // Calculate remaining time

    const inDays = Math.floor(remDate / (1000 * 60 * 60 * 24)); // Remaining days
    const hour = Math.floor((remDate / (1000 * 60 * 60)) % 24); // Remaining hours
    const Minute = Math.floor((remDate / (1000 * 60)) % 60); // Remaining minutes
    const second = Math.floor((remDate / 1000) % 60); // Remaining seconds

    // Update the UI
    days.innerHTML = inDays;
    time.innerHTML = `${hour}h: ${Minute}m: ${second}s.`;
}


setInterval(timing,1000);



function random_color(){
    const randomNumber = Math.floor(Math.random()*16777215)
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
}

setInterval(random_color,2000)

random_color();

