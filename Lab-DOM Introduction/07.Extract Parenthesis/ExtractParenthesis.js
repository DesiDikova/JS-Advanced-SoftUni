function extract(content) {
    let contentElement = document.getElementById('content');
    let currentText = contentElement.textContent;

    let pattern = /([\(])[A-z\ ]+([\)])/gm;
    let match = currentText.match(pattern);
    let result = [];

    for (text of match) {

        let startLetter = text[0];
        let finishLetter = text[text.length - 1];
        let startLetterIndex = text.indexOf(startLetter);
        let finishLetterIndex = text.indexOf(finishLetter);

        let deleted = text.slice(startLetterIndex + 1, finishLetterIndex);
        result.push(deleted);
    }

    return (result.join('; '));
}