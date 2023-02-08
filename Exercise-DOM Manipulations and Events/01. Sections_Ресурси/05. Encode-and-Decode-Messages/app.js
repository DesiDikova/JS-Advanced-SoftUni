function encodeAndDecodeMessages() {
    let textareaElements = document.querySelectorAll('textarea');
    let buttonElements = document.querySelectorAll('button');

    buttonElements[0].addEventListener('click', encode);
    buttonElements[1].addEventListener('click', decode);

    function encode() {
        let char = textareaElements[0].value;
        let newChar = '';
        for (let i = 0; i < char.length; i++) {
            newChar += String.fromCharCode(char[i].charCodeAt(0) + 1);
        }

        textareaElements[1].value = newChar;
        textareaElements[0].value = '';
    }

    function decode() {
        let char = textareaElements[1].value;
        let newChar = '';
        for (let i = 0; i < char.length; i++) {
            newChar += String.fromCharCode(char[i].charCodeAt(0) - 1);
        }

        textareaElements[1].value = '';
        textareaElements[1].value = newChar;
    }
}