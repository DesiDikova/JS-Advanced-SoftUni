const solve = require('./1-sub-sum');

function test(params) {
    //Arrange
    let expectedeSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;
    
    //Act
    let actualSum = solve(numbers, startIndex, endIndex);

    //Assert
    if(actualSum === expectedeSum) {
        console.log('corect');
    }else {
        console.log('Error');
    }
}