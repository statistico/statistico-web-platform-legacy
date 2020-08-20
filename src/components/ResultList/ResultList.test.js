import React from 'react';
import { mount } from 'enzyme';

import Loader from '../Loader/Loader';
import ResultItem from '../ResultItem/ResultItem';
import ResultList from './ResultList';
import useFetchesTeamResults from '../../hooks/useFetchesTeamResults';

jest.mock('../../hooks/useFetchesTeamResults');

describe('<ResultList />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('display a <ResultItem /> component for each result returned', async () => {
    const results = [
      {
        id: 129810,
        homeTeam: {
          id: 1,
          name: 'West Ham United',
        },
        awayTeam: {
          id: 14,
          name: 'Arsenal',
        },
        venue: 'London Stadium',
        date: '2020-03-12T15:00:00+00',
        stats: {
          homeScore: 3,
          awayScore: 1,
        },
      },
      {
        id: 198201,
        homeTeam: {
          id: 17,
          name: 'Newcastle United',
        },
        awayTeam: {
          id: 45,
          name: 'Chelsea',
        },
        venue: 'St. James Park',
        date: '2020-03-12T15:00:00+00',
        stats: {
          homeScore: 3,
          awayScore: 4,
        },
      },
    ];

    const object = {
      results,
      loading: false,
      dispatch: () => {},
    };

    useFetchesTeamResults.mockReturnValueOnce(object);

    const wrapper = mount(<ResultList seasonIds={[16036]} teamId={1} />);

    expect(wrapper.find(ResultItem)).toHaveLength(2);
  });

  it('should display <Loader /> component is loading is returned true from hook', async () => {
    const object = {
      results: [],
      loading: true,
      dispatch: () => {},
    };

    useFetchesTeamResults.mockReturnValueOnce(object);

    const wrapper = mount(<ResultList seasonIds={[16036]} teamId={1} />);

    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(ResultItem)).toHaveLength(0);
  });
});
