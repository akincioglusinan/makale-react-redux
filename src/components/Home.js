import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import BodyJumbotron from './home/BodyJumbotron'
import UICarousel from './home/UICarousel'
import ListGroupRight from './home/ListGroupRight'
import BodyCardDeck from './home/BodyCardDeck'
import UserPanel from './home/UserPanel'

const Home = () => {
    return (
        <div className="bg-secondary">
            <Container fluid>
                <Row >
                    <Col lg={3} className="p-3 order-lg-3, p-3 order-xl-3, p-3 order-sm-3"><UserPanel /></Col>
                    <Col lg={6} className=" p-2 order-lg-1, p-2 order-xl-1, p-2 order-sm-1"><UICarousel /></Col>
                    <Col lg={3} className=" p-2 order-lg-2, p-2 order-xl-2, p-2 order-sm-2"><ListGroupRight /></Col>
                </Row>
                <Row>
                    <Col sm={12}><BodyJumbotron /></Col>
                </Row>
                <Row>
                    <Col sm={12}><BodyCardDeck /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
