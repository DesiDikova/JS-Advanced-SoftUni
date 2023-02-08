function solve() {
  let textElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  //---------ПЪРВИ ВАРИАНТ
  // let textElementL = textElement.length;
  // let result = '';

  // if (conventionElement === 'Camel Case') {  //this is an example - thisIsAnExample
  //   for (let i = 0; i < textElementL; i++) {
  //     let string = ' ';
  //     if (textElement[i] === string) {
  //       result += (textElement[i + 1].toUpperCase());
  //       i++;
  //     } else {
  //       result += textElement[i].toLowerCase();
  //     }
  //   }
  // } else if (conventionElement === 'Pascal Case') {  //secOND eXamPLE - SecondExample
  //   let firstLeter = (textElement[0].toUpperCase());
  //   result += firstLeter;
  //   for (let i = 1; i < textElementL; i++) {
  //     let string = ' ';
  //     if (textElement[i] === string) {
  //       result += (textElement[i + 1].toUpperCase());
  //       i++;
  //     } else {
  //       result += textElement[i].toLowerCase();
  //     }
  //   }
  // } else {
  //   result = 'Error!';
  // }


  //-----------ВТОРИ ВАРИАНТ

  let arrayWords = textElement.split(' '); //взимам текста

  let result = '';
  if (conventionElement === 'Camel Case') {   //this is an example - thisIsAnExample
    let firstWord = arrayWords.shift().toLowerCase();
    result = firstWord;
    for (let word of arrayWords) {
      let firstLeter = word[0].toUpperCase();
      let nextLeters = word.slice(1).toLowerCase();
      result += firstLeter.concat(nextLeters);      
    }
  } else if (conventionElement === 'Pascal Case') {   //secOND eXamPLE - SecondExample
    for (let element of arrayWords) {
      let firstLeter = element[0].toUpperCase();
      let nextLeters = element.slice(1).toLowerCase();
      let finishWord = firstLeter.concat(nextLeters);
      result += finishWord;
    }
  } else {
    result = 'Error!';
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}
