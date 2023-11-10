const main = () => {
    const counter = document.getElementsByClassName("counter")[0];
    var d = new Date(2028, 6, 3, 17);
    var secondsLeft = d.getTime() - Date.now();
    counter.style.height = counter.offsetHeight.toString() + "px";
    var height = counter.offsetHeight.toString() + "px";
    document.querySelector(':root').style.setProperty('--h', height)
    counter.innerHTML = '';
    for (let j = 0; j < 9; j++) {
        const number = document.createElement('span');
        number.className = "number";
        for (let i = 0; i < 10; i++) {
            const digit = document.createElement('span');
            digit.className = "digit";
            let t = document.createTextNode(i.toString())
            digit.appendChild(t);
            number.appendChild(digit);
        }
        counter.appendChild(number);
    }
    secondsLeft = Math.floor(secondsLeft / 1000);
    var strSecondsLeft = secondsLeft.toString();
    var numbers = document.getElementsByClassName("number")

    for (let i = 0; i < strSecondsLeft.length; i++) {
        numbers[i].setAttribute('n', strSecondsLeft[i])
    }
    // counter.innerHTML = secondsLeft.toString();

    update(secondsLeft, numbers);
}

var interval;
var dateThen = (new Date(2028, 6, 3, 17)).getTime()

const update = (dateprev, numbers) => {
    var datenow = Date.now();
    var secondsLeft = dateThen - Date.now();
    secondsLeft = Math.floor(secondsLeft / 1000);

    if (secondsLeft != dateprev) {
        var strSecondsLeft = secondsLeft.toString();

        for (let i = 0; i < strSecondsLeft.length; i++) {
            numbers[i].setAttribute('n', strSecondsLeft[i])
        }

        dateprev = datenow;
    }

    window.requestAnimationFrame(() => update(dateprev, numbers))
}

window.onload = () => main();
