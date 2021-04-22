import { types } from "../types";

const initialState = {
  loading: false,
  results: {},
  error: {},
};
const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: {},
      };
    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        results: {},
        error: action.error,
      };
    default:
      return {
        state
      };
  }
};
export default fetchDataReducer;
