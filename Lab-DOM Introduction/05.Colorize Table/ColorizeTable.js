function colorize() {
    //---------ПЪРВИ ВАРИАНТ
    // let tableEvenRowsElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    // for (let row of tableEvenRowsElements) {
    //     row.style.backgroundColor = 'teal';
    // }

    //---------ВТОРИ ВАРИАНТ
    // let evenRowsElements = document.getElementsByTagName('tr');
    // let result = Array.from(evenRowsElements);
    // result.forEach((x, i) => {
    //     if(i % 2 !== 0)
    //     x.style.backgroundColor =  'teal';
    // });


    //----------ТРЕТИ ВАРИАНТ
    let rowTable = document.querySelectorAll('tr');
    let rowTableL = rowTable.length;

    for (let i = 0; i < rowTableL; i++) {
        if (i % 2 !== 0) {
           let currentRow = rowTable[i];
           currentRow.style.backgroundColor = 'teal';
        }
    }
}
