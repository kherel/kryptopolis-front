import {FAIL} from "redux-store/ducks/commonConstants";
import {safeDA} from "utils";

export const errorHelper = (type, error, dispatch, ) => {
  const dataError = safeDA(error, ["response", "data"], error);
  console.log('dataError', dataError)
  dispatch({ type: type + FAIL, data: dataError.error || dataError.message });
}