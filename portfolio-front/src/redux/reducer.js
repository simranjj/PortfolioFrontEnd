import initialState from "./store";
import ACTION_TYPES from "../constants/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.INIT_USER:
      return { ...state, user: payload };
    case ACTION_TYPES.UPDATE_USER:
      return { ...state, ...state.user, ...payload };

    default:
      return state;
  }
};
