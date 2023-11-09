const main = () => {
    const counter = document.getElementsByClassName("counter")[0];
    const counterbox = document.getElementsByClassName("counterbox")[0];
    var d = new Date(2028, 5, 23, 17);
    var secondsLeft = d.getTime() - Date.now();
    secondsLeft = Math.floor(secondsLeft / 1000);
    console.log(secondsLeft.toString().length);
    counterbox.style.width = (counter.offsetWidth * (secondsLeft.toString().length - 1) - 4).toString() + "px";
    counter.innerHTML = secondsLeft.toString();

    update(counter);
}

var interval;
var dateThen = (new Date(2028, 6, 3, 15)).getTime()

const update = c => {
    var datenow = Date.now();
    var nextdate = Math.floor(datenow / 1000 + 1) * 1000 + 10
    var delta = nextdate - datenow;

    setTimeout(() => {
        update(c);
    }, delta);

    var secondsLeft = dateThen - datenow;
    secondsLeft = Math.floor(secondsLeft / 1000);
    var strSecondsLeft = secondsLeft.toString();
    var state = 0;
    var speed = strSecondsLeft.length;
    for (let i = 0; i < strSecondsLeft.length; i++) {
        if(strSecondsLeft[i] != c.innerHTML[i]) {
            speed -= i;
            break
        }
    }
    clearInterval(interval);
    interval = setInterval(() => {
        if(strSecondsLeft.includes(c.innerHTML)) {
            if(strSecondsLeft == c.innerHTML) {
                clearInterval(interval);
            }
            else {
                if(state == 0) {
                    state = 1;
                } else {
                    c.innerHTML += strSecondsLeft[c.innerHTML.length];
                }
            }
        } else {
            c.innerHTML = c.innerHTML.substring(0, c.innerHTML.length - 1);
        }
    }, 1 / (speed * 2 + 1) * 500);
}

document.addEventListener("DOMContentLoaded", _e => main());
