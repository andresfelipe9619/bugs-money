import axios from "axios";
const API_ROOT = "/api";

const responseBody = response => response.data;

let server = axios.create({
  baseURL: API_ROOT
});

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
  register: user => serverRequests.post("/user", user),
  save: user => serverRequests.put("/user", user)
};

const Account = {
  getAll: () => serverRequests.get("/account"),
  get: account => serverRequests.get(`/account/${account}`)
};

const Transaction = {
  getAll: () => serverRequests.get(`/transaction`),
  del: id => serverRequests.del(`/transaction/${id}`),
  get: id => serverRequests.get(`/transaction/${id}`),
  unfavorite: id => serverRequests.del(`/transaction/${id}/favorite`),
  update: transaction =>
    serverRequests.put(`/transaction/${transaction}`, {
      transaction
    }),
  create: transaction => serverRequests.post("/transaction", { transaction })
};

const User = {
  delete: id => serverRequests.del(`/user/${id}`),
  get: id => serverRequests.get(`/user/${id}`),
  getAll: () => serverRequests.get(`/user`).then(responseBody)
};

export default {
  Auth,
  User,
  Transaction,
  Account
};
