const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach(candy => {
      totalPrice += candy.getPrice();
    });
    return totalPrice;
  };

  addItem(candy) {
    this.basket.push(candy);
  };
};

module.exports = ShoppingBasket;