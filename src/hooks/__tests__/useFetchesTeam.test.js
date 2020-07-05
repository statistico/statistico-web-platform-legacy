import { renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeam from '../useFetchesTeam';
import getTeam from '../../packages/api/statistico-client';

jest.mock('../../packages/api/statistico-client');
jest.mock('../useAsyncError');

describe('useFetchesTeam', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns fetched team', async () => {
    const team = { id: 1, name: 'West Ham United' };
    getTeam.mockImplementationOnce(() => Promise.resolve(team));

    const { result, waitForNextUpdate } = renderHook(() => useFetchesTeam(1));

    await waitForNextUpdate();

    expect(result.current.team).toEqual(team);
    expect(result.current.loading).toBe(false);
  });

  it('returns loading as true on first render', async () => {
    getTeam.mockImplementationOnce(() => Promise.resolve({}));

    const { result, waitForNextUpdate } = renderHook(() => useFetchesTeam(1));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.team).toEqual({});
    expect(result.current.loading).toBe(false);
  });

  it('throws an error if thrown by getTeam call', async () => {
    const error = new Error('Not found');
    getTeam.mockImplementationOnce(() => Promise.reject(error));
    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() => useFetchesTeam(1));

    expect(result.error).toEqual(error);
  });
});
