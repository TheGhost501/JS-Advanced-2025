function zigZagSort(numArr) {
    let sorted = numArr.sort((a, b) => a - b);

    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (i % 2 == 0) {
            result.push(sorted[i]);
        } else {
            result.push(sorted[sorted.length-i])
        }
        
    }
    return result;

}

let output = zigZagSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

console.log(output);

