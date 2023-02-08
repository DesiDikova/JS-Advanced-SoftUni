function greatestCommonDivisorGCD(numOne, numTwo) {
    
    while (numOne != numTwo) {
        numOne > numTwo ? numOne -= numTwo : numTwo -= numOne;
    }

    console.log(numOne);
} 

greatestCommonDivisorGCD(15, 5);
// greatestCommonDivisorGCD(2154, 458);
