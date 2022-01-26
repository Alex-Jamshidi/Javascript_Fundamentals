const User = require('./user');
const UserBase = require('./userBase');

describe ('UserBase class', () => {
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  const userBase = new UserBase(users);

  it('returns number of users', () => {
    expect(userBase.count()).toBe(3);
  });

  it('returns names of users', () => {
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie' ]);
  });

  it('returns introduction of users', () => {
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie',
    ]);
  });
});