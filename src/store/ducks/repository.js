// Types

export const Types = {
  ADD_REQUEST: 'repository/ADD_REQUEST',
  ADD_SUCESS: 'repository/ADD_SUCESS',
};

// Reducers
const INITIAL_STATE = [];

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return [...state, action.payload.data];

    default:
      return state;
  }
}

// Actions
export const Creators = {
  addRepositoryRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addRepositorySucess: data => ({
    type: Types.ADD_SUCESS,
    payload: { data },
  }),
};
