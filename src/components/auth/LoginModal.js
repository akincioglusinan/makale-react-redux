import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { login} from "../../actions/auth";

const MyVerticallyCenteredModal=(props) =>{
    const dispatch = useDispatch();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="">
            Giriş Yap
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  border="light" className="bg-light">
          <LoginForm onSubmit={(email, password)=>{dispatch(login(email, password))}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" className="btn btn-danger" onClick={props.onHide}>Kapat</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const LoginModal=() => {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
          Giriş Yap
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
 export default LoginModal