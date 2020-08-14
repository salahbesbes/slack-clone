import { get_User } from "../R-Const/TypeofAction";

const initState = {
  user: null,
};

const mainReducer = (state = initState, action) => {
  // action --> type , payload
  const { type, payload } = action;
  switch (type) {
    case get_User:
      return { ...state, user: payload.user, token: payload.token };
    default:
      return state;
  }
};
export default mainReducer;
