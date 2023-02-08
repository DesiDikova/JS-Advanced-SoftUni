function roadRadar(currentSpeed, area) {

    // 'motorway' - ограничение 130 km/h
    // 'interstate' - ограничение 90 km/h
    // 'city' - ограничение 50 km/h 
    // 'residential' - ограничение 20 km/h

    // За превишена скорост до 20 km/h - статус 'speeding'.
    // За превишена скорост до 40 km/h - статус 'excessive speeding'.
    // За всяка останала превишена скорост - статус 'reckless driving'.

    let speedLimit = null;
    let status = null;
    let difference = 0;

    if (area === 'motorway') {
        speedLimit = 130;
    } else if (area === 'interstate') {
        speedLimit = 90;
    } else if (area === 'city') {
        speedLimit = 50;
    } else if (area === 'residential') {
        speedLimit = 20;
    } 

    if ((area === 'motorway' || area === 'interstate' || area === 'city' || area === 'residential') && currentSpeed > speedLimit) {
        difference = currentSpeed - speedLimit;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    } 
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');