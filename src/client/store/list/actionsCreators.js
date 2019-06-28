import { SET_PARTNERS_LOADING_STATE, FETCH_PARTNERS, FETCH_PARTNERS_SUCCESS, SWITCH_LIST_VIEW } from './actions';

export const SwitchListView = (payload) => ({
  type: SWITCH_LIST_VIEW,
  payload,
});

export const SetPartnersLoadingState = (payload) => ({
  type: SET_PARTNERS_LOADING_STATE,
  payload,
});

export const FetchPartners = () => ({
  type: FETCH_PARTNERS,
});

export const FetchPartnersSuccess = (payload) => ({
  type: FETCH_PARTNERS_SUCCESS,
  payload,
});
