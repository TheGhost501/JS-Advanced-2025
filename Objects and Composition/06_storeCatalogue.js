function catalogue(strArr) {
    let sortedArr = strArr.sort((a, b) => a.localeCompare(b));
    let letterNow = "";

    for (const item of sortedArr) {

        let [productName, price] = item.split(" : ");
        let letter = productName[0].toUpperCase();
        if (letterNow != letter) {
            letterNow = letter;
            console.log(letterNow);
        }
        console.log(`  ${productName}: ${price}`);


    }

}

console.log(catalogue(['Banana : 2',
    `Rubic's Cube : 5`,
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])
);
