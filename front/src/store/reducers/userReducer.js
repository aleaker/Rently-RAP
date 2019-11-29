export default function(state = {}, action) {
  switch (action.type) {
    case "LOG_USER":
      return Object.assign({}, state, action.user);
    case "LOGOUT_USER":
      return Object.assign({}, state, {});

    default:
      return state;
  }
}
