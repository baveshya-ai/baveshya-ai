import {
  Col,
  Row,
  FormGroup,
  Label,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap";

export const LoginPage = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <span className="details">Decision</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <FormGroup row>
                <div className="field">
                  <Label for="label1" sm={6} className="label">
                    Label 1
                  </Label>
                </div>
                <div className="field">
                  <Col sm={6}>
                    <select name="label1" id="label1" className="label">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </Col>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup row>
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
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup row>
                <div className="field">
                  <Label for="label3" sm={6} className="label">
                    Label 3
                  </Label>
                </div>
                <Col sm={6}>
                  <div className="field">
                    <select name="label2" id="label3" className="label">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Button onClick={() => {}}>Confirm</Button>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
