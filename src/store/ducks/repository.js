// Types

export const Types = {
  ADD_REQUEST: 'repository/ADD_REQUEST',
  ADD_SUCESS: 'repository/ADD_SUCESS',
};

// Reducers
const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

// Actions
export const Creators = {
  addRepositoryRequest: () => ({ type: Types.ADD_REQUEST }),

  addRepositorySucess: data => ({
    type: Types.ADD_SUCESS,
    payload: { data },
  }),
};
