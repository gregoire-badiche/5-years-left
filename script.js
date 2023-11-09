const main = () => {
    const counter = document.getElementsByClassName("counter")[0]
    var d = new Date(2028, 5, 23, 17);
    var secondsLeft = d.getTime() - Date.now();
    secondsLeft = Math.floor(secondsLeft / 1000);
    counter.innerHTML = secondsLeft.toString();

    update(counter);
}

const update = c => {
    var datenow = Date.now();
    var nextdate = Math.floor(datenow / 1000 + 1) * 1000 + 10
    var delta = nextdate - datenow;

    setTimeout(() => {
        update(c);
    }, delta);

    console.log(delta);

    var secondsLeft = 1845385200000 - datenow;
    secondsLeft = Math.floor(secondsLeft / 1000);
    c.innerHTML = secondsLeft.toString();
}

document.addEventListener("DOMContentLoaded", _e => main());