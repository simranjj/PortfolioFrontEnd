import initialState from "./store";
import ACTION_TYPES from "../constants/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.INIT_USER:
      return { ...state, user: payload };
    case ACTION_TYPES.UPDATE_USER:
      Object.assign(state.user,payload);
      return  state;

    default:
      return state;
  }
};
