import api from "api/api";
import { path, prepend, update, dissoc } from "ramda";
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
const cloudinaryTag = 'news'

const NEWS = "NEWS";
const NEWS_ITEM = "NEWS_ITEM";

import { errorHelper } from "./helpers";
// reducer

const initialState = {
  loaded: false,
  ids: [],
  entities: {}
};

export default (news = initialState, { type, data }) => {
  let newItem, itemIndex, id;
  switch (type) {
    case FETCH + NEWS + SUCCESS:
      const { ids, entities } = mapper(data.entities);
      return {
        ...news,
        loaded: true,
        meta: data.meta,
        ids: [...news.ids, ...ids],
        entities: { ...news.entities, ...entities }
      };
    case FETCH + NEWS_ITEM + SUCCESS:
      return {
        ...news,
        entity: convertNews(data.entity)
      };
    case REMOVE + NEWS + SUCCESS:
      return {
        ...news,
        ids: news.ids.filter(id => id !== data),
        news: dissoc(data, news.entities)
      };
    case CREATE + NEWS + SUCCESS:
      newItem = convertNews(data.data);
      return {
        ...news,
        ids: [newItem.id, ...news.ids],
        entities: { [newItem.id]: newItem, ...news.entities }
      };
    case UPDATE + NEWS + SUCCESS:
      newItem = convertNews(data.data);
      return {
        ...news,
        entities: { ...news.entities, [newItem.id]: newItem }
      };
    case FETCH + NEWS + FAIL:
      return initialState;
  }

  return news;
};

const mapper = data => {
  const convertedArr = data.map(convertNews);

  const ids = [];
  const entities = {};
  convertedArr.forEach(el => {
    ids.push(el.id);
    entities[el.id] = el;
  });

  return { ids, entities };
};

const convertNews = item => {
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

export const fetchNewsItem = id => async dispatch => {
  try {
    const { meta, data: entity } = await api.news.show(id);
    return dispatch({
      type: FETCH + NEWS_ITEM + SUCCESS,
      data: { meta, entity }
    });
  } catch (error) {
    errorHelper(FETCH + NEWS_ITEM, error, dispatch);
  }
};

export const removeNews = id => async dispatch => {
  try {
    await api.news.delete(id);
    return dispatch({ type: REMOVE + NEWS + SUCCESS, data: id });
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({ type: REMOVE + NEWS + FAIL, data: { id, dataError } });
  }
};

export const createNews = (
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
    const res = await api.news.post(attributes);
    return dispatch({ type: CREATE + NEWS + SUCCESS, data: res });
  } catch (error) {
    errorHelper(CREATE + NEWS, error, dispatch);
  }
};

export const updateNews = (
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
    const res = await api.news.put(id, attributes);
    return dispatch({ type: UPDATE + NEWS + SUCCESS, data: res });
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({ type: UPDATE + NEWS + FAIL, data: { dataError, id } });
  }
};

// loaders
export async function loadNews(reduxStore) {
  const { news: { loaded } } = reduxStore.getState();
  if (!loaded) {
    await reduxStore.dispatch(fetchNews());
  }
}

export async function loadNewsItem(reduxStore, query) {
  const { news: { entities } } = reduxStore.getState();

  const { id } = query;
  let entity = entities[id];
  if (entity === undefined) {
    await reduxStore.dispatch(fetchNewsItem(id));
    entity = reduxStore.getState().news.entity;
  }

  return entity;
}

// selectors

export function selectorNews(state) {
  const { entities, ids } = selectorPublishedNews(state);

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
    if (momentDate.isSame(today, "day")) {
      result.todayIds.push(id);
    } else if (momentDate.isSame(yesterday, "day")) {
      result.yesterdayIds.push(id);
    } else {
      result.othersIds.push(id);
    }
  });

  return result;
}


export function selectorPublishedNews(state) {
  const {entities, ids: allIds} = state.news;

  const ids = allIds.filter(id => entities[id].publish)

  return {...state.news, ids};
}
