import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import CategoryList from './CategoryList'


const Categories = () => {
    return (
        <>
         <Container fluid className="bg-secondary">
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <CategoryList />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                     {/* <Category id="1" /> */}
                    </Col> 
                </Row>

            </Container>
        </>
    )
}

export default Categories
