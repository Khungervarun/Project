function updateTime(clockId, offset) {
    var now = new Date();
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    var targetTime = utc + (3600000 * offset); // Convert to target timezone

    var targetDate = new Date(targetTime);
    var hours = targetDate.getUTCHours();
    var minutes = targetDate.getUTCMinutes();
    var seconds = targetDate.getUTCSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById(clockId).getElementsByClassName('time')[0].textContent = timeString;
}

function updateClocks() {
    // Update India time (UTC+5:30)
    updateTime('clock-india', 5.5);

    // Update Australia time (UTC+8)
    updateTime('clock-australia', 8);

    // Update Canada time (UTC-4)
    updateTime('clock-canada', -4);
}

setInterval(updateClocks, 1000);
