import { data } from "./mockData";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export const LoginPage = () => {
  const submitToModel = async () => {
    let array: any = [];
    try {
      data.map(async (d) => {
        const payload = [
          d.isAccountClosed,
          d.isAccountLinkedToRmp,
          d.isAccountLinkedToBorrowing,
          d.isBorrowingRepaid,
          d.accType,
          d.brand[0].toFixed(1),
          d.brand[1].toFixed(1),
        ];
        const res = await fetch(
          "https://ml-ai-bave.free.beeceptor.com/status",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const promise = res.json();
        const result = await promise.then((d) => d.prediction);
        const securityData = { id: d.secId, release: result };
        array.push(securityData);
        console.log(array);
        array.map((a: any, index: any) =>
          a.prediction === 1 ? sessionStorage.setItem(index, a.id) : null
        );

        sendEmail();
      });
    } catch (erro) {
      console.log(erro);
    }
  };
  useEffect(() => emailjs.init("iA9GMH_4_xuwY2HtJ"), []);
  const serviceId = "service_asdriw4";
  const templateId = "template_qc6o38i";
  const sendEmail = () => {
    var templateParams = {
      securityId: "6546528",
      message: "http:localhost:5173/review/6546528",
    };
    emailjs.send(serviceId, templateId, templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };
  const NWB = [1.0, 0.0];
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
