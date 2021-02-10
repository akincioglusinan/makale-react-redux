import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import { PersonPlus } from 'react-bootstrap-icons';
import ArticleListItem from '../articles/ArticleListItem';

const CartList = (props) => {
    // useEffect(() => {
    //     console.log("effect")
    //     //dispatch(getCart(userId));   
    // }, [])
    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.value;
        props.onClick(id);
    }
    console.log(props)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Makale Adı</th>
                    <th>Kelime Sayısı</th>
                    <th>Yazar Adı</th>
                    <th>Fiyat</th>
                    <th>Sil</th>
                </tr>
            </thead>
            <tbody>
                {props.cart.map((article, index) => {
                    const wc = (article.content.match(/ /g) || []).length;
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td><ArticleListItem key={article.cart} {...article}  {...article.cart} /></td>
                        <td>{wc}</td>
                        <td>{article.userId}</td>
                        <td>{wc * .5} TL</td>
                        <td><Button variant="danger" value={article.cart && article.cart.id} onClick={handleDelete}>X</Button></td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default CartList
