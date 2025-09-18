function addRemove(commandsArr) {
    let increment = 1;
    let outputArr = [];

    commandsArr.forEach(command => {
        if (command == "add") {
            outputArr.push(increment);
        } else {
            outputArr.pop();
        }
        increment++;
    });

    return outputArr.length == 0 ? "Empty" : outputArr.join("\n");

}

console.log(addRemove(['remove', 
'remove', 
'remove']
));
