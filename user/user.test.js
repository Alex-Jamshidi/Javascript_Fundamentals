const User = require('./user');

describe ('User class', () => {
  const user = new User('Uma');

  it('returns name of user class instance', () => {
    expect(user.getName('Ma', 10)).toBe('Uma');
  });

  it('returns introduction of user class instance', () => { 
    expect(user.getIntroduction()).toBe('Hi, my name is Uma');
  });
});