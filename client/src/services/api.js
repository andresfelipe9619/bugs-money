const API_ROOT = "/api/";

function callApi(endpoint) {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => ({ error: error.message || "Something bad happened" }));
}

// api services
export const fetchUsers = () => callApi(`user/`);
export const fetchTransactions = () => callApi(`transactions/`);
