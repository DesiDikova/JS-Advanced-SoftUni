function counterBuilder() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

let count = counterBuilder();
count();
count();
count();
count();
