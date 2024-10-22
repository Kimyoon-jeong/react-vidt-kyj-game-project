import http from "./HttpCommon";

const getPagingList = (path = "/prepares/list", search = "") => {
  return http.get(path + search);
};

const remove = (no) => {
  return http.delete(`prepares/${no}`); //"boards/" + id 같음
};

const write = (data) => {
  return http.post(`/prepares/`, data);
};

//글번호에 맞는 게시판 글 가져오기
const get = (no) => {
  return http.get(`prepares/${no}`); //"boards/" + id 같음
};

const update = (data) => {
  return http.put(`/prepares/`, data);
};

export default {
  getPagingList,
  remove,
  write,
  get,
  update,
};
