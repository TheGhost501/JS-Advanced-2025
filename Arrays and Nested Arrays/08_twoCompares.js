function twoCriteria(arr) {

    let sortedArr = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })

    return sortedArr.join("\n");
}

console.log(twoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
