import { useState } from "react";
import { data } from "./mockData";

export const LoginPage = () => {
  const submitToModel = async () => {
    let arr: any = [];
    const [security, setSecurity] = useState([]);
    try {
      data.map(async (d) => {
        const res = await fetch(
          "https://securityapi.free.beeceptor.com/security",
          {
            method: "POST",
            body: JSON.stringify(d),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const promise = res.json();
        const result = await promise.then((d) => d[0]);
        const securityData = { id: d.bin, release: result };
        console.log(securityData);
        arr.push(securityData);
        setSecurity(arr);
      });
    } catch (erro) {
      console.log(erro);
    }
  };
  return (
    <>
      <table id="example" className="table table-striped">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Sort Code</th>
            <th>Account number</th>
            <th>BIN</th>
            <th>Account closure status</th>
            <th>Account linked to sec in RMP status</th>
            <th>Sec ID</th>
            <th>Security linkage to other active borrowing status</th>
            <th>Linked borrowing Repayment status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.brand}</td>
              <td>{d.sortCode}</td>
              <td>{d.accountNumber}</td>
              <td>{d.bin}</td>
              <td>{d.isAccountClosed === 0 ? "No" : "Yes"}</td>
              <td>{d.isAccountLinkedToRmp === 0 ? "No" : "Yes"}</td>
              <td>{d.secId}</td>
              <td>{d.isAccountLinkedToBorrowing === 0 ? "No" : "Yes"}</td>
              <td>{d.isBorrowingRepaid === 0 ? "No" : "Yes"}</td>
              <td>{d.accType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={submitToModel}
          data-mdb-ripple-init
        >
          Submit
        </button>
      </div>
    </>
  );
};
