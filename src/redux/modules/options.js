/**
 * actions types
 * @type {String}
 */
export const REQUEST_OPTIONS = 'REQUEST_OPTIONS';
export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';

/**
 * initial state
 * @type {Object}
 */
const initialState = {
  data: [],
  loading: false,
};

/**
 * reducer
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_OPTIONS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_OPTIONS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };

    default:
      return state;
  }
}

/**
 * request options
 * @return {Object}
 */
export function requestOptions() {
  return { type: REQUEST_OPTIONS };
}

/**
 * receive options
 * @param  {Object} data
 * @return {Object}
 */
export function receiveOptions(data) {
  return { type: RECEIVE_OPTIONS, data };
}
