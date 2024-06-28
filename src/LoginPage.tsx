import { data } from "./mockData";
import { EmailPage } from "./EmailPage";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export const LoginPage = () => {
  const submitToModel = async () => {
    let arr: any = [];
    try {
      data.map(async (d) => {
        const res = await fetch(
          "https://mlaiserver.free.beeceptor.com/status",
          {
            method: "POST",
            body: JSON.stringify(d),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const promise = res.json();
        const result = await promise.then((d) => d.predict);
        const securityData = { id: d.bin, release: result };
        arr.push(securityData);
        console.log(arr);
        sendEmail();
      });
    } catch (erro) {
      console.log(erro);
    }
  };
  useEffect(() => emailjs.init("iA9GMH_4_xuwY2HtJ"), []);
  const serviceId = "service_asdriw4";
  const templateId = "template_qc6o38i";
  var templateParams = {
    from_name: "Security",
    to_name: "RM 1",
    message: "http://localhost:5173/",
  };
  const sendEmail = () => {
    emailjs.send(serviceId, templateId, templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
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
      {/* <EmailPage /> */}
    </>
  );
};
