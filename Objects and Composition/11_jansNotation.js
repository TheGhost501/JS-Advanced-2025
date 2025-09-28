function jansNotation(input) {
    let stack = [];

    for (let token of input) {
        if (typeof token === "number") {
            stack.push(token);
        } else {
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let b = stack.pop();
            let a = stack.pop();

            switch (token) {
                case "+": stack.push(a + b); break;
                case "-": stack.push(a - b); break;
                case "*": stack.push(a * b); break;
                case "/": stack.push(a / b); break;
                default:
                    console.log(`Error: unknown operator "${token}"`);
                    return;
            }
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log("Error: too many operands!");
    }
}

jansNotation([3, 4, '+']);
// 7
jansNotation([5, 3, 4, '*', '-']);
// -7
jansNotation([7, '+']);
// Error: not enough operands!
jansNotation([1, 2, 3, '+']);