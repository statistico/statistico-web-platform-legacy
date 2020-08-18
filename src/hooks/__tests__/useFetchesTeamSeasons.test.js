import { act, renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeamSeasons from '../useFetchesTeamSeasons';
import { teamSeasonsPresenter } from '../../presenters/team';

jest.mock('../../presenters/team');
jest.mock('../useAsyncError');

describe('useFetchesTeamSeasons', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const seasons = [];

  seasons['2019/2020'] = {
    current: true,
    seasonIds: [1, 2],
  };

  seasons['2018/2019'] = {
    current: false,
    seasonIds: [3],
  };

  seasons['2017/2018'] = {
    current: false,
    seasonIds: [4],
  };

  it('returns fetched seasons for a team', async () => {
    teamSeasonsPresenter.mockImplementationOnce(() => Promise.resolve(seasons));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamSeasons(1)
    );

    await waitForNextUpdate();

    expect(result.current.seasons).toEqual(seasons);
  });

  it('returns selected seasons if seasons are current', async () => {
    teamSeasonsPresenter.mockImplementationOnce(() => Promise.resolve(seasons));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamSeasons(1)
    );

    await waitForNextUpdate();

    expect(result.current.selectedSeasons).toEqual(seasons['2019/2020']);
  });
});
