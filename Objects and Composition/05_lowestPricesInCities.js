function cheapestCity(cities) {
    let products = {};
    let order = [];

    for (let line of cities) {

        let [town, product, priceStr] = line.split(" | ");
        let price = Number(priceStr);

        if (!products.hasOwnProperty(product)) {
            products[product] = { price, town };
            order.push(product);
        } else {
            if (price < products[product].price) {
                products[product] = { price, town };
            }
        }

    }

    for (let product of order) {
        let { price, town } = products[product];
        console.log(`${product} -> ${price} (${town})`);

    }
}

cheapestCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)