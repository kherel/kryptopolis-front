import api from "api/api";
import {safeDA} from "utils";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";

const initialState = {
  loaded: false,
  entities: []
};



export default (news = initialState, { type, data }) => {
  switch (type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...news,
        loaded: true,
        entities: data,
      };
    case FETCH_NEWS_FAIL:
      return initialState;
  }

  return news;
};

export const fetchNews = () => async dispatch => {
  try{
    const {meta, data: entities} = await api.news.get()
    dispatch({type: FETCH_NEWS_SUCCESS, data: {meta, entities}})
  } catch (e) {
    const dataError = safeDA(error, ["response", "data"], {});
    dispatch({type: FETCH_NEWS_FAIL, data: dataError})
  }
}