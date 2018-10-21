import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// proxy localhost:5000
const API_ROOT = '/api/';

const responseBody = (res) => res.body;

// const requests = {
//   del: (url) => superagent.del(`${API_ROOT}${url}`).then(responseBody),
//   get: (url) => superagent.get(`${API_ROOT}${url}`).then(responseBody),
//   put: (url, body) =>
//     superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
//   post: (url, body) =>
//     superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
// };

function callApi(endpoint) {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .catch((error) => ({error: error.message || 'Something bad happened'}));
}

// api services
export const fetchUsers = () => callApi(`users/`);
export const fetchTransactions = () => callApi(`transactions/`);
