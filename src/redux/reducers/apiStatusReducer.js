import * as types from "../actions/actionType";
import initialState from "./initialState";

const actionTypeEndinSuccess = (type) => {
  return type.substring(type.length - 8) === "_SUCCESS";
};
const apiCallStatusReducer = (
  state = initialState.apiCallsinProgress,
  action
) => {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndinSuccess(action.type)
  ) {
    return state - 1;
  } else {
    return state;
  }
};
export default apiCallStatusReducer;
