// let arr = []

// console.log(arr.fill(5))

//const tempGirls = Array(5).fill("girl", 0);

// let tempGirls = '| desi | diko | vanko | niki |'

// let r = tempGirls.split('|')


// console.log(r)

function extract(content) {
    let pattern = /([\(])[A-z\ ]+([\)])/gm;
    let match = content.match(pattern);
    let result = [];

    for (text of match) {
        
        result.push(match);
        let startLetter = text[0];
        let finishLetter = text[text.length - 1];
        let startLetterIndex = text.indexOf(startLetter);
        let finishLetterIndex = text.indexOf(finishLetter);

        let deleted = text.slice(startLetterIndex + 1, finishLetterIndex);
        result.push(deleted);
    }

    console.log(result. join('; '));
}

extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).')