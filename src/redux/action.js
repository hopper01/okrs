import { types } from "./types";
import { manageOkrs, getCategories  } from "../utils/index"

export const fetchData = (data) => {
    return {
        type: types.SEND_REQUEST,
        payload: data,
    }
}
export const fetchDataSuccess = (results) => {
    let modifiedOkrs = manageOkrs(results);
    let categories = getCategories(results);
    return {
        type: types.SEND_REQUEST_SUCCESS,
        payload: modifiedOkrs,
        categories,
    }
}

export const fetchDataFailure = (error) => {
    return{
        type: types.SEND_REQUEST_FAILURE,
        payload: {},
        error,
    }
}
