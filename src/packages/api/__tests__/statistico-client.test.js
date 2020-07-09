import axiosMock from '../axios-client';

import { getTeam, getTeamResults } from '../index';

jest.mock('../axios-client');

describe('getTeam', () => {
  const team = {
    id: 1,
    name: 'West Ham United',
    logo: 'https://logo.com',
  };

  const data = {
    data: {
      data: {
        team,
      },
    },
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches data successfully from API', async () => {
    axiosMock.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(data));
    const response = await getTeam(1);

    await expect(response).toEqual(team);
  });

  it('fetches data used expected url', async () => {
    axiosMock.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(data));
    await getTeam(1);

    await expect(axiosMock.get).toHaveBeenCalledTimes(1);
    await expect(axiosMock.get).toHaveBeenCalledWith('/team/1');
  });

  it('throws error if error thrown from API', async () => {
    const error = 'Not found';
    axiosMock.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error(error)));

    await expect(getTeam(999)).rejects.toThrow(error);
  });
});

describe('getTeamResults', () => {
  // const results = [];
  //
  // const data = {
  //   data: {
  //     data: {
  //       results,
  //     },
  //   },
  // };
  //
  // afterEach(() => {
  //   jest.resetAllMocks();
  // });
  //
  // it('fetches data successfully from API', async () => {
  //   axiosMock.get = jest
  //     .fn()
  //     .mockImplementationOnce(() => Promise.resolve(data));
  //   const response = await getTeamResults({ team: { id: 1 } });
  //
  //   await expect(response).toEqual(results);
  // });

  // it('fetches data used expected url', async () => {
  //   axiosMock.get = jest
  //     .fn()
  //     .mockImplementationOnce(() => Promise.resolve(data));
  //   await getTeam(1);
  //
  //   await expect(axiosMock.get).toHaveBeenCalledTimes(1);
  //   await expect(axiosMock.get).toHaveBeenCalledWith('/team/1');
  // });
  //
  // it('throws error if error thrown from API', async () => {
  //   const error = 'Not found';
  //   axiosMock.get = jest
  //     .fn()
  //     .mockImplementationOnce(() => Promise.reject(new Error(error)));
  //
  //   await expect(getTeam(999)).rejects.toThrow(error);
  // });
});
