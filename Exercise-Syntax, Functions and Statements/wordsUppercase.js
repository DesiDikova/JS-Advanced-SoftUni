function wordsUppercase(string) {

    let pattern = /\w+/gm;
    let match = string.match(pattern).join(', ').toUpperCase();

    console.log(match);   

        //Трябва да Коригирам Решението
    // let letter = string.toUpperCase();
    // let arr = [];
    // let buff = '';
    // for (let i = 0; i < letter.length; i++) {
    //     let element = letter.charCodeAt(i);

    //     if (element >= 65 && element <= 90) {
    //         buff += String.fromCharCode(element);
    //     } else {
    //         arr.push(buff);
    //         buff = '';
    //     }
    // }

    // if (arr.length === 0) {
    //     arr.push(buff);
    // }

    // console.log(arr);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');


