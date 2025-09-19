function twoCriteria(arr) {

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    return sortedArr.join("\n");
}

console.log(twoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
