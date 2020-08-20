import { renderHook } from '@testing-library/react-hooks';

import useAsyncError from '../useAsyncError';
import useFetchesTeamResults from '../useFetchesTeamResults';
import resultsPresenter from '../../presenters/result';

jest.mock('../../presenters/result');
jest.mock('../useAsyncError');

describe('useFetchesTeamResults', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns fetched results', async () => {
    const results = [{ id: 1234, venue: 'London Stadium' }];
    resultsPresenter.mockImplementationOnce(() => Promise.resolve(results));

    const seasonIds = [1, 2];

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamResults(1, seasonIds, 'venue')
    );

    await waitForNextUpdate();

    expect(result.current.results).toEqual(results);
  });

  it('returns loading true on first render', async () => {
    resultsPresenter.mockImplementationOnce(() => Promise.resolve([]));

    const seasonIds = [1, 2];

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchesTeamResults(1, seasonIds, 'venue')
    );

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.results).toEqual([]);
    expect(result.current.loading).toEqual(false);
  });

  it('throws an error if thrown by resultsPresenter', async () => {
    const error = new Error('Not found');
    resultsPresenter.mockImplementationOnce(() => Promise.reject(error));

    useAsyncError.mockImplementation(() => {
      throw error;
    });

    const { result } = renderHook(() => useFetchesTeamResults(1, [], 'venue'));

    expect(result.error).toEqual(error);
  });
});
