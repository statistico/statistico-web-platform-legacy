import { renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeamStat from '../useFetchesTeamStat';
import teamStatPresenter from '../../presenters/team_stat';

jest.mock('../../presenters/team_stat');
jest.mock('../useAsyncError');

describe('useFetchesTeamStat', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const seasonIds = [1, 2];

  it('returns fetches team stat array', async () => {
    const stats = [{ fixtureId: 127892, stat: 'shots_total', value: 12 }];
    teamStatPresenter.mockImplementationOnce(() => Promise.resolve(stats));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamStat(
        null,
        null,
        5,
        false,
        seasonIds,
        'shots_total',
        1,
        null
      )
    );

    await waitForNextUpdate();
    expect(result.current.stats).toEqual(stats);
  });

  it('returns loading true on first render', async () => {
    teamStatPresenter.mockImplementationOnce(() => Promise.resolve([]));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamStat(
        null,
        null,
        5,
        false,
        seasonIds,
        'shots_total',
        1,
        null
      )
    );

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.stats).toEqual([]);
    expect(result.current.loading).toEqual(false);
  });

  it('throws an error if thrown by teamStatPresenter', async () => {
    const error = new Error('Not found');
    teamStatPresenter.mockImplementationOnce(() => Promise.reject(error));

    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() =>
      useFetchesTeamStat(
        null,
        null,
        5,
        false,
        seasonIds,
        'shots_total',
        1,
        null
      )
    );

    expect(result.error).toEqual(error);
  });
});
