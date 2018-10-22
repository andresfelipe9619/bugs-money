import axios from "axios";
const API_ROOT = "/api/";
const responseBody = res => {
  console.log(res);
  return res;
};
let instance = axios.create({
  baseURL: API_ROOT
});
// let token = null;
// // request header
// instance.interceptors.request.use(
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

const requests = {
  del: url => instance.del(`${url}`),
  get: url => instance.get(`${url}`),
  put: (url, body) => instance.put(`${url}`, body),
  post: (url, body) => instance.post(`${url}`, body)
};

const Auth = {
  profile: () => requests.get("/profile"),
  login: (email, password) =>
    requests.post("/user/login", { user: { email, password } }),
  register: (email, password) =>
    requests.post("/user", { user: { email, password } }),
  save: user => requests.put("/user", { user })
};

const Account = {
  getAll: () => requests.get("/account"),
  get: account => requests.get(`/account/${account}`)
};

const Transaction = {
  getAll: page => requests.get(`/transaction`),
  del: id => requests.del(`/transaction/${id}`),
  get: id => requests.get(`/transaction/${id}`),
  unfavorite: id => requests.del(`/transaction/${id}/favorite`),
  update: transaction =>
    requests.put(`/transaction/${transaction}`, {
      transaction
    }),
  create: article => requests.post("/transaction", { article })
};

const User = {
  delete: id => requests.del(`/user/${id}`),
  get: id => requests.get(`/user/${id}`),
  getAll: () => requests.get(`/user`)
};

export default {
  Auth,
  User,
  Transaction,
  Account,
  // setToken: _token => {
  //   token = _token;
  // }
};
