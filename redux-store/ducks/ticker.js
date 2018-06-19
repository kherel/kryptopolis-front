import api from "api/api";
import { errorHelper } from "./helpers";

// constants
import {
  SUCCESS,
  FAIL,
  FETCH,
} from "./commonConstants";

const TICKER = "TICKER";


// reducer

const initialState = {
  loaded: false,
  max: [],
  min: [],
  main: [],
  entities: {}
};

export const fetchNews = () => async dispatch => {
  try {
    const { meta, data: entities } = await api.news.get({
      page: { limit: 30, offset: 0 }
    });

    return dispatch({ type: FETCH + NEWS + SUCCESS, data: { meta, entities } });
  } catch (error) {
    errorHelper(FETCH + NEWS, error, dispatch);
  }
};