function show_clock() {
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    // Play a sound
    let sound = new Audio('ticking-clock_1-27477.mp3');
    sound.play();
}

// Call the show_clock function every second
setInterval(show_clock, 1000);

// Initial call to set the clock immediately
show_clock();
