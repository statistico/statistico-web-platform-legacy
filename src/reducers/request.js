import { UPDATE_REQUEST_VENUE } from '../actions/actionTypes';

const initialState = {
  team: {
    id: null,
    venue: null,
  },
  seasonIds: [],
  sort: null,
  limit: null,
};

const requestPayloadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REQUEST_VENUE:
      return {
        ...state,
        team: {
          ...state.team,
          venue: action.venue,
        },
      };
    default:
      return state;
  }
};

export default requestPayloadReducer;
