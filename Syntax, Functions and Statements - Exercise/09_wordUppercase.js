function upperCase(text) {
let textArr = text.split(/[\W]+/);
let filteredArr = textArr.filter(x => x !== "");
console.log(filteredArr.join(", ").toUpperCase());

}

upperCase("Hi, how are you?")