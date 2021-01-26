import React from 'react'
import {Card, Nav} from 'react-bootstrap'

const CategoryList = () => {
    return (
        <div>
            <Card className="my-2">
                <Card.Header>Kategoriler</Card.Header>
            <Nav.Link href="/category/1">Fizik</Nav.Link>
                <Nav.Link eventKey="/category/2">Matematik</Nav.Link>
            </Card>
        </div>
    )
}

export default CategoryList
