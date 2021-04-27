import { types } from "../types";
import {filterByCategory} from "../../utils/index"

const initialState = {
  loading: false,
  categories: {},
  results: {},
  filteredOkrs:{},
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
        categories: action.categories,
        results: action.payload,
        filteredOkrs: action.payload,
        error: {},
      };
    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        results: {},
        error: action.error,
      };
      case types.FILTER_OKRS:
      const a = filterByCategory(state.results, action.category)

      return {
        ...state,
        loading: false,
        filteredOkrs: a,
        error: action.error,
      };
    default:
      return {
        state,
      };
  }
};
export default fetchDataReducer;
