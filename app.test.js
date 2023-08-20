const { 
    moneyThatUserHas,
    addSnackToVendingMachine,
    buySnack,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
    getTotalPriceOfAllVendingMachineItems,
    hasSnack,
  } = require('./vendingMachine');
  
  describe('Vending machine', () => {
    test('is able to add items', () => {
      const snack = 'Snickers';
      const price = 1;
      const quantity = 10;
  
      // add the item to the vending machine
      addSnackToVendingMachine(snack, quantity, price);
  
      expect(hasSnack(snack)).toBeTruthy();
    })
  
    test('allows user to buy items from the vending machine', () => {
      buySnack('Snickers');
      expect(moneyThatUserHas).toBe(99);
    })
  
    test('gets the total price of all items', () => {
        getTotalPriceOfAllVendingMachineItems();
        expect(totalPrice).toBe(60);
    })
  
    test('gets the names of all items', () => {
        getNamesOfAllSnackItems();
        expect(allSnackNames).toBe(allSnackNames);
    })
  
    test('gets all snacks under $2', () => {
        getAllSnacksUnderTwoDollars();
        expect(underTwoDollars).toBe(underTwoDollars);
    })
  });



        // read the note from the above test spec
      // however, your getAllSnacksUnderTwoDollars should return 
      // [{ snack: 'Snickers', quantity: 1, price: 1}]
      // this is "bad practice" but you can loop expects
      /*
      const snacksUnderTwoDollars = getAllSnacksUnderTwoDollars();
  
      for (const snack of snacksUnderTwoDollars) {
        // btw DONT MEMORIZE ANY OF THESE MATCHERS
        // i dont know any of these matchers. i just google the one i need
        // for example, i know that we need to check if a number is <= 2
        // just google "jest less than or equal" and youll find toBeLessThanOrEqual
        // or you can do expect(price of snack <= 2).toBeTruthy();
        expect(price of snack).toBeLessThanOrEqual(2)
      }
      */