const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
  const basket = new ShoppingBasket();
  const marsDouble = { getPrice: () => 4.99 };
  const skittlesDouble = { getPrice: () => 3.99 };


  it('total price of empty basket will be 0', () => {
    expect(basket.getTotalPrice()).toBe(0);
  });

  it('total price of basket will be 4.99 after adding Mars', () => {
    basket.addItem(marsDouble);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it('total price of basket will be 12.97 after adding 2x Skittles', () => {
    basket.addItem(skittlesDouble);
    basket.addItem(skittlesDouble);
    expect(basket.getTotalPrice()).toBe(12.97);
  });
});