import { UPDATE_REQUEST_VENUE } from '../actions/actionTypes';

const requestPayloadReducer = (state, action) => {
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
