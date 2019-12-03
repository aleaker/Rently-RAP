const ADD_SALESPERSON = "ADD_SALESPERSON";

const initialState = {
};

export function addVendoReducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_SALESPERSON:
      return {
        ...state,
        salesperson: actions.payload
      };

    default:
      return state;
  }
}