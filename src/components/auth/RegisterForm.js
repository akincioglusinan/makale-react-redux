import React from 'react'
import { useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap'


const RegisterForm = (props) => {

    const [error, setError] = useState("");
    const[pwdcheck, setPwdCheck]=useState("");
    const [user, setUser] = useState(
        {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    )

    const handleOnChange = (e) => {
        //console.log(typeof e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        //console.log(e.target.value, e.target.name, article)
    }

    const setPwd=(e)=>{
        setPwdCheck(e.target.value);
    }

    const checkPwd = (e) => {
        e.preventDefault();
        setPwdCheck(e.target.value);
        user.password === pwdcheck ? setError('') : setError("Parolalar birbirinden farklı");
        console.log(error);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (error == '') {
            props.onRegister(user);
        }
        else {
            alert(error);
        }
    }
    
    return (
        <>
            <br></br>
            <Form onSubmit={handleRegister}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Ad *</Form.Label>
                        <Form.Control placeholder="Adınız" name="firstname" value={user.firstname}
                            onChange={handleOnChange} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label >Soyad *</Form.Label>
                        <Form.Control placeholder="Soyadınız" name="lastname" value={user.lastname}
                            onChange={handleOnChange} required />
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="Email adresiniz" name="email" value={user.email}
                            onChange={handleOnChange} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Parola *</Form.Label>
                        <Form.Control type="password" placeholder="Parolanız" name="password" value={user.password}
                            onChange={handleOnChange} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Parola Tekrarı *</Form.Label>
                        <Form.Control type="password" value={pwdcheck} placeholder="Parolanızı tekrar giriniz" name="passwordcheck"
                            onChange={setPwd} onBlur={checkPwd} required />
                        <div className="text-center">
                            {error && <Alert variant="danger"><p><b>{error}</b></p></Alert>}
                        </div>
                    </Form.Group>
                </Form.Row>


                {/* <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row> */}

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Kullanıcı sözleşmesini kabul ediyorum." />
                </Form.Group>
                <Form.Group className="justify-content-end">

                    <Button type="submit" className="btn btn-primary" block>
                        Kayıt Ol
                </Button>

                </Form.Group>
            </Form>
        </>
    )
}

export default RegisterForm
