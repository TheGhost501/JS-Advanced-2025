function gcd(number1, number2) {

    if (number2 === 0) {
        return number1;
    }
    return gcd(number2, number1 % number2);

}
console.log(gcd(15, 5))
console.log(gcd(2154, 458))