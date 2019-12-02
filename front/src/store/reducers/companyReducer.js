const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LIST_COMPANY":
      return Object.assign({}, state, {
        list: action.companies
      });
    case "DELETE_COMPANY":
      return Object.assign({}, state, {
        list: state.list.filter(company => company._id !== action.companyId)
      });
    default:
      return state;
  }
};
