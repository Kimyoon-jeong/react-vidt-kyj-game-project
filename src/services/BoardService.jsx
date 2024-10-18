import http from "./HttpCommon";

const getPagingList = (path = "/boards/list", search = "") => {
  return http.get(path + search);
};

const remove = (id) => {
  return http.delete(`boards/${id}`); //"boards/" + id 같음
};

const write = (data) => {
  return http.post(`/boards/`, data);
};

//글번호에 맞는 게시판 글 가져오기
const get = (id) => {
  return http.get(`boards/${id}`); //"boards/" + id 같음
};

const update = (data) => {
  return http.put(`/boards/`, data);
};

export default {
  getPagingList,
  remove,
  write,
  get,
  update,
};
