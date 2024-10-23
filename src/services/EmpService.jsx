import http from "./HttpCommon";

const getPagingList = (path = "/emps/list", search = "") => {
  return http.get(path + search);
};

const remove = (empno) => {
  return http.delete(`emps/${empno}`);
};

export default {
  getPagingList,
  remove,
};
