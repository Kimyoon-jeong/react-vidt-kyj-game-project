import React, { useEffect, useState } from "react";
import empService from "../../services/EmpService";
import { Link } from "react-router-dom";

const EmpListPage = () => {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    console.log("use Effective 실행");
    initEmps();
  }, []);

  const initEmps = () => {
    empService
      .getPagingList()
      .then((response) => {
        console.log(response);
        setEmps(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEmp = (e) => {
    const { value } = e.target;
    setEmps(emps.filter((emp) => emp.empno !== Number(value)));
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">emp 리스트</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">emp 리스트</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>사원번호</th>
                    <th>사원이름</th>
                    <th>직업</th>
                    <th>매니저</th>
                    <th>입사일자</th>
                    <th>급여</th>
                    <th>보너스</th>
                    <th>부서번호</th>
                    <th className="text-center">삭제</th>
                  </tr>
                </thead>

                <tbody>
                  {emps &&
                    emps.map((emp) => (
                      <tr key={emp.empno}>
                        <td>{emp.empno}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.job}</td>
                        <td>{emp.mgr}</td>
                        <td>{emp.hiredate}</td>
                        <td>{emp.sal}</td>
                        <td>{emp.comm}</td>
                        <td>{emp.deptno}</td>

                        <td className="text-center">
                          <button
                            className="btn btn-success"
                            value={emp.empno}
                            onClick={deleteEmp}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid -->);
  );
};

export default EmpListPage;
