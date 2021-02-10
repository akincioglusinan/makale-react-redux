
import React from 'react'
import { useState } from 'react';
import { Form, Dropdown, SplitButton, Title } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import LoginModal from './LoginModal';

const LoginHeader = () => {
    const user = useSelector(state => state.auth);
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const setUserCircle=()=>{
        return <>
        <PersonCircle color="royalblue" size={25} /> { user.user.firstName + user.user.lastName}
        </>
    }

    const dispatch = useDispatch();
    console.log(user)

    return (
        <>{user.isLoggedIn
            ?
            <Form inline className="ml-2 mr-2">
                <SplitButton
                    className="bi bi-person-circle"
                    menuAlign={{ lg: 'right' }}
                    title={setUserCircle()}
                    variant="outline-primary"
                    id="collasible-nav-dropdown" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown} >
                    <Dropdown.Item eventKey="1">Mesajlar</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Makalelerim</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Ayarlar</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="bg red" eventKey="2" onClick={() => { dispatch(logout()); }}>Çıkış</Dropdown.Item>
                </SplitButton>

            </Form>
            :
            <Form inline className="ml-2">
                <LoginModal {...user} />
            </Form>

        }

        </>
    )
}

export default LoginHeader
