import axios from "axios";
const API_ROOT = "/api";

const responseBody = response => response.data;

const server = axios.create({
  baseURL: API_ROOT
});
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJlc3RhZG8iOnRydWUsImdvb2dsZSI6ZmFsc2UsIl9pZCI6IjVjNGJkNGMzOTBkNjQxMTkxMzc1Y2Q3YyIsIm5vbWJyZSI6ImFuZHJlcyBmZWxpcGUiLCJlbWFpbCI6ImFuZHJlc0BnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE1NTA0OTA3MzksImV4cCI6MTU1MDY2MzUzOX0.XCB9Tuyczz7FQ4oeaKNTgWxjo2gcv0CPxwF_8QX6rIc";
const headers = { token };
const serverRequests = {
  del: url => server.del(`${url}`, { headers }).then(responseBody),
  get: url => server.get(`${url}`, { headers }).then(responseBody),
  put: (url, body) =>
    server.put(`${url}`, body, { headers }).then(responseBody),
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
  Transaction
};
