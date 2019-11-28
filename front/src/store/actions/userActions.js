import axios from "axios";

export const logUser = function(user) {
  return {
    type: "LOG_USER",
    user
  };
};

export const logoutUser = function() {
  return {
    type: "LOG_OUT"
  };
};

export const login = function(userData) {
  return function(dispatch) {
    if (!userData.password.length) throw Error("No password");
    return axios.post("api/user/login", userData).then(({ data }) => {
      dispatch(logUser(data));
    });
  };
};

export const logout = function(user) {
  return function(dispatch) {
    return axios
      .post("api/user/logout", { email: user.email, password: user.password })
      .then(() => {
        dispatch(logout());
      });
  };
};
