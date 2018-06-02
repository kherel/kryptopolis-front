import api from "api/api";
import { path, prepend, update} from "ramda";
const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL";
const REMOVE_ARTICLES_SUCCESS = "REMOVE_ARTICLES_SUCCESS";
const REMOVE_ARTICLES_FAIL = "REMOVE_ARTICLES_FAIL";
const CREATE_ARTICLES_SUCCESS = "CREATE_ARTICLES_SUCCESS"
const CREATE_ARTICLES_FAIL = "CREATE_ARTICLES_FAIL"
const UPDATE_ARTICLES_SUCCESS = "UPDATE_ARTICLES_SUCCESS"
const UPDATE_ARTICLES_FAIL = "UPDATE_ARTICLES_FAIL"

const initialState = {
  loaded: false,
  entities: []
};

export default (articles = initialState, { type, data }) => {
  let newItem, itemIndex, id;
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...articles,
        loaded: true,
        meta: data.meta,
        entities: mapper(data.entities)
      };
    case FETCH_ARTICLES_FAIL:
      return initialState;
    case REMOVE_ARTICLES_SUCCESS:
      return {
        ...articles,
        entities: articles.entities.filter(el => el.id !== data)
      };
    case CREATE_ARTICLES_SUCCESS:
      newItem = convertArticles(data.data)
      return {
        ...articles,
        entities: prepend(newItem, articles.entities)
      };
    case UPDATE_ARTICLES_SUCCESS:
      newItem = convertArticles(data.data)
      itemIndex = articles.entities.findIndex(item => item.id === newItem.id)
      return {
        ...articles,
        entities: update(itemIndex, newItem, articles.entities)
      };
  }

  return articles;
};

const mapper = (entities) => entities.reverse().map(convertArticles)

const convertArticles = (item) => {
  let text = path(["attributes", "text"], item)

  return({
    ...item.attributes,
    text,
    id: item.id
  })
}


export const fetchArticles = () => async dispatch => {
  try{
    const {meta, data: entities} = await api.articles.get()
    return dispatch({type: FETCH_ARTICLES_SUCCESS, data: {meta, entities}})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: FETCH_ARTICLES_FAIL, data: dataError})
  }
}

export const removeArticles = (id) => async dispatch => {
  try{
    await api.articles.delete(id)
    return dispatch({type: REMOVE_ARTICLES_SUCCESS, data: id})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: REMOVE_ARTICLES_FAIL, data: {id, dataError}})
  }
}

export const createArticles = (publish, publishAt, title, file, summary, draft, text) => async dispatch => {
  try{
    let image;
    const attributes = {publish, publishAt, title, file, summary, draft, text}
    if (file) {
      image = await api.cloudinary.upload(file)
      attributes.image = image
    }
    const res = await api.articles.post(attributes)
    return dispatch({type: CREATE_ARTICLES_SUCCESS, data: res})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: CREATE_ARTICLES_FAIL, data: dataError})
  }
}

export const updateArticles = (id, publish, publishAt, title, file, summary, draft, text) => async dispatch => {

  try{
    let image;
    const attributes = {publish, publishAt, title, file, summary, draft, text}
    if (file) {
      image = await api.cloudinary.upload(file)
      attributes.image = image
    }
    const res = await api.articles.put(id, attributes)
    return dispatch({type: UPDATE_ARTICLES_SUCCESS, data: res})
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({type: UPDATE_ARTICLES_FAIL, data: dataError})
  }
}

export async function loadArticles(reduxStore){
  const {articles: {loaded}} = reduxStore.getState()
  if(!loaded){
    await reduxStore.dispatch(fetchArticles())
  }
}

