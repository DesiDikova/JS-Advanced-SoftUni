function attachEventsListeners() {
    let inputDistanceElement = document.getElementById('inputDistance');
    let outputDistanceElement = document.getElementById('outputDistance');
    let inputUnitsElement = document.getElementById('inputUnits');
    let outputUnitsElement = document.getElementById('outputUnits');

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', clickBtn);

    let meterUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    function clickBtn(e) {
        let result = Number(inputDistanceElement.value) * meterUnits[inputUnitsElement.value];
        let finishResult = result / meterUnits[outputUnitsElement.value];
        
        outputDistanceElement.value = finishResult;
    }
}