import api from "api/api";
import {safeDA} from "utils";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";
const REMOVE_NEWS_SUCCESS = "REMOVE_NEWS_SUCCESS";
const REMOVE_NEWS_FAIL = "REMOVE_NEWS_FAIL";


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
        meta: data.meta,
        entities: mapper(data.entities)
      };
    case REMOVE_NEWS_SUCCESS:
      return {
        ...news,
        entities: news.entities.filter(el => el.id !== data)
      };
    case FETCH_NEWS_FAIL:
      return initialState;
  }

  return news;
};

const mapper = (entities) => (
  entities.map(item => ({
    ...item.attributes, id: item.id
  }))
)


export const fetchNews = () => async dispatch => {
  try{
    const {meta, data: entities} = await api.news.get()
    return dispatch({type: FETCH_NEWS_SUCCESS, data: {meta, entities}})
  } catch (error) {

    const dataError = safeDA(error, ["response", "data"], error);
    return dispatch({type: FETCH_NEWS_FAIL, data: dataError})
  }
}

export const removeNews = (id) => async dispatch => {
  try{
    await api.news.delete(id)
    return dispatch({type: REMOVE_NEWS_SUCCESS, data: id})
  } catch (error) {
    const dataError = safeDA(error, ["response", "data"], error);
    return dispatch({type: REMOVE_NEWS_FAIL, data: {id, dataError}})
  }
}