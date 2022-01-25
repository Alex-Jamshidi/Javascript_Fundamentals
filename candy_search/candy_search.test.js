const searchCandies = require('./candy_search')

describe(searchCandies, () => {
  it('returns Mars and Maltesers when given inputS Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns Mars when given inputS Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns Skitties, Skittles and Starburst when given inputS S and 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
  
  it('returns Skitties and Skittles when given inputS S and 10', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});