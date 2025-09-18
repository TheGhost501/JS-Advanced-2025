function increase(inputArr) {
    let newArr = [];
    let currentMin = Number.NEGATIVE_INFINITY;

    inputArr.forEach(element => {
        if (element >= currentMin) {
            newArr.push(element);
            currentMin = element;
        }

    });
    return newArr;
}

console.log(increase([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))

