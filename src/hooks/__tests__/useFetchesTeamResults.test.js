import { renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeamResult from '../useFetchesTeamResults';
import { getTeamResults } from '../../packages/api';

jest.mock('../../packages/api/statistico-client');
jest.mock('../useAsyncError');

describe('useFetchesTeamResult', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns fetched results', async () => {
    const results = [{ id: 1234, venue: 'London Stadium' }];
    getTeamResults.mockImplementationOnce(() => Promise.resolve(results));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamResult({})
    );

    await waitForNextUpdate();

    expect(result.current.results).toEqual(results);
    expect(result.current.loading).toBe(false);
  });

  it('returns loading true on first render', async () => {
    getTeamResults.mockImplementationOnce(() => Promise.resolve([]));

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
    getTeamResults.mockImplementationOnce(() => Promise.reject(error));

    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() => useFetchesTeamResult({}));

    expect(result.error).toEqual(error);
  });
});
