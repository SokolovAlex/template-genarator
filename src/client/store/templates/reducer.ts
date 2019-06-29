import { SET_PARTNERS_LOADING_STATE, FETCH_PARTNERS_SUCCESS, SWITCH_LIST_VIEW } from './actions';

export default (state = { view: 'list', partners: undefined }, action) => {
  switch (action.type) {
    case SET_PARTNERS_LOADING_STATE: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case FETCH_PARTNERS_SUCCESS: {
      return {
        ...state,
        partners: action.payload,
      };
    }

    case SWITCH_LIST_VIEW: {
      return {
        ...state,
        view: action.payload,
      };
    }

    default:
      return state;
  }
};
