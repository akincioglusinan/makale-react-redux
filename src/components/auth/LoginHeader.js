
import React from 'react'
import { Form, Dropdown, SplitButton } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';

const LoginHeader = () => {
    const user = useSelector(state => state.auth);
   //console.log(user)
    return (
        <>{user.isLoggedIn
            ?
            <Form inline className="ml-2 mr-2">
                    <SplitButton
                        menuAlign={{ lg: 'right' }}
                        title={user.user.firstName + " " + user.user.lastName}
                        id="dropdown-menu-align-responsive-2"
                        variant="outline-primary"
                    >
                        <Dropdown.Item eventKey="1">Mesajlar</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Makalelerim</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Ayarlar</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="bg red" eventKey="2">Çıkış</Dropdown.Item>
                    </SplitButton>

            </Form>
            :
            <Form inline className="ml-2">
                <LoginModal {...user}/>
            </Form>

        }

        </>
    )
}

export default LoginHeader
