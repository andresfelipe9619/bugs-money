import axios from "axios";
const API_ROOT = "/api";

const server = axios.create({
  baseURL: API_ROOT
});

let token = null;

const tokenPlugin = config => {
  if (token) {
    console.log("set that token", token);
    config.headers["token"] = token;
  }
  console.log("set that token after");
  return config;
};

const responseBody = response => response.data;

server.interceptors.request.use(tokenPlugin, e => Promise.reject(e));

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
  update: user => serverRequests.put("/user", user)
};

const Account = {
  getAll: () => serverRequests.get("/account"),
  get: account => serverRequests.get(`/account/${account}`)
};

const Transaction = {
  getAll: () => serverRequests.get(`/transaction`),
  del: id => serverRequests.del(`/transaction/${id}`),
  get: id => serverRequests.get(`/transaction/${id}`),
  update: transaction =>
    serverRequests.put(`/transaction/${transaction.id}`, {
      transaction
    }),
  create: transaction => serverRequests.post("/transaction", { transaction })
};

const Budget = {
  getAll: () => serverRequests.get(`/budget`),
  del: id => serverRequests.del(`/budget/${id}`),
  get: id => serverRequests.get(`/budget/${id}`),
  update: budget =>
    serverRequests.put(`/budget/${budget.id}`, {
      budget
    }),
  create: budget => serverRequests.post("/budget", { budget })
};

const User = {
  delete: id => serverRequests.del(`/user/${id}`),
  get: id => serverRequests.get(`/user/${id}`),
  getAll: () => serverRequests.get(`/user`)
};

export default {
  Auth,
  User,
  Budget,
  Account,
  Transaction,
  setToken: _token => {
    token = _token;
  }
};
