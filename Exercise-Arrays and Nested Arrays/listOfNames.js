function listOfNames(array) {
    
    let sortName = array.sort((a, b) => a.localeCompare(b));
    let count = 0;

    for (let name of sortName) {

        count++;
        console.log(`${count}.${name}`);  
    }  
}

listOfNames(["John", "Bob", "Christina", "Ema"]);