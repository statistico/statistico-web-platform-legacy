import { renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeamResult from '../useFetchesTeamResults';
import resultsPresenter from '../../presenters/result';

jest.mock('../../presenters/result');
jest.mock('../useAsyncError');

describe('useFetchesTeamResult', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns fetched results', async () => {
    const results = [{ id: 1234, venue: 'London Stadium' }];
    resultsPresenter.mockImplementationOnce(() => Promise.resolve(results));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamResult({})
    );

    await waitForNextUpdate();

    expect(result.current.results).toEqual(results);
    expect(result.current.loading).toBe(false);
  });

  it('returns loading true on first render', async () => {
    resultsPresenter.mockImplementationOnce(() => Promise.resolve([]));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamResult({})
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.results).toEqual([]);
    expect(result.current.loading).toBe(false);
  });

  it('throws an error if thrown by getTeamResults call', async () => {
    const error = new Error('Not found');
    resultsPresenter.mockImplementationOnce(() => Promise.reject(error));

    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() => useFetchesTeamResult({}));

    expect(result.error).toEqual(error);
  });
});
