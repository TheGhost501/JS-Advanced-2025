function cook(number,...arg) {
    let operation = {
        "chop": (num) => num / 2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => ++num,
        "bake": (num) => num * 3,
        "fillet": (num) => num * 0.8
    }

    let num = Number(number);

    for (let op of arg) {
        num = operation[op](num);
        console.log(num);
        
    }
}