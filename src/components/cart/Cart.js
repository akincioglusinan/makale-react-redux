import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeCart, setCartList } from '../../actions/cart';
import { getArticles } from '../../actions/articles'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import CartList from './CartList';
import CartHeader from './CartHeader';

const Cart = (props) => {
    const user = useSelector(state => state.auth);   
    const cartinfo = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { userId } = user.user || 0;


    useEffect(() => {
        console.log("effect")
        dispatch(getCart(userId));   
    }, [])

    return (
        <div className="bg-secondary">
            <Container >
                <Row>
                    <Col>
                        <Jumbotron className="my-2">
                            <CartList {...cartinfo} onClick={(id)=>{dispatch(removeCart(id))}} />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
