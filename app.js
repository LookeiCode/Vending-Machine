moneyThatUserHas = 100;

const vendingMachine = [
    { snack: 'Snickers', quantity: 10, price: 1 },
    { snack: 'M&Ms', quantity: 5, price: 1 },
    { snack: 'Sour patch', quantity: 15, price: 3 },
]

const addSnackToVendingMachine = (snack, quantity, price) => {
    vendingMachine.push({ snack, quantity, price })
}

// addSnackToVendingMachine('Pringles', 2, 2.00);
// console.log(vendingMachine);

const buySnack = (snack) => {
    for (let i = 0; i < vendingMachine.length; i++) {
        const snackList = vendingMachine[i]
        if (snackList.snack === snack) {
            snackList.quantity -= 1
            moneyThatUserHas -= snackList.price
        } else if (snackList.snack === snack && snackList.quantity === 0) {
            alert('Out of stock, yo')
        }
    }
    return moneyThatUserHas;
}


const displayVendingMachineItems = () => {
    vendingMachine.forEach((snackList, index) => {
        console.log(`${index + 1}. ${snackList.quantity} ${snackList.snack}: $${snackList.price} each`)
    }
    )
}
// displayVendingMachineItems();

const getTotalPriceOfAllVendingMachineItems = () => {
    const totalPrice = []
    for (let j = 0; j < vendingMachine.length; j++) {
        const snackList = vendingMachine[j]
        totalPrice.push(snackList.price * snackList.quantity)
    }
    return totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(getTotalPriceOfAllVendingMachineItems())

function getNamesOfAllSnackItems() {
    const allSnackNames = [];

    for (const item of vendingMachine) {
        allSnackNames.push(item.snack)
    }
    return allSnackNames;
}

function getAllSnacksUnderTwoDollars() {
    underTwoDollars = getAllSnacksUnderTwoDollars();
    return vendingMachine.filter((snackItem) => snackItem.price < 2);
}

const hasSnack = snack => {
    for (const snackItem of vendingMachine) {
        if (snackItem.snack === snack) return true;
    }
    return false;
}

// EXTRA FLEX (AT LEAST I'LL TRY TO LOL)
const organizeQuantity = quantity => {
    const organizedList = []
    for (let i = 0; i < vendingMachine.length; i++) {
        const snackListQuantity = vendingMachine[i]

        if (snackListQuantity.quantity > 0) {
            organizedList.push(snackListQuantity.quantity)
        }
        organizedList.sort(function(a, b){
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
    }
    return organizedList;
}
console.log(organizeQuantity())

const inflationSucks = () => {
    for (let i = 0; i < vendingMachine.length; i++) {
        const snackPrices = vendingMachine[i]
        if (snackPrices.price < 1) {
            delete snack;
        }
        if (snackPrices.price >= 1){
            snackPrices.price * 2
        }
    }
    return inflationSucks;
}
console.log(inflationSucks())

module.exports = {
    moneyThatUserHas,
    addSnackToVendingMachine,
    getTotalPriceOfAllVendingMachineItems,
    buySnack,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
    hasSnack,
  }