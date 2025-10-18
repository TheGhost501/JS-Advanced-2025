class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const foundProduct = this.products.find(p => p.product === product);
        if (!foundProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
            
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
            
        }
        if (foundProduct.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - foundProduct.quantity;
            foundProduct.quantity = minimalQuantity;

            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const foundProduct = this.products.find(p => p.product === product);

        if (!foundProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
            
        }

        foundProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
            
        }

        const totalSold = this.sales.reduce((sum, s) => sum + s.quantity, 0);
        const productsInfo = this.products
            .map(p => `${p.product}-${p.quantity} more left`)
            .join('\n');

        return [
            `You sold ${totalSold} products today!`,
            "Products in the warehouse:",
            productsInfo
        ].join('\n');
    }
}

//input 1
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 500));

//input 2
const myOnlineShop2 = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40,));

//input 3
const myOnlineShop3 = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.sellProduct('keyboard'));
