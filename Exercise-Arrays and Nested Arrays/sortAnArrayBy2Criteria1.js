function sortAnArrayBy2Criteria1(array) {

    let sortArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sortArray.forEach(element => console.log(element));   
}

sortAnArrayBy2Criteria1(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria1(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayBy2Criteria1(['test', 'Deny', 'omen', 'Default']);