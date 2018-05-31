import api from "api/api";
import { path, prepend, update} from "ramda";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";
const REMOVE_NEWS_SUCCESS = "REMOVE_NEWS_SUCCESS";
const REMOVE_NEWS_FAIL = "REMOVE_NEWS_FAIL";
const CREATE_NEWS_SUCCESS = "CREATE_NEWS_SUCCESS"
const CREATE_NEWS_FAIL = "CREATE_NEWS_FAIL"
const UPDATE_NEWS_SUCCESS = "UPDATE_NEWS_SUCCESS"
const UPDATE_NEWS_FAIL = "UPDATE_NEWS_FAIL"

const initialState = {
  loaded: false,
  entities: []
};



export default (news = initialState, { type, data }) => {
  let newItem, itemIndex, id;
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
    case CREATE_NEWS_SUCCESS:
      newItem = convertNews(data.data)
      return {
        ...news,
        entities: prepend(newItem, news.entities)
      };
    case UPDATE_NEWS_SUCCESS:
      newItem = convertNews(data.data)
      itemIndex = news.entities.findIndex(item => item.id === newItem.id)
      return {
        ...news,
        entities: update(itemIndex, newItem, news.entities)
      };
    case FETCH_NEWS_FAIL:
      return initialState;
  }

  return news;
};

const mapper = (entities) => entities.reverse().map(convertNews)

const convertNews = (item) => {
  let text = path(["attributes", "text"], item)

  return({
    ...item.attributes,
    text,
    id: item.id
  })
}


export const fetchNews = () => async dispatch => {
  try{
    const {meta, data: entities} = await api.news.get()
    return dispatch({type: FETCH_NEWS_SUCCESS, data: {meta, entities}})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: FETCH_NEWS_FAIL, data: dataError})
  }
}

export const removeNews = (id) => async dispatch => {
  try{
    await api.news.delete(id)
    return dispatch({type: REMOVE_NEWS_SUCCESS, data: id})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: REMOVE_NEWS_FAIL, data: {id, dataError}})
  }
}

export const createNews = (publish, publishAt, title, file, summary, draft, text) => async dispatch => {
  try{
    let image;
    const attributes = {publish, publishAt, title, file, summary, draft, text}
    if (file) {
      image = await api.cloudinary.upload(file)
      attributes.image = image
    }
    const res = await api.news.post(attributes)
    return dispatch({type: CREATE_NEWS_SUCCESS, data: res})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: CREATE_NEWS_FAIL, data: dataError})
  }
}

export const updateNews = (id, publish, publishAt, title, file, summary, draft, text) => async dispatch => {

  try{
    let image;
    const attributes = {publish, publishAt, title, file, summary, draft, text}
    if (file) {
      image = await api.cloudinary.upload(file)
      attributes.image = image
    }
    const res = await api.news.put(id, attributes)
    return dispatch({type: UPDATE_NEWS_SUCCESS, data: res})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: UPDATE_NEWS_FAIL, data: dataError})
  }
}

export async function loadNews(reduxStore){
  const {news: {loaded}} = reduxStore.getState()
  if(!loaded){
    await reduxStore.dispatch(fetchNews())
  }
}

