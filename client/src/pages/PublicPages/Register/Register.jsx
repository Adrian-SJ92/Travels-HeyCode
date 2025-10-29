import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {
  return (
    <section>
      <Container>
        <Row className='pt-5 d-flex align-items-center' >
          <Col md={12} lg={6}>
          <div>
            <img src="/assets/images/travel-register.jpg" alt="imagen-registro" />
          </div>
          </Col>
          <Col md={12} lg={6}>
            <Form>
              <fieldset disabled>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Disabled input
                  </Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Disabled input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">
                    Disabled select menu
                  </Form.Label>
                  <Form.Select id="disabledSelect">
                    <option>Disabled select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Can't check this"
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </fieldset>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
