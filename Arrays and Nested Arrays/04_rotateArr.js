function rotate(arr, rotations) {

    let output = arr;

    for (let i = 0; i < rotations; i++) {
        element = output.pop();
        output.unshift(element);
    }

    return output.join(" ");
}