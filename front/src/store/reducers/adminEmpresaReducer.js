const initialState = {
  commissionEdit: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "COMMISSION_EDIT":
      return Object.assign({}, state, {
        commissionEdit: action.commission
      });
    default:
      return state;
  }
}
