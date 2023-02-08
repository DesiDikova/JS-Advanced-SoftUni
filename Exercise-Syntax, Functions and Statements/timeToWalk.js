function timeToWalk(steps, footprint, speed) {

    let distanceMeters = steps * footprint; //дължина на 1 крачка в метри
    let speedSecond = speed / 3.6; //скоростта, обърната от км/ч в секунди
    let time = distanceMeters / speedSecond; //необходимото време за изминаване на разстоянието
    let rests = Math.floor(distanceMeters / 500); //забавяне с 1мин. на всеки 500метра

    let timeMin = Math.floor(time / 60); //необходимо време в минути
    let timeSec = Math.round(time - timeMin * 60); //необходимото време в секунди
    let timeH = Math.floor(time / 3600); //необходимото време в часове


    console.log(
        (timeH < 10 ? '0' : '') + timeH + ':' +
        ((timeMin + rests) < 10 ? '0' : '') + (timeMin + rests) + ':' +
        (timeSec < 10 ? '0' : '') + timeSec
    );
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);