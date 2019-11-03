import config from 'config';
import {history} from "../_helpers";

export const trackerService = {
  addTracker
};

function addTracker(tracker) {
  tracker.startDate = tracker.startDate|| "2019-06-13";
  tracker.endDate = tracker.endDate|| "2019-06-17";
  tracker.instaUserNameFilters = tracker.instaUserNameFilters||"";
  tracker.twitterUserNameFilters = tracker.twitterUserNameFilters||"";
  //let headers = new Headers();
  //headers.set('Authorization', 'Basic ' + createBasicAuthToken())
  console.log('tracker service');
  console.log(tracker);
  const requestOptions = {
    method: 'POST',
    headers:{ 'Content-Type': 'application/json' },
    body: JSON.stringify(tracker)
  };

  return fetch(`${config.add_tracker_url}`, requestOptions)
  .then(handleResponse)
  .then(response => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('response', JSON.stringify(response));

    return response;
  });
}

/*function createBasicAuthToken() {
  var user = localStorage.getItem('user');
  console.log(user)
  return 'Basic ' + window.btoa(user.username + ":password" )
}*/

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        history.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}