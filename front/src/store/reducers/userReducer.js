export default function(state = null, action) {
  switch (action.type) {
    case "LOG_USER":
      return action.user;
    case "LOGOUT_USER":
      return null;

    default:
      return state;
  }
}
