import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, NavLink, Row } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeCart, setCart } from '../../actions/cart';
import { getArticles } from '../../actions/articles'
import ArticleListItem from '../articles/ArticleListItem';
import { Link } from 'react-router-dom';

const CartHeader = () => {
    const [show, setShow] = useState(false);
    const cartinfo = useSelector((state) => state.cart);
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { userId } = user.user || 0;

    useEffect(() => {
        if (userId != 0)
            dispatch(getCart(userId));
    }, [])

    const showDropdown = (e) => {
        if (cartinfo.cart.length != 0)
            setShow(!show);
    }
    const hideDropdown = () => {
        setShow(false);
    }
    const handleDelete=(e) =>{
        const id=e.target.value;
        dispatch(removeCart(id))
    }
    return (
        <Form inline className="justify-content-center mr-3" >
            <div className="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <Row><Cart3 color="royalblue" size={35} /><p>({cartinfo.cart.length})</p></Row>
                <Dropdown.Menu className="dropdown-menu-right" show={show} >
                    {cartinfo.cart.map((article, index) => {
                        const wc = (article.content.match(/ /g) || []).length;
                        return <div key={index} >
                            <Dropdown.Item >
                                <Row><Col sm={8} className="">{article.title}</Col></Row>
                                <Row> <Col sm={10}>{wc * .5} TL</Col> <Col sm={2} ><Button variant="danger" size="sm" onClick={()=>{dispatch(removeCart(article.cart.id))} }>x</Button></Col></Row>
                            </Dropdown.Item>
                            <Dropdown.Divider /> </div>
                    })}
                    <div className="text-right mx-2">
                        <Link className="btn btn-danger" to="/cart" >Sepete Git </Link></div>
                </Dropdown.Menu>
            </div>
        </Form>
    )
}

export default CartHeader
