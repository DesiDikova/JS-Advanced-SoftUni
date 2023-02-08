function sameNumbers(num) {

    let string = num.toString();
    let firstNum = string[0];
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < string.length; i++) {
        if (firstNum != string[i]) {
            isSame = false;
        }

        sum += Number(string[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);