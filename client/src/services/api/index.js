import axios from "axios";
const API_ROOT = "/api";
// const API_YNAB = "api.youneedabudget.com/v1";

const responseBody = response => response.data;

let server = axios.create({
  baseURL: API_ROOT
});

// let ynab = axios.create({
//   baseURL: API_YNAB
// });
// let token = null;
// // request header
// server.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     if (token) {
//       config.headers = { Authorization: token };
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// const ynabRequests = {
//   del: url => ynab.del(`${url}`),
//   get: url => ynab.get(`${url}`),
//   put: (url, body) => ynab.put(`${url}`, body),
//   post: (url, body) => ynab.post(`${url}`, body)
// };

const serverRequests = {
  del: url => server.del(`${url}`).then(responseBody),
  get: url => server.get(`${url}`).then(responseBody),
  put: (url, body) => server.put(`${url}`, body).then(responseBody),
  post: (url, body) => server.post(`${url}`, body).then(responseBody)
};

const Auth = {
  profile: () => serverRequests.get("/profile"),
  login: user => serverRequests.post("/login", user),
  loginGoogle: user => serverRequests.post("/login/google", user),
  register: user => serverRequests.post("/user",  user ),
  save: user => serverRequests.put("/user", user )
};

const Account = {
  getAll: () => serverRequests.get("/account"),
  get: account => serverRequests.get(`/account/${account}`)
};

const Transaction = {
  getAll: page => serverRequests.get(`/transaction`),
  del: id => serverRequests.del(`/transaction/${id}`),
  get: id => serverRequests.get(`/transaction/${id}`),
  unfavorite: id => serverRequests.del(`/transaction/${id}/favorite`),
  update: transaction =>
    serverRequests.put(`/transaction/${transaction}`, {
      transaction
    }),
  create: article => serverRequests.post("/transaction", { article })
};

const User = {
  delete: id => serverRequests.del(`/user/${id}`),
  get: id => serverRequests.get(`/user/${id}`),
  getAll: () => serverRequests.get(`/user`).then(responseBody)
};

export default{
  Auth,
  User,
  Transaction,
  Account
  // setToken: _token => {
  //   token = _token;
  // }
};
