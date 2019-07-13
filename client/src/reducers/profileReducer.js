import {
  GET_PROFILE,
  CLEAR_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  UPDATE_PROFILE,
  CREATE_TWEET,
  FOLLOW,
  GET_ERRORS
} from 'actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      };
    case CREATE_TWEET:
      const updatedProfile = {
        ...state.profile,
        tweets: [payload, ...state.profile.tweets]
      };
      return {
        ...state,
        profile: updatedProfile
      };
    case FOLLOW:
      return {
        ...state,
        profile: payload
      };
    case GET_ERRORS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}