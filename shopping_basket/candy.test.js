const Candy = require('./candy');

describe('Candy', () => {
  it('gets name', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });

  it('gets price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
});