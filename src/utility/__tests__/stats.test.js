import filterNullValues from '../stats';

describe('filterNullValues', () => {
  it('returns values from an array of stat objects', () => {
    const stats = [
      {
        fixtureId: 1,
        value: 5,
      },
      {
        fixtureId: 2,
        value: 2,
      },
      {
        fixtureId: 3,
        value: 3,
      },
    ];

    const filtered = filterNullValues(stats);

    expect(filtered).toEqual([5, 2, 3]);
  });

  it('removes null values from array', () => {
    const stats = [
      {
        fixtureId: 1,
        value: null,
      },
      {
        fixtureId: 2,
        value: 2,
      },
      {
        fixtureId: 3,
        value: 3,
      },
    ];

    const filtered = filterNullValues(stats);

    expect(filtered).toEqual([2, 3]);
  });
});
