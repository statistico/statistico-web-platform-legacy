import { renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeamResult from '../useFetchesTeamResults';
import { getTeamResults } from '../../packages/api/statistico-client';

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
    // expect(result.current.loading).toBe(false);
  });
});
