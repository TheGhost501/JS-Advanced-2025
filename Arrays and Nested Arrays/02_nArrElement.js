function printN(arr, n) {
    let outputArr = [];
    for (let i = 0; i < arr.length; i += n) {
        outputArr.push(arr[i]);
    }
    return outputArr; 
}
printN(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)