import http from "./HttpCommon";

const getPagingList = (path = "/boards/list", search = "") => {
  return http.get(path + search);
};

const remove = (id) => {
  return http.delete(`boards/${id}`); //"boards/" + id 같음
};

export default {
  getPagingList,
  remove,
};
