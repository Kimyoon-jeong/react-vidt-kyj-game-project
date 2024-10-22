import React, { useState } from "react";
import axios from "axios";

const PrepareListPage = () => {
  const [prepare, setPrepare] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://sample.bmaster.kro.kr/contacts?pageno=1&pagesize=10"
      );
      setPrepare(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteBoard = async (e) => {
    const { value } = e.target;
    console.log("Deleting record with ID:", value);

    try {
      // Assuming the DELETE endpoint is like this, adjust it as needed
      await axios.delete(`https://sample.bmaster.kro.kr/contacts/${value}`);
      // After deletion, fetch the updated data
      const response = await axios.get(
        "https://sample.bmaster.kro.kr/contacts?pageno=1&pagesize=10"
      );
      setPrepare(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      <div className="container mt-3">
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">연습</h1>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Example</h6>
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
                    {prepare && prepare.length > 0 ? (
                      prepare.map((p) => (
                        <tr key={p.no}>
                          <td>{p.no}</td>
                          <td>{p.name}</td>
                          <td>{p.tel}</td>
                          <td>{p.address}</td>
                          <td>
                            <img
                              src={p.photo}
                              alt={p.name}
                              width="50"
                              height="50"
                            />
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-danger"
                              value={p.no}
                              onClick={deleteBoard}
                            >
                              삭제
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          데이터가 없습니다
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepareListPage;
