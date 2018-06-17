import api from "api/api";
import { path, dissoc } from "ramda";
import moment from "moment/moment";

// constants
import {
  SUCCESS,
  FAIL,
  FETCH,
  CREATE,
  UPDATE,
  REMOVE
} from "./commonConstants";
const cloudinaryTag = 'articles'

const ARTICLES = "ARTICLES";
const ARTICLE = "ARTICLE";

import { errorHelper } from "./helpers";
// reducer

const initialState = {
  loaded: false,
  ids: [],
  entities: {}
};

export default (articles = initialState, { type, data }) => {
  let newItem, itemIndex, id;
  switch (type) {
    case FETCH + ARTICLES + SUCCESS:
      const { ids, entities } = mapper(data.entities);
      return {
        ...articles,
        loaded: true,
        meta: data.meta,
        ids: [...articles.ids, ...ids],
        entities: { ...articles.entities, ...entities }
      };
    case FETCH + ARTICLE + SUCCESS:
      return {
        ...articles,
        entity: convertArticle(data.entity)
      };
    case REMOVE + ARTICLES + SUCCESS:
      return {
        ...articles,
        ids: articles.ids.filter(id => id !== data),
        articles: dissoc(data, articles.entities)
      };
    case CREATE + ARTICLES + SUCCESS:
      newItem = convertArticle(data.data);
      return {
        ...articles,
        ids: [newItem.id, ...articles.ids],
        entities: { [newItem.id]: newItem, ...articles.entities }
      };
    case UPDATE + ARTICLES + SUCCESS:
      newItem = convertArticle(data.data);
      return {
        ...articles,
        entities: { ...articles.entities, [newItem.id]: newItem }
      };
    case FETCH + ARTICLES + FAIL:
      return initialState;
  }

  return articles;
};

const mapper = data => {
  const convertedArr = data.reverse().map(convertArticle);

  const ids = [];
  const entities = {};
  convertedArr.forEach(el => {
    ids.push(el.id);
    entities[el.id] = el;
  });

  return { ids, entities };
};

const convertArticle = item => {
  const { publishAt, createdAt, updatedAt, ...other } = item.attributes;
  const releaseDate = publishAt ? publishAt : publishAt;
  const showDate = moment.utc(releaseDate).format("D MMM");

  return {
    ...other,
    releaseDate,
    showDate,
    id: item.id
  };

};

// action creators

export const fetchArticles = () => async dispatch => {
  try {
    const { meta, data: entities } = await api.articles.get({
      page: { limit: 30, offset: 0 }
    });

    return dispatch({ type: FETCH + ARTICLES + SUCCESS, data: { meta, entities } });
  } catch (error) {
    errorHelper(FETCH + ARTICLES, error, dispatch);
  }
};

export const fetchArticle = id => async dispatch => {
  try {
    const { meta, data: entity } = await api.articles.show(id);
    return dispatch({
      type: FETCH + ARTICLE + SUCCESS,
      data: { meta, entity }
    });
  } catch (error) {
    errorHelper(FETCH + ARTICLE, error, dispatch);
  }
};

export const removeArticle = id => async dispatch => {
  try {
    await api.articles.delete(id);
    return dispatch({ type: REMOVE + ARTICLES + SUCCESS, data: id });
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({ type: REMOVE + ARTICLES + FAIL, data: { id, dataError } });
  }
};

export const createArticle = (
  publish,
  publishAt,
  title,
  file,
  summary,
  draft,
  text
) => async dispatch => {
  try {
    let image;
    const attributes = {
      publish,
      publishAt,
      title,
      file,
      summary,
      draft,
      text
    };
    if (file) {
      image = await api.cloudinary.upload(file, cloudinaryTag);
      attributes.image = image;
    }
    const res = await api.articles.post(attributes);
    return dispatch({ type: CREATE + ARTICLES + SUCCESS, data: res });
  } catch (error) {
    errorHelper(CREATE + ARTICLES, error, dispatch);
  }
};

export const updateArticle = (
  id,
  publish,
  publishAt,
  title,
  file,
  summary,
  draft,
  text
) => async dispatch => {

  try {
    let image;
    const attributes = {
      publish,
      publishAt,
      title,
      file,
      summary,
      draft,
      text
    };
    if (file) {
      image = await api.cloudinary.upload(file, cloudinaryTag);
      attributes.image = image;
    }
    const res = await api.articles.put(id, attributes);
    return dispatch({ type: UPDATE + ARTICLES + SUCCESS, data: res });
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({ type: UPDATE + ARTICLES + FAIL, data: { dataError, id } });
  }
};

// loaders
export async function loadArticles(reduxStore) {
  const { articles: { loaded } } = reduxStore.getState();
  if (!loaded) {
    await reduxStore.dispatch(fetchArticles());
  }
}

export async function loadArticle(reduxStore, query) {
  const { articles: { entities } } = reduxStore.getState();
  const { id } = query;
  let entity = entities[id];
  if (entity === undefined) {
    await reduxStore.dispatch(fetchArticle(id));
    entity = reduxStore.getState().articles.entity;
  }

  return entity;
}

// selectors

export function selectorArticles(state) {
  const {entities, ids} = state.articles;

  const today = moment(),
    yesterday = moment().subtract(1, "day");

  let result = {
    todayIds: [],
    yesterdayIds: [],
    othersIds: [],
    entities
  };

  ids.forEach(id => {
    const {publish, releaseDate} = entities[id];
    const momentDate = moment.utc(releaseDate)

    if (publish) {
      if (momentDate.isSame(today, "day")) {
        result.todayIds.push(id);
      } else if (momentDate.isSame(yesterday, "day")) {
        result.yesterdayIds.push(id);
      } else {
        result.othersIds.push(id);
      }
    }
  });

  return result;
}

export function selectorPublishedArticles(state) {
  const {entities, ids: allIds} = state.articles;

  const ids = allIds.filter(id => entities[id].publish)

  return {...state.articles, ids};
}
