import { Button } from "reactstrap";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export const EmailPage = () => {
  useEffect(() => emailjs.init("iA9GMH_4_xuwY2HtJ"), []);
  const serviceId = "service_asdriw4";
  const templateId = "template_qc6o38i";
  var templateParams = {
    from_name: "Security",
    to_name: "RM 1",
    message: "Check this out!",
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
  return <Button onClick={sendEmail}>send</Button>;
};
