function attachEventsListeners() {

    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondsBtnElement = document.getElementById('secondsBtn');

    let daysTextElement = document.getElementById('days');
    let hoursTextElement = document.getElementById('hours');
    let minutesTextElement = document.getElementById('minutes');
    let secondsTextElement = document.getElementById('seconds');

    daysBtnElement.addEventListener('click', function() {
        let days = daysTextElement.value;
        hoursTextElement.value = days * 24;
        minutesTextElement.value = days * 1440;
        secondsTextElement.value = days * 86400;
    });

    hoursBtnElement.addEventListener('click', function() {
        let hours = hoursTextElement.value;
        daysTextElement.value = hours / 24;
        minutesTextElement.value = hours * 60;
        secondsTextElement.value = hours * 3600;
    });

    minutesBtnElement.addEventListener('click', function() {
        let minutes = minutesTextElement.value;
        daysTextElement.value = minutes / 60 / 24;
        hoursTextElement.value = minutes / 60;
        secondsTextElement.value = minutes * 60;
    });

    secondsBtnElement.addEventListener('click', function() {
        let seconds = secondsTextElement.value;
        daysTextElement.value = seconds / 60 / 60 / 24;
        hoursTextElement.value = seconds / 60 / 60;
        minutesTextElement.value = seconds / 60;
    });
}