import requestPayloadReducer from '../request';
import { UPDATE_REQUEST_VENUE } from '../../actions/actionTypes';

describe('requestPayloadReducer', () => {
  it('returns initial state as default', () => {
    const expected = {
      team: {
        id: null,
        venue: null,
      },
      seasonIds: [],
      sort: null,
      limit: null,
    };

    expect(requestPayloadReducer(undefined, {})).toEqual(expected);
  });

  it('updates team venue property', () => {
    const expected = {
      team: {
        id: null,
        venue: 'home',
      },
      seasonIds: [],
      sort: null,
      limit: null,
    };

    const action = {
      type: UPDATE_REQUEST_VENUE,
      venue: 'home',
    };

    expect(requestPayloadReducer(undefined, action)).toEqual(expected);
  });
});
