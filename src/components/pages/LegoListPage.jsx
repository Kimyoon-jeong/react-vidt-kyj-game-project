import React, { useEffect, useState } from "react";
import axios from "axios";

const LegoListPage = () => {
  const [boards, setBoards] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const url = `https://sample.bmaster.kro.kr/contacts?pageno=${pageNo}&pagesize=${pageSize}`;

  useEffect(() => {
    console.log("useEffect");
    initBoards();
  }, [pageNo]);

  const initBoards = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setBoards(response.data.contacts);
        setTotalPages(response.data.totalPages || 10);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteBoard = (e) => {
    const { value } = e.target;
    setBoards(boards.filter((board) => board.no !== value));
  };

  const handlePageChange = (newPageNo) => {
    if (newPageNo >= 1 && newPageNo <= totalPages) {
      setPageNo(newPageNo);
    }
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">게시판</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>사진</th>
                    <th className="text-center">삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {boards && //null check
                    boards.map((board) => (
                      <tr key={board.no}>
                        <td>{board.no}</td>
                        <td>{board.name}</td>
                        <td>{board.tel}</td>
                        <td>{board.address}</td>
                        <td>
                          <img src={board.photo} alt="board" />
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-success"
                            value={board.no}
                            onClick={deleteBoard}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="pagination justify-content-center">
              <button
                className="btn btn-primary"
                disabled={pageNo < 2}
                onClick={() => handlePageChange(pageNo - 1)}
              >
                이전
              </button>
              <span className="mx-2">
                {pageNo} / {totalPages}
              </span>
              <button
                className="btn btn-primary"
                disabled={pageNo === totalPages}
                onClick={() => handlePageChange(pageNo + 1)}
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegoListPage;
