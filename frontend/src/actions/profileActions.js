import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
} from './types';

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

// Clear Profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});

// Get Current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};
