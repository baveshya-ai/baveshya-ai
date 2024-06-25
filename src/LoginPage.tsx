import {
  Col,
  Row,
  Label,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap";

export const LoginPage = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch("/some-api", { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <>
      <Card>
        <CardHeader>
          <span className="details">Decision</span>
        </CardHeader>
        <CardBody>
          <form method="post" onSubmit={handleSubmit}>
            <Row>
              <div className="field">
                <Label for="label1" sm={6} className="label">
                  Label 1
                </Label>
              </div>
              <div className="field">
                {" "}
                <Col sm={6}>
                  <select name="label1" id="label1" className="label">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="field">
                <Label for="label2" sm={6} className="label">
                  Label 2
                </Label>
              </div>
              <Col sm={6}>
                <div className="field">
                  <select name="label2" id="label2" className="label">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="field">
                <Label for="label3" sm={6} className="label">
                  Label 3
                </Label>
              </div>
              <Col sm={6}>
                <div className="field">
                  <select name="label3" id="label3" className="label">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Button type="submit">Submit</Button>
            </Row>
          </form>
        </CardBody>
      </Card>
    </>
  );
};
