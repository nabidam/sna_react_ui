import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  logout,
  getAll
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: username,
        password: password,
        submitted: true
      })
    );
    dispatch(
      success({ username: username, password: password, submitted: true })
    );
    history.push("/");
    // userService.login(username, password)
    //     .then(
    //         user => {
    //             dispatch(success(user));
    //             history.push('/');
    //         },
    //         error => {
    //             dispatch(failure(error));
    //             dispatch(alertActions.error('مشخصات اشتباه وارد شده و یا کاربر غیرفعال است.'));
    //         }
    //     );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    console.log("userservice.response:");
    console.log(users);
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    console.log("userservice.errorresponse:");
    console.log(error);
    return { type: userConstants.GETALL_FAILURE, error };
  }
}
