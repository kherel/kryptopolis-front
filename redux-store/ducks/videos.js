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

const VIDEOS = "VIDEOS";
const VIDEO = "VIDEO";

import { errorHelper } from "./helpers";
// reducer

const initialState = {
  loaded: false,
  ids: [],
  entities: {}
};

export default (videos = initialState, { type, data }) => {
  let newItem, itemIndex, id;
  switch (type) {
    case FETCH + VIDEOS + SUCCESS:
      const { ids, entities } = mapper(data.entities);
      return {
        ...videos,
        loaded: true,
        meta: data.meta,
        ids: [...videos.ids, ...ids],
        entities: { ...videos.entities, ...entities }
      };
    case FETCH + VIDEO + SUCCESS:
      return {
        ...videos,
        entity: convertVideo(data.entity)
      };
    case REMOVE + VIDEOS + SUCCESS:
      return {
        ...videos,
        ids: videos.ids.filter(id => id !== data),
        videos: dissoc(data, videos.entities)
      };
    case CREATE + VIDEOS + SUCCESS:
      newItem = convertVideo(data.data);
      return {
        ...videos,
        ids: [newItem.id, ...videos.ids],
        entities: { [newItem.id]: newItem, ...videos.entities }
      };
    case UPDATE + VIDEOS + SUCCESS:
      newItem = convertVideo(data.data);
      return {
        ...videos,
        entities: { ...videos.entities, [newItem.id]: newItem }
      };
    case FETCH + VIDEOS + FAIL:
      return initialState;
  }

  return videos;
};

const mapper = data => {
  const convertedArr = data.reverse().map(convertVideo);

  const ids = [];
  const entities = {};
  convertedArr.forEach(el => {
    ids.push(el.id);
    entities[el.id] = el;
  });

  return { ids, entities };
};

const convertVideo = item => {
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

export const fetchVideos = () => async dispatch => {
  try {
    const { meta, data: entities } = await api.videos.get({
      page: { limit: 10, offset: 0 }
    });

    return dispatch({ type: FETCH + VIDEOS + SUCCESS, data: { meta, entities } });
  } catch (error) {
    errorHelper(FETCH + VIDEOS, error, dispatch);
  }
};

export const fetchVideo = id => async dispatch => {
  try {
    const { meta, data: entity } = await api.videos.show(id);
    return dispatch({
      type: FETCH + VIDEO + SUCCESS,
      data: { meta, entity }
    });
  } catch (error) {
    errorHelper(FETCH + VIDEO, error, dispatch);
  }
};

export const removeVideo = id => async dispatch => {
  try {
    await api.videos.delete(id);
    return dispatch({ type: REMOVE + VIDEOS + SUCCESS, data: id });
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({ type: REMOVE + VIDEOS + FAIL, data: { id, dataError } });
  }
};

export const createVideo = (
  publish,
  publishAt,
  title,
  text,
  video
) => async dispatch => {
  try {
    const attributes = {
      publish,
      publishAt,
      title,
      text,
      video
    };
    const res = await api.videos.post(attributes);
    return dispatch({ type: CREATE + VIDEOS + SUCCESS, data: res });
  } catch (error) {
    errorHelper(CREATE + VIDEOS, error, dispatch);
  }
};

export const updateVideo = (
  id,
  publish,
  publishAt,
  title,
  text,
  video
) => async dispatch => {

  try {
    let image;
    const attributes = {
      publish,
      publishAt,
      title,
      text,
      video
    };
    const res = await api.videos.put(id, attributes);
    return dispatch({ type: UPDATE + VIDEOS + SUCCESS, data: res });
  } catch (error) {
    const dataError = path(["response", "data"], error) || error;
    return dispatch({ type: UPDATE + VIDEOS + FAIL, data: { dataError, id } });
  }
};

// loaders
export async function loadVideos(reduxStore) {
  const { videos: { loaded } } = reduxStore.getState();
  if (!loaded) {
    await reduxStore.dispatch(fetchVideos());
  }
}

export async function loadVideo(reduxStore, query) {
  const { videos: { entities } } = reduxStore.getState();
  const { id } = query;
  let entity = entities[id];
  if (entity === undefined) {
    await reduxStore.dispatch(fetchVideo(id));
    entity = reduxStore.getState().videos.entity;
  }

  return entity;
}

// selectors

export function selectorVideos(state) {
  const {entities, ids} = state.videos;

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
