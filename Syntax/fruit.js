function calc(fruit, kilosToBuy, price) {
    let kilosFruit = kilosToBuy / 1000;
    let priceToBuy = kilosFruit * price;

    return `I need $${priceToBuy} to buy ${kilosFruit} kilograms ${fruit}`;
}

console.log(calc('orange', 2500, 1.80));