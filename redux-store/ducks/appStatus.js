export const CLEAR_STATUS = `CLEAR_STATUS`;
export const SET_STATUS = `SET_STATUS`;

const initialAppStatus = {
  status: undefined
};

export default function(appStatus = initialAppStatus, { type, data }) {
  switch (type) {
    case CLEAR_STATUS:
      return { ...appStatus, status: undefined };

    case SET_STATUS:
      return { ...appStatus, status: data };
  }

  return appStatus;
}

export const setStatus = data => ({ type: SET_STATUS, data });
export const clearStatus = () => ({ type: CLEAR_STATUS, data });
