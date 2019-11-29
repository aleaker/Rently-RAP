export default function(state = {}, action) {
  switch (action.type) {
    case "LOG_USER":
      return action.user;
    case "LOGOUT_USER":
      return {};

    default:
      return state;
  }
}
