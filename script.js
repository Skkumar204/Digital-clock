

function displayTime() {

    const h = document.getElementById('hours');
    const m = document.getElementById('mins');
    const s = document.getElementById('sec');
    const a = document.getElementById('ampm');

    let Time = new Date();
    let hr = Time.getHours();
    let min = Time.getMinutes();
    let sec = Time.getSeconds();


    sec = numconvert(sec);

  

    if (hr > 12) {
        hr = hr - 12
        a.innerHTML = 'PM';
    }
    else {

        a.innerHTML = 'AM';
    }

    h.innerHTML = numconvert(hr);
    m.innerHTML = numconvert(min);
    s.innerHTML = sec;
}

function numconvert(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500)