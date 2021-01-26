import React, { useState } from 'react'
import { Tabs, Tab, Card, Container, Row, Col } from 'react-bootstrap'
import Login from '../auth/Login';
import Register from '../auth/Register';

const UserPanel = () => {
  const [key, setKey] = useState('register');

  return (
    <Card border="light" className="bg-light">
      <Container>
        <Row>
          <Col>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mt-2"
          >
            <Tab eventKey="login" title="Giriş">
              <Login />
            </Tab>
            <Tab eventKey="register" title="Yazar Ol">
              <Register />
            </Tab>
          </Tabs>
          </Col>
          </Row>
      </Container>
    </Card>
  );
}

export default UserPanel