import api from "api/api";
import { errorHelper } from "./helpers";

// constants
import {
  SUCCESS,
  FAIL,
  FETCH,
} from "./commonConstants";
import {CREATE, REMOVE, UPDATE} from "redux-store/ducks/commonConstants";
import {fetchVideos} from "redux-store/ducks/videos";

const TICKERS_WIDGET = "TICKERS_WIDGET";


// reducer

const initialState = {
  loaded: false,
  max: [],
  min: [],
  main: [],
  entities: {}
};

export default (tickers = initialState, { type, data }) => {
  switch (type) {
    case FETCH + TICKERS_WIDGET + SUCCESS:
      return {
        loaded: true,
        ...data,
        entities: mapper(data.entities)
      };
  }

  return tickers;
};

function mapper(entities) {
  const res = {}
  for (let id in entities) {
    res[id] = entities[id]
    res[id].priceUSD = + entities[id].priceUSD.toFixed(4)
  }
  return res
}

export const fetchHeaderTickers = () => async dispatch => {
  try {
    const data = await api.tickers.widget();

    return dispatch({ type: FETCH + TICKERS_WIDGET + SUCCESS, data });
  } catch (error) {
    errorHelper(FETCH + TICKERS_WIDGET, error, dispatch);
  }
};

export async function loadHeaderTickers(reduxStore) {
  const { videos: { loaded } } = reduxStore.getState();
  if (!loaded) {
    await reduxStore.dispatch(fetchHeaderTickers());
  }
}
