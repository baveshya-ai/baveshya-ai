import { useState } from "react";
import { data as mockData } from "./mockData";

export const RmReview = () => {
  const [button, setButton] = useState(false);
  const [approved, setApproved] = useState("");
  const NWB = [1.0, 0.0];
  const securityReleasedData = mockData.filter((d) => d.secId === 6546528);
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
          {securityReleasedData.map((d, i) => (
            <tr key={i}>
              <td>
                {JSON.stringify(d.brand) === JSON.stringify(NWB)
                  ? "NWB"
                  : "RSB"}
              </td>
              <td>{d.sortCode}</td>
              <td>{d.accountNumber}</td>
              <td>{d.bin}</td>
              <td>{d.isAccountClosed === 0 ? "Yes" : "No"}</td>
              <td>{d.isAccountLinkedToRmp === 0 ? "No" : "Yes"}</td>
              <td>{d.secId}</td>
              <td>{d.isAccountLinkedToBorrowing === 0 ? "No" : "Yes"}</td>
              <td>{d.isBorrowingRepaid === 0 ? "No" : "Yes"}</td>
              <td>
                {d.accType === 3
                  ? "Prop/Deb/Misc/Agri"
                  : "GTEE/LifePolicy/Boats/Charge on cash/Steps on Rights"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setButton(true)}
      >
        Make Decision
      </button>
      {button && (
        <div className="flex">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setApproved("The Security is good to be released")}
          >
            Approve
          </button>
          <div className="decision">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setApproved("The Security is kept on hold")}
            >
              Hold
            </button>
          </div>
        </div>
      )}
      <div className="text">
        <b>{approved}</b>
      </div>
    </>
  );
};
