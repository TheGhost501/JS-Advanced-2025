function caloriesObj(productsArr) {

    let productObj = {};

    for (let i = 0; i < productsArr.length; i += 2) {
        let name = productsArr[i]
        let calories = Number(productsArr[i + 1]);
        productObj[name] = calories;

    }

    console.log(productObj);

}
caloriesObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);