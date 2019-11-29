const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LIST_COMPANY":
      return Object.assign({}, state, {
        list: action.companies
      });
    default:
      return state;
  }
};
