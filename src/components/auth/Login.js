import React from 'react'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email || password) {
            props.onSubmit(email, password);
        }
        else {
            setError("Tüm alanları doldurunuz.");
        }
    }

    return (
        <>
        <div>
        <br></br>
            <Form className="bg-light" onSubmit={handleLogin} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
              value={email}
              onChange={onChangeEmail}
              validations="required"/>
                    <Form.Text className="text-muted">
                        Email adresiniz asla başka kurumlarla paylaşılmaz.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
              value={password}
              onChange={onChangePassword}
              validations="required" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="justify-content-end">
                    <Form.Text>{error && error}</Form.Text>
                <Button type="submit" className="btn btn-primary" onClick={props.onHide} block>
                    Giriş
                </Button>
                </Form.Group>
               
            </Form>
            </div>
        </>
    )
}

export default Login
