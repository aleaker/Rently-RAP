import axios from "axios";

export const logUser = function(user) {
  return {
    type: "LOG_USER",
    user
  };
};

export const logoutUser = function() {
  return {
    type: "LOGOUT_USER"
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
      .get("api/user/logout", { email: user.Email, password: user.Password })
      .then(() => {
        dispatch(logoutUser());
      });
  };
};
export const fetchUser = function() {
  return function(dispatch) {
    return axios
      .get("api/user")
      .then(user => {
        dispatch(logUser(user.data));
      })
      .catch(error => dispatch(logoutUser()));
  };
};
