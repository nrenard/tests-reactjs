export const Types = {
  GET_REQUEST: "repositories/GET_REQUEST",
  GET_SUCCESS: "repositories/GET_SUCCESS",
  GET_FAILURE: "repositories/GET_FAILURE"
};

const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null
};

export default function repositories(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        list: payload.repositories,
        loading: false
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getRequestSuccess: repositories => ({
    type: Types.GET_SUCCESS,
    payload: { repositories }
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  })
};
