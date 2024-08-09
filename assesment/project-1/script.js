setInterval(showTime, 1000);
function showTime(){
    time = new Date();
    hour = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    session = "AM";

    if (hour > 12){
        hour -=12;
        session = "PM";
    }
    if (hour == 0){
        hr = 12;
        session = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    currentTime =hour + ":" + min + ":" + sec + " " +session;

    document.getElementById("clock").innerHTML = currentTime;
}

var d = new Date();
document.getElementById("date").innerHTML = (d.toDateString());

showTime();