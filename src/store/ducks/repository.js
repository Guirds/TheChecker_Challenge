// Types

export const Types = {
  ADD_REQUEST: 'repository/ADD_REQUEST',
  ADD_SUCESS: 'repository/ADD_SUCESS',
};

// Reducers
const INITIAL_STATE = {
  data: [],
};

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCESS:
      return { ...state, data: action.payload.data };
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
