function diagonalAttack(initialArr) {

    diagonalOne = 0;
    diagonalTwo = 0;

    for (let i = 0; i < initialArr.length; i++) {
        const element = initialArr[i].split(" ");
        diagonalOne += Number(element[i]);
        diagonalTwo += Number(element[element.length - 1 - i]);
    }
    if (diagonalOne == diagonalTwo) {

        mapSum();

    } else {

        console.log(initialArr.join("\n"));

    }


    function mapSum() {
        let newArr = [];
        for (let i = 0; i < initialArr.length; i++) {
            let element = initialArr[i].split(" ");
            let number1 = i;
            let number2 = element.length - 1 - i;
            let newRow = element.map((number, k) => {
                if (k == number1 || k == number2) {
                    return number;
                } else {
                    return number = diagonalOne;
                }
            })
            newArr.push(newRow.join(" "));
        }
        console.log(newArr.join("\n"));

    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)