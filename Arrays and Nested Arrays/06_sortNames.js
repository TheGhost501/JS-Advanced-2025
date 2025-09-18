function nameSort(nameArr) {

    let output = nameArr
        .sort((a, b) => a.localeCompare(b))
        .map((nameString, index) => `${index + 1}.` + nameString);

    return output.join("\n")
}

console.log(nameSort(["John", "Bob", "Christina", "Ema"]));
