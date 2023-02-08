function addAndRemoveElements(array) {
    
    let newArray = [];
    let count = 0;

    for (let command of array) {
        if (command === 'add') {
            count++;
            newArray.push(count)
        } else if (command === 'remove') {
            count++;
            newArray.pop(count);
        }  
    }    

    console.log(newArray.join('\n'));

    if (newArray.length === 0) {
        console.log(`Empty`);
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
// addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);