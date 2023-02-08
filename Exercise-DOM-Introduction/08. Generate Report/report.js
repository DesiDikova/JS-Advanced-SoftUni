function generateReport() {
    let inputElements = document.querySelectorAll('tr th input');
    let rowElements = document.querySelectorAll('tbody tr');
    let outputElement = document.getElementById('output');

    let result = [];

    for (let i = 0; i < rowElements.length; i++) {
        let report = {};

        for (let j = 0; j < inputElements.length; j++) {
            if (inputElements[j].checked) {
                report[inputElements[j].name] = rowElements[i].children[j].textContent;
            }
        }

        result.push(report);
    }

    outputElement.textContent = JSON.stringify(result);
}