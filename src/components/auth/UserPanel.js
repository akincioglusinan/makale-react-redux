import React, { useState } from 'react'
import { Tabs, Tab, Card, Container, Row, Col, ListGroup } from 'react-bootstrap'
import Login from './Login';
import Register from './Register';
import { login, logout } from "../../actions/auth";
import { useDispatch, useSelector } from 'react-redux';
import moduleName2 from '../../assets/img/2.jpg'



const UserPanel = () => {
  const [key, setKey] = useState('register');
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  const handleLogin = (email, password) => {
    dispatch(login(email, password));
  }

  const logOut = () => {
    dispatch(logout());
  }


  return (<>
    {!user.isLoggedIn ?
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
                  <Login {...user}
                    onSubmit={handleLogin}
                  />
                </Tab>
                <Tab eventKey="register" title="Yazar Ol">
                  <Register />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </Card>
      :
      <Card>
        <Card.Img variant="top" src={moduleName2}></Card.Img>
        <Card.Body className="text-center">
          <Card.Title className="text-center">{user.firstname} {user.lastname}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <ListGroup className="list-group-flush text-center">
            <ListGroup.Item action variant="primary">Mesajlar</ListGroup.Item>
            <ListGroup.Item action variant="primary">Makaleler</ListGroup.Item>
            <ListGroup.Item action variant="primary">Ayarlar</ListGroup.Item>
            <ListGroup.Item action variant="danger" onClick={logOut}>Çıkış</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    }
  </>
  );
}

export default UserPanel