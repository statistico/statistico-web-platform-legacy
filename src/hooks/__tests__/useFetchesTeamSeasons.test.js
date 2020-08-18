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

  const seasons = [
    {
      name: '2019/2020',
      current: true,
      seasonIds: [1, 2],
    },
    {
      name: '2018/2019',
      current: false,
      seasonIds: [3],
    },
    {
      name: '2017/2018',
      current: false,
      seasonIds: [4],
    },
  ];

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

    const expected = {
      name: '2019/2020',
      current: true,
      seasonIds: [1, 2],
    };

    expect(result.current.selectedSeasons).toEqual(expected);
  });

  it('updates selected seasons using selectedSeasonsToggleHandler function', async () => {
    teamSeasonsPresenter.mockImplementationOnce(() => Promise.resolve(seasons));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamSeasons(1)
    );

    await waitForNextUpdate();

    const updated = {
      name: '2020/2021',
      current: true,
      seasonIds: [5, 6, 7],
    };

    act(() => result.current.selectedSeasonsToggleHandler(updated));

    expect(result.current.selectedSeasons).toEqual(updated);
  });

  it('throws an error if thrown by useFetchesTeamSeasons call', async () => {
    const error = new Error('Not found');
    teamSeasonsPresenter.mockImplementationOnce(() => Promise.reject(error));
    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() => useFetchesTeamSeasons(1));

    expect(result.error).toEqual(error);
  });
});
